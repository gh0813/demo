# 使用 node 镜像作为构建阶段
FROM node:alpine AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml 文件
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm
RUN npm install -g pnpm

# 使用 pnpm 安装依赖
RUN pnpm install

# 复制应用程序源代码
COPY . .

# 构建应用（假设有一个构建步骤）
RUN pnpm run build

# 使用 nginx 镜像作为第二阶段
FROM nginx:alpine

# 复制自定义的 Nginx 配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 复制构建后的应用文件到 Nginx 的默认静态文件目录
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

