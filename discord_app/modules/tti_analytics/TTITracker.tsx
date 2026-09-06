// === Module 9: TTITracker ===

// Module 9 (TTITracker)
import _modAll2 from "module_2" /* 2 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import SnowflakeUtils from "SnowflakeUtils" /* 11 */;
import _mod12 from "module_12" /* 12 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
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
    merged = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
    merged.emoji = global;
    merged.name = fn;
    return merged;
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
  AppStartPerformanceDefault.mark(self.emoji, "Start " + self.name);
  loggerCallback();
};
prototype["recordStart_"] = function recordStart_() {
  this.start_ = Date.now();
  this.startNumImports = _modAll2.size();
  this.startImportTime = closure_7();
};
prototype["recordEnd"] = function recordEnd() {
  const self = this;
  if (0 === this.end_) {
    if (0 !== self.start_) {
      self.recordEnd_();
      const _HermesInternal = HermesInternal;
      AppStartPerformanceDefault.mark(self.emoji, "Finish " + self.name, self.end_ - self.start_);
    }
    loggerCallback();
  }
  AppStartPerformanceDefault.mark(self.emoji, "Finish " + self.name);
};
prototype["recordEnd_"] = function recordEnd_() {
  this.end_ = Date.now();
  this.endNumImports = _modAll2.size();
  this.endImportTime = closure_7();
};
prototype["set"] = function set(start_, arg1) {
  const self = this;
  if (0 === this.start_) {
    self.start_ = start_;
    self.end_ = start_ + arg1;
    self.endNumImports = _modAll2.size();
    self.endImportTime = closure_7();
  }
  AppStartPerformanceDefault.mark(self.emoji, self.name, arg1);
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
    return AppStartPerformanceDefault.time(self.emoji, self.name, arg0);
  } else {
    self.recordStart_();
    self.recordEnd_();
    loggerCallback();
    return AppStartPerformanceDefault.time(self.emoji, self.name, arg0);
  }
};
prototype["measureAsync"] = function measureAsync(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async () => {
    closure_1 = tmp5;
    closure_0 = tmp2;
    if (self.start_ > 0) {
      return v1(10).timeAsync(self.emoji, self.name, closure_0);
    }
    self.recordStart_();
    closure_128_0 = await v1(10).timeAsync(self.emoji, self.name, closure_0);
    closure_129_1.recordEnd_();
    loggerCallback();
    return closure_128_0;
  })();
};
prototype["measureAsyncWithoutNesting"] = function measureAsyncWithoutNesting(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async () => {
    closure_1 = tmp5;
    if (self.start_ > 0) {
      return v1(10).timeAsync(self.emoji, self.name, tmp2);
    }
    self.recordStart_();
    const _Date2 = Date;
    closure_128_0 = Date.now();
    const _HermesInternal2 = HermesInternal;
    v1(10).mark(self.emoji, "Start " + self.name);
    closure_128_1 = await tmp2();
    const _HermesInternal = HermesInternal;
    const _Date = Date;
    const combined = "Finish " + closure_129_1.name;
    v1(10).mark(closure_129_1.emoji, combined, Date.now() - closure_128_0);
    closure_129_1.recordEnd_();
    loggerCallback();
    return closure_128_1;
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
    merged = Object.assign({ time_: 0, numImports: null, importTime: 0 });
    merged.emoji = global;
    merged.name = fn;
    merged.onlyOnce = flag;
    merged.alwaysRecord = flag2;
    return merged;
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
      AppStartPerformanceDefault.mark(self.emoji, self.name);
    }
  }
  loggerCallback();
};
prototype2["recordState_"] = function recordState_(timestamp) {
  this.time_ = timestamp;
  this.numImports = _modAll2.size();
  this.importTime = closure_7();
  AppStartPerformanceDefault.mark(this.emoji, this.name);
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
  constructor() {
    return Object.assign({ time_: 0 });
  }
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
    tmp.time_ = closure_7();
  }
};
const prototype4 = function TTITrackers() {
  if (typeof TTITimer === "function") {
    const merged = Object.assign({ loadIndex: null, loadFastConnectNativeModule: null, beginFastConnect: null, loadImports: null, init: null, loadStorage: null, parseStorage: null, loadMiniCache: null, fetchGuildCache: null, fetchGuildChannelsCache: null, loadCachedMessages: null, renderApp: null, renderAppEffect: null, firstContentfulPaint: null, renderMessages: null, renderMessagesWithCache: null, firstRowGenerator: null, displayMessagesWithCache: null, firstRenderAfterReadyPayload: null, renderLatestMessages: null, displayLatestMessages: null, initialGuild: null, loadLazyCache: null, fetchLazyCache: null, parseLazyCache: null, fetchStaleChannels: null, deserializeCache: null, dispatchLazyCache: null, parseReady: null, ready: null, hydrateReady: null, dispatchReady: null, parseReadySupplemental: null, readySupplemental: null, hydrateReadySupplemental: null, dispatchReadySupplemental: null, fetchMessages: null, dispatchMessages: null, imports: null });
    const merged1 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
    merged1.emoji = "\u2757";
    merged1.name = "Load index.tsx";
    merged[0] = merged1;
    if (typeof tmp === "function") {
      const merged2 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
      merged2.emoji = "\u{1F4BE}";
      merged2.name = "Load fast_connect native module";
      merged[1] = merged2;
      if (typeof tmp === "function") {
        const merged3 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
        merged3.emoji = "\u{1F310}";
        merged3.name = "Fast Connect IDENTIFY";
        merged[2] = merged3;
        if (typeof tmp === "function") {
          const merged4 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
          merged4.emoji = "\u{1F3C3}";
          merged4.name = "Load Imports";
          merged[3] = merged4;
          if (typeof tmp === "function") {
            const merged5 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
            merged5.emoji = "\u{1F3C3}";
            merged5.name = "Initial Initialization";
            merged[4] = merged5;
            if (typeof tmp === "function") {
              const merged6 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
              merged6.emoji = "\u{1F4BE}";
              merged6.name = "Load Storage";
              merged[5] = merged6;
              if (typeof tmp === "function") {
                const merged7 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                merged7.emoji = "\u{1F4BE}";
                merged7.name = "Parse Storage";
                merged[6] = merged7;
                if (typeof tmp === "function") {
                  const merged8 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                  merged8.emoji = "\u{1F4BE}";
                  merged8.name = "Load Mini Cache";
                  merged[7] = merged8;
                  if (typeof tmp === "function") {
                    const merged9 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                    merged9.emoji = "\u{1F4BE}";
                    merged9.name = "Fetch Guild Cache";
                    merged[8] = merged9;
                    if (typeof tmp === "function") {
                      const merged10 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                      merged10.emoji = "\u{1F4BE}";
                      merged10.name = "Fetch Initial Guild Channels Cache";
                      merged[9] = merged10;
                      if (typeof tmp === "function") {
                        const merged11 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                        merged11.emoji = "\u{1F4BE}";
                        merged11.name = "Load Cached Messages";
                        merged[10] = merged11;
                        if (typeof TTIEvent === "function") {
                          const merged12 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                          merged12.emoji = "\u{1F3A8}";
                          merged12.name = "First React Render";
                          merged12.onlyOnce = false;
                          merged12.alwaysRecord = false;
                          merged[11] = merged12;
                          if (typeof tmp24 === "function") {
                            const merged13 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                            merged13.emoji = "\u{1F3A8}";
                            merged13.name = "First React Render useEffect";
                            merged13.onlyOnce = false;
                            merged13.alwaysRecord = false;
                            merged[12] = merged13;
                            if (typeof tmp24 === "function") {
                              const merged14 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                              merged14.emoji = "\u{1F3A8}";
                              merged14.name = "First Contentful Paint";
                              merged14.onlyOnce = false;
                              merged14.alwaysRecord = true;
                              merged[13] = merged14;
                              if (typeof tmp24 === "function") {
                                const merged15 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                merged15.emoji = "\u{1F3A8}";
                                merged15.name = "React Render Messages";
                                merged15.onlyOnce = true;
                                merged15.alwaysRecord = false;
                                merged[14] = merged15;
                                if (typeof tmp24 === "function") {
                                  const merged16 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                  merged16.emoji = "\u{1F3A8}";
                                  merged16.name = "React Render Cached Messages";
                                  merged16.onlyOnce = true;
                                  merged16.alwaysRecord = false;
                                  merged[15] = merged16;
                                  if (typeof tmp === "function") {
                                    const merged17 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                    merged17.emoji = "\u{1F3A8}";
                                    merged17.name = "RowGenerator.generate()";
                                    merged[16] = merged17;
                                    if (typeof tmp24 === "function") {
                                      const merged18 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                      merged18.emoji = "\u{1F5A5}\uFE0F";
                                      merged18.name = "Display Cached Messages";
                                      merged18.onlyOnce = false;
                                      merged18.alwaysRecord = true;
                                      merged[17] = merged18;
                                      if (typeof tmp24 === "function") {
                                        const merged19 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                        merged19.emoji = "\u{1F3A8}";
                                        merged19.name = "First Render after Ready Payload";
                                        merged19.onlyOnce = true;
                                        merged19.alwaysRecord = false;
                                        merged[18] = merged19;
                                        if (typeof tmp24 === "function") {
                                          const merged20 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                          merged20.emoji = "\u{1F3A8}";
                                          merged20.name = "React Render Latest Messages";
                                          merged20.onlyOnce = false;
                                          merged20.alwaysRecord = false;
                                          merged[19] = merged20;
                                          if (typeof tmp24 === "function") {
                                            const merged21 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                            merged21.emoji = "\u{1F5A5}\uFE0F";
                                            merged21.name = "Display Latest Messages";
                                            merged21.onlyOnce = false;
                                            merged21.alwaysRecord = false;
                                            merged[20] = merged21;
                                            if (typeof tmp === "function") {
                                              const merged22 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                              merged22.emoji = "\u{1F310}";
                                              merged22.name = "Initial Guild";
                                              merged[21] = merged22;
                                              if (typeof tmp === "function") {
                                                const merged23 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                merged23.emoji = "\u{1F4BE}";
                                                merged23.name = "Load Lazy Cache";
                                                merged[22] = merged23;
                                                if (typeof tmp === "function") {
                                                  const merged24 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                  merged24.emoji = "\u{1F4BE}";
                                                  merged24.name = "Fetch Lazy Cache";
                                                  merged[23] = merged24;
                                                  if (typeof tmp === "function") {
                                                    const merged25 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                    merged25.emoji = "\u{1F4BE}";
                                                    merged25.name = "Parse Lazy Cache";
                                                    merged[24] = merged25;
                                                    if (typeof tmp === "function") {
                                                      const merged26 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                      merged26.emoji = "\u{1F4BE}";
                                                      merged26.name = "Fetch Stale Channels";
                                                      merged[25] = merged26;
                                                      if (typeof tmp === "function") {
                                                        const merged27 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                        merged27.emoji = "\u{1F4BE}";
                                                        merged27.name = "Deserialize Cache";
                                                        merged[26] = merged27;
                                                        if (typeof tmp === "function") {
                                                          const merged28 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                          merged28.emoji = "\u{1F4BE}";
                                                          merged28.name = "Dispatch Lazy Cache";
                                                          merged[27] = merged28;
                                                          if (typeof tmp === "function") {
                                                            const merged29 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                            merged29.emoji = "\u{1F310}";
                                                            merged29.name = "Parse READY";
                                                            merged[28] = merged29;
                                                            if (typeof tmp === "function") {
                                                              const merged30 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                              merged30.emoji = "\u{1F310}";
                                                              merged30.name = "READY";
                                                              merged[29] = merged30;
                                                              if (typeof tmp === "function") {
                                                                const merged31 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                                merged31.emoji = "\u{1F310}";
                                                                merged31.name = "Hydrate READY";
                                                                merged[30] = merged31;
                                                                if (typeof tmp === "function") {
                                                                  const merged32 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                                  merged32.emoji = "\u{1F310}";
                                                                  merged32.name = "Dispatch READY";
                                                                  merged[31] = merged32;
                                                                  if (typeof tmp === "function") {
                                                                    const merged33 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                                    merged33.emoji = "\u{1F310}";
                                                                    merged33.name = "Parse READY Supplemental";
                                                                    merged[32] = merged33;
                                                                    if (typeof tmp === "function") {
                                                                      const merged34 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                                      merged34.emoji = "\u{1F310}";
                                                                      merged34.name = "READY Supplemental";
                                                                      merged[33] = merged34;
                                                                      if (typeof tmp === "function") {
                                                                        const merged35 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                                        merged35.emoji = "\u{1F310}";
                                                                        merged35.name = "Hydrate READY Supplemental";
                                                                        merged[34] = merged35;
                                                                        if (typeof tmp === "function") {
                                                                          const merged36 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                                          merged36.emoji = "\u{1F310}";
                                                                          merged36.name = "Dispatch READY Supplemental";
                                                                          merged[35] = merged36;
                                                                          if (typeof tmp === "function") {
                                                                            const merged37 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                                            merged37.emoji = "\u{1F310}";
                                                                            merged37.name = "Fetch messages";
                                                                            merged[36] = merged37;
                                                                            if (typeof tmp === "function") {
                                                                              const merged38 = Object.assign({ start_: 0, startNumImports: 0, startImportTime: 0, end_: 0, endNumImports: 0, endImportTime: 0 });
                                                                              merged38.emoji = "\u{1F310}";
                                                                              merged38.name = "Dispatch messages";
                                                                              merged[37] = merged38;
                                                                              if (typeof TTIImportEvent === "function") {
                                                                                const obj = { polyfillsEnd: Object.assign({ time_: 0 }), sentryEnd: null, appStateChangeStart: null, appStateChangeEnd: null, loadMiniCacheStart: null, loadStorageStart: null, loadStorageEnd: null };
                                                                                if (typeof tmp79 === "function") {
                                                                                  obj.sentryEnd = Object.assign({ time_: 0 });
                                                                                  if (typeof tmp79 === "function") {
                                                                                    obj.appStateChangeStart = Object.assign({ time_: 0 });
                                                                                    if (typeof tmp79 === "function") {
                                                                                      obj.appStateChangeEnd = Object.assign({ time_: 0 });
                                                                                      if (typeof tmp79 === "function") {
                                                                                        obj.loadMiniCacheStart = Object.assign({ time_: 0 });
                                                                                        if (typeof tmp79 === "function") {
                                                                                          obj.loadStorageStart = Object.assign({ time_: 0 });
                                                                                          if (typeof tmp79 === "function") {
                                                                                            obj.loadStorageEnd = Object.assign({ time_: 0 });
                                                                                            merged[38] = obj;
                                                                                            return merged;
                                                                                          } else {
                                                                                            throw new TypeError("Trying to call a non-function");
                                                                                          }
                                                                                        } else {
                                                                                          throw new TypeError("Trying to call a non-function");
                                                                                        }
                                                                                      } else {
                                                                                        throw new TypeError("Trying to call a non-function");
                                                                                      }
                                                                                    } else {
                                                                                      throw new TypeError("Trying to call a non-function");
                                                                                    }
                                                                                  } else {
                                                                                    throw new TypeError("Trying to call a non-function");
                                                                                  }
                                                                                } else {
                                                                                  throw new TypeError("Trying to call a non-function");
                                                                                }
                                                                              } else {
                                                                                throw new TypeError("Trying to call a non-function");
                                                                              }
                                                                            } else {
                                                                              throw new TypeError("Trying to call a non-function");
                                                                            }
                                                                          } else {
                                                                            throw new TypeError("Trying to call a non-function");
                                                                          }
                                                                        } else {
                                                                          throw new TypeError("Trying to call a non-function");
                                                                        }
                                                                      } else {
                                                                        throw new TypeError("Trying to call a non-function");
                                                                      }
                                                                    } else {
                                                                      throw new TypeError("Trying to call a non-function");
                                                                    }
                                                                  } else {
                                                                    throw new TypeError("Trying to call a non-function");
                                                                  }
                                                                } else {
                                                                  throw new TypeError("Trying to call a non-function");
                                                                }
                                                              } else {
                                                                throw new TypeError("Trying to call a non-function");
                                                              }
                                                            } else {
                                                              throw new TypeError("Trying to call a non-function");
                                                            }
                                                          } else {
                                                            throw new TypeError("Trying to call a non-function");
                                                          }
                                                        } else {
                                                          throw new TypeError("Trying to call a non-function");
                                                        }
                                                      } else {
                                                        throw new TypeError("Trying to call a non-function");
                                                      }
                                                    } else {
                                                      throw new TypeError("Trying to call a non-function");
                                                    }
                                                  } else {
                                                    throw new TypeError("Trying to call a non-function");
                                                  }
                                                } else {
                                                  throw new TypeError("Trying to call a non-function");
                                                }
                                              } else {
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            } else {
                                              throw new TypeError("Trying to call a non-function");
                                            }
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
  closure_0 = arg0;
  loggerCallback = function loggerCallback() {
    if (true === closure_0()) {
      loggerCallback = function loggerCallback() {
        return false;
      };
    }
  };
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
prototype5["addLocalMessages"] = function addLocalMessages(arg0, length) {
  let size;
  const self = this;
  const cachedChannelCounts = this.cachedChannelCounts;
  const result = cachedChannelCounts.set(arg0, length);
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
prototype5["recordRender"] = function recordRender(length, GatewayConnectionStore) {
  const self = this;
  const renderMessages = this.renderMessages;
  renderMessages.record();
  let tmp2 = GatewayConnectionStore;
  if (!GatewayConnectionStore) {
    tmp2 = length > 0;
  }
  if (tmp2) {
    const renderMessagesWithCache = self.renderMessagesWithCache;
    renderMessagesWithCache.record();
  }
  if (GatewayConnectionStore) {
    const renderLatestMessages = self.renderLatestMessages;
    renderLatestMessages.record();
  }
};
prototype5["recordMessageRender"] = function recordMessageRender(channelId, mapped, hasFetched, hasMoreAfter) {
  const self = this;
  const _default = SnowflakeUtils.default;
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
              const length = mapped.filter((item) => {
                const cachedMessageIds = self.cachedMessageIds;
                let hasItem;
                if (cachedMessageIds != null) {
                  hasItem = cachedMessageIds.includes(item);
                }
                return hasItem;
              }).length;
              const cachedChannelCounts = self.cachedChannelCounts;
              value = cachedChannelCounts.get(channelId);
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
prototype5["processNativeLogs"] = function processNativeLogs(nativeLogs, arg1) {
  const self = this;
  const startTime = this.getStartTime(arg1);
  const iter = nativeLogs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    switch (nextResult.label) {
      case "Finish MainApplication.initialize()":
        self.extraProperties.time_main_application_initialize_end = serialize(startTime, tmp3.timestamp);
        continue;
      break;
      case "GET_REACT_INSTANCE_MANAGER_START":
        self.extraProperties.time_get_react_instance_manager_start = serialize(startTime, tmp3.timestamp);
      break;
      case "GET_REACT_INSTANCE_MANAGER_END":
        self.extraProperties.time_get_react_instance_manager_end = serialize(startTime, tmp3.timestamp);
      break;
      case "PROCESS_PACKAGES_START":
        self.extraProperties.time_process_packages_start = serialize(startTime, tmp3.timestamp);
      break;
      case "PROCESS_PACKAGES_END":
        self.extraProperties.time_process_packages_end = serialize(startTime, tmp3.timestamp);
      break;
      case "CREATE_CATALYST_INSTANCE_START":
        self.extraProperties.time_create_catalyst_instance_start = serialize(startTime, tmp3.timestamp);
      break;
      case "CREATE_CATALYST_INSTANCE_END":
        self.extraProperties.time_create_catalyst_instance_end = serialize(startTime, tmp3.timestamp);
      break;
      case "CREATE_UI_MANAGER_MODULE_START":
        self.extraProperties.time_create_ui_manager_module_start = serialize(startTime, tmp3.timestamp);
      break;
      case "CREATE_UI_MANAGER_MODULE_END":
        self.extraProperties.time_create_ui_manager_module_end = serialize(startTime, tmp3.timestamp);
      break;
      case "REACT_BRIDGE_LOADING_START":
        self.extraProperties.time_react_bridge_loading_start = serialize(startTime, tmp3.timestamp);
      break;
      case "REACT_BRIDGE_LOADING_END":
        self.extraProperties.time_react_bridge_loading_end = serialize(startTime, tmp3.timestamp);
      break;
      case "CacheStorage Init Start":
        self.extraProperties.time_init_native_storage_start = serialize(startTime, tmp3.timestamp);
      break;
      case "CacheStorage Init End":
        self.extraProperties.time_init_native_storage_end = serialize(startTime, tmp3.timestamp);
      break;
      case "RUN_JS_BUNDLE_START":
        self.extraProperties.time_before_js_bundle_start = serialize(startTime, tmp3.timestamp);
      break;
      case "ChatModule.updateRows() Start":
        if (null != self.extraProperties.time_first_native_message_render_start) {
          continue;
        } else {
          self.extraProperties.time_first_native_message_render_start = serialize(startTime, tmp3.timestamp);
        }
      break;
      case "ChatModule.updateRows() Finish":
        if (null != self.extraProperties.time_first_native_message_render_end) {
          continue;
        } else {
          self.extraProperties.time_first_native_message_render_end = serialize(startTime, tmp3.timestamp);
        }
      break;
    }
  }
};
prototype5["serializeAppStartupMetrics"] = function serializeAppStartupMetrics() {
  return { ready_packing_algorithm: this.readyProperties.packing_algorithm, ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms };
};
prototype5["serializeWebPerfStartupMetrics"] = function serializeWebPerfStartupMetrics(arg0) {
  const obj = {};
  const merged = Object.assign(this.serializeAppStartupMetrics());
  ({ wasAuthenticated: obj.was_authenticated, firstRenderAfterReadyPayload } = this);
  obj.time_first_render_after_ready_end = firstRenderAfterReadyPayload.serialize(arg0);
  return obj;
};
prototype5["serializeTTITracker"] = function serializeTTITracker(arg0) {
  const self = this;
  const startTime = this.getStartTime(arg0);
  const found = _mod12(AppStartPerformanceDefault.logGroups[0].logs).filter((log) => {
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
  const tmp2Result = _mod12(AppStartPerformanceDefault.logGroups[0].logs);
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
let size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/TTITracker.tsx");

export default tTITracker;