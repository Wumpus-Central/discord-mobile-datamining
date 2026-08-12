// discord_app/modules/icymi/ICYMISessionStore.tsx
import getHash from "getHash";
import initialize from "initialize";
import getUserAgnosticState from "getUserAgnosticState";
import fetchFingerprint from "fetchFingerprint";
import filterStaffGuild from "filterStaffGuild";
import { Store } from "initialize";
import { v1 } from "../../../_runtime/00514_v1.js";
import { DEFAULT_UX_VARIATION } from "ICYMIAnalytics.tsx";

const require = arg1;
let c7 = 300000;
let c8 = null;
let closure_9 = [];
let c10 = 0;
let map = new Map();
class ICYMISession {
  constructor() {
    items = global;
    if (global === undefined) {
      items = [];
    }
    str = arg1;
    if (arg1 === undefined) {
      str = "list";
    }
    list = str;
    obj = Object.create(new.target.prototype);
    list = obj;
    obj2 = require("v1");
    obj._sessionId = obj2.v4();
    obj._startTimestamp = Date.now();
    obj._endTimestamp = null;
    obj._activeItems = [];
    obj._dwellCount = 0;
    obj._impressionCount = 0;
    map = new Map();
    obj._dwelledItemIdMap = map;
    map1 = new Map();
    obj._impressionItemIdMap = map1;
    set = new Set();
    obj._impressionItemTypes = set;
    obj._reloadCount = 0;
    obj._feedFetchCount = 0;
    obj._dwelledItemsChangedCount = 0;
    obj._interactionCount = 0;
    obj._actionCount = 0;
    obj._latestDwellStartTimeMs = 0;
    obj._timeout = setTimeout(() => obj.endSession(), c7);
    ICYMIAnalytics = require("DEFAULT_UX_VARIATION").ICYMIAnalytics;
    obj = { icymiSessionId: obj._sessionId, sessionStartTimeMs: obj._startTimestamp, previousIcymiSessionCount: c10, uxVariation: require("DEFAULT_UX_VARIATION").DEFAULT_UX_VARIATION };
    result = ICYMIAnalytics.trackFeedSessionStarted(obj);
    if (items.length > 0) {
      startItemsDwellResult = obj.startItemsDwell(items.map((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.triggerType = str;
        obj.isInitiallyVisible = true;
        return obj;
      }));
    }
    return obj;
  }
}
const prototype = ICYMISession.prototype;
Object.defineProperty(prototype, "sessionId", {
  get: function sessionId() {
    return this._sessionId;
  },
  set: undefined
});
Object.defineProperty(prototype, "startTimestamp", {
  get: function startTimestamp() {
    return this._startTimestamp;
  },
  set: undefined
});
Object.defineProperty(prototype, "endTimestamp", {
  get: function endTimestamp() {
    return this._endTimestamp;
  },
  set: undefined
});
Object.defineProperty(prototype, "dwellCount", {
  get: function dwellCount() {
    return this._dwellCount;
  },
  set: undefined
});
Object.defineProperty(prototype, "uniqueDwellCount", {
  get: function uniqueDwellCount() {
    return this._dwelledItemIdMap.size;
  },
  set: undefined
});
Object.defineProperty(prototype, "impressionCount", {
  get: function impressionCount() {
    return this._impressionCount;
  },
  set: undefined
});
Object.defineProperty(prototype, "uniqueImpressionCount", {
  get: function uniqueImpressionCount() {
    return this._impressionItemIdMap.size;
  },
  set: undefined
});
Object.defineProperty(prototype, "interactionCount", {
  get: function interactionCount() {
    return this._interactionCount;
  },
  set: undefined
});
Object.defineProperty(prototype, "reloadCount", {
  get: function reloadCount() {
    return this._reloadCount;
  },
  set: undefined
});
Object.defineProperty(prototype, "feedFetchCount", {
  get: function feedFetchCount() {
    return this._feedFetchCount;
  },
  set: undefined
});
Object.defineProperty(prototype, "dwelledItemsChangedCount", {
  get: function dwelledItemsChangedCount() {
    return this._dwelledItemsChangedCount;
  },
  set: undefined
});
Object.defineProperty(prototype, "impressionItemTypes", {
  get: function impressionItemTypes() {
    return this._impressionItemTypes;
  },
  set: undefined
});
prototype["getImpression"] = function getImpression(itemId) {
  let closure_0 = itemId;
  const _activeItems = this._activeItems;
  return _activeItems.find((itemId) => itemId.itemId === closure_0);
};
prototype["startItemsDwell"] = function startItemsDwell(arr) {
  let self = this;
  self = this;
  this._resetTimeout();
  let closure_9 = arr;
  if (arr.length === this._activeItems.length) {
    if (arr.every((itemId) => self._activeItems[arg1].itemId === itemId.itemId)) {
      return self._activeItems;
    }
  }
  self._dwelledItemsChangedCount = self._dwelledItemsChangedCount + 1;
  const items = [];
  const _activeItems = self._activeItems;
  const set = new Set(_activeItems.map((itemId) => itemId.itemId));
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let impression = self.getImpression(nextResult.itemId);
    if (null != impression) {
      let tmp8 = impression;
      arr = items.push(tmp5);
      let tmp10 = nextResult;
      let deleteResult = set.delete(tmp3.itemId);
    } else {
      let tmp6 = nextResult;
      arr = items.push(self._createImpression(tmp3));
    }
    continue;
  }
  const item = set.forEach((itemId) => self._endImpression(itemId));
  self._activeItems = items;
  return self._activeItems;
};
prototype["trackItemsLongImpression"] = function trackItemsLongImpression(items) {
  let uxVariation;
  const self = this;
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let impression = self.getImpression(nextResult.itemId);
    let result = impression;
    let tmp4 = impression;
    if (impression == null) {
      let tmp6 = nextResult;
      result = self._constructImpressionFromInput(tmp2);
    }
    let tmp7 = result;
    let sum = self._impressionCount + 1;
    self._impressionCount = sum;
    result.sessionImpressionIndex = sum;
    let _impressionItemIdMap = self._impressionItemIdMap;
    let tmp9 = nextResult;
    let _impressionItemIdMap2 = self._impressionItemIdMap;
    let num = _impressionItemIdMap2.get(tmp2.itemId);
    if (num == null) {
      num = 0;
    }
    let result1 = _impressionItemIdMap.set(tmp2.itemId, num + 1);
    let tmp11 = require;
    let tmp12 = dependencyMap;
    let ICYMIAnalytics = DEFAULT_UX_VARIATION.ICYMIAnalytics;
    let obj = { icymiSessionId: null, impressionId: null, itemId: null, itemType: null, dwellStartTimeMs: null, triggerType: null, itemOccurenceCountInSession: null, itemFeedIndex: null, itemScore: null, isInitiallyVisible: null, itemChannelType: null, itemCardHeight: null, isDwelling: null, interactionActionTypes: null, interactionCount: null, uxVariation: null, sessionImpressionIndex: null };
    obj[0] = self._sessionId;
    let tmp13 = result;
    ({ impressionId: obj[1], itemId: obj[2], itemType: obj[3], impressionStartTimestamp: obj[4], triggerType: obj[5] } = tmp7);
    let _dwelledItemIdMap = self._dwelledItemIdMap;
    let num2 = _dwelledItemIdMap.get(tmp7.itemId);
    if (num2 == null) {
      num2 = 0;
    }
    obj[6] = num2;
    let tmp14 = result;
    ({ itemFeedIndex: obj[7], itemScore: obj[8], isInitiallyVisible: obj[9], itemChannelType: obj[10] } = tmp7);
    let tmp15 = map;
    let itemCardHeight = map.get(tmp7.itemId);
    if (itemCardHeight == null) {
      let tmp17 = result;
      itemCardHeight = tmp7.itemCardHeight;
    }
    if (itemCardHeight == null) {
      itemCardHeight = null;
    }
    obj[11] = itemCardHeight;
    let tmp18 = impression;
    obj[12] = null != tmp4;
    let tmp19 = result;
    ({ interactionActionTypes: obj[13], interactionCount: obj[14], uxVariation } = tmp7);
    if (uxVariation == null) {
      uxVariation = tmp11(8966).DEFAULT_UX_VARIATION;
    }
    obj[15] = uxVariation;
    let tmp20 = result;
    obj[16] = tmp7.sessionImpressionIndex;
    let trackFeedItemDwell1sResult = ICYMIAnalytics.trackFeedItemDwell1s(obj);
    continue;
  }
};
prototype["trackItemInteraction"] = function trackItemInteraction(id, type, actionType) {
  const self = this;
  const impression = this.getImpression(id);
  const ICYMIAnalytics = DEFAULT_UX_VARIATION.ICYMIAnalytics;
  const obj = { id, type, actionType, impressionId: null, uxVariation: null, sessionInteractionIndex: null, icymiSessionId: null };
  let impressionId;
  if (impression != null) {
    impressionId = impression.impressionId;
  }
  obj[3] = impressionId;
  let uxVariation;
  if (impression != null) {
    uxVariation = impression.uxVariation;
  }
  if (uxVariation == null) {
    uxVariation = DEFAULT_UX_VARIATION.DEFAULT_UX_VARIATION;
  }
  obj[4] = uxVariation;
  const sum = self._interactionCount + 1;
  self._interactionCount = sum;
  obj[5] = sum;
  obj[6] = self._sessionId;
  ICYMIAnalytics.trackItemInteraction(obj);
  if (null != impression) {
    const prop = impression.interactionActionTypes;
    prop.push(actionType);
    impression.interactionCount = impression.interactionCount + 1;
  }
};
prototype["trackFeedItemActioned"] = function trackFeedItemActioned(itemId) {
  const self = this;
  const impression = this.getImpression(itemId.itemId);
  const ICYMIAnalytics = DEFAULT_UX_VARIATION.ICYMIAnalytics;
  const obj = { icymiSessionId: this._sessionId, uxVariation: null, sessionActionIndex: null, itemId: null, itemType: null, impressionId: null, actionParameters: null };
  let uxVariation;
  if (impression != null) {
    uxVariation = impression.uxVariation;
  }
  if (uxVariation == null) {
    uxVariation = DEFAULT_UX_VARIATION.DEFAULT_UX_VARIATION;
  }
  obj[1] = uxVariation;
  const sum = self._actionCount + 1;
  self._actionCount = sum;
  obj[2] = sum;
  ({ itemId: obj[3], itemType: obj[4] } = itemId);
  let impressionId;
  if (impression != null) {
    impressionId = impression.impressionId;
  }
  if (impressionId == null) {
    impressionId = null;
  }
  obj[5] = impressionId;
  obj[6] = itemId.actionParameters;
  const result = ICYMIAnalytics.trackFeedItemActioned(obj);
};
prototype["trackFeedFilterActioned"] = function trackFeedFilterActioned(itemId) {
  const self = this;
  let impression = null;
  if (null != itemId.itemId) {
    impression = self.getImpression(itemId.itemId);
  }
  const ICYMIAnalytics = DEFAULT_UX_VARIATION.ICYMIAnalytics;
  const obj = { icymiSessionId: self._sessionId, uxVariation: null, sessionActionIndex: null, filterParameters: null, itemId: null, itemType: null, impressionId: null };
  let uxVariation;
  if (impression != null) {
    uxVariation = impression.uxVariation;
  }
  if (uxVariation == null) {
    uxVariation = DEFAULT_UX_VARIATION.DEFAULT_UX_VARIATION;
  }
  obj[1] = uxVariation;
  const sum = self._actionCount + 1;
  self._actionCount = sum;
  obj[2] = sum;
  ({ filterParameters: obj[3], itemId: obj[4], itemType: obj[5] } = itemId);
  let impressionId;
  if (impression != null) {
    impressionId = impression.impressionId;
  }
  if (impressionId == null) {
    impressionId = null;
  }
  obj[6] = impressionId;
  const result = ICYMIAnalytics.trackFeedFilterActioned(obj);
};
prototype["trackFeedPageActioned"] = function trackFeedPageActioned(arg0) {
  const ICYMIAnalytics = DEFAULT_UX_VARIATION.ICYMIAnalytics;
  const sum = this._actionCount + 1;
  this._actionCount = sum;
  const merged = Object.assign(arg0);
  const result = ICYMIAnalytics.trackFeedPageActioned({ icymiSessionId: this._sessionId, uxVariation: DEFAULT_UX_VARIATION.DEFAULT_UX_VARIATION, sessionActionIndex: sum });
};
prototype["incrementReloadCount"] = function incrementReloadCount() {
  this._resetTimeout();
  this._reloadCount = this._reloadCount + 1;
};
prototype["incrementFeedFetchCount"] = function incrementFeedFetchCount() {
  this._feedFetchCount = this._feedFetchCount + 1;
};
prototype["endAllImpressions"] = function endAllImpressions() {
  const self = this;
  const items = [...this._activeItems];
  const item = items.forEach((itemId) => self._endImpression(itemId.itemId));
};
prototype["endSession"] = function endSession() {
  this.endAllImpressions();
  this._endTimestamp = Date.now();
  const ICYMIAnalytics = DEFAULT_UX_VARIATION.ICYMIAnalytics;
  const result = ICYMIAnalytics.trackFeedSessionCompleted({ icymiSessionId: this._sessionId, sessionDurationMs: this._endTimestamp - this._startTimestamp, sessionStartTimeMs: this._startTimestamp, sessionEndTimeMs: this._endTimestamp, impressionCount: this._impressionCount, uniqueImpressionCount: this._impressionItemIdMap.size, impressionItemTypes: Array.from(this._impressionItemTypes), feedReloadCount: this._reloadCount, feedDwelledItemsChangedCount: this._dwelledItemsChangedCount, feedFetchCount: this._feedFetchCount, latestDwellStartTimeMs: this._latestDwellStartTimeMs, previousIcyMiSessionCount: closure_10, interactionCount: this._interactionCount, dwelledCount: this._dwellCount, uniqueDwelledCount: this._dwelledItemIdMap.size, uxVariation: DEFAULT_UX_VARIATION.DEFAULT_UX_VARIATION });
  clearTimeout(this._timeout);
  closure_10 = closure_10 + 1;
  let c8 = null;
  map.clear();
  return this;
};
prototype["_resetTimeout"] = function _resetTimeout() {
  const self = this;
  clearTimeout(this._timeout);
  this._timeout = setTimeout(() => self.endSession(), c7);
};
prototype["_createImpression"] = function _createImpression(itemId) {
  let _dwelledItemIdMap;
  let _dwelledItemIdMap2;
  const self = this;
  const result = this._constructImpressionFromInput(itemId);
  this._dwellCount = this._dwellCount + 1;
  ({ _dwelledItemIdMap, _dwelledItemIdMap: _dwelledItemIdMap2 } = this);
  let num = _dwelledItemIdMap2.get(itemId.itemId);
  if (num == null) {
    num = 0;
  }
  const result1 = _dwelledItemIdMap.set(itemId.itemId, num + 1);
  const _impressionItemTypes = self._impressionItemTypes;
  _impressionItemTypes.add(itemId.itemType);
  self._latestDwellStartTimeMs = result.impressionStartTimestamp;
  return result;
};
prototype["_constructImpressionFromInput"] = function _constructImpressionFromInput(itemId) {
  let obj = v1;
  obj = { itemId: itemId.itemId, itemType: itemId.itemType, impressionId: obj.v4(), impressionStartTimestamp: Date.now(), impressionComplete: false, triggerType: itemId.triggerType, itemFeedIndex: itemId.itemFeedIndex, itemScore: itemId.itemScore, isInitiallyVisible: itemId.isInitiallyVisible, itemChannelType: itemId.itemChannelType, itemCardHeight: null, uxVariation: null, interactionActionTypes: null, interactionCount: 0, sessionImpressionIndex: null };
  let value = map.get(itemId.itemId);
  if (value == null) {
    value = null;
  }
  obj[10] = value;
  obj[11] = DEFAULT_UX_VARIATION.DEFAULT_UX_VARIATION;
  obj[12] = [];
  return obj;
};
prototype["_endImpression"] = function _endImpression(itemId) {
  const self = this;
  const _require = itemId;
  let _activeItems = this._activeItems;
  const findIndexResult = _activeItems.findIndex((itemId) => itemId.itemId === closure_0);
  let tmp3 = null;
  if (null != this._activeItems[findIndexResult]) {
    const _Date = Date;
    tmp2.impressionEndTimestamp = Date.now();
    tmp2.impressionComplete = true;
    const ICYMIAnalytics = _DEFAULT_UX_VARIATION.ICYMIAnalytics;
    const obj = { icymiSessionId: null, impressionId: null, dwellTimeMs: null, itemId: null, itemType: null, dwellStartTimeMs: null, dwellEndTimeMs: null, triggerType: null, itemOccurenceCountInSession: null, itemFeedIndex: null, itemScore: null, isInitiallyVisible: null, itemChannelType: null, itemCardHeight: null, uxVariation: null, interactionActionTypes: null, interactionCount: null, sessionImpressionIndex: null };
    obj[0] = self._sessionId;
    obj[1] = tmp2.impressionId;
    obj[2] = tmp2.impressionEndTimestamp - tmp2.impressionStartTimestamp;
    ({ itemId: obj[3], itemType: obj[4], impressionStartTimestamp: obj[5], impressionEndTimestamp: obj[6], triggerType: obj[7] } = tmp2);
    const _dwelledItemIdMap = self._dwelledItemIdMap;
    let num = _dwelledItemIdMap.get(tmp2.itemId);
    if (num == null) {
      num = 0;
    }
    obj[8] = num;
    ({ itemFeedIndex: obj[9], itemScore: obj[10], isInitiallyVisible: obj[11], itemChannelType: obj[12] } = tmp2);
    let itemCardHeight = map.get(tmp2.itemId);
    if (itemCardHeight == null) {
      itemCardHeight = tmp2.itemCardHeight;
    }
    if (itemCardHeight == null) {
      itemCardHeight = null;
    }
    obj[13] = itemCardHeight;
    let DEFAULT_UX_VARIATION = tmp2.uxVariation;
    if (DEFAULT_UX_VARIATION == null) {
      DEFAULT_UX_VARIATION = tmp5(8966).DEFAULT_UX_VARIATION;
    }
    obj[14] = DEFAULT_UX_VARIATION;
    ({ interactionActionTypes: obj[15], interactionCount: obj[16], sessionImpressionIndex: obj[17] } = tmp2);
    ICYMIAnalytics.trackFeedItemDwelled(obj);
    _activeItems = self._activeItems;
    _activeItems.splice(findIndexResult, 1);
    tmp3 = tmp2;
    tmp5 = _require;
  }
  return tmp3;
};
class ICYMISessionStore extends Store {
}
const prototype2 = ICYMISessionStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(initialize, fetchFingerprint, filterStaffGuild, getHash, getUserAgnosticState);
};
Object.defineProperty(prototype2, "currentSession", {
  get: function currentSession() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype2, "endedSessionCount", {
  get: function endedSessionCount() {
    return c10;
  },
  set: undefined
});
const iCYMISessionStore = new ICYMISessionStore(require("dispatcher"), {
  ICYMI_TAB_OPENED: function handleTabOpened() {
    let flag = null != _null;
    if (flag) {
      _null.endSession();
      flag = true;
    }
    if (closure_9.length > 0) {
      _null = new ICYMISession(closure_9, "focus");
      flag = true;
    }
    return flag;
  },
  ICYMI_TAB_CLOSED: function handleTabClosed() {
    let flag = null != _null;
    if (flag) {
      _null.endSession();
      flag = true;
    }
    return flag;
  },
  ICYMI_SET_FOCUSED_TAB: function handleIcymiTabFocussed(focused) {
    if (focused.focused) {
      if (null != tmp) {
        if (closure_9.length > 0) {
          _null.startItemsDwell(closure_9.map((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.triggerType = "focus";
            obj.isInitiallyVisible = true;
            return obj;
          }));
          return true;
        } else {
          return false;
        }
      } else {
        let flag2 = null != _null;
        if (flag2) {
          _null.endSession();
          flag2 = true;
        }
        if (closure_9.length > 0) {
          _null = new ICYMISession(closure_9, "focus");
          flag2 = true;
        }
        return flag2;
      }
    } else {
      let flag = null != tmp;
      if (flag) {
        _null.endAllImpressions();
        flag = true;
      }
      return flag;
    }
  },
  ICYMI_ITEMS_DWELL_START: function handleItemsDwellStart(items) {
    if (null == _null) {
      _null = new ICYMISession(items.items, "list");
    } else {
      _null.startItemsDwell(items.items);
    }
    return true;
  },
  ICYMI_ITEMS_LONG_IMPRESSION: function handleItemsLongImpression(items) {
    if (null == _null) {
      _null = new ICYMISession(items.items, "list");
    }
    const result = _null.trackItemsLongImpression(items.items);
    return true;
  },
  RELOAD_ICYMI: function handleReloadICYMI() {
    let flag = null != _null;
    if (flag) {
      _null.incrementReloadCount();
      flag = true;
    }
    return flag;
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadICYMIDehydrated() {
    let flag = null != _null;
    if (flag) {
      const result = _null.incrementFeedFetchCount();
      flag = true;
      if (null != _null) {
        _null.endAllImpressions();
        flag = true;
      }
    }
    return flag;
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    let tmp = "active" !== state.state;
    if (tmp) {
      tmp = null != _null;
    }
    if (tmp) {
      let flag = null != _null;
      if (flag) {
        _null.endSession();
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  CHANNEL_SELECT: function handleChannelSelected() {
    let tmp = null != _null;
    if (tmp) {
      let flag = null != _null;
      if (flag) {
        _null.endAllImpressions();
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  ICYMI_SET_CARD_HEIGHT: function handleSetCardHeight(itemId) {
    const result = map.set(itemId.itemId, itemId.height);
    return true;
  },
  ICYMI_ITEM_INTERACTED: function handleItemInteracted(press_comments, arg1) {
    if (null == _null) {
      _null = new ICYMISession(closure_9, "focus");
    }
    _null.trackItemInteraction(press_comments.itemId, press_comments.itemType, press_comments.actionType);
    return true;
  },
  ICYMI_FEED_ITEM_ACTIONED: function handleFeedItemActioned(arg0) {
    if (null == _null) {
      _null = new ICYMISession(closure_9, "focus");
    }
    const result = _null.trackFeedItemActioned(arg0);
    return true;
  },
  ICYMI_FEED_FILTER_ACTIONED: function handleFeedFilterActioned(arg0) {
    if (null == _null) {
      _null = new ICYMISession(closure_9, "focus");
    }
    const result = _null.trackFeedFilterActioned(arg0);
    return true;
  },
  ICYMI_FEED_PAGE_ACTIONED: function handleFeedPageActioned(arg0) {
    if (null == _null) {
      _null = new ICYMISession(closure_9, "focus");
    }
    const result = _null.trackFeedPageActioned(arg0);
    return true;
  }
});
let result = require("getUserAgnosticState").fileFinishedImporting("modules/icymi/ICYMISessionStore.tsx");

export default iCYMISessionStore;
export const resetGlobalState = function resetGlobalState() {
  if (null != _null) {
    const _clearTimeout = clearTimeout;
    clearTimeout(_null._timeout);
  }
  _null = null;
  let closure_9 = [];
  let c10 = 0;
  map.clear();
};
export { ICYMISession };