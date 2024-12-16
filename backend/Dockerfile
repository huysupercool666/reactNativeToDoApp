# Sử dụng một image Node.js chính thức cho backend
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn backend vào thư mục làm việc
COPY . .

# Chỉ định cổng mà backend sẽ chạy
EXPOSE 3001

# Lệnh để chạy backend
CMD ["npm", "start"]