// discord_app/modules/tti_analytics/TTITracker.tsx
import set from "set";
import { apply } from "../../../_runtime/00012_apply.js";
import { isTracing } from "../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";

const require = arg1;
function serialize(arg0, arg1) {
  if (0 !== arg1) {
    if (null != arg1) {
      const diff = arg1 - arg0;
      let tmp4 = null;
      if (diff >= 0) {
        tmp4 = null;
        if (diff <= 1000000) {
          tmp4 = diff;
        }
      }
      return tmp4;
    }
  }
  return null;
}
function loggerCallback() {

}
global.__timingFunction = () => performance.now();
let closure_7 = null == global.__getTotalRequireTime ? (() => 0) : (() => global.__getTotalRequireTime());
class TTITimer {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.emoji = global;
    obj.name = arg1;
    return obj;
  }
}
const prototype = TTITimer.prototype;
Object.defineProperty(prototype, "start", {
  get: function start() {
    return this.start_;
  },
  set: undefined
});
Object.defineProperty(prototype, "end", {
  get: function end() {
    return this.end_;
  },
  set: undefined
});
prototype["hasStart"] = function hasStart() {
  return this.start_ > 0;
};
prototype["hasData"] = function hasData() {
  return this.end_ > 0;
};
prototype["recordStart"] = function recordStart() {
  const self = this;
  if (0 === this.start_) {
    self.recordStart_();
  }
  isTracing.mark(self.emoji, "Start " + self.name);
  loggerCallback();
};
prototype["recordStart_"] = function recordStart_() {
  this.start_ = Date.now();
  this.startNumImports = importAll(2).size();
  this.startImportTime = callback2();
};
prototype["recordEnd"] = function recordEnd() {
  const self = this;
  if (0 === this.end_) {
    if (0 !== self.start_) {
      self.recordEnd_();
      const _HermesInternal = HermesInternal;
      isTracing.mark(self.emoji, "Finish " + self.name, self.end_ - self.start_);
      const obj2 = isTracing;
    }
    loggerCallback();
  }
  isTracing.mark(self.emoji, "Finish " + self.name);
};
prototype["recordEnd_"] = function recordEnd_() {
  this.end_ = Date.now();
  this.endNumImports = importAll(2).size();
  this.endImportTime = callback2();
};
prototype["set"] = function set(start_) {
  const self = this;
  if (0 === this.start_) {
    self.start_ = start_;
    self.end_ = start_ + arg1;
    self.endNumImports = importAll(2).size();
    self.endImportTime = callback2();
    const obj = importAll(2);
  }
  isTracing.mark(self.emoji, self.name, arg1);
  loggerCallback();
};
prototype["serializeStart"] = function serializeStart(startTime) {
  const start_ = this.start_;
  let tmp = null;
  if (0 !== start_) {
    tmp = null;
    if (null != start_) {
      const diff = start_ - startTime;
      let tmp4 = null;
      if (diff >= 0) {
        tmp4 = null;
        if (diff <= 1000000) {
          tmp4 = diff;
        }
      }
      tmp = tmp4;
    }
  }
  return tmp;
};
prototype["serializeEnd"] = function serializeEnd(startTime) {
  const end_ = this.end_;
  let tmp = null;
  if (0 !== end_) {
    tmp = null;
    if (null != end_) {
      const diff = end_ - startTime;
      let tmp4 = null;
      if (diff >= 0) {
        tmp4 = null;
        if (diff <= 1000000) {
          tmp4 = diff;
        }
      }
      tmp = tmp4;
    }
  }
  return tmp;
};
prototype["measure"] = function measure(arg0) {
  const self = this;
  if (this.start_ > 0) {
    return isTracing.time(self.emoji, self.name, arg0);
  } else {
    self.recordStart_();
    const obj = isTracing;
    self.recordEnd_();
    loggerCallback();
    return isTracing.time(self.emoji, self.name, arg0);
  }
};
prototype["measureAsync"] = function measureAsync(outer1_5) {
  let closure_0 = outer1_5;
  const self = this;
  return callback(function*() {
    let closure_1 = tmp5;
    let closure_0 = tmp2;
    if (outer1_1.start_ > 0) {
      return v0(outer1_4[1]).timeAsync(outer1_1.emoji, outer1_1.name, outer1_0);
    }
    outer1_1.recordStart_();
    const obj2 = v0(outer1_4[1]);
    closure_0 = yield obj2.timeAsync(outer1_1.emoji, outer1_1.name, outer1_0);
    closure_1.recordEnd_();
    outer1_6();
    return closure_0;
  })();
};
prototype["measureAsyncWithoutNesting"] = function measureAsyncWithoutNesting(arg0) {
  let closure_0 = arg0;
  const self = this;
  return callback(function*() {
    let closure_1 = tmp5;
    let closure_0 = tmp2;
    if (outer1_1.start_ > 0) {
      const obj3 = v0(outer1_4[1]);
      return obj3.timeAsync(outer1_1.emoji, outer1_1.name, outer1_0);
    }
    outer1_1.recordStart_();
    const _Date2 = Date;
    closure_0 = Date.now();
    const _HermesInternal2 = HermesInternal;
    v0(outer1_4[1]).mark(outer1_1.emoji, "Start " + outer1_1.name);
    closure_1 = yield outer1_0();
    const _HermesInternal = HermesInternal;
    const _Date = Date;
    const combined = "Finish " + closure_1.name;
    v0(outer1_4[1]).mark(closure_1.emoji, combined, Date.now() - closure_0);
    closure_1.recordEnd_();
    outer1_6();
    return closure_1;
  })();
};
class TTIEvent {
  constructor(arg0, arg1) {
    flag = importDefault;
    if (importDefault === undefined) {
      flag = false;
    }
    flag2 = importAll;
    if (importAll === undefined) {
      flag2 = false;
    }
    obj = Object.create(new.target.prototype);
    obj.emoji = global;
    obj.name = arg1;
    obj.onlyOnce = flag;
    obj.alwaysRecord = flag2;
    return obj;
  }
}
const prototype2 = TTIEvent.prototype;
Object.defineProperty(prototype2, "time", {
  get: function time() {
    return this.time_;
  },
  set: undefined
});
prototype2["record"] = function record(timestamp) {
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  const self = this;
  if (0 === this.time_) {
    self.recordState_(timestamp);
  } else if (!self.onlyOnce) {
    if (self.alwaysRecord) {
      self.recordState_(timestamp);
      loggerCallback();
    } else {
      isTracing.mark(self.emoji, self.name);
      const obj = isTracing;
    }
  }
  loggerCallback();
};
prototype2["recordState_"] = function recordState_(timestamp) {
  this.time_ = timestamp;
  this.numImports = importAll(2).size();
  this.importTime = callback2();
  const obj = importAll(2);
  isTracing.mark(this.emoji, this.name);
};
prototype2["hasData"] = function hasData() {
  return this.time_ > 0;
};
prototype2["serialize"] = function serialize(arg0) {
  const time_ = this.time_;
  let tmp = null;
  if (0 !== time_) {
    tmp = null;
    if (null != time_) {
      const diff = time_ - arg0;
      let tmp4 = null;
      if (diff >= 0) {
        tmp4 = null;
        if (diff <= 1000000) {
          tmp4 = diff;
        }
      }
      tmp = tmp4;
    }
  }
  return tmp;
};
class TTIImportEvent {
}
const prototype3 = TTIImportEvent.prototype;
Object.defineProperty(prototype3, "time", {
  get: function time() {
    return this.time_;
  },
  set: undefined
});
prototype3["record"] = function record() {
  if (0 === this.time_) {
    tmp.time_ = callback2();
  }
};
const prototype4 = function TTITrackers() {
  const tmp = TTITimer;
  if (typeof TTITimer !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = Object.create(new.target.prototype);
  obj = Object.create(tmp.prototype);
  obj.emoji = "\u2757";
  obj.name = "Load index.tsx";
  obj[0] = obj;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj1 = Object.create(tmp.prototype);
  obj1.emoji = "\u{1F4BE}";
  obj1.name = "Load fast_connect native module";
  obj[1] = obj1;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj2 = Object.create(tmp.prototype);
  obj2.emoji = "\u{1F310}";
  obj2.name = "Fast Connect IDENTIFY";
  obj[2] = obj2;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj3 = Object.create(tmp.prototype);
  obj3.emoji = "\u{1F3C3}";
  obj3.name = "Load Imports";
  obj[3] = obj3;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj4 = Object.create(tmp.prototype);
  obj4.emoji = "\u{1F3C3}";
  obj4.name = "Initial Initialization";
  obj[4] = obj4;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj5 = Object.create(tmp.prototype);
  obj5.emoji = "\u{1F4BE}";
  obj5.name = "Load Storage";
  obj[5] = obj5;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj6 = Object.create(tmp.prototype);
  obj6.emoji = "\u{1F4BE}";
  obj6.name = "Parse Storage";
  obj[6] = obj6;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj7 = Object.create(tmp.prototype);
  obj7.emoji = "\u{1F4BE}";
  obj7.name = "Load Mini Cache";
  obj[7] = obj7;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj8 = Object.create(tmp.prototype);
  obj8.emoji = "\u{1F4BE}";
  obj8.name = "Fetch Guild Cache";
  obj[8] = obj8;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj9 = Object.create(tmp.prototype);
  obj9.emoji = "\u{1F4BE}";
  obj9.name = "Fetch Initial Guild Channels Cache";
  obj[9] = obj9;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj10 = Object.create(tmp.prototype);
  obj10.emoji = "\u{1F4BE}";
  obj10.name = "Load Cached Messages";
  obj[10] = obj10;
  if (typeof TTIEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj11 = Object.create(TTIEvent.prototype);
  obj11.emoji = "\u{1F3A8}";
  obj11.name = "First React Render";
  obj11.onlyOnce = false;
  obj11.alwaysRecord = false;
  obj[11] = obj11;
  if (typeof TTIEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj12 = Object.create(TTIEvent.prototype);
  obj12.emoji = "\u{1F3A8}";
  obj12.name = "First React Render useEffect";
  obj12.onlyOnce = false;
  obj12.alwaysRecord = false;
  obj[12] = obj12;
  if (typeof TTIEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj13 = Object.create(TTIEvent.prototype);
  obj13.emoji = "\u{1F3A8}";
  obj13.name = "First Contentful Paint";
  obj13.onlyOnce = false;
  obj13.alwaysRecord = true;
  obj[13] = obj13;
  if (typeof TTIEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj14 = Object.create(TTIEvent.prototype);
  obj14.emoji = "\u{1F3A8}";
  obj14.name = "React Render Messages";
  obj14.onlyOnce = true;
  obj14.alwaysRecord = false;
  obj[14] = obj14;
  if (typeof TTIEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj15 = Object.create(TTIEvent.prototype);
  obj15.emoji = "\u{1F3A8}";
  obj15.name = "React Render Cached Messages";
  obj15.onlyOnce = true;
  obj15.alwaysRecord = false;
  obj[15] = obj15;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj16 = Object.create(tmp.prototype);
  obj16.emoji = "\u{1F3A8}";
  obj16.name = "RowGenerator.generate()";
  obj[16] = obj16;
  if (typeof TTIEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj17 = Object.create(TTIEvent.prototype);
  obj17.emoji = "\u{1F5A5}\uFE0F";
  obj17.name = "Display Cached Messages";
  obj17.onlyOnce = false;
  obj17.alwaysRecord = true;
  obj[17] = obj17;
  if (typeof TTIEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj18 = Object.create(TTIEvent.prototype);
  obj18.emoji = "\u{1F3A8}";
  obj18.name = "First Render after Ready Payload";
  obj18.onlyOnce = true;
  obj18.alwaysRecord = false;
  obj[18] = obj18;
  if (typeof TTIEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj19 = Object.create(TTIEvent.prototype);
  obj19.emoji = "\u{1F3A8}";
  obj19.name = "React Render Latest Messages";
  obj19.onlyOnce = false;
  obj19.alwaysRecord = false;
  obj[19] = obj19;
  if (typeof TTIEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj20 = Object.create(TTIEvent.prototype);
  obj20.emoji = "\u{1F5A5}\uFE0F";
  obj20.name = "Display Latest Messages";
  obj20.onlyOnce = false;
  obj20.alwaysRecord = false;
  obj[20] = obj20;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj21 = Object.create(tmp.prototype);
  obj21.emoji = "\u{1F310}";
  obj21.name = "Initial Guild";
  obj[21] = obj21;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj22 = Object.create(tmp.prototype);
  obj22.emoji = "\u{1F4BE}";
  obj22.name = "Load Lazy Cache";
  obj[22] = obj22;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj23 = Object.create(tmp.prototype);
  obj23.emoji = "\u{1F4BE}";
  obj23.name = "Fetch Lazy Cache";
  obj[23] = obj23;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj24 = Object.create(tmp.prototype);
  obj24.emoji = "\u{1F4BE}";
  obj24.name = "Parse Lazy Cache";
  obj[24] = obj24;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj25 = Object.create(tmp.prototype);
  obj25.emoji = "\u{1F4BE}";
  obj25.name = "Fetch Stale Channels";
  obj[25] = obj25;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj26 = Object.create(tmp.prototype);
  obj26.emoji = "\u{1F4BE}";
  obj26.name = "Deserialize Cache";
  obj[26] = obj26;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj27 = Object.create(tmp.prototype);
  obj27.emoji = "\u{1F4BE}";
  obj27.name = "Dispatch Lazy Cache";
  obj[27] = obj27;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj28 = Object.create(tmp.prototype);
  obj28.emoji = "\u{1F310}";
  obj28.name = "Parse READY";
  obj[28] = obj28;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj29 = Object.create(tmp.prototype);
  obj29.emoji = "\u{1F310}";
  obj29.name = "READY";
  obj[29] = obj29;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj30 = Object.create(tmp.prototype);
  obj30.emoji = "\u{1F310}";
  obj30.name = "Hydrate READY";
  obj[30] = obj30;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj31 = Object.create(tmp.prototype);
  obj31.emoji = "\u{1F310}";
  obj31.name = "Dispatch READY";
  obj[31] = obj31;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj32 = Object.create(tmp.prototype);
  obj32.emoji = "\u{1F310}";
  obj32.name = "Parse READY Supplemental";
  obj[32] = obj32;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj33 = Object.create(tmp.prototype);
  obj33.emoji = "\u{1F310}";
  obj33.name = "READY Supplemental";
  obj[33] = obj33;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj34 = Object.create(tmp.prototype);
  obj34.emoji = "\u{1F310}";
  obj34.name = "Hydrate READY Supplemental";
  obj[34] = obj34;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj35 = Object.create(tmp.prototype);
  obj35.emoji = "\u{1F310}";
  obj35.name = "Dispatch READY Supplemental";
  obj[35] = obj35;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj36 = Object.create(tmp.prototype);
  obj36.emoji = "\u{1F310}";
  obj36.name = "Fetch messages";
  obj[36] = obj36;
  if (typeof tmp !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj37 = Object.create(tmp.prototype);
  obj37.emoji = "\u{1F310}";
  obj37.name = "Dispatch messages";
  obj[37] = obj37;
  if (typeof TTIImportEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = { polyfillsEnd: Object.create(tmp42.prototype), sentryEnd: null, appStateChangeStart: null, appStateChangeEnd: null, loadMiniCacheStart: null, loadStorageStart: null, loadStorageEnd: null };
  if (typeof TTIImportEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj[1] = Object.create(TTIImportEvent.prototype);
  if (typeof TTIImportEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj[2] = Object.create(TTIImportEvent.prototype);
  if (typeof TTIImportEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj[3] = Object.create(TTIImportEvent.prototype);
  if (typeof TTIImportEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj[4] = Object.create(TTIImportEvent.prototype);
  if (typeof TTIImportEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj[5] = Object.create(TTIImportEvent.prototype);
  if (typeof TTIImportEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj[6] = Object.create(TTIImportEvent.prototype);
  obj[38] = obj;
  return obj;
}.prototype;
class TTITracker extends prototype4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.readyProperties = {};
    applyArgumentsResult.didBackgroundApp = false;
    applyArgumentsResult.wasEverActive = false;
    applyArgumentsResult.wasAuthenticated = false;
    applyArgumentsResult.interstitial = null;
    map = new Map();
    applyArgumentsResult.cachedChannelCounts = map;
    applyArgumentsResult.cachedChannelId = null;
    applyArgumentsResult.cachedMessageIds = null;
    applyArgumentsResult.messageCacheMissingReason = "never-loaded";
    applyArgumentsResult.messageCacheAgeSeconds = null;
    applyArgumentsResult.messageCacheCount = null;
    applyArgumentsResult.messageCacheHavingCount = null;
    applyArgumentsResult.messageCacheMissingCount = null;
    applyArgumentsResult.messageRenderFullCount = null;
    applyArgumentsResult.messageRenderCachedCount = null;
    applyArgumentsResult.messageRenderHasMoreAfter = null;
    applyArgumentsResult.firstAppActiveTime = null;
    applyArgumentsResult.initialPage = null;
    applyArgumentsResult.initialGuildId = null;
    applyArgumentsResult.earlyCacheInfo = null;
    applyArgumentsResult.lazyCacheInfo = null;
    applyArgumentsResult.extraProperties = {};
    return applyArgumentsResult;
  }
}
const prototype5 = TTITracker.prototype;
prototype5["setTTICallback"] = function setTTICallback(arg0) {
  let closure_0 = arg0;
  function loggerCallback() {
    if (true === callback()) {
      function loggerCallback() {
        return false;
      }
    }
  }
};
prototype5["setInitialPage"] = function setInitialPage(page) {
  this.initialPage = page;
};
prototype5["setInitialGuildId"] = function setInitialGuildId(initialGuildId) {
  this.initialGuildId = initialGuildId;
};
prototype5["setEarlyCacheInfo"] = function setEarlyCacheInfo(earlyCacheInfo) {
  this.earlyCacheInfo = earlyCacheInfo;
};
prototype5["setLazyCacheInfo"] = function setLazyCacheInfo(lazyCacheInfo) {
  this.lazyCacheInfo = lazyCacheInfo;
};
prototype5["setInterstitial"] = function setInterstitial(ChannelSpoiler) {
  this.interstitial = ChannelSpoiler;
  loggerCallback();
};
prototype5["addLocalMessages"] = function addLocalMessages(basicChannel, length) {
  let size;
  const self = this;
  const cachedChannelCounts = this.cachedChannelCounts;
  const result = cachedChannelCounts.set(basicChannel, length);
  if (this.cachedChannelCounts.size > 100) {
    do {
      let cachedChannelCounts2 = self.cachedChannelCounts;
      let iter = cachedChannelCounts2.keys();
      let cachedChannelCounts3 = self.cachedChannelCounts;
      let deleteResult = cachedChannelCounts3.delete(iter.next().value);
      size = self.cachedChannelCounts.size;
    } while (size > 100);
  }
};
prototype5["attachReadyPayloadProperties"] = function attachReadyPayloadProperties(readyProperties) {
  this.readyProperties = readyProperties;
};
prototype5["appStateChanged"] = function appStateChanged(state) {
  const self = this;
  if ("active" === state) {
    if (null == self.firstAppActiveTime) {
      const _Date = Date;
      self.firstAppActiveTime = Date.now();
    }
    self.wasEverActive = true;
  }
  if (null == self.readyProperties.num_guilds) {
    self.didBackgroundApp = self.didBackgroundApp || "active" !== state;
  }
};
prototype5["recordRender"] = function recordRender(length, outer1_6) {
  const self = this;
  const renderMessages = this.renderMessages;
  renderMessages.record();
  let tmp2 = outer1_6;
  if (!outer1_6) {
    tmp2 = length > 0;
  }
  if (tmp2) {
    const renderMessagesWithCache = self.renderMessagesWithCache;
    renderMessagesWithCache.record();
  }
  if (outer1_6) {
    const renderLatestMessages = self.renderLatestMessages;
    renderLatestMessages.record();
  }
};
prototype5["recordMessageRender"] = function recordMessageRender(channelId, mapped, hasFetched, hasMoreAfter) {
  let self = this;
  self = this;
  const _default = DISCORD_EPOCH /* DISCORD_EPOCH */.default;
  const renderLatestMessages = this.renderLatestMessages;
  if (!renderLatestMessages.hasData()) {
    const renderMessages = self.renderMessages;
    renderMessages.record();
    if (mapped.length > 0) {
      const renderMessagesWithCache = self.renderMessagesWithCache;
      renderMessagesWithCache.record();
    }
    if (hasFetched) {
      const renderLatestMessages2 = self.renderLatestMessages;
      renderLatestMessages2.record();
      if (null == self.cachedChannelId) {
        self.messageCacheMissingReason = "no-cache";
      } else if (self.cachedChannelId !== channelId) {
        self.messageCacheMissingReason = "channel-changed";
      } else {
        if (null != self.cachedMessageIds) {
          if (0 !== self.cachedMessageIds.length) {
            if (0 === mapped.length) {
              self.messageCacheMissingReason = "channel-empty";
            } else if (channelId === self.cachedChannelId) {
              let cachedMessageIds = self.cachedMessageIds;
              const sorted = cachedMessageIds.sort(_default.compare);
              const sorted1 = mapped.sort(_default.compare);
              const _Math = Math;
              self.messageCacheAgeSeconds = Math.floor((_default.extractTimestamp(sorted1.reverse()[0]) - _default.extractTimestamp(sorted.reverse()[0])) / 1000);
              const length = mapped.filter((arg0) => {
                const cachedMessageIds = self.cachedMessageIds;
                let hasItem;
                if (cachedMessageIds != null) {
                  hasItem = cachedMessageIds.includes(arg0);
                }
                return hasItem;
              }).length;
              const cachedChannelCounts = self.cachedChannelCounts;
              let value = cachedChannelCounts.get(channelId);
              if (value == null) {
                value = null;
              }
              self.messageCacheCount = value;
              self.messageCacheHavingCount = length;
              self.messageCacheMissingCount = mapped.length - length;
              self.messageRenderFullCount = mapped.length;
              self.messageRenderCachedCount = self.cachedMessageIds.length;
              self.messageRenderHasMoreAfter = hasMoreAfter;
              const extractTimestampResult = _default.extractTimestamp(sorted1.reverse()[0]);
            }
          }
        }
        self.messageCacheMissingReason = "no-cache";
      }
    } else {
      if (!tmp7) {
        self.cachedChannelId = channelId;
        self.cachedMessageIds = mapped;
        if (mapped.length > 0) {
          self.messageCacheMissingReason = null;
        }
      }
      tmp7 = null != self.cachedChannelId && channelId !== self.cachedChannelId;
    }
  }
};
prototype5["getStartTime"] = function getStartTime(arg0) {
  const self = this;
  if (this.extraProperties.headless_task_ran) {
    if (null != self.firstAppActiveTime) {
      let start = self.firstAppActiveTime;
    }
    return start;
  }
  start = arg0;
  if (null == arg0) {
    start = self.loadIndex.start;
  }
};
prototype5["processNativeLogs"] = function processNativeLogs(nativeLogs, closure_2) {
  const self = this;
  const startTime = this.getStartTime(closure_2);
  const iter = nativeLogs[Symbol.iterator]();
  iter.next();
  while (iter !== undefined) {
    if (null != self.extraProperties.time_first_native_message_render_end) {
      continue;
    } else {
      let tmp3 = serialize;
      self.extraProperties.time_first_native_message_render_end = serialize(startTime, undefined.timestamp);
      continue;
    }
    continue;
  }
};
prototype5["serializeAppStartupMetrics"] = function serializeAppStartupMetrics() {
  return { ready_packing_algorithm: this.readyProperties.packing_algorithm, ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms };
};
prototype5["serializeWebPerfStartupMetrics"] = function serializeWebPerfStartupMetrics(arg0) {
  let firstRenderAfterReadyPayload;
  const obj = {};
  const merged = Object.assign(this.serializeAppStartupMetrics());
  ({ wasAuthenticated: obj.was_authenticated, firstRenderAfterReadyPayload } = this);
  obj.time_first_render_after_ready_end = firstRenderAfterReadyPayload.serialize(arg0);
  return obj;
};
prototype5["serializeTTITracker"] = function serializeTTITracker(c3) {
  let loadIndex;
  const self = this;
  const startTime = this.getStartTime(c3);
  const tmp2 = apply /* apply */;
  const found = apply /* apply */(isTracing.logGroups[0].logs).filter((log) => {
    log = log.log;
    return log.startsWith("Require ");
  });
  const mapped = found.map((delta) => {
    let num = delta.delta;
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const tmp2Result = apply /* apply */(isTracing.logGroups[0].logs);
  const result = this.serializeAppStartupMetrics();
  const obj = {};
  const merged = Object.assign(this.extraProperties);
  const merged1 = Object.assign(result);
  ({ initialPage: obj2.initial_page, initialGuildId: obj2.guild_id, loadIndex } = this);
  obj.time_load_index_start = loadIndex.serializeStart(startTime);
  const loadIndex2 = this.loadIndex;
  obj.time_load_index_end = loadIndex2.serializeEnd(startTime);
  const beginFastConnect = this.beginFastConnect;
  obj.time_begin_fast_connect_start = beginFastConnect.serializeStart(startTime);
  const beginFastConnect2 = this.beginFastConnect;
  obj.time_begin_fast_connect_end = beginFastConnect2.serializeEnd(startTime);
  const loadImports = this.loadImports;
  obj.time_load_imports_start = loadImports.serializeStart(startTime);
  const loadImports2 = this.loadImports;
  obj.time_load_imports_end = loadImports2.serializeEnd(startTime);
  const init = this.init;
  obj.time_init_start = init.serializeStart(startTime);
  const init2 = this.init;
  obj.time_init_end = init2.serializeEnd(startTime);
  const loadStorage = this.loadStorage;
  obj.time_load_storage_start = loadStorage.serializeStart(startTime);
  const loadStorage2 = this.loadStorage;
  obj.time_load_storage_end = loadStorage2.serializeEnd(startTime);
  const parseStorage = this.parseStorage;
  obj.time_parse_storage_start = parseStorage.serializeStart(startTime);
  const parseStorage2 = this.parseStorage;
  obj.time_parse_storage_end = parseStorage2.serializeEnd(startTime);
  const loadMiniCache = this.loadMiniCache;
  obj.time_load_mini_cache_start = loadMiniCache.serializeStart(startTime);
  const loadMiniCache2 = this.loadMiniCache;
  obj.time_load_mini_cache_end = loadMiniCache2.serializeEnd(startTime);
  const fetchGuildCache = this.fetchGuildCache;
  obj.time_fetch_initial_guild_start = fetchGuildCache.serializeStart(startTime);
  const fetchGuildCache2 = this.fetchGuildCache;
  obj.time_fetch_initial_guild_end = fetchGuildCache2.serializeEnd(startTime);
  const loadCachedMessages = this.loadCachedMessages;
  obj.time_load_cached_messages_start = loadCachedMessages.serializeStart(startTime);
  const loadCachedMessages2 = this.loadCachedMessages;
  obj.time_load_cached_messages_end = loadCachedMessages2.serializeEnd(startTime);
  const renderApp = this.renderApp;
  obj.time_render_app_start = renderApp.serialize(startTime);
  const renderAppEffect = this.renderAppEffect;
  obj.time_render_app_effect_start = renderAppEffect.serialize(startTime);
  const firstContentfulPaint = this.firstContentfulPaint;
  obj.time_first_contentful_paint = firstContentfulPaint.serialize(startTime);
  const renderMessages = this.renderMessages;
  obj.time_render_messages_end = renderMessages.serialize(startTime);
  const renderMessagesWithCache = this.renderMessagesWithCache;
  obj.time_render_messages_with_cache_end = renderMessagesWithCache.serialize(startTime);
  const renderLatestMessages = this.renderLatestMessages;
  obj.time_render_latest_messages_end = renderLatestMessages.serialize(startTime);
  const displayMessagesWithCache = this.displayMessagesWithCache;
  obj.time_display_messages_with_cache_end = displayMessagesWithCache.serialize(startTime);
  const displayLatestMessages = this.displayLatestMessages;
  obj.time_display_latest_messages_end = displayLatestMessages.serialize(startTime);
  const firstRowGenerator = this.firstRowGenerator;
  obj.time_first_row_generator_start = firstRowGenerator.serializeStart(startTime);
  const firstRowGenerator2 = this.firstRowGenerator;
  obj.time_first_row_generator_end = firstRowGenerator2.serializeEnd(startTime);
  const initialGuild = this.initialGuild;
  obj.time_initial_guild_start = initialGuild.serializeStart(startTime);
  const initialGuild2 = this.initialGuild;
  obj.time_initial_guild_end = initialGuild2.serializeEnd(startTime);
  const loadLazyCache = this.loadLazyCache;
  obj.time_load_lazy_cache_start = loadLazyCache.serializeStart(startTime);
  const loadLazyCache2 = this.loadLazyCache;
  obj.time_load_lazy_cache_end = loadLazyCache2.serializeEnd(startTime);
  const fetchLazyCache = this.fetchLazyCache;
  obj.time_fetch_lazy_cache_start = fetchLazyCache.serializeStart(startTime);
  const fetchLazyCache2 = this.fetchLazyCache;
  obj.time_fetch_lazy_cache_end = fetchLazyCache2.serializeEnd(startTime);
  const parseLazyCache = this.parseLazyCache;
  obj.time_parse_lazy_cache_start = parseLazyCache.serializeStart(startTime);
  const parseLazyCache2 = this.parseLazyCache;
  obj.time_parse_lazy_cache_end = parseLazyCache2.serializeEnd(startTime);
  const fetchStaleChannels = this.fetchStaleChannels;
  obj.time_fetch_stale_channels_start = fetchStaleChannels.serializeStart(startTime);
  const fetchStaleChannels2 = this.fetchStaleChannels;
  obj.time_fetch_stale_channels_end = fetchStaleChannels2.serializeEnd(startTime);
  const deserializeCache = this.deserializeCache;
  obj.time_deserialize_cache_start = deserializeCache.serializeStart(startTime);
  const deserializeCache2 = this.deserializeCache;
  obj.time_deserialize_cache_end = deserializeCache2.serializeEnd(startTime);
  const dispatchLazyCache = this.dispatchLazyCache;
  obj.time_dispatch_lazy_cache_start = dispatchLazyCache.serializeStart(startTime);
  const dispatchLazyCache2 = this.dispatchLazyCache;
  obj.time_dispatch_lazy_cache_end = dispatchLazyCache2.serializeEnd(startTime);
  const parseReady = this.parseReady;
  obj.time_parse_ready_start = parseReady.serializeStart(startTime);
  const parseReady2 = this.parseReady;
  obj.time_parse_ready_end = parseReady2.serializeEnd(startTime);
  const ready = this.ready;
  obj.time_ready_start = ready.serializeStart(startTime);
  const ready2 = this.ready;
  obj.time_ready_end = ready2.serializeEnd(startTime);
  const hydrateReady = this.hydrateReady;
  obj.time_hydrate_ready_start = hydrateReady.serializeStart(startTime);
  const hydrateReady2 = this.hydrateReady;
  obj.time_hydrate_ready_end = hydrateReady2.serializeEnd(startTime);
  const dispatchReady = this.dispatchReady;
  obj.time_dispatch_ready_start = dispatchReady.serializeStart(startTime);
  const dispatchReady2 = this.dispatchReady;
  obj.time_dispatch_ready_end = dispatchReady2.serializeEnd(startTime);
  const parseReadySupplemental = this.parseReadySupplemental;
  obj.time_parse_ready_supplemental_start = parseReadySupplemental.serializeStart(startTime);
  const parseReadySupplemental2 = this.parseReadySupplemental;
  obj.time_parse_ready_supplemental_end = parseReadySupplemental2.serializeEnd(startTime);
  const readySupplemental = this.readySupplemental;
  obj.time_ready_supplemental_start = readySupplemental.serializeStart(startTime);
  const readySupplemental2 = this.readySupplemental;
  obj.time_ready_supplemental_end = readySupplemental2.serializeEnd(startTime);
  const hydrateReadySupplemental = this.hydrateReadySupplemental;
  obj.time_hydrate_ready_supplemental_start = hydrateReadySupplemental.serializeStart(startTime);
  const hydrateReadySupplemental2 = this.hydrateReadySupplemental;
  obj.time_hydrate_ready_supplemental_end = hydrateReadySupplemental2.serializeEnd(startTime);
  const dispatchReadySupplemental = this.dispatchReadySupplemental;
  obj.time_dispatch_ready_supplemental_start = dispatchReadySupplemental.serializeStart(startTime);
  const dispatchReadySupplemental2 = this.dispatchReadySupplemental;
  obj.time_dispatch_ready_supplemental_end = dispatchReadySupplemental2.serializeEnd(startTime);
  const fetchMessages = this.fetchMessages;
  obj.time_fetch_messages_start = fetchMessages.serializeStart(startTime);
  const fetchMessages2 = this.fetchMessages;
  obj.time_fetch_messages_end = fetchMessages2.serializeEnd(startTime);
  const dispatchMessages = this.dispatchMessages;
  obj.time_dispatch_messages_start = dispatchMessages.serializeStart(startTime);
  const dispatchMessages2 = this.dispatchMessages;
  obj.time_dispatch_messages_end = dispatchMessages2.serializeEnd(startTime);
  const loadFastConnectNativeModule = this.loadFastConnectNativeModule;
  obj.time_load_fast_connect_native_module_start = loadFastConnectNativeModule.serializeStart(startTime);
  const loadFastConnectNativeModule2 = this.loadFastConnectNativeModule;
  obj.time_load_fast_connect_native_module_end = loadFastConnectNativeModule2.serializeEnd(startTime);
  obj.identify_total_server_duration_ms = this.readyProperties.identify_total_server_duration_ms;
  obj.identify_api_duration_ms = this.readyProperties.identify_api_duration_ms;
  obj.identify_guilds_duration_ms = this.readyProperties.identify_guilds_duration_ms;
  obj.ready_compressed_byte_size = this.readyProperties.compressed_byte_size;
  obj.ready_uncompressed_byte_size = this.readyProperties.uncompressed_byte_size;
  obj.identify_compressed_byte_size = this.readyProperties.identify_compressed_byte_size;
  obj.identify_uncompressed_byte_size = this.readyProperties.identify_uncompressed_byte_size;
  obj.ready_compression_algorithm = this.readyProperties.compression_algorithm;
  obj.is_reconnect = this.readyProperties.is_reconnect;
  obj.is_fast_connect = this.readyProperties.is_fast_connect;
  obj.did_force_clear_guild_hashes = this.readyProperties.did_force_clear_guild_hashes;
  obj.num_guilds = this.readyProperties.num_guilds;
  obj.num_changed_guild_channels = this.readyProperties.num_guild_channels;
  obj.ready_presences_size = this.readyProperties.presences_size;
  obj.ready_users_size = this.readyProperties.users_size;
  obj.ready_read_states_size = this.readyProperties.read_states_size;
  obj.ready_private_channels_size = this.readyProperties.private_channels_size;
  obj.ready_user_guild_settings_size = this.readyProperties.user_guild_settings_size;
  obj.ready_relationships_size = this.readyProperties.relationships_size;
  obj.ready_experiments_size = this.readyProperties.experiments_size;
  obj.ready_user_settings_size = this.readyProperties.user_settings_size;
  obj.ready_remaining_data_size = this.readyProperties.remaining_data_size;
  obj.ready_guild_channels_size = this.readyProperties.guild_channels_size;
  obj.ready_guild_members_size = this.readyProperties.guild_members_size;
  obj.ready_guild_presences_size = this.readyProperties.guild_presences_size;
  obj.ready_guild_roles_size = this.readyProperties.guild_roles_size;
  obj.ready_guild_emojis_size = this.readyProperties.guild_emojis_size;
  obj.ready_guild_remaining_data_size = this.readyProperties.guild_remaining_data_size;
  obj.ready_guild_threads_size = this.readyProperties.guild_threads_size;
  obj.ready_guild_stickers_size = this.readyProperties.guild_stickers_size;
  obj.ready_guild_events_size = this.readyProperties.guild_events_size;
  obj.ready_guild_features_size = this.readyProperties.guild_features_size;
  obj.ready_size_metrics_duration_ms = this.readyProperties.size_metrics_duration_ms;
  obj.had_cache_at_startup = this.readyProperties.had_cache_at_startup;
  obj.used_cache_at_startup = this.readyProperties.used_cache_at_startup;
  ({ wasAuthenticated: obj2.was_authenticated, didBackgroundApp: obj2.did_background_app, interstitial: obj2.interstitial, messageCacheMissingReason: obj2.message_cache_missing_reason, messageCacheAgeSeconds: obj2.message_cache_age_seconds, messageCacheCount: obj2.message_cache_count, messageCacheHavingCount: obj2.message_cache_having_count, messageCacheMissingCount: obj2.message_cache_missing_count, messageRenderFullCount: obj2.message_render_full_count, messageRenderCachedCount: obj2.message_render_cached_count, messageRenderHasMoreAfter: obj2.message_render_has_more_after } = this);
  obj.duration_major_js_imports = this.loadImports.end - this.loadIndex.start + mapped.sum();
  const earlyCacheInfo = this.earlyCacheInfo;
  let num;
  if (earlyCacheInfo != null) {
    num = earlyCacheInfo.guilds;
  }
  if (num == null) {
    num = 0;
  }
  const lazyCacheInfo = self.lazyCacheInfo;
  let num2;
  if (lazyCacheInfo != null) {
    num2 = lazyCacheInfo.guilds;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj.cache_num_guilds = Math.max(num, num2);
  const lazyCacheInfo2 = self.lazyCacheInfo;
  let privateChannels;
  if (lazyCacheInfo2 != null) {
    privateChannels = lazyCacheInfo2.privateChannels;
  }
  obj.cache_num_private_channels = privateChannels;
  const lazyCacheInfo3 = self.lazyCacheInfo;
  let basicChannels;
  if (lazyCacheInfo3 != null) {
    basicChannels = lazyCacheInfo3.basicChannels;
  }
  obj.cache_num_basic_channels = basicChannels;
  const lazyCacheInfo4 = self.lazyCacheInfo;
  let basicChannelsStale;
  if (lazyCacheInfo4 != null) {
    basicChannelsStale = lazyCacheInfo4.basicChannelsStale;
  }
  obj.cache_num_basic_channels_stale = basicChannelsStale;
  const lazyCacheInfo5 = self.lazyCacheInfo;
  let fullChannels;
  if (lazyCacheInfo5 != null) {
    fullChannels = lazyCacheInfo5.fullChannels;
  }
  obj.cache_num_full_channels = fullChannels;
  const lazyCacheInfo6 = self.lazyCacheInfo;
  let fullChannelGuilds;
  if (lazyCacheInfo6 != null) {
    fullChannelGuilds = lazyCacheInfo6.fullChannelGuilds;
  }
  obj.cache_num_full_channel_guilds = fullChannelGuilds;
  obj.num_imports_at_load_index_end = self.loadIndex.endNumImports;
  obj.num_imports_at_init_end = self.init.endNumImports;
  obj.num_imports_at_load_mini_cache_end = self.loadMiniCache.endNumImports;
  obj.num_imports_at_render_app_start = self.renderApp.numImports;
  obj.num_imports_at_render_app_effect_start = self.renderAppEffect.numImports;
  obj.num_imports_at_render_messages_end = self.renderMessages.numImports;
  obj.num_imports_at_render_messages_with_cache_end = self.renderMessagesWithCache.numImports;
  obj.num_imports_at_render_latest_messages_end = self.renderLatestMessages.numImports;
  obj.num_imports_at_load_lazy_cache_start = self.loadLazyCache.startNumImports;
  obj.num_imports_at_load_lazy_cache_end = self.loadLazyCache.endNumImports;
  obj.num_imports_at_ready_start = self.ready.startNumImports;
  obj.num_imports_at_ready_end = self.ready.endNumImports;
  obj.num_imports_at_ready_supplemental_start = self.readySupplemental.startNumImports;
  obj.num_imports_at_ready_supplemental_end = self.readySupplemental.endNumImports;
  obj.duration_imports_at_load_index_start = Math.ceil(self.loadIndex.startImportTime);
  obj.duration_imports_at_load_index_end = Math.ceil(self.loadIndex.endImportTime);
  obj.duration_imports_at_init_end = Math.ceil(self.init.endImportTime);
  obj.duration_imports_at_load_mini_cache_end = Math.ceil(self.loadMiniCache.endImportTime);
  obj.duration_imports_at_render_app_start = Math.ceil(self.renderApp.importTime);
  obj.duration_imports_at_render_app_effect_start = Math.ceil(self.renderAppEffect.importTime);
  obj.duration_imports_at_render_messages_end = Math.ceil(self.renderMessages.importTime);
  obj.duration_imports_at_render_messages_with_cache_end = Math.ceil(self.renderMessagesWithCache.importTime);
  obj.duration_imports_at_render_latest_messages_end = Math.ceil(self.renderLatestMessages.importTime);
  obj.duration_imports_at_load_lazy_cache_start = Math.ceil(self.loadLazyCache.startImportTime);
  obj.duration_imports_at_load_lazy_cache_end = Math.ceil(self.loadLazyCache.endImportTime);
  obj.duration_imports_at_ready_start = Math.ceil(self.ready.startImportTime);
  obj.duration_imports_at_ready_end = Math.ceil(self.ready.endImportTime);
  obj.duration_imports_at_ready_supplemental_start = Math.ceil(self.readySupplemental.startImportTime);
  obj.duration_imports_at_ready_supplemental_end = Math.ceil(self.readySupplemental.endImportTime);
  obj.duration_imports_at_polyfills_end = Math.ceil(self.imports.polyfillsEnd.time);
  obj.duration_imports_at_sentry_end = Math.ceil(self.imports.sentryEnd.time);
  obj.duration_imports_at_fast_connect_start = Math.ceil(self.beginFastConnect.startImportTime);
  obj.duration_imports_at_fast_connect_end = Math.ceil(self.beginFastConnect.endImportTime);
  obj.duration_imports_at_app_state_change_start = Math.ceil(self.imports.appStateChangeStart.time);
  obj.duration_imports_at_app_state_change_end = Math.ceil(self.imports.appStateChangeEnd.time);
  obj.duration_imports_at_load_mini_cache_start = Math.ceil(self.imports.loadMiniCacheStart.time);
  obj.duration_imports_at_load_storage_start = Math.ceil(self.imports.loadStorageStart.time);
  obj.duration_imports_at_load_storage_end = Math.ceil(self.imports.loadStorageEnd.time);
  return obj;
};
const tTITracker = new TTITracker();
let result = require("set").fileFinishedImporting("modules/tti_analytics/TTITracker.tsx");

export default tTITracker;