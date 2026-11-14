// discord_app/modules/waterwheels/discover/WaterwheelsDiscoverAnalyticsSession.tsx
import v1 from "../../../../_runtime/01269_v1.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
function getItemKey(loadId) {
  return "" + loadId.loadId + ":" + loadId.itemId;
}
let closure_4 = {
  now() {
    return Date.now();
  },
  createId() {
    return v1.v4();
  },
  setTimer(arg0, arg1) {
    return setTimeout(arg0, arg1);
  },
  clearTimer(arg0) {
    return clearTimeout(arg0);
  },
};
let previousSessionCount = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/discover/WaterwheelsDiscoverAnalyticsSession.tsx");
class WaterwheelsDiscoverAnalyticsSession {
  constructor(arg0) {
    tmp = fn;
    if (fn === undefined) {
      tmp = closure_4;
    }
    merged = Object.assign({
      visible: false,
      loadId: null,
      feedItems: null,
      dwellItems: null,
      activeImpressions: null,
      sessionId: null,
      sessionStartMs: 0,
      impressionCount: 0,
      dwellCount: 0,
      visibleItemsChangedCount: 0,
      interactionCount: 0,
      actionCount: 0,
      pendingActionGeneration: 0,
      latestDwellStartMs: 0,
    });
    merged[2] = [];
    merged[3] = [];
    map = new Map();
    merged[4] = map;
    merged.tracker = global;
    merged.environment = tmp;
    return merged;
  }
}
const prototype = WaterwheelsDiscoverAnalyticsSession.prototype;
Object.defineProperty(prototype, "currentSessionId", {
  get: function currentSessionId() {
    return this.sessionId;
  },
  set: undefined,
});
prototype["setFeed"] = function setFeed(loadId, memo) {
  const self = this;
  if (loadId !== this.loadId) {
    self.endAllImpressions();
    self.dwellItems = [];
  }
  self.loadId = loadId;
  self.feedItems = memo;
  self.dwellItems = self.getCurrentItems(self.dwellItems);
  const map = new Map(
    memo.map((loadId) => {
      items = ["" + loadId.loadId + ":" + loadId.itemId, loadId];
      return items;
    }),
  );
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let tmp6 = tmp5[1];
    value = map.get(tmp5[0]);
    if (null != value) {
      tmp6.item = tmp8;
    }
    continue;
  }
  if (self.visible) {
    self.startDwell(self.dwellItems, "list", false);
  }
  tmp2 = self.activeImpressions[Symbol.iterator]();
};
prototype["setVisible"] = function setVisible(visible) {
  const self = this;
  if (visible !== this.visible) {
    self.visible = visible;
    if (visible) {
      if (self.dwellItems.length > 0) {
        self.startDwell(self.dwellItems, "focus", true);
      }
    } else {
      self.endAllImpressions();
      self.endSession();
    }
  }
};
prototype["updateDwellItems"] = function updateDwellItems(dwellItems) {
  const self = this;
  const currentItems = this.getCurrentItems(dwellItems);
  this.dwellItems = currentItems;
  if (this.visible) {
    self.startDwell(currentItems, "list", false);
  }
};
prototype["trackSeenBatch"] = function trackSeenBatch(dwellItems) {
  const self = this;
  const currentItems = this.getCurrentItems(dwellItems);
  let visible = this.visible;
  if (visible) {
    visible = 0 !== currentItems.length;
  }
  if (visible) {
    self.report(() => {
      const tracker = self.tracker;
      return tracker.seenBatch({ items: currentItems });
    });
  }
};
prototype["trackAction"] = function trackAction(dependencyMap, discoverActionParameters) {
  const self = this;
  const parameters = discoverActionParameters;
  let flag = identity;
  if (identity === undefined) {
    flag = false;
  }
  c3 = undefined;
  let impressionId;
  let obj;
  let pendingActionGeneration;
  c0 = undefined;
  if (self.visible) {
    const ensureSessionResult = self.ensureSession();
    c3 = ensureSessionResult;
    const activeImpressions = self.activeImpressions;
    const _HermesInternal = HermesInternal;
    value = activeImpressions.get("" + dependencyMap.loadId + ":" + dependencyMap.itemId);
    impressionId = undefined;
    if (value != null) {
      impressionId = value.impressionId;
    }
    if (impressionId == null) {
      impressionId = null;
    }
    self.report(() => {
      const tracker = self.tracker;
      obj = { sessionId, item: dependencyMap, impressionId, sessionInteractionIndex: null, parameters };
      const sum = self.interactionCount + 1;
      self.interactionCount = sum;
      obj.sessionInteractionIndex = sum;
      return tracker.interacted(obj);
    });
    obj = {
      sessionId: ensureSessionResult,
      item: null,
      impressionId: null,
      sessionActionIndex: null,
      parameters: null,
    };
    const obj2 = {};
    let merged = Object.assign(dependencyMap);
    obj.item = obj2;
    obj.impressionId = impressionId;
    let sum = self.actionCount + 1;
    self.actionCount = sum;
    obj.sessionActionIndex = sum;
    const obj3 = {};
    const merged1 = Object.assign(discoverActionParameters);
    obj.parameters = obj3;
    if (null != value) {
      const prop = value.interactionActionTypes;
      prop.push(discoverActionParameters.actionType);
      value.interactionCount = value.interactionCount + 1;
    }
    if (flag) {
      pendingActionGeneration = self.pendingActionGeneration;
      c0 = false;
      return (arg0) => {
        c0 = arg0;
        let tmp = c0;
        if (!c0) {
          tmp = pendingActionGeneration !== self.pendingActionGeneration;
        }
        if (!tmp) {
          c0 = true;
          self.report(() => {
            const tracker = self.tracker;
            obj = {};
            const merged = Object.assign(obj);
            obj.outcome = outcome;
            return tracker.actioned(obj);
          });
        }
      };
    } else {
      self.report(() => {
        const tracker = self.tracker;
        return tracker.actioned(obj);
      });
    }
  }
};
prototype["invalidatePendingActions"] = function invalidatePendingActions() {
  this.pendingActionGeneration = this.pendingActionGeneration + 1;
};
prototype["dispose"] = function dispose() {
  this.visible = false;
  this.endAllImpressions();
  this.endSession();
  this.dwellItems = [];
};
prototype["getCurrentItems"] = function getCurrentItems(dwellItems) {
  const self = this;
  const feedItems = this.feedItems;
  const map = new Map(
    feedItems.map((loadId) => {
      items = ["" + loadId.loadId + ":" + loadId.itemId, loadId];
      return items;
    }),
  );
  return dwellItems.flatMap((loadId) => {
    value = map.get("" + loadId.loadId + ":" + loadId.itemId);
    if (null != value) {
      if (value.loadId === self.loadId) {
        items = [value];
      }
      return [];
    }
  });
};
prototype["ensureSession"] = function ensureSession() {
  const self = this;
  if (null != this.sessionId) {
    return self.sessionId;
  } else {
    const environment = self.environment;
    const id = environment.createId();
    self.sessionId = id;
    const environment2 = self.environment;
    self.sessionStartMs = environment2.now();
    self.report(() => {
      const tracker = self.tracker;
      return tracker.sessionStarted({
        sessionId: id,
        loadId: self.loadId,
        startMs: self.sessionStartMs,
        previousSessionCount,
      });
    });
    return id;
  }
};
prototype["startDwell"] = function startDwell(dwellItems, list, isInitiallyVisible) {
  const self = this;
  const mapped = dwellItems.map(getItemKey);
  const activeImpressions = this.activeImpressions;
  if (mapped.length !== arr.length) {
    if (dwellItems.length > 0) {
      self.ensureSession();
    }
    self.visibleItemsChangedCount = self.visibleItemsChangedCount + 1;
    const _Map = Map;
    const map = new Map();
    const iter = dwellItems[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp10 = nextResult;
      let tmp12 = getItemKey(nextResult);
      let tmp13 = tmp12;
      let activeImpressions2 = self.activeImpressions;
      value = activeImpressions2.get(tmp12);
      if (null != value) {
        let result = map.set(tmp13, tmp15);
        let activeImpressions3 = self.activeImpressions;
        let deleteResult = activeImpressions3.delete(tmp13);
      } else {
        let result1 = map.set(tmp13, self.createImpression(tmp10, list, isInitiallyVisible));
      }
      continue;
    }
    self.endAllImpressions();
    self.activeImpressions = map;
  }
  arr = Array.from(activeImpressions.keys());
};
prototype["createImpression"] = function createImpression(loadId, triggerType, isInitiallyVisible) {
  const self = this;
  closure_1 = "" + loadId.loadId + ":" + loadId.itemId;
  const environment = this.environment;
  const nowResult = environment.now();
  const obj = {
    item: loadId,
    impressionId: null,
    startMs: nowResult,
    triggerType,
    isInitiallyVisible,
    sessionImpressionIndex: null,
    interactionActionTypes: [],
    interactionCount: 0,
    dwell1sTimer: null,
  };
  const environment2 = this.environment;
  obj.impressionId = environment2.createId();
  this.dwellCount = this.dwellCount + 1;
  this.latestDwellStartMs = nowResult;
  const environment3 = this.environment;
  obj.dwell1sTimer = environment3.setTimer(() => self.trackDwell1s(closure_1, obj), 1000);
  return obj;
};
prototype["trackDwell1s"] = function trackDwell1s(arg0, arg1) {
  const self = this;
  closure_1 = arg1;
  arg1.dwell1sTimer = null;
  const sessionId = this.sessionId;
  let tmp = this.visible && null != sessionId;
  if (tmp) {
    const activeImpressions = self.activeImpressions;
    tmp = activeImpressions.get(arg0) === arg1;
  }
  if (tmp) {
    const sum = self.impressionCount + 1;
    self.impressionCount = sum;
    arg1.sessionImpressionIndex = sum;
    self.report(() => {
      const tracker = self.tracker;
      const obj = {};
      const merged = Object.assign(self.toImpressionEvent(sessionId, closure_1));
      obj.isDwelling = true;
      return tracker.dwell1s(obj);
    });
  }
};
prototype["endAllImpressions"] = function endAllImpressions() {
  const self = this;
  const sessionId = this.sessionId;
  const activeImpressions = this.activeImpressions;
  const arr = Array.from(activeImpressions.values());
  this.activeImpressions = new Map();
  if (0 !== arr.length) {
    let environment = this.environment;
    closure_2 = environment.now();
    for (const item10024 of arr) {
      let tmp4 = (function _loop(item10024) {
        _self = item10024;
        if (null != item10024.dwell1sTimer) {
          const environment = _self.environment;
          environment.clearTimer(item10024.dwell1sTimer);
          item10024.dwell1sTimer = null;
        }
        if (null != sessionId) {
          _self.report(() => {
            const tracker = self.tracker;
            const obj = {};
            const merged = Object.assign(self.toImpressionEvent(sessionId, closure_0));
            obj.endMs = endMs;
            return tracker.dwelled(obj);
          });
        }
      })(item10024);
      continue;
    }
  }
};
prototype["toImpressionEvent"] = function toImpressionEvent(sessionId, impressionId) {
  const obj = {
    sessionId,
    impressionId: impressionId.impressionId,
    item: impressionId.item,
    startMs: impressionId.startMs,
    triggerType: impressionId.triggerType,
    isInitiallyVisible: impressionId.isInitiallyVisible,
    interactionActionTypes: null,
    interactionCount: null,
    sessionImpressionIndex: null,
  };
  items = [...impressionId.interactionActionTypes];
  obj.interactionActionTypes = items;
  ({ interactionCount: obj.interactionCount, sessionImpressionIndex: obj.sessionImpressionIndex } = impressionId);
  return obj;
};
prototype["endSession"] = function endSession() {
  const self = this;
  const sessionId = this.sessionId;
  if (null != sessionId) {
    const obj = {
      sessionId,
      loadId: null,
      startMs: null,
      endMs: null,
      impressionCount: null,
      dwellCount: null,
      visibleItemsChangedCount: null,
      interactionCount: null,
      latestDwellStartMs: null,
      previousSessionCount: null,
    };
    ({ loadId: obj.loadId, sessionStartMs: obj.startMs, environment } = self);
    obj.endMs = environment.now();
    ({
      impressionCount: obj.impressionCount,
      dwellCount: obj.dwellCount,
      visibleItemsChangedCount: obj.visibleItemsChangedCount,
      interactionCount: obj.interactionCount,
      latestDwellStartMs: obj.latestDwellStartMs,
    } = self);
    obj.previousSessionCount = previousSessionCount;
    previousSessionCount = previousSessionCount + 1;
    self.sessionId = null;
    self.sessionStartMs = 0;
    self.impressionCount = 0;
    self.dwellCount = 0;
    self.visibleItemsChangedCount = 0;
    self.interactionCount = 0;
    self.actionCount = 0;
    self.latestDwellStartMs = 0;
    self.report(() => {
      const tracker = self.tracker;
      return tracker.sessionCompleted(obj);
    });
  }
};
prototype["report"] = function report(arg0) {
  closure_0 = arg0;
  return (async () => {
    await v3();
    if (1 === tmp6) {
      c2 = 0;
      c0 = 3;
    } else if (arg0 === 1) {
      c0 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c2 = 0;
    }
    return value;
  })();
};

export { WaterwheelsDiscoverAnalyticsSession };
