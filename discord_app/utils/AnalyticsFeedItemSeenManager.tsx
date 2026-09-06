// discord_app/utils/AnalyticsFeedItemSeenManager.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import DispatcherDefault from "../Dispatcher.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

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
        arr = items.push(tmp2);
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
      return new Set(
        keys.filter((item) => {
          let isVisibleResult;
          if (trackedFeedItems.trackedFeedItems[item] != null) {
            isVisibleResult = obj.isVisible();
          }
          return isVisibleResult;
        }),
      );
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
          obj.handleFeedItemUnseen({
            id: obj._id,
            feedItemId,
            timestampMillis: Date.now(),
            type: "ANALYTICS_FEED_ITEM_UNSEEN",
          });
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
          obj.handleFeedItemSeen({
            id: obj._id,
            feedItemId,
            timestampMillis: Date.now(),
            type: "ANALYTICS_FEED_ITEM_SEEN",
          });
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
          const timerId = setTimeout(
            asyncGeneratorStep(async (arg0, value) => {
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj = { value, done: true };
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
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c1 = 1;
                      c2 = 1;
                      const obj1 = { value: tmp4(), done: false };
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_128_0();
                    c2 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp9) {
                  c2 = tmp;
                  throw tmp9;
                }
              }
            }),
            100,
          );
        });
      }
    }
    closure_0 = asyncGeneratorStep(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp2;
              closure_129_0 = closure_0;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: closure_0(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0();
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c3 = tmp;
          throw tmp11;
        }
      }
    });
    resolved = new Promise(function () {
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
export { ForceFlushType };
export { TrackedFeedItem };
export { AnalyticsFeedItemSeenManager };
