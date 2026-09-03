// === Module 7655: maybeMarkSeen ===

// Module 7655 (maybeMarkSeen)
import _modDef38 from "module_38" /* 38 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;

let obj = { IMMEDIATE: 0, [0]: "IMMEDIATE", IMMEDIATE_WITH_COOLDOWN: 1, [1]: "IMMEDIATE_WITH_COOLDOWN", IMMEDIATE_WITH_DELAY: 2, [2]: "IMMEDIATE_WITH_DELAY" };
class TrackedFeedItem {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj.seenIntervals = [];
    return obj;
  }
}
const prototype = TrackedFeedItem.prototype;
prototype["maybeMarkSeen"] = function maybeMarkSeen(arg0) {
  let flag = null == tmp;
  if (!flag) {
    flag = null != tmp.endTimeMillis;
  }
  if (flag) {
    const seenIntervals = this.seenIntervals;
    obj = { startTimeMillis: null };
    obj[0] = arg0;
    seenIntervals.push(obj);
    flag = true;
  }
  return flag;
};
prototype["maybeMarkUnseen"] = function maybeMarkUnseen(endTimeMillis) {
  let flag = null != tmp && null == tmp.endTimeMillis;
  if (flag) {
    tmp.endTimeMillis = endTimeMillis;
    flag = true;
  }
  return flag;
};
prototype["isVisible"] = function isVisible() {
  let startTimeMillis;
  if (this.seenIntervals[this.seenIntervals.length - 1] != null) {
    startTimeMillis = tmp.startTimeMillis;
  }
  let tmp3 = null != startTimeMillis;
  if (tmp3) {
    let endTimeMillis;
    if (tmp != null) {
      endTimeMillis = tmp.endTimeMillis;
    }
    tmp3 = null == endTimeMillis;
  }
  return tmp3;
};
prototype["computeSeenTimeDestructive"] = function computeSeenTimeDestructive(isForcedFlush) {
  let num = 0;
  const items = [];
  const iter = this.seenIntervals[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null == nextResult.endTimeMillis) {
      if (isForcedFlush) {
        let _Date = Date;
        let timestamp = Date.now();
        let tmp8 = num;
        let tmp9 = nextResult;
        num = num + (timestamp - tmp2.startTimeMillis);
        obj = { startTimeMillis: null };
        obj[0] = timestamp;
        let arr = items.push(obj);
      } else {
        let tmp5 = nextResult;
        arr = items.push(tmp2);
      }
    } else {
      let tmp3 = num;
      let tmp4 = nextResult;
      num = num + (tmp2.endTimeMillis - tmp2.startTimeMillis);
    }
    continue;
  }
  _modDef38(items.length < 2, "there should only be a single left over data");
  this.seenIntervals = items;
  return Math.round(num);
};
let result = require("set").fileFinishedImporting("utils/AnalyticsFeedItemSeenManager.tsx");
class AnalyticsFeedItemSeenManager {
  constructor(arg0) {
    flag = global.isPaused;
    ({ id, windowId } = global);
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.initialize = function initialize() {
      obj = obj(closure_1_1[2]);
      const subscription = obj.subscribe("ANALYTICS_FEED_ITEM_SEEN", obj.handleFeedItemSeen);
      const subscription1 = obj(closure_1_1[2]).subscribe("ANALYTICS_FEED_ITEM_UNSEEN", obj.handleFeedItemUnseen);
      const obj2 = obj(closure_1_1[2]);
      const subscription2 = obj(closure_1_1[2]).subscribe("ANALYTICS_FEED_FLUSH", obj.handleFeedItemFlush);
      const obj3 = obj(closure_1_1[2]);
      const subscription3 = obj(closure_1_1[2]).subscribe("APP_STATE_UPDATE", obj.handleAppStateUpdate);
      const obj4 = obj(closure_1_1[2]);
      const subscription4 = obj(closure_1_1[2]).subscribe("WINDOW_FOCUS", obj.handleWindowFocus);
      const onInitialize = obj.onInitialize;
      if (onInitialize != null) {
        onInitialize();
      }
    };
    obj.terminate = function terminate() {
      obj = obj(closure_1_1[2]);
      obj.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", obj.handleFeedItemSeen);
      obj(closure_1_1[2]).unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", obj.handleFeedItemUnseen);
      const obj2 = obj;
      const obj3 = obj(closure_1_1[2]);
      obj(closure_1_1[2]).unsubscribe("ANALYTICS_FEED_FLUSH", obj.handleFeedItemFlush);
      const obj4 = obj(closure_1_1[2]);
      obj(closure_1_1[2]).unsubscribe("APP_STATE_UPDATE", obj.handleAppStateUpdate);
      const obj5 = obj(closure_1_1[2]);
      obj(closure_1_1[2]).unsubscribe("WINDOW_FOCUS", obj.handleWindowFocus);
      const onTerminate = obj.onTerminate;
      if (onTerminate != null) {
        onTerminate();
      }
      obj2.maybeFlushSeenItems(closure_1_3.IMMEDIATE);
    };
    obj.handleFeedItemFlush = function handleFeedItemFlush(id) {
      if (obj._id === id.id) {
        obj.maybeFlushSeenItems(tmp);
      }
    };
    obj.handleFeedItemSeen = function handleFeedItemSeen(feedItemId) {
      feedItemId = feedItemId.feedItemId;
      if (feedItemId.id === obj._id) {
        if (obj._paused) {
          const _pausedFeedItemIds = obj._pausedFeedItemIds;
          _pausedFeedItemIds.add(feedItemId);
        } else {
          const trackedFeedItem = obj.getTrackedFeedItem(feedItemId);
          const onFeedItemSeen = obj.onFeedItemSeen;
          if (onFeedItemSeen != null) {
            onFeedItemSeen(feedItemId, trackedFeedItem.maybeMarkSeen(tmp));
          }
        }
      }
    };
    obj.handleFeedItemUnseen = function handleFeedItemUnseen(feedItemId) {
      feedItemId = feedItemId.feedItemId;
      if (feedItemId.id === obj._id) {
        if (obj._paused) {
          const _pausedFeedItemIds = obj._pausedFeedItemIds;
          _pausedFeedItemIds.delete(feedItemId);
        }
        const trackedFeedItem = obj.getTrackedFeedItem(feedItemId);
        const onFeedItemUnseen = obj.onFeedItemUnseen;
        if (onFeedItemUnseen != null) {
          onFeedItemUnseen(feedItemId, trackedFeedItem.maybeMarkUnseen(tmp));
        }
        obj.maybeFlushSeenItems();
      }
    };
    obj.getTrackedFeedItem = function getTrackedFeedItem(feedItemId) {
      if (null == obj.trackedFeedItems[feedItemId]) {
        if (typeof closure_1_4 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        obj = Object.create(closure_1_4.prototype);
        obj.seenIntervals = [];
        tmp.trackedFeedItems[feedItemId] = obj;
        const tmp2 = closure_1_4;
      }
      return obj.trackedFeedItems[feedItemId];
    };
    obj.getVisibleFeedItemIds = function getVisibleFeedItemIds() {
      const keys = Object.keys(obj.trackedFeedItems);
      return new Set(keys.filter((arg0) => {
        let isVisibleResult;
        if (trackedFeedItems.trackedFeedItems[arg0] != null) {
          isVisibleResult = obj.isVisible();
        }
        return isVisibleResult;
      }));
    };
    obj.handleAppStateUpdate = function handleAppStateUpdate(state) {
      state = state.state;
      let _isReactNavigationFocused = "active" === state;
      if (_isReactNavigationFocused) {
        _isReactNavigationFocused = obj._isReactNavigationFocused;
      }
      if (_isReactNavigationFocused) {
        obj.resume();
      }
      if ("background" === state) {
        if (obj._isReactNavigationFocused) {
          obj.pause();
        }
        obj.maybeFlushSeenItems(closure_1_3.IMMEDIATE);
      }
    };
    obj.clearPausedFeedItemIds = function clearPausedFeedItemIds() {
      obj._pausedFeedItemIds = new Set();
      obj._paused = false;
    };
    obj.pause = function pause() {
      if (!obj._paused) {
        const visibleFeedItemIds = obj.getVisibleFeedItemIds();
        const item = visibleFeedItemIds.forEach((feedItemId) => {
          closure_0.handleFeedItemUnseen({ id: closure_0._id, feedItemId, timestampMillis: Date.now(), type: "ANALYTICS_FEED_ITEM_UNSEEN" });
        });
        obj._paused = true;
        obj._pausedFeedItemIds = visibleFeedItemIds;
      }
    };
    obj.resume = function resume() {
      if (obj._paused) {
        obj._paused = false;
        const _pausedFeedItemIds = obj._pausedFeedItemIds;
        const item = _pausedFeedItemIds.forEach((feedItemId) => {
          closure_0.handleFeedItemSeen({ id: closure_0._id, feedItemId, timestampMillis: Date.now(), type: "ANALYTICS_FEED_ITEM_SEEN" });
        });
        const result = obj.clearPausedFeedItemIds();
      }
    };
    obj.handleReactNavigationFocus = function handleReactNavigationFocus(_isReactNavigationFocused) {
      obj._isReactNavigationFocused = _isReactNavigationFocused;
      if (obj._isReactNavigationFocused) {
        obj.resume();
      } else {
        obj.pause();
      }
    };
    obj.handleWindowFocus = function handleWindowFocus(windowId) {
      if (obj._windowId === windowId.windowId) {
        if (windowId.focused) {
          obj.resume();
        } else {
          obj.pause();
        }
      }
    };
    obj.trackedFeedItems = {};
    obj._id = id;
    obj._windowId = windowId;
    set = new Set();
    obj._pausedFeedItemIds = set;
    if (flag == null) {
      flag = false;
    }
    obj._paused = flag;
    obj._isReactNavigationFocused = true;
    obj._lastFlushTimeMillis = Date.now();
    return obj;
  }
}
AnalyticsFeedItemSeenManager.prototype["maybeFlushSeenItems"] = function maybeFlushSeenItems(IMMEDIATE) {
  let self = this;
  if (null == IMMEDIATE) {
    const _Date = Date;
    if (Date.now() - self._lastFlushTimeMillis < 60000) {
      return Promise.resolve();
    }
  }
  if (IMMEDIATE === obj.IMMEDIATE_WITH_COOLDOWN) {
    const _Date2 = Date;
    if (Date.now() - self._lastFlushTimeMillis < 3000) {
      return Promise.resolve();
    }
  }
  const flushSeenItemsFunction = self.createFlushSeenItemsFunction(IMMEDIATE);
  closure_0 = flushSeenItemsFunction;
  if (null == flushSeenItemsFunction) {
    let resolved = Promise.resolve();
  } else {
    const _Date3 = Date;
    self._lastFlushTimeMillis = Date.now();
    if (IMMEDIATE !== tmp2.IMMEDIATE) {
      if (IMMEDIATE !== tmp2.IMMEDIATE_WITH_COOLDOWN) {
        resolved = new Promise((arg0) => {
          closure_0 = arg0;
          const timerId = setTimeout(closure_1_2(function*() {
            if (c2 === 2) {
              c2 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    const callback = tmp4;
                    c1 = 1;
                    c2 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_1_0();
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  callback();
                  c2 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp9) {
                c2 = tmp;
                throw tmp9;
              }
            }
          }), 100);
        });
      }
    }
    closure_0 = undefined;
    closure_0 = callback((arg0) => {
      closure_0 = arg0;
      c2 = 0;
      c3 = 0;
      return (function*(arg0) {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp2;
                c2 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = callback();
                return obj1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              callback();
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp11) {
            c3 = tmp;
            throw tmp11;
          }
        }
      })();
    });
    resolved = new Promise(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    });
  }
  return resolved;
};

export const AnalyticsFeedTypes = { FORUM_CHANNEL: "forum_channel" };
export const ForceFlushType = obj;
export { TrackedFeedItem };
export { AnalyticsFeedItemSeenManager };