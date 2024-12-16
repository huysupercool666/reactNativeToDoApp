# Sử dụng một image Node.js chính thức cho frontend
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn frontend vào thư mục làm việc
COPY . .

# Chỉ định cổng mà frontend sẽ chạy
EXPOSE 3000

# Lệnh để chạy frontend
CMD ["npm", "run", "dev"]