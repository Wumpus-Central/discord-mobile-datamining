// === Module 9730: AnalyticsFeedItemSeenManager ===

// Module 9730 (AnalyticsFeedItemSeenManager)
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const ForceFlushType = { IMMEDIATE: 0, [0]: "IMMEDIATE", IMMEDIATE_WITH_COOLDOWN: 1, [1]: "IMMEDIATE_WITH_COOLDOWN", IMMEDIATE_WITH_DELAY: 2, [2]: "IMMEDIATE_WITH_DELAY" };
class TrackedFeedItem {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj.seenIntervals = [];
    return obj;
  }
}
const prototype = TrackedFeedItem.prototype;
prototype["maybeMarkSeen"] = function maybeMarkSeen(startTimeMillis) {
  let flag = null == tmp;
  if (!flag) {
    flag = null != tmp.endTimeMillis;
  }
  if (flag) {
    const seenIntervals = this.seenIntervals;
    const obj = { startTimeMillis };
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
        num = num + (timestamp - tmp2.startTimeMillis);
        let obj = { startTimeMillis: timestamp };
        let arr = items.push(obj);
      } else {
        let arr3 = items.push(tmp2);
      }
    } else {
      num = num + (tmp2.endTimeMillis - tmp2.startTimeMillis);
    }
    continue;
  }
  _modDef38(items.length < 2, "there should only be a single left over data");
  this.seenIntervals = items;
  return Math.round(num);
};
const size = fn(2);
let result = size.fileFinishedImporting("utils/AnalyticsFeedItemSeenManager.tsx");
class AnalyticsFeedItemSeenManager {
  constructor(arg0) {
    flag = global.isPaused;
    ({ id, windowId } = global);
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.initialize = function initialize() {
      obj = DispatcherDefault;
      const subscription = obj.subscribe("ANALYTICS_FEED_ITEM_SEEN", obj.handleFeedItemSeen);
      const subscription1 = DispatcherDefault.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", obj.handleFeedItemUnseen);
      const subscription2 = DispatcherDefault.subscribe("ANALYTICS_FEED_FLUSH", obj.handleFeedItemFlush);
      const subscription3 = DispatcherDefault.subscribe("APP_STATE_UPDATE", obj.handleAppStateUpdate);
      const subscription4 = DispatcherDefault.subscribe("WINDOW_FOCUS", obj.handleWindowFocus);
      const onInitialize = obj.onInitialize;
      if (onInitialize != null) {
        onInitialize();
      }
    };
    obj.terminate = function terminate() {
      obj = DispatcherDefault;
      obj.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", obj.handleFeedItemSeen);
      DispatcherDefault.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", obj.handleFeedItemUnseen);
      const obj2 = obj;
      DispatcherDefault.unsubscribe("ANALYTICS_FEED_FLUSH", obj.handleFeedItemFlush);
      DispatcherDefault.unsubscribe("APP_STATE_UPDATE", obj.handleAppStateUpdate);
      DispatcherDefault.unsubscribe("WINDOW_FOCUS", obj.handleWindowFocus);
      const onTerminate = obj.onTerminate;
      if (onTerminate != null) {
        onTerminate();
      }
      obj2.maybeFlushSeenItems(obj.IMMEDIATE);
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
        if (typeof TrackedFeedItem === "function") {
          obj = Object.create(TrackedFeedItem.prototype);
          obj.seenIntervals = [];
          tmp2[feedItemId] = obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return obj.trackedFeedItems[feedItemId];
    };
    obj.getVisibleFeedItemIds = function getVisibleFeedItemIds() {
      const keys = Object.keys(obj.trackedFeedItems);
      return new Set(keys.filter((item) => {
        let isVisibleResult;
        if (trackedFeedItems.trackedFeedItems[item] != null) {
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
        obj.maybeFlushSeenItems(obj.IMMEDIATE);
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
          obj.handleFeedItemUnseen({ id: obj._id, feedItemId, timestampMillis: Date.now(), type: "ANALYTICS_FEED_ITEM_UNSEEN" });
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
          obj.handleFeedItemSeen({ id: obj._id, feedItemId, timestampMillis: Date.now(), type: "ANALYTICS_FEED_ITEM_SEEN" });
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
  closure_0 = IMMEDIATE;
  const self = this;
  return (async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            if (null != tmp2) {
              if (tmp2 !== constants.IMMEDIATE_WITH_COOLDOWN) {
                const flushSeenItemsFunction = self.createFlushSeenItemsFunction(tmp2);
                closure_128_0 = flushSeenItemsFunction;
                if (null != flushSeenItemsFunction) {
                  const _Date3 = Date;
                  self._lastFlushTimeMillis = Date.now();
                  if (tmp2 !== constants.IMMEDIATE) {
                    if (tmp2 !== constants.IMMEDIATE_WITH_COOLDOWN) {
                      c1 = 2;
                      c2 = 1;
                      const obj4 = { value: tmp2(c2[3]).sleep(100), done: false };
                      return obj4;
                    }
                  }
                  c1 = 1;
                  c2 = 1;
                  const obj5 = { value: flushSeenItemsFunction(), done: false };
                  return obj5;
                }
              } else {
                const _Date2 = Date;
              }
            } else {
              const _Date = Date;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c1 = 3;
            c2 = 1;
            const obj9 = { value: closure_128_0(), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp17) {
        c2 = tmp;
        throw tmp17;
      }
    }
  })();
};

export const AnalyticsFeedTypes = { FORUM_CHANNEL: "forum_channel" };
export { ForceFlushType };
export { TrackedFeedItem };
export { AnalyticsFeedItemSeenManager };