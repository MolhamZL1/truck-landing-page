# مرحلة البناء (Node)
FROM node:20-alpine AS builder
WORKDIR /app

# نثبّت الديبندنسيز بمرحلة مستقلة ليستفيد الكاش
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# ننسخ السورس
COPY . .

# 🔑 متغيّر لكسر الكاش بكل نشر
ARG BUILD_REVISION=1.1
RUN echo "REV=$BUILD_REVISION"

# Vite/CRA: نفس الأمر غالباً build
RUN npm run build

# مرحلة التقديم (Nginx)
FROM nginx:stable-alpine

# إعدادات Nginx للـ SPA (BrowserRouter)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# انسخ ملفات البناء (Vite يطلّعها عادةً بمجلد dist)
COPY --from=builder /app/dist /usr/share/nginx/html
# لو CRA علّق السطر السابق وفعّل التالي:
# COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
