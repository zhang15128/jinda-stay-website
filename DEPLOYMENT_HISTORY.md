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

## 2026-08-03 | Cloudflare 简体中文字体修正版部署

- 发布平台：Cloudflare Pages
- 项目：`jinda-stay-demo`
- 部署环境：Production / `main`
- Cloudflare 部署 ID：`31f2955a-d4ec-4b34-8640-25a28fa01138`
- 部署预览地址：<https://31f2955a.jinda-stay-demo.pages.dev>
- 生产访问地址：<https://jinda-stay-demo.pages.dev/?release=20260803b>
- 发布包：`cloudflare-dist-safe-20260803b`
- 本次资源版本：`v=20260803b`
- 对应 Git 提交：`b701835`（优化简体中文字体显示）
- 发布内容：简体中文独立字体栈、页面资源缓存版本更新；日语和繁体中文字体设定保持不变。
- 验证结果：部署列表显示来源提交为 `b701835`，环境为 `Production / main`；生产访问地址返回 HTTP 200，并确认页面包含 `20260803b` 版本标识；`styles.css?v=20260803b` 返回 HTTP 200。

## 2026-08-21 | Cloudflare 荣本町信箱演示部署

- 发布平台：Cloudflare Pages
- 项目：`jinda-stay-demo`
- 部署环境：Production / `main`
- Cloudflare 部署 ID：`628b3f8f-b0e9-4ac7-bd99-7984a0af556c`
- 部署预览地址：<https://628b3f8f.jinda-stay-demo.pages.dev>
- 生产访问地址：<https://jinda-stay-demo.pages.dev/guide.html?property=eihonmachi&lang=zhHans&release=20260821a>
- 发布包：`cloudflare-dist-safe-20260821a`
- 本次资源版本：`v=20260821a`
- 对应 Git 提交：`c36c6a7`（新增荣本町信箱取钥匙演示）
- 发布内容：荣本町 `0–9` 旋钮信箱取钥匙动画、七种语言说明、虚拟示例组合数字及响应式样式。
- 安全边界：用户提供的原始参考视频与真实信箱组合数字均未进入发布包或 Git。
- 验证结果：部署列表显示来源提交为 `c36c6a7`，环境为 `Production / main`；生产指南页、`styles.css?v=20260821a` 和 `guide.js?v=20260821a` 均返回 HTTP 200；公网 390px 手机视口下动画可完成开门状态，无脚本错误或横向溢出。

## 2026-08-21 | Cloudflare 荣本町信箱提示优化部署

- 发布平台：Cloudflare Pages
- 项目：`jinda-stay-demo`
- 部署环境：Production / `main`
- Cloudflare 部署 ID：`cda5a353-de50-40ec-b6be-f676630f3a78`
- 部署预览地址：<https://cda5a353.jinda-stay-demo.pages.dev>
- 生产访问地址：<https://jinda-stay-demo.pages.dev/guide.html?property=eihonmachi&lang=zhHans&release=20260821b>
- 发布包：`cloudflare-dist-safe-20260821b`
- 本次资源版本：`v=20260821b`
- 对应 Git 提交：`6e04e40`（调整荣本町信箱操作提示）
- 发布内容：将示例转法改写为自然句子并移至信箱动画顶部；下方保留重新播放和详细步骤；同步七种语言及窄屏布局。
- 安全边界：发布包未包含用户提供的原始参考视频、真实信箱组合数字或未跟踪的媒体制作目录。
- 验证结果：Cloudflare 部署列表显示来源提交为 `6e04e40`，环境为 `Production / main`；生产指南页、`styles.css?v=20260821b` 和 `guide.js?v=20260821b` 均返回 HTTP 200；公网 390px 手机视口无脚本错误、文字遮挡或横向溢出。

## 2026-08-21 | Cloudflare 信箱旋钮方向动画部署

- 发布平台：Cloudflare Pages
- 项目：`jinda-stay-demo`
- 部署环境：Production / `main`
- Cloudflare 部署 ID：`2b0109d7-501e-42b3-a55b-7189cb85063e`
- 部署预览地址：<https://2b0109d7.jinda-stay-demo.pages.dev>
- 生产访问地址：<https://jinda-stay-demo.pages.dev/guide.html?property=eihonmachi&lang=zhHans&release=20260821c>
- 发布包：`cloudflare-dist-safe-20260821c`
- 本次资源版本：`v=20260821c`
- 对应 Git 提交：`2b56867`（增加信箱旋钮方向动画）
- 发布内容：信箱旋钮左转时显示绿色逆时针箭头，右转时切换为暖金色顺时针箭头，解锁前自动淡出。
- 安全边界：发布包未包含用户提供的原始参考视频、真实信箱组合数字或未跟踪的媒体制作目录。
- 验证结果：Cloudflare 部署列表显示来源提交为 `2b56867`，环境为 `Production / main`；生产指南页、`styles.css?v=20260821c` 和 `guide.js?v=20260821c` 均返回 HTTP 200；公网 390px 手机视口完成左转、右转、淡出和开箱状态，无脚本错误或横向溢出。

## 2026-08-21 | Cloudflare 信箱方向标位置修正版部署

- 发布平台：Cloudflare Pages
- 项目：`jinda-stay-demo`
- 部署环境：Production / `main`
- Cloudflare 部署 ID：`7b49970a-41f9-4147-b80a-36e56b2be334`
- 部署预览地址：<https://7b49970a.jinda-stay-demo.pages.dev>
- 生产访问地址：<https://jinda-stay-demo.pages.dev/guide.html?property=eihonmachi&lang=zhHans&release=20260821d>
- 发布包：`cloudflare-dist-safe-20260821d`
- 本次资源版本：`v=20260821d`
- 对应 Git 提交：`b48ee37`（重做信箱方向标位置）
- 发布内容：移除覆盖数字盘的大型箭头，将左转和右转方向标分别放到转轮外侧，并同步下方状态图标颜色。
- 安全边界：发布包未包含用户提供的原始参考视频、真实信箱组合数字或未跟踪的媒体制作目录。
- 验证结果：Cloudflare 部署列表显示来源提交为 `b48ee37`，环境为 `Production / main`；生产页面与 `styles.css?v=20260821d` 返回 HTTP 200；公网 390px 手机视口中左右方向标均与数字转轮边界完全分离，无脚本错误或横向溢出。

## 2026-08-21 | Cloudflare 仁达系统院物件部署

- 发布平台：Cloudflare Pages
- 项目：`jinda-stay-demo`
- 部署环境：Production / `main`
- Cloudflare 部署 ID：`1e580888-f096-44f9-9352-a02154986de8`
- 部署预览地址：<https://1e580888.jinda-stay-demo.pages.dev>
- 生产访问地址：<https://jinda-stay-demo.pages.dev/guide.html?property=systemin&lang=zhHans&release=20260821e>
- 发布包：`cloudflare-dist-safe-20260821e`
- 本次资源版本：`v=20260821e`
- 对应 Git 提交：`079540b`（新增仁达系统院物件）
- 发布内容：新增第五个物件仁达系统院、精确 Google Maps 地点、区域占位图片、七语言名称与说明，并复用荣本町信箱取钥匙动画。
- 待补充内容：系统院房型、正式 OTA 房源链接、实拍图片和房内视频均未虚构，网页以准备中状态显示。
- 安全边界：发布包未包含真实门禁密码、用户提供的原始参考视频、客户资料或未跟踪的媒体制作目录。
- 验证结果：部署列表显示来源提交为 `079540b`，环境为 `Production / main`；生产首页、指南页和 `hotel-data.js?v=20260821e` 返回 HTTP 200；公网 390px 手机视口显示五个物件、固定地图和系统院信箱演示，无脚本错误或横向溢出。

## 2026-08-22 | Cloudflare 信箱转轮减速部署

- 发布平台：Cloudflare Pages
- 项目：`jinda-stay-demo`
- 部署环境：Production / `main`
- Cloudflare 部署 ID：`b7115df9-5aa3-4730-9707-b8baf0c9f1d1`
- 部署预览地址：<https://b7115df9.jinda-stay-demo.pages.dev>
- 生产访问地址：<https://jinda-stay-demo.pages.dev/guide.html?property=systemin&lang=zhHans&release=20260822a>
- 发布包：`cloudflare-dist-safe-20260822a`
- 本次资源版本：`v=20260822a`
- 对应 Git 提交：`489cb19`（放慢信箱数字转轮动画）
- 发布内容：将信箱演示的两段左转和一段右转统一放慢，并延长数字对准与方向切换之间的停顿。
- 安全边界：发布包未包含真实门禁密码、用户提供的原始参考视频、客户资料或未跟踪的媒体制作目录。
- 验证结果：部署列表显示来源提交为 `489cb19`，环境为 `Production / main`；生产指南页和 `guide.js?v=20260822a` 返回 HTTP 200；公网 390px 手机视口下荣本町与系统院均依次使用 `1250ms`、`1800ms`、`1900ms` 的转轮时长并正常完成开箱，无脚本错误或横向溢出。

### 记录边界

- `index.html` 直接访问时由当前站点重定向到 `/`，这是本次观测到的 Cloudflare 路由行为。
- 本记录只保存版本标识、内容摘要和验证结果，不复制线上可能存在的完整旧文件。
- 含真实门禁信息的原始素材不纳入公开仓库，也不作为部署记录附件。
