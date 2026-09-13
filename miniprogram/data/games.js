// 游戏清单（适配后自托管在 GitHub Pages）
// 每个 slug 对应 games/<slug>/index.html
const GAMES = [
  { slug: 'lion',          name: '爱吹风的小狮子', cat: '休闲',   icon: '🦁', desc: '按住拖动产生风' },
  { slug: 'whack-mole',    name: '打地鼠',         cat: '休闲',   icon: '🔨', desc: '点击冒头地鼠' },
  { slug: 'tower-blocks',  name: '盖塔楼',         cat: '休闲',   icon: '🏗️', desc: '叠高塔楼' },
  { slug: 'chicks',        name: '三只小鸡',       cat: '休闲',   icon: '🐤', desc: '照顾小鸡' },
  { slug: 'rps',           name: '石头剪刀布',     cat: '休闲',   icon: '✊', desc: '经典猜拳' },
  { slug: 'dice',          name: '骰子游戏',       cat: '休闲',   icon: '🎲', desc: '掷骰子比大小' },
  { slug: '2048',          name: '2048',          cat: '益智',   icon: '🔢', desc: '合并数字' },
  { slug: 'js-level',      name: 'JS闯关小游戏',   cat: '益智',   icon: '🧩', desc: '闯关挑战' },
  { slug: 'memory-cards',  name: '纸牌记忆游戏',   cat: '益智',   icon: '🃏', desc: '翻牌配对' },
  { slug: 'plane-dodge',   name: '飞机躲避障碍',   cat: '动作',   icon: '✈️', desc: '躲避障碍' },
  { slug: 'santa-bridge',  name: '圣诞老人过桥',   cat: '动作',   icon: '🎅', desc: '稳住独木桥' },
  { slug: 'cut-block',     name: '切方块',         cat: '动作',   icon: '🔪', desc: '切割方块' },
  { slug: 'kill-king',     name: '杀死国王',       cat: '策略',   icon: '👑', desc: '策略对决' },
  { slug: 'chinese-chess', name: '中国象棋',       cat: '棋牌',   icon: '♟️', desc: '传统象棋' },
  { slug: 'fc-console',    name: '小霸王游戏机',   cat: '怀旧',   icon: '🕹️', desc: '红白机模拟' }
];

module.exports = { GAMES };
