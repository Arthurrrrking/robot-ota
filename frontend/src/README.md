# Robot OTA Management System

一个功能完善的机器人OTA（Over-The-Air）管理系统，使用React + TypeScript + Tailwind CSS构建。

## 功能特性

- 📊 **仪表板** - 实时统计数据和图表展示
- 🤖 **机器人列表** - 完整的机器人设备管理和搜索
- 📦 **OTA更新** - 固件版本管理和部署
- 📈 **数据分析** - 性能监控和统计图表
- ⚙️ **系统设置** - 系统配置和偏好设置

## 技术栈

- React 18
- TypeScript
- Tailwind CSS v4
- Vite
- Recharts (图表库)
- Lucide React (图标库)

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173

## 构建部署

### 构建生产版本

```bash
npm run build
```

构建完成后，所有静态文件会生成在 `dist` 目录中。

### 预览生产构建

```bash
npm run preview
```

## 部署到服务器

### 方法1: 直接上传静态文件

1. 运行 `npm run build` 生成 `dist` 目录
2. 将 `dist` 目录中的所有文件上传到您的服务器
3. 配置Web服务器（如Nginx、Apache）指向这些文件

### 方法2: 使用Nginx部署

Nginx配置示例：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 方法3: 使用Docker部署

创建 `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

构建和运行：

```bash
docker build -t robot-ota-system .
docker run -p 80:80 robot-ota-system
```

## 项目结构

```
/
├── src/
│   ├── components/      # React组件
│   ├── styles/         # 样式文件
│   ├── App.tsx         # 主应用组件
│   └── main.tsx        # 应用入口
├── index.html          # HTML模板
├── package.json        # 依赖配置
├── tsconfig.json       # TypeScript配置
├── vite.config.ts      # Vite配置
└── README.md           # 项目说明
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License

---

© 2026 Robot Systems
