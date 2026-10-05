// === Module 14164: ICYMISessionStore ===

// Module 14164 (ICYMISessionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import v1 from "v1" /* 1266 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 14165 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import LabFeatureStore from "LabFeatureStore" /* 8031 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ICYMIStore from "ICYMIStore" /* 8011 */;
import size from "module_2" /* 2 */;

let _null, c10, set;

let c7 = 300000;
let c8 = null;
let closure_9 = [];
const authStore = 0;
const map = new Map();
class ICYMISession {
  constructor() {
    let items;
    if (items === undefined) {
      items = [];
    }
    let str = focus;
    if (focus === undefined) {
      str = "list";
    }
    let obj = Object.create(new.target.prototype);
    const obj2 = v1;
    obj._sessionId = obj2.v4();
    obj._startTimestamp = Date.now();
    obj._endTimestamp = null;
    obj._activeItems = [];
    obj._dwellCount = 0;
    obj._impressionCount = 0;
    obj._dwelledItemIdMap = new Map();
    new Map();
    obj._impressionItemIdMap = new Map();
    new Map();
    obj._impressionItemTypes = new Set();
    obj._reloadCount = 0;
    obj._feedFetchCount = 0;
    obj._dwelledItemsChangedCount = 0;
    obj._interactionCount = 0;
    obj._actionCount = 0;
    obj._latestDwellStartTimeMs = 0;
    new Set();
    obj._timeout = setTimeout(() => obj.endSession(), c7);
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const obj3 = { icymiSessionId: obj._sessionId, sessionStartTimeMs: obj._startTimestamp, previousIcymiSessionCount, uxVariation: ICYMIAnalytics2.DEFAULT_UX_VARIATION };
    const result = ICYMIAnalytics.trackFeedSessionStarted(obj3);
    if (items.length > 0) {
      obj.startItemsDwell(items.map((item) => {
        obj = { triggerType: str, isInitiallyVisible: true };
        const merged = Object.assign(item);
        return obj;
      }));
    }
    return obj;
  }
  getImpression(itemId) {
    let closure_0 = itemId;
    const _activeItems = this._activeItems;
    return _activeItems.find((itemId) => itemId.itemId === closure_0);
  }
  startItemsDwell(arr) {
    const self = this;
    this._resetTimeout();
    closure_9 = arr;
    if (arr.length === this._activeItems.length) {
      if (arr.every((itemId, index) => self._activeItems[index].itemId === itemId.itemId)) {
        return self._activeItems;
      }
    }
    self._dwelledItemsChangedCount = self._dwelledItemsChangedCount + 1;
    const items = [];
    const _activeItems = self._activeItems;
    set = new Set(_activeItems.map((itemId) => itemId.itemId));
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let impression = self.getImpression(nextResult.itemId);
      if (null != impression) {
        arr = items.push(tmp5);
        let deleteResult = set.delete(tmp3.itemId);
      } else {
        let arr2 = items.push(self._createImpression(tmp3));
      }
      continue;
    }
    const item = set.forEach((item) => self._endImpression(item));
    self._activeItems = items;
    return self._activeItems;
  }
  trackItemsLongImpression(items) {
    let itemCardHeight;
    let num2;
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
        result = self._constructImpressionFromInput(tmp2);
      }
      let tmp7 = result;
      let sum = self._impressionCount + 1;
      self._impressionCount = sum;
      result.sessionImpressionIndex = sum;
      let _impressionItemIdMap = self._impressionItemIdMap;
      let _impressionItemIdMap2 = self._impressionItemIdMap;
      set = _impressionItemIdMap.set;
      let itemId = tmp2.itemId;
      let num = _impressionItemIdMap2.get(tmp2.itemId);
      if (num == null) {
        num = 0;
      }
      let result1 = set(itemId, num + 1);
      let ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      let obj = { icymiSessionId: self._sessionId, impressionId: null, itemId: null, itemType: null, dwellStartTimeMs: null, triggerType: null, itemOccurenceCountInSession: num2, itemFeedIndex: null, itemScore: null, isInitiallyVisible: null, itemChannelType: null, itemCardHeight, isDwelling: null != tmp4, interactionActionTypes: null, interactionCount: null, uxVariation, sessionImpressionIndex: tmp7.sessionImpressionIndex };
      ({ impressionId: obj.impressionId, itemId: obj.itemId, itemType: obj.itemType, impressionStartTimestamp: obj.dwellStartTimeMs, triggerType: obj.triggerType } = tmp7);
      let _dwelledItemIdMap = self._dwelledItemIdMap;
      let trackFeedItemDwell1s = ICYMIAnalytics.trackFeedItemDwell1s;
      num2 = _dwelledItemIdMap.get(tmp7.itemId);
      if (num2 == null) {
        num2 = 0;
      }
      ({ itemFeedIndex: obj.itemFeedIndex, itemScore: obj.itemScore, isInitiallyVisible: obj.isInitiallyVisible, itemChannelType: obj.itemChannelType } = tmp7);
      itemCardHeight = map.get(tmp7.itemId);
      if (itemCardHeight == null) {
        itemCardHeight = tmp7.itemCardHeight;
      }
      if (itemCardHeight == null) {
        itemCardHeight = null;
      }
      ({ interactionActionTypes: obj.interactionActionTypes, interactionCount: obj.interactionCount, uxVariation } = tmp7);
      if (uxVariation == null) {
        uxVariation = ICYMIAnalytics2.DEFAULT_UX_VARIATION;
      }
      let trackFeedItemDwell1sResult = trackFeedItemDwell1s(obj);
      continue;
    }
  }
  trackItemInteraction(id, type, actionType) {
    let impressionId;
    let sum;
    let uxVariation;
    const self = this;
    const impression = this.getImpression(id);
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const obj = { id, type, actionType, impressionId, uxVariation, sessionInteractionIndex: sum, icymiSessionId: self._sessionId };
    impressionId = undefined;
    const trackItemInteraction = ICYMIAnalytics.trackItemInteraction;
    if (impression != null) {
      impressionId = impression.impressionId;
    }
    uxVariation = undefined;
    if (impression != null) {
      uxVariation = impression.uxVariation;
    }
    if (uxVariation == null) {
      uxVariation = ICYMIAnalytics2.DEFAULT_UX_VARIATION;
    }
    sum = self._interactionCount + 1;
    self._interactionCount = sum;
    trackItemInteraction(obj);
    if (null != impression) {
      const prop = impression.interactionActionTypes;
      prop.push(actionType);
      impression.interactionCount = impression.interactionCount + 1;
    }
  }
  trackFeedItemActioned(itemId) {
    let impressionId;
    let sum;
    let uxVariation;
    const self = this;
    const impression = this.getImpression(itemId.itemId);
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const obj = { icymiSessionId: this._sessionId, uxVariation, sessionActionIndex: sum, itemId: null, itemType: null, impressionId, actionParameters: itemId.actionParameters };
    uxVariation = undefined;
    const trackFeedItemActioned = ICYMIAnalytics.trackFeedItemActioned;
    if (impression != null) {
      uxVariation = impression.uxVariation;
    }
    if (uxVariation == null) {
      uxVariation = ICYMIAnalytics2.DEFAULT_UX_VARIATION;
    }
    sum = self._actionCount + 1;
    self._actionCount = sum;
    ({ itemId: obj.itemId, itemType: obj.itemType } = itemId);
    impressionId = undefined;
    if (impression != null) {
      impressionId = impression.impressionId;
    }
    if (impressionId == null) {
      impressionId = null;
    }
    const result = trackFeedItemActioned(obj);
  }
  trackFeedFilterActioned(itemId) {
    let impressionId;
    let sum;
    let uxVariation;
    const self = this;
    let impression = null;
    if (null != itemId.itemId) {
      impression = self.getImpression(itemId.itemId);
    }
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const obj = { icymiSessionId: self._sessionId, uxVariation, sessionActionIndex: sum, filterParameters: null, itemId: null, itemType: null, impressionId };
    uxVariation = undefined;
    const trackFeedFilterActioned = ICYMIAnalytics.trackFeedFilterActioned;
    if (impression != null) {
      uxVariation = impression.uxVariation;
    }
    if (uxVariation == null) {
      uxVariation = ICYMIAnalytics2.DEFAULT_UX_VARIATION;
    }
    sum = self._actionCount + 1;
    self._actionCount = sum;
    ({ filterParameters: obj.filterParameters, itemId: obj.itemId, itemType: obj.itemType } = itemId);
    impressionId = undefined;
    if (impression != null) {
      impressionId = impression.impressionId;
    }
    if (impressionId == null) {
      impressionId = null;
    }
    const result = trackFeedFilterActioned(obj);
  }
  trackFeedPageActioned(arg0) {
    let sum;
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const trackFeedPageActioned = ICYMIAnalytics.trackFeedPageActioned;
    const obj = { icymiSessionId: this._sessionId, uxVariation: ICYMIAnalytics2.DEFAULT_UX_VARIATION, sessionActionIndex: sum };
    sum = this._actionCount + 1;
    this._actionCount = sum;
    const merged = Object.assign(arg0);
    const result = trackFeedPageActioned(obj);
  }
  incrementReloadCount() {
    this._resetTimeout();
    this._reloadCount = this._reloadCount + 1;
  }
  incrementFeedFetchCount() {
    this._feedFetchCount = this._feedFetchCount + 1;
  }
  endAllImpressions() {
    const self = this;
    const items = [...this._activeItems];
    const item = items.forEach((itemId) => self._endImpression(itemId.itemId));
  }
  endSession() {
    let previousIcyMiSessionCount;
    this.endAllImpressions();
    this._endTimestamp = Date.now();
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const obj = { icymiSessionId: this._sessionId, sessionDurationMs: this._endTimestamp - this._startTimestamp, sessionStartTimeMs: this._startTimestamp, sessionEndTimeMs: this._endTimestamp, impressionCount: this._impressionCount, uniqueImpressionCount: this._impressionItemIdMap.size, impressionItemTypes: Array.from(this._impressionItemTypes), feedReloadCount: this._reloadCount, feedDwelledItemsChangedCount: this._dwelledItemsChangedCount, feedFetchCount: this._feedFetchCount, latestDwellStartTimeMs: this._latestDwellStartTimeMs, previousIcyMiSessionCount, interactionCount: this._interactionCount, dwelledCount: this._dwellCount, uniqueDwelledCount: this._dwelledItemIdMap.size, uxVariation: ICYMIAnalytics2.DEFAULT_UX_VARIATION };
    const result = ICYMIAnalytics.trackFeedSessionCompleted(obj);
    clearTimeout(this._timeout);
    previousIcyMiSessionCount = previousIcyMiSessionCount + 1;
    let c8 = null;
    map.clear();
    return this;
  }
  _resetTimeout() {
    const self = this;
    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => self.endSession(), c7);
  }
  _createImpression(itemId) {
    let _dwelledItemIdMap;
    let _dwelledItemIdMap2;
    const self = this;
    const result = this._constructImpressionFromInput(itemId);
    this._dwellCount = this._dwellCount + 1;
    ({ _dwelledItemIdMap, _dwelledItemIdMap: _dwelledItemIdMap2 } = this);
    itemId = itemId.itemId;
    set = _dwelledItemIdMap.set;
    let num = _dwelledItemIdMap2.get(itemId.itemId);
    if (num == null) {
      num = 0;
    }
    const result1 = set(itemId, num + 1);
    const _impressionItemTypes = self._impressionItemTypes;
    _impressionItemTypes.add(itemId.itemType);
    self._latestDwellStartTimeMs = result.impressionStartTimestamp;
    return result;
  }
  _constructImpressionFromInput(itemId) {
    let value;
    const obj = v1;
    const obj2 = { itemId: itemId.itemId, itemType: itemId.itemType, impressionId: obj.v4(), impressionStartTimestamp: Date.now(), impressionComplete: false, triggerType: itemId.triggerType, itemFeedIndex: itemId.itemFeedIndex, itemScore: itemId.itemScore, isInitiallyVisible: itemId.isInitiallyVisible, itemChannelType: itemId.itemChannelType, itemCardHeight: value, uxVariation: ICYMIAnalytics2.DEFAULT_UX_VARIATION, interactionActionTypes: [], interactionCount: 0, sessionImpressionIndex: null };
    value = map.get(itemId.itemId);
    if (value == null) {
      value = null;
    }
    return obj2;
  }
  _endImpression(itemId) {
    let DEFAULT_UX_VARIATION;
    let itemCardHeight;
    let num;
    const self = this;
    let closure_0 = itemId;
    const _activeItems = this._activeItems;
    const findIndexResult = _activeItems.findIndex((itemId) => itemId.itemId === closure_0);
    let tmp3 = null;
    if (null != this._activeItems[findIndexResult]) {
      const _Date = Date;
      this._activeItems[findIndexResult].impressionEndTimestamp = Date.now();
      this._activeItems[findIndexResult].impressionComplete = true;
      const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
      const obj = { icymiSessionId: self._sessionId, impressionId: this._activeItems[findIndexResult].impressionId, dwellTimeMs: this._activeItems[findIndexResult].impressionEndTimestamp - this._activeItems[findIndexResult].impressionStartTimestamp, itemId: null, itemType: null, dwellStartTimeMs: null, dwellEndTimeMs: null, triggerType: null, itemOccurenceCountInSession: num, itemFeedIndex: null, itemScore: null, isInitiallyVisible: null, itemChannelType: null, itemCardHeight, uxVariation: DEFAULT_UX_VARIATION, interactionActionTypes: null, interactionCount: null, sessionImpressionIndex: null };
      ({ itemId: obj.itemId, itemType: obj.itemType, impressionStartTimestamp: obj.dwellStartTimeMs, impressionEndTimestamp: obj.dwellEndTimeMs, triggerType: obj.triggerType } = this._activeItems[findIndexResult]);
      const _dwelledItemIdMap = self._dwelledItemIdMap;
      const trackFeedItemDwelled = ICYMIAnalytics.trackFeedItemDwelled;
      num = _dwelledItemIdMap.get(tmp2.itemId);
      if (num == null) {
        num = 0;
      }
      ({ itemFeedIndex: obj.itemFeedIndex, itemScore: obj.itemScore, isInitiallyVisible: obj.isInitiallyVisible, itemChannelType: obj.itemChannelType } = this._activeItems[findIndexResult]);
      itemCardHeight = map.get(tmp2.itemId);
      if (itemCardHeight == null) {
        itemCardHeight = tmp2.itemCardHeight;
      }
      if (itemCardHeight == null) {
        itemCardHeight = null;
      }
      DEFAULT_UX_VARIATION = tmp2.uxVariation;
      if (DEFAULT_UX_VARIATION == null) {
        DEFAULT_UX_VARIATION = ICYMIAnalytics2.DEFAULT_UX_VARIATION;
      }
      ({ interactionActionTypes: obj.interactionActionTypes, interactionCount: obj.interactionCount, sessionImpressionIndex: obj.sessionImpressionIndex } = this._activeItems[findIndexResult]);
      trackFeedItemDwelled(obj);
      const _activeItems1 = self._activeItems;
      _activeItems1.splice(findIndexResult, 1);
      tmp3 = tmp2;
    }
    return tmp3;
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
const Store = get_initializedDefault.Store;
class ICYMISessionStore extends Store {
  initialize() {
    this.waitFor(ApexExperimentStore, AuthenticationStore, ICYMIStore, ExperimentStore, LabFeatureStore);
  }
}
const prototype2 = ICYMISessionStore.prototype;
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
let obj = {
  ICYMI_TAB_OPENED: function handleTabOpened() {
    let flag = null != _null;
    if (flag) {
      _null.endSession();
      flag = true;
    }
    if (closure_9.length > 0) {
      const self = this;
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
      if (null != _null) {
        if (closure_9.length > 0) {
          _null.startItemsDwell(closure_9.map((item) => {
            const obj = { triggerType: "focus", isInitiallyVisible: true };
            const merged = Object.assign(item);
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
          const self = this;
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
      const self = this;
      _null = new ICYMISession(items.items, "list");
    } else {
      _null.startItemsDwell(items.items);
    }
    return true;
  },
  ICYMI_ITEMS_LONG_IMPRESSION: function handleItemsLongImpression(items) {
    if (null == _null) {
      const self = this;
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
    let tmp = "active" !== state.state && null != _null;
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
  ICYMI_ITEM_INTERACTED: function handleItemInteracted(press_comments) {
    if (null == _null) {
      const self = this;
      _null = new ICYMISession(closure_9, "focus");
    }
    _null.trackItemInteraction(press_comments.itemId, press_comments.itemType, press_comments.actionType);
    return true;
  },
  ICYMI_FEED_ITEM_ACTIONED: function handleFeedItemActioned(arg0) {
    if (null == _null) {
      const self = this;
      _null = new ICYMISession(closure_9, "focus");
    }
    const result = _null.trackFeedItemActioned(arg0);
    return true;
  },
  ICYMI_FEED_FILTER_ACTIONED: function handleFeedFilterActioned(arg0) {
    if (null == _null) {
      const self = this;
      _null = new ICYMISession(closure_9, "focus");
    }
    const result = _null.trackFeedFilterActioned(arg0);
    return true;
  },
  ICYMI_FEED_PAGE_ACTIONED: function handleFeedPageActioned(arg0) {
    if (null == _null) {
      const self = this;
      _null = new ICYMISession(closure_9, "focus");
    }
    const result = _null.trackFeedPageActioned(arg0);
    return true;
  }
};
const iCYMISessionStore = new ICYMISessionStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/icymi/ICYMISessionStore.tsx");

export default iCYMISessionStore;
export const resetGlobalState = function resetGlobalState() {
  if (null != _null) {
    const _clearTimeout = clearTimeout;
    clearTimeout(_null._timeout);
  }
  _null = null;
  closure_9 = [];
  c10 = 0;
  map.clear();
};
export { ICYMISession };