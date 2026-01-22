# 机器人OTA系统前后端分离框架实现计划

## 1. 目录结构设计
- 创建前后端分离的目录结构
  - `/frontend`：前端React项目目录
  - `/backend`：后端Spring Boot项目目录

## 2. 前端实现
- 将`front-resource`中的文件迁移到`/frontend`目录
- 使用Vite初始化React + TypeScript项目
- 配置前端项目依赖和构建脚本
- 修改RobotList组件，在Actions列添加两个按钮：
  - 上下线按钮：根据机器人当前状态切换在线/离线状态
  - 升级按钮：触发机器人固件升级

## 3. 后端实现
- 使用Spring Boot Initializr初始化后端项目
- 配置Spring Boot项目，包括：
  - Web依赖（Spring Web）
  - 数据库依赖（Spring Data JPA, MySQL Driver）
  - 安全性依赖（Spring Security）
  - 其他必要依赖

## 4. API设计
- 机器人管理API：
  - `GET /api/robots`：获取机器人列表
  - `GET /api/robots/{id}`：获取单个机器人详情
  - `PUT /api/robots/{id}/status`：更新机器人状态（上下线）
  - `POST /api/robots/{id}/upgrade`：触发机器人升级
- OTA更新API：
  - `GET /api/updates`：获取可用更新列表
  - `POST /api/updates`：上传新的固件版本

## 5. 数据库设计
- 基于RobotList组件的列信息，创建`robots`表：
  - 字段：id, name, model, version, status, last_seen, location
  - 生成测试数据

## 6. 安全性保障
- 实现JWT认证机制
- 添加API请求频率限制
- 实现CORS跨域配置
- 输入验证和防SQL注入
- 日志记录和监控

## 7. 前后端联调
- 前端配置API基础URL
- 实现机器人列表数据的前后端联调
- 实现上下线和升级功能的API调用

## 8. 测试与部署
- 测试API接口功能
- 测试前端页面交互
- 配置开发环境的启动脚本

## 9. 实现顺序
1. 创建目录结构
2. 初始化前端React项目
3. 初始化后端Spring Boot项目
4. 设计和创建数据库表
5. 实现后端API
6. 实现API安全性保障
7. 修改前端页面，添加按钮和API调用
8. 前后端联调测试

## 10. 技术栈
- 前端：React 18, TypeScript, Vite, Axios
- 后端：Spring Boot 3.x, Spring Security, Spring Data JPA, MySQL
- 安全：JWT, CORS, Rate Limiting
- 数据库：MySQL 8.x