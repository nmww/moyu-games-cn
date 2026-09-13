const { GAMES } = require('../../data/games.js');

Page({
  data: {
    cats: []
  },
  onLoad() {
    const map = {};
    GAMES.forEach(g => {
      (map[g.cat] = map[g.cat] || []).push(g);
    });
    const cats = Object.keys(map).map(name => ({ name, list: map[name] }));
    this.setData({ cats });
  },
  open(e) {
    const slug = e.currentTarget.dataset.slug;
    wx.navigateTo({ url: '/pages/game/game?slug=' + slug });
  }
});
