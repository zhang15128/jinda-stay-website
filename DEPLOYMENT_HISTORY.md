# 部署记录

这份文件记录可以从公网实际观测到的部署状态。它不伪造 Cloudflare 后台的部署时间、部署 ID 或 Git 提交关系；如果后台信息无法从当前环境确认，就明确标注为待补充。

## 2026-08-03 | Cloudflare 更新前公网快照

- 公网地址：<https://jinda-stay-demo.pages.dev/>
- 平台：Cloudflare Pages
- 观测结果：首页返回 HTTP 200。
- 首页 HTML 中引用的资源版本：`v=20260802c`
- 观测到的资源：`styles.css`、`hotel-data.js`、`script.js`
- 首页内容长度：8,833 bytes（按 HTTP 返回文本以 UTF-8 重新编码计算）
- 首页内容 SHA-256：`e6f1de5a30bde39c034460200eb8effee37f417152c558aedec6d4b4204c8e01`
- 观测时间：2026-08-03，Asia/Tokyo
- Cloudflare 后台部署 ID：待补充
- Cloudflare 后台对应的 Git 提交：待补充

### 这次快照的意义

这是更新前的公网状态记录，不代表项目最早版本，也不代表当前本地代码的 Git 提交。后续发布完成后，会在本文件追加新的部署记录，并注明实际验证到的 URL、资源版本和验证结果。

## 2026-08-03 | Cloudflare 新版本部署

- 发布平台：Cloudflare Pages
- 项目：`jinda-stay-demo`
- 部署环境：Production / `main`
- Cloudflare 部署 ID：`16cc0cdd-2059-4b6d-a3b0-b5a486f4fe29`
- 部署预览地址：<https://16cc0cdd.jinda-stay-demo.pages.dev>
- 生产访问地址：<https://jinda-stay-demo.pages.dev/?release=20260803a>
- 发布包：`cloudflare-dist-safe-20260803a`
- 本次资源版本：`v=20260803a`
- 发布内容：七种语言界面、简体中文版本、住宿物件入口、入住指南入口、脱敏后的门锁演示、房内视频与图片资源。
- 验证结果：部署列表显示 `Production` 且状态正常；生产地址返回 HTTP 200；简体中文入口和 `v=20260803a` 资源引用可在生产地址中确认；房内视频与视频封面均返回 HTTP 200。
- 说明：裸域名在发布后短时间内仍可能命中旧缓存，带 `release=20260803a` 的生产地址已确认返回新版本。

### 记录边界

- `index.html` 直接访问时由当前站点重定向到 `/`，这是本次观测到的 Cloudflare 路由行为。
- 本记录只保存版本标识、内容摘要和验证结果，不复制线上可能存在的完整旧文件。
- 含真实门禁信息的原始素材不纳入公开仓库，也不作为部署记录附件。
