const { GAMES } = require('../../data/games.js');
const BASE = 'https://nmww.github.io/moyu-games-cn';

Page({
  data: {
    url: '',
    name: ''
  },
  onLoad(query) {
    const g = GAMES.find(x => x.slug === query.slug);
    const name = g ? g.name : '游戏中';
    const url = BASE + '/games/' + query.slug + '/index.html';
    this.setData({ url, name });
    wx.setNavigationBarTitle({ title: name });
  }
});
