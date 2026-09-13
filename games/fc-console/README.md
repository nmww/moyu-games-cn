# 小霸王游戏机

网页版红白机（FC/NES）模拟器，内置多款经典游戏，支持手机触屏与 PC 键盘双人游玩。

## 运行说明

不能直接双击打开 html，需要放在静态服务器下运行：

```bash
python -m http.server 8080
# 浏览器访问 http://127.0.0.1:8080/games/fc-console/index.html
```

## 按键说明

移动端使用触摸操控，PC 端按键映射如下：

| 按键 | Player 1 | Player 2 |
|--|--|--|
| 左 | A | Num-4 |
| 右 | D | Num-6 |
| 上 | W | Num-8 |
| 下 | S | Num-2 |
| A | J | Num-7 |
| B | K | Num-9 |
| 连发 A | Z | Num-/ |
| 连发 B | X | Num-* |
| Start | Enter | Num-1 |
| Select | Ctrl | Num-3 |
