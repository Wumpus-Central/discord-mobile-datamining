// discord_app/utils/AnalyticsFeedItemSeenManager.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import DispatcherDefault from "../Dispatcher.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../_runtime/metro/00002__.js";

let c1, c2, c3, set;

const ForceFlushType = {
  IMMEDIATE: 0,
  [0]: "IMMEDIATE",
  IMMEDIATE_WITH_COOLDOWN: 1,
  [1]: "IMMEDIATE_WITH_COOLDOWN",
  IMMEDIATE_WITH_DELAY: 2,
  [2]: "IMMEDIATE_WITH_DELAY",
};
class TrackedFeedItem {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.seenIntervals = [];
    return obj;
  }
  maybeMarkSeen(startTimeMillis) {
    let flag = null == tmp || null != tmp.endTimeMillis;
    if (flag) {
      const seenIntervals = this.seenIntervals;
      const obj = { startTimeMillis };
      seenIntervals.push(obj);
      flag = true;
    }
    return flag;
  }
  maybeMarkUnseen(endTimeMillis) {
    let flag = null != tmp && null == tmp.endTimeMillis;
    if (flag) {
      this.seenIntervals[this.seenIntervals.length - 1].endTimeMillis = endTimeMillis;
      flag = true;
    }
    return flag;
  }
  isVisible() {
    let startTimeMillis;
    if (this.seenIntervals[this.seenIntervals.length - 1] != null) {
      startTimeMillis = tmp.startTimeMillis;
    }
    let tmp3 = null != startTimeMillis;
    if (tmp3) {
      let endTimeMillis;
      if (this.seenIntervals[this.seenIntervals.length - 1] != null) {
        endTimeMillis = tmp.endTimeMillis;
      }
      tmp3 = null == endTimeMillis;
    }
    return tmp3;
  }
  computeSeenTimeDestructive(isForcedFlush) {
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
  }
}
const prototype = TrackedFeedItem.prototype;
let result = size.fileFinishedImporting("utils/AnalyticsFeedItemSeenManager.tsx");
class AnalyticsFeedItemSeenManager {
  constructor(isPaused) {
    let id;
    let windowId;
    let flag = isPaused.isPaused;
    ({ id, windowId } = isPaused);
    let obj = Object.create(new.target.prototype);
    obj.initialize = function initialize() {
      obj = DispatcherDefault;
      const subscription = obj.subscribe("ANALYTICS_FEED_ITEM_SEEN", obj.handleFeedItemSeen);
      const obj2 = DispatcherDefault;
      const subscription1 = obj2.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", obj.handleFeedItemUnseen);
      const obj3 = DispatcherDefault;
      const subscription2 = obj3.subscribe("ANALYTICS_FEED_FLUSH", obj.handleFeedItemFlush);
      const obj4 = DispatcherDefault;
      const subscription3 = obj4.subscribe("APP_STATE_UPDATE", obj.handleAppStateUpdate);
      const obj5 = DispatcherDefault;
      const subscription4 = obj5.subscribe("WINDOW_FOCUS", obj.handleWindowFocus);
      const onInitialize = obj.onInitialize;
      if (onInitialize != null) {
        onInitialize();
      }
    };
    obj.terminate = function terminate() {
      obj = DispatcherDefault;
      obj.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", obj.handleFeedItemSeen);
      const obj3 = DispatcherDefault;
      obj3.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", obj.handleFeedItemUnseen);
      const obj4 = DispatcherDefault;
      obj4.unsubscribe("ANALYTICS_FEED_FLUSH", obj.handleFeedItemFlush);
      const obj5 = DispatcherDefault;
      obj5.unsubscribe("APP_STATE_UPDATE", obj.handleAppStateUpdate);
      const obj6 = DispatcherDefault;
      obj6.unsubscribe("WINDOW_FOCUS", obj.handleWindowFocus);
      const onTerminate = obj.onTerminate;
      const obj2 = obj;
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
      const tmp = obj;
      if (null == obj.trackedFeedItems[feedItemId]) {
        const self = this;
        if (typeof TrackedFeedItem === "function") {
          obj = Object.create(TrackedFeedItem.prototype);
          obj.seenIntervals = [];
          tmp2[feedItemId] = obj;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      return tmp.trackedFeedItems[feedItemId];
    };
    obj.getVisibleFeedItemIds = function getVisibleFeedItemIds() {
      let trackedFeedItems;
      const keys = Object.keys(obj.trackedFeedItems);
      set = new Set(
        keys.filter((item) => {
          let isVisibleResult;
          if (trackedFeedItems.trackedFeedItems[item] != null) {
            isVisibleResult = obj.isVisible();
          }
          return isVisibleResult;
        }),
      );
      return set;
    };
    obj.handleAppStateUpdate = function handleAppStateUpdate(state) {
      state = state.state;
      const _isReactNavigationFocused = "active" === state && obj._isReactNavigationFocused;
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
      new Set();
    };
    obj.pause = function pause() {
      if (!obj._paused) {
        const visibleFeedItemIds = obj.getVisibleFeedItemIds();
        const item = visibleFeedItemIds.forEach((feedItemId) => {
          obj = { id: closure_1_0._id, feedItemId, timestampMillis: Date.now(), type: "ANALYTICS_FEED_ITEM_UNSEEN" };
          closure_1_0.handleFeedItemUnseen(obj);
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
          obj = { id: closure_1_0._id, feedItemId, timestampMillis: Date.now(), type: "ANALYTICS_FEED_ITEM_SEEN" };
          closure_1_0.handleFeedItemSeen(obj);
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
  maybeFlushSeenItems(IMMEDIATE) {
    let obj;
    let resolved;
    const self = this;
    if (null == IMMEDIATE) {
      const tmp = globalThis;
      const _Date = Date;
      if (Date.now() - self._lastFlushTimeMillis < 60000) {
        return Promise.resolve();
      }
    }
    if (IMMEDIATE === obj.IMMEDIATE_WITH_COOLDOWN) {
      const tmp3 = globalThis;
      const _Date2 = Date;
      if (Date.now() - self._lastFlushTimeMillis < 3000) {
        return Promise.resolve();
      }
    }
    const flushSeenItemsFunction = self.createFlushSeenItemsFunction(IMMEDIATE);
    if (null == flushSeenItemsFunction) {
      resolved = Promise.resolve();
    } else {
      const tmp8 = globalThis;
      const _Date3 = Date;
      self._lastFlushTimeMillis = Date.now();
      if (IMMEDIATE !== obj.IMMEDIATE) {
        if (IMMEDIATE !== obj.IMMEDIATE_WITH_COOLDOWN) {
          const self2 = this;
          const self3 = this;
          resolved = new Promise((arg0) => {
            let closure_0 = arg0;
            const timerId = setTimeout(
              _asyncToGenerator(async () => {
                if (c2 === 2) {
                  c2 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
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
                        c1 = 1;
                        c2 = 1;
                        const obj4 = { value: tmp3(), done: false };
                        return obj4;
                      }
                    } else if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj = { value, done: true };
                      return obj;
                    } else {
                      closure_128_0();
                      c2 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp8) {
                    c2 = 3;
                    throw tmp8;
                  }
                }
              }),
              100,
            );
          });
        }
      }
      let closure_0 = _asyncToGenerator(async (arg0) => {
        closure_0 = arg0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp;
                c2 = 1;
                c3 = 1;
                const obj4 = { value: closure_0(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_0();
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp10) {
            c3 = 3;
            throw tmp10;
          }
        }
      });
      const self4 = this;
      const self5 = this;
      resolved = new Promise(function () {
        return closure_0(...arguments);
      });
    }
    return resolved;
  }
}
const prototype2 = AnalyticsFeedItemSeenManager.prototype;

export const AnalyticsFeedTypes = { FORUM_CHANNEL: "forum_channel" };
export { ForceFlushType };
export { TrackedFeedItem };
export { AnalyticsFeedItemSeenManager };
