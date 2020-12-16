window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  BetItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43100pQBPpDELQ8edI5pb0n", "BetItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ccclass = cc._decorator.ccclass;
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var Betitem = function() {
      function Betitem(val) {
        this.userId = null;
        this.raceNum = null;
        this._sky = 0;
        this._land = 0;
        this._middle = 0;
        this._bridg = 0;
        this._skyCorner = 0;
        this._landCorner = 0;
        this.raceNum = val.raceNum;
        this.userId = val.userId;
        this._sky = val.sky;
        this._land = val.land;
        this._middle = val.middle;
        this._bridg = val.bridg;
        this._skyCorner = val.skyCorner;
        this._landCorner = val.landCorner;
      }
      Object.defineProperty(Betitem.prototype, "sky", {
        get: function() {
          return this._sky;
        },
        set: function(val) {
          this.valueChangeNotice(Const_1.betLocaion.SKY, this._sky, val);
          this._sky = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Betitem.prototype, "land", {
        get: function() {
          return this._land;
        },
        set: function(val) {
          this.valueChangeNotice(Const_1.betLocaion.LAND, this._land, val);
          this._land = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Betitem.prototype, "middle", {
        get: function() {
          return this._middle;
        },
        set: function(val) {
          this.valueChangeNotice(Const_1.betLocaion.MIDDLE, this._middle, val);
          this._middle = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Betitem.prototype, "bridg", {
        get: function() {
          return this._bridg;
        },
        set: function(val) {
          this.valueChangeNotice(Const_1.betLocaion.BRIDG, this._bridg, val);
          this._bridg = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Betitem.prototype, "skyCorner", {
        get: function() {
          return this._skyCorner;
        },
        set: function(val) {
          this.valueChangeNotice(Const_1.betLocaion.SKY_CORNER, this._skyCorner, val);
          this._skyCorner = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Betitem.prototype, "landCorner", {
        get: function() {
          return this._landCorner;
        },
        set: function(val) {
          this.valueChangeNotice(Const_1.betLocaion.LAND_CORNER, this._landCorner, val);
          this._landCorner = val;
        },
        enumerable: true,
        configurable: true
      });
      Betitem.prototype.getXiaZhuVal = function() {
        return this.sky + this.middle + this.land + this.skyCorner + this.bridg + this.landCorner;
      };
      Betitem.prototype.valueChangeNotice = function(locatIon, fromVal, toValue) {
        if (0 === fromVal && 0 === toValue) return;
        if (0 !== fromVal && 0 === toValue) {
          var info = {
            raceNum: this.raceNum,
            userId: this.userId,
            betLocation: locatIon,
            fromVal: fromVal
          };
          EventBus_1.eventBus.emit(Const_1.EventType.BET_CANCE_NOTICE, info);
        } else {
          var info = {
            raceNum: this.raceNum,
            userId: this.userId,
            betLocation: locatIon,
            fromVal: fromVal,
            toValue: toValue
          };
          EventBus_1.eventBus.emit(Const_1.EventType.BET_CHIP_CHANGE_EVENT, info);
        }
      };
      Betitem.prototype.getScore = function(skyResult, middleResult, landResult, skyCornerResult, bridgResult, landCornerResult) {
        var score = 0;
        switch (skyResult) {
         case Const_1.CompareDxRe.BIG:
          score += this.sky;
          break;

         case Const_1.CompareDxRe.SMALL:
          score -= this.sky;
          break;

         case Const_1.CompareDxRe.EQ:
        }
        switch (middleResult) {
         case Const_1.CompareDxRe.BIG:
          score += this.middle;
          break;

         case Const_1.CompareDxRe.SMALL:
          score -= this.middle;
          break;

         case Const_1.CompareDxRe.EQ:
        }
        switch (landResult) {
         case Const_1.CompareDxRe.BIG:
          score += this.land;
          break;

         case Const_1.CompareDxRe.SMALL:
          score -= this.land;
          break;

         case Const_1.CompareDxRe.EQ:
        }
        switch (bridgResult) {
         case Const_1.CompareDxRe.BIG:
          score += this.bridg;
          break;

         case Const_1.CompareDxRe.SMALL:
          score -= this.bridg;
          break;

         case Const_1.CompareDxRe.EQ:
        }
        switch (landCornerResult) {
         case Const_1.CompareDxRe.BIG:
          score += this.landCorner;
          break;

         case Const_1.CompareDxRe.SMALL:
          score -= this.landCorner;
          break;

         case Const_1.CompareDxRe.EQ:
        }
        switch (skyCornerResult) {
         case Const_1.CompareDxRe.BIG:
          score += this.skyCorner;
          break;

         case Const_1.CompareDxRe.SMALL:
          score -= this.skyCorner;
          break;

         case Const_1.CompareDxRe.EQ:
        }
        return score;
      };
      return Betitem;
    }();
    exports.default = Betitem;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus"
  } ],
  BetList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "efa28+zT+5MjpcL5aFD3oLX", "BetList");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BetList = [ {
      userId: "22",
      raceNum: 0,
      sky: 5,
      middle: 5,
      land: 5,
      skyCorner: 5,
      landCorner: 5,
      bridg: 5
    }, {
      userId: "23",
      raceNum: 0,
      sky: 5,
      middle: 5,
      land: 5,
      skyCorner: 5,
      landCorner: 5,
      bridg: 5
    }, {
      userId: "23",
      raceNum: 0,
      sky: 5,
      middle: 5,
      land: 5,
      skyCorner: 5,
      landCorner: 5,
      bridg: 5
    }, {
      userId: "24",
      raceNum: 1,
      sky: 5,
      middle: 5,
      land: 5,
      skyCorner: 5,
      landCorner: 5,
      bridg: 5
    } ];
    cc._RF.pop();
  }, {} ],
  BetManage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8f16Ejq4NJlbF27MCdjmDb", "BetManage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config_1 = require("../../common/Config");
    var Const_1 = require("../../common/Const");
    var BetItem_1 = require("./BetItem");
    var axios_1 = require("axios");
    var BetManage = function() {
      function BetManage() {
        this.betList = [];
      }
      BetManage.prototype.cancelBetByLocation = function(roomId, userId, raceNum, betLocation) {
        return new Promise(function(resolve) {
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.CANCEL_BET;
          axios_1.default.get(httpUrl, {
            params: {
              userId: userId,
              roomId: roomId,
              raceNum: raceNum,
              betLocation: betLocation
            }
          }).then(function(response) {
            var info = response.data;
            if (0 == info.status) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: info
              });
              return;
            }
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: ""
            });
          }).catch(function(e) {
            resolve({
              result: Const_1.ResponseStatus.FAIL,
              extObject: {
                status: 0,
                message: "net_error",
                data: ""
              }
            });
          });
        });
      };
      BetManage.prototype.clear = function() {
        this.betList = [];
      };
      BetManage.prototype.cancelBet = function(info) {
        try {
          this.betList[info.raceNum][info.userId][info.betLocation] = 0;
        } catch (e) {}
      };
      BetManage.prototype.getBetByLocation = function(info) {
        try {
          return this.betList[info.raceNum][info.userId][info.betLocation];
        } catch (e) {
          return 0;
        }
      };
      BetManage.prototype.setBetList = function(betlist) {
        var list = [];
        betlist.forEach(function(item) {
          "undefined" === typeof list[item.raceNum] && (list[item.raceNum] = []);
          list[item.raceNum][item.userId] = new BetItem_1.default(item);
        });
        this.betList = list;
      };
      BetManage.prototype.addBet = function(oningRaceNum, userId, location, val) {
        "undefined" === typeof this.betList[oningRaceNum] && (this.betList[oningRaceNum] = []);
        if ("undefined" === typeof this.betList[oningRaceNum][userId]) {
          var item = {
            userId: userId,
            raceNum: oningRaceNum,
            sky: 0,
            land: 0,
            middle: 0,
            bridg: 0,
            skyCorner: 0,
            landCorner: 0
          };
          this.betList[oningRaceNum][userId] = new BetItem_1.default(item);
        }
        this.betList[oningRaceNum][userId][location] = this.betList[oningRaceNum][userId][location] + val;
      };
      return BetManage;
    }();
    exports.default = new BetManage();
    cc._RF.pop();
  }, {
    "../../common/Config": "Config",
    "../../common/Const": "Const",
    "./BetItem": "BetItem",
    axios: 2
  } ],
  1: [ function(require, module, exports) {
    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        cachedSetTimeout = "function" === typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        cachedClearTimeout = "function" === typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) return;
      draining = false;
      currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1;
      queue.length && drainQueue();
    }
    function drainQueue() {
      if (draining) return;
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) currentQueue && currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
      queue.push(new Item(fun, args));
      1 !== queue.length || draining || runTimeout(drainQueue);
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process.title = "browser";
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = "";
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    process.listeners = function(name) {
      return [];
    };
    process.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    process.cwd = function() {
      return "/";
    };
    process.chdir = function(dir) {
      throw new Error("process.chdir is not supported");
    };
    process.umask = function() {
      return 0;
    };
  }, {} ],
  CancelChipAn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f99afwOQCREVqJO0e+2wuK3", "CancelChipAn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chip_1_1 = null;
        _this.chip_1_2 = null;
        _this.chip_2_1 = null;
        _this.chip_2_2 = null;
        _this.distanceSet = 60;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.animation();
      };
      NewClass.prototype.animation = function() {
        var location = this.node.getPosition();
        this.move(this.chip_1_1.node, {
          x: location.x - this.distanceSet,
          y: location.y + this.distanceSet
        });
        this.move(this.chip_1_2.node, {
          x: location.x + this.distanceSet,
          y: location.y + this.distanceSet
        });
        this.move(this.chip_2_1.node, {
          x: location.x - this.distanceSet,
          y: location.y - this.distanceSet
        });
        this.move(this.chip_2_2.node, {
          x: location.x + this.distanceSet,
          y: location.y - this.distanceSet
        });
      };
      NewClass.prototype.move = function(theNode, toLocation) {
        var action = cc.moveTo(.4, toLocation.x, toLocation.y);
        var b = cc.sequence(action, cc.callFunc(function() {
          theNode.active = false;
          theNode.destroy();
        }, this));
        theNode.runAction(b);
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "chip_1_1", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "chip_1_2", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "chip_2_1", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "chip_2_2", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  ChairItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77445w4W3BBfr+i6pG6rql7", "ChairItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ChairItem = function() {
      function ChairItem(ccOb, chairName, playUserIcon) {
        this.playUserIcon = null;
        this.cc = ccOb;
        this.chairName = chairName;
        this.playUserIcon = playUserIcon;
      }
      ChairItem.prototype.inChairWithNode = function(userIconNode) {
        if (!this.isChairEmputy()) return false;
        userIconNode.parent = this.cc.find("Canvas/" + this.chairName);
        userIconNode.setPosition(0, 0);
        var memberJs = userIconNode.getComponent("PlayUserIcon");
        var userInfo = memberJs.getMemberData();
        memberJs.changeByUserState(userInfo.state);
        var theUserNode = this.cc.find("Canvas/Desk").getChildByName("user_" + userInfo.userId);
        theUserNode && theUserNode.destroy();
        userIconNode.name = "PlayerIcon";
      };
      ChairItem.prototype.inChair = function(memberInChairData) {
        if (!this.isChairEmputy()) return false;
        var chairNode = this.cc.find("Canvas/" + this.chairName);
        var userIconNode = this.cc.instantiate(this.playUserIcon);
        userIconNode.name = "PlayerIcon";
        userIconNode.setPosition(0, 0);
        userIconNode.parent = chairNode;
        userIconNode.getComponent("PlayUserIcon").setShow(memberInChairData);
        return true;
      };
      ChairItem.prototype.outChair = function(func) {
        var ob = this.cc.find("Canvas/" + this.chairName).getChildByName("PlayerIcon");
        if (ob) {
          ob.getComponent("PlayUserIcon").onDisable();
          ob.destroy();
        }
        func();
      };
      ChairItem.prototype.isChairEmputy = function() {
        var node = this.cc.find("Canvas/" + this.chairName);
        if (node.getChildByName("PlayerIcon")) return false;
        return true;
      };
      ChairItem.prototype.getUserInfo = function() {
        if (this.isChairEmputy()) return null;
        return this.cc.find("Canvas/" + this.chairName).getChildByName("PlayerIcon").getComponent("PlayUserIcon").getMemberData();
      };
      ChairItem.prototype.getChairPosition = function() {
        var url = "Canvas/" + this.chairName;
        if ("undefined" === typeof this.cc.find(url)) return null;
        return this.cc.find(url).getPosition();
      };
      return ChairItem;
    }();
    exports.default = ChairItem;
    cc._RF.pop();
  }, {} ],
  ChairManage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bd1fQyLgpL6ZLb0PzRTNeU", "ChairManage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ChairItem_1 = require("./ChairItem");
    var ChairManage = function() {
      function ChairManage(cc, playUserIcon) {
        this.chairList = [];
        this.playUserIcon = null;
        this.cc = cc;
        this.playUserIcon = playUserIcon;
        this.init();
      }
      ChairManage.prototype.init = function() {
        var list = [ 0, 1, 9, 2, 8, 3, 7, 4, 6, 5 ];
        for (var i = 0; i < list.length; i++) {
          var chairName = "Member_" + list[i];
          var item = new ChairItem_1.default(this.cc, chairName, this.playUserIcon);
          this.chairList.push(item);
        }
      };
      ChairManage.prototype.getChairPositionByUserId = function(userId) {
        var i = 0;
        for (;i < this.chairList.length; i++) if (!this.chairList[i].isChairEmputy()) {
          var userInfo = this.chairList[i].getUserInfo();
          if (null != userInfo && userInfo.userId == userId) return this.chairList[i].getChairPosition();
        }
        return null;
      };
      ChairManage.prototype.inChair = function(memberInChairData) {
        var emputyChair = this.getOneEmputyChair();
        if (emputyChair) {
          emputyChair.inChair(memberInChairData);
          return true;
        }
        return false;
      };
      ChairManage.prototype.outChair = function(userId) {
        try {
          for (var i = 0; i < this.chairList.length; i++) if (!this.chairList[i].isChairEmputy()) {
            var theUserId = this.chairList[i].getUserInfo().userId;
            if (theUserId == userId) {
              this.chairList[i].outChair(function() {});
              cc.log("\u7528\u6237\u79bb\u5f00\u684c\u4f4d:" + userId);
              break;
            }
          }
        } catch (e) {}
      };
      ChairManage.prototype.getOneEmputyChair = function() {
        for (var i = 0; i < this.chairList.length; i++) if (this.chairList[i].isChairEmputy()) return this.chairList[i];
        return false;
      };
      ChairManage.prototype.inCharByList = function(memberList) {
        for (var i = 0; i < memberList.length; i++) {
          var isSuccess = this.inChair(memberList[i]);
          if (!isSuccess) return false;
        }
        return true;
      };
      ChairManage.prototype.clearAllChair = function() {
        for (var i = 0; i < this.chairList.length; i++) this.chairList[i].isChairEmputy() || this.chairList[i].outChair(function() {});
      };
      ChairManage.prototype.moveToLandlordChair = function(userId) {
        var _this = this;
        if (null == userId || "" == userId) return;
        var theUserChair = this.getChairByUserId(userId);
        if (null === theUserChair) return;
        if ("Member_0" === theUserChair.chairName) return;
        var landChair = this.chairList[0];
        var newLanlordUserInfo = theUserChair.getUserInfo();
        if (landChair.isChairEmputy()) theUserChair.outChair(function() {
          _this.userIconMoveAnimation(newLanlordUserInfo, theUserChair.getChairPosition(), landChair.getChairPosition(), function(userIconNode) {
            landChair.inChairWithNode(userIconNode);
          });
        }); else {
          var oldLandChairUserInfo_1 = landChair.getUserInfo();
          landChair.outChair(function() {
            _this.userIconMoveAnimation(oldLandChairUserInfo_1, landChair.getChairPosition(), theUserChair.getChairPosition(), function(userIconNode) {
              theUserChair.inChairWithNode(userIconNode);
            });
          });
          theUserChair.outChair(function() {
            _this.userIconMoveAnimation(newLanlordUserInfo, theUserChair.getChairPosition(), landChair.getChairPosition(), function(userIconNode) {
              landChair.inChairWithNode(userIconNode);
            });
          });
        }
      };
      ChairManage.prototype.userIconMoveAnimation = function(userInfo, fromLocation, toLocation, callback) {
        var userIconNode = this.cc.instantiate(this.playUserIcon);
        var jsOb = userIconNode.getComponent("PlayUserIcon");
        jsOb.setShow(userInfo);
        var url = "Canvas/Desk";
        var parentNode = this.cc.find(url);
        userIconNode.parent = parentNode;
        userIconNode.name = "user_" + userInfo.userId;
        userIconNode.setPosition(fromLocation.x, fromLocation.y);
        var action = this.cc.moveTo(1, toLocation.x, toLocation.y);
        var b = cc.sequence(action, this.cc.callFunc(function() {
          callback(userIconNode);
        }, this));
        userIconNode.runAction(b);
      };
      ChairManage.prototype.getChairByUserId = function(userId) {
        var i = 0;
        for (;i < this.chairList.length; i++) if (null != this.chairList[i].getUserInfo() && this.chairList[i].getUserInfo().userId === userId) return this.chairList[i];
        return null;
      };
      return ChairManage;
    }();
    exports.default = ChairManage;
    cc._RF.pop();
  }, {
    "./ChairItem": "ChairItem"
  } ],
  ChatCarton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15708nyF9dB8qddmreFE6jN", "ChatCarton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var WebSocketManage_1 = require("../../common/WebSocketManage");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var UserManage_1 = require("../../store/User/UserManage");
    var EventBus_1 = require("../../common/EventBus");
    var FaceList_1 = require("../../common/FaceList");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ziItem = null;
        _this.faceItem = null;
        _this.ziButton = null;
        _this.faceButton = null;
        _this.ziPart = null;
        _this.ziContent = null;
        _this.facePart = null;
        _this.faceContent = null;
        _this.closeButton = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.addFaceIconEvent();
      };
      NewClass.prototype.addFaceIconEvent = function() {
        var _this = this;
        try {
          this.closeButton.node.on(cc.Node.EventType.TOUCH_END, function() {
            _this.node.destroy();
          });
          this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this.node.destroy();
          });
          this.ziButton.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this.ziPart.active = true;
            _this.facePart.active = false;
          });
          this.faceButton.on(cc.Node.EventType.TOUCH_END, function(event) {
            _this.ziPart.active = false;
            _this.facePart.active = true;
          });
          var i = 1;
          var _loop_1 = function() {
            var itemNode = cc.instantiate(this_1.faceItem);
            itemNode.name = i + "";
            this_1.faceContent.addChild(itemNode);
            itemNode.width = 86;
            itemNode.height = 86;
            cc.loader.loadRes("ChatCarton/" + FaceList_1.faceList[i].name, function(error, img) {
              var myIcon = new cc.SpriteFrame(img);
              itemNode.getChildByName("Pic").getComponent(cc.Sprite).spriteFrame = myIcon;
            });
            this_1.addNotice(itemNode, Const_1.ChatMessageType.PIC);
          };
          var this_1 = this;
          for (;i < FaceList_1.faceList.length; i++) _loop_1();
        } catch (e) {
          console.log(e);
        }
      };
      NewClass.prototype.addNotice = function(nodeItem, typeSet) {
        var _this = this;
        nodeItem.on(cc.Node.EventType.TOUCH_END, function(targe) {
          var index = targe.currentTarget._name;
          var enterRoomParam = RoomManage_1.default.getEnterRoomParam();
          if (enterRoomParam.model == Const_1.EnterRoomModel.EMULATOR_ROOM) {
            var setInfo = {
              userId: UserManage_1.default.userInfo.id,
              type: typeSet,
              message: index
            };
            EventBus_1.eventBus.emit(Const_1.EventType.CARTON_MESSAGE_NOTICE, setInfo);
            _this.node.destroy();
            return;
          }
          var notice = {
            type: Const_1.NoticeType.chatCartonMessage,
            info: {
              roomId: RoomManage_1.default.roomItem.id,
              info: {
                userId: UserManage_1.default.userInfo.id,
                type: typeSet,
                message: index
              }
            }
          };
          WebSocketManage_1.default.send(JSON.stringify(notice));
          _this.node.destroy();
        });
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "ziItem", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "faceItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "ziButton", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "faceButton", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "ziPart", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "ziContent", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "facePart", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "faceContent", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "closeButton", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/FaceList": "FaceList",
    "../../common/WebSocketManage": "WebSocketManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage"
  } ],
  Chip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c023aMw5VNJHLHwBCcfXBSL", "Chip");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var ccclass = cc._decorator.ccclass;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chipInfo = null;
        _this.flyTime = 1.2;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.backChip = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.chipBackAction(false);
        }, 1);
      };
      NewClass.prototype.cancelChip = function(info) {
        if (info.userId === this.chipInfo.userId && info.betLocation === this.chipInfo.betLocation) {
          this.node.active = false;
          this.node.destroy();
        }
      };
      NewClass.prototype.initData = function(chipInfo) {
        this.chipInfo = chipInfo;
      };
      NewClass.prototype.chipBackAction = function(isCancelBet) {
        var _this = this;
        try {
          var winUserId = this.chipInfo.userId;
          var raceNum = RoomManage_1.default.roomItem.oningRaceNum;
          var theBetLocation = this.chipInfo.betLocation;
          var compareDxRe = RaceManage_1.default.raceList[raceNum].getLocationResult(theBetLocation);
          compareDxRe !== Const_1.CompareDxRe.SMALL && compareDxRe !== Const_1.CompareDxRe.EQ || isCancelBet || (winUserId = RaceManage_1.default.raceList[raceNum].landlordId);
          if ((theBetLocation === Const_1.betLocaion.SKY_CORNER || theBetLocation === Const_1.betLocaion.BRIDG || theBetLocation === Const_1.betLocaion.LAND_CORNER) && compareDxRe === Const_1.CompareDxRe.EQ) {
            this.node.active = false;
            this.node.destroy();
            return;
          }
          var toLocaiton = this.getUserChairPosition(winUserId);
          var action = cc.moveTo(this.flyTime, toLocaiton.x, toLocaiton.y);
          var b = cc.sequence(action, cc.callFunc(function() {
            _this.node.active = false;
            _this.node.destroy();
          }, this));
          this.node.runAction(b);
        } catch (e) {
          this.node.active = false;
          this.node.destroy();
        }
      };
      NewClass.prototype.getUserChairPosition = function(userId) {
        var deskOb = cc.find("Canvas/Desk").getComponent("Desk");
        return deskOb.chairManage.getChairPositionByUserId(userId);
      };
      NewClass.prototype.onDisable = function() {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage"
  } ],
  ConfigManage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38889/qxPhIgr8R4p3cxk10", "ConfigManage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var Config_1 = require("../../common/Config");
    var UserManage_1 = require("../User/UserManage");
    var axios_1 = require("axios");
    var ConfigManage = function() {
      function ConfigManage() {
        this.isBackMusic = true;
        this.isTxMusic = true;
        this.configHasLoad = false;
        this.createDiamondConfig = null;
        this.chipValList = [];
        this.userIconUrl = "";
        this.audioUrl = "";
        this.gameUrl = "";
        this.informMessage = "\u6eda\u7b52\u5b50\u8bda\u62db\u4ee3\u7406\uff0c\u4ee3\u7406\u8bf7\u4e8e\u5ba2\u670d\u8054\u7cfb\uff01\u6587\u660e\u6e38\u620f\uff0c\u7981\u6b62\u8d4c\u535a\uff0c\u4e00\u65e6\u53d1\u73b0\u5229\u7528\u5e73\u53f0\u4ece\u4e8b\u8d4c\u535a\u6d3b\u52a8\u4e00\u5f8b\u5c01\u53f7\u5904\u7406\uff01";
        this.customerWechat = "xxxx";
        this.cheat = false;
        this.rollDiceTime = 4;
        this.betTime = 13;
        this.showDownTime = 7;
        this.showResultKeepTime = 4;
        this.showResultTime = 4;
        this.dealTime = 3;
        this.beginTextShowTime = 1.5;
        this.timeBeforeBeginText = .5;
        var isTxMusic = window.localStorage.getItem("isTxMusic");
        this.isTxMusic = null == isTxMusic || !!parseInt(isTxMusic);
        var isBackMusic = window.localStorage.getItem("isBackMusic");
        this.isBackMusic = null == isBackMusic || !!parseInt(isBackMusic);
      }
      ConfigManage.prototype.setBackMusic = function(isOpen) {
        this.isBackMusic = isOpen;
        var flag = isOpen ? 1 : 0;
        window.localStorage.setItem("isBackMusic", flag.toString());
      };
      ConfigManage.prototype.setCheat = function(isCheat) {
        this.cheat = isCheat;
      };
      ConfigManage.prototype.isCheat = function() {
        return this.cheat;
      };
      ConfigManage.prototype.setTxMusic = function(isOpen) {
        this.isTxMusic = isOpen;
        var flag = isOpen ? 1 : 0;
        window.localStorage.setItem("isTxMusic", flag.toString());
      };
      ConfigManage.prototype.isTxMusicOpen = function() {
        return this.isTxMusic;
      };
      ConfigManage.prototype.isBackMusicOpen = function() {
        return this.isBackMusic;
      };
      ConfigManage.prototype.getUserIconUrl = function() {
        return this.userIconUrl;
      };
      ConfigManage.prototype.setUserIconUrl = function(url) {
        this.userIconUrl = url;
      };
      ConfigManage.prototype.getAudioUrl = function() {
        return this.audioUrl;
      };
      ConfigManage.prototype.getTimeBeforeBeginText = function() {
        return this.timeBeforeBeginText;
      };
      ConfigManage.prototype.setAudioUrl = function(url) {
        this.audioUrl = url;
      };
      ConfigManage.prototype.setRapLandlordTime = function(val) {
        this.rapLandlordTime = val;
      };
      ConfigManage.prototype.getRapLandlordTime = function() {
        return this.rapLandlordTime;
      };
      ConfigManage.prototype.isConfigHasLoad = function() {
        return this.configHasLoad;
      };
      ConfigManage.prototype.getCreateDiamondConfig = function() {
        return this.createDiamondConfig;
      };
      ConfigManage.prototype.getBeginTextShowTime = function() {
        return this.beginTextShowTime;
      };
      ConfigManage.prototype.getRollDiceTime = function() {
        return this.rollDiceTime;
      };
      ConfigManage.prototype.getDealTime = function() {
        return this.dealTime;
      };
      ConfigManage.prototype.getBetTime = function() {
        return this.betTime;
      };
      ConfigManage.prototype.getShowDownTime = function() {
        return this.showDownTime;
      };
      ConfigManage.prototype.getShowResultKeepTime = function() {
        return this.showResultKeepTime;
      };
      ConfigManage.prototype.getShowResultTime = function() {
        return this.showResultTime;
      };
      ConfigManage.prototype.loadConfigInfo = function() {
        var _this = this;
        return new Promise(function(resolve) {
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.GET_CONFIG;
          axios_1.default.get(httpUrl).then(function(response) {
            var info = response.data;
            _this.createDiamondConfig = info.data.createDiamond;
            _this.setChipValList(info.data.roomGame.chipValList);
            UserManage_1.default.setSelectChipValue(info.data.roomGame.chipValList[0]);
            _this.configHasLoad = true;
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: ""
            });
          }).catch(function(e) {
            resolve({
              result: Const_1.ResponseStatus.FAIL,
              extObject: {
                status: 0,
                message: "net_error",
                data: ""
              }
            });
          });
        });
      };
      ConfigManage.prototype.getChipValList = function() {
        return this.chipValList;
      };
      ConfigManage.prototype.setChipValList = function(valList) {
        this.chipValList = valList;
      };
      ConfigManage.prototype.getCustomerWechatNum = function() {
        return this.customerWechat;
      };
      ConfigManage.prototype.getInformMessage = function() {
        return this.informMessage;
      };
      ConfigManage.prototype.setGameUrl = function(url) {
        this.gameUrl = url;
      };
      ConfigManage.prototype.getGameUrl = function() {
        return this.gameUrl;
      };
      ConfigManage.prototype.getSharePageAddr = function() {
        return "https://www.toplaygame.cn/login/copySharePage";
      };
      ConfigManage.prototype.getZhanjiPageAddr = function() {
        return "https://www.toplaygame.cn/login/copyZhanjiPage";
      };
      return ConfigManage;
    }();
    exports.default = new ConfigManage();
    cc._RF.pop();
  }, {
    "../../common/Config": "Config",
    "../../common/Const": "Const",
    "../User/UserManage": "UserManage",
    axios: 2
  } ],
  Config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6e04x+/ktO5pmIieANBphx", "Config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.config = {
      serverAddress: "https://www.toplaygame.cn/phpserver/public/index.php",
      loginPageAddress: "https://www.toplaygame.cn/login/login.html",
      registerPageAddress: "https://www.toplaygame.cn/login/register.html",
      websocketAddress: "wss://www.toplaygame.cn/wss",
      cheatSwitchNumber: 34850239,
      version: "v1.1.22"
    };
    cc._RF.pop();
  }, {} ],
  Const: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad8a5jonKVB1JCOuXUASpiD", "Const");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TableLocationType;
    (function(TableLocationType) {
      TableLocationType["SKY"] = "sky";
      TableLocationType["MIDDLE"] = "middle";
      TableLocationType["LAND"] = "land";
      TableLocationType["LANDLORD"] = "landlord";
    })(TableLocationType = exports.TableLocationType || (exports.TableLocationType = {}));
    var PromiseParam = function() {
      function PromiseParam() {}
      return PromiseParam;
    }();
    exports.PromiseParam = PromiseParam;
    exports.PromiseResult = {
      SUCCESS: 0,
      ERROR: -1
    };
    var roomState;
    (function(roomState) {
      roomState[roomState["OPEN"] = 1] = "OPEN";
      roomState[roomState["PLAYING"] = 2] = "PLAYING";
      roomState[roomState["CLOSE"] = 3] = "CLOSE";
    })(roomState = exports.roomState || (exports.roomState = {}));
    var betLocaion;
    (function(betLocaion) {
      betLocaion["SKY"] = "sky";
      betLocaion["LAND"] = "land";
      betLocaion["MIDDLE"] = "middle";
      betLocaion["BRIDG"] = "bridg";
      betLocaion["SKY_CORNER"] = "skyCorner";
      betLocaion["LAND_CORNER"] = "landCorner";
    })(betLocaion = exports.betLocaion || (exports.betLocaion = {}));
    var EventType;
    (function(EventType) {
      EventType[EventType["ROOM_STATE_CHANGE_EVENT"] = 1] = "ROOM_STATE_CHANGE_EVENT";
      EventType[EventType["RACE_STATE_CHANGE_EVENT"] = 2] = "RACE_STATE_CHANGE_EVENT";
      EventType[EventType["MEMBER_DELETE_FROM_ROOM"] = 3] = "MEMBER_DELETE_FROM_ROOM";
      EventType[EventType["LOCAL_NOTICE_EVENT"] = 4] = "LOCAL_NOTICE_EVENT";
      EventType[EventType["LANDLORD_CAHNGE_EVENT"] = 5] = "LANDLORD_CAHNGE_EVENT";
      EventType[EventType["BET_CHIP_CHANGE_EVENT"] = 6] = "BET_CHIP_CHANGE_EVENT";
      EventType[EventType["RACING_NUM_CHANGE_EVENT"] = 7] = "RACING_NUM_CHANGE_EVENT";
      EventType[EventType["NEW_MEMBER_IN_ROOM"] = 8] = "NEW_MEMBER_IN_ROOM";
      EventType[EventType["MEMBER_STATE_CHANGE"] = 9] = "MEMBER_STATE_CHANGE";
      EventType[EventType["BET_CANCE_NOTICE"] = 10] = "BET_CANCE_NOTICE";
      EventType[EventType["USER_SCORE_NOTICE"] = 11] = "USER_SCORE_NOTICE";
      EventType[EventType["CARTON_MESSAGE_NOTICE"] = 12] = "CARTON_MESSAGE_NOTICE";
    })(EventType = exports.EventType || (exports.EventType = {}));
    var RaceState;
    (function(RaceState) {
      RaceState[RaceState["NOT_BEGIN"] = 1] = "NOT_BEGIN";
      RaceState[RaceState["CHOICE_LANDLORD"] = 2] = "CHOICE_LANDLORD";
      RaceState[RaceState["DEAL"] = 3] = "DEAL";
      RaceState[RaceState["BET"] = 4] = "BET";
      RaceState[RaceState["SHOW_DOWN"] = 5] = "SHOW_DOWN";
      RaceState[RaceState["FINISHED"] = 6] = "FINISHED";
    })(RaceState = exports.RaceState || (exports.RaceState = {}));
    var LocalNoticeEventType;
    (function(LocalNoticeEventType) {
      LocalNoticeEventType[LocalNoticeEventType["PLAY_BUTTON_EVENT"] = 1] = "PLAY_BUTTON_EVENT";
      LocalNoticeEventType[LocalNoticeEventType["LOCAL_BE_LANDLORD_RESULT"] = 2] = "LOCAL_BE_LANDLORD_RESULT";
      LocalNoticeEventType[LocalNoticeEventType["ROLL_DICE_FINISHED_NOTICE"] = 3] = "ROLL_DICE_FINISHED_NOTICE";
      LocalNoticeEventType[LocalNoticeEventType["DELIVERY_CARD_FINISHED_NOTICE"] = 4] = "DELIVERY_CARD_FINISHED_NOTICE";
      LocalNoticeEventType[LocalNoticeEventType["OPEN_CARD_FINISHED_NOTICE"] = 5] = "OPEN_CARD_FINISHED_NOTICE";
      LocalNoticeEventType[LocalNoticeEventType["SHOW_DOWN_ANIMATION_FINISHED_NOTICE"] = 6] = "SHOW_DOWN_ANIMATION_FINISHED_NOTICE";
      LocalNoticeEventType[LocalNoticeEventType["OPEN_CARD_REQUEST_NOTICE"] = 7] = "OPEN_CARD_REQUEST_NOTICE";
      LocalNoticeEventType[LocalNoticeEventType["LOCAL_TIME_XIAZHU_FINISHED_NOTICE"] = 8] = "LOCAL_TIME_XIAZHU_FINISHED_NOTICE";
      LocalNoticeEventType[LocalNoticeEventType["TO_LOBBY_EVENT"] = 10] = "TO_LOBBY_EVENT";
      LocalNoticeEventType[LocalNoticeEventType["BACK_MUSIC_STATE_CHANGE_NOTICE"] = 11] = "BACK_MUSIC_STATE_CHANGE_NOTICE";
      LocalNoticeEventType[LocalNoticeEventType["TO_SHOW_START_BUTTON"] = 12] = "TO_SHOW_START_BUTTON";
      LocalNoticeEventType[LocalNoticeEventType["SOCKET_CONNECT_NOTICE"] = 13] = "SOCKET_CONNECT_NOTICE";
      LocalNoticeEventType[LocalNoticeEventType["DIAMOND_COUNT_CHANGE"] = 14] = "DIAMOND_COUNT_CHANGE";
      LocalNoticeEventType[LocalNoticeEventType["PLAY_AUDIO_LOCAL_NOTICE"] = 15] = "PLAY_AUDIO_LOCAL_NOTICE";
      LocalNoticeEventType[LocalNoticeEventType["PLAY_AUDIO_NOT_SUPPORT"] = 16] = "PLAY_AUDIO_NOT_SUPPORT";
      LocalNoticeEventType[LocalNoticeEventType["OPEN_IMMEDIATELY"] = 17] = "OPEN_IMMEDIATELY";
      LocalNoticeEventType[LocalNoticeEventType["VISIT_ENTER_ROOM"] = 18] = "VISIT_ENTER_ROOM";
      LocalNoticeEventType[LocalNoticeEventType["TURN_LANDLORD_LOCAL_NOTICE"] = 19] = "TURN_LANDLORD_LOCAL_NOTICE";
    })(LocalNoticeEventType = exports.LocalNoticeEventType || (exports.LocalNoticeEventType = {}));
    exports.chipPoint = {
      sky: {
        left: {
          x: -277,
          y: 81
        },
        right: {
          x: -151,
          y: 81
        }
      },
      land: {
        left: {
          x: 151,
          y: 79
        },
        right: {
          x: 285,
          y: 79
        }
      },
      middle: {
        left: {
          x: -66,
          y: -64
        },
        right: {
          x: 69,
          y: -64
        }
      },
      bridg: {
        left: {
          x: -60,
          y: 79
        },
        right: {
          x: 65,
          y: 79
        }
      },
      skyCorner: {
        left: {
          x: -246,
          y: -16
        },
        right: {
          x: -149,
          y: -16
        }
      },
      landCorner: {
        left: {
          x: 148,
          y: -31
        },
        right: {
          x: 240,
          y: -31
        }
      }
    };
    var MajhongValueType;
    (function(MajhongValueType) {
      MajhongValueType[MajhongValueType["DUI_ZI"] = 1] = "DUI_ZI";
      MajhongValueType[MajhongValueType["BI_SHI"] = 2] = "BI_SHI";
      MajhongValueType[MajhongValueType["DIAN"] = 3] = "DIAN";
      MajhongValueType[MajhongValueType["ER_BA_GANG"] = 4] = "ER_BA_GANG";
    })(MajhongValueType = exports.MajhongValueType || (exports.MajhongValueType = {}));
    var gameMemberType;
    (function(gameMemberType) {
      gameMemberType[gameMemberType["PLAYER"] = 1] = "PLAYER";
      gameMemberType[gameMemberType["VISITOR"] = 2] = "VISITOR";
      gameMemberType[gameMemberType["LIMIT"] = 3] = "LIMIT";
      gameMemberType[gameMemberType["MANAGE"] = 4] = "MANAGE";
    })(gameMemberType = exports.gameMemberType || (exports.gameMemberType = {}));
    var memberState;
    (function(memberState) {
      memberState[memberState["OnLine"] = 1] = "OnLine";
      memberState[memberState["OffLine"] = 2] = "OffLine";
      memberState[memberState["KickOut"] = 3] = "KickOut";
    })(memberState = exports.memberState || (exports.memberState = {}));
    var playMode;
    (function(playMode) {
      playMode[playMode["TURN"] = 1] = "TURN";
      playMode[playMode["RAP"] = 2] = "RAP";
    })(playMode = exports.playMode || (exports.playMode = {}));
    var ResponseStatus;
    (function(ResponseStatus) {
      ResponseStatus[ResponseStatus["SUCCESS"] = 1] = "SUCCESS";
      ResponseStatus[ResponseStatus["FAIL"] = 0] = "FAIL";
    })(ResponseStatus = exports.ResponseStatus || (exports.ResponseStatus = {}));
    var CreateRoomPayModel;
    (function(CreateRoomPayModel) {
      CreateRoomPayModel[CreateRoomPayModel["AA"] = 1] = "AA";
      CreateRoomPayModel[CreateRoomPayModel["DAI_KAI"] = 2] = "DAI_KAI";
    })(CreateRoomPayModel = exports.CreateRoomPayModel || (exports.CreateRoomPayModel = {}));
    var CompareDxRe;
    (function(CompareDxRe) {
      CompareDxRe["BIG"] = "w";
      CompareDxRe["SMALL"] = "s";
      CompareDxRe["EQ"] = "e";
    })(CompareDxRe = exports.CompareDxRe || (exports.CompareDxRe = {}));
    var EnterRoomModel;
    (function(EnterRoomModel) {
      EnterRoomModel[EnterRoomModel["NUMBER_PANEL"] = 1] = "NUMBER_PANEL";
      EnterRoomModel[EnterRoomModel["SHARE"] = 2] = "SHARE";
      EnterRoomModel[EnterRoomModel["CREATE_ROOM"] = 3] = "CREATE_ROOM";
      EnterRoomModel[EnterRoomModel["EMULATOR_ROOM"] = 4] = "EMULATOR_ROOM";
    })(EnterRoomModel = exports.EnterRoomModel || (exports.EnterRoomModel = {}));
    var EnterRoomFail;
    (function(EnterRoomFail) {
      EnterRoomFail["param_error"] = "\u53c2\u6570\u9519\u8bef";
      EnterRoomFail["user_not_exist"] = "\u7528\u6237\u4e0d\u5b58\u5728";
      EnterRoomFail["room_not_exist"] = "\u623f\u95f4\u4e0d\u5b58\u5728";
      EnterRoomFail["room_not_open_state"] = "\u6e38\u620f\u5df2\u5f00\u59cb\uff0c\u65e0\u6cd5\u8fdb\u5165";
      EnterRoomFail["diamond_not_enough"] = "\u94bb\u6570\u91cf\u4e0d\u591f\uff0c\u8bf7\u5145\u503c";
      EnterRoomFail["member_count_limit"] = "\u623f\u95f4\u5df2\u6ee1\uff0c\u65e0\u6cd5\u8fdb\u5165";
      EnterRoomFail["room_close"] = "\u623f\u95f4\u5df2\u5173\u95ed";
      EnterRoomFail["in_room_fail"] = "\u8fdb\u5165\u623f\u95f4\u5f02\u5e38";
      EnterRoomFail["interface_fail"] = "\u63a5\u53e3\u8bf7\u6c42\u5f02\u5e38";
      EnterRoomFail["has_kickout"] = "\u65e0\u6cd5\u8fdb\u5165\u8be5\u623f\u95f4";
      EnterRoomFail["has_playing"] = "\u6e38\u620f\u5df2\u5f00\u59cb\uff0c\u65e0\u6cd5\u8fdb\u5165";
      EnterRoomFail["account_error"] = "\u8d26\u53f7\u5f02\u5e38\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\uff01";
      EnterRoomFail["net_fail_reload"] = "\u7f51\u7edc\u5f02\u5e38\u8bf7\u91cd\u65b0\u52a0\u8f7d\u6e38\u620f\uff01";
    })(EnterRoomFail = exports.EnterRoomFail || (exports.EnterRoomFail = {}));
    var WordMessage;
    (function(WordMessage) {
      WordMessage["back_to_lobby"] = "\u9000\u51fa\u5f53\u524d\u6e38\u620f\uff1f";
      WordMessage["over_bet_limit"] = "\u8d85\u51fa\u4e0b\u6ce8\u4e0a\u9650\uff01";
      WordMessage["out_app"] = "\u9000\u51fa\u5f53\u524d\u5e94\u7528\uff1f";
      WordMessage["cheat_open"] = "\u4f5c\u5f0a\u5f00\u5173\u88ab\u6253\u5f00";
      WordMessage["out_action_tip"] = "\u8bf7\u70b9\u51fb\u9875\u9762\u5de6\u4e0b\u65b9\u7684 x \u6216\u8005 -> \u9000\u51fa\u5e94\u7528\uff01";
      WordMessage["login_page_action_tip"] = "\u662f\u5426\u9000\u51fa\u5230\u767b\u5f55\u9875\u9762\uff1f";
      WordMessage["audio_not_support"] = "\u8bed\u97f3\u5931\u8d25\uff0c\u5f55\u97f3\u6743\u9650\u672a\u5f00\u542f\uff01";
    })(WordMessage = exports.WordMessage || (exports.WordMessage = {}));
    var CreateRoomFail;
    (function(CreateRoomFail) {
      CreateRoomFail["param_error"] = "\u53c2\u6570\u9519\u8bef";
      CreateRoomFail["interface_fail"] = "\u63a5\u53e3\u8bf7\u6c42\u5f02\u5e38";
      CreateRoomFail["user_not_exist"] = "\u7528\u6237\u4e0d\u5b58\u5728";
      CreateRoomFail["diamond_not_enough"] = "\u94bb\u4f59\u989d\u4e0d\u8db3";
      CreateRoomFail["race_error"] = "\u6bd4\u8d5b\u521b\u5efa\u5931\u8d25";
      CreateRoomFail["cash_error"] = "\u94bb\u6263\u9664\u5931\u8d25";
      CreateRoomFail["faill"] = "\u623f\u95f4\u521b\u5efa\u5931\u8d25";
    })(CreateRoomFail = exports.CreateRoomFail || (exports.CreateRoomFail = {}));
    var NoticeType;
    (function(NoticeType) {
      NoticeType["startRoomGame"] = "startRoomGame";
      NoticeType["landlordSelected"] = "landlordSelected";
      NoticeType["voicePlay"] = "audioPlayNotice";
      NoticeType["enterRoom"] = "enterRoom";
      NoticeType["raceBet"] = "raceBet";
      NoticeType["kickOutMemberFromRoom"] = "kickOutMemberFromRoom";
      NoticeType["chatCartonMessage"] = "chatCartonMessage";
      NoticeType["sureBeLandlordInTurn"] = "sureBeLandlordInTurn";
      NoticeType["cancelRaceBet"] = "cancelRaceBet";
    })(NoticeType = exports.NoticeType || (exports.NoticeType = {}));
    exports.InterfaceUrl = {
      CREATE_ROOM: "/race/room/create_room",
      LOGIN_IN_ROOM: "/race/room/login_in_room",
      COST_DIAMOND: "/race/user/cost_diamond_in_room",
      CREATE_VISIT: "/race/user/create_visit_account",
      GET_CONFIG: "/race/room/get_config",
      CANCEL_BET: "/race/betrecord/cancel_bet_by_location",
      GET_ROOM_RESULT: "/race/room/get_room_result",
      RECHARGE_DIAMOND: "/race/user/recharge_diamond",
      AUDIO_UPLOAD: "/race/voice/uploadVoice",
      GET_USER_DIAMOND: "/race/user/get_user_diamond",
      GET_USER_INFO: "/race/user/get_user_info_by_id",
      IS_ROOM_EXIST: "/race/room/is_room_exist"
    };
    var TipDialogButtonAction;
    (function(TipDialogButtonAction) {
      TipDialogButtonAction[TipDialogButtonAction["SOCKET_CONNECT"] = 1] = "SOCKET_CONNECT";
      TipDialogButtonAction[TipDialogButtonAction["OUT_ROOM"] = 2] = "OUT_ROOM";
      TipDialogButtonAction[TipDialogButtonAction["RECHARGE"] = 3] = "RECHARGE";
      TipDialogButtonAction[TipDialogButtonAction["OUT_TO_LOGIN"] = 4] = "OUT_TO_LOGIN";
      TipDialogButtonAction[TipDialogButtonAction["OUT_TO_REGISTER"] = 5] = "OUT_TO_REGISTER";
      TipDialogButtonAction[TipDialogButtonAction["RE_IN_GAME"] = 6] = "RE_IN_GAME";
      TipDialogButtonAction[TipDialogButtonAction["OUT_TO_LOBBY"] = 7] = "OUT_TO_LOBBY";
      TipDialogButtonAction[TipDialogButtonAction["KICKOUT_MEMBER"] = 8] = "KICKOUT_MEMBER";
      TipDialogButtonAction[TipDialogButtonAction["OUT_APP"] = 9] = "OUT_APP";
      TipDialogButtonAction[TipDialogButtonAction["TURN_LANDLORD_TRUE"] = 10] = "TURN_LANDLORD_TRUE";
    })(TipDialogButtonAction = exports.TipDialogButtonAction || (exports.TipDialogButtonAction = {}));
    var ChatMessageType;
    (function(ChatMessageType) {
      ChatMessageType[ChatMessageType["WEN_ZI"] = 1] = "WEN_ZI";
      ChatMessageType[ChatMessageType["PIC"] = 2] = "PIC";
      ChatMessageType[ChatMessageType["QIANG_ZHUANG"] = 3] = "QIANG_ZHUANG";
    })(ChatMessageType = exports.ChatMessageType || (exports.ChatMessageType = {}));
    exports.ConsoleType = {
      SOCKET: "_socket_",
      SOCKET_SEND: "_socket_send_",
      SOCKET_GET: "_socket_get_",
      INTERfACE: "_interface_",
      RACE_SCORE: "_race_score_"
    };
    cc._RF.pop();
  }, {} ],
  CreateRoomPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41040oqJ1lKYo/quGg1MPu/", "CreateRoomPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var UserManage_1 = require("../../store/User/UserManage");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var loglevel_1 = require("loglevel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.createButton = null;
        _this.cancelButton = null;
        _this.closeButton = null;
        _this.renshu_part_one = null;
        _this.renshu_part_two = null;
        _this.renshu_part_three = null;
        _this.daikai_part = null;
        _this.aa_part = null;
        _this.jushu_part_one = null;
        _this.jushu_part_two = null;
        _this.jushu_part_three = null;
        _this.jushu_part_four = null;
        _this.xiazhu_part_one = null;
        _this.xiazhu_part_two = null;
        _this.xiazhu_part_three = null;
        _this.xiazhu_part_four = null;
        _this.renshu_one = null;
        _this.one_renshu_label = null;
        _this.renshu_two = null;
        _this.two_renshu_label = null;
        _this.renshu_three = null;
        _this.three_renshu_label = null;
        _this.jushu_one = null;
        _this.jushu_two = null;
        _this.jushu_three = null;
        _this.jushu_four = null;
        _this.one_jushu_label = null;
        _this.two_jushu_label = null;
        _this.three_jushu_label = null;
        _this.four_jushu_label = null;
        _this.DaiKai = null;
        _this.AA = null;
        _this.QiangzhuangTurn = null;
        _this.QiangzhuangRap = null;
        _this.xiazhu_one = null;
        _this.xiazhu_two = null;
        _this.xiazhu_three = null;
        _this.xiazhu_four = null;
        _this.one_xiazhu_label = null;
        _this.two_xiazhu_label = null;
        _this.three_xiazhu_label = null;
        _this.four_xiazhu_label = null;
        _this.one_jushu_diamond_label = null;
        _this.two_jushu_diamond_label = null;
        _this.three_jushu_diamond_label = null;
        _this.four_jushu_diamond_label = null;
        _this.one_xiazhu_diamond_label = null;
        _this.two_xiazhu_diamond_label = null;
        _this.three_xiazhu_diamond_label = null;
        _this.four_xiazhu_diamond_label = null;
        _this.tipDialog = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.renshu_one.isChecked = true;
        this.jushu_one.isChecked = true;
        this.DaiKai.isChecked = true;
        this.xiazhu_one.isChecked = true;
        this.QiangzhuangTurn.isChecked = true;
      };
      NewClass.prototype.setShow = function() {
        this.one_renshu_label.string = this.creatDiamondConfig.roomPeople.one.peoplecount + "\u4eba";
        this.two_renshu_label.string = this.creatDiamondConfig.roomPeople.two.peoplecount + "\u4eba";
        this.three_renshu_label.string = this.creatDiamondConfig.roomPeople.three.peoplecount + "\u4eba";
        this.one_jushu_label.string = this.creatDiamondConfig.totalRace.one.raceCount + "\u5c40";
        this.two_jushu_label.string = this.creatDiamondConfig.totalRace.two.raceCount + "\u5c40";
        this.three_jushu_label.string = this.creatDiamondConfig.totalRace.three.raceCount + "\u5c40";
        this.four_jushu_label.string = this.creatDiamondConfig.totalRace.four.raceCount + "\u5c40";
        this.one_xiazhu_label.string = this.creatDiamondConfig.betLimit.one.limitVal + "";
        this.two_xiazhu_label.string = this.creatDiamondConfig.betLimit.two.limitVal + "";
        this.three_xiazhu_label.string = this.creatDiamondConfig.betLimit.three.limitVal + "";
        this.four_xiazhu_label.string = this.creatDiamondConfig.betLimit.four.limitVal + "";
        this.setJuShuDiamondShow(Const_1.CreateRoomPayModel.DAI_KAI);
        this.setXiaZhuDiamondShow(Const_1.CreateRoomPayModel.DAI_KAI);
      };
      NewClass.prototype.setJuShuDiamondShow = function(mode) {
        if (mode == Const_1.CreateRoomPayModel.AA) {
          this.one_jushu_diamond_label.string = this.creatDiamondConfig.totalRace.one.aaDiamond + "";
          this.two_jushu_diamond_label.string = this.creatDiamondConfig.totalRace.two.aaDiamond + "";
          this.three_jushu_diamond_label.string = this.creatDiamondConfig.totalRace.three.aaDiamond + "";
          this.four_jushu_diamond_label.string = this.creatDiamondConfig.totalRace.four.aaDiamond + "";
        } else {
          this.one_jushu_diamond_label.string = this.creatDiamondConfig.totalRace.one.daiKaiDiamond + "";
          this.two_jushu_diamond_label.string = this.creatDiamondConfig.totalRace.two.daiKaiDiamond + "";
          this.three_jushu_diamond_label.string = this.creatDiamondConfig.totalRace.three.daiKaiDiamond + "";
          this.four_jushu_diamond_label.string = this.creatDiamondConfig.totalRace.four.daiKaiDiamond + "";
        }
      };
      NewClass.prototype.setXiaZhuDiamondShow = function(mode) {
        if (mode == Const_1.CreateRoomPayModel.AA) {
          this.one_xiazhu_diamond_label.string = this.creatDiamondConfig.betLimit.one.aaRate + "\u500d";
          this.two_xiazhu_diamond_label.string = this.creatDiamondConfig.betLimit.two.aaRate + "\u500d";
          this.three_xiazhu_diamond_label.string = this.creatDiamondConfig.betLimit.three.aaRate + "\u500d";
          this.four_xiazhu_diamond_label.string = this.creatDiamondConfig.betLimit.four.aaRate + "\u500d";
        } else {
          this.one_xiazhu_diamond_label.string = this.creatDiamondConfig.betLimit.one.daiKaiRate + "\u500d";
          this.two_xiazhu_diamond_label.string = this.creatDiamondConfig.betLimit.two.daiKaiRate + "\u500d";
          this.three_xiazhu_diamond_label.string = this.creatDiamondConfig.betLimit.three.daiKaiRate + "\u500d";
          this.four_xiazhu_diamond_label.string = this.creatDiamondConfig.betLimit.four.daiKaiRate + "\u500d";
        }
      };
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.creatDiamondConfig = ConfigManage_1.default.getCreateDiamondConfig();
        this.setShow();
        this.toggleInit();
        this.cancelButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.createButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          var renshu = null;
          var jushu = null;
          var payMode = null;
          var xiazhu = null;
          var thePlayMode = null;
          if (_this.renshu_one.isChecked) renshu = _this.creatDiamondConfig.roomPeople.one.peoplecount; else if (_this.renshu_two.isChecked) renshu = _this.creatDiamondConfig.roomPeople.two.peoplecount; else {
            if (!_this.renshu_three.isChecked) {
              renshu = null;
              loglevel_1.default.error("\u521b\u5efa\u623f\u95f4\u5931\u8d25\uff0c\u4eba\u6570\u4e0d\u80fd\u4e3a\u7a7a");
              return;
            }
            renshu = _this.creatDiamondConfig.roomPeople.three.peoplecount;
          }
          if (_this.jushu_one.isChecked) jushu = _this.creatDiamondConfig.totalRace.one.raceCount; else if (_this.jushu_two.isChecked) jushu = _this.creatDiamondConfig.totalRace.two.raceCount; else if (_this.jushu_three.isChecked) jushu = _this.creatDiamondConfig.totalRace.three.raceCount; else {
            if (!_this.jushu_four.isChecked) {
              jushu = null;
              loglevel_1.default.error("\u521b\u5efa\u623f\u95f4\u5931\u8d25\uff0c\u5c40\u6570\u4e0d\u80fd\u4e3a\u7a7a");
              return;
            }
            jushu = _this.creatDiamondConfig.totalRace.four.raceCount;
          }
          thePlayMode = _this.QiangzhuangTurn.isChecked ? Const_1.playMode.TURN : Const_1.playMode.RAP;
          if (_this.DaiKai.isChecked) {
            payMode = Const_1.CreateRoomPayModel.DAI_KAI;
            _this.setJuShuDiamondShow(Const_1.CreateRoomPayModel.DAI_KAI);
            _this.setXiaZhuDiamondShow(Const_1.CreateRoomPayModel.DAI_KAI);
          } else {
            if (!_this.AA.isChecked) {
              payMode = null;
              loglevel_1.default.error("\u521b\u5efa\u623f\u95f4\u5931\u8d25\uff0c\u4ed8\u6b3e\u6a21\u5f0f\u4e0d\u80fd\u4e3a\u7a7a");
              return;
            }
            payMode = Const_1.CreateRoomPayModel.AA;
            _this.setJuShuDiamondShow(Const_1.CreateRoomPayModel.AA);
            _this.setXiaZhuDiamondShow(Const_1.CreateRoomPayModel.AA);
          }
          if (_this.xiazhu_one.isChecked) xiazhu = _this.creatDiamondConfig.betLimit.one.limitVal; else if (_this.xiazhu_two.isChecked) xiazhu = _this.creatDiamondConfig.betLimit.two.limitVal; else if (_this.xiazhu_three.isChecked) xiazhu = _this.creatDiamondConfig.betLimit.three.limitVal; else {
            if (!_this.xiazhu_four.isChecked) {
              xiazhu = null;
              loglevel_1.default.error("\u521b\u5efa\u623f\u95f4\u5931\u8d25\uff0c\u4e0b\u6ce8\u4e0a\u9650\u4e0d\u80fd\u4e3a\u7a7a");
              return;
            }
            xiazhu = _this.creatDiamondConfig.betLimit.four.limitVal;
          }
          loglevel_1.default.info("\u521b\u5efa\u4fe1\u606f\uff1a\u4eba\u6570\uff1a", renshu, ",\u5c40\u6570\uff1a", jushu, ",\u4ed8\u6b3e\u6a21\u5f0f:", payMode, ",\u4e0b\u6ce8\u4e0a\u9650\uff1a", xiazhu, ",\u62a2\u5e84\u6a21\u5f0f\uff1a", thePlayMode);
          _this.dealCreateRoom(UserManage_1.default.userInfo.id, 3, 5, payMode, xiazhu, thePlayMode);
        });
      };
      NewClass.prototype.dealCreateRoom = function(userId, renshu, jushu, payMode, xiazhu, thePlayMode) {
        return __awaiter(this, void 0, void 0, function() {
          var res, roomInfo;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, RoomManage_1.default.createRoom(userId, renshu, jushu, payMode, xiazhu, thePlayMode) ];

             case 1:
              res = _a.sent();
              loglevel_1.default.info("\u623f\u95f4\u521b\u5efa\u5b8c\u6bd5\u4fe1\u606f\uff1a", res);
              if (res.result === Const_1.ResponseStatus.SUCCESS) {
                roomInfo = res.extObject;
                RoomManage_1.default.setRoomItem(roomInfo);
                this.node.destroy();
                RoomManage_1.default.setEnterRoomParam({
                  model: Const_1.EnterRoomModel.CREATE_ROOM,
                  userId: UserManage_1.default.userInfo.id,
                  roomId: roomInfo.id
                });
                loglevel_1.default.info("start_game_test:\u521b\u5efa\u6210\u529f\uff0c\u8df3\u8f6c\u5230\u623f\u95f4\u9875\u9762\uff0c\u7528\u6237ID:", UserManage_1.default.userInfo.id, ",\u623f\u95f4ID:", roomInfo.id);
                loglevel_1.default.info("\u8fdb\u5165\u6e38\u620f\u623f\u95f4");
                cc.director.loadScene("RollRoomScene");
                return [ 2 ];
              }
              loglevel_1.default.error("\u623f\u95f4\u521b\u5efa\u5931\u8d25");
              this.showCreateRoomFailTip(res.extObject);
              this.node.destroy();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.showCreateRoomFailTip = function(info) {
        var node = cc.instantiate(this.tipDialog);
        var scriptOb = node.getComponent("TipDialog");
        node.parent = this.node.parent;
        node.active = true;
        var contenShow = Const_1.CreateRoomFail[info.message];
        "diamond_not_enough" === info.message && (contenShow = "\u94bb\u4f59\u989d\u4e0d\u8db3\uff0c\u8bf7\u70b9\u51fb\u8d2d\u4e70\uff01");
        var dialogParam = {
          sureButtonShow: true,
          cancelButtonShow: true,
          content: contenShow,
          cancelButtonAction: null,
          sureButtonAction: Const_1.TipDialogButtonAction.RECHARGE
        };
        scriptOb.tipDialogShow(dialogParam);
      };
      NewClass.prototype.toggleInit = function() {
        var _this = this;
        this.renshu_one.node.on("toggle", function() {
          if (_this.renshu_one.isChecked) {
            _this.renshu_two.isChecked = false;
            _this.renshu_three.isChecked = false;
          }
        }, this);
        this.renshu_two.node.on("toggle", function() {
          if (_this.renshu_two.isChecked) {
            _this.renshu_one.isChecked = false;
            _this.renshu_three.isChecked = false;
          }
        }, this);
        this.renshu_three.node.on("toggle", function() {
          if (_this.renshu_three.isChecked) {
            _this.renshu_one.isChecked = false;
            _this.renshu_two.isChecked = false;
          }
        }, this);
        this.jushu_one.node.on("toggle", function() {
          if (_this.jushu_one.isChecked) {
            _this.jushu_two.isChecked = false;
            _this.jushu_three.isChecked = false;
            _this.jushu_four.isChecked = false;
          }
        }, this);
        this.jushu_two.node.on("toggle", function() {
          if (_this.jushu_two.isChecked) {
            _this.jushu_one.isChecked = false;
            _this.jushu_three.isChecked = false;
            _this.jushu_four.isChecked = false;
          }
        }, this);
        this.jushu_three.node.on("toggle", function() {
          if (_this.jushu_three.isChecked) {
            _this.jushu_one.isChecked = false;
            _this.jushu_two.isChecked = false;
            _this.jushu_four.isChecked = false;
          }
        }, this);
        this.jushu_four.node.on("toggle", function() {
          if (_this.jushu_four.isChecked) {
            _this.jushu_one.isChecked = false;
            _this.jushu_two.isChecked = false;
            _this.jushu_three.isChecked = false;
          }
        }, this);
        this.DaiKai.node.on("toggle", function() {
          if (_this.DaiKai.isChecked) {
            _this.AA.isChecked = false;
            _this.setJuShuDiamondShow(Const_1.CreateRoomPayModel.DAI_KAI);
            _this.setXiaZhuDiamondShow(Const_1.CreateRoomPayModel.DAI_KAI);
          }
        }, this);
        this.AA.node.on("toggle", function() {
          if (_this.AA.isChecked) {
            _this.DaiKai.isChecked = false;
            _this.setJuShuDiamondShow(Const_1.CreateRoomPayModel.AA);
            _this.setXiaZhuDiamondShow(Const_1.CreateRoomPayModel.AA);
          }
        }, this);
        this.xiazhu_one.node.on("toggle", function() {
          if (_this.xiazhu_one.isChecked) {
            _this.xiazhu_two.isChecked = false;
            _this.xiazhu_three.isChecked = false;
            _this.xiazhu_four.isChecked = false;
          }
        }, this);
        this.xiazhu_two.node.on("toggle", function() {
          if (_this.xiazhu_two.isChecked) {
            _this.xiazhu_one.isChecked = false;
            _this.xiazhu_three.isChecked = false;
            _this.xiazhu_four.isChecked = false;
          }
        }, this);
        this.xiazhu_three.node.on("toggle", function() {
          if (_this.xiazhu_three.isChecked) {
            _this.xiazhu_one.isChecked = false;
            _this.xiazhu_two.isChecked = false;
            _this.xiazhu_four.isChecked = false;
          }
        }, this);
        this.xiazhu_four.node.on("toggle", function() {
          if (_this.xiazhu_four.isChecked) {
            _this.xiazhu_one.isChecked = false;
            _this.xiazhu_two.isChecked = false;
            _this.xiazhu_three.isChecked = false;
          }
        }, this);
        this.renshu_part_one.on(cc.Node.EventType.TOUCH_END, function() {
          _this.renshu_one.isChecked = true;
          _this.renshu_two.isChecked = false;
          _this.renshu_three.isChecked = false;
        }, this);
        this.renshu_part_two.on(cc.Node.EventType.TOUCH_END, function() {
          _this.renshu_two.isChecked = true;
          _this.renshu_one.isChecked = false;
          _this.renshu_three.isChecked = false;
        }, this);
        this.renshu_part_three.on(cc.Node.EventType.TOUCH_END, function() {
          _this.renshu_three.isChecked = true;
          _this.renshu_one.isChecked = false;
          _this.renshu_two.isChecked = false;
        }, this);
        this.jushu_part_one.on(cc.Node.EventType.TOUCH_END, function() {
          _this.jushu_one.isChecked = true;
          _this.jushu_two.isChecked = false;
          _this.jushu_three.isChecked = false;
          _this.jushu_four.isChecked = false;
        }, this);
        this.jushu_part_two.on(cc.Node.EventType.TOUCH_END, function() {
          _this.jushu_two.isChecked = true;
          _this.jushu_one.isChecked = false;
          _this.jushu_three.isChecked = false;
          _this.jushu_four.isChecked = false;
        }, this);
        this.jushu_part_three.on(cc.Node.EventType.TOUCH_END, function() {
          _this.jushu_three.isChecked = true;
          _this.jushu_one.isChecked = false;
          _this.jushu_two.isChecked = false;
          _this.jushu_four.isChecked = false;
        }, this);
        this.jushu_part_four.on(cc.Node.EventType.TOUCH_END, function() {
          _this.jushu_four.isChecked = true;
          _this.jushu_one.isChecked = false;
          _this.jushu_two.isChecked = false;
          _this.jushu_three.isChecked = false;
        }, this);
        this.daikai_part.on(cc.Node.EventType.TOUCH_END, function() {
          _this.DaiKai.isChecked = true;
          _this.AA.isChecked = false;
          _this.setJuShuDiamondShow(Const_1.CreateRoomPayModel.DAI_KAI);
          _this.setXiaZhuDiamondShow(Const_1.CreateRoomPayModel.DAI_KAI);
        }, this);
        this.aa_part.on(cc.Node.EventType.TOUCH_END, function() {
          _this.AA.isChecked = true;
          _this.DaiKai.isChecked = false;
          _this.setJuShuDiamondShow(Const_1.CreateRoomPayModel.AA);
          _this.setXiaZhuDiamondShow(Const_1.CreateRoomPayModel.AA);
        }, this);
        this.xiazhu_part_one.on(cc.Node.EventType.TOUCH_END, function() {
          _this.xiazhu_one.isChecked = true;
          _this.xiazhu_two.isChecked = false;
          _this.xiazhu_three.isChecked = false;
          _this.xiazhu_four.isChecked = false;
        }, this);
        this.xiazhu_part_two.on(cc.Node.EventType.TOUCH_END, function() {
          _this.xiazhu_two.isChecked = true;
          _this.xiazhu_one.isChecked = false;
          _this.xiazhu_three.isChecked = false;
          _this.xiazhu_four.isChecked = false;
        }, this);
        this.xiazhu_part_three.on(cc.Node.EventType.TOUCH_END, function() {
          _this.xiazhu_three.isChecked = true;
          _this.xiazhu_one.isChecked = false;
          _this.xiazhu_two.isChecked = false;
          _this.xiazhu_four.isChecked = false;
        }, this);
        this.xiazhu_part_four.on(cc.Node.EventType.TOUCH_END, function() {
          _this.xiazhu_four.isChecked = true;
          _this.xiazhu_one.isChecked = false;
          _this.xiazhu_two.isChecked = false;
          _this.xiazhu_three.isChecked = false;
        }, this);
      };
      __decorate([ property(cc.Button) ], NewClass.prototype, "createButton", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "cancelButton", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "closeButton", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "renshu_part_one", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "renshu_part_two", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "renshu_part_three", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "daikai_part", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "aa_part", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "jushu_part_one", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "jushu_part_two", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "jushu_part_three", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "jushu_part_four", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "xiazhu_part_one", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "xiazhu_part_two", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "xiazhu_part_three", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "xiazhu_part_four", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "renshu_one", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "one_renshu_label", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "renshu_two", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "two_renshu_label", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "renshu_three", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "three_renshu_label", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "jushu_one", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "jushu_two", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "jushu_three", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "jushu_four", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "one_jushu_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "two_jushu_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "three_jushu_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "four_jushu_label", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "DaiKai", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "AA", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "QiangzhuangTurn", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "QiangzhuangRap", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "xiazhu_one", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "xiazhu_two", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "xiazhu_three", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "xiazhu_four", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "one_xiazhu_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "two_xiazhu_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "three_xiazhu_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "four_xiazhu_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "one_jushu_diamond_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "two_jushu_diamond_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "three_jushu_diamond_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "four_jushu_diamond_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "one_xiazhu_diamond_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "two_xiazhu_diamond_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "three_xiazhu_diamond_label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "four_xiazhu_diamond_label", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "tipDialog", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage",
    loglevel: 28
  } ],
  CustomerPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2aa2cdESx1Gi4gFXepcC9qS", "CustomerPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cutomerWechat = null;
        _this.closeButton = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.cutomerWechat.string = "\u5ba2\u670d\u5fae\u4fe1\u53f7\uff1a" + ConfigManage_1.default.getCustomerWechatNum();
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          _this.node.destroy();
        });
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "cutomerWechat", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "closeButton", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../store/Config/ConfigManage": "ConfigManage"
  } ],
  2: [ function(require, module, exports) {
    module.exports = require("./lib/axios");
  }, {
    "./lib/axios": 4
  } ],
  3: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    var settle = require("./../core/settle");
    var buildURL = require("./../helpers/buildURL");
    var parseHeaders = require("./../helpers/parseHeaders");
    var isURLSameOrigin = require("./../helpers/isURLSameOrigin");
    var createError = require("../core/createError");
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        utils.isFormData(requestData) && delete requestHeaders["Content-Type"];
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password || "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        request.onreadystatechange = function handleLoad() {
          if (!request || 4 !== request.readyState) return;
          if (0 === request.status && !(request.responseURL && 0 === request.responseURL.indexOf("file:"))) return;
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = config.responseType && "text" !== config.responseType ? request.response : request.responseText;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config,
            request: request
          };
          settle(resolve, reject, response);
          request = null;
        };
        request.onabort = function handleAbort() {
          if (!request) return;
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          reject(createError("timeout of " + config.timeout + "ms exceeded", config, "ECONNABORTED", request));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var cookies = require("./../helpers/cookies");
          var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          xsrfValue && (requestHeaders[config.xsrfHeaderName] = xsrfValue);
        }
        "setRequestHeader" in request && utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          "undefined" === typeof requestData && "content-type" === key.toLowerCase() ? delete requestHeaders[key] : request.setRequestHeader(key, val);
        });
        config.withCredentials && (request.withCredentials = true);
        if (config.responseType) try {
          request.responseType = config.responseType;
        } catch (e) {
          if ("json" !== config.responseType) throw e;
        }
        "function" === typeof config.onDownloadProgress && request.addEventListener("progress", config.onDownloadProgress);
        "function" === typeof config.onUploadProgress && request.upload && request.upload.addEventListener("progress", config.onUploadProgress);
        config.cancelToken && config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) return;
          request.abort();
          reject(cancel);
          request = null;
        });
        void 0 === requestData && (requestData = null);
        request.send(requestData);
      });
    };
  }, {
    "../core/createError": 10,
    "./../core/settle": 14,
    "./../helpers/buildURL": 18,
    "./../helpers/cookies": 20,
    "./../helpers/isURLSameOrigin": 22,
    "./../helpers/parseHeaders": 24,
    "./../utils": 26
  } ],
  4: [ function(require, module, exports) {
    "use strict";
    var utils = require("./utils");
    var bind = require("./helpers/bind");
    var Axios = require("./core/Axios");
    var mergeConfig = require("./core/mergeConfig");
    var defaults = require("./defaults");
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios = createInstance(defaults);
    axios.Axios = Axios;
    axios.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios.defaults, instanceConfig));
    };
    axios.Cancel = require("./cancel/Cancel");
    axios.CancelToken = require("./cancel/CancelToken");
    axios.isCancel = require("./cancel/isCancel");
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = require("./helpers/spread");
    module.exports = axios;
    module.exports.default = axios;
  }, {
    "./cancel/Cancel": 5,
    "./cancel/CancelToken": 6,
    "./cancel/isCancel": 7,
    "./core/Axios": 8,
    "./core/mergeConfig": 13,
    "./defaults": 16,
    "./helpers/bind": 17,
    "./helpers/spread": 25,
    "./utils": 26
  } ],
  5: [ function(require, module, exports) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module.exports = Cancel;
  }, {} ],
  6: [ function(require, module, exports) {
    "use strict";
    var Cancel = require("./Cancel");
    function CancelToken(executor) {
      if ("function" !== typeof executor) throw new TypeError("executor must be a function.");
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) throw this.reason;
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    };
    module.exports = CancelToken;
  }, {
    "./Cancel": 5
  } ],
  7: [ function(require, module, exports) {
    "use strict";
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }, {} ],
  8: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    var buildURL = require("../helpers/buildURL");
    var InterceptorManager = require("./InterceptorManager");
    var dispatchRequest = require("./dispatchRequest");
    var mergeConfig = require("./mergeConfig");
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if ("string" === typeof config) {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else config = config || {};
      config = mergeConfig(this.defaults, config);
      config.method = config.method ? config.method.toLowerCase() : "get";
      var chain = [ dispatchRequest, void 0 ];
      var promise = Promise.resolve(config);
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) promise = promise.then(chain.shift(), chain.shift());
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach([ "delete", "get", "head", "options" ], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(utils.merge(config || {}, {
          method: method,
          url: url
        }));
      };
    });
    utils.forEach([ "post", "put", "patch" ], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(utils.merge(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });
    module.exports = Axios;
  }, {
    "../helpers/buildURL": 18,
    "./../utils": 26,
    "./InterceptorManager": 9,
    "./dispatchRequest": 11,
    "./mergeConfig": 13
  } ],
  9: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      this.handlers[id] && (this.handlers[id] = null);
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        null !== h && fn(h);
      });
    };
    module.exports = InterceptorManager;
  }, {
    "./../utils": 26
  } ],
  10: [ function(require, module, exports) {
    "use strict";
    var enhanceError = require("./enhanceError");
    module.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }, {
    "./enhanceError": 12
  } ],
  11: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    var transformData = require("./transformData");
    var isCancel = require("../cancel/isCancel");
    var defaults = require("../defaults");
    var isAbsoluteURL = require("./../helpers/isAbsoluteURL");
    var combineURLs = require("./../helpers/combineURLs");
    function throwIfCancellationRequested(config) {
      config.cancelToken && config.cancelToken.throwIfRequested();
    }
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.baseURL && !isAbsoluteURL(config.url) && (config.url = combineURLs(config.baseURL, config.url));
      config.headers = config.headers || {};
      config.data = transformData(config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
      utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData(response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          reason && reason.response && (reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse));
        }
        return Promise.reject(reason);
      });
    };
  }, {
    "../cancel/isCancel": 7,
    "../defaults": 16,
    "./../helpers/combineURLs": 19,
    "./../helpers/isAbsoluteURL": 21,
    "./../utils": 26,
    "./transformData": 15
  } ],
  12: [ function(require, module, exports) {
    "use strict";
    module.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      code && (error.code = code);
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      };
      return error;
    };
  }, {} ],
  13: [ function(require, module, exports) {
    "use strict";
    var utils = require("../utils");
    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      utils.forEach([ "url", "method", "params", "data" ], function valueFromConfig2(prop) {
        "undefined" !== typeof config2[prop] && (config[prop] = config2[prop]);
      });
      utils.forEach([ "headers", "auth", "proxy" ], function mergeDeepProperties(prop) {
        utils.isObject(config2[prop]) ? config[prop] = utils.deepMerge(config1[prop], config2[prop]) : "undefined" !== typeof config2[prop] ? config[prop] = config2[prop] : utils.isObject(config1[prop]) ? config[prop] = utils.deepMerge(config1[prop]) : "undefined" !== typeof config1[prop] && (config[prop] = config1[prop]);
      });
      utils.forEach([ "baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath" ], function defaultToConfig2(prop) {
        "undefined" !== typeof config2[prop] ? config[prop] = config2[prop] : "undefined" !== typeof config1[prop] && (config[prop] = config1[prop]);
      });
      return config;
    };
  }, {
    "../utils": 26
  } ],
  14: [ function(require, module, exports) {
    "use strict";
    var createError = require("./createError");
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      !validateStatus || validateStatus(response.status) ? resolve(response) : reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
    };
  }, {
    "./createError": 10
  } ],
  15: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    module.exports = function transformData(data, headers, fns) {
      utils.forEach(fns, function transform(fn) {
        data = fn(data, headers);
      });
      return data;
    };
  }, {
    "./../utils": 26
  } ],
  16: [ function(require, module, exports) {
    (function(process) {
      "use strict";
      var utils = require("./utils");
      var normalizeHeaderName = require("./helpers/normalizeHeaderName");
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        !utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"]) && (headers["Content-Type"] = value);
      }
      function getDefaultAdapter() {
        var adapter;
        "undefined" !== typeof process && "[object process]" === Object.prototype.toString.call(process) ? adapter = require("./adapters/http") : "undefined" !== typeof XMLHttpRequest && (adapter = require("./adapters/xhr"));
        return adapter;
      }
      var defaults = {
        adapter: getDefaultAdapter(),
        transformRequest: [ function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
          if (utils.isArrayBufferView(data)) return data.buffer;
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          if (utils.isObject(data)) {
            setContentTypeIfUnset(headers, "application/json;charset=utf-8");
            return JSON.stringify(data);
          }
          return data;
        } ],
        transformResponse: [ function transformResponse(data) {
          if ("string" === typeof data) try {
            data = JSON.parse(data);
          } catch (e) {}
          return data;
        } ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        }
      };
      defaults.headers = {
        common: {
          Accept: "application/json, text/plain, */*"
        }
      };
      utils.forEach([ "delete", "get", "head" ], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach([ "post", "put", "patch" ], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }).call(this, require("_process"));
  }, {
    "./adapters/http": 3,
    "./adapters/xhr": 3,
    "./helpers/normalizeHeaderName": 23,
    "./utils": 26,
    _process: 1
  } ],
  17: [ function(require, module, exports) {
    "use strict";
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) args[i] = arguments[i];
        return fn.apply(thisArg, args);
      };
    };
  }, {} ],
  18: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    function encode(val) {
      return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) return url;
      var serializedParams;
      if (paramsSerializer) serializedParams = paramsSerializer(params); else if (utils.isURLSearchParams(params)) serializedParams = params.toString(); else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (null === val || "undefined" === typeof val) return;
          utils.isArray(val) ? key += "[]" : val = [ val ];
          utils.forEach(val, function parseValue(v) {
            utils.isDate(v) ? v = v.toISOString() : utils.isObject(v) && (v = JSON.stringify(v));
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        -1 !== hashmarkIndex && (url = url.slice(0, hashmarkIndex));
        url += (-1 === url.indexOf("?") ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }, {
    "./../utils": 26
  } ],
  19: [ function(require, module, exports) {
    "use strict";
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }, {} ],
  20: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          utils.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
          utils.isString(path) && cookie.push("path=" + path);
          utils.isString(domain) && cookie.push("domain=" + domain);
          true === secure && cookie.push("secure");
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() {
          return null;
        },
        remove: function remove() {}
      };
    }();
  }, {
    "./../utils": 26
  } ],
  21: [ function(require, module, exports) {
    "use strict";
    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }, {} ],
  22: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }, {
    "./../utils": 26
  } ],
  23: [ function(require, module, exports) {
    "use strict";
    var utils = require("../utils");
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }, {
    "../utils": 26
  } ],
  24: [ function(require, module, exports) {
    "use strict";
    var utils = require("./../utils");
    var ignoreDuplicateOf = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) return parsed;
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
          parsed[key] = "set-cookie" === key ? (parsed[key] ? parsed[key] : []).concat([ val ]) : parsed[key] ? parsed[key] + ", " + val : val;
        }
      });
      return parsed;
    };
  }, {
    "./../utils": 26
  } ],
  25: [ function(require, module, exports) {
    "use strict";
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }, {} ],
  26: [ function(require, module, exports) {
    "use strict";
    var bind = require("./helpers/bind");
    var isBuffer = require("is-buffer");
    var toString = Object.prototype.toString;
    function isArray(val) {
      return "[object Array]" === toString.call(val);
    }
    function isArrayBuffer(val) {
      return "[object ArrayBuffer]" === toString.call(val);
    }
    function isFormData(val) {
      return "undefined" !== typeof FormData && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      result = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(val) : val && val.buffer && val.buffer instanceof ArrayBuffer;
      return result;
    }
    function isString(val) {
      return "string" === typeof val;
    }
    function isNumber(val) {
      return "number" === typeof val;
    }
    function isUndefined(val) {
      return "undefined" === typeof val;
    }
    function isObject(val) {
      return null !== val && "object" === typeof val;
    }
    function isDate(val) {
      return "[object Date]" === toString.call(val);
    }
    function isFile(val) {
      return "[object File]" === toString.call(val);
    }
    function isBlob(val) {
      return "[object Blob]" === toString.call(val);
    }
    function isFunction(val) {
      return "[object Function]" === toString.call(val);
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return "undefined" !== typeof URLSearchParams && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    function isStandardBrowserEnv() {
      if ("undefined" !== typeof navigator && ("ReactNative" === navigator.product || "NativeScript" === navigator.product || "NS" === navigator.product)) return false;
      return "undefined" !== typeof window && "undefined" !== typeof document;
    }
    function forEach(obj, fn) {
      if (null === obj || "undefined" === typeof obj) return;
      "object" !== typeof obj && (obj = [ obj ]);
      if (isArray(obj)) for (var i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj); else for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && fn.call(null, obj[key], key, obj);
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        "object" === typeof result[key] && "object" === typeof val ? result[key] = merge(result[key], val) : result[key] = val;
      }
      for (var i = 0, l = arguments.length; i < l; i++) forEach(arguments[i], assignValue);
      return result;
    }
    function deepMerge() {
      var result = {};
      function assignValue(val, key) {
        "object" === typeof result[key] && "object" === typeof val ? result[key] = deepMerge(result[key], val) : result[key] = "object" === typeof val ? deepMerge({}, val) : val;
      }
      for (var i = 0, l = arguments.length; i < l; i++) forEach(arguments[i], assignValue);
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        a[key] = thisArg && "function" === typeof val ? bind(val, thisArg) : val;
      });
      return a;
    }
    module.exports = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      deepMerge: deepMerge,
      extend: extend,
      trim: trim
    };
  }, {
    "./helpers/bind": 17,
    "is-buffer": 27
  } ],
  27: [ function(require, module, exports) {
    module.exports = function isBuffer(obj) {
      return null != obj && null != obj.constructor && "function" === typeof obj.constructor.isBuffer && obj.constructor.isBuffer(obj);
    };
  }, {} ],
  28: [ function(require, module, exports) {
    (function(root, definition) {
      "use strict";
      "function" === typeof define && define.amd ? define(definition) : "object" === typeof module && module.exports ? module.exports = definition() : root.log = definition();
    })(this, function() {
      "use strict";
      var noop = function() {};
      var undefinedType = "undefined";
      var isIE = typeof window !== undefinedType && typeof window.navigator !== undefinedType && /Trident\/|MSIE /.test(window.navigator.userAgent);
      var logMethods = [ "trace", "debug", "info", "warn", "error" ];
      function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if ("function" === typeof method.bind) return method.bind(obj);
        try {
          return Function.prototype.bind.call(method, obj);
        } catch (e) {
          return function() {
            return Function.prototype.apply.apply(method, [ obj, arguments ]);
          };
        }
      }
      function traceForIE() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [ console, arguments ]));
        console.trace && console.trace();
      }
      function realMethod(methodName) {
        "debug" === methodName && (methodName = "log");
        return typeof console !== undefinedType && ("trace" === methodName && isIE ? traceForIE : void 0 !== console[methodName] ? bindMethod(console, methodName) : void 0 !== console.log ? bindMethod(console, "log") : noop);
      }
      function replaceLoggingMethods(level, loggerName) {
        for (var i = 0; i < logMethods.length; i++) {
          var methodName = logMethods[i];
          this[methodName] = i < level ? noop : this.methodFactory(methodName, level, loggerName);
        }
        this.log = this.debug;
      }
      function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function() {
          if (typeof console !== undefinedType) {
            replaceLoggingMethods.call(this, level, loggerName);
            this[methodName].apply(this, arguments);
          }
        };
      }
      function defaultMethodFactory(methodName, level, loggerName) {
        return realMethod(methodName) || enableLoggingWhenConsoleArrives.apply(this, arguments);
      }
      function Logger(name, defaultLevel, factory) {
        var self = this;
        var currentLevel;
        var storageKey = "loglevel";
        "string" === typeof name ? storageKey += ":" + name : "symbol" === typeof name && (storageKey = void 0);
        function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || "silent").toUpperCase();
          if (typeof window === undefinedType || !storageKey) return;
          try {
            window.localStorage[storageKey] = levelName;
            return;
          } catch (ignore) {}
          try {
            window.document.cookie = encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
        }
        function getPersistedLevel() {
          var storedLevel;
          if (typeof window === undefinedType || !storageKey) return;
          try {
            storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}
          if (typeof storedLevel === undefinedType) try {
            var cookie = window.document.cookie;
            var location = cookie.indexOf(encodeURIComponent(storageKey) + "=");
            -1 !== location && (storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1]);
          } catch (ignore) {}
          void 0 === self.levels[storedLevel] && (storedLevel = void 0);
          return storedLevel;
        }
        self.name = name;
        self.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5
        };
        self.methodFactory = factory || defaultMethodFactory;
        self.getLevel = function() {
          return currentLevel;
        };
        self.setLevel = function(level, persist) {
          "string" === typeof level && void 0 !== self.levels[level.toUpperCase()] && (level = self.levels[level.toUpperCase()]);
          if (!("number" === typeof level && level >= 0 && level <= self.levels.SILENT)) throw "log.setLevel() called with invalid level: " + level;
          currentLevel = level;
          false !== persist && persistLevelIfPossible(level);
          replaceLoggingMethods.call(self, level, name);
          if (typeof console === undefinedType && level < self.levels.SILENT) return "No console available for logging";
        };
        self.setDefaultLevel = function(level) {
          getPersistedLevel() || self.setLevel(level, false);
        };
        self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
        };
        self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
        };
        var initialLevel = getPersistedLevel();
        null == initialLevel && (initialLevel = null == defaultLevel ? "WARN" : defaultLevel);
        self.setLevel(initialLevel, false);
      }
      var defaultLogger = new Logger();
      var _loggersByName = {};
      defaultLogger.getLogger = function getLogger(name) {
        if ("symbol" !== typeof name && "string" !== typeof name || "" === name) throw new TypeError("You must supply a name when creating a logger.");
        var logger = _loggersByName[name];
        logger || (logger = _loggersByName[name] = new Logger(name, defaultLogger.getLevel(), defaultLogger.methodFactory));
        return logger;
      };
      var _log = typeof window !== undefinedType ? window.log : void 0;
      defaultLogger.noConflict = function() {
        typeof window !== undefinedType && window.log === defaultLogger && (window.log = _log);
        return defaultLogger;
      };
      defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
      };
      defaultLogger["default"] = defaultLogger;
      return defaultLogger;
    });
  }, {} ],
  DealMachineBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a58f14UNl5O27sCylOSqQ0W", "DealMachineBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    function getLocationByLocaitonType(type) {
      var coordinate;
      switch (type) {
       case Const_1.TableLocationType.LAND:
        coordinate = {
          x: 218,
          y: 136
        };
        break;

       case Const_1.TableLocationType.LANDLORD:
        coordinate = {
          x: 2.5,
          y: 148
        };
        break;

       case Const_1.TableLocationType.MIDDLE:
        coordinate = {
          x: -2.5,
          y: -15
        };
        break;

       case Const_1.TableLocationType.SKY:
        coordinate = {
          x: -216,
          y: 140
        };
      }
      return coordinate;
    }
    exports.getLocationByLocaitonType = getLocationByLocaitonType;
    function getCircleListByLocationType(tableLocationType) {
      switch (tableLocationType) {
       case Const_1.TableLocationType.LAND:
        return [ Const_1.TableLocationType.LAND, Const_1.TableLocationType.LANDLORD, Const_1.TableLocationType.SKY, Const_1.TableLocationType.MIDDLE ];

       case Const_1.TableLocationType.LANDLORD:
        return [ Const_1.TableLocationType.LANDLORD, Const_1.TableLocationType.SKY, Const_1.TableLocationType.MIDDLE, Const_1.TableLocationType.LAND ];

       case Const_1.TableLocationType.MIDDLE:
        return [ Const_1.TableLocationType.MIDDLE, Const_1.TableLocationType.LAND, Const_1.TableLocationType.LANDLORD, Const_1.TableLocationType.SKY ];

       case Const_1.TableLocationType.SKY:
        return [ Const_1.TableLocationType.SKY, Const_1.TableLocationType.MIDDLE, Const_1.TableLocationType.LAND, Const_1.TableLocationType.LANDLORD ];
      }
    }
    exports.getCircleListByLocationType = getCircleListByLocationType;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const"
  } ],
  DealMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fffcb+DuS5HK5akxnZAtov3", "DealMachine");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Const_1 = require("../../common/Const");
    var DealMachineBase_1 = require("./DealMachineBase");
    var EventBus_1 = require("../../common/EventBus");
    var Const_2 = require("../../common/Const");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var DealMachine = function(_super) {
      __extends(DealMachine, _super);
      function DealMachine() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mahjongs = null;
        _this.mjDouble = null;
        _this.mahjongList = [];
        _this.mjIndex = -1;
        _this.mahongLong = 20;
        _this.mahjongShowKeepTime = .8;
        _this.flyTime = {
          sky: .6,
          middle: .6,
          land: .4,
          landlord: .5
        };
        _this.mahjongNameList = [];
        _this.fapaiVoice = null;
        return _this;
      }
      DealMachine.prototype.onEnable = function() {
        this.initTime();
        this.initMaj();
      };
      DealMachine.prototype.initTime = function() {
        var weights = Math.floor(ConfigManage_1.default.getDealTime() / (this.mahjongShowKeepTime + this.flyTime.sky + this.flyTime.middle + this.flyTime.land + this.flyTime.landlord) * 100) / 100;
        this.mahjongShowKeepTime = weights * this.mahjongShowKeepTime;
        this.flyTime.sky = weights * this.flyTime.sky;
        this.flyTime.middle = weights * this.flyTime.middle;
        this.flyTime.land = weights * this.flyTime.land;
        this.flyTime.landlord = weights * this.flyTime.landlord;
      };
      DealMachine.prototype.initMaj = function() {
        this.mjIndex = -1;
        var layout = this.node.getChildByName("Layout");
        for (var i = 0; i < this.mahongLong; i++) {
          var node = cc.instantiate(this.mahjongs);
          node.parent = layout;
          node.setPosition(0, 0);
          node.active = true;
          this.mahjongList.push(node);
        }
        this.mahjongNameList.push({
          locationType: Const_1.TableLocationType.LAND,
          name: "MjDouble" + Const_1.TableLocationType.LAND,
          location: DealMachineBase_1.getLocationByLocaitonType(Const_1.TableLocationType.LAND)
        });
        this.mahjongNameList.push({
          locationType: Const_1.TableLocationType.LANDLORD,
          name: "MjDouble" + Const_1.TableLocationType.LANDLORD,
          location: DealMachineBase_1.getLocationByLocaitonType(Const_1.TableLocationType.LANDLORD)
        });
        this.mahjongNameList.push({
          locationType: Const_1.TableLocationType.SKY,
          name: "MjDouble" + Const_1.TableLocationType.SKY,
          location: DealMachineBase_1.getLocationByLocaitonType(Const_1.TableLocationType.SKY)
        });
        this.mahjongNameList.push({
          locationType: Const_1.TableLocationType.MIDDLE,
          name: "MjDouble" + Const_1.TableLocationType.MIDDLE,
          location: DealMachineBase_1.getLocationByLocaitonType(Const_1.TableLocationType.MIDDLE)
        });
      };
      DealMachine.prototype.deal = function(tableLocationType) {
        var count = 0;
        var circleList = DealMachineBase_1.getCircleListByLocationType(tableLocationType);
        function backFun() {
          ++count;
          if (count >= 4) this.scheduleOnce(function() {
            EventBus_1.eventBus.emit(Const_2.EventType.LOCAL_NOTICE_EVENT, {
              type: Const_2.LocalNoticeEventType.DELIVERY_CARD_FINISHED_NOTICE
            });
          }, this.mahjongShowKeepTime); else {
            ++this.mjIndex;
            this.flyAnimation(this.mjIndex, circleList[count], backFun);
          }
        }
        ++this.mjIndex;
        this.flyAnimation(this.mjIndex, circleList[count], backFun);
      };
      DealMachine.prototype.reSetMahjong = function() {
        for (var i = 0; i < this.mahongLong; i++) {
          var t = this.mahjongList[i];
          t.getChildByName("One").active = true;
          t.getChildByName("Two").active = true;
        }
        this.mjIndex = 0;
      };
      DealMachine.prototype.checkAndAddMajong = function() {
        var _this = this;
        this.mahjongNameList.forEach(function(item) {
          var mhjong = cc.find("Canvas/Desk").getChildByName(item.name);
          if (!mhjong) {
            mhjong = cc.instantiate(_this.mjDouble);
            mhjong.name = item.name;
            mhjong.parent = cc.find("Canvas/Desk");
            mhjong.setPosition(item.location.x, item.location.y);
          }
        });
      };
      DealMachine.prototype.cleanMajong = function() {
        this.mahjongNameList.forEach(function(item) {
          var mhjong = cc.find("Canvas/Desk").getChildByName(item.name);
          mhjong && mhjong.destroy();
        });
      };
      DealMachine.prototype.flyAnimation = function(mjIndex, tableLocationType, func) {
        if (this.mahjongList.length <= 0) return;
        if (this.mjIndex >= this.mahjongList.length - 1) {
          this.reSetMahjong();
          this.flyAnimation(this.mjIndex, tableLocationType, func);
          return;
        }
        var mahjongName = "MjDouble" + tableLocationType;
        var mhjong = cc.find("Canvas/Desk").getChildByName(mahjongName);
        mhjong && mhjong.destroy();
        var t = this.mahjongList[this.mjIndex];
        t.getChildByName("One").active = false;
        t.getChildByName("Two").active = false;
        var node = cc.instantiate(this.mjDouble);
        node.name = mahjongName;
        node.parent = cc.find("Canvas/Desk");
        node.setPosition(320, 207);
        var location = DealMachineBase_1.getLocationByLocaitonType(tableLocationType);
        var flyTime = this.flyTime[tableLocationType];
        var action = cc.moveTo(flyTime, location.x, location.y);
        var b = cc.sequence(action, cc.callFunc(func, this));
        ConfigManage_1.default.isTxMusicOpen() && this.fapaiVoice.play();
        node.runAction(b);
      };
      DealMachine.prototype.start = function() {};
      __decorate([ property(cc.Prefab) ], DealMachine.prototype, "mahjongs", void 0);
      __decorate([ property(cc.Prefab) ], DealMachine.prototype, "mjDouble", void 0);
      __decorate([ property(cc.AudioSource) ], DealMachine.prototype, "fapaiVoice", void 0);
      DealMachine = __decorate([ ccclass ], DealMachine);
      return DealMachine;
    }(cc.Component);
    exports.default = DealMachine;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../store/Config/ConfigManage": "ConfigManage",
    "./DealMachineBase": "DealMachineBase"
  } ],
  DeskPart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9287FWOLxBfa55Jd60aKTu", "DeskPart");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var loglevel_1 = require("loglevel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Const_1 = require("../../common/Const");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var UserManage_1 = require("../../store/User/UserManage");
    var BetManage_1 = require("../../store/Bets/BetManage");
    var WebSocketManage_1 = require("../../common/WebSocketManage");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var Util_1 = require("../../common/Util");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.focus = null;
        _this.cancelChipAn = null;
        _this.typeValue = "";
        _this.bg = null;
        _this.scorePanel = null;
        _this.overBetLimitVoice = null;
        _this.chipCancelVoice = null;
        _this.betScore = null;
        _this.ownScore = 0;
        _this.allScore = 0;
        _this.touchLock = false;
        _this.overBetLimitLock = false;
        _this.isBetCanceling = false;
        _this.scheduleOb = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.toClearn();
      };
      NewClass.prototype.onEnable = function() {
        this.addClickEvent();
      };
      NewClass.prototype.toBet = function(betInfo) {
        var userId = betInfo.userId;
        var betLocationType = betInfo.betLocation;
        var betValue = betInfo.toValue - betInfo.fromVal;
        if (this.typeValue === betLocationType) {
          this.allScore = this.allScore + betValue;
          UserManage_1.default.userInfo.id === userId && (this.ownScore = this.ownScore + betValue);
          this.isLandlord() ? this.betScore.string = this.allScore + "" : this.betScore.string = this.ownScore + " / " + this.allScore;
        }
      };
      NewClass.prototype.toClearn = function() {
        this.bg.node.active = false;
        this.focus.node.active = false;
        this.betScore.string = "";
        this.ownScore = 0;
        this.allScore = 0;
        this.unschedule(this.scheduleOb);
      };
      NewClass.prototype.toOpen = function() {
        this.scorePanel.active = true;
        this.bg.node.active = true;
        this.focus.node.active = false;
        this.ownScore = 0;
        this.allScore = 0;
        this.isLandlord() ? this.betScore.string = "0" : this.betScore.string = "0 / 0";
      };
      NewClass.prototype.isLandlord = function() {
        var onNum = RoomManage_1.default.roomItem.oningRaceNum;
        if (UserManage_1.default.userInfo.id === RaceManage_1.default.raceList[onNum].landlordId) return true;
        return false;
      };
      NewClass.prototype.winFocusAmination = function() {
        var _this = this;
        var localString = this.typeValue + "Result";
        var oningNum = RoomManage_1.default.roomItem.oningRaceNum;
        if (RaceManage_1.default.raceList[oningNum][localString] === Const_1.CompareDxRe.BIG) {
          this.focus.node.active = true;
          var setV_1 = 150;
          this.focus.node.opacity = setV_1;
          this.scheduleOb = this.schedule(function() {
            setV_1 = 150 === setV_1 ? 255 : 150;
            _this.focus.node.opacity = setV_1;
          }, .8);
        }
      };
      NewClass.prototype.getDistance = function(lat1, lng1, lat2, lng2) {
        var radLat1 = lat1 * Math.PI / 180;
        var radLat2 = lat2 * Math.PI / 180;
        var a = radLat1 - radLat2;
        var b = lng1 * Math.PI / 180 - lng2 * Math.PI / 180;
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s *= 6378.137;
        s = Math.round(1e4 * s) / 1e4;
        return s;
      };
      NewClass.prototype.showCancelChipAn = function() {
        var node = cc.instantiate(this.cancelChipAn);
        node.parent = this.node;
        node.setPosition(0, 0);
        node.active = true;
      };
      NewClass.prototype.betCancel = function(info) {
        if (this.typeValue != info.betLocation) return;
        info.userId == UserManage_1.default.userInfo.id && (this.ownScore -= info.fromVal);
        this.allScore -= info.fromVal;
        this.isLandlord() ? this.betScore.string = this.allScore + "" : this.betScore.string = this.ownScore + " / " + this.allScore;
      };
      NewClass.prototype.isNeedToCancel = function(event) {
        var isTouchMove = Util_1.touchMoveEvent(event);
        if (!isTouchMove) return false;
        if (this.isBetCanceling || 0 == this.ownScore) return false;
        var raceNum = RoomManage_1.default.roomItem.oningRaceNum;
        if (RaceManage_1.default.raceList[raceNum].state !== Const_1.RaceState.BET) return false;
        if (this.isOverBetTime()) return false;
        return true;
      };
      NewClass.prototype.isCanBet = function() {
        if (null != UserManage_1.default.getUserInfoInRoom() && UserManage_1.default.getUserInfoInRoom().roleType == Const_1.gameMemberType.VISITOR) {
          loglevel_1.default.error("\u6e38\u5ba2\u4e0d\u80fd\u70b9\u684c\u5b50\u4e0b\u6ce8");
          return false;
        }
        return true;
      };
      NewClass.prototype.addClickEvent = function() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          if (!_this.isCanBet()) return;
          if (!_this.isNeedToCancel(event)) return;
          var betLocation = _this.typeValue;
          var raceNum = RoomManage_1.default.roomItem.oningRaceNum;
          var betParam = {
            userId: UserManage_1.default.userInfo.id,
            raceNum: raceNum,
            betLocation: betLocation
          };
          var localBetVal = BetManage_1.default.getBetByLocation(betParam);
          var xiaZhuVal = RaceManage_1.default.getClickXiaZhuVal();
          var enterRoomParam = RoomManage_1.default.getEnterRoomParam();
          var successNowVal = xiaZhuVal - localBetVal;
          _this.isBetCanceling = true;
          _this.showCancelChipAn();
          if (enterRoomParam.model === Const_1.EnterRoomModel.EMULATOR_ROOM) {
            BetManage_1.default.cancelBet(betParam);
            ConfigManage_1.default.isTxMusicOpen() && _this.chipCancelVoice.play();
            RaceManage_1.default.setClickXiaZhuVal(successNowVal);
            _this.scheduleOnce(function() {
              _this.isBetCanceling = false;
            }, .5);
            return;
          }
          var betInfo = {
            roomId: RoomManage_1.default.roomItem.id,
            raceNum: RoomManage_1.default.roomItem.oningRaceNum,
            betLocation: _this.typeValue,
            userId: UserManage_1.default.userInfo.id,
            betVal: -1 * localBetVal
          };
          var notice = {
            type: Const_1.NoticeType.raceBet,
            info: betInfo
          };
          WebSocketManage_1.default.send(JSON.stringify(notice));
          ConfigManage_1.default.isTxMusicOpen() && _this.chipCancelVoice.play();
          _this.scheduleOnce(function() {
            _this.isBetCanceling = false;
          }, 1);
        });
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          if (!_this.isCanBet()) return;
          if (_this.touchLock) return;
          var oningRaceNum = RoomManage_1.default.roomItem.oningRaceNum;
          if (RaceManage_1.default.raceList[oningRaceNum].state !== Const_1.RaceState.BET) return;
          if (RaceManage_1.default.raceList[oningRaceNum].landlordId === UserManage_1.default.userInfo.id) return;
          _this.focus.node.active = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          if (!_this.isCanBet()) return;
          _this.focus.node.active = false;
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          if (!_this.isCanBet()) return;
          _this.focus.node.active = false;
          var isTouchMove = Util_1.touchMoveEvent(event);
          if (isTouchMove) return;
          _this.focus.node.active = false;
          if (_this.touchLock || _this.overBetLimitLock || _this.isBetCanceling) return;
          _this.scheduleOnce(function() {
            _this.touchLock = false;
          }, .15);
          var oningRaceNum = RoomManage_1.default.roomItem.oningRaceNum;
          if (RaceManage_1.default.raceList[oningRaceNum].state !== Const_1.RaceState.BET) {
            loglevel_1.default.info("\u5f53\u524d\u4e0d\u662f\u4e0b\u6ce8\u73af\u8282\uff0c\u4e0d\u80fd\u4e0b\u6ce8");
            return;
          }
          if (RaceManage_1.default.raceList[oningRaceNum].landlordId === UserManage_1.default.userInfo.id) {
            loglevel_1.default.info("\u5730\u4e3b\u4e0d\u80fd\u4e0b\u6ce8");
            return;
          }
          if (_this.isOverBetTime()) return;
          var limitCount = RoomManage_1.default.roomItem.costLimit;
          var xiaZhuVal = RaceManage_1.default.getClickXiaZhuVal();
          if (xiaZhuVal + UserManage_1.default.selectChipValue > limitCount) {
            _this.overBetLimitLock = true;
            _this.scheduleOnce(function() {
              _this.overBetLimitLock = false;
            }, 2);
            ConfigManage_1.default.isTxMusicOpen() && _this.overBetLimitVoice.play();
            cc.find("Canvas/Desk").getComponent("Desk").showDeskMiddleTip(Const_1.WordMessage.over_bet_limit);
            return;
          }
          RaceManage_1.default.setClickXiaZhuVal(xiaZhuVal + UserManage_1.default.selectChipValue);
          var enterRoomParam = RoomManage_1.default.getEnterRoomParam();
          var betInfo = {
            roomId: RoomManage_1.default.roomItem.id,
            raceNum: RoomManage_1.default.roomItem.oningRaceNum,
            betLocation: _this.typeValue,
            userId: UserManage_1.default.userInfo.id,
            betVal: UserManage_1.default.selectChipValue
          };
          if (enterRoomParam.model === Const_1.EnterRoomModel.EMULATOR_ROOM) BetManage_1.default.addBet(betInfo.raceNum, betInfo.userId, betInfo.betLocation, betInfo.betVal); else {
            var notice = {
              type: Const_1.NoticeType.raceBet,
              info: betInfo
            };
            WebSocketManage_1.default.send(JSON.stringify(notice));
          }
        });
      };
      NewClass.prototype.isOverBetTime = function() {
        var betTime = cc.find("Canvas/Desk/MiddleTopTimePanel").getComponent("MiddleTopTimePanel").getShowTime();
        if (betTime <= 1) return true;
        return false;
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "focus", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "cancelChipAn", void 0);
      __decorate([ property ], NewClass.prototype, "typeValue", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "scorePanel", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "overBetLimitVoice", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "chipCancelVoice", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "betScore", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/Util": "Util",
    "../../common/WebSocketManage": "WebSocketManage",
    "../../store/Bets/BetManage": "BetManage",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage",
    loglevel: 28
  } ],
  Desk: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9807oJkylDGZA88itrud6Y", "Desk");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameMemberManage_1 = require("../../store/GameMember/GameMemberManage");
    var Const_1 = require("../../common/Const");
    var EventBus_1 = require("../../common/EventBus");
    var Util_1 = require("../../common/Util");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var ChairManage_1 = require("./ChairManage");
    var DealMachineBase_1 = require("../DealMachine/DealMachineBase");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var loglevel_1 = require("loglevel");
    var Desk = function(_super) {
      __extends(Desk, _super);
      function Desk() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playUserIcon = null;
        _this.deskBg = null;
        _this.middleResultWenZi = null;
        _this.onLandlordSiteUserId = null;
        _this.qingXiaZhu = null;
        _this.chipBetVoice = null;
        _this.majongResultLabel = null;
        _this.qingxiazhuVoice = null;
        _this.mahjongResulNodes = [];
        _this.skyLineSprite = null;
        _this.skyRacecLineSprite = null;
        _this.middleLineSprite = null;
        _this.middleRacecLineSprite = null;
        _this.landLineSprite = null;
        _this.landRacecLineSprite = null;
        _this.erBaGangAnimation = null;
        _this.biShiAnimation = null;
        _this.duiZiAnimation = null;
        _this.scheduleOnceTip = null;
        return _this;
      }
      Desk.prototype.start = function() {
        this.chairManage = new ChairManage_1.default(cc, this.playUserIcon);
        this.showMembers();
        this.addEventListener();
      };
      Desk.prototype.updateTrendLine = function() {
        var onRaceNum = null === RoomManage_1.default.roomItem.oningRaceNum ? 0 : RoomManage_1.default.roomItem.oningRaceNum;
        var i = 0;
        var skyWinCount = 0;
        var middleWinCount = 0;
        var landWinCount = 0;
        for (;i <= onRaceNum; i++) {
          var result = this.getRaceResult(i);
          result[0] && (skyWinCount += 1);
          result[1] && (middleWinCount += 1);
          result[2] && (landWinCount += 1);
        }
        var raceLineLen = 200 * (RoomManage_1.default.roomItem.oningRaceNum + 1) / RoomManage_1.default.roomItem.playCount;
        this.skyRacecLineSprite.node.width = raceLineLen;
        this.middleRacecLineSprite.node.width = raceLineLen;
        this.landRacecLineSprite.node.width = raceLineLen;
        this.skyLineSprite.node.width = 200 * skyWinCount / RoomManage_1.default.roomItem.playCount;
        this.middleLineSprite.node.width = 200 * middleWinCount / RoomManage_1.default.roomItem.playCount;
        this.landLineSprite.node.width = 200 * landWinCount / RoomManage_1.default.roomItem.playCount;
      };
      Desk.prototype.getRaceResult = function(raceNum) {
        var race = RaceManage_1.default.raceList[raceNum];
        var skyWin = race.getLocationResult(Const_1.betLocaion.SKY) === Const_1.CompareDxRe.BIG;
        var middleWin = race.getLocationResult(Const_1.betLocaion.MIDDLE) === Const_1.CompareDxRe.BIG;
        var landWin = race.getLocationResult(Const_1.betLocaion.LAND) === Const_1.CompareDxRe.BIG;
        return [ skyWin, middleWin, landWin ];
      };
      Desk.prototype.cleanMahjongResulNodes = function() {
        this.mahjongResulNodes.forEach(function(item) {
          item.active = false;
          item.destroy();
        });
        this.mahjongResulNodes = [];
      };
      Desk.prototype.onLoad = function() {};
      Desk.prototype.deskShanDong = function() {
        var node = this.node.getChildByName("DeskShanDong");
        this.schedule(function() {
          node.active = !node.active;
        }, .3, 3, .1);
      };
      Desk.prototype.showDeskMiddleTip = function(wordString) {
        var _this = this;
        var theNode = this.node.getChildByName("OverBetLimitTip");
        theNode.getComponents(cc.Label)[0].string = wordString;
        theNode.active || (theNode.active = true);
        if (null != this.scheduleOnceTip) {
          this.unschedule(this.scheduleOnceTip);
          this.scheduleOnceTip = null;
        }
        this.scheduleOnceTip = this.scheduleOnce(function() {
          _this.node.getChildByName("OverBetLimitTip").active = false;
          _this.scheduleOnceTip = null;
        }, 3);
      };
      Desk.prototype.addEventListener = function() {
        var _this = this;
        EventBus_1.eventBus.on(Const_1.EventType.LANDLORD_CAHNGE_EVENT, Util_1.randEventId(), function(landlordId) {
          _this.chairManage.moveToLandlordChair(landlordId);
        });
        EventBus_1.eventBus.on(Const_1.EventType.BET_CANCE_NOTICE, Util_1.randEventId(), function(info) {
          _this.node.getChildByName("SkyPart").getComponent("DeskPart").betCancel(info);
          _this.node.getChildByName("MiddlePart").getComponent("DeskPart").betCancel(info);
          _this.node.getChildByName("LandPart").getComponent("DeskPart").betCancel(info);
          _this.node.getChildByName("SkyCornerPart").getComponent("DeskPart").betCancel(info);
          _this.node.getChildByName("BridgPart").getComponent("DeskPart").betCancel(info);
          _this.node.getChildByName("LandCornerPart").getComponent("DeskPart").betCancel(info);
        });
        EventBus_1.eventBus.on(Const_1.EventType.NEW_MEMBER_IN_ROOM, Util_1.randEventId(), function(newMember) {
          if (null == _this.chairManage.getChairByUserId(newMember.userId)) {
            var member = {
              userId: newMember.userId,
              userName: newMember.nick,
              state: newMember.state,
              xiaZhuVal: 0,
              userIcon: newMember.icon
            };
            _this.chairManage.inChair(member);
          }
        });
        EventBus_1.eventBus.on(Const_1.EventType.MEMBER_DELETE_FROM_ROOM, Util_1.randEventId(), function(userId) {
          loglevel_1.default.info("\u6211\u662f\u684c\u5b50\uff0c\u6211\u63a5\u5230\u901a\u77e5\u6709\u672c\u5730\u7528\u6237\u7684\u4fe1\u606f\u88ab\u5220\u9664\uff0c\u8fd9\u79cd\u60c5\u51b5\u53ea\u80fd\u51fa\u73b0\u5728\u6e38\u620f\u8fd8\u6ca1\u5f00\u59cb");
          if (RoomManage_1.default.roomItem.roomState === Const_1.roomState.OPEN) {
            cc.log("\u6e38\u620f\u8fd8\u6ca1\u5f00\u59cb\uff0c\u5c06\u73a9\u5bb6\u4ece\u4f4d\u7f6e\u4e0a\u79fb\u9664:" + userId);
            _this.chairManage.outChair(userId);
          }
        });
        EventBus_1.eventBus.on(Const_1.EventType.LOCAL_NOTICE_EVENT, Util_1.randEventId(), function(info) {
          var localNoticeEventType = info.type;
          switch (localNoticeEventType) {
           case Const_1.LocalNoticeEventType.OPEN_CARD_FINISHED_NOTICE:
            _this.updateTrendLine();
            _this.winFocusAmination();
            _this.scheduleOnce(function() {
              _this.playingBiDaXiaAnimation(function() {});
            }, .3);
            var isSuccess = _this.node.parent.getChildByName("XiaZhu").getComponent("XiaZhu").backAllChipe();
            ConfigManage_1.default.isTxMusicOpen() && isSuccess && _this.chipBetVoice.play();
            _this.scheduleOnce(function() {
              _this.node.parent.getChildByName("XiaZhu").getComponent("XiaZhu").destroyDeskChip();
              EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
                type: Const_1.LocalNoticeEventType.SHOW_DOWN_ANIMATION_FINISHED_NOTICE
              });
            }, ConfigManage_1.default.getShowResultKeepTime());
            break;

           case Const_1.LocalNoticeEventType.OPEN_CARD_REQUEST_NOTICE:
            var tableLocationType = info.info;
            var majongScore = RaceManage_1.default.raceList[RoomManage_1.default.roomItem.oningRaceNum].getMahjongScore(tableLocationType);
            _this.toMahjongValueLabelShow(tableLocationType, majongScore);
            _this.toPlayResultAnimation(tableLocationType, majongScore);
            break;

           case Const_1.LocalNoticeEventType.PLAY_AUDIO_NOT_SUPPORT:
            _this.showDeskMiddleTip(Const_1.WordMessage.audio_not_support);
          }
        });
        EventBus_1.eventBus.on(Const_1.EventType.BET_CHIP_CHANGE_EVENT, Util_1.randEventId(), function(betInfo) {
          _this.deskPartToBet(betInfo);
        });
      };
      Desk.prototype.winFocusAmination = function() {
        this.node.getChildByName("SkyPart").getComponent("DeskPart").winFocusAmination();
        this.node.getChildByName("MiddlePart").getComponent("DeskPart").winFocusAmination();
        this.node.getChildByName("LandPart").getComponent("DeskPart").winFocusAmination();
        this.node.getChildByName("SkyCornerPart").getComponent("DeskPart").winFocusAmination();
        this.node.getChildByName("BridgPart").getComponent("DeskPart").winFocusAmination();
        this.node.getChildByName("LandCornerPart").getComponent("DeskPart").winFocusAmination();
      };
      Desk.prototype.toMahjongValueLabelShow = function(tableLocationType, majongScore) {
        var location = DealMachineBase_1.getLocationByLocaitonType(tableLocationType);
        var node = cc.instantiate(this.majongResultLabel);
        node.parent = cc.find("Canvas/Desk");
        node.setPosition(location.x, location.y - 20);
        node.getComponent("MahjongResultLabel").showResultWenZi(majongScore);
        node.active = true;
        this.mahjongResulNodes.push(node);
      };
      Desk.prototype.deskPartToBet = function(betInfo) {
        var betLocationType = betInfo.betLocation;
        betLocationType === Const_1.betLocaion.SKY ? this.node.getChildByName("SkyPart").getComponent("DeskPart").toBet(betInfo) : betLocationType === Const_1.betLocaion.MIDDLE ? this.node.getChildByName("MiddlePart").getComponent("DeskPart").toBet(betInfo) : betLocationType === Const_1.betLocaion.LAND ? this.node.getChildByName("LandPart").getComponent("DeskPart").toBet(betInfo) : betLocationType === Const_1.betLocaion.SKY_CORNER ? this.node.getChildByName("SkyCornerPart").getComponent("DeskPart").toBet(betInfo) : betLocationType === Const_1.betLocaion.BRIDG ? this.node.getChildByName("BridgPart").getComponent("DeskPart").toBet(betInfo) : betLocationType === Const_1.betLocaion.LAND_CORNER && this.node.getChildByName("LandCornerPart").getComponent("DeskPart").toBet(betInfo);
      };
      Desk.prototype.deskPartsToClean = function() {
        this.node.getChildByName("SkyPart").getComponent("DeskPart").toClearn();
        this.node.getChildByName("MiddlePart").getComponent("DeskPart").toClearn();
        this.node.getChildByName("LandPart").getComponent("DeskPart").toClearn();
        this.node.getChildByName("SkyCornerPart").getComponent("DeskPart").toClearn();
        this.node.getChildByName("BridgPart").getComponent("DeskPart").toClearn();
        this.node.getChildByName("LandCornerPart").getComponent("DeskPart").toClearn();
      };
      Desk.prototype.deskPartsToOpen = function() {
        this.node.getChildByName("SkyPart").getComponent("DeskPart").toOpen();
        this.node.getChildByName("MiddlePart").getComponent("DeskPart").toOpen();
        this.node.getChildByName("LandPart").getComponent("DeskPart").toOpen();
        this.node.getChildByName("SkyCornerPart").getComponent("DeskPart").toOpen();
        this.node.getChildByName("BridgPart").getComponent("DeskPart").toOpen();
        this.node.getChildByName("LandCornerPart").getComponent("DeskPart").toOpen();
      };
      Desk.prototype.playingBiDaXiaAnimation = function(func) {
        var oningNum = RoomManage_1.default.roomItem.oningRaceNum;
        var race = RaceManage_1.default.raceList[oningNum];
        var middleResultAmimation = null;
        if (race.skyResult === Const_1.CompareDxRe.BIG && race.middleResult === Const_1.CompareDxRe.BIG && race.landResult === Const_1.CompareDxRe.BIG || race.skyResult === Const_1.CompareDxRe.SMALL && race.middleResult === Const_1.CompareDxRe.SMALL && race.landResult === Const_1.CompareDxRe.SMALL) {
          middleResultAmimation = cc.instantiate(this.middleResultWenZi);
          middleResultAmimation.parent = this.node;
          middleResultAmimation.active = true;
        }
        this.scheduleOnce(function() {
          null !== middleResultAmimation && middleResultAmimation.destroy();
          func();
        }, 1.5);
      };
      Desk.prototype.toPlayResultAnimation = function(tableLocation, majongScore) {
        var actionAnimation = null;
        Util_1.getMajhongValueType(majongScore) == Const_1.MajhongValueType.ER_BA_GANG && (actionAnimation = this.erBaGangAnimation);
        Util_1.getMajhongValueType(majongScore) == Const_1.MajhongValueType.BI_SHI && (actionAnimation = this.biShiAnimation);
        Util_1.getMajhongValueType(majongScore) == Const_1.MajhongValueType.DUI_ZI && (actionAnimation = this.duiZiAnimation);
        if (null == actionAnimation) return;
        var roomOb = cc.find("Canvas").getComponent("RollRoomScene");
        var node = cc.instantiate(actionAnimation);
        node.parent = roomOb.node;
        var locationSet = {
          x: 0,
          y: 0
        };
        if (tableLocation == Const_1.TableLocationType.LAND) {
          locationSet.x = 213;
          locationSet.y = 78;
        } else if (tableLocation == Const_1.TableLocationType.LANDLORD) {
          locationSet.x = 11;
          locationSet.y = 85;
        } else if (tableLocation == Const_1.TableLocationType.MIDDLE) {
          locationSet.x = 5;
          locationSet.y = -72;
        } else {
          locationSet.x = -213;
          locationSet.y = 78;
        }
        node.x = locationSet.x;
        node.y = locationSet.y;
        node.active = true;
        node.getComponents(cc.Animation)[0].play();
        this.scheduleOnce(function() {
          node.getComponents(cc.Animation)[0].stop();
          node.active = false;
          node.destroy();
        }, 3.5);
      };
      Desk.prototype.playingXiaZhuAnimation = function() {
        ConfigManage_1.default.isTxMusicOpen() && this.qingxiazhuVoice.play();
        var node = cc.instantiate(this.qingXiaZhu);
        node.parent = this.node;
        this.scheduleOnce(function() {
          try {
            node.destroy();
          } catch (e) {}
        }, 1.5);
      };
      Desk.prototype.showMembers = function() {
        var _this = this;
        try {
          this.chairManage.clearAllChair();
          var memberList = null === GameMemberManage_1.default.gameMenmberList ? [] : GameMemberManage_1.default.gameMenmberList;
          var landlordId_1 = RaceManage_1.default.raceList[RoomManage_1.default.roomItem.oningRaceNum].landlordId;
          if (null != landlordId_1 && "" != landlordId_1) {
            var landlordInfo = GameMemberManage_1.default.getGameMemberByUserId(landlordId_1);
            null != landlordInfo && this.chairManage.inChair({
              userId: landlordInfo.userId,
              userName: landlordInfo.nick,
              userIcon: landlordInfo.icon,
              state: landlordInfo.state,
              xiaZhuVal: 0
            });
          }
          memberList.forEach(function(item) {
            if (item.userId != landlordId_1) {
              var member = {
                userId: item.userId,
                userName: item.nick,
                userIcon: item.icon,
                state: item.state,
                xiaZhuVal: 0
              };
              _this.chairManage.inChair(member);
            }
          });
        } catch (e) {}
      };
      __decorate([ property(cc.Prefab) ], Desk.prototype, "playUserIcon", void 0);
      __decorate([ property(cc.Sprite) ], Desk.prototype, "deskBg", void 0);
      __decorate([ property(cc.Prefab) ], Desk.prototype, "middleResultWenZi", void 0);
      __decorate([ property(cc.Prefab) ], Desk.prototype, "qingXiaZhu", void 0);
      __decorate([ property(cc.AudioSource) ], Desk.prototype, "chipBetVoice", void 0);
      __decorate([ property(cc.Prefab) ], Desk.prototype, "majongResultLabel", void 0);
      __decorate([ property(cc.AudioSource) ], Desk.prototype, "qingxiazhuVoice", void 0);
      __decorate([ property(cc.Sprite) ], Desk.prototype, "skyLineSprite", void 0);
      __decorate([ property(cc.Sprite) ], Desk.prototype, "skyRacecLineSprite", void 0);
      __decorate([ property(cc.Sprite) ], Desk.prototype, "middleLineSprite", void 0);
      __decorate([ property(cc.Sprite) ], Desk.prototype, "middleRacecLineSprite", void 0);
      __decorate([ property(cc.Sprite) ], Desk.prototype, "landLineSprite", void 0);
      __decorate([ property(cc.Sprite) ], Desk.prototype, "landRacecLineSprite", void 0);
      __decorate([ property(cc.Prefab) ], Desk.prototype, "erBaGangAnimation", void 0);
      __decorate([ property(cc.Prefab) ], Desk.prototype, "biShiAnimation", void 0);
      __decorate([ property(cc.Prefab) ], Desk.prototype, "duiZiAnimation", void 0);
      Desk = __decorate([ ccclass ], Desk);
      return Desk;
    }(cc.Component);
    exports.default = Desk;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/Util": "Util",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/GameMember/GameMemberManage": "GameMemberManage",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../DealMachine/DealMachineBase": "DealMachineBase",
    "./ChairManage": "ChairManage",
    loglevel: 28
  } ],
  EntryBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49295AtVrpHS7v9yF7Kk1C2", "EntryBox");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var Const_1 = require("../../common/Const");
    var UserManage_1 = require("../../store/User/UserManage");
    var Config_1 = require("../../common/Config");
    var loglevel_1 = require("loglevel");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.One = null;
        _this.Two = null;
        _this.Three = null;
        _this.Four = null;
        _this.Five = null;
        _this.closeButton = null;
        _this.Six = null;
        _this.Seven = null;
        _this.Eight = null;
        _this.Nine = null;
        _this.Zero = null;
        _this.Delete = null;
        _this.Enter = null;
        _this.tipDialog = null;
        _this.Num = null;
        return _this;
      }
      NewClass.prototype.onEnable = function() {};
      NewClass.prototype.start = function() {
        var _this = this;
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.One.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "1";
        });
        this.Two.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "2";
        });
        this.Three.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "3";
        });
        this.Four.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "4";
        });
        this.Five.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "5";
        });
        this.Six.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "6";
        });
        this.Seven.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "7";
        });
        this.Eight.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "8";
        });
        this.Nine.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "9";
        });
        this.Zero.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string += "0";
        });
        this.Delete.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.Num.string = _this.Num.string.substring(0, _this.Num.string.length - 1);
        });
        this.Enter.node.on(cc.Node.EventType.TOUCH_END, function() {
          var roomId = parseInt(_this.Num.string);
          loglevel_1.default.info("\u8f93\u5165\u623f\u95f4\u53f7\uff1a", roomId);
          if (roomId == Config_1.config.cheatSwitchNumber) {
            loglevel_1.default.info("\u4f5c\u5f0a\u5f00\u5173\u89e6\u53d1");
            ConfigManage_1.default.setCheat(true);
            _this.showCheatTip();
            _this.node.destroy();
            return;
          }
          RoomManage_1.default.setEnterRoomParam({
            model: Const_1.EnterRoomModel.NUMBER_PANEL,
            userId: UserManage_1.default.userInfo.id,
            roomId: roomId
          });
          _this.checkRoom(roomId);
        });
      };
      NewClass.prototype.checkRoom = function(roomId) {
        return __awaiter(this, void 0, void 0, function() {
          var result;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, RoomManage_1.default.isRoomExist(roomId) ];

             case 1:
              result = _a.sent();
              result.result === Const_1.ResponseStatus.FAIL ? this.showEnterRoomFailTip() : cc.director.loadScene("RollRoomScene");
              this.node.destroy();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.showEnterRoomFailTip = function() {
        var node = cc.instantiate(this.tipDialog);
        var scriptOb = node.getComponent("TipDialog");
        node.parent = this.node.parent;
        node.active = true;
        var dialogParam = {
          sureButtonShow: true,
          cancelButtonShow: false,
          content: "\u623f\u95f4\u4e0d\u5b58\u5728\u6216\u5df2\u5173\u95ed",
          cancelButtonAction: null,
          sureButtonAction: null
        };
        scriptOb.tipDialogShow(dialogParam);
      };
      NewClass.prototype.showCheatTip = function() {
        var node = cc.instantiate(this.tipDialog);
        var scriptOb = node.getComponent("TipDialog");
        node.parent = this.node.parent;
        node.active = true;
        var dialogParam = {
          sureButtonShow: true,
          cancelButtonShow: false,
          content: "\u8d85\u7ea7\u6743\u9650\u5f00\u542f",
          cancelButtonAction: null,
          sureButtonAction: null
        };
        scriptOb.tipDialogShow(dialogParam);
      };
      NewClass.prototype.onDisable = function() {};
      __decorate([ property(cc.Button) ], NewClass.prototype, "One", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Two", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Three", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Four", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Five", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "closeButton", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Six", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Seven", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Eight", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Nine", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Zero", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Delete", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "Enter", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "tipDialog", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "Num", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Config": "Config",
    "../../common/Const": "Const",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage",
    loglevel: 28
  } ],
  EventBus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "461c01qG7hPeICLU6L4pdCc", "EventBus");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventBus = function() {
      function EventBus() {
        this.listeners = {};
      }
      EventBus.prototype.on = function(eventType, listenerId, fn, once) {
        void 0 === once && (once = false);
        if (!listenerId || "function" !== typeof fn) return;
        this.listeners[eventType] || (this.listeners[eventType] = {});
        this.listeners[eventType][listenerId] = {
          once: once,
          fn: fn
        };
      };
      EventBus.prototype.off = function(eventType, listenerId) {
        this.listeners[eventType] && delete this.listeners[eventType][listenerId];
      };
      EventBus.prototype.clearAll = function() {
        this.listeners = {};
      };
      EventBus.prototype.once = function(eventType, listenerId, fn) {
        this.on(eventType, listenerId, fn, true);
      };
      EventBus.prototype.emit = function(eventType, fnArgs) {
        try {
          var deleteArray = [];
          if (this.listeners[eventType]) for (var listenerId in this.listeners[eventType]) {
            var listener = this.listeners[eventType][listenerId];
            if (listener) {
              listener.once && deleteArray.push({
                eventType: eventType,
                listenerId: listenerId
              });
              if ("function" === typeof listener.fn) try {
                listener.fn(fnArgs);
              } catch (err) {} else deleteArray.push({
                eventType: eventType,
                listenerId: listenerId
              });
            } else deleteArray.push({
              eventType: eventType,
              listenerId: listenerId
            });
          }
          for (var i = 0, len = deleteArray.length; i < len; i++) {
            var del = deleteArray[i];
            this.off(del.eventType, del.listenerId);
          }
        } catch (e) {}
      };
      return EventBus;
    }();
    exports.eventBus = new EventBus();
    cc._RF.pop();
  }, {} ],
  FaceList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fea70KBk5BADb5oVfpeM64e", "FaceList");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.faceList = [ {
      name: "EE0",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE1",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE2",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE3",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE4",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE5",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE6",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE7",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE8",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE9",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE10",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE11",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE12",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE13",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE14",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE15",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE16",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE17",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE18",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE19",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE20",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE21",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE22",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE23",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE24",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE25",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE26",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE27",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE28",
      size: {
        x: 80,
        y: 80
      }
    }, {
      name: "EE29",
      size: {
        x: 80,
        y: 80
      }
    } ];
    cc._RF.pop();
  }, {} ],
  GameMemberItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e55ecSTQfdDS44ZZgqSw0Ey", "GameMemberItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var EventBus_1 = require("../../common/EventBus");
    var GameMemberItem = function() {
      function GameMemberItem(val) {
        this.userId = null;
        this.roleType = null;
        this.nick = null;
        this.icon = null;
        this.score = null;
        this._state = null;
        this.userId = val.userId;
        this.roleType = val.roleType;
        this.nick = val.nick;
        this.icon = val.icon;
        this.score = val.score;
        this._state = val.state;
      }
      Object.defineProperty(GameMemberItem.prototype, "state", {
        get: function() {
          return this._state;
        },
        set: function(val) {
          this._state = val;
          EventBus_1.eventBus.emit(Const_1.EventType.MEMBER_STATE_CHANGE, {
            userId: this.userId,
            state: this._state
          });
        },
        enumerable: true,
        configurable: true
      });
      return GameMemberItem;
    }();
    exports.default = GameMemberItem;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus"
  } ],
  GameMemberList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8318zBaJVFf6+PWveH88AW", "GameMemberList");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../common/Const");
    exports.GameMemberList = [ {
      userId: "6666661",
      roleType: Const_1.gameMemberType.PLAYER,
      nick: "\u8bdd\u8bed\u6210\u98ce",
      icon: "renwu/1_1",
      score: 0,
      state: Const_1.memberState.OnLine
    }, {
      userId: "6666662",
      roleType: Const_1.gameMemberType.PLAYER,
      nick: "\u4f60\u6709\u7406",
      icon: "renwu/1_2",
      score: 0,
      state: Const_1.memberState.OnLine
    }, {
      userId: "6666663",
      roleType: Const_1.gameMemberType.PLAYER,
      nick: "\u8d22\u6e90\u6eda\u6eda",
      icon: "renwu/1_3",
      score: 0,
      state: Const_1.memberState.OnLine
    }, {
      userId: "6666664",
      roleType: Const_1.gameMemberType.PLAYER,
      nick: "\u5728\u6c34\u4e00\u65b9",
      icon: "renwu/1_4",
      score: 0,
      state: Const_1.memberState.OnLine
    }, {
      userId: "6666665",
      roleType: Const_1.gameMemberType.PLAYER,
      nick: "\u98d8",
      icon: "renwu/1_5",
      score: 0,
      state: Const_1.memberState.OnLine
    }, {
      userId: "6666666",
      roleType: Const_1.gameMemberType.PLAYER,
      nick: "\u98ce\u5439\u5c41\u5c41\u51c9",
      icon: "renwu/1_6",
      score: 0,
      state: Const_1.memberState.OnLine
    }, {
      userId: "6666667",
      roleType: Const_1.gameMemberType.PLAYER,
      nick: "\u8fd9\u91cc\u6709\u773c",
      icon: "renwu/1_7",
      score: 0,
      state: Const_1.memberState.OnLine
    }, {
      userId: "6666668",
      roleType: Const_1.gameMemberType.PLAYER,
      nick: "\u5e05\u54e5",
      icon: "renwu/1_8",
      score: 0,
      state: Const_1.memberState.OnLine
    }, {
      userId: "6666669",
      roleType: Const_1.gameMemberType.PLAYER,
      nick: "\u8f6c\u89d2\u9047\u5230\u7231",
      icon: "renwu/1_9",
      score: 0,
      state: Const_1.memberState.OnLine
    } ];
    cc._RF.pop();
  }, {
    "../common/Const": "Const"
  } ],
  GameMemberManage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a32ffX9vqVJHIC6JulzPUMc", "GameMemberManage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var GameMemberItem_1 = require("./GameMemberItem");
    var EventBus_1 = require("../../common/EventBus");
    var GameMemberManage = function() {
      function GameMemberManage() {
        this._gameMenmberList = null;
      }
      GameMemberManage.prototype.clear = function() {
        this._gameMenmberList = null;
      };
      Object.defineProperty(GameMemberManage.prototype, "gameMenmberList", {
        get: function() {
          return this._gameMenmberList;
        },
        set: function(list) {
          this._gameMenmberList = list;
        },
        enumerable: true,
        configurable: true
      });
      GameMemberManage.prototype.setGameMemberList = function(gameMemberList) {
        var list = [];
        gameMemberList.forEach(function(item) {
          list[item.userId] = new GameMemberItem_1.default(item);
        });
        this.gameMenmberList = list;
      };
      GameMemberManage.prototype.outGameMember = function(userId) {
        "undefined" !== typeof this._gameMenmberList[userId] && delete this._gameMenmberList[userId];
        EventBus_1.eventBus.emit(Const_1.EventType.MEMBER_DELETE_FROM_ROOM, userId);
      };
      GameMemberManage.prototype.addGameMember = function(gameMember) {
        var userId = gameMember.userId;
        if ("undefined" !== typeof this.gameMenmberList[userId]) {
          this.gameMenmberList[userId].state = Const_1.memberState.OnLine;
          return false;
        }
        var newMember = new GameMemberItem_1.default(gameMember);
        this._gameMenmberList[gameMember.userId] = newMember;
        EventBus_1.eventBus.emit(Const_1.EventType.NEW_MEMBER_IN_ROOM, gameMember);
        return true;
      };
      GameMemberManage.prototype.requestGameMemberList = function() {
        var _this = this;
        return new Promise(function(resolve) {
          resolve({
            result: Const_1.PromiseResult.SUCCESS,
            extObject: _this.gameMenmberList
          });
        });
      };
      GameMemberManage.prototype.requestGameMemberListFromServer = function() {
        return new Promise(function(resolve) {
          resolve({
            result: Const_1.PromiseResult.SUCCESS,
            extObject: null
          });
        });
      };
      GameMemberManage.prototype.updateGameMemberListFromServer = function() {
        return new Promise(function(resolve) {
          resolve({
            result: Const_1.PromiseResult.SUCCESS,
            extObject: null
          });
        });
      };
      GameMemberManage.prototype.getGameMemberByUserId = function(userId) {
        if ("undefined" === typeof this._gameMenmberList[userId]) return null;
        return this._gameMenmberList[userId];
      };
      GameMemberManage.prototype.checkRoomMember = function(memberList) {
        var invaildMemeberIds = this.getInvaildMemberIds(memberList);
        for (var i = 0; i < invaildMemeberIds.length; i++) this.outGameMember(invaildMemeberIds[i]);
        var addMemberList = this.getNeedAddMemberList(memberList);
        for (var j = 0; j < addMemberList.length; j++) this.addGameMember(addMemberList[j]);
      };
      GameMemberManage.prototype.getInvaildMemberIds = function(serverMemberList) {
        var list = [];
        this.gameMenmberList.forEach(function(item) {
          var isExistMember = false;
          var j = 0;
          for (;j < serverMemberList.length; j++) if (serverMemberList[j]["userId"] == item.userId) {
            isExistMember = true;
            break;
          }
          isExistMember || list.push(item.userId);
        });
        return list;
      };
      GameMemberManage.prototype.getNeedAddMemberList = function(serverMemberList) {
        var _this = this;
        var list = [];
        serverMemberList.forEach(function(item) {
          var isNeedAdd = true;
          var j = 0;
          "undefined" != typeof _this.gameMenmberList[item.userId] && (isNeedAdd = false);
          isNeedAdd && list.push(item.userId);
        });
        return list;
      };
      return GameMemberManage;
    }();
    exports.default = new GameMemberManage();
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "./GameMemberItem": "GameMemberItem"
  } ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ee82dAFtJFJD7dX0fsQYqj0", "Http");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Http = function() {
      function Http() {}
      Http.prototype.getWithUrl = function(url, callback) {
        var err = false;
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.open("GET", url, true);
        xhr["onloadend"] = function() {
          err = !(4 == xhr.readyState && xhr.status >= 200 && xhr.status <= 207);
          var response = "";
          try {
            response = JSON.parse(xhr.responseText);
          } catch (e) {
            console.log(e);
          }
          callback(err, response);
        };
        xhr.send();
      };
      Http.prototype.sendWithUrl = function(url, params, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        xhr["onloadend"] = function() {
          var sc = -1;
          4 == xhr.readyState && xhr.status >= 200 && xhr.status <= 207 && (sc = 0);
          var json = JSON.parse(xhr.responseText);
          var rc = parseInt(json["code"]);
          callback(sc, rc, json);
        };
        xhr.send(params);
      };
      return Http;
    }();
    exports.Http = Http;
    exports.default = new Http();
    cc._RF.pop();
  }, {} ],
  LineTrendMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89c9btTZ1hIa4F8IL1VTUDH", "LineTrendMap");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var Util_1 = require("../../common/Util");
    var EventBus_1 = require("../../common/EventBus");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.drawPanel = null;
        _this.drawPanelWidth = 0;
        _this.drawPanelHeight = 0;
        _this.skyResult = [];
        _this.middleResult = [];
        _this.landResult = [];
        _this.colorSet = [ cc.Color.GRAY, cc.Color.RED, cc.Color.GREEN ];
        _this.lineWith = 2;
        _this.eventIdOne = null;
        _this.xMiddlelabel = null;
        _this.yMiddlelabel = null;
        _this.xEndlabel = null;
        _this.yEndlabel = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.reDraw();
      };
      NewClass.prototype.reDraw = function() {
        var ctx = this.drawPanel.getComponent(cc.Graphics);
        ctx.clear();
        this.drawBase();
        this.initResult();
        this.drawByResult(this.skyResult, Const_1.betLocaion.SKY);
        this.drawByResult(this.middleResult, Const_1.betLocaion.MIDDLE);
        this.drawByResult(this.landResult, Const_1.betLocaion.LAND);
      };
      NewClass.prototype.getRaceResult = function(raceNum) {
        var race = RaceManage_1.default.raceList[raceNum];
        var skyWin = race.getLocationResult(Const_1.betLocaion.SKY) === Const_1.CompareDxRe.BIG;
        var middleWin = race.getLocationResult(Const_1.betLocaion.MIDDLE) === Const_1.CompareDxRe.BIG;
        var landWin = race.getLocationResult(Const_1.betLocaion.LAND) === Const_1.CompareDxRe.BIG;
        return [ skyWin, middleWin, landWin ];
      };
      NewClass.prototype.initResult = function() {
        this.skyResult = [];
        this.middleResult = [];
        this.landResult = [];
        var onRaceNum = 0;
        var showRaceNum = 0;
        try {
          onRaceNum = null === RoomManage_1.default.roomItem.oningRaceNum ? 0 : RoomManage_1.default.roomItem.oningRaceNum;
          showRaceNum = RaceManage_1.default.raceList[onRaceNum].state == Const_1.RaceState.FINISHED || RaceManage_1.default.raceList[onRaceNum].state == Const_1.RaceState.SHOW_DOWN ? onRaceNum : onRaceNum - 1;
        } catch (e) {}
        for (var i = 0; i <= showRaceNum; i++) {
          var result = this.getRaceResult(i);
          this.skyResult.push(result[0]);
          this.middleResult.push(result[1]);
          this.landResult.push(result[2]);
        }
      };
      NewClass.prototype.drawBase = function() {
        var ctx = this.drawPanel.getComponent(cc.Graphics);
        ctx.lineWidth = this.lineWith;
        ctx.moveTo(0, 0);
        ctx.lineTo(0, this.drawPanelHeight);
        ctx.lineTo(4, this.drawPanelHeight - 8);
        ctx.moveTo(0, this.drawPanelHeight);
        ctx.lineTo(-4, this.drawPanelHeight - 8);
        ctx.strokeColor = cc.Color.WHITE;
        ctx.stroke();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.drawPanelWidth, 0);
        ctx.lineTo(this.drawPanelWidth - 8, 4);
        ctx.moveTo(this.drawPanelWidth, 0);
        ctx.lineTo(this.drawPanelWidth - 8, -4);
        ctx.strokeColor = cc.Color.WHITE;
        ctx.stroke();
        ctx.moveTo(this.drawPanelWidth / 2, 0);
        ctx.lineTo(this.drawPanelWidth / 2, 6);
        ctx.strokeColor = cc.Color.WHITE;
        ctx.stroke();
        ctx.moveTo(this.drawPanelWidth - 12, 0);
        ctx.lineTo(this.drawPanelWidth - 12, 6);
        ctx.strokeColor = cc.Color.WHITE;
        ctx.stroke();
        ctx.moveTo(0, this.drawPanelHeight / 2);
        ctx.lineTo(6, this.drawPanelHeight / 2);
        ctx.strokeColor = cc.Color.WHITE;
        ctx.stroke();
        ctx.moveTo(0, this.drawPanelHeight - 12);
        ctx.lineTo(6, this.drawPanelHeight - 12);
        ctx.strokeColor = cc.Color.WHITE;
        ctx.stroke();
        ctx.moveTo(30, this.drawPanelHeight - 30);
        ctx.lineTo(50, this.drawPanelHeight - 30);
        ctx.strokeColor = this.colorSet[0];
        ctx.lineWidth = this.lineWith;
        ctx.stroke();
        ctx.moveTo(30, this.drawPanelHeight - 60);
        ctx.lineTo(50, this.drawPanelHeight - 60);
        ctx.strokeColor = this.colorSet[1];
        ctx.lineWidth = this.lineWith;
        ctx.stroke();
        ctx.moveTo(30, this.drawPanelHeight - 90);
        ctx.lineTo(50, this.drawPanelHeight - 90);
        ctx.strokeColor = this.colorSet[2];
        ctx.lineWidth = this.lineWith;
        ctx.stroke();
        var RaceCount = RoomManage_1.default.roomItem.playCount;
        this.yEndlabel.string = RaceCount + "";
        this.xEndlabel.string = RaceCount + "";
        this.xMiddlelabel.string = Math.floor(RaceCount / 2) + "";
        this.yMiddlelabel.string = Math.floor(RaceCount / 2) + "";
      };
      NewClass.prototype.drawByResult = function(winResult, deskLocation) {
        var RaceCount = RoomManage_1.default.roomItem.playCount;
        var xItemLen = this.drawPanelWidth / RaceCount;
        var yItemLen = this.drawPanelHeight / RaceCount;
        var ctx = this.drawPanel.getComponent(cc.Graphics);
        var x = 0;
        var y = 0;
        if (deskLocation == Const_1.betLocaion.SKY) {
          ctx.strokeColor = this.colorSet[0];
          ctx.lineWidth = this.lineWith;
          y = 4;
        } else if (deskLocation == Const_1.betLocaion.MIDDLE) {
          ctx.strokeColor = this.colorSet[1];
          ctx.lineWidth = this.lineWith;
          y = 2;
        } else {
          ctx.strokeColor = this.colorSet[2];
          ctx.lineWidth = this.lineWith;
        }
        ctx.moveTo(0, 0);
        for (var i = 0; i < winResult.length; i++) {
          x += xItemLen;
          winResult[i] && (y += yItemLen);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      };
      NewClass.prototype.onDisable = function() {
        EventBus_1.eventBus.off(Const_1.EventType.LOCAL_NOTICE_EVENT, this.eventIdOne);
      };
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.drawPanelWidth = this.drawPanel.width;
        this.drawPanelHeight = this.drawPanel.height;
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          _this.node.destroy();
        });
        this.eventIdOne = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.LOCAL_NOTICE_EVENT, Util_1.randEventId(), function(info) {
          var localNoticeEventType = info.type;
          switch (localNoticeEventType) {
           case Const_1.LocalNoticeEventType.OPEN_CARD_FINISHED_NOTICE:
            _this.reDraw();
          }
        });
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "drawPanel", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "xMiddlelabel", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "yMiddlelabel", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "xEndlabel", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "yEndlabel", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/Util": "Util",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage"
  } ],
  LobbyScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f7ca3y8ahAL5P7XHe5gksv", "LobbyScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UserManage_1 = require("../../store/User/UserManage");
    var Util_1 = require("../../common/Util");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var Const_1 = require("../../common/Const");
    var Config_1 = require("../../common/Config");
    var EventBus_1 = require("../../common/EventBus");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LobbyScene = function(_super) {
      __extends(LobbyScene, _super);
      function LobbyScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.EntryBox = null;
        _this.CreateRoomPanel = null;
        _this.CustomerPanel = null;
        _this.JoinPart = null;
        _this.SetPanel = null;
        _this.RulePanel = null;
        _this.ruleButton = null;
        _this.customerButton = null;
        _this.CreateRoomPart = null;
        _this.LianXiChang = null;
        _this.setButton = null;
        _this.exitButton = null;
        _this.diamondBugPart = null;
        _this.rechargePanel = null;
        _this.userName = null;
        _this.userId = null;
        _this.diamond = null;
        _this.chipCount = null;
        _this.informMessageLabel = null;
        _this.versionLabel = null;
        _this.tipDialog = null;
        _this.userIconSprite = null;
        _this.emulatorRoomHasClick = true;
        _this.eventIdOne = null;
        return _this;
      }
      LobbyScene.prototype.onLoad = function() {};
      LobbyScene.prototype.onEnable = function() {
        var _this = this;
        ConfigManage_1.default.isConfigHasLoad() || ConfigManage_1.default.loadConfigInfo();
        this.eventIdOne = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.LOCAL_NOTICE_EVENT, this.eventIdOne, function(info) {
          var localNoticeEventType = info.type;
          switch (localNoticeEventType) {
           case Const_1.LocalNoticeEventType.DIAMOND_COUNT_CHANGE:
            _this.diamond.string = info.info + "";
          }
        });
      };
      LobbyScene.prototype.closeEntryBox = function() {
        var node = this.node.getChildByName("EntryBox");
        if (null !== node) {
          node.active = false;
          node.destroy();
        }
      };
      LobbyScene.prototype.closeCreateRoomPanel = function() {
        var node = this.node.getChildByName("CreateRoomPanel");
        if (null !== node) {
          node.active = false;
          node.destroy();
        }
      };
      LobbyScene.prototype.initUserInfo = function(userId) {
        return __awaiter(this, void 0, void 0, function() {
          var info;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, UserManage_1.default.requestUserInfo(userId) ];

             case 1:
              info = _a.sent();
              this.userName.string = UserManage_1.default.userInfo.nick;
              this.userId.string = "ID:" + UserManage_1.default.userInfo.id;
              this.diamond.string = UserManage_1.default.userInfo.diamond + "";
              this.chipCount.string = UserManage_1.default.userInfo.score + "";
              cc.loader.load({
                url: UserManage_1.default.getUserIconUrl(),
                type: "png"
              }, function(err, img) {
                var myIcon = new cc.SpriteFrame(img);
                _this.userIconSprite.spriteFrame = myIcon;
              });
              return [ 2 ];
            }
          });
        });
      };
      LobbyScene.prototype.onDisable = function() {
        this.JoinPart.node.off(cc.Node.EventType.TOUCH_END, function() {});
        EventBus_1.eventBus.off(Const_1.EventType.LOCAL_NOTICE_EVENT, this.eventIdOne);
      };
      LobbyScene.prototype.start = function() {
        var _this = this;
        this.informMessageLabel.string = ConfigManage_1.default.getInformMessage();
        var userId = UserManage_1.default.getLoginUserId();
        if (null == userId) {
          window.location.replace(Config_1.config.loginPageAddress);
          return;
        }
        this.initUserInfo(userId);
        cc.director.preloadScene("RollRoomScene");
        this.versionLabel.string = Config_1.config.version;
        this.scheduleOnce(function() {
          _this.emulatorRoomHasClick = false;
        }, 1.5);
        this.JoinPart.node.on(cc.Node.EventType.TOUCH_END, function() {
          if (null !== _this.node.getChildByName("EntryBox")) return;
          _this.closeCreateRoomPanel();
          var node = cc.instantiate(_this.EntryBox);
          node.parent = _this.node;
          node.setPosition(3.687, 1.474);
          node.active = true;
        });
        this.LianXiChang.node.on(cc.Node.EventType.TOUCH_START, function() {
          _this.emulatorRoomHasClick = true;
          RoomManage_1.default.setEnterRoomParam({
            model: Const_1.EnterRoomModel.EMULATOR_ROOM
          });
          cc.director.loadScene("RollRoomScene");
        });
        this.setButton.node.on(cc.Node.EventType.TOUCH_START, function() {
          var node = cc.instantiate(_this.SetPanel);
          node.parent = _this.node;
          node.setPosition(0, 0);
        });
        this.exitButton.node.on(cc.Node.EventType.TOUCH_START, function() {
          var dialogParam = {
            sureButtonShow: true,
            cancelButtonShow: false,
            content: Const_1.WordMessage.login_page_action_tip,
            cancelButtonAction: null,
            sureButtonAction: Const_1.TipDialogButtonAction.OUT_TO_LOGIN
          };
          _this.dialogShow(dialogParam);
        });
        this.ruleButton.node.on(cc.Node.EventType.TOUCH_START, function() {
          var node = cc.instantiate(_this.RulePanel);
          node.parent = _this.node;
        });
        this.diamondBugPart.on(cc.Node.EventType.TOUCH_START, function() {
          var node = cc.instantiate(_this.rechargePanel);
          node.parent = _this.node;
        });
        this.customerButton.node.on(cc.Node.EventType.TOUCH_START, function() {
          if (null != _this.node.getChildByName("CustomerPanel")) return;
        });
        this.CreateRoomPart.node.on(cc.Node.EventType.TOUCH_END, function() {
          if (null !== _this.node.getChildByName("CreateRoomPanel")) return;
          _this.closeEntryBox();
          var node = cc.instantiate(_this.CreateRoomPanel);
          node.parent = _this.node;
          node.active = true;
        });
      };
      LobbyScene.prototype.dialogShow = function(dialogParam) {
        var node = cc.instantiate(this.tipDialog);
        var scriptOb = node.getComponent("TipDialog");
        node.parent = this.node;
        scriptOb.tipDialogShow(dialogParam);
      };
      __decorate([ property(cc.Prefab) ], LobbyScene.prototype, "EntryBox", void 0);
      __decorate([ property(cc.Prefab) ], LobbyScene.prototype, "CreateRoomPanel", void 0);
      __decorate([ property(cc.Prefab) ], LobbyScene.prototype, "CustomerPanel", void 0);
      __decorate([ property(cc.Sprite) ], LobbyScene.prototype, "JoinPart", void 0);
      __decorate([ property(cc.Prefab) ], LobbyScene.prototype, "SetPanel", void 0);
      __decorate([ property(cc.Prefab) ], LobbyScene.prototype, "RulePanel", void 0);
      __decorate([ property(cc.Sprite) ], LobbyScene.prototype, "ruleButton", void 0);
      __decorate([ property(cc.Sprite) ], LobbyScene.prototype, "customerButton", void 0);
      __decorate([ property(cc.Sprite) ], LobbyScene.prototype, "CreateRoomPart", void 0);
      __decorate([ property(cc.Sprite) ], LobbyScene.prototype, "LianXiChang", void 0);
      __decorate([ property(cc.Sprite) ], LobbyScene.prototype, "setButton", void 0);
      __decorate([ property(cc.Sprite) ], LobbyScene.prototype, "exitButton", void 0);
      __decorate([ property(cc.Node) ], LobbyScene.prototype, "diamondBugPart", void 0);
      __decorate([ property(cc.Prefab) ], LobbyScene.prototype, "rechargePanel", void 0);
      __decorate([ property(cc.Label) ], LobbyScene.prototype, "userName", void 0);
      __decorate([ property(cc.Label) ], LobbyScene.prototype, "userId", void 0);
      __decorate([ property(cc.Label) ], LobbyScene.prototype, "diamond", void 0);
      __decorate([ property(cc.Label) ], LobbyScene.prototype, "chipCount", void 0);
      __decorate([ property(cc.Label) ], LobbyScene.prototype, "informMessageLabel", void 0);
      __decorate([ property(cc.Label) ], LobbyScene.prototype, "versionLabel", void 0);
      __decorate([ property(cc.Prefab) ], LobbyScene.prototype, "tipDialog", void 0);
      __decorate([ property(cc.Sprite) ], LobbyScene.prototype, "userIconSprite", void 0);
      LobbyScene = __decorate([ ccclass ], LobbyScene);
      return LobbyScene;
    }(cc.Component);
    exports.default = LobbyScene;
    cc._RF.pop();
  }, {
    "../../common/Config": "Config",
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/Util": "Util",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage"
  } ],
  Log: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21d68ELVfxOubYvJQCcwSO+", "Log");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LogManage = function() {
      function LogManage() {
        this.levels = {
          e: 4,
          w: 3,
          i: 2,
          d: 1
        };
        this.level = this.getLevel();
        this.logNum = 1;
      }
      LogManage.prototype.getLevel = function() {
        var a = "ERROR";
        switch (a) {
         case "ERROR":
          return this.levels.e;

         case "WARN":
          return this.levels.w;

         case "INFO":
          return this.levels.i;

         case "DEBUG":
          return this.levels.d;

         default:
          return this.levels.i;
        }
      };
      LogManage.prototype.consoleShow = function(types, path, descs, v) {
        var descString = JSON.stringify(descs);
        console.log("the-flash:" + v + "(time:" + new Date() + ",   num:" + this.logNum++ + ",   type:" + JSON.stringify(types) + ",   path:" + path + ",   _desc:" + descString + ")");
      };
      LogManage.prototype.e = function(types, path, descs) {
        this.level <= this.levels.e && this.consoleShow(types, path, descs, "e");
      };
      LogManage.prototype.w = function(types, path, descs) {
        this.level <= this.levels.w && this.consoleShow(types, path, descs, "w");
      };
      LogManage.prototype.i = function(types, path, descs) {
        this.level <= this.levels.i && this.consoleShow(types, path, descs, "i");
      };
      LogManage.prototype.d = function(types, path, descs) {
        this.level <= this.levels.d && this.consoleShow(types, path, descs, "d");
      };
      return LogManage;
    }();
    exports.default = new LogManage();
    cc._RF.pop();
  }, {} ],
  MahjongResultLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8843dlqY8NJm58RFeA9VVFz", "MahjongResultLabel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mahjongReultWenZi = null;
        _this.majValZiHalf = [];
        _this.majValZiZhen = [];
        _this.erbagang = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.showResultWenZi = function(majongScore) {
        var ziSpriteFrame = this.getZiSpriteFrame(majongScore);
        this.mahjongReultWenZi.spriteFrame = ziSpriteFrame;
      };
      NewClass.prototype.getZiSpriteFrame = function(majongScore) {
        var val = 0;
        if (2 === majongScore.one && 8 === majongScore.two || 8 === majongScore.one && 2 === majongScore.two) return this.erbagang;
        if (majongScore.one === majongScore.two) return this.majValZiHalf[0];
        if (.5 === majongScore.one && .5 === majongScore.two) return this.majValZiZhen[1];
        if (.5 === majongScore.one || .5 === majongScore.two) {
          val = .5 === majongScore.one ? majongScore.two : majongScore.one;
          return this.majValZiHalf[val];
        }
        val = majongScore.two + majongScore.one;
        val >= 10 && (val -= 10);
        return this.majValZiZhen[val];
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "mahjongReultWenZi", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "majValZiHalf", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "majValZiZhen", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "erbagang", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  MiddleResultAmimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "adfd0wBwzZK1IH0o1GlDero", "MiddleResultAmimation");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var Const_1 = require("../../common/Const");
    var UserManage_1 = require("../../store/User/UserManage");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.wenZi = null;
        _this.tongsha = null;
        _this.tongpei = null;
        _this.goldWinWenZi = null;
        _this.grayWinWenZi = null;
        _this.goldFailWenZi = null;
        _this.grayFailWenZi = null;
        _this.goldBg = null;
        _this.grayBg = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var oningNum = RoomManage_1.default.roomItem.oningRaceNum;
        var race = RaceManage_1.default.raceList[oningNum];
        var landLordId = RaceManage_1.default.raceList[0].landlordId;
        var userId = UserManage_1.default.userInfo.id;
        var bgPicUrl = null;
        var wenziUrl = null;
        if (race.skyResult === Const_1.CompareDxRe.BIG && race.middleResult === Const_1.CompareDxRe.BIG && race.landResult === Const_1.CompareDxRe.BIG) {
          ConfigManage_1.default.isTxMusicOpen() && this.tongpei.play();
          if (landLordId === userId) {
            bgPicUrl = this.grayBg;
            wenziUrl = this.grayFailWenZi;
          } else {
            bgPicUrl = this.goldBg;
            wenziUrl = this.goldFailWenZi;
          }
        } else if (race.skyResult === Const_1.CompareDxRe.SMALL && race.middleResult === Const_1.CompareDxRe.SMALL && race.landResult === Const_1.CompareDxRe.SMALL) {
          ConfigManage_1.default.isTxMusicOpen() && this.tongsha.play();
          if (landLordId === userId) {
            bgPicUrl = this.goldBg;
            wenziUrl = this.goldWinWenZi;
          } else {
            bgPicUrl = this.grayBg;
            wenziUrl = this.grayWinWenZi;
          }
        }
        this.bg.spriteFrame = bgPicUrl;
        this.wenZi.spriteFrame = wenziUrl;
      };
      NewClass.prototype.onEnable = function() {};
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "bg", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "wenZi", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "tongsha", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "tongpei", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "goldWinWenZi", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "grayWinWenZi", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "goldFailWenZi", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "grayFailWenZi", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "goldBg", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "grayBg", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage"
  } ],
  MiddleTopScorePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9dfcgBV3FGTIZky2YCYu5K", "MiddleTopScorePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var Util_1 = require("../../common/Util");
    var UserManage_1 = require("../../store/User/UserManage");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.userScore = null;
        _this.totalScore = null;
        _this.landlordTotalScore = null;
        _this.eventIdOne = null;
        _this.eventIdTwo = null;
        _this.totalScoreVal = 0;
        _this.userScoreVal = 0;
        _this.bg = null;
        _this.bg_icon_1 = null;
        _this.bg_icon_2 = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.onLoad = function() {
        if (this.isLandlord()) {
          this.bg.spriteFrame = this.bg_icon_2;
          this.landlordTotalScore.node.active = true;
          this.userScore.node.active = false;
          this.totalScore.node.active = false;
        } else {
          this.bg.spriteFrame = this.bg_icon_1;
          this.landlordTotalScore.node.active = false;
          this.userScore.node.active = true;
          this.totalScore.node.active = true;
        }
      };
      NewClass.prototype.isLandlord = function() {
        var onNum = RoomManage_1.default.roomItem.oningRaceNum;
        if (UserManage_1.default.userInfo.id === RaceManage_1.default.raceList[onNum].landlordId) return true;
        return false;
      };
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.eventIdOne = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.BET_CHIP_CHANGE_EVENT, this.eventIdOne, function(betInfo) {
          var costVal = betInfo.toValue - betInfo.fromVal;
          _this.totalScoreVal += costVal;
          betInfo.userId == UserManage_1.default.userInfo.id && (_this.userScoreVal += costVal);
          _this.userScore.string = _this.userScoreVal + "";
          _this.totalScore.string = _this.totalScoreVal + "";
          _this.landlordTotalScore.string = _this.totalScoreVal + "";
        });
        this.eventIdTwo = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.BET_CANCE_NOTICE, this.eventIdTwo, function(info) {
          info.userId == UserManage_1.default.userInfo.id && (_this.userScoreVal -= info.fromVal);
          _this.totalScoreVal -= info.fromVal;
          _this.userScore.string = _this.userScoreVal + "";
          _this.totalScore.string = _this.totalScoreVal + "";
          _this.landlordTotalScore.string = _this.totalScoreVal + "";
        });
      };
      NewClass.prototype.onDisable = function() {
        this.totalScoreVal = 0;
        this.userScoreVal = 0;
        EventBus_1.eventBus.off(Const_1.EventType.BET_CHIP_CHANGE_EVENT, this.eventIdOne);
        EventBus_1.eventBus.off(Const_1.EventType.BET_CANCE_NOTICE, this.eventIdTwo);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "userScore", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "totalScore", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "landlordTotalScore", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "bg", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "bg_icon_1", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "bg_icon_2", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/Util": "Util",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage"
  } ],
  MiddleTopTimePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "844306HVh1ITKJ0iWgjUUbP", "MiddleTopTimePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.time = null;
        _this.stopBetVoice = null;
        _this.showTime = 0;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.betTimeShow = function() {
        var _this = this;
        var time = ConfigManage_1.default.getBetTime();
        this.showTime = time - 1;
        this.time.string = this.showTime.toString();
        this.schedule(function() {
          _this.showTime--;
          _this.time.string = _this.showTime.toString();
          if (_this.showTime <= 0) {
            ConfigManage_1.default.isTxMusicOpen() && _this.stopBetVoice.play();
            EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
              type: Const_1.LocalNoticeEventType.LOCAL_TIME_XIAZHU_FINISHED_NOTICE
            });
            _this.unscheduleAllCallbacks();
          }
        }, 1, time, 1);
      };
      NewClass.prototype.waitRaceSync = function() {
        var _this = this;
        this.showTime = 1;
        this.time.string = this.showTime.toString();
        this.schedule(function() {
          _this.showTime++;
          _this.time.string = _this.showTime.toString();
        }, 1, 1e3, 1);
      };
      NewClass.prototype.waitLandlordSync = function() {
        var _this = this;
        this.showTime = ConfigManage_1.default.getRapLandlordTime();
        this.time.string = this.showTime.toString();
        this.schedule(function() {
          _this.showTime--;
          _this.time.string = _this.showTime.toString();
        }, 1, 1e3, 1);
      };
      NewClass.prototype.getShowTime = function() {
        return this.showTime;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "time", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "stopBetVoice", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../store/Config/ConfigManage": "ConfigManage"
  } ],
  MjDouble: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "feae7kSwatEObXdK/uGiQX6", "MjDouble");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EventBus_1 = require("../../common/EventBus");
    var Const_2 = require("../../common/Const");
    var Util_1 = require("../../common/Util");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var Log_1 = require("../../common/Log");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.one = null;
        _this.two = null;
        _this.oneThirdIcon = null;
        _this.halfIcon = null;
        _this.allIcon = null;
        _this.majongIcons = [];
        _this.singleIntervalTime = .2;
        _this.twoIntervalTime = .1;
        _this.twoLocationIntervalTime = .45;
        _this.majongVoiceZhenDian = [];
        _this.majongVoiceHalf = [];
        _this.kaipaiVoice = null;
        _this.erbagangVoice = null;
        _this.openHeight = 23;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.initTime();
      };
      NewClass.prototype.initTime = function() {
        var weights = Math.floor(ConfigManage_1.default.getShowDownTime() / 4 / (2 * this.singleIntervalTime + this.twoIntervalTime + this.twoLocationIntervalTime) * 100) / 100;
        this.twoIntervalTime = weights * this.twoIntervalTime;
        this.singleIntervalTime = weights * this.singleIntervalTime;
        this.twoLocationIntervalTime = weights * this.twoLocationIntervalTime;
      };
      NewClass.prototype.open = function(tableLocationType) {
        var _this = this;
        var oningRaceNum = RoomManage_1.default.roomItem.oningRaceNum;
        var majongScore = RaceManage_1.default.raceList[oningRaceNum].getMahjongScore(tableLocationType);
        this.openAnimation(this.one, majongScore.one, function() {
          _this.scheduleOnce(function() {
            _this.toVoiceNotice(majongScore);
            _this.openAnimation(_this.two, majongScore.two, function() {
              var nextLocation = _this.getNextTableLocation(tableLocationType);
              nextLocation ? _this.scheduleOnce(function() {
                EventBus_1.eventBus.emit(Const_2.EventType.LOCAL_NOTICE_EVENT, {
                  type: Const_2.LocalNoticeEventType.OPEN_CARD_REQUEST_NOTICE,
                  info: nextLocation
                });
              }, _this.twoLocationIntervalTime) : EventBus_1.eventBus.emit(Const_2.EventType.LOCAL_NOTICE_EVENT, {
                type: Const_2.LocalNoticeEventType.OPEN_CARD_FINISHED_NOTICE
              });
            });
          }, _this.twoIntervalTime);
        });
      };
      NewClass.prototype.toVoiceNotice = function(majongScore) {
        var val = 0;
        if (majongScore.one === majongScore.two) {
          ConfigManage_1.default.isTxMusicOpen() && this.majongVoiceHalf[0].play();
          return;
        }
        if (2 === majongScore.one && 8 === majongScore.two || 8 === majongScore.one && 2 === majongScore.two) {
          ConfigManage_1.default.isTxMusicOpen() && this.erbagangVoice.play();
          return;
        }
        if (.5 === majongScore.one && .5 === majongScore.two) {
          ConfigManage_1.default.isTxMusicOpen() && this.majongVoiceZhenDian[1].play();
          return;
        }
        if (.5 === majongScore.one || .5 === majongScore.two) {
          val = .5 === majongScore.one ? majongScore.two : majongScore.one;
          ConfigManage_1.default.isTxMusicOpen() && this.majongVoiceHalf[val].play();
          return;
        }
        val = majongScore.two + majongScore.one;
        val >= 10 && (val -= 10);
        ConfigManage_1.default.isTxMusicOpen() && this.majongVoiceZhenDian[val].play();
      };
      NewClass.prototype.getNextTableLocation = function(tableLocationType) {
        switch (tableLocationType) {
         case Const_1.TableLocationType.LANDLORD:
          return Const_1.TableLocationType.SKY;

         case Const_1.TableLocationType.SKY:
          return Const_1.TableLocationType.MIDDLE;

         case Const_1.TableLocationType.MIDDLE:
          return Const_1.TableLocationType.LAND;

         case Const_1.TableLocationType.SKY:
          return null;
        }
        return null;
      };
      NewClass.prototype.openAnimation = function(ob, val, callBack) {
        var _this = this;
        var location = ob.node.getPosition();
        var timeOne = this.singleIntervalTime / 3 * 2;
        var timeTwo = this.singleIntervalTime / 3;
        ob.spriteFrame = this.oneThirdIcon;
        this.scheduleOnce(function() {
          ConfigManage_1.default.isTxMusicOpen() && _this.kaipaiVoice.play();
          ob.spriteFrame = _this.halfIcon;
          ob.node.setPosition(location.x, location.y + _this.openHeight);
          _this.scheduleOnce(function() {
            _this.drawResult(ob, val);
            ob.spriteFrame = _this.allIcon;
            ob.node.setPosition(location.x, location.y);
            callBack();
          }, timeTwo);
        }, timeOne);
      };
      NewClass.prototype.drawResult = function(ob, val) {
        val = .5 === val ? 0 : val;
        ob.node.getChildByName("MajongSprite").getComponent(cc.Sprite).spriteFrame = this.majongIcons[val];
      };
      NewClass.prototype.randNum = function(n, m) {
        var c = m - n + 1;
        return Math.floor(Math.random() * c + n);
      };
      NewClass.prototype.getTableLocationType = function() {
        if (this.node.name === "MjDouble" + Const_1.TableLocationType.LAND) return Const_1.TableLocationType.LAND;
        if (this.node.name === "MjDouble" + Const_1.TableLocationType.LANDLORD) return Const_1.TableLocationType.LANDLORD;
        if (this.node.name === "MjDouble" + Const_1.TableLocationType.MIDDLE) return Const_1.TableLocationType.MIDDLE;
        if (this.node.name === "MjDouble" + Const_1.TableLocationType.SKY) return Const_1.TableLocationType.SKY;
        Log_1.default.e([], "MjDouble", [ "\u672a\u77e5\u7684\u724c\u4f4d" ]);
        return null;
      };
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.localEventId = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_2.EventType.LOCAL_NOTICE_EVENT, this.localEventId, function(info) {
          if (info.type === Const_2.LocalNoticeEventType.OPEN_CARD_REQUEST_NOTICE) {
            var tableLocationType = info.info;
            _this.getTableLocationType() == tableLocationType && _this.open(tableLocationType);
          } else if (info.type === Const_2.LocalNoticeEventType.OPEN_IMMEDIATELY) {
            Log_1.default.d([], "MjDouble", [ "\u63a5\u53d7\u5230\u4f5c\u5f0a\u7ffb\u724c\u901a\u77e5\uff0c\u5f00\u59cb\u7ffb\u724c" ]);
            try {
              var majongScore = RaceManage_1.default.raceList[RoomManage_1.default.roomItem.oningRaceNum].getMahjongScore(_this.getTableLocationType());
              Log_1.default.d([], "MjDouble", [ "\u7ffb\u724c\u70b9\u6570", majongScore ]);
              _this.openAnimation(_this.one, majongScore.one, function() {});
              _this.openAnimation(_this.two, majongScore.two, function() {});
            } catch (e) {
              Log_1.default.e([], "MjDouble", [ "\u5168\u90e8\u7ffb\u724c\u903b\u8f91\u62a5\u9519", e.toLocaleString() ]);
            }
          }
        });
      };
      NewClass.prototype.onDisable = function() {
        EventBus_1.eventBus.off(Const_2.EventType.LOCAL_NOTICE_EVENT, this.localEventId);
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "one", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "two", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "oneThirdIcon", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "halfIcon", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "allIcon", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "majongIcons", void 0);
      __decorate([ property([ cc.AudioSource ]) ], NewClass.prototype, "majongVoiceZhenDian", void 0);
      __decorate([ property([ cc.AudioSource ]) ], NewClass.prototype, "majongVoiceHalf", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "kaipaiVoice", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "erbagangVoice", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/Log": "Log",
    "../../common/Util": "Util",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage"
  } ],
  PlayButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21a25h1+h5P5Jn82WKFmUX9", "PlayButton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
            type: Const_1.LocalNoticeEventType.PLAY_BUTTON_EVENT
          });
          _this.node.destroy();
        });
      };
      NewClass.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, function() {});
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus"
  } ],
  PlayRule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9fa2eeHnxNw4qH3Xg3aqH0", "PlayRule");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.closeButton = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          _this.node.active = false;
        });
      };
      __decorate([ property(cc.RichText) ], NewClass.prototype, "label", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "closeButton", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  PlayUserIcon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "372b8+rrxVGgqzmziHdELsC", "PlayUserIcon");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var Util_1 = require("../../common/Util");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var UserManage_1 = require("../../store/User/UserManage");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var FaceList_1 = require("../../common/FaceList");
    var WenZiList_1 = require("../../common/WenZiList");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.userName = null;
        _this.voicePlayAnimation = null;
        _this.userScoreLabel = null;
        _this.userIcon = null;
        _this.kickButton = null;
        _this.offLineIcon = null;
        _this.fangZhuIcon = null;
        _this.eventIdOne = "";
        _this.eventIdTwo = "";
        _this.eventIdThree = "";
        _this.eventIdFour = "";
        _this.eventIdFive = "";
        _this.eventIdSix = "";
        _this.eventIdSeven = "";
        _this.memberData = null;
        _this.messageIconPref = null;
        _this.messageZiPref = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.kickButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          try {
            _this.kickButton.node.active = false;
            cc.find("Canvas").getComponent("RollRoomScene").kickoutButtonClick(_this.memberData.userId, _this.memberData.userName);
          } catch (error) {}
        });
        this.userIcon.node.on(cc.Node.EventType.TOUCH_END, function() {
          RoomManage_1.default.roomItem.creatUserId == UserManage_1.default.userInfo.id && _this.memberData.userId != UserManage_1.default.userInfo.id && (_this.kickButton.node.active = !_this.kickButton.node.active);
        });
      };
      NewClass.prototype.changeByUserState = function(myState) {
        this.memberData.state = myState;
        switch (myState) {
         case Const_1.memberState.OffLine:
          this.offLineIcon.node.active = true;
          break;

         case Const_1.memberState.OnLine:
          this.offLineIcon.node.active = false;
        }
      };
      NewClass.prototype.setShow = function(memberData) {
        var _this = this;
        this.memberData = memberData;
        this.memberData.userId == RoomManage_1.default.roomItem.creatUserId && (this.fangZhuIcon.node.active = true);
        this.userIcon.spriteFrame = null;
        this.userName.string = memberData.userName;
        this.changeByUserState(memberData.state);
        this.updateScoreShow(memberData.xiaZhuVal);
        var enterRoomParam = RoomManage_1.default.getEnterRoomParam();
        if (enterRoomParam.model === Const_1.EnterRoomModel.EMULATOR_ROOM && this.memberData.userId != UserManage_1.default.userInfo.id) cc.loader.loadRes(memberData.userIcon, function(error, img) {
          var myIcon = new cc.SpriteFrame(img);
          null !== myIcon && null != _this.userIcon && (_this.userIcon.spriteFrame = myIcon);
        }); else {
          var iconUrl = ConfigManage_1.default.getUserIconUrl() + memberData.userIcon;
          cc.loader.load({
            url: iconUrl,
            type: "png"
          }, function(err, img) {
            var myIcon = new cc.SpriteFrame(img);
            null !== myIcon && null != _this.userIcon && (_this.userIcon.spriteFrame = myIcon);
          });
        }
      };
      NewClass.prototype.updateScoreShow = function(score) {
        this.memberData.xiaZhuVal = score;
        this.userScoreLabel.string = score + "";
      };
      NewClass.prototype.getMemberData = function() {
        return this.memberData;
      };
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.eventIdOne = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.BET_CHIP_CHANGE_EVENT, this.eventIdOne, function(betInfo) {
          if (betInfo.userId == _this.memberData.userId) {
            var xiaZhuVal = betInfo.toValue - betInfo.fromVal;
            var nowVal = _this.memberData.xiaZhuVal - xiaZhuVal;
            _this.updateScoreShow(nowVal);
            betInfo.userId == UserManage_1.default.userInfo.id && (cc.find("Canvas").getComponent("RollRoomScene").userScoreLabel.string = _this.userScoreLabel.string);
          }
        });
        this.eventIdTwo = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.USER_SCORE_NOTICE, this.eventIdTwo, function(list) {
          "undefined" != typeof list[_this.memberData.userId] ? _this.updateScoreShow(list[_this.memberData.userId]) : _this.updateScoreShow(0);
        });
        this.eventIdThree = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.BET_CANCE_NOTICE, this.eventIdThree, function(info) {
          if (info.userId == _this.memberData.userId) {
            var fromVal = info.fromVal;
            var nowVal = _this.memberData.xiaZhuVal + fromVal;
            _this.updateScoreShow(nowVal);
            info.userId == UserManage_1.default.userInfo.id && (cc.find("Canvas").getComponent("RollRoomScene").userScoreLabel.string = _this.userScoreLabel.string);
          }
        });
        this.eventIdFour = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.MEMBER_STATE_CHANGE, this.eventIdFour, function(info) {
          info.userId == _this.memberData.userId && _this.changeByUserState(info.state);
        });
        this.eventIdFive = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.RACE_STATE_CHANGE_EVENT, this.eventIdFive, function(info) {
          var to = info.toState;
          switch (to) {
           case Const_1.RaceState.SHOW_DOWN:
            if (RoomManage_1.default.getEnterRoomParam().model === Const_1.EnterRoomModel.EMULATOR_ROOM) {
              var theScore_1 = RaceManage_1.default.getUserScore(_this.memberData.userId);
              _this.scheduleOnce(function() {
                _this.updateScoreShow(theScore_1);
                _this.memberData.userId == UserManage_1.default.userInfo.id && (cc.find("Canvas").getComponent("RollRoomScene").userScoreLabel.string = _this.userScoreLabel.string);
              }, ConfigManage_1.default.getShowDownTime() + 1);
            }
          }
        });
        this.eventIdSix = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.CARTON_MESSAGE_NOTICE, this.eventIdSix, function(info) {
          if (info.userId == _this.memberData.userId) if (info.type == Const_1.ChatMessageType.PIC) {
            var facecItem = FaceList_1.faceList[info.message];
            _this.faceShow(facecItem);
          } else if (info.type == Const_1.ChatMessageType.QIANG_ZHUANG) {
            var facecItem = {
              name: "jzhuang",
              size: {
                x: 80,
                y: 41
              }
            };
            _this.faceShow(facecItem);
          } else _this.ziShow(info);
        });
        this.eventIdSeven = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.LOCAL_NOTICE_EVENT, this.eventIdSeven, function(info) {
          var localNoticeEventType = info.type;
          switch (localNoticeEventType) {
           case Const_1.LocalNoticeEventType.PLAY_AUDIO_LOCAL_NOTICE:
            var infoItem = info.info;
            var duration = Math.ceil(infoItem.duration / 1e3);
            if (infoItem.userId == _this.memberData.userId) {
              _this.voicePlayAnimation.node.active = true;
              _this.voicePlayAnimation.play();
              _this.scheduleOnce(function() {
                _this.voicePlayAnimation.node.active = false;
                _this.voicePlayAnimation.stop();
              }, duration);
            }
          }
        });
      };
      NewClass.prototype.faceShow = function(facecItem) {
        var _this = this;
        cc.loader.loadRes("ChatCarton/" + facecItem.name, function(error, img) {
          var node = cc.instantiate(_this.messageIconPref);
          node.parent = _this.node.parent.parent;
          var x = _this.node.parent.position.x + 50;
          var y = _this.node.parent.position.y + 30;
          node.setPosition(x, y);
          node.width = facecItem.size.x;
          node.height = facecItem.size.y;
          var myIcon = new cc.SpriteFrame(img);
          node.getChildByName("Pic").getComponents(cc.Sprite)[0].spriteFrame = myIcon;
          setTimeout(function() {
            node.destroy();
          }, 2e3);
        });
      };
      NewClass.prototype.ziShow = function(info) {
        var node = cc.instantiate(this.messageZiPref);
        node.parent = this.node.parent.parent;
        var x = this.node.parent.position.x;
        var y = this.node.parent.position.y - 50;
        node.setPosition(x, y);
        node.getComponent(cc.Label).string = WenZiList_1.wenZiList[info.message]["content"];
        setTimeout(function() {
          node.destroy();
        }, 2e3);
      };
      NewClass.prototype.onDisable = function() {
        EventBus_1.eventBus.off(Const_1.EventType.BET_CHIP_CHANGE_EVENT, this.eventIdOne);
        EventBus_1.eventBus.off(Const_1.EventType.USER_SCORE_NOTICE, this.eventIdTwo);
        EventBus_1.eventBus.off(Const_1.EventType.BET_CANCE_NOTICE, this.eventIdThree);
        EventBus_1.eventBus.off(Const_1.EventType.MEMBER_STATE_CHANGE, this.eventIdFour);
        EventBus_1.eventBus.off(Const_1.EventType.RACE_STATE_CHANGE_EVENT, this.eventIdFive);
        EventBus_1.eventBus.off(Const_1.EventType.CARTON_MESSAGE_NOTICE, this.eventIdSix);
        EventBus_1.eventBus.off(Const_1.EventType.LOCAL_NOTICE_EVENT, this.eventIdSeven);
      };
      NewClass.prototype.update = function(dt) {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "userName", void 0);
      __decorate([ property(cc.Animation) ], NewClass.prototype, "voicePlayAnimation", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "userScoreLabel", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "userIcon", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "kickButton", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "offLineIcon", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "fangZhuIcon", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "messageIconPref", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "messageZiPref", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/FaceList": "FaceList",
    "../../common/Util": "Util",
    "../../common/WenZiList": "WenZiList",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage"
  } ],
  RaceItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3edcuE7yZBxpmdhJ2EHEEL", "RaceItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var GameMemberManage_1 = require("../GameMember/GameMemberManage");
    var Util_1 = require("../../common/Util");
    var RaceItem = function() {
      function RaceItem(val) {
        this.raceId = null;
        this.num = null;
        this._state = null;
        this._landlordId = null;
        this.landlordScore = null;
        this.skyScore = null;
        this.middleScore = null;
        this.landScore = null;
        this.points = null;
        this.landResult = null;
        this.middleResult = null;
        this.bridgResult = null;
        this.landCornerResult = null;
        this.skyCornerResult = null;
        this.skyResult = null;
        this.raceResultList = null;
        this.raceId = val.id;
        this.num = val.raceNum;
        this._state = val.playState;
        this.landlordScore = val.landlordScore;
        this.skyScore = val.skyScore;
        this.middleScore = val.middleScore;
        this.landScore = val.landScore;
        this.points = val.points;
        this._landlordId = val.landlordId;
        this.landResult = val.landResult;
        this.middleResult = val.middleResult;
        this.bridgResult = val.bridgResult;
        this.landCornerResult = val.landCornerResult;
        this.skyCornerResult = val.skyCornerResult;
        this.skyResult = val.skyResult;
      }
      RaceItem.prototype.getUserRaceScore = function(userId) {
        if (null === this.raceResultList) return 0;
        for (var i = 0; i < this.raceResultList.length; i++) if (this.raceResultList[i].userId === userId) return this.raceResultList[i].score;
        return 0;
      };
      RaceItem.prototype.getLocationResult = function(location) {
        switch (location) {
         case Const_1.betLocaion.SKY:
          return this.skyResult;

         case Const_1.betLocaion.MIDDLE:
          return this.middleResult;

         case Const_1.betLocaion.LAND:
          return this.landResult;

         case Const_1.betLocaion.SKY_CORNER:
          return this.skyCornerResult;

         case Const_1.betLocaion.BRIDG:
          return this.bridgResult;

         case Const_1.betLocaion.LAND_CORNER:
          return this.landCornerResult;
        }
        return null;
      };
      RaceItem.prototype.setRaceResultList = function(list) {
        this.raceResultList = Util_1.getMemeberResultScoreList(list, GameMemberManage_1.default.gameMenmberList);
      };
      RaceItem.prototype.getMahjongScore = function(location) {
        switch (location) {
         case Const_1.TableLocationType.SKY:
          return this.skyScore;

         case Const_1.TableLocationType.MIDDLE:
          return this.middleScore;

         case Const_1.TableLocationType.LAND:
          return this.landScore;

         case Const_1.TableLocationType.LANDLORD:
          return this.landlordScore;
        }
      };
      Object.defineProperty(RaceItem.prototype, "landlordId", {
        get: function() {
          return this._landlordId;
        },
        enumerable: true,
        configurable: true
      });
      RaceItem.prototype.setLandlordId = function(val, oningRace) {
        oningRace == this.num && EventBus_1.eventBus.emit(Const_1.EventType.LANDLORD_CAHNGE_EVENT, val);
        this._landlordId = val;
      };
      Object.defineProperty(RaceItem.prototype, "state", {
        get: function() {
          return this._state;
        },
        set: function(val) {
          if (null != this._state) {
            this._state = val;
            var raceChangeInfo = {
              toState: val,
              raceId: this.raceId,
              raceNum: this.num
            };
            EventBus_1.eventBus.emit(Const_1.EventType.RACE_STATE_CHANGE_EVENT, raceChangeInfo);
          }
          this._state = val;
        },
        enumerable: true,
        configurable: true
      });
      return RaceItem;
    }();
    exports.default = RaceItem;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/Util": "Util",
    "../GameMember/GameMemberManage": "GameMemberManage"
  } ],
  RaceList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e961hYkD5CS7a5yxcMWQC4", "RaceList");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../common/Const");
    exports.RaceList = [ {
      id: "1",
      raceNum: 0,
      landlordId: "6666661",
      playState: Const_1.RaceState.NOT_BEGIN,
      landlordScore: {
        one: 2,
        two: 8
      },
      skyScore: {
        one: 3,
        two: 4
      },
      middleScore: {
        one: 4,
        two: 1
      },
      landScore: {
        one: 1,
        two: 9
      },
      points: {
        one: 6,
        two: 5
      },
      landResult: Const_1.CompareDxRe.SMALL,
      middleResult: Const_1.CompareDxRe.SMALL,
      bridgResult: Const_1.CompareDxRe.SMALL,
      landCornerResult: Const_1.CompareDxRe.SMALL,
      skyCornerResult: Const_1.CompareDxRe.SMALL,
      skyResult: Const_1.CompareDxRe.SMALL
    }, {
      id: "2",
      raceNum: 1,
      landlordId: "6666661",
      playState: Const_1.RaceState.NOT_BEGIN,
      landlordScore: {
        one: .5,
        two: 3
      },
      skyScore: {
        one: 3,
        two: 3
      },
      middleScore: {
        one: 6,
        two: 1
      },
      landScore: {
        one: 2,
        two: 1
      },
      points: {
        one: 1,
        two: 1
      },
      landResult: Const_1.CompareDxRe.SMALL,
      middleResult: Const_1.CompareDxRe.BIG,
      bridgResult: Const_1.CompareDxRe.EQ,
      landCornerResult: Const_1.CompareDxRe.EQ,
      skyCornerResult: Const_1.CompareDxRe.BIG,
      skyResult: Const_1.CompareDxRe.BIG
    }, {
      id: "3",
      raceNum: 2,
      landlordId: "6666661",
      playState: Const_1.RaceState.NOT_BEGIN,
      landlordScore: {
        one: 2,
        two: 4
      },
      skyScore: {
        one: 6,
        two: 1
      },
      middleScore: {
        one: 7,
        two: .5
      },
      landScore: {
        one: 8,
        two: 8
      },
      points: {
        one: 4,
        two: 4
      },
      landResult: Const_1.CompareDxRe.BIG,
      middleResult: Const_1.CompareDxRe.BIG,
      bridgResult: Const_1.CompareDxRe.BIG,
      landCornerResult: Const_1.CompareDxRe.BIG,
      skyCornerResult: Const_1.CompareDxRe.BIG,
      skyResult: Const_1.CompareDxRe.BIG
    }, {
      id: "4",
      raceNum: 3,
      landlordId: "6666661",
      playState: Const_1.RaceState.NOT_BEGIN,
      landlordScore: {
        one: 5,
        two: 5
      },
      skyScore: {
        one: 1,
        two: 1
      },
      middleScore: {
        one: 3,
        two: 4
      },
      landScore: {
        one: 8,
        two: 2
      },
      points: {
        one: 2,
        two: 3
      },
      landResult: Const_1.CompareDxRe.BIG,
      middleResult: Const_1.CompareDxRe.SMALL,
      bridgResult: Const_1.CompareDxRe.EQ,
      landCornerResult: Const_1.CompareDxRe.EQ,
      skyCornerResult: Const_1.CompareDxRe.SMALL,
      skyResult: Const_1.CompareDxRe.SMALL
    } ];
    cc._RF.pop();
  }, {
    "../common/Const": "Const"
  } ],
  RaceMajResult: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1977sNtsVGVaxkR1TyWNMO", "RaceMajResult");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.majResultIcon = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "majResultIcon", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  RaceManage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca693/AEmVGO6ROE0M6G/V5", "RaceManage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RaceItem_1 = require("./RaceItem");
    var Const_1 = require("../../common/Const");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var BetManage_1 = require("../Bets/BetManage");
    var GameMemberManage_1 = require("../GameMember/GameMemberManage");
    var Util_1 = require("../../common/Util");
    var RaceManage = function() {
      function RaceManage() {
        this.raceList = [];
        this.clickXiaZhuVal = 0;
      }
      RaceManage.prototype.setRaceList = function(list) {
        var _this = this;
        list.forEach(function(item) {
          _this.raceList[item.raceNum] = new RaceItem_1.default(item);
        });
      };
      RaceManage.prototype.clear = function() {
        this.raceList = [];
        this.gameOverResultList = null;
      };
      RaceManage.prototype.getClickXiaZhuVal = function() {
        return this.clickXiaZhuVal;
      };
      RaceManage.prototype.setClickXiaZhuVal = function(val) {
        this.clickXiaZhuVal = val;
      };
      RaceManage.prototype.setGameOverResultList = function(list) {
        this.gameOverResultList = Util_1.getMemeberResultScoreList(list, GameMemberManage_1.default.gameMenmberList);
      };
      RaceManage.prototype.getUserTheRaceScore = function(raceNum, userId) {
        var score = 0;
        var raceItem = this.raceList[raceNum];
        if (userId === this.raceList[raceNum].landlordId) {
          if ("undefined" === typeof BetManage_1.default.betList[raceNum]) return score;
          BetManage_1.default.betList[raceNum].forEach(function(item) {
            score -= item.getScore(raceItem.skyResult, raceItem.middleResult, raceItem.landResult, raceItem.skyCornerResult, raceItem.bridgResult, raceItem.landCornerResult);
          });
          return score;
        }
        if ("undefined" === typeof BetManage_1.default.betList[raceNum] || "undefined" === typeof BetManage_1.default.betList[raceNum][userId]) return score;
        var userBetitem = BetManage_1.default.betList[raceNum][userId];
        return userBetitem.getScore(raceItem.skyResult, raceItem.middleResult, raceItem.landResult, raceItem.skyCornerResult, raceItem.bridgResult, raceItem.landCornerResult);
      };
      RaceManage.prototype.getUserScore = function(userId) {
        var score = 0;
        var i = 0;
        for (;i <= RoomManage_1.default.roomItem.oningRaceNum; i++) this.raceList[i].state == Const_1.RaceState.BET ? "undefined" != typeof BetManage_1.default.betList[i] && "undefined" != typeof BetManage_1.default.betList[i][userId] && (score -= BetManage_1.default.betList[i][userId].getXiaZhuVal()) : score += this.getUserTheRaceScore(i, userId);
        return score;
      };
      RaceManage.prototype.requestRaceList = function() {
        var _this = this;
        return new Promise(function(resolve) {
          resolve({
            result: Const_1.PromiseResult.SUCCESS,
            extObject: _this.raceList
          });
        });
      };
      RaceManage.prototype.getPlayingRaceInfo = function() {
        var i = 0;
        for (;i < this.raceList.length; i++) if (this.raceList[i].state !== Const_1.RaceState.NOT_BEGIN && this.raceList[i].state !== Const_1.RaceState.FINISHED) return this.raceList[i];
        return null;
      };
      RaceManage.prototype.changeRaceState = function(toState) {
        var oningRaceNum = RoomManage_1.default.roomItem.oningRaceNum;
        this.raceList[oningRaceNum].state = toState;
      };
      RaceManage.prototype.changeRaceLandlord = function(landlordId, landlordLastCount, fromRaceNum) {
        var i = 0;
        var oningRaceNum = RoomManage_1.default.roomItem.oningRaceNum;
        while (i < landlordLastCount) {
          "undefined" != typeof this.raceList[fromRaceNum + i] && this.raceList[fromRaceNum + i].setLandlordId(landlordId, oningRaceNum);
          i++;
        }
      };
      return RaceManage;
    }();
    exports.default = new RaceManage();
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/Util": "Util",
    "../../store/Room/RoomManage": "RoomManage",
    "../Bets/BetManage": "BetManage",
    "../GameMember/GameMemberManage": "GameMemberManage",
    "./RaceItem": "RaceItem"
  } ],
  RaceResultPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f39bbbNl4dPoomoJmZSyLmg", "RaceResultPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var UserManage_1 = require("../../store/User/UserManage");
    var Const_1 = require("../../common/Const");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.myScore = null;
        _this.memberScoreItem = null;
        _this.landlordName = null;
        _this.landlordScore = null;
        _this.sky_dian_1 = null;
        _this.sky_dian_2 = null;
        _this.middle_dian_1 = null;
        _this.middle_dian_2 = null;
        _this.land_dian_1 = null;
        _this.land_dian_2 = null;
        _this.landlord_dian_1 = null;
        _this.landlord_dian_2 = null;
        _this.skyWinOrFail = null;
        _this.middleWinOrFail = null;
        _this.landWinOrFail = null;
        _this.userWinOrFail = null;
        _this.majongWinIcon = null;
        _this.majongFailIcon = null;
        _this.userWinIcon = null;
        _this.userFailIcon = null;
        _this.majongIcons = [];
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.show();
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          _this.node.destroy();
        });
      };
      NewClass.prototype.drawResult = function(ob, val) {
        val = .5 === val ? 0 : val;
        ob.node.getChildByName("MajongSprite").getComponent(cc.Sprite).spriteFrame = this.majongIcons[val];
      };
      NewClass.prototype.show = function() {
        var _this = this;
        var raceNum = RoomManage_1.default.roomItem.oningRaceNum;
        var raceInfo = RaceManage_1.default.raceList[raceNum];
        var landloardId = raceInfo.landlordId;
        this.drawResult(this.sky_dian_1, raceInfo.skyScore.one);
        this.drawResult(this.sky_dian_2, raceInfo.skyScore.two);
        this.drawResult(this.middle_dian_1, raceInfo.middleScore.one);
        this.drawResult(this.middle_dian_2, raceInfo.middleScore.two);
        this.drawResult(this.land_dian_1, raceInfo.landScore.one);
        this.drawResult(this.land_dian_2, raceInfo.landScore.two);
        this.drawResult(this.landlord_dian_1, raceInfo.landlordScore.one);
        this.drawResult(this.landlord_dian_2, raceInfo.landlordScore.two);
        this.showWinOrFailIcon(raceInfo);
        var raceResultList = null == RaceManage_1.default.raceList[raceNum].raceResultList ? [] : RaceManage_1.default.raceList[raceNum].raceResultList;
        var i = 0;
        raceResultList.forEach(function(item) {
          i++;
          var node = cc.instantiate(_this.memberScoreItem);
          var nameLabel = node.getChildByName("name").getComponents(cc.Label);
          var scoreLabel = node.getChildByName("score").getComponents(cc.Label);
          nameLabel[0].string = i + ". " + item.nick;
          if (item.userId === landloardId) {
            _this.landlordName.string = item.nick;
            _this.landlordScore.string = item.score + "";
          }
          item.score > 0 && (scoreLabel[0].node.color = cc.Color.YELLOW);
          scoreLabel[0].string = item.score + "";
          node.parent = _this.node.getChildByName("MemberList");
          if (UserManage_1.default.userInfo.id === item.userId) {
            _this.myScore.string = item.score + "";
            _this.userWinOrFail.spriteFrame = item.score >= 0 ? _this.userWinIcon : _this.userFailIcon;
            0 === item.score ? _this.userWinOrFail.node.active = false : _this.userWinOrFail.node.active = true;
          }
        });
      };
      NewClass.prototype.showWinOrFailIcon = function(raceInfo) {
        try {
          this.skyWinOrFail.spriteFrame = raceInfo.skyResult === Const_1.CompareDxRe.BIG ? this.majongWinIcon : this.majongFailIcon;
          this.middleWinOrFail.spriteFrame = raceInfo.middleResult === Const_1.CompareDxRe.BIG ? this.majongWinIcon : this.majongFailIcon;
          this.landWinOrFail.spriteFrame = raceInfo.landResult === Const_1.CompareDxRe.BIG ? this.majongWinIcon : this.majongFailIcon;
        } catch (e) {}
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "myScore", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "memberScoreItem", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "landlordName", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "landlordScore", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "sky_dian_1", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "sky_dian_2", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "middle_dian_1", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "middle_dian_2", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "land_dian_1", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "land_dian_2", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "landlord_dian_1", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "landlord_dian_2", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "skyWinOrFail", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "middleWinOrFail", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "landWinOrFail", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "userWinOrFail", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "majongWinIcon", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "majongFailIcon", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "userWinIcon", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "userFailIcon", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "majongIcons", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage"
  } ],
  RapLandlordButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eff0eN8/iFJ3YAok25uOX0N", "RapLandlordButton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.focus = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          _this.node.parent.parent.getComponent("RollRoomScene").playWoQiangVoice();
          EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
            type: Const_1.LocalNoticeEventType.LOCAL_BE_LANDLORD_RESULT,
            info: true
          });
          _this.node.active = false;
        });
      };
      NewClass.prototype.update = function(dt) {
        this.focus.node.angle = this.focus.node.angle + .2;
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "focus", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus"
  } ],
  RechargePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "427d4qR1r5KmYDcFV+NczOD", "RechargePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.oneRechargePart = null;
        _this.twoRechargePart = null;
        _this.threeRechargePart = null;
        _this.fourRechargePart = null;
        _this.closeButton = null;
        _this.cutomerWechat = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.cutomerWechat.string = "\u8bf7\u8054\u7cfb\u5ba2\u670d\u8d2d\u4e70\uff0c\u5ba2\u670d\u5fae\u4fe1\u53f7" + ConfigManage_1.default.getCustomerWechatNum();
      };
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.oneRechargePart.on(cc.Node.EventType.TOUCH_END, function() {
          _this.buyDiamond(2e3);
        });
        this.twoRechargePart.on(cc.Node.EventType.TOUCH_END, function() {
          _this.buyDiamond(1e3);
        });
        this.threeRechargePart.on(cc.Node.EventType.TOUCH_END, function() {
          _this.buyDiamond(500);
        });
        this.fourRechargePart.on(cc.Node.EventType.TOUCH_END, function() {
          _this.buyDiamond(100);
        });
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          _this.node.destroy();
        });
      };
      NewClass.prototype.buyDiamond = function(count) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.node.destroy();
            return [ 2 ];
          });
        });
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "oneRechargePart", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "twoRechargePart", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "threeRechargePart", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "fourRechargePart", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "closeButton", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "cutomerWechat", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../store/Config/ConfigManage": "ConfigManage"
  } ],
  RollControlerBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69352EmXJFJbJMSEg+QaVda", "RollControlerBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventBus_1 = require("./EventBus");
    var RoomManage_1 = require("../store/Room/RoomManage");
    var RaceManage_1 = require("../store/Races/RaceManage");
    var ConfigManage_1 = require("../store/Config/ConfigManage");
    var Util_1 = require("./Util");
    var Const_1 = require("./Const");
    var BetManage_1 = require("../store/Bets/BetManage");
    var UserManage_1 = require("../store/User/UserManage");
    var WebSocketManage_1 = require("../common/WebSocketManage");
    var GameMemberManage_1 = require("../store/GameMember/GameMemberManage");
    var loglevel_1 = require("loglevel");
    var RollControlerBase = function() {
      function RollControlerBase(cc, isEmulatorRoom, roomScene) {
        this.eventIdList = [];
        this.name = "RollController";
        this.setTimeoutList = [];
        this.cc = cc;
        this.isEmulatorRoom = isEmulatorRoom;
        this.roomScene = roomScene;
      }
      RollControlerBase.prototype.execBetAction = function() {
        this.isEmulatorRoom && this.emulateBet();
        this.roomScene.adjustBeforeRaceStateChange(Const_1.RaceState.BET);
        this.roomScene.showXiaZhuPanel();
        this.cc.find("Canvas").getChildByName("DealMachine").getComponent("DealMachine").checkAndAddMajong();
        this.roomScene.showMiddleTopTimePanel();
        this.roomScene.showMiddleTopScorePanel();
      };
      RollControlerBase.prototype.execDealAction = function() {
        var _this = this;
        this.roomScene.adjustBeforeRaceStateChange(Const_1.RaceState.DEAL);
        var kaiShi = cc.instantiate(this.roomScene.kaiShipTip);
        this.roomScene.scheduleOnce(function() {
          kaiShi.parent = _this.cc.find("Canvas/Desk");
          kaiShi.setPosition(0, 0);
          kaiShi.active = true;
          ConfigManage_1.default.isTxMusicOpen() && _this.roomScene.beginVoice.play();
          _this.roomScene.scheduleOnce(function() {
            kaiShi.destroy();
            _this.roomScene.beginRollDice();
            _this.roomScene.showXiaZhuPanel();
          }, ConfigManage_1.default.getBeginTextShowTime());
        }, ConfigManage_1.default.getTimeBeforeBeginText());
      };
      RollControlerBase.prototype.responseLocalBeLandlordDeal = function(wantLandlord) {
        var userId = UserManage_1.default.userInfo.id;
        var oningRaceNum = RoomManage_1.default.roomItem.oningRaceNum;
        if (wantLandlord) {
          var notice = {
            type: Const_1.NoticeType.landlordSelected,
            info: {
              roomId: RoomManage_1.default.roomItem.id,
              raceNum: oningRaceNum,
              landlordId: userId
            }
          };
          WebSocketManage_1.default.send(JSON.stringify(notice));
        }
      };
      RollControlerBase.prototype.emulateXiaZhuByUser = function(userId) {
        var randVal = ConfigManage_1.default.getChipValList();
        var oningRaceNum = RoomManage_1.default.roomItem.oningRaceNum;
        if (RaceManage_1.default.raceList[oningRaceNum].state !== Const_1.RaceState.BET) return;
        var localXiaZhuLimiTime = ConfigManage_1.default.getBetTime();
        var ranTime = Util_1.randFloatNum(1, localXiaZhuLimiTime - 1);
        var setTimeOutOne = setTimeout(function() {
          BetManage_1.default.addBet(oningRaceNum, userId, Const_1.betLocaion.LAND_CORNER, randVal[Util_1.randomRange(0, 4)]);
        }, 1e3 * ranTime);
        this.setTimeoutList.push(setTimeOutOne);
        ranTime = Util_1.randFloatNum(1, localXiaZhuLimiTime - 1);
        var setTimeOutTwo = setTimeout(function() {
          BetManage_1.default.addBet(oningRaceNum, userId, Const_1.betLocaion.SKY, randVal[Util_1.randomRange(0, 4)]);
        }, 1e3 * ranTime);
        this.setTimeoutList.push(setTimeOutTwo);
        ranTime = Util_1.randFloatNum(1, localXiaZhuLimiTime - 1);
        var setTimeOut7 = setTimeout(function() {
          BetManage_1.default.addBet(oningRaceNum, userId, Const_1.betLocaion.BRIDG, randVal[Util_1.randomRange(0, 4)]);
        }, 1e3 * ranTime);
        this.setTimeoutList.push(setTimeOut7);
        ranTime = Util_1.randFloatNum(1, localXiaZhuLimiTime - 1);
        var setTimeOut8 = setTimeout(function() {
          BetManage_1.default.addBet(oningRaceNum, userId, Const_1.betLocaion.LAND, randVal[Util_1.randomRange(0, 4)]);
        }, 1e3 * ranTime);
        this.setTimeoutList.push(setTimeOut8);
        ranTime = Util_1.randFloatNum(1, localXiaZhuLimiTime - 1);
        var setTimeOut9 = setTimeout(function() {
          BetManage_1.default.addBet(oningRaceNum, userId, Const_1.betLocaion.MIDDLE, randVal[Util_1.randomRange(0, 4)]);
        }, 1e3 * ranTime);
        this.setTimeoutList.push(setTimeOut9);
        ranTime = Util_1.randFloatNum(1, localXiaZhuLimiTime - 1);
        var setTimeOut10 = setTimeout(function() {
          BetManage_1.default.addBet(oningRaceNum, userId, Const_1.betLocaion.SKY_CORNER, randVal[Util_1.randomRange(0, 4)]);
        }, 1e3 * ranTime);
        this.setTimeoutList.push(setTimeOut10);
      };
      RollControlerBase.prototype.getRoomResultList = function() {
        var raceCount = RoomManage_1.default.roomItem.playCount;
        var list = this.getRaceResultList(0);
        for (var i = 1; i < raceCount; i++) {
          var otherList = this.getRaceResultList(i);
          list = Util_1.mergeRaceResult(list, otherList);
        }
        return list;
      };
      RollControlerBase.prototype.getRaceResultList = function(raceNum) {
        var list = [];
        GameMemberManage_1.default.gameMenmberList.forEach(function(item) {
          var addItem = {
            userId: item.userId,
            score: null,
            nick: item.nick,
            icon: item.icon
          };
          addItem.score = RaceManage_1.default.getUserTheRaceScore(raceNum, item.userId);
          list.push(addItem);
        });
        return list;
      };
      RollControlerBase.prototype.emulateBet = function() {
        var _this = this;
        var oningRaceNum = RoomManage_1.default.roomItem.oningRaceNum;
        var landlordId = RaceManage_1.default.raceList[oningRaceNum].landlordId;
        var memberList = GameMemberManage_1.default.gameMenmberList;
        memberList.forEach(function(item) {
          item.userId !== landlordId && item.userId !== UserManage_1.default.userInfo.id && _this.emulateXiaZhuByUser(item.userId);
        });
      };
      RollControlerBase.prototype.enterSocketRoom = function() {
        if (RoomManage_1.default.roomItem.roomState !== Const_1.roomState.CLOSE) {
          var notice = {
            type: Const_1.NoticeType.enterRoom,
            info: {
              roomId: RoomManage_1.default.roomItem.id,
              userId: UserManage_1.default.userInfo.id
            }
          };
          loglevel_1.default.getLogger(this.name).info("\u8fdb\u5165\u623f\u95f4socket\u8bf7\u6c42", notice);
          WebSocketManage_1.default.send(JSON.stringify(notice));
        }
      };
      RollControlerBase.prototype.playButtonExec = function() {
        if (this.isEmulatorRoom) {
          RoomManage_1.default.roomItem.roomState = Const_1.roomState.PLAYING;
          RaceManage_1.default.changeRaceState(Const_1.RaceState.DEAL);
        } else {
          var startRoomGame = {
            type: Const_1.NoticeType.startRoomGame,
            info: {
              roomId: RoomManage_1.default.roomItem.id,
              userId: UserManage_1.default.userInfo.id
            }
          };
          WebSocketManage_1.default.send(JSON.stringify(startRoomGame));
        }
      };
      RollControlerBase.prototype.toStartNextEmulatorRace = function() {
        var _this = this;
        var oningRaceNum = RoomManage_1.default.roomItem.oningRaceNum;
        if (oningRaceNum + 1 === RoomManage_1.default.roomItem.playCount) {
          setTimeout(function() {
            RaceManage_1.default.setGameOverResultList(_this.getRoomResultList());
            RoomManage_1.default.roomItem.roomState = Const_1.roomState.CLOSE;
          }, 1e3);
          return;
        }
        if (oningRaceNum + 1 > RoomManage_1.default.roomItem.playCount) return;
        var nextRaceNum = oningRaceNum + 1;
        setTimeout(function() {
          RoomManage_1.default.roomItem.changeOningRaceNum(nextRaceNum);
          RaceManage_1.default.changeRaceState(Const_1.RaceState.DEAL);
        }, 2e3);
      };
      RollControlerBase.prototype.close = function() {
        EventBus_1.eventBus.clearAll();
        this.setTimeoutList.forEach(function(item) {
          clearTimeout(item);
        });
      };
      return RollControlerBase;
    }();
    exports.RollControlerBase = RollControlerBase;
    cc._RF.pop();
  }, {
    "../common/WebSocketManage": "WebSocketManage",
    "../store/Bets/BetManage": "BetManage",
    "../store/Config/ConfigManage": "ConfigManage",
    "../store/GameMember/GameMemberManage": "GameMemberManage",
    "../store/Races/RaceManage": "RaceManage",
    "../store/Room/RoomManage": "RoomManage",
    "../store/User/UserManage": "UserManage",
    "./Const": "Const",
    "./EventBus": "EventBus",
    "./Util": "Util",
    loglevel: 28
  } ],
  RollControler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eaa26cuMghPwoT0KyVhUXV+", "RollControler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventBus_1 = require("../common/EventBus");
    var Const_1 = require("../common/Const");
    var Util_1 = require("../common/Util");
    var RoomManage_1 = require("../store/Room/RoomManage");
    var UserManage_1 = require("../store/User/UserManage");
    var RoomInfo_1 = require("../mock/RoomInfo");
    var RollControlerBase_1 = require("./RollControlerBase");
    var GameMemberList_1 = require("../mock/GameMemberList");
    var GameMemberManage_1 = require("../store/GameMember/GameMemberManage");
    var RaceManage_1 = require("../store/Races/RaceManage");
    var RaceList_1 = require("../mock/RaceList");
    var ConfigManage_1 = require("../store/Config/ConfigManage");
    var loglevel_1 = require("loglevel");
    var RollControler = function(_super) {
      __extends(RollControler, _super);
      function RollControler(cc, isEmulatorRoom, roomScene) {
        return _super.call(this, cc, isEmulatorRoom, roomScene) || this;
      }
      RollControler.prototype.start = function() {
        this.initData();
        this.localNoticeEvent();
        this.raceStateChangeEvent();
      };
      RollControler.prototype.raceStateChangeEvent = function() {
        var _this = this;
        var eventIdOne = Util_1.randEventId();
        this.eventIdList.push(eventIdOne);
        EventBus_1.eventBus.on(Const_1.EventType.RACE_STATE_CHANGE_EVENT, eventIdOne, function(info) {
          var to = info.toState;
          switch (to) {
           case Const_1.RaceState.CHOICE_LANDLORD:
            _this.roomScene.adjustBeforeRaceStateChange(Const_1.RaceState.CHOICE_LANDLORD);
            _this.roomScene.showChoiceLandLordPanel();
            _this.roomScene.showLandlordSncyTimePanel();
            break;

           case Const_1.RaceState.DEAL:
            _this.execDealAction();
            break;

           case Const_1.RaceState.BET:
            _this.execBetAction();
            var deskJs = _this.cc.find("Canvas/Desk").getComponent("Desk");
            deskJs.deskPartsToOpen();
            deskJs.playingXiaZhuAnimation();
            deskJs.deskShanDong();
            break;

           case Const_1.RaceState.SHOW_DOWN:
            _this.roomScene.adjustBeforeRaceStateChange(Const_1.RaceState.SHOW_DOWN);
            _this.cc.find("Canvas").getChildByName("DealMachine").getComponent("DealMachine").checkAndAddMajong();
            EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
              type: Const_1.LocalNoticeEventType.OPEN_CARD_REQUEST_NOTICE,
              info: Const_1.TableLocationType.LANDLORD
            });
            RaceManage_1.default.setClickXiaZhuVal(0);
            break;

           case Const_1.RaceState.FINISHED:
            _this.isEmulatorRoom && _this.toStartNextEmulatorRace();
            _this.roomScene.adjustBeforeRaceStateChange(Const_1.RaceState.FINISHED);
          }
        });
        var eventIdTwo = Util_1.randEventId();
        this.eventIdList.push(eventIdTwo);
        EventBus_1.eventBus.on(Const_1.EventType.ROOM_STATE_CHANGE_EVENT, eventIdTwo, function(state) {
          switch (state) {
           case Const_1.roomState.CLOSE:
            _this.roomScene.showRoomResultPanel();
          }
        });
      };
      RollControler.prototype.localNoticeEvent = function() {
        var _this = this;
        var eventIdOne = Util_1.randEventId();
        this.eventIdList.push(eventIdOne);
        EventBus_1.eventBus.on(Const_1.EventType.LOCAL_NOTICE_EVENT, eventIdOne, function(info) {
          var localNoticeEventType = info.type;
          switch (localNoticeEventType) {
           case Const_1.LocalNoticeEventType.PLAY_BUTTON_EVENT:
            _this.playButtonExec();
            break;

           case Const_1.LocalNoticeEventType.ROLL_DICE_FINISHED_NOTICE:
            _this.roomScene.cleanRollDice();
            _this.roomScene.beginDeal();
            break;

           case Const_1.LocalNoticeEventType.DELIVERY_CARD_FINISHED_NOTICE:
            ConfigManage_1.default.isCheat() && EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
              type: Const_1.LocalNoticeEventType.OPEN_IMMEDIATELY
            });
            _this.isEmulatorRoom && RaceManage_1.default.changeRaceState(Const_1.RaceState.BET);
            break;

           case Const_1.LocalNoticeEventType.LOCAL_BE_LANDLORD_RESULT:
            _this.responseLocalBeLandlordDeal(info.info);
            break;

           case Const_1.LocalNoticeEventType.LOCAL_TIME_XIAZHU_FINISHED_NOTICE:
            _this.isEmulatorRoom && setTimeout(function() {
              RaceManage_1.default.changeRaceState(Const_1.RaceState.SHOW_DOWN);
            }, 2e3);
            break;

           case Const_1.LocalNoticeEventType.SHOW_DOWN_ANIMATION_FINISHED_NOTICE:
            if (_this.isEmulatorRoom) {
              var raceResultListOne = _this.getRaceResultList(RoomManage_1.default.roomItem.oningRaceNum);
              RaceManage_1.default.raceList[RoomManage_1.default.roomItem.oningRaceNum].setRaceResultList(raceResultListOne);
              _this.roomScene.scheduleOnce(function() {
                RaceManage_1.default.changeRaceState(Const_1.RaceState.FINISHED);
              }, ConfigManage_1.default.getShowResultTime());
            }
            _this.roomScene.destroyMiddleTopScorePanel();
            _this.roomScene.toShowRaceResultPanel();
            _this.roomScene.closeXiaZhuPanel();
            break;

           case Const_1.LocalNoticeEventType.TO_LOBBY_EVENT:
            _this.roomScene.execBackLobby();
            break;

           case Const_1.LocalNoticeEventType.BACK_MUSIC_STATE_CHANGE_NOTICE:
            info.info ? _this.roomScene.backMusic.play() : _this.roomScene.backMusic.stop();
            break;

           case Const_1.LocalNoticeEventType.TO_SHOW_START_BUTTON:
            _this.roomScene.showStartButton();
            break;

           case Const_1.LocalNoticeEventType.SOCKET_CONNECT_NOTICE:
            if (info.info) {
              loglevel_1.default.getLogger(_this.name).info("\u63a5\u5230socket\u8fde\u63a5\u901a\u77e5\uff0c\u8fdb\u5165socket\u623f\u95f4");
              _this.enterSocketRoom();
            } else {
              loglevel_1.default.getLogger(_this.name).info("\u63a5\u5230socket\u8fde\u63a5\u5931\u8d25\u901a\u77e5\uff0c\u5f39\u51fa\u63d0\u793a\u6846");
              _this.roomScene.scoketFailTip();
            }
          }
        });
        var eventIdTwo = Util_1.randEventId();
        this.eventIdList.push(eventIdTwo);
        EventBus_1.eventBus.on(Const_1.EventType.RACING_NUM_CHANGE_EVENT, eventIdTwo, function(num) {
          var roomInfo = RoomManage_1.default.roomItem;
          var count = RoomManage_1.default.roomItem.oningRaceNum;
          _this.roomScene.showPlayCountLimit.string = "\u5f53\u524d\u724c\u5c40\uff1a" + (count + 1) + "/" + roomInfo.playCount;
        });
        var eventIdFour = Util_1.randEventId();
        this.eventIdList.push(eventIdFour);
        EventBus_1.eventBus.on(Const_1.EventType.USER_SCORE_NOTICE, eventIdFour, function(list) {
          "undefined" != typeof list[UserManage_1.default.userInfo.id] ? _this.roomScene.userScoreLabel.string = list[UserManage_1.default.userInfo.id] + "" : _this.roomScene.userScoreLabel.string = "0";
        });
      };
      RollControler.prototype.initData = function() {
        if (this.isEmulatorRoom) {
          var userInfo = UserManage_1.default.userInfo;
          RoomManage_1.default.setRoomItem(RoomInfo_1.roomInfo);
          RoomManage_1.default.roomItem.creatUserId = userInfo.id;
          var memeberOwn = {
            userId: "",
            roleType: Const_1.gameMemberType.MANAGE,
            nick: "",
            icon: "",
            score: 0,
            state: Const_1.memberState.OnLine
          };
          memeberOwn["userId"] = userInfo.id;
          memeberOwn["nick"] = userInfo.nick;
          memeberOwn["icon"] = userInfo.icon;
          GameMemberList_1.GameMemberList.splice(0, 0, memeberOwn);
          var newMembers_1 = [ memeberOwn ];
          GameMemberList_1.GameMemberList.forEach(function(item) {
            newMembers_1.push(item);
          });
          GameMemberManage_1.default.setGameMemberList(newMembers_1);
          RaceManage_1.default.setRaceList(RaceList_1.RaceList);
        }
      };
      return RollControler;
    }(RollControlerBase_1.RollControlerBase);
    exports.RollControler = RollControler;
    exports.default = RollControler;
    cc._RF.pop();
  }, {
    "../common/Const": "Const",
    "../common/EventBus": "EventBus",
    "../common/Util": "Util",
    "../mock/GameMemberList": "GameMemberList",
    "../mock/RaceList": "RaceList",
    "../mock/RoomInfo": "RoomInfo",
    "../store/Config/ConfigManage": "ConfigManage",
    "../store/GameMember/GameMemberManage": "GameMemberManage",
    "../store/Races/RaceManage": "RaceManage",
    "../store/Room/RoomManage": "RoomManage",
    "../store/User/UserManage": "UserManage",
    "./RollControlerBase": "RollControlerBase",
    loglevel: 28
  } ],
  RollDice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf5272AzrNFs6naMrzqGa31", "RollDice");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.boxBody = null;
        _this.diceOne = null;
        _this.diceTwo = null;
        _this.isAdd = true;
        _this.oning = false;
        _this.isFlying = false;
        _this.firstKeepStopTime = .2;
        _this.rollKeepTime = .3;
        _this.secondKeepStopTime = .2;
        _this.diceShowTime = .3;
        _this.swingVal = 15;
        _this.yaosaiziVoice = null;
        _this.dicePicList = [];
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.initTime();
        this.scheduleOnce(function() {
          _this.oning = true;
          ConfigManage_1.default.isTxMusicOpen() && _this.yaosaiziVoice.play();
          _this.scheduleOnce(function() {
            _this.oning = false;
            _this.yaosaiziVoice.pause();
            _this.scheduleOnce(function() {
              _this.showDice();
            }, _this.secondKeepStopTime);
          }, _this.rollKeepTime);
        }, this.firstKeepStopTime);
      };
      NewClass.prototype.initTime = function() {
        var weights = Math.floor(ConfigManage_1.default.getRollDiceTime() / (this.firstKeepStopTime + this.rollKeepTime + this.secondKeepStopTime + this.diceShowTime) * 100) / 100;
        this.firstKeepStopTime = weights * this.firstKeepStopTime;
        this.rollKeepTime = weights * this.rollKeepTime;
        this.secondKeepStopTime = weights * this.secondKeepStopTime;
        this.diceShowTime = weights * this.diceShowTime;
      };
      NewClass.prototype.showDice = function() {
        var oningNum = RoomManage_1.default.roomItem.oningRaceNum;
        var points = RaceManage_1.default.raceList[oningNum].points;
        this.diceOne.spriteFrame = this.dicePicList[points.one - 1];
        this.isFlying = true;
        this.diceTwo.spriteFrame = this.dicePicList[points.two - 1];
        this.scheduleOnce(function() {
          EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
            type: Const_1.LocalNoticeEventType.ROLL_DICE_FINISHED_NOTICE
          });
        }, this.diceShowTime);
      };
      NewClass.prototype.randNum = function(n, m) {
        var c = m - n + 1;
        return Math.floor(Math.random() * c + n);
      };
      NewClass.prototype.update = function(dt) {
        this.waggle();
        this.BoxFlying();
      };
      NewClass.prototype.BoxFlying = function() {
        if (!this.isFlying) return;
        var setY = this.boxBody.node.getPosition().y;
        if (setY > 600) return;
        var setX = this.boxBody.node.getPosition().x;
        this.boxBody.node.setPosition(setX + 4, setY + 20);
        this.boxBody.node.angle > -10 && (this.boxBody.node.angle = this.boxBody.node.angle - 1);
      };
      NewClass.prototype.waggle = function() {
        this.node.angle === this.swingVal && (this.isAdd = false);
        this.node.angle === -this.swingVal && (this.isAdd = true);
        if (!this.oning && 0 === this.node.angle) return;
        this.isAdd ? this.node.angle = this.node.angle + 3 : this.node.angle = this.node.angle - 3;
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "boxBody", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "diceOne", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "diceTwo", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "yaosaiziVoice", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], NewClass.prototype, "dicePicList", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage"
  } ],
  RollLable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8fe59ZFGuxATozz7dxzGXaq", "RollLable");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RollLable = function(_super) {
      __extends(RollLable, _super);
      function RollLable() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.mask = null;
        _this.space = "      ";
        _this._strings = [];
        _this._d1 = 0;
        _this.speed = 30;
        _this._d2 = 0;
        return _this;
      }
      RollLable.prototype.start = function() {
        this.addText(this.label.string);
      };
      RollLable.prototype.addText = function(text) {
        var prefix = "";
        var suffix = this.space;
        if (0 === this._strings.length) {
          this.label.node.x = this.mask.node.width;
          this.label.string = prefix + text + suffix;
          this._d1 = this.label.node.width;
          this._d2 = this.label.node.width - this._d1;
          this._strings.push(prefix + text + suffix);
          this._rollText();
        } else if (this._d2 < this.mask.node.width) {
          while (this.label.node.x + this._d1 + this._d2 < this.mask.node.width) {
            this.label.string = this.label.string + " ";
            this._d2 = this.label.node.width - this._d1;
            prefix += " ";
          }
          this.label.string = this.label.string + text + suffix;
          this._d2 = this.label.node.width - this._d1;
          this._strings.push(prefix + text + suffix);
        } else this._strings.push(prefix + text + suffix);
      };
      RollLable.prototype._rollText = function() {
        this._strings.length > 0 && setTimeout(function() {
          try {
            var d = this.label.node.x + this._d1;
            var x = -this._d1;
            var t = d / this.speed;
            this.label.node.runAction(cc.sequence(cc.moveTo(t, cc.v2(x, this.label.node.y)), cc.callFunc(function() {
              var _this = this;
              this._strings.shift();
              if (this._strings.length > 0) {
                this.label.node.x = 0;
                this.label.string = this._strings[0];
                this._d1 = this.label.node.width;
                this._d2 = this.label.node.width - this._d1;
                for (var i = 1; i < this._strings.length; i++) {
                  if (!(this.label.node.x + this._d1 + this._d2 < this.mask.node.width + this._d1)) break;
                  this.label.string = this.label.string + this._strings[i];
                  this._d2 = this.label.node.width - this._d1;
                }
                this._rollText();
              } else setTimeout(function() {
                _this.addText(_this.label.string);
              }, 5e3);
            }.bind(this))));
          } catch (e) {}
        }.bind(this), 800);
      };
      __decorate([ property(cc.Label) ], RollLable.prototype, "label", void 0);
      __decorate([ property(cc.Mask) ], RollLable.prototype, "mask", void 0);
      RollLable = __decorate([ ccclass ], RollLable);
      return RollLable;
    }(cc.Component);
    exports.default = RollLable;
    cc._RF.pop();
  }, {} ],
  RollRoomScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1d84s4F4pHX7QfsxzeKfUm", "RollRoomScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UserManage_1 = require("../../store/User/UserManage");
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var Util_1 = require("../../common/Util");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var RollControler_1 = require("../../common/RollControler");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var WebSocketManage_1 = require("../../common/WebSocketManage");
    var GameMemberManage_1 = require("../../store/GameMember/GameMemberManage");
    var BetManage_1 = require("../../store/Bets/BetManage");
    var loglevel_1 = require("loglevel");
    var VoiceManage_1 = require("../../store/Voice/VoiceManage");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.voiceBeginButton = null;
        _this.userIcon = null;
        _this.rollDicePrefab = null;
        _this.desk = null;
        _this.exit = null;
        _this.shareButton = null;
        _this.playButtonPrefab = null;
        _this.dealMachine = null;
        _this.xiaZhu = null;
        _this.raceResultPanel = null;
        _this.roomResultPanel = null;
        _this.middleTopTimePanel = null;
        _this.middleTopScorePanel = null;
        _this.rapLandlordButton = null;
        _this.kaiShipTip = null;
        _this.SetPanel = null;
        _this.tipDialog = null;
        _this.SharePanel = null;
        _this.chatCartonPanel = null;
        _this.chatCartonButton = null;
        _this.trendPanel = null;
        _this.trendButton = null;
        _this.showRoomNum = null;
        _this.showBetLimit = null;
        _this.memberLimit = null;
        _this.playModeShow = null;
        _this.showPlayCountLimit = null;
        _this.showPlayMode = null;
        _this.zhuangIcon = null;
        _this.xianIcon = null;
        _this.userScoreLabel = null;
        _this.diamondScoreLable = null;
        _this.controller = null;
        _this.setButton = null;
        _this.backMusic = null;
        _this.qinQiangZhuangVoice = null;
        _this.woQiangVoice = null;
        _this.TurnLandlordSure = null;
        _this.TurnLandlordCancel = null;
        _this.beginVoice = null;
        _this.eventIdOne = null;
        _this.eventIdTwo = null;
        _this.name = "RollRoomScene";
        return _this;
      }
      NewClass.prototype.start = function() {
        loglevel_1.default.setLevel(loglevel_1.default.levels.TRACE);
        loglevel_1.default.info(this.name, "\u542f\u52a8");
        this.clear();
        this.initVoiceFunction();
        var enterRoomParam = this.getEnterRoomParam();
        if (enterRoomParam) {
          if (enterRoomParam.model == Const_1.EnterRoomModel.SHARE && null == enterRoomParam.userId) {
            Util_1.webCookie.setItem("roomId", enterRoomParam.roomId, .1);
            var dialogParam = {
              sureButtonShow: true,
              cancelButtonShow: false,
              content: "\u8bf7\u6ce8\u518c\u767b\u5f55\uff01",
              cancelButtonAction: null,
              sureButtonAction: Const_1.TipDialogButtonAction.OUT_TO_REGISTER
            };
            this.dialogShow(dialogParam);
            return;
          }
          this.startByEnterMode(enterRoomParam);
        } else {
          loglevel_1.default.error("url \u6ca1\u6709\u9644\u5e26\u6709\u6548\u7684\u623f\u95f4\u7528\u6237\u4fe1\u606f\uff0c\u63d0\u793a\u623f\u95f4\u4e0d\u5b58\u5728\u6216\u5df2\u5173\u95ed");
          var dialogParam = {
            sureButtonShow: true,
            cancelButtonShow: false,
            content: "\u623f\u95f4\u4e0d\u5b58\u5728\u6216\u5df2\u5173\u95ed\uff01",
            cancelButtonAction: null,
            sureButtonAction: Const_1.TipDialogButtonAction.OUT_ROOM
          };
          this.dialogShow(dialogParam);
        }
      };
      NewClass.prototype.initVoiceFunction = function() {
        try {
          var that_1 = this;
          var bigSize_1 = 160;
          that_1.voiceBeginButton.node.on(cc.Node.EventType.TOUCH_START, function() {
            VoiceManage_1.default.recStart();
            that_1.voiceBeginButton.node.width = bigSize_1;
            that_1.voiceBeginButton.node.height = bigSize_1;
            VoiceManage_1.default.voiceButtonHideTimer = window.setTimeout(function() {
              that_1.voiceBeginButton.node.width = 80;
              that_1.voiceBeginButton.node.height = 80;
              VoiceManage_1.default.voiceButtonHideTimer = null;
              VoiceManage_1.default.recStop();
              that_1.voiceBeginButton.node.active = false;
              that_1.scheduleOnce(function() {
                that_1.voiceBeginButton.node.active = true;
              }, VoiceManage_1.default.beginButtonHideTime);
            }, 1e3 * VoiceManage_1.default.timeLimit);
          });
          that_1.voiceBeginButton.node.on(cc.Node.EventType.TOUCH_END, function() {
            that_1.voiceBeginButton.node.width = 80;
            that_1.voiceBeginButton.node.height = 80;
            VoiceManage_1.default.recStop();
            if (null != VoiceManage_1.default.voiceButtonHideTimer) {
              window.clearTimeout(VoiceManage_1.default.voiceButtonHideTimer);
              VoiceManage_1.default.voiceButtonHideTimer = null;
            }
          });
        } catch (e) {}
      };
      NewClass.prototype.dialogShow = function(dialogParam) {
        var node = cc.instantiate(this.tipDialog);
        var scriptOb = node.getComponent("TipDialog");
        node.parent = this.node;
        scriptOb.tipDialogShow(dialogParam);
      };
      NewClass.prototype.getEnterRoomParam = function() {
        var enterRoomParam = RoomManage_1.default.getEnterRoomParam();
        null == enterRoomParam && Util_1.isUrlToGameRoom() && RoomManage_1.default.setEnterRoomParam({
          model: Const_1.EnterRoomModel.SHARE,
          userId: UserManage_1.default.getLoginUserId(),
          roomId: parseInt(Util_1.getUrlParam("roomId"))
        });
        return RoomManage_1.default.getEnterRoomParam();
      };
      NewClass.prototype.clear = function() {
        RoomManage_1.default.clear();
        RaceManage_1.default.clear();
        GameMemberManage_1.default.clear();
        BetManage_1.default.clear();
      };
      NewClass.prototype.startByEnterMode = function(enterRoomParam) {
        var _this = this;
        var isEmulatorRoom = enterRoomParam.model === Const_1.EnterRoomModel.EMULATOR_ROOM;
        this.controller = new RollControler_1.default(cc, isEmulatorRoom, this);
        isEmulatorRoom ? this.startEmulatorGame() : this.startWebGame(enterRoomParam);
        this.scheduleOnce(function() {
          ConfigManage_1.default.isBackMusicOpen() && _this.backMusic.play();
        }, .5);
        this.scheduleOnce(function() {
          ConfigManage_1.default.isBackMusicOpen() && !_this.backMusic.isPlaying && _this.backMusic.play();
        }, 4);
        cc.director.preloadScene("LobbyScene");
      };
      NewClass.prototype.onEnable = function() {
        this.configManageGet();
        this.addClickEvent();
        this.localNoticeEvent();
      };
      NewClass.prototype.configManageGet = function() {
        return __awaiter(this, void 0, void 0, function() {
          var info, dialogParam;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!!ConfigManage_1.default.isConfigHasLoad()) return [ 3, 2 ];
              return [ 4, ConfigManage_1.default.loadConfigInfo() ];

             case 1:
              info = _a.sent();
              if (info.result == Const_1.ResponseStatus.FAIL) {
                dialogParam = {
                  sureButtonShow: true,
                  cancelButtonShow: false,
                  content: Const_1.EnterRoomFail.net_fail_reload,
                  cancelButtonAction: null,
                  sureButtonAction: Const_1.TipDialogButtonAction.RE_IN_GAME
                };
                this.dialogShow(dialogParam);
              }
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.localNoticeEvent = function() {
        var _this = this;
        this.eventIdOne = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.LOCAL_NOTICE_EVENT, this.eventIdOne, function(info) {
          var localNoticeEventType = info.type;
          var infoItem = info.info;
          switch (localNoticeEventType) {
           case Const_1.LocalNoticeEventType.DIAMOND_COUNT_CHANGE:
            _this.diamondScoreLable.string = infoItem + "";
            break;

           case Const_1.LocalNoticeEventType.PLAY_AUDIO_LOCAL_NOTICE:
            VoiceManage_1.default.getAndPlayAudio(cc, infoItem);
            break;

           case Const_1.LocalNoticeEventType.VISIT_ENTER_ROOM:
            infoItem;
            if (infoItem.userId == UserManage_1.default.userInfo.id) {
              loglevel_1.default.info("\u901a\u77e5\u5f53\u524d\u7528\u6237\u662f\u5426\u9700\u8981\u4ee5\u6e38\u5ba2\u8eab\u4efd\u8fdb\u5165");
              var dialogParam = {
                sureButtonShow: true,
                cancelButtonShow: true,
                content: "\u623f\u95f4\u5df2\u6ee1\uff0c\u662f\u5426\u4ee5\u6e38\u5ba2\u8eab\u4efd\u8fdb\u5165\u623f\u95f4\uff1f",
                cancelButtonAction: Const_1.TipDialogButtonAction.OUT_ROOM,
                sureButtonAction: null
              };
              _this.dialogShow(dialogParam);
            }
            break;

           case Const_1.LocalNoticeEventType.TURN_LANDLORD_LOCAL_NOTICE:
            infoItem;
            _this.closeTurnLandlordPanel();
            if (infoItem.userId == UserManage_1.default.userInfo.id) {
              loglevel_1.default.info("\u8f6e\u5230\u81ea\u5df1\u5f53\u5e84,\u6253\u5f00\u8f6e\u5e84\u9762\u677f");
              _this.showTurnLandlordPanel();
            }
          }
        });
        this.eventIdTwo = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.MEMBER_DELETE_FROM_ROOM, this.eventIdTwo, function(userId) {
          if (UserManage_1.default.userInfo.id == userId) {
            loglevel_1.default.info("\u6211\u88ab\u8e22\u51fa\u623f\u95f4");
            _this.execBackLobby();
          }
        });
      };
      NewClass.prototype.playWoQiangVoice = function() {
        ConfigManage_1.default.isTxMusicOpen() && this.woQiangVoice.play();
      };
      NewClass.prototype.startWebGame = function(enterRoomParam) {
        return __awaiter(this, void 0, void 0, function() {
          var userId, roomId, reInfo, messageSet, actionSet, messageSet_1, actionSet_1, dialogParam, result;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              userId = enterRoomParam.userId;
              roomId = enterRoomParam.roomId;
              if (!(enterRoomParam.model == Const_1.EnterRoomModel.SHARE)) return [ 3, 2 ];
              return [ 4, UserManage_1.default.requestUserInfo(userId) ];

             case 1:
              reInfo = _a.sent();
              if (reInfo.result == Const_1.ResponseStatus.FAIL) {
                messageSet = Const_1.EnterRoomFail.account_error;
                actionSet = Const_1.TipDialogButtonAction.OUT_TO_LOGIN;
                if ("net_error" == reInfo.extObject.message) {
                  messageSet_1 = Const_1.EnterRoomFail.net_fail_reload;
                  actionSet_1 = Const_1.TipDialogButtonAction.RE_IN_GAME;
                } else Util_1.webCookie.removeItem("userId");
                dialogParam = {
                  sureButtonShow: true,
                  cancelButtonShow: false,
                  content: messageSet,
                  cancelButtonAction: null,
                  sureButtonAction: actionSet
                };
                this.dialogShow(dialogParam);
                return [ 2 ];
              }
              _a.label = 2;

             case 2:
              loglevel_1.default.info("\u5f00\u59cb\u767b\u5f55\u623f\u95f4", userId, roomId);
              return [ 4, RoomManage_1.default.loginRoom(userId, roomId) ];

             case 3:
              result = _a.sent();
              loglevel_1.default.info("\u767b\u5f55\u623f\u95f4\u7ed3\u679c", result);
              if (result.result === Const_1.ResponseStatus.FAIL) {
                loglevel_1.default.error("\u767b\u5f55\u623f\u95f4\u5931\u8d25");
                this.showEnterRoomFailTip(result.extObject);
                return [ 2 ];
              }
              this.controller.start();
              this.showUserPanel();
              this.initXiaZhuPanel();
              this.initMahjongPanel();
              this.initDesk();
              this.showTopLeftRaceInfo();
              this.initShowAction();
              loglevel_1.default.info("\u5f00\u59cbsocket\u8fde\u63a5");
              WebSocketManage_1.default.openWs(function() {
                loglevel_1.default.info("socket\u8fde\u63a5\u6210\u529f\uff0c\u53d1\u9001\u8fde\u63a5\u6210\u529f\u672c\u5730\u901a\u77e5");
                EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
                  type: Const_1.LocalNoticeEventType.SOCKET_CONNECT_NOTICE,
                  info: true
                });
              }, function() {
                loglevel_1.default.error("socket\u8fde\u63a5\u5931\u8d25\uff0c\u53d1\u9001\u8fde\u63a5\u5931\u8d25\u672c\u5730\u901a\u77e5");
                EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
                  type: Const_1.LocalNoticeEventType.SOCKET_CONNECT_NOTICE,
                  info: false
                });
              });
              RoomManage_1.default.roomItem.roomState == Const_1.roomState.PLAYING && UserManage_1.default.updateUserDiamond();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.initShowAction = function() {
        return __awaiter(this, void 0, void 0, function() {
          var roomResult, list;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(RoomManage_1.default.roomItem.roomState == Const_1.roomState.CLOSE)) return [ 3, 2 ];
              return [ 4, RoomManage_1.default.getRoomResult(RoomManage_1.default.roomItem.id, RoomManage_1.default.roomItem.playCount - 1) ];

             case 1:
              roomResult = _a.sent();
              list = roomResult.extObject.data;
              RaceManage_1.default.setGameOverResultList(list);
              RoomManage_1.default.roomItem.roomState = Const_1.roomState.CLOSE;
              return [ 2 ];

             case 2:
              RoomManage_1.default.roomItem.roomState == Const_1.roomState.PLAYING && this.showRaceSncyTimePanel();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.showEnterRoomFailTip = function(info) {
        var contenShow = Const_1.EnterRoomFail[info.message];
        var node = cc.instantiate(this.tipDialog);
        var scriptOb = node.getComponent("TipDialog");
        node.parent = this.node;
        var dialogParam = {
          sureButtonShow: true,
          cancelButtonShow: false,
          content: contenShow,
          cancelButtonAction: null,
          sureButtonAction: Const_1.TipDialogButtonAction.OUT_ROOM
        };
        if ("diamond_not_enough" === info.message) {
          dialogParam.cancelButtonShow = true;
          dialogParam.content = "\u94bb\u4f59\u989d\u4e0d\u8db3\uff0c\u8bf7\u70b9\u51fb\u8d2d\u4e70\uff01";
          dialogParam.sureButtonAction = Const_1.TipDialogButtonAction.RECHARGE;
          dialogParam.cancelButtonAction = Const_1.TipDialogButtonAction.OUT_ROOM;
        }
        scriptOb.tipDialogShow(dialogParam);
      };
      NewClass.prototype.showTopLeftRaceInfo = function() {
        var roomInfo = RoomManage_1.default.roomItem;
        roomInfo.roomPay == Const_1.CreateRoomPayModel.AA ? this.showPlayMode.string = "AA\u623f\u95f4\uff1a" + roomInfo.roomFee : this.showPlayMode.string = "\u4ee3\u5f00\u623f\u95f4\uff1a" + roomInfo.roomFee;
        this.showRoomNum.string = "\u623f\u95f4\u53f7\uff1a" + roomInfo.id;
        this.showBetLimit.string = "\u4e0b\u6ce8\u4e0a\u9650\uff1a" + roomInfo.costLimit;
        this.showPlayCountLimit.string = "\u5f53\u524d\u724c\u5c40\uff1a" + (roomInfo.oningRaceNum + 1) + "/" + roomInfo.playCount;
        this.memberLimit.string = "\u73a9\u5bb6\u4e0a\u9650\uff1a" + roomInfo.memberLimit;
        this.playModeShow.string = "\u9009\u5e84\u6a21\u5f0f\uff1a" + (roomInfo.playMode == Const_1.playMode.TURN ? "\u8f6e\u6d41" : "\u62a2\u5e84");
      };
      NewClass.prototype.startEmulatorGame = function() {
        this.controller.start();
        this.showUserPanel();
        this.initXiaZhuPanel();
        this.initMahjongPanel();
        this.initDesk();
        this.showTopLeftRaceInfo();
        this.showStartButton();
        var landlordId = RaceManage_1.default.raceList[0].landlordId;
        this.scheduleOnce(function() {
          RaceManage_1.default.changeRaceLandlord(landlordId, 8, 0);
        }, 1);
      };
      NewClass.prototype.initDesk = function() {
        var node = cc.instantiate(this.desk);
        node.parent = this.node;
        node.active = true;
      };
      NewClass.prototype.addClickEvent = function() {
        var _this = this;
        this.exit.node.on(cc.Node.EventType.TOUCH_END, function() {
          var dialogParam = {
            sureButtonShow: true,
            cancelButtonShow: true,
            content: Const_1.WordMessage.back_to_lobby,
            cancelButtonAction: null,
            sureButtonAction: Const_1.TipDialogButtonAction.OUT_TO_LOBBY
          };
          _this.dialogShow(dialogParam);
        });
        this.shareButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.showSharePanel();
        });
        this.setButton.node.on(cc.Node.EventType.TOUCH_START, function() {
          var node = cc.instantiate(_this.SetPanel);
          node.parent = _this.node;
          node.setPosition(0, 0);
          node.active = true;
        });
        this.chatCartonButton.node.on(cc.Node.EventType.TOUCH_START, function() {
          var node = cc.instantiate(_this.chatCartonPanel);
          node.parent = _this.node;
          node.setPosition(0, 0);
          node.active = true;
        });
        this.trendButton.node.on(cc.Node.EventType.TOUCH_START, function() {
          var node = cc.instantiate(_this.trendPanel);
          node.parent = _this.node;
          node.setPosition(0, 0);
          node.active = true;
        });
        this.TurnLandlordSure.node.on(cc.Node.EventType.TOUCH_START, function() {
          loglevel_1.default.info("\u8f6e\u5e84\u786e\u8ba4\u88ab\u70b9\u51fb");
          loglevel_1.default.info("\u5f53\u524d\u7528\u6237\u5728\u8f6e\u5e84\u4e2d\u786e\u8ba4\u5f53\u5730\u4e3b");
          var notice = {
            type: Const_1.NoticeType.sureBeLandlordInTurn,
            info: {
              roomId: RoomManage_1.default.roomItem.id,
              userId: UserManage_1.default.userInfo.id,
              raceNum: RoomManage_1.default.roomItem.oningRaceNum
            }
          };
          loglevel_1.default.info("\u53d1\u51fasocket\u901a\u77e5\uff0c\u786e\u8ba4\u5728\u8f6e\u5e84\u4e2d\u5f53\u5730\u4e3b");
          WebSocketManage_1.default.send(JSON.stringify(notice));
          _this.closeTurnLandlordPanel();
        });
        this.TurnLandlordCancel.node.on(cc.Node.EventType.TOUCH_START, function() {
          loglevel_1.default.info("\u8f6e\u5e84\u653e\u5f03\u88ab\u70b9\u51fb\u88ab\u70b9\u51fb");
          _this.closeTurnLandlordPanel();
        });
      };
      NewClass.prototype.scoketFailTip = function() {
        var node = cc.instantiate(this.tipDialog);
        var scriptOb = node.getComponent("TipDialog");
        node.parent = this.node;
        var dialogParam = {
          sureButtonShow: true,
          cancelButtonShow: true,
          content: "\u623f\u95f4\u8fde\u63a5\u5931\u8d25\uff0c\u662f\u5426\u91cd\u65b0\u8fde\u63a5\uff1f",
          cancelButtonAction: Const_1.TipDialogButtonAction.OUT_ROOM,
          sureButtonAction: Const_1.TipDialogButtonAction.SOCKET_CONNECT
        };
        scriptOb.tipDialogShow(dialogParam);
      };
      NewClass.prototype.execBackLobby = function() {
        if (this.controller) {
          this.controller.close();
          this.controller = null;
        }
        cc.director.loadScene("LobbyScene");
        this.destroy();
      };
      NewClass.prototype.showSharePanel = function() {
        if (null !== this.node.getChildByName("SharePanel")) return;
        var node = cc.instantiate(this.SharePanel);
        node.parent = this.node;
        node.active = true;
      };
      NewClass.prototype.showRoomResultPanel = function() {
        this.adjustBeforeRaceStateChange(Const_1.RaceState.FINISHED);
        var node = cc.instantiate(this.roomResultPanel);
        node.parent = cc.find("Canvas/Desk");
        node.setPosition(0, -70);
        node.active = true;
      };
      NewClass.prototype.adjustBeforeRaceStateChange = function(stateVal) {
        try {
          this.closeChoiceLandLordPanel();
          if (stateVal != Const_1.RaceState.SHOW_DOWN) {
            cc.find("Canvas/Desk").getComponent("Desk").deskPartsToClean();
            cc.find("Canvas/Desk").getComponent("Desk").cleanMahjongResulNodes();
          }
          this.destroyRaceResultPanel();
          this.closeStartButton();
          this.cleanRollDice();
          stateVal != Const_1.RaceState.BET && stateVal != Const_1.RaceState.SHOW_DOWN && cc.find("Canvas/DealMachine").getComponent("DealMachine").cleanMajong();
          if (stateVal != Const_1.RaceState.SHOW_DOWN) {
            this.destroyChild("MiddleTopScorePanel");
            this.node.getChildByName("XiaZhu").getComponent("XiaZhu").destroyDeskChip();
          }
          this.destroyTimePanel();
        } catch (e) {}
      };
      NewClass.prototype.destroyChildNodeByName = function(nameString) {
        var node = this.node.getChildByName(nameString);
        if (node) {
          node.active = false;
          node.destroy();
        }
      };
      NewClass.prototype.destroyTimePanel = function() {
        var node = cc.find("Canvas/Desk").getChildByName("MiddleTopTimePanel");
        null != node && node.destroy();
      };
      NewClass.prototype.showRaceSncyTimePanel = function() {
        var node = cc.instantiate(this.middleTopTimePanel);
        node.name = "MiddleTopTimePanel";
        node.parent = cc.find("Canvas/Desk");
        node.setPosition(-215, 218);
        node.getComponent("MiddleTopTimePanel").waitRaceSync();
      };
      NewClass.prototype.showLandlordSncyTimePanel = function() {
        var node = cc.instantiate(this.middleTopTimePanel);
        node.name = "MiddleTopTimePanel";
        node.parent = cc.find("Canvas/Desk");
        node.setPosition(-215, 218);
        node.getComponent("MiddleTopTimePanel").waitLandlordSync();
      };
      NewClass.prototype.showMiddleTopTimePanel = function() {
        var node = cc.instantiate(this.middleTopTimePanel);
        node.name = "MiddleTopTimePanel";
        node.parent = cc.find("Canvas/Desk");
        node.setPosition(-215, 218);
        node.getComponent("MiddleTopTimePanel").betTimeShow();
      };
      NewClass.prototype.showMiddleTopScorePanel = function() {
        var node = cc.instantiate(this.middleTopScorePanel);
        node.name = "MiddleTopScorePanel";
        node.parent = this.node;
        node.setPosition(15, 258);
        node.active = true;
      };
      NewClass.prototype.destroyMiddleTopScorePanel = function() {
        var node = this.node.getChildByName("MiddleTopScorePanel");
        null != node && node.destroy();
      };
      NewClass.prototype.destroyChild = function(nameString) {
        var nodes = this.node.children;
        var i = 0;
        for (;i < nodes.length; i++) nodes[i].name === nameString && nodes[i].destroy();
      };
      NewClass.prototype.toShowRaceResultPanel = function() {
        var node = cc.instantiate(this.raceResultPanel);
        node.name = "RaceResultPanel";
        node.parent = cc.find("Canvas/Desk");
        node.active = true;
      };
      NewClass.prototype.destroyRaceResultPanel = function() {
        var nodes = cc.find("Canvas/Desk").children;
        var i = 0;
        for (;i < nodes.length; i++) "RaceResultPanel" === nodes[i].name && nodes[i].destroy();
      };
      NewClass.prototype.beginDeal = function() {
        var node = this.node.getChildByName("DealMachine");
        var scriptOb = node.getComponent("DealMachine");
        var oningNum = RoomManage_1.default.roomItem.oningRaceNum;
        var loaction = Util_1.getFaPaiLocation(RaceManage_1.default.raceList[oningNum].points);
        scriptOb.deal(loaction);
      };
      NewClass.prototype.initMahjongPanel = function() {
        var node = this.node.getChildByName("DealMachine");
        if (!node) {
          node = cc.instantiate(this.dealMachine);
          node.parent = this.node;
          node.setPosition(300, 207);
          node.active = true;
        }
      };
      NewClass.prototype.beginRollDice = function() {
        var node = cc.instantiate(this.rollDicePrefab);
        node.name = "RollDice";
        node.parent = cc.find("Canvas/Desk");
        node.setPosition(0, 0);
        node.active = true;
      };
      NewClass.prototype.cleanRollDice = function() {
        var nodes = cc.find("Canvas/Desk").children;
        var i = 0;
        for (;i < nodes.length; i++) "RollDice" === nodes[i].name && nodes[i].destroy();
      };
      NewClass.prototype.showChoiceLandLordPanel = function() {
        var node = cc.find("Canvas/Desk").getChildByName("RapLandlordButton");
        if (node) node.active = true; else {
          node = cc.instantiate(this.rapLandlordButton);
          node.parent = cc.find("Canvas/Desk");
          node.setPosition(308, -220);
          node.active = true;
        }
        ConfigManage_1.default.isTxMusicOpen() && this.qinQiangZhuangVoice.play();
      };
      NewClass.prototype.closeChoiceLandLordPanel = function() {
        cc.find("Canvas/Desk").getChildByName("RapLandlordButton") && cc.find("Canvas/Desk").getChildByName("RapLandlordButton").destroy();
      };
      NewClass.prototype.showUserPanel = function() {
        var _this = this;
        var userInfo = UserManage_1.default.userInfo;
        this.userScoreLabel.string = RaceManage_1.default.getUserScore(userInfo.id) + "";
        this.diamondScoreLable.string = userInfo.diamond + "";
        cc.loader.load({
          url: UserManage_1.default.getUserIconUrl(),
          type: "png"
        }, function(err, img) {
          var myIcon = new cc.SpriteFrame(img);
          _this.userIcon.spriteFrame = myIcon;
        });
      };
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.initXiaZhuPanel = function() {
        var node = cc.instantiate(this.xiaZhu);
        node.parent = this.node;
        node.getChildByName("Layout").active = false;
        node.active = true;
        loglevel_1.default.info("\u521d\u59cb\u5316\u4e0b\u6ce8\u529f\u80fd");
      };
      NewClass.prototype.showXiaZhuPanel = function() {
        if (!this.controller.isEmulatorRoom && UserManage_1.default.getUserInfoInRoom().roleType == Const_1.gameMemberType.VISITOR) {
          loglevel_1.default.info("\u4e0d\u662f\u6a21\u62df\u623f\u95f4\u5e76\u4e14\u5f53\u524d\u7528\u6237\u662f\u6e38\u5ba2\uff0c\u4e0d\u63d0\u4f9b\u4e0b\u6ce8\u9762\u677f");
          return;
        }
        var landlordId = RaceManage_1.default.raceList[RoomManage_1.default.roomItem.oningRaceNum].landlordId;
        if (UserManage_1.default.userInfo.id !== landlordId) {
          var node = this.node.getChildByName("XiaZhu");
          node.setPosition(250, -260);
          node.getChildByName("Layout").active = true;
          loglevel_1.default.info("\u663e\u793a\u4e0b\u6ce8\u9762\u677f");
        }
      };
      NewClass.prototype.closeXiaZhuPanel = function() {
        var node = this.node.getChildByName("XiaZhu");
        node.getChildByName("Layout").active = false;
      };
      NewClass.prototype.showStartButton = function() {
        this.closeStartButton();
        var node = cc.instantiate(this.playButtonPrefab);
        node.name = "PlayButton";
        node.parent = this.node;
        node.setPosition(-124.514, -268.949);
        node.active = true;
      };
      NewClass.prototype.closeStartButton = function() {
        var ob = this.node.getChildByName("PlayButton");
        ob && ob.destroy();
      };
      NewClass.prototype.kickoutButtonClick = function(userId, nick) {
        var dialogParam = {
          sureButtonShow: true,
          cancelButtonShow: true,
          content: "\u786e\u5b9a\u8e22\u51fa\u73a9\u5bb6" + nick + "?",
          cancelButtonAction: null,
          sureButtonAction: Const_1.TipDialogButtonAction.KICKOUT_MEMBER,
          otherInfo: {
            userId: userId,
            nick: nick
          }
        };
        this.dialogShow(dialogParam);
      };
      NewClass.prototype.onDisable = function() {
        EventBus_1.eventBus.off(Const_1.EventType.LOCAL_NOTICE_EVENT, this.eventIdOne);
        EventBus_1.eventBus.off(Const_1.EventType.MEMBER_DELETE_FROM_ROOM, this.eventIdTwo);
        try {
          var enterRoomParam = RoomManage_1.default.getEnterRoomParam();
          enterRoomParam.model !== Const_1.EnterRoomModel.EMULATOR_ROOM && WebSocketManage_1.default.closeWs();
        } catch (e) {}
      };
      NewClass.prototype.showTurnLandlordPanel = function() {
        loglevel_1.default.info("\u6253\u5f00\u8f6e\u5e84\u9762\u677f");
        var ob = this.node.getChildByName("TurnLandlordButtons");
        ob && (ob.active = true);
      };
      NewClass.prototype.closeTurnLandlordPanel = function() {
        loglevel_1.default.info("\u5173\u95ed\u8f6e\u5e84\u9762\u677f");
        var ob = this.node.getChildByName("TurnLandlordButtons");
        ob && (ob.active = false);
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "voiceBeginButton", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "userIcon", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "rollDicePrefab", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "desk", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "exit", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "shareButton", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "playButtonPrefab", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "dealMachine", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "xiaZhu", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "raceResultPanel", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "roomResultPanel", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "middleTopTimePanel", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "middleTopScorePanel", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "rapLandlordButton", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "kaiShipTip", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "SetPanel", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "tipDialog", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "SharePanel", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "chatCartonPanel", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "chatCartonButton", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "trendPanel", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "trendButton", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "showRoomNum", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "showBetLimit", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "memberLimit", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "playModeShow", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "showPlayCountLimit", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "showPlayMode", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "zhuangIcon", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "xianIcon", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "userScoreLabel", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "diamondScoreLable", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "setButton", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "backMusic", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "qinQiangZhuangVoice", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "woQiangVoice", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "TurnLandlordSure", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "TurnLandlordCancel", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "beginVoice", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/RollControler": "RollControler",
    "../../common/Util": "Util",
    "../../common/WebSocketManage": "WebSocketManage",
    "../../store/Bets/BetManage": "BetManage",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/GameMember/GameMemberManage": "GameMemberManage",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage",
    "../../store/Voice/VoiceManage": "VoiceManage",
    loglevel: 28
  } ],
  RoomGameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a861cwTXCJP87MQV3FEY/AO", "RoomGameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  RoomInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bbf7cdlg09Dz7pgShy0k/1P", "RoomInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../common/Const");
    exports.roomInfo = {
      id: 888,
      creatUserId: "6666660",
      memberLimit: 10,
      playCount: 4,
      playMode: Const_1.playMode.TURN,
      roomFee: 10,
      roomPay: Const_1.CreateRoomPayModel.AA,
      costLimit: 400,
      roomState: Const_1.roomState.OPEN,
      oningRaceNum: 0
    };
    cc._RF.pop();
  }, {
    "../common/Const": "Const"
  } ],
  RoomItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30a00qt+qFFRJ++7FmXH/Q2", "RoomItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var EventBus_1 = require("../../common/EventBus");
    var RoomItem = function() {
      function RoomItem(val) {
        this.id = null;
        this.creatUserId = null;
        this.memberLimit = null;
        this.playCount = null;
        this.playMode = null;
        this.costLimit = null;
        this.roomFee = null;
        this.roomPay = null;
        this._roomState = null;
        this._oningRaceNum = null;
        this.id = val.id;
        this.creatUserId = val.creatUserId;
        this.memberLimit = val.memberLimit;
        this.playCount = val.playCount;
        this.playMode = val.playMode;
        this.roomFee = val.roomFee;
        this.roomPay = val.roomPay;
        this.costLimit = val.costLimit;
        this._roomState = val.roomState;
        this._oningRaceNum = val.oningRaceNum;
      }
      Object.defineProperty(RoomItem.prototype, "oningRaceNum", {
        get: function() {
          return this._oningRaceNum;
        },
        enumerable: true,
        configurable: true
      });
      RoomItem.prototype.changeOningRaceNum = function(val) {
        this._oningRaceNum = val;
        EventBus_1.eventBus.emit(Const_1.EventType.RACING_NUM_CHANGE_EVENT, val);
      };
      Object.defineProperty(RoomItem.prototype, "roomState", {
        get: function() {
          return this._roomState;
        },
        set: function(val) {
          if (null != this._roomState) {
            this._roomState = val;
            EventBus_1.eventBus.emit(Const_1.EventType.ROOM_STATE_CHANGE_EVENT, val);
          } else this._roomState = val;
        },
        enumerable: true,
        configurable: true
      });
      return RoomItem;
    }();
    exports.default = RoomItem;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus"
  } ],
  RoomManage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7923Ufj9hKVZ6aSBMkiJR0", "RoomManage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config_1 = require("../../common/Config");
    var RoomItem_1 = require("./RoomItem");
    var Const_1 = require("../../common/Const");
    var Http_1 = require("../../common/Http");
    var RaceManage_1 = require("../Races/RaceManage");
    var GameMemberManage_1 = require("../GameMember/GameMemberManage");
    var BetManage_1 = require("../Bets/BetManage");
    var RoomManage = function() {
      function RoomManage() {
        this.roomItem = null;
        this.enterRoomParam = null;
      }
      RoomManage.prototype.requestRoomInfo = function() {
        var _this = this;
        return new Promise(function(resolve) {
          resolve({
            result: Const_1.PromiseResult.SUCCESS,
            extObject: _this.roomItem
          });
        });
      };
      RoomManage.prototype.clear = function() {
        this.roomItem = null;
      };
      RoomManage.prototype.getEnterRoomParam = function() {
        return this.enterRoomParam;
      };
      RoomManage.prototype.setEnterRoomParam = function(info) {
        this.enterRoomParam = info;
      };
      RoomManage.prototype.setRoomItem = function(theRoomInfo) {
        this.roomItem = new RoomItem_1.default(theRoomInfo);
      };
      RoomManage.prototype.createRoom = function(creatUserId, memberLimit, playCount, roomPay, costLimit, thePlayMode) {
        return new Promise(function(resolve) {
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.CREATE_ROOM;
          var paramString = "?creatUserId=" + creatUserId + "&memberLimit=" + memberLimit + "&playCount=" + playCount + "&roomPay=" + roomPay + "&costLimit=" + costLimit + "&playMode=" + thePlayMode;
          httpUrl += paramString;
          Http_1.default.getWithUrl(httpUrl, function(error, info) {
            if (error) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: {
                  message: "interface_fail"
                }
              });
              return;
            }
            if (info.status === Const_1.ResponseStatus.FAIL) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: info
              });
              return;
            }
            var roomInfo = info.data;
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: roomInfo
            });
          });
        });
      };
      RoomManage.prototype.loginRoom = function(userId, rommId) {
        var _this = this;
        return new Promise(function(resolve) {
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.LOGIN_IN_ROOM + "?userId=" + userId + "&roomId=" + rommId;
          Http_1.default.getWithUrl(httpUrl, function(error, info) {
            if (error) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: {
                  message: Const_1.EnterRoomFail.interface_fail
                }
              });
              return;
            }
            if (info.status === Const_1.ResponseStatus.FAIL) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: info
              });
              return;
            }
            var data = info.data;
            var roomInfo = data.room;
            var races = data.races;
            for (var i = 0; i < races.length; i++) {
              races[i].points = JSON.parse(races[i].points);
              races[i].landlordScore = JSON.parse(races[i].landlordScore);
              races[i].skyScore = JSON.parse(races[i].skyScore);
              races[i].landScore = JSON.parse(races[i].landScore);
              races[i].middleScore = JSON.parse(races[i].middleScore);
            }
            races;
            var members = data.members;
            _this.setRoomItem(roomInfo);
            RaceManage_1.default.setRaceList(races);
            RaceManage_1.default.setClickXiaZhuVal(0);
            GameMemberManage_1.default.setGameMemberList(members);
            var betRecordList = data.betRecords;
            BetManage_1.default.setBetList(betRecordList);
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: info
            });
          });
        });
      };
      RoomManage.prototype.isRoomExist = function(rommId) {
        return new Promise(function(resolve) {
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.IS_ROOM_EXIST + "?roomId=" + rommId;
          Http_1.default.getWithUrl(httpUrl, function(error, info) {
            if (error) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: {
                  message: Const_1.EnterRoomFail.interface_fail
                }
              });
              return;
            }
            if (info.status === Const_1.ResponseStatus.FAIL) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: info
              });
              return;
            }
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: info
            });
          });
        });
      };
      RoomManage.prototype.getRoomResult = function(rommId, raceNum) {
        return new Promise(function(resolve) {
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.GET_ROOM_RESULT + "?roomId=" + rommId + "&raceNum=" + raceNum;
          Http_1.default.getWithUrl(httpUrl, function(error, info) {
            if (error) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: {
                  message: Const_1.EnterRoomFail.interface_fail
                }
              });
              return;
            }
            if (info.status === Const_1.ResponseStatus.FAIL) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: info
              });
              return;
            }
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: info
            });
          });
        });
      };
      return RoomManage;
    }();
    exports.default = new RoomManage();
    cc._RF.pop();
  }, {
    "../../common/Config": "Config",
    "../../common/Const": "Const",
    "../../common/Http": "Http",
    "../Bets/BetManage": "BetManage",
    "../GameMember/GameMemberManage": "GameMemberManage",
    "../Races/RaceManage": "RaceManage",
    "./RoomItem": "RoomItem"
  } ],
  RoomResultPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec3e8bpr2pOppF+JKj3Br/3", "RoomResultPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var Const_1 = require("../../common/Const");
    var EventBus_1 = require("../../common/EventBus");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var Util_1 = require("../../common/Util");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.webViewPart = null;
        _this.leftList = null;
        _this.rightList = null;
        _this.userItem = null;
        _this.roomNum = null;
        _this.raceCount = null;
        _this.backButton = null;
        _this.leftUserList = [];
        _this.rightUserList = [];
        return _this;
      }
      NewClass.prototype.start = function() {
        this.updateShow();
        this.backButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
            type: Const_1.LocalNoticeEventType.TO_LOBBY_EVENT,
            info: null
          });
        });
      };
      NewClass.prototype.showZhanjiShare = function(resultList) {
        var contentInfo = this.getShareZhanjiMessage(resultList);
        Util_1.webCookie.setItem("zhanji", contentInfo, .01);
        this.webViewPart.url = ConfigManage_1.default.getZhanjiPageAddr();
      };
      NewClass.prototype.getShareZhanjiMessage = function(resultList) {
        var resultString = RoomManage_1.default.roomItem.id + "\u53f7\u623f\u95f4\u6bd4\u8d5b\u7ed3\u679c->";
        resultList.forEach(function(element) {
          var name = element.nick;
          var score = element.score;
          resultString = resultString + name + "\uff1a" + score + "\uff0c";
        });
        resultString = resultString + "\u8be6\u7ec6\u6218\u7ee9\u8bf7\u67e5\u770b:" + window.location.href;
        return resultString;
      };
      NewClass.prototype.updateShow = function() {
        var _this = this;
        try {
          var roomInfo = RoomManage_1.default.roomItem;
          this.roomNum.string = "\u623f\u95f4\u53f7\uff1a" + roomInfo.id;
          this.raceCount.string = "\u603b\u5c40\u6570\uff1a" + roomInfo.playCount + "\u5c40";
          var resultList = RaceManage_1.default.gameOverResultList;
          this.showZhanjiShare(resultList);
          var i_1 = 1;
          resultList.forEach(function(item) {
            i_1 <= 5 ? _this.leftUserList.push(item) : _this.rightUserList.push(item);
            i_1++;
          });
          this.leftUserList.forEach(function(item) {
            var b = cc.instantiate(_this.userItem);
            var jsOb = b.getComponent("RoomResultUserItem");
            jsOb.initData(item.userId, item.icon, item.nick, item.score);
            _this.leftList.addChild(b);
          });
          this.rightUserList.forEach(function(item) {
            var b = cc.instantiate(_this.userItem);
            var jsOb = b.getComponent("RoomResultUserItem");
            jsOb.initData(item.userId, item.icon, item.nick, item.score);
            _this.rightList.addChild(b);
          });
        } catch (error) {}
      };
      __decorate([ property(cc.WebView) ], NewClass.prototype, "webViewPart", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "leftList", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "rightList", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "userItem", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "roomNum", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "raceCount", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "backButton", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/Util": "Util",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage"
  } ],
  RoomResultUserItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a7e6NT635Bga9znO2M73I5", "RoomResultUserItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var Const_1 = require("../../common/Const");
    var UserManage_1 = require("../../store/User/UserManage");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.userName = null;
        _this.userIcon = null;
        _this.userScore = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.initData = function(id, iconUrl, userName, userScore) {
        var _this = this;
        userScore > 0 && (this.userScore.node.color = cc.Color.YELLOW);
        this.userScore.string = userScore + "";
        this.userName.string = userName;
        var enterRoomParam = RoomManage_1.default.getEnterRoomParam();
        enterRoomParam.model === Const_1.EnterRoomModel.EMULATOR_ROOM && id !== UserManage_1.default.userInfo.id ? cc.loader.loadRes(iconUrl, function(error, img) {
          var myIcon = new cc.SpriteFrame(img);
          _this.userIcon.spriteFrame = myIcon;
        }) : cc.loader.load({
          url: ConfigManage_1.default.getUserIconUrl() + iconUrl,
          type: "png"
        }, function(err, img) {
          var myIcon = new cc.SpriteFrame(img);
          _this.userIcon.spriteFrame = myIcon;
        });
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "userName", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "userIcon", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "userScore", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage"
  } ],
  SetPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e8698ybhhDar6N+ByQTF+o", "SetPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cancel = null;
        _this.bj = null;
        _this.tx = null;
        _this.closeButton = null;
        _this.bjLabel = null;
        _this.txLabel = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.cancel.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.active = false;
          _this.node.destroy();
        });
        this.txLabel.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.tx.isChecked ? _this.tx.isChecked = false : _this.tx.isChecked = true;
        });
        this.bjLabel.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.bj.isChecked ? _this.bj.isChecked = false : _this.bj.isChecked = true;
        });
        this.bj.node.on("toggle", function() {
          ConfigManage_1.default.setBackMusic(_this.bj.isChecked);
          EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
            type: Const_1.LocalNoticeEventType.BACK_MUSIC_STATE_CHANGE_NOTICE,
            info: _this.bj.isChecked
          });
        }, this);
        this.tx.node.on("toggle", function() {
          ConfigManage_1.default.setTxMusic(_this.tx.isChecked);
        }, this);
      };
      NewClass.prototype.onEnable = function() {
        ConfigManage_1.default.isBackMusicOpen() ? this.bj.isChecked = true : this.bj.isChecked = false;
        ConfigManage_1.default.isTxMusicOpen() ? this.tx.isChecked = true : this.tx.isChecked = false;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "cancel", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "bj", void 0);
      __decorate([ property(cc.Toggle) ], NewClass.prototype, "tx", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "closeButton", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "bjLabel", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "txLabel", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../store/Config/ConfigManage": "ConfigManage"
  } ],
  SharePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fbdcWWt35IMrfhdmdkVQnx", "SharePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var UserManage_1 = require("../../store/User/UserManage");
    var Util_1 = require("../../common/Util");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.webViewPart = null;
        _this.closeButton = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.closeButton.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.destroy();
        });
        try {
          var roomNum = RoomManage_1.default.roomItem.id;
          var playCount = RoomManage_1.default.roomItem.playCount;
          var costLimit = RoomManage_1.default.roomItem.costLimit;
          var memberLimit = RoomManage_1.default.roomItem.memberLimit;
          var gameUrl = ConfigManage_1.default.getGameUrl();
          var contentInfo = UserManage_1.default.userInfo.nick + "\u9080\u8bf7\u60a8\u4e00\u8d77\u73a9\uff0c\u4ee3\u5f00\u623f\u95f4\u3010" + roomNum + "\u3011,\u4eba\u6570\u4e0a\u9650" + memberLimit + "\uff0c\u5c40\u6570" + playCount + "\uff0c\u6700\u9ad8\u4e0b" + costLimit + ",\u70b9\u51fbURL\u5730\u5740\u8fdb\u5165\u6e38\u620f\uff1a" + gameUrl + "?roomId=" + roomNum;
          Util_1.webCookie.setItem("share", contentInfo, .01);
          this.webViewPart.url = ConfigManage_1.default.getSharePageAddr();
        } catch (e) {}
      };
      __decorate([ property(cc.WebView) ], NewClass.prototype, "webViewPart", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "closeButton", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Util": "Util",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/Room/RoomManage": "RoomManage",
    "../../store/User/UserManage": "UserManage"
  } ],
  Test: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8ca8Z5XI9DCabGcNT/L/cH", "Test");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.startButton = null;
        _this.stopButton = null;
        _this.but = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.but.node.on(cc.Node.EventType.TOUCH_START, function() {
          _this.but.node.width = 120;
          _this.but.node.height = 120;
        });
        this.but.node.on(cc.Node.EventType.TOUCH_END, function() {
          _this.but.node.width = 40;
          _this.but.node.height = 40;
        });
      };
      NewClass.prototype.onEnable = function() {};
      NewClass.prototype.onLoad = function() {};
      __decorate([ property(cc.Button) ], NewClass.prototype, "startButton", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "stopButton", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "but", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  TipDialog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9957fUIdRAla/KIZydTRIZ", "TipDialog");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("../../common/Const");
    var WebSocketManage_1 = require("../../common/WebSocketManage");
    var EventBus_1 = require("../../common/EventBus");
    var Config_1 = require("../../common/Config");
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.leftSureButton = null;
        _this.middleSureButton = null;
        _this.cancelButton = null;
        _this.rechargePanel = null;
        _this.sureButton = null;
        _this.middleButtonLocation = {
          x: 0,
          y: -98
        };
        _this.leftButtonLocation = {
          x: 120,
          y: -98
        };
        _this.rightButtonLocation = {
          x: 120,
          y: -98
        };
        _this.tipDialogParam = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.sureButton.on(cc.Node.EventType.TOUCH_END, function() {
          _this.execButtonAction(_this.tipDialogParam.sureButtonAction);
        });
        this.cancelButton.on(cc.Node.EventType.TOUCH_END, function() {
          _this.execButtonAction(_this.tipDialogParam.cancelButtonAction);
        });
      };
      NewClass.prototype.execButtonAction = function(action) {
        try {
          switch (action) {
           case Const_1.TipDialogButtonAction.SOCKET_CONNECT:
            WebSocketManage_1.default.openWs(function() {
              EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
                type: Const_1.LocalNoticeEventType.SOCKET_CONNECT_NOTICE,
                info: true
              });
            }, function() {
              EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
                type: Const_1.LocalNoticeEventType.SOCKET_CONNECT_NOTICE,
                info: false
              });
            });
            break;

           case Const_1.TipDialogButtonAction.OUT_ROOM:
            cc.director.loadScene("LobbyScene");
            break;

           case Const_1.TipDialogButtonAction.OUT_TO_REGISTER:
            window.location.replace(Config_1.config.registerPageAddress);
            break;

           case Const_1.TipDialogButtonAction.OUT_APP:
            try {
              if (-1 != navigator.userAgent.indexOf("Firefox") || -1 != navigator.userAgent.indexOf("Chrome")) {
                window.location.href = "about:blank";
                window.close();
              } else {
                window.opener = null;
                window.open("", "_self");
                window.close();
              }
            } catch (e) {
              window.location.replace(Config_1.config.loginPageAddress);
            }
            break;

           case Const_1.TipDialogButtonAction.OUT_TO_LOGIN:
            window.location.replace(Config_1.config.loginPageAddress);
            break;

           case Const_1.TipDialogButtonAction.RE_IN_GAME:
            window.location.reload();
            break;

           case Const_1.TipDialogButtonAction.OUT_TO_LOBBY:
            EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
              type: Const_1.LocalNoticeEventType.TO_LOBBY_EVENT,
              info: false
            });
            break;

           case Const_1.TipDialogButtonAction.RECHARGE:
            var node = cc.instantiate(this.rechargePanel);
            node.parent = this.node.parent;
            break;

           case Const_1.TipDialogButtonAction.KICKOUT_MEMBER:
            var userId = this.tipDialogParam.otherInfo.userId;
            if (RoomManage_1.default.roomItem.roomState == Const_1.roomState.OPEN) {
              var notice = {
                type: Const_1.NoticeType.kickOutMemberFromRoom,
                info: {
                  roomId: RoomManage_1.default.roomItem.id,
                  kickUserId: userId
                }
              };
              WebSocketManage_1.default.send(JSON.stringify(notice));
            }
          }
          this.node.active = false;
          this.node.destroy();
        } catch (error) {}
      };
      NewClass.prototype.tipDialogShow = function(info) {
        this.tipDialogParam = info;
        if (info.sureButtonShow && info.cancelButtonShow) {
          this.sureButton = this.leftSureButton;
          this.sureButton.active = true;
          this.cancelButton.active = true;
        } else if (info.sureButtonShow) {
          this.sureButton = this.middleSureButton;
          this.sureButton.active = true;
        }
        this.content.string = info.content;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "leftSureButton", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "middleSureButton", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "cancelButton", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "rechargePanel", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Config": "Config",
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/WebSocketManage": "WebSocketManage",
    "../../store/Room/RoomManage": "RoomManage"
  } ],
  TrendItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f6bc/A6DNJUJq5QfPkv1pf", "TrendItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.winSpriteFrame = null;
        _this.failSpriteFrame = null;
        _this.skySprite = null;
        _this.middleSprite = null;
        _this.landSprite = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.setShow = function(skyWin, middleWin, landWin) {
        this.skySprite.spriteFrame = skyWin ? this.winSpriteFrame : this.failSpriteFrame;
        this.middleSprite.spriteFrame = middleWin ? this.winSpriteFrame : this.failSpriteFrame;
        this.landSprite.spriteFrame = landWin ? this.winSpriteFrame : this.failSpriteFrame;
      };
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "winSpriteFrame", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "failSpriteFrame", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "skySprite", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "middleSprite", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "landSprite", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  TrendMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f17eeBPnC1JSLI39Kr3WEgy", "TrendMap");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RoomManage_1 = require("../../store/Room/RoomManage");
    var RaceManage_1 = require("../../store/Races/RaceManage");
    var Const_1 = require("../../common/Const");
    var EventBus_1 = require("../../common/EventBus");
    var Util_1 = require("../../common/Util");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.raceItemPrefab = null;
        _this.listNodeOb = null;
        _this.eventId = null;
        _this.switchButton = null;
        _this.content = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.eventId = Util_1.randEventId();
        this.switchButton.on(cc.Node.EventType.TOUCH_END, function() {
          _this.node.parent.getChildByName("ShowTrendButton").active = true;
          _this.node.destroy();
        });
        this.show();
      };
      NewClass.prototype.getRaceResult = function(raceNum) {
        var race = RaceManage_1.default.raceList[raceNum];
        var skyWin = race.getLocationResult(Const_1.betLocaion.SKY) === Const_1.CompareDxRe.BIG;
        var middleWin = race.getLocationResult(Const_1.betLocaion.MIDDLE) === Const_1.CompareDxRe.BIG;
        var landWin = race.getLocationResult(Const_1.betLocaion.LAND) === Const_1.CompareDxRe.BIG;
        return [ skyWin, middleWin, landWin ];
      };
      NewClass.prototype.show = function() {
        this.content.removeAllChildren();
        var onRaceNum = -1;
        try {
          onRaceNum = null === RoomManage_1.default.roomItem.oningRaceNum ? 0 : RoomManage_1.default.roomItem.oningRaceNum;
        } catch (e) {}
        var i = 0;
        for (;i < onRaceNum; i++) {
          var result = this.getRaceResult(i);
          this.addItem(result[0], result[1], result[2]);
        }
      };
      NewClass.prototype.test = function() {
        this.addItem(true, false, false);
        this.addItem(true, false, false);
        this.addItem(true, false, false);
        this.addItem(true, false, false);
        this.addItem(true, false, false);
        this.addItem(true, false, false);
        this.addItem(true, false, false);
      };
      NewClass.prototype.addItem = function(skyWin, middleWin, landWin) {
        var itemNode = cc.instantiate(this.raceItemPrefab);
        itemNode.name = "trendItem";
        var jsOb = itemNode.getComponent("TrendItem");
        jsOb.setShow(skyWin, middleWin, landWin);
        this.listNodeOb.addChild(itemNode);
      };
      NewClass.prototype.onDisable = function() {
        EventBus_1.eventBus.off(Const_1.EventType.LOCAL_NOTICE_EVENT, this.eventId);
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "raceItemPrefab", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "listNodeOb", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "switchButton", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "content", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/Util": "Util",
    "../../store/Races/RaceManage": "RaceManage",
    "../../store/Room/RoomManage": "RoomManage"
  } ],
  UserBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c017h7jQ1ORYoA4IYb1ZLw", "UserBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var userType;
    (function(userType) {
      userType[userType["NORMAL_USER"] = 1] = "NORMAL_USER";
      userType[userType["CHEAT_USER"] = 2] = "CHEAT_USER";
    })(userType = exports.userType || (exports.userType = {}));
    exports.emptyUserInfo = function() {
      return {
        id: "",
        nick: "",
        icon: "",
        type: userType.NORMAL_USER,
        score: 0,
        diamond: 0,
        phone: ""
      };
    };
    cc._RF.pop();
  }, {} ],
  UserInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b10a9ARHlAWIYcyz41gG66", "UserInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UserBase_1 = require("../store/User/UserBase");
    exports.userInfo = {
      id: "6666660",
      nick: "\u6211\u7231\u5403\u82f9\u679c",
      icon: "renwu/1_10",
      type: UserBase_1.userType.NORMAL_USER,
      score: 23,
      diamond: 234,
      phone: "13396080754"
    };
    cc._RF.pop();
  }, {
    "../store/User/UserBase": "UserBase"
  } ],
  UserItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cceafxXUiVNMaljUH7Hy21l", "UserItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventBus_1 = require("../../common/EventBus");
    var Const_1 = require("../../common/Const");
    var UserItem = function() {
      function UserItem(val) {
        this.id = null;
        this.icon = null;
        this.nick = null;
        this._type = null;
        this.score = null;
        this._diamond = null;
        this.phone = null;
        this.type = val.type;
        this.id = val.id;
        this.icon = val.icon;
        this.nick = val.nick;
        this.score = val.score;
        this._diamond = val.diamond;
        this.phone = val.phone;
      }
      Object.defineProperty(UserItem.prototype, "type", {
        get: function() {
          return this._type;
        },
        set: function(val) {
          this._type = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(UserItem.prototype, "diamond", {
        get: function() {
          return this._diamond;
        },
        set: function(val) {
          this._diamond = val;
          EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
            type: Const_1.LocalNoticeEventType.DIAMOND_COUNT_CHANGE,
            info: val
          });
        },
        enumerable: true,
        configurable: true
      });
      return UserItem;
    }();
    exports.default = UserItem;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus"
  } ],
  UserManage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f7eeXhr8JInI2M6pFirxjR", "UserManage");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config_1 = require("../../common/Config");
    var Const_1 = require("../../common/Const");
    var UserItem_1 = require("./UserItem");
    var Http_1 = require("../../common/Http");
    var ConfigManage_1 = require("../Config/ConfigManage");
    var Util_1 = require("../../common/Util");
    var axios_1 = require("axios");
    var loglevel_1 = require("loglevel");
    var UserManage = function() {
      function UserManage() {
        this.userInfo = null;
        this.selectChipValue = 0;
        this.userInfoInRoom = null;
      }
      UserManage.prototype.getSelectChipValue = function() {
        return this.selectChipValue;
      };
      UserManage.prototype.getLoginUserId = function() {
        try {
          var id = Util_1.getUrlParam("userId");
          if (null != id) {
            loglevel_1.default.info("\u4eceurl\u4e2d\u53d6\u5230\u4e86\u7528\u6237ID\uff0c\u4e3b\u8981\u7528\u4e8e\u5feb\u901f\u6d4b\u8bd5\u4f7f\u7528\uff0c\u7528\u6237ID:", id);
            return id;
          }
          id = Util_1.webCookie.getItem("userId");
          loglevel_1.default.info("cookie\u83b7\u53d6\u7528\u6237id", id);
          if (null == id) {
            id = localStorage.getItem("userId");
            loglevel_1.default.info("localStorage\u83b7\u53d6\u7528\u6237id", id);
          }
          return id;
        } catch (e) {
          loglevel_1.default.error("\u672c\u5730\u67e5\u627e\u7528\u6237id\u5f02\u5e38", e);
          return null;
        }
      };
      UserManage.prototype.setUserInfoInRoom = function(item) {
        this.userInfoInRoom = item;
      };
      UserManage.prototype.getUserInfoInRoom = function() {
        return this.userInfoInRoom;
      };
      UserManage.prototype.setSelectChipValue = function(val) {
        this.selectChipValue = val;
      };
      UserManage.prototype.getUserIconUrl = function() {
        var iconUrl = ConfigManage_1.default.getUserIconUrl() + this.userInfo.icon;
        return iconUrl;
      };
      UserManage.prototype.setUserInfo = function(info) {
        this.userInfo = new UserItem_1.default(info);
      };
      UserManage.prototype.requestUserInfo = function(userId) {
        var _this = this;
        return new Promise(function(resolve) {
          if (null !== _this.userInfo) {
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: _this.userInfo
            });
            return;
          }
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.GET_USER_INFO;
          axios_1.default.get(httpUrl, {
            params: {
              id: userId
            }
          }).then(function(response) {
            var info = response.data;
            if (0 == info.status) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: info
              });
              return;
            }
            var userInfo = info.data;
            var gameConfig = info.config;
            ConfigManage_1.default.setGameUrl(info.gameUrl);
            ConfigManage_1.default.setAudioUrl(info.config.userAudioUrl);
            ConfigManage_1.default.setUserIconUrl(gameConfig.userIconUrl);
            ConfigManage_1.default.setRapLandlordTime(gameConfig.rapLandlordTime);
            _this.userInfo = new UserItem_1.default(userInfo);
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: _this.userInfo
            });
          }).catch(function(e) {
            resolve({
              result: Const_1.ResponseStatus.FAIL,
              extObject: {
                status: 0,
                message: "net_error",
                data: ""
              }
            });
          });
        });
      };
      UserManage.prototype.updateUserDiamond = function() {
        var _this = this;
        return new Promise(function(resolve) {
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.GET_USER_DIAMOND + "?userId=" + _this.userInfo.id;
          Http_1.default.getWithUrl(httpUrl, function(error, info) {
            error || info.status == Const_1.ResponseStatus.FAIL || (_this.userInfo.diamond = info.data);
          });
        });
      };
      UserManage.prototype.costDiamondInRoom = function(roomId, userId) {
        return new Promise(function(resolve) {
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.COST_DIAMOND + "?userId=" + userId + "&roomId=" + roomId;
          Http_1.default.getWithUrl(httpUrl, function(error, info) {
            if (error) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: {
                  message: "interface_fail"
                }
              });
              return;
            }
            if (info.status === Const_1.ResponseStatus.FAIL) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: info
              });
              return;
            }
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: info.data
            });
          });
        });
      };
      UserManage.prototype.rechargeDiamond = function(userId, diamondCount) {
        return new Promise(function(resolve) {
          var httpUrl = Config_1.config.serverAddress + Const_1.InterfaceUrl.RECHARGE_DIAMOND + "?userId=" + userId + "&diamondCount=" + diamondCount;
          Http_1.default.getWithUrl(httpUrl, function(error, info) {
            if (error) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: {
                  message: "interface_fail"
                }
              });
              return;
            }
            if (info.status === Const_1.ResponseStatus.FAIL) {
              resolve({
                result: Const_1.ResponseStatus.FAIL,
                extObject: info
              });
              return;
            }
            resolve({
              result: Const_1.ResponseStatus.SUCCESS,
              extObject: info.data
            });
          });
        });
      };
      UserManage.prototype.costDiamond = function(roomId, userId) {
        return __awaiter(this, void 0, void 0, function() {
          var result;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.costDiamondInRoom(roomId, userId) ];

             case 1:
              result = _a.sent();
              if (result.result === Const_1.ResponseStatus.FAIL) return [ 2 ];
              this.userInfo.diamond = result.extObject;
              return [ 2 ];
            }
          });
        });
      };
      return UserManage;
    }();
    exports.default = new UserManage();
    cc._RF.pop();
  }, {
    "../../common/Config": "Config",
    "../../common/Const": "Const",
    "../../common/Http": "Http",
    "../../common/Util": "Util",
    "../Config/ConfigManage": "ConfigManage",
    "./UserItem": "UserItem",
    axios: 2,
    loglevel: 28
  } ],
  Util: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5f8dDLbF1L6bf5gepq9Spd", "Util");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("./Const");
    function randEventId() {
      return "roll_" + new Date().getTime() + "_" + Math.ceil(10 * Math.random());
    }
    exports.randEventId = randEventId;
    function getMajhongValueType(majongInfo) {
      return 2 == majongInfo.one && 8 == majongInfo.two || 8 == majongInfo.one && 2 == majongInfo.two ? Const_1.MajhongValueType.ER_BA_GANG : majongInfo.one === majongInfo.two ? Const_1.MajhongValueType.DUI_ZI : majongInfo.two + majongInfo.one == 10 ? Const_1.MajhongValueType.BI_SHI : Const_1.MajhongValueType.DIAN;
    }
    exports.getMajhongValueType = getMajhongValueType;
    function randFloatNum(n, m) {
      var c = m - n + 1;
      return Math.random() * c + n;
    }
    exports.randFloatNum = randFloatNum;
    function getFaPaiLocation(diceCountInfo) {
      var val = diceCountInfo.one + diceCountInfo.two;
      return 2 === val || 6 === val || 10 === val ? Const_1.TableLocationType.SKY : 3 === val || 7 === val || 11 === val ? Const_1.TableLocationType.MIDDLE : 4 === val || 8 === val || 12 === val ? Const_1.TableLocationType.LAND : Const_1.TableLocationType.LANDLORD;
    }
    exports.getFaPaiLocation = getFaPaiLocation;
    function getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (null != r) return unescape(r[2]);
      return null;
    }
    exports.getUrlParam = getUrlParam;
    function isUrlToGameRoom() {
      var roomId = getUrlParam("roomId");
      if (null !== roomId) return true;
      return false;
    }
    exports.isUrlToGameRoom = isUrlToGameRoom;
    function getDistanceBetweenTwoPoints(x1, y1, x2, y2) {
      var a = x1 - x2;
      var b = y1 - y2;
      var result = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      return result;
    }
    exports.getDistanceBetweenTwoPoints = getDistanceBetweenTwoPoints;
    function getItemFromResultDataByUserId(userId, list) {
      for (var i = 0; i < list.length; i++) if (list[i].userId === userId) return list[i];
      return null;
    }
    exports.getItemFromResultDataByUserId = getItemFromResultDataByUserId;
    function getMemeberResultScoreList(list, memberList) {
      var newList = [];
      memberList.forEach(function(item) {
        var userId = item.userId;
        var result = getItemFromResultDataByUserId(userId, list);
        null === result ? newList.push({
          userId: userId,
          score: 0,
          nick: item.nick,
          icon: item.icon
        }) : newList.push(result);
      });
      return newList;
    }
    exports.getMemeberResultScoreList = getMemeberResultScoreList;
    function touchMoveEvent(event) {
      var dx = Math.abs(event.currentTouch._point.x - event.currentTouch._startPoint.x);
      var dy = Math.abs(event.currentTouch._point.y - event.currentTouch._startPoint.y);
      var dis = parseFloat(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)).toFixed(2));
      if (dis < 30) return false;
      return true;
    }
    exports.touchMoveEvent = touchMoveEvent;
    function mergeRaceResult(listOne, listTwo) {
      for (var i = 0; i < listOne.length; i++) {
        var item = listOne[i];
        var itemExist = false;
        for (var j = 0; j < listTwo.length; j++) if (item.userId === listTwo[j].userId) {
          itemExist = true;
          listTwo[j].score += item.score;
        }
        itemExist || listTwo.push(item);
      }
      return listTwo;
    }
    exports.mergeRaceResult = mergeRaceResult;
    function randomRange(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    exports.randomRange = randomRange;
    exports.webCookie = {
      setItem: function(name, value, expireHour) {
        var Days = 15552e6;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
      },
      getItem: function(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
          var value = unescape(arr[2]);
          this.setItem(name, value);
          return value;
        }
        return null;
      },
      removeItem: function(name, path) {
        void 0 === path && (path = "/");
        var exp = new Date();
        var exp_time = exp.getTime();
        var new_time = exp_time - 1;
        exp.setTime(new_time);
        var exp_string = exp.toGMTString();
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
          var value = unescape(arr[2]);
          document.cookie = name + "=" + value + ";expires=" + exp_string + "; path=" + path;
        }
      }
    };
    cc._RF.pop();
  }, {
    "./Const": "Const"
  } ],
  VoiceManage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dadc3s0sE1Go7ZACFxQqsOr", "VoiceManage");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var axios_1 = require("axios");
    var Const_1 = require("../../common/Const");
    var RoomManage_1 = require("../Room/RoomManage");
    var WebSocketManage_1 = require("../../common/WebSocketManage");
    var UserManage_1 = require("../User/UserManage");
    var ConfigManage_1 = require("../Config/ConfigManage");
    var Config_1 = require("../../common/Config");
    var EventBus_1 = require("../../common/EventBus");
    var VoiceManage = function() {
      function VoiceManage() {
        this.rec = null;
        this.timeLimit = 6;
        this.beginButtonHideTime = 5;
        this.scheduleOnceLimit = null;
        this.voiceButtonHideTimer = null;
      }
      VoiceManage.prototype.recOpen = function(success) {
        this.rec = window.Recorder({
          type: "mp3",
          sampleRate: 16e3,
          bitRate: 16,
          onProcess: function(buffers, powerLevel, bufferDuration, bufferSampleRate, newBufferIdx, asyncEnd) {}
        });
        this.rec.open(function() {
          success && success();
        }, function(msg, isUserNotAllow) {
          EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
            type: Const_1.LocalNoticeEventType.PLAY_AUDIO_NOT_SUPPORT,
            info: ""
          });
        });
      };
      VoiceManage.prototype.recStart = function() {
        var _this = this;
        this.recOpen(function() {
          _this.rec.start();
        });
      };
      VoiceManage.prototype.uploadAndNoticeAudio = function(base64data, duration) {
        return __awaiter(this, void 0, void 0, function() {
          var info, notice;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.upLoadVice(base64data) ];

             case 1:
              info = _a.sent();
              if (info.result == Const_1.ResponseStatus.SUCCESS) {
                notice = {
                  type: Const_1.NoticeType.voicePlay,
                  info: {
                    roomId: RoomManage_1.default.roomItem.id,
                    userId: UserManage_1.default.userInfo.id,
                    voiceName: info.extObject,
                    duration: duration
                  }
                };
                WebSocketManage_1.default.send(JSON.stringify(notice));
              }
              return [ 2 ];
            }
          });
        });
      };
      VoiceManage.prototype.getAndPlayAudio = function(ccOb, voiceItem) {
        ccOb.loader.load(ConfigManage_1.default.getAudioUrl() + voiceItem.voiceName, function(err, clip) {
          var audioID = ccOb.audioEngine.play(clip, false, 1);
        });
      };
      VoiceManage.prototype.recStop = function() {
        var that = this;
        if (null == this.rec) return;
        this.rec.stop(function(blob, duration) {
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function() {
            var base64data = reader.result;
            that.uploadAndNoticeAudio(base64data, duration);
          };
          that.rec.close();
          that.rec = null;
        }, function(msg) {
          that.rec.close();
          that.rec = null;
        });
      };
      VoiceManage.prototype.upLoadVice = function(file) {
        return new Promise(function(resolve) {
          var Ajax = axios_1.default.create({
            baseURL: Config_1.config.serverAddress,
            timeout: 4e3,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          Ajax({
            method: "POST",
            url: Const_1.InterfaceUrl.AUDIO_UPLOAD,
            data: {
              file: file
            }
          }).then(function(res) {
            if (res.data.status == Const_1.ResponseStatus.SUCCESS) {
              var mp3Url = res.data.data;
              resolve({
                result: Const_1.ResponseStatus.SUCCESS,
                extObject: mp3Url
              });
            } else resolve({
              result: Const_1.ResponseStatus.FAIL,
              extObject: ""
            });
          }).catch(function(e) {
            resolve({
              result: Const_1.ResponseStatus.FAIL,
              extObject: ""
            });
          });
        });
      };
      return VoiceManage;
    }();
    exports.default = new VoiceManage();
    cc._RF.pop();
  }, {
    "../../common/Config": "Config",
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/WebSocketManage": "WebSocketManage",
    "../Config/ConfigManage": "ConfigManage",
    "../Room/RoomManage": "RoomManage",
    "../User/UserManage": "UserManage",
    axios: 2
  } ],
  WebSocketManage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66da4Sl4oZGKZ+ZASFnJ+E7", "WebSocketManage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Const_1 = require("./Const");
    var RoomManage_1 = require("../store/Room/RoomManage");
    var UserManage_1 = require("../store/User/UserManage");
    var GameMemberManage_1 = require("../store/GameMember/GameMemberManage");
    var EventBus_1 = require("./EventBus");
    var RaceManage_1 = require("../store/Races/RaceManage");
    var BetManage_1 = require("../store/Bets/BetManage");
    var Config_1 = require("./Config");
    var ConfigManage_1 = require("../store/Config/ConfigManage");
    var loglevel_1 = require("loglevel");
    var WebSocketManage = function() {
      function WebSocketManage() {
        this.ws = null;
      }
      WebSocketManage.prototype.closeWs = function() {
        null !== this.ws && this.ws.close();
        this.ws = null;
      };
      WebSocketManage.prototype.openWs = function(onOpen, onClose) {
        var _this = this;
        if (null === this.ws) {
          try {
            this.ws = new WebSocket(Config_1.config.websocketAddress);
            this.ws.onmessage = this.onmessage;
            this.ws.onopen = function() {
              onOpen();
            };
            this.ws.onclose = function() {
              onClose();
              _this.ws = null;
            };
          } catch (e) {}
          return true;
        }
        return false;
      };
      WebSocketManage.prototype.send = function(message) {
        null !== this.ws && this.ws.send(message);
      };
      WebSocketManage.prototype.onmessage = function(e) {
        var info = JSON.parse(e.data);
        var type = info.type;
        var message = info.info;
        var roomResult = null;
        loglevel_1.default.info("\u63a5\u6536\u5230socket\u901a\u77e5", info);
        switch (type) {
         case "memberInSocketRoom":
          message;
          loglevel_1.default.info("\u63a5\u6536\u5230\u6709\u6210\u5458\u8fdb\u5165\u623f\u95f4\u901a\u77e5", message);
          message.userId == UserManage_1.default.userInfo.id && UserManage_1.default.setUserInfoInRoom(message);
          if (message.roleType == Const_1.gameMemberType.LIMIT || message.state == Const_1.memberState.KickOut) {
            loglevel_1.default.error("\u88ab\u9650\u5236\u8fdb\u5165\u7528\u6237\u6216\u8005\u88ab\u8e22\u51fa\u7528\u6237\uff0c\u4e0d\u80fd\u8fdb\u5165");
            return;
          }
          if (message.roleType == Const_1.gameMemberType.VISITOR) {
            loglevel_1.default.info("\u6e38\u5ba2\u8fdb\u5165,\u53d1\u51fa\u672c\u5730\u901a\u77e5");
            if (message.userId != UserManage_1.default.userInfo.id) {
              loglevel_1.default.info("\u6e38\u5ba2\u8fdb\u5165,\u5176\u4ed6\u4eba\u4e0d\u505a\u4efb\u4f55\u5904\u7406");
              return;
            }
            EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
              type: Const_1.LocalNoticeEventType.VISIT_ENTER_ROOM,
              info: message
            });
          } else {
            loglevel_1.default.info("\u73a9\u5bb6\u8fdb\u5165");
            GameMemberManage_1.default.addGameMember(message);
            if (message.userId == UserManage_1.default.userInfo.id && RoomManage_1.default.roomItem.creatUserId == message.userId && RoomManage_1.default.roomItem.roomState == Const_1.roomState.OPEN) {
              loglevel_1.default.info("\u623f\u4e3b\u5728\u623f\u95f4\u8fd8\u6ca1\u5f00\u59cb\u7684\u60c5\u51b5\u4e0b\u8fdb\u5165\u623f\u95f4\uff0c\u672c\u5730\u901a\u77e5\u663e\u793a\u5f00\u59cb\u6309\u94ae");
              EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
                type: Const_1.LocalNoticeEventType.TO_SHOW_START_BUTTON,
                info: null
              });
            }
          }
          break;

         case "memberOutRoom":
          message = message.data;
          loglevel_1.default.info("\u63a5\u5230\u6210\u5458\u9000\u51fa\u623f\u95f4\u901a\u77e5", message);
          if (RoomManage_1.default.roomItem.creatUserId != message.userId && RoomManage_1.default.roomItem.roomState == Const_1.roomState.OPEN) {
            loglevel_1.default.info("\u6e38\u620f\u8fd8\u6ca1\u5f00\u59cb\uff0c\u5e76\u4e14\u9000\u51fa\u7684\u4e0d\u662f\u623f\u4e3b\uff0c\u5c06\u8be5\u7528\u6237\u7684\u4fe1\u606f\u6e05\u9664\uff0c\u7528\u6237\uff1a", message.userId);
            GameMemberManage_1.default.outGameMember(message.userId);
          } else {
            loglevel_1.default.info("\u6e38\u620f\u5df2\u7ecf\u5f00\u59cb\uff0c\u5c06\u7528\u6237\u7684\u72b6\u6001\u6539\u4e3a\u79bb\u7ebf");
            if ("undefined" != typeof GameMemberManage_1.default.gameMenmberList[message.userId]) {
              loglevel_1.default.info("\u7528\u6237\u662f\u73a9\u5bb6");
              GameMemberManage_1.default.gameMenmberList[message.userId].state = Const_1.memberState.OffLine;
            }
          }
          break;

         case "raceStateChoiceLandlord":
          message;
          loglevel_1.default.info("\u63a5\u6536\u5230\u9009\u5730\u4e3b\u901a\u77e5");
          if (0 == message.raceNum) {
            loglevel_1.default.info("\u6e38\u620f\u521a\u5f00\u59cb\uff0c\u5c06\u672c\u5730\u623f\u95f4\u72b6\u6001\u6539\u4e3a\u6e38\u620f\u4e2d");
            RoomManage_1.default.roomItem.roomState = Const_1.roomState.PLAYING;
          }
          if (UserManage_1.default.getUserInfoInRoom().roleType != Const_1.gameMemberType.PLAYER) {
            loglevel_1.default.info("\u975e\u73a9\u5bb6\uff0c\u5bf9\u9009\u5730\u4e3b\u4e0d\u54cd\u5e94");
            return;
          }
          RoomManage_1.default.roomItem.changeOningRaceNum(message.raceNum);
          loglevel_1.default.info("start_game_test:socket\u6536\u5230\u6e38\u620f\u9009\u5730\u4e3b\u901a\u77e5,\u6211\u5c06\u6bd4\u8d5b\u72b6\u6001\u8bbe\u7f6e\u4e3a\u9009\u5730\u4e3b,\u5f53\u524d\u6bd4\u8d5b\u573a\u6b21:", RoomManage_1.default.roomItem.oningRaceNum);
          RaceManage_1.default.changeRaceState(Const_1.RaceState.CHOICE_LANDLORD);
          break;

         case "raceStateDeal":
          message;
          RoomManage_1.default.roomItem.changeOningRaceNum(message.raceNum);
          RaceManage_1.default.changeRaceLandlord(message.landlordId, 1, message.raceNum);
          RaceManage_1.default.changeRaceState(Const_1.RaceState.DEAL);
          break;

         case "raceStateBet":
          message;
          RoomManage_1.default.roomItem.changeOningRaceNum(message.raceNum);
          RaceManage_1.default.changeRaceLandlord(message.landlordId, 1, message.raceNum);
          RaceManage_1.default.changeRaceState(Const_1.RaceState.BET);
          break;

         case "raceStateShowDown":
          message;
          loglevel_1.default.info("\u63a5\u6536\u5230\u6bd4\u5927\u5c0f\u901a\u77e5\uff0c\u5305\u542b\u4e86\u5f53\u524d\u573a\u6b21\u7684\u7ed3\u679c\u4fe1\u606f\uff0c\u4ee5\u53ca\u623f\u95f4\u7684\u6574\u4f53\u7ed3\u679c\u4fe1\u606f", message);
          RoomManage_1.default.roomItem.changeOningRaceNum(message.raceNum);
          RaceManage_1.default.changeRaceLandlord(message.landlordId, 1, message.raceNum);
          var raceResult = message.raceResult;
          setTimeout(function() {
            EventBus_1.eventBus.emit(Const_1.EventType.USER_SCORE_NOTICE, message.roomResult);
          }, 1e3 * (ConfigManage_1.default.getShowDownTime() + 1));
          RaceManage_1.default.raceList[message.raceNum].setRaceResultList(raceResult);
          RaceManage_1.default.changeRaceState(Const_1.RaceState.SHOW_DOWN);
          break;

         case "betNotice":
          message;
          if (message.betVal < 0) {
            var betVal = message.betVal;
            BetManage_1.default.cancelBet(message);
            if (message.userId == UserManage_1.default.userInfo.id) {
              var xiaZhuVal = RaceManage_1.default.getClickXiaZhuVal();
              RaceManage_1.default.setClickXiaZhuVal(xiaZhuVal + betVal);
            }
          } else BetManage_1.default.addBet(message.raceNum, message.userId, message.betLocation, message.betVal);
          break;

         case "allRaceFinished":
          roomResult = message.roomResult;
          RaceManage_1.default.setGameOverResultList(roomResult);
          RoomManage_1.default.roomItem.roomState = Const_1.roomState.CLOSE;
          break;

         case "chatCartonMessage":
          message;
          EventBus_1.eventBus.emit(Const_1.EventType.CARTON_MESSAGE_NOTICE, message);
          break;

         case "memberWaitForLandlord":
          var setInfo = {
            userId: message.userId,
            type: Const_1.ChatMessageType.QIANG_ZHUANG,
            message: 0
          };
          EventBus_1.eventBus.emit(Const_1.EventType.CARTON_MESSAGE_NOTICE, setInfo);
          break;

         case "checkRoomMember":
          message;
          GameMemberManage_1.default.checkRoomMember(message);
          break;

         case "audioPlayNotice":
          message;
          console.log("\u63a5\u53d7\u5230\u8bed\u97f3\u901a\u77e5");
          console.log(message);
          EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
            type: Const_1.LocalNoticeEventType.PLAY_AUDIO_LOCAL_NOTICE,
            info: message
          });
          break;

         case "turnLandlord":
          message;
          loglevel_1.default.info("\u63a5\u6536\u5230\u8f6e\u5e84\u901a\u77e5", message);
          if (0 == message.raceNum) {
            loglevel_1.default.info("\u6e38\u620f\u521a\u5f00\u59cb\uff0c\u5c06\u672c\u5730\u623f\u95f4\u72b6\u6001\u6539\u4e3a\u6e38\u620f\u4e2d");
            RoomManage_1.default.roomItem.roomState = Const_1.roomState.PLAYING;
          }
          EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
            type: Const_1.LocalNoticeEventType.TURN_LANDLORD_LOCAL_NOTICE,
            info: message
          });
          break;

         case "enterRoomRes":
          loglevel_1.default.info("\u8fdb\u5165\u63a5\u53e3\u623f\u95f4\u7ed3\u679c\u901a\u77e5");
          if (0 == message.flag) {
            loglevel_1.default.info("\u8fdb\u5165socket\u623f\u95f4\u5931\u8d25,\u9000\u51fa\u5230\u5927\u5385", message);
            EventBus_1.eventBus.emit(Const_1.EventType.LOCAL_NOTICE_EVENT, {
              type: Const_1.LocalNoticeEventType.TO_LOBBY_EVENT,
              info: false
            });
          }
        }
      };
      return WebSocketManage;
    }();
    exports.default = new WebSocketManage();
    cc._RF.pop();
  }, {
    "../store/Bets/BetManage": "BetManage",
    "../store/Config/ConfigManage": "ConfigManage",
    "../store/GameMember/GameMemberManage": "GameMemberManage",
    "../store/Races/RaceManage": "RaceManage",
    "../store/Room/RoomManage": "RoomManage",
    "../store/User/UserManage": "UserManage",
    "./Config": "Config",
    "./Const": "Const",
    "./EventBus": "EventBus",
    loglevel: 28
  } ],
  WenZiList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2111z2VydEaoEzxfpDrmfK", "WenZiList");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.wenZiList = [ {
      content: "\u641e\u8d77\u641e\u8d77\u6211\u4eec\u5355\u6311\uff01",
      voice: "a"
    }, {
      content: "\u5927\u5bb6\u4e00\u8d77\u55e8\u8d77\uff01",
      voice: "a"
    }, {
      content: "\u6d4b\u8bd51",
      voice: "a"
    }, {
      content: "\u6d4b\u8bd52",
      voice: "a"
    }, {
      content: "\u6d4b\u8bd53",
      voice: "a"
    }, {
      content: "\u6d4b\u8bd54",
      voice: "a"
    }, {
      content: "\u6d4b\u8bd55",
      voice: "a"
    }, {
      content: "\u6d4b\u8bd56",
      voice: "a"
    } ];
    cc._RF.pop();
  }, {} ],
  XiaZhu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c31567Tj2FKhZ2dwnptOZcQ", "XiaZhu");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Util_1 = require("../../common/Util");
    var Const_1 = require("../../common/Const");
    var EventBus_1 = require("../../common/EventBus");
    var UserManage_1 = require("../../store/User/UserManage");
    var ConfigManage_1 = require("../../store/Config/ConfigManage");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chip_1 = null;
        _this.chip_2 = null;
        _this.chip_3 = null;
        _this.chip_4 = null;
        _this.pushEventId = "";
        _this.deskChipList = [];
        _this.focus_1 = null;
        _this.focus_2 = null;
        _this.focus_3 = null;
        _this.focus_4 = null;
        _this.button_1 = null;
        _this.button_2 = null;
        _this.button_3 = null;
        _this.button_4 = null;
        _this.chipValueList = [];
        _this.flyTime = .35;
        _this.ownChipSize = 40;
        _this.otherMemberChipSize = 25;
        _this.chipBetVoice = null;
        _this.ownChipBetVoice = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.getUserChairPosition = function(userId) {
        var deskOb = cc.find("Canvas/Desk").getComponent("Desk");
        return deskOb.chairManage.getChairPositionByUserId(userId);
      };
      NewClass.prototype.closeAllFocus = function() {
        this.focus_1.node.active = false;
        this.focus_2.node.active = false;
        this.focus_3.node.active = false;
        this.focus_4.node.active = false;
      };
      NewClass.prototype.flyAnimation = function(isOwn, fromLocation, toLocaiton, val, chipInfo) {
        var _this = this;
        var node = this.createChip(isOwn, val, chipInfo);
        node.setPosition(fromLocation.x, fromLocation.y);
        node.active = true;
        var action = cc.moveTo(this.flyTime, toLocaiton.x, toLocaiton.y);
        var b = cc.sequence(action, cc.callFunc(function() {
          ConfigManage_1.default.isTxMusicOpen() && _this.chipBetVoice.play();
        }, this));
        isOwn && ConfigManage_1.default.isTxMusicOpen() && this.ownChipBetVoice.play();
        node.runAction(b);
      };
      NewClass.prototype.createChip = function(isOwn, val, chipInfo) {
        var chip;
        chip = val === this.chipValueList[0] ? this.chip_1 : val === this.chipValueList[1] ? this.chip_2 : val === this.chipValueList[2] ? this.chip_3 : this.chip_4;
        var node = cc.instantiate(chip);
        node.name = Util_1.randEventId();
        var label = node.getChildByName("ValLabel").getComponent(cc.Label);
        label.string = val + "";
        node.getComponent("Chip").initData(chipInfo);
        if (isOwn) {
          label.fontSize = 14;
          node.width = this.ownChipSize;
          node.height = this.ownChipSize;
        } else {
          label.fontSize = 10;
          node.width = this.otherMemberChipSize;
          node.height = this.otherMemberChipSize;
        }
        node.parent = cc.find("Canvas/Desk");
        this.deskChipList.push(node.name);
        return node;
      };
      NewClass.prototype.destroyDeskChip = function() {
        this.deskChipList.forEach(function(element) {
          var ob = cc.find("Canvas/Desk").getChildByName(element);
          ob && ob.destroy();
        });
        this.deskChipList = [];
      };
      NewClass.prototype.hideLineChip = function() {
        var a = this.node.getChildByName("Layout");
        a && (a.active = false);
      };
      NewClass.prototype.showLineChip = function(locaton) {
        var a = this.node.getChildByName("Layout");
        a && (a.active = true);
        this.node.setPosition(locaton.x, locaton.y);
      };
      NewClass.prototype.backAllChipe = function() {
        var isSuccess = false;
        this.deskChipList.forEach(function(element) {
          var ob = cc.find("Canvas/Desk").getChildByName(element);
          if (ob) {
            isSuccess = true;
            var jsOb = ob.getComponent("Chip");
            jsOb.backChip();
          }
        });
        return isSuccess;
      };
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.chipValueList = ConfigManage_1.default.getChipValList();
        this.button_1.node.getChildByName("Label").getComponent(cc.Label).string = this.chipValueList[0] + "";
        this.button_2.node.getChildByName("Label").getComponent(cc.Label).string = this.chipValueList[1] + "";
        this.button_3.node.getChildByName("Label").getComponent(cc.Label).string = this.chipValueList[2] + "";
        this.button_4.node.getChildByName("Label").getComponent(cc.Label).string = this.chipValueList[3] + "";
        this.initFocus();
        this.pushEventId = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.BET_CHIP_CHANGE_EVENT, this.pushEventId, function(betInfo) {
          _this.toXiaZhu(betInfo);
        });
        this.betCancelEventId = Util_1.randEventId();
        EventBus_1.eventBus.on(Const_1.EventType.BET_CANCE_NOTICE, this.betCancelEventId, function(info) {
          _this.deskChipList.forEach(function(element) {
            var ob = cc.find("Canvas/Desk").getChildByName(element);
            if (ob) {
              var jsOb = ob.getComponent("Chip");
              jsOb.cancelChip(info);
            }
          });
        });
        this.button_1.node.on(cc.Node.EventType.TOUCH_END, function() {
          ConfigManage_1.default.isTxMusicOpen() && _this.ownChipBetVoice.play();
          _this.closeAllFocus();
          _this.focus_1.node.active = true;
          UserManage_1.default.setSelectChipValue(_this.chipValueList[0]);
        });
        this.button_2.node.on(cc.Node.EventType.TOUCH_END, function() {
          ConfigManage_1.default.isTxMusicOpen() && _this.ownChipBetVoice.play();
          _this.closeAllFocus();
          _this.focus_2.node.active = true;
          UserManage_1.default.setSelectChipValue(_this.chipValueList[1]);
        });
        this.button_3.node.on(cc.Node.EventType.TOUCH_END, function() {
          ConfigManage_1.default.isTxMusicOpen() && _this.ownChipBetVoice.play();
          _this.closeAllFocus();
          _this.focus_3.node.active = true;
          UserManage_1.default.setSelectChipValue(_this.chipValueList[2]);
        });
        this.button_4.node.on(cc.Node.EventType.TOUCH_END, function() {
          ConfigManage_1.default.isTxMusicOpen() && _this.ownChipBetVoice.play();
          _this.closeAllFocus();
          _this.focus_4.node.active = true;
          UserManage_1.default.setSelectChipValue(_this.chipValueList[3]);
        });
      };
      NewClass.prototype.toXiaZhu = function(betInfo) {
        var _this = this;
        var betValue = betInfo.toValue - betInfo.fromVal;
        var userId = betInfo.userId;
        var betLocationType = betInfo.betLocation;
        var points = Const_1.chipPoint[betLocationType];
        var fromLocation;
        fromLocation = this.getUserChairPosition(userId);
        if (null === fromLocation) return;
        var isOwn = false;
        userId === UserManage_1.default.userInfo.id && (isOwn = true);
        var chipList = this.splitChipList(betValue);
        chipList.forEach(function(val) {
          isOwn && (fromLocation = _this.getChipLocationByChipValue(val));
          var chipInfo = {
            userId: userId,
            chipVal: val,
            betLocation: betLocationType
          };
          _this.flyAnimation(isOwn, fromLocation, _this.getXiaZhuLocation(points), val, chipInfo);
        });
      };
      NewClass.prototype.splitChipList = function(theVal) {
        var theList = [];
        for (var i = this.chipValueList.length - 1; i >= 0; i--) {
          var targeVal = this.chipValueList[i];
          while (theVal >= targeVal) {
            theList.push(targeVal);
            theVal -= targeVal;
          }
          if (theVal <= 0) break;
        }
        return theList;
      };
      NewClass.prototype.getChipLocationByChipValue = function(val) {
        var location = {
          x: 127,
          y: -245
        };
        switch (val) {
         case this.chipValueList[0]:
          location = {
            x: 127,
            y: -245
          };
          break;

         case this.chipValueList[1]:
          location = {
            x: 223,
            y: -245
          };
          break;

         case this.chipValueList[2]:
          location = {
            x: 318,
            y: -245
          };
          break;

         case this.chipValueList[3]:
          location = {
            x: 414,
            y: -245
          };
        }
        return location;
      };
      NewClass.prototype.initFocus = function() {
        this.closeAllFocus();
        var selectedValue = UserManage_1.default.getSelectChipValue();
        switch (selectedValue) {
         case this.chipValueList[0]:
          this.focus_1.node.active = true;
          break;

         case this.chipValueList[1]:
          this.focus_2.node.active = true;
          break;

         case this.chipValueList[2]:
          this.focus_3.node.active = true;
          break;

         case this.chipValueList[3]:
          this.focus_4.node.active = true;
        }
      };
      NewClass.prototype.getXiaZhuLocation = function(points) {
        var leftPoints = points.left;
        var rightPoints = points.right;
        var randx = Util_1.randFloatNum(leftPoints.x, rightPoints.x);
        var randy = rightPoints.y + Util_1.randFloatNum(-10, 10);
        var newPoint = {
          x: randx,
          y: randy
        };
        return newPoint;
      };
      NewClass.prototype.onDisable = function() {
        EventBus_1.eventBus.off(Const_1.EventType.BET_CHIP_CHANGE_EVENT, this.pushEventId);
        EventBus_1.eventBus.off(Const_1.EventType.BET_CANCE_NOTICE, this.betCancelEventId);
      };
      NewClass.prototype.update = function(dt) {
        this.focus_1.node.angle = this.focus_1.node.angle + .2;
        this.focus_2.node.angle = this.focus_2.node.angle + .2;
        this.focus_3.node.angle = this.focus_3.node.angle + .2;
        this.focus_4.node.angle = this.focus_4.node.angle + .2;
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "chip_1", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "chip_2", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "chip_3", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "chip_4", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "focus_1", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "focus_2", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "focus_3", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "focus_4", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "button_1", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "button_2", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "button_3", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "button_4", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "chipBetVoice", void 0);
      __decorate([ property(cc.AudioSource) ], NewClass.prototype, "ownChipBetVoice", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../common/Const": "Const",
    "../../common/EventBus": "EventBus",
    "../../common/Util": "Util",
    "../../store/Config/ConfigManage": "ConfigManage",
    "../../store/User/UserManage": "UserManage"
  } ]
}, {}, [ "Config", "Const", "EventBus", "FaceList", "Http", "Log", "RollControler", "RollControlerBase", "RoomGameConfig", "Util", "WebSocketManage", "WenZiList", "CancelChipAn", "ChatCarton", "CreateRoomPanel", "CustomerPanel", "DealMachine", "DealMachineBase", "ChairItem", "ChairManage", "Desk", "DeskPart", "EntryBox", "LineTrendMap", "MahjongResultLabel", "MiddleResultAmimation", "MiddleTopScorePanel", "MiddleTopTimePanel", "MjDouble", "PlayButton", "PlayRule", "PlayUserIcon", "RaceMajResult", "RaceResultPanel", "RapLandlordButton", "RechargePanel", "RollDice", "RollLable", "RoomResultPanel", "RoomResultUserItem", "SetPanel", "SharePanel", "TipDialog", "TrendItem", "TrendMap", "Chip", "XiaZhu", "BetList", "GameMemberList", "RaceList", "RoomInfo", "UserInfo", "LobbyScene", "RollRoomScene", "Test", "BetItem", "BetManage", "ConfigManage", "GameMemberItem", "GameMemberManage", "RaceItem", "RaceManage", "RoomItem", "RoomManage", "UserBase", "UserItem", "UserManage", "VoiceManage" ]);
//# sourceMappingURL=project.dev.js.map
