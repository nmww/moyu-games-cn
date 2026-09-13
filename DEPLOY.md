# 发布步骤（cc 游戏厅 · 小程序 wxba7efee2ac315e56）

> ✅ 进度更新（2026-09-13）：
> 一、二 已由 WorkBuddy 自动完成——仓库 https://github.com/nmww/moyu-games-cn
> 已推送、Pages 已开启，15 个游戏全部在线（含根落地页）。
> 剩余只有「三、白名单」和「四、上传小程序」两步。

## 一、推到 GitHub（✅ 已完成）

1. 浏览器打开 https://github.com/new
   - Repository name：`moyu-games-cn`（**必须这个名字**，小程序里写死了域名路径）
   - Public（Pages 免费版要求公开）
   - 不要勾选 README（本地已提交好）
2. 在 `d:\ow\moyu-miniprogram` 目录执行：

```bash
git remote add origin https://github.com/nmww/moyu-games-cn.git
git push -u origin main
```

## 二、开启 GitHub Pages（✅ 已完成）

仓库页面 → Settings → Pages →
Source 选 `Deploy from a branch`，Branch 选 `main` / `/ (root)` → Save。

1-2 分钟后生效，地址：`https://nmww.github.io/moyu-games-cn/`

浏览器分别抽查两个游戏能打开：
- `https://nmww.github.io/moyu-games-cn/games/2048/index.html`
- `https://nmww.github.io/moyu-games-cn/games/lion/index.html`

> 💡 小程序里点游戏出现 GitHub 的 "404 There isn't a GitHub Pages site here"，
> 就是上面这两步（建仓库推送 + 开启 Pages）还没完成，代码本身没问题。
> 想在推送前先本地验证游戏效果，在本目录执行：
> `python -m http.server 8080` ，然后浏览器打开
> `http://127.0.0.1:8080/games/lion/index.html`（资源已全部相对路径，本地即可完整运行）。

## 三、配小程序业务域名白名单（必须你本人扫码）

mp.weixin.qq.com → 开发管理 → 开发设置 → **业务域名** → 添加以下 4 个域名：

| 域名 | 用途 |
| --- | --- |
| `nmww.github.io` | 游戏主域名（Pages） |
| `assets.codepen.io` | 「杀死国王」图片/音频素材（源站防盗链无法本地化） |
| `www.jsdaima.com` | 「飞机躲避障碍」依赖 |
| `demo.mycodes.net` | 「圣诞老人过桥」样式 |

添加每个域名时微信要求下载校验文件（`MP_verify_xxxx.txt`）放到该域名根目录可访问：
- `nmww.github.io`：把下载的文件放进 `d:\ow\moyu-miniprogram` 根目录（替换占位的 `MP_verify_placeholder.txt`），再 `git add -A && git commit -m verify && git push`
- 其余 3 个是别人的域名，**你无法放校验文件 → 这 3 个域名加不进白名单**

> 结论：受白名单影响，「杀死国王 / 飞机躲避障碍 / 圣诞老人过桥」这三款
> 在正式版小程序里会加载失败。建议：先按默认上线其余 12 款（全部资源
> 已本地化到 nmww.github.io，零白名单问题）；这 3 款要上，得后续把这
> 三家素材抓下来本地化（codepen 素材有防盗链，可能做不了，可接受就换游戏）。
> 若想立即三款也能玩：小程序 `data/games.js` 里把这 3 条删掉即可。

## 四、上传小程序

1. 微信开发者工具 → 导入项目 → 目录选 `d:\ow\moyu-miniprogram`（**仓库根目录**，配置已写好 miniprogramRoot；直接选 `miniprogram` 子目录也可以，两种都能识别）
   （appid 自动读取 project.config.json 里的 wxba7efee2ac315e56）
2. 开发者工具里「预览」扫码即可试玩（工具里 urlCheck 已关，跳过域名校验）
3. 确认没问题 → 上传 → mp 后台提交审核

## 五、以后更新某个游戏怎么发

改 `games/<slug>/` 里的文件 → commit → push → Pages 自动更新（约 1 分钟）。
小程序代码有改动才需要在开发者工具重新上传。
