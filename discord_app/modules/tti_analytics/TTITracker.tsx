// discord_app/modules/tti_analytics/TTITracker.tsx
import _modAll2 from "../../../_runtime/metro/00002__.js";
import AppStartPerformanceDefault from "../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import SnowflakeUtils from "../../utils/SnowflakeUtils.tsx";
import _mod12 from "../../../_runtime/metro/00012__.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";

const size_mod = _modAll2;
let c3, log;

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
function loggerCallback() {}
global.__timingFunction = () => performance.now();
let closure_7 = null == global.__getTotalRequireTime ? () => 0 : () => global.__getTotalRequireTime();
class TTITimer {
  constructor(emoji, name) {
    const merged = Object.assign({
      start_: 0,
      startNumImports: 0,
      startImportTime: 0,
      end_: 0,
      endNumImports: 0,
      endImportTime: 0,
    });
    merged.emoji = emoji;
    merged.name = name;
    return merged;
  }
  hasStart() {
    return this.start_ > 0;
  }
  hasData() {
    return this.end_ > 0;
  }
  recordStart() {
    const self = this;
    if (0 === this.start_) {
      self.recordStart_();
    }
    const obj = AppStartPerformanceDefault;
    obj.mark(self.emoji, "Start " + self.name);
    loggerCallback();
  }
  recordStart_() {
    this.start_ = Date.now();
    const obj = _modAll2;
    this.startNumImports = obj.size();
    this.startImportTime = closure_7();
  }
  recordEnd() {
    const self = this;
    if (0 === this.end_) {
      if (0 !== self.start_) {
        self.recordEnd_();
        const _HermesInternal = HermesInternal;
        const obj2 = AppStartPerformanceDefault;
        obj2.mark(self.emoji, "Finish " + self.name, self.end_ - self.start_);
      }
      loggerCallback();
    }
    const obj = AppStartPerformanceDefault;
    obj.mark(self.emoji, "Finish " + self.name);
  }
  recordEnd_() {
    this.end_ = Date.now();
    const obj = _modAll2;
    this.endNumImports = obj.size();
    this.endImportTime = closure_7();
  }
  set(start_, arg1) {
    const self = this;
    if (0 === this.start_) {
      self.start_ = start_;
      self.end_ = start_ + arg1;
      const obj = _modAll2;
      self.endNumImports = obj.size();
      self.endImportTime = closure_7();
    }
    const obj2 = AppStartPerformanceDefault;
    obj2.mark(self.emoji, self.name, arg1);
    loggerCallback();
  }
  serializeStart(startTime) {
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
  }
  serializeEnd(startTime) {
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
  }
  measure(arg0) {
    const self = this;
    if (this.start_ > 0) {
      const obj2 = AppStartPerformanceDefault;
      return obj2.time(self.emoji, self.name, arg0);
    } else {
      self.recordStart_();
      const obj = AppStartPerformanceDefault;
      const timeResult = obj.time(self.emoji, self.name, arg0);
      self.recordEnd_();
      loggerCallback();
      return timeResult;
    }
  }
  measureAsync(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      let obj5;
      let v1;
      let value;
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
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp4;
              value = undefined;
              if (self.start_ > 0) {
                c3 = 3;
                const obj6 = { value: obj5.timeAsync(self.emoji, self.name, value), done: true };
                obj5 = v1(dependencyMap[1]);
                return obj6;
              } else {
                self.recordStart_();
                const obj3 = v1(dependencyMap[1]);
                v1 = 1;
                c3 = 1;
                const obj7 = { value: obj3.timeAsync(self.emoji, self.name, value), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_129_1.recordEnd_();
            loggerCallback();
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp23) {
          c3 = 3;
          throw tmp23;
        }
      }
    })();
  }
  measureAsyncWithoutNesting(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      let obj4;
      let v1;
      let value;
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
          let tmp;
          c3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              value = undefined;
              if (self.start_ > 0) {
                c3 = 3;
                const obj5 = { value: obj4.timeAsync(self.emoji, self.name, tmp), done: true };
                obj4 = v1(dependencyMap[1]);
                return obj5;
              } else {
                self.recordStart_();
                const _Date2 = Date;
                tmp = Date.now();
                const _HermesInternal2 = HermesInternal;
                const obj8 = v1(dependencyMap[1]);
                obj8.mark(self.emoji, "Start " + self.name);
                v1 = 1;
                c3 = 1;
                const obj6 = { value: tmp(), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const _HermesInternal = HermesInternal;
            const mark = v1(dependencyMap[1]).mark;
            const emoji = closure_129_1.emoji;
            const _Date = Date;
            const tmp18 = v1(dependencyMap[1]);
            const combined = "Finish " + closure_129_1.name;
            mark(emoji, combined, Date.now() - tmp);
            closure_129_1.recordEnd_();
            loggerCallback();
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp10) {
          c3 = 3;
          throw tmp10;
        }
      }
    })();
  }
}
const prototype = TTITimer.prototype;
Object.defineProperty(prototype, "start", {
  get: function start() {
    return this.start_;
  },
  set: undefined,
});
Object.defineProperty(prototype, "end", {
  get: function end() {
    return this.end_;
  },
  set: undefined,
});
class TTIEvent {
  constructor(emoji, name) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let flag2 = arg3;
    if (arg3 === undefined) {
      flag2 = false;
    }
    const merged = Object.assign({ time_: 0, numImports: null, importTime: 0 });
    merged.emoji = emoji;
    merged.name = name;
    merged.onlyOnce = flag;
    merged.alwaysRecord = flag2;
    return merged;
  }
  record() {
    let timestamp;
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
        const obj = AppStartPerformanceDefault;
        obj.mark(self.emoji, self.name);
      }
    }
    loggerCallback();
  }
  recordState_(timestamp) {
    this.time_ = timestamp;
    const obj = _modAll2;
    this.numImports = obj.size();
    this.importTime = closure_7();
    const obj2 = AppStartPerformanceDefault;
    obj2.mark(this.emoji, this.name);
  }
  hasData() {
    return this.time_ > 0;
  }
  serialize(arg0) {
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
  }
}
Object.defineProperty(TTIEvent.prototype, "time", {
  get: function time() {
    return this.time_;
  },
  set: undefined,
});
class TTIImportEvent {
  constructor() {
    return Object.assign({ time_: 0 });
  }
  record() {
    if (0 === this.time_) {
      tmp.time_ = closure_7();
    }
  }
}
Object.defineProperty(TTIImportEvent.prototype, "time", {
  get: function time() {
    return this.time_;
  },
  set: undefined,
});
class TTITrackers {
  constructor() {
    if (typeof TTITimer === "function") {
      const merged = Object.assign({
        loadIndex: null,
        loadFastConnectNativeModule: null,
        beginFastConnect: null,
        loadImports: null,
        init: null,
        loadStorage: null,
        parseStorage: null,
        loadMiniCache: null,
        fetchGuildCache: null,
        fetchGuildChannelsCache: null,
        loadCachedMessages: null,
        renderApp: null,
        renderAppEffect: null,
        firstContentfulPaint: null,
        renderMessages: null,
        renderMessagesWithCache: null,
        firstRowGenerator: null,
        displayMessagesWithCache: null,
        firstRenderAfterReadyPayload: null,
        renderLatestMessages: null,
        displayLatestMessages: null,
        initialGuild: null,
        loadLazyCache: null,
        fetchLazyCache: null,
        parseLazyCache: null,
        fetchStaleChannels: null,
        deserializeCache: null,
        dispatchLazyCache: null,
        parseReady: null,
        ready: null,
        hydrateReady: null,
        dispatchReady: null,
        parseReadySupplemental: null,
        readySupplemental: null,
        hydrateReadySupplemental: null,
        dispatchReadySupplemental: null,
        fetchMessages: null,
        dispatchMessages: null,
        imports: null,
      });
      const merged1 = Object.assign({
        start_: 0,
        startNumImports: 0,
        startImportTime: 0,
        end_: 0,
        endNumImports: 0,
        endImportTime: 0,
      });
      merged1.emoji = "\u2757";
      merged1.name = "Load index.tsx";
      merged[0] = merged1;
      const self = this;
      if (typeof TTITimer === "function") {
        const merged2 = Object.assign({
          start_: 0,
          startNumImports: 0,
          startImportTime: 0,
          end_: 0,
          endNumImports: 0,
          endImportTime: 0,
        });
        merged2.emoji = "\u{1F4BE}";
        merged2.name = "Load fast_connect native module";
        merged[1] = merged2;
        const self2 = this;
        if (typeof TTITimer === "function") {
          const merged3 = Object.assign({
            start_: 0,
            startNumImports: 0,
            startImportTime: 0,
            end_: 0,
            endNumImports: 0,
            endImportTime: 0,
          });
          merged3.emoji = "\u{1F310}";
          merged3.name = "Fast Connect IDENTIFY";
          merged[2] = merged3;
          const self3 = this;
          if (typeof TTITimer === "function") {
            const merged4 = Object.assign({
              start_: 0,
              startNumImports: 0,
              startImportTime: 0,
              end_: 0,
              endNumImports: 0,
              endImportTime: 0,
            });
            merged4.emoji = "\u{1F3C3}";
            merged4.name = "Load Imports";
            merged[3] = merged4;
            const self4 = this;
            if (typeof TTITimer === "function") {
              const merged5 = Object.assign({
                start_: 0,
                startNumImports: 0,
                startImportTime: 0,
                end_: 0,
                endNumImports: 0,
                endImportTime: 0,
              });
              merged5.emoji = "\u{1F3C3}";
              merged5.name = "Initial Initialization";
              merged[4] = merged5;
              const self5 = this;
              if (typeof TTITimer === "function") {
                const merged6 = Object.assign({
                  start_: 0,
                  startNumImports: 0,
                  startImportTime: 0,
                  end_: 0,
                  endNumImports: 0,
                  endImportTime: 0,
                });
                merged6.emoji = "\u{1F4BE}";
                merged6.name = "Load Storage";
                merged[5] = merged6;
                const self6 = this;
                if (typeof TTITimer === "function") {
                  const merged7 = Object.assign({
                    start_: 0,
                    startNumImports: 0,
                    startImportTime: 0,
                    end_: 0,
                    endNumImports: 0,
                    endImportTime: 0,
                  });
                  merged7.emoji = "\u{1F4BE}";
                  merged7.name = "Parse Storage";
                  merged[6] = merged7;
                  const self7 = this;
                  if (typeof TTITimer === "function") {
                    const merged8 = Object.assign({
                      start_: 0,
                      startNumImports: 0,
                      startImportTime: 0,
                      end_: 0,
                      endNumImports: 0,
                      endImportTime: 0,
                    });
                    merged8.emoji = "\u{1F4BE}";
                    merged8.name = "Load Mini Cache";
                    merged[7] = merged8;
                    const self8 = this;
                    if (typeof TTITimer === "function") {
                      const merged9 = Object.assign({
                        start_: 0,
                        startNumImports: 0,
                        startImportTime: 0,
                        end_: 0,
                        endNumImports: 0,
                        endImportTime: 0,
                      });
                      merged9.emoji = "\u{1F4BE}";
                      merged9.name = "Fetch Guild Cache";
                      merged[8] = merged9;
                      const self9 = this;
                      if (typeof TTITimer === "function") {
                        const merged10 = Object.assign({
                          start_: 0,
                          startNumImports: 0,
                          startImportTime: 0,
                          end_: 0,
                          endNumImports: 0,
                          endImportTime: 0,
                        });
                        merged10.emoji = "\u{1F4BE}";
                        merged10.name = "Fetch Initial Guild Channels Cache";
                        merged[9] = merged10;
                        const self10 = this;
                        if (typeof TTITimer === "function") {
                          const merged11 = Object.assign({
                            start_: 0,
                            startNumImports: 0,
                            startImportTime: 0,
                            end_: 0,
                            endNumImports: 0,
                            endImportTime: 0,
                          });
                          merged11.emoji = "\u{1F4BE}";
                          merged11.name = "Load Cached Messages";
                          merged[10] = merged11;
                          const self11 = this;
                          if (typeof TTIEvent === "function") {
                            const merged12 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                            merged12.emoji = "\u{1F3A8}";
                            merged12.name = "First React Render";
                            merged12.onlyOnce = false;
                            merged12.alwaysRecord = false;
                            merged[11] = merged12;
                            const self12 = this;
                            if (typeof TTIEvent === "function") {
                              const merged13 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                              merged13.emoji = "\u{1F3A8}";
                              merged13.name = "First React Render useEffect";
                              merged13.onlyOnce = false;
                              merged13.alwaysRecord = false;
                              merged[12] = merged13;
                              const self13 = this;
                              if (typeof TTIEvent === "function") {
                                const merged14 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                merged14.emoji = "\u{1F3A8}";
                                merged14.name = "First Contentful Paint";
                                merged14.onlyOnce = false;
                                merged14.alwaysRecord = true;
                                merged[13] = merged14;
                                const self14 = this;
                                if (typeof TTIEvent === "function") {
                                  const merged15 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                  merged15.emoji = "\u{1F3A8}";
                                  merged15.name = "React Render Messages";
                                  merged15.onlyOnce = true;
                                  merged15.alwaysRecord = false;
                                  merged[14] = merged15;
                                  const self15 = this;
                                  if (typeof TTIEvent === "function") {
                                    const merged16 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                    merged16.emoji = "\u{1F3A8}";
                                    merged16.name = "React Render Cached Messages";
                                    merged16.onlyOnce = true;
                                    merged16.alwaysRecord = false;
                                    merged[15] = merged16;
                                    const self16 = this;
                                    if (typeof TTITimer === "function") {
                                      const merged17 = Object.assign({
                                        start_: 0,
                                        startNumImports: 0,
                                        startImportTime: 0,
                                        end_: 0,
                                        endNumImports: 0,
                                        endImportTime: 0,
                                      });
                                      merged17.emoji = "\u{1F3A8}";
                                      merged17.name = "RowGenerator.generate()";
                                      merged[16] = merged17;
                                      const self17 = this;
                                      if (typeof TTIEvent === "function") {
                                        const merged18 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                        merged18.emoji = "\u{1F5A5}\uFE0F";
                                        merged18.name = "Display Cached Messages";
                                        merged18.onlyOnce = false;
                                        merged18.alwaysRecord = true;
                                        merged[17] = merged18;
                                        const self18 = this;
                                        if (typeof TTIEvent === "function") {
                                          const merged19 = Object.assign({ time_: 0, numImports: null, importTime: 0 });
                                          merged19.emoji = "\u{1F3A8}";
                                          merged19.name = "First Render after Ready Payload";
                                          merged19.onlyOnce = true;
                                          merged19.alwaysRecord = false;
                                          merged[18] = merged19;
                                          const self19 = this;
                                          if (typeof TTIEvent === "function") {
                                            const merged20 = Object.assign({
                                              time_: 0,
                                              numImports: null,
                                              importTime: 0,
                                            });
                                            merged20.emoji = "\u{1F3A8}";
                                            merged20.name = "React Render Latest Messages";
                                            merged20.onlyOnce = false;
                                            merged20.alwaysRecord = false;
                                            merged[19] = merged20;
                                            const self20 = this;
                                            if (typeof TTIEvent === "function") {
                                              const merged21 = Object.assign({
                                                time_: 0,
                                                numImports: null,
                                                importTime: 0,
                                              });
                                              merged21.emoji = "\u{1F5A5}\uFE0F";
                                              merged21.name = "Display Latest Messages";
                                              merged21.onlyOnce = false;
                                              merged21.alwaysRecord = false;
                                              merged[20] = merged21;
                                              const self21 = this;
                                              if (typeof TTITimer === "function") {
                                                const merged22 = Object.assign({
                                                  start_: 0,
                                                  startNumImports: 0,
                                                  startImportTime: 0,
                                                  end_: 0,
                                                  endNumImports: 0,
                                                  endImportTime: 0,
                                                });
                                                merged22.emoji = "\u{1F310}";
                                                merged22.name = "Initial Guild";
                                                merged[21] = merged22;
                                                const self22 = this;
                                                if (typeof TTITimer === "function") {
                                                  const merged23 = Object.assign({
                                                    start_: 0,
                                                    startNumImports: 0,
                                                    startImportTime: 0,
                                                    end_: 0,
                                                    endNumImports: 0,
                                                    endImportTime: 0,
                                                  });
                                                  merged23.emoji = "\u{1F4BE}";
                                                  merged23.name = "Load Lazy Cache";
                                                  merged[22] = merged23;
                                                  const self23 = this;
                                                  if (typeof TTITimer === "function") {
                                                    const merged24 = Object.assign({
                                                      start_: 0,
                                                      startNumImports: 0,
                                                      startImportTime: 0,
                                                      end_: 0,
                                                      endNumImports: 0,
                                                      endImportTime: 0,
                                                    });
                                                    merged24.emoji = "\u{1F4BE}";
                                                    merged24.name = "Fetch Lazy Cache";
                                                    merged[23] = merged24;
                                                    const self24 = this;
                                                    if (typeof TTITimer === "function") {
                                                      const merged25 = Object.assign({
                                                        start_: 0,
                                                        startNumImports: 0,
                                                        startImportTime: 0,
                                                        end_: 0,
                                                        endNumImports: 0,
                                                        endImportTime: 0,
                                                      });
                                                      merged25.emoji = "\u{1F4BE}";
                                                      merged25.name = "Parse Lazy Cache";
                                                      merged[24] = merged25;
                                                      const self25 = this;
                                                      if (typeof TTITimer === "function") {
                                                        const merged26 = Object.assign({
                                                          start_: 0,
                                                          startNumImports: 0,
                                                          startImportTime: 0,
                                                          end_: 0,
                                                          endNumImports: 0,
                                                          endImportTime: 0,
                                                        });
                                                        merged26.emoji = "\u{1F4BE}";
                                                        merged26.name = "Fetch Stale Channels";
                                                        merged[25] = merged26;
                                                        const self26 = this;
                                                        if (typeof TTITimer === "function") {
                                                          const merged27 = Object.assign({
                                                            start_: 0,
                                                            startNumImports: 0,
                                                            startImportTime: 0,
                                                            end_: 0,
                                                            endNumImports: 0,
                                                            endImportTime: 0,
                                                          });
                                                          merged27.emoji = "\u{1F4BE}";
                                                          merged27.name = "Deserialize Cache";
                                                          merged[26] = merged27;
                                                          const self27 = this;
                                                          if (typeof TTITimer === "function") {
                                                            const merged28 = Object.assign({
                                                              start_: 0,
                                                              startNumImports: 0,
                                                              startImportTime: 0,
                                                              end_: 0,
                                                              endNumImports: 0,
                                                              endImportTime: 0,
                                                            });
                                                            merged28.emoji = "\u{1F4BE}";
                                                            merged28.name = "Dispatch Lazy Cache";
                                                            merged[27] = merged28;
                                                            const self28 = this;
                                                            if (typeof TTITimer === "function") {
                                                              const merged29 = Object.assign({
                                                                start_: 0,
                                                                startNumImports: 0,
                                                                startImportTime: 0,
                                                                end_: 0,
                                                                endNumImports: 0,
                                                                endImportTime: 0,
                                                              });
                                                              merged29.emoji = "\u{1F310}";
                                                              merged29.name = "Parse READY";
                                                              merged[28] = merged29;
                                                              const self29 = this;
                                                              if (typeof TTITimer === "function") {
                                                                const merged30 = Object.assign({
                                                                  start_: 0,
                                                                  startNumImports: 0,
                                                                  startImportTime: 0,
                                                                  end_: 0,
                                                                  endNumImports: 0,
                                                                  endImportTime: 0,
                                                                });
                                                                merged30.emoji = "\u{1F310}";
                                                                merged30.name = "READY";
                                                                merged[29] = merged30;
                                                                const self30 = this;
                                                                if (typeof TTITimer === "function") {
                                                                  const merged31 = Object.assign({
                                                                    start_: 0,
                                                                    startNumImports: 0,
                                                                    startImportTime: 0,
                                                                    end_: 0,
                                                                    endNumImports: 0,
                                                                    endImportTime: 0,
                                                                  });
                                                                  merged31.emoji = "\u{1F310}";
                                                                  merged31.name = "Hydrate READY";
                                                                  merged[30] = merged31;
                                                                  const self31 = this;
                                                                  if (typeof TTITimer === "function") {
                                                                    const merged32 = Object.assign({
                                                                      start_: 0,
                                                                      startNumImports: 0,
                                                                      startImportTime: 0,
                                                                      end_: 0,
                                                                      endNumImports: 0,
                                                                      endImportTime: 0,
                                                                    });
                                                                    merged32.emoji = "\u{1F310}";
                                                                    merged32.name = "Dispatch READY";
                                                                    merged[31] = merged32;
                                                                    const self32 = this;
                                                                    if (typeof TTITimer === "function") {
                                                                      const merged33 = Object.assign({
                                                                        start_: 0,
                                                                        startNumImports: 0,
                                                                        startImportTime: 0,
                                                                        end_: 0,
                                                                        endNumImports: 0,
                                                                        endImportTime: 0,
                                                                      });
                                                                      merged33.emoji = "\u{1F310}";
                                                                      merged33.name = "Parse READY Supplemental";
                                                                      merged[32] = merged33;
                                                                      const self33 = this;
                                                                      if (typeof TTITimer === "function") {
                                                                        const merged34 = Object.assign({
                                                                          start_: 0,
                                                                          startNumImports: 0,
                                                                          startImportTime: 0,
                                                                          end_: 0,
                                                                          endNumImports: 0,
                                                                          endImportTime: 0,
                                                                        });
                                                                        merged34.emoji = "\u{1F310}";
                                                                        merged34.name = "READY Supplemental";
                                                                        merged[33] = merged34;
                                                                        const self34 = this;
                                                                        if (typeof TTITimer === "function") {
                                                                          const merged35 = Object.assign({
                                                                            start_: 0,
                                                                            startNumImports: 0,
                                                                            startImportTime: 0,
                                                                            end_: 0,
                                                                            endNumImports: 0,
                                                                            endImportTime: 0,
                                                                          });
                                                                          merged35.emoji = "\u{1F310}";
                                                                          merged35.name = "Hydrate READY Supplemental";
                                                                          merged[34] = merged35;
                                                                          const self35 = this;
                                                                          if (typeof TTITimer === "function") {
                                                                            const merged36 = Object.assign({
                                                                              start_: 0,
                                                                              startNumImports: 0,
                                                                              startImportTime: 0,
                                                                              end_: 0,
                                                                              endNumImports: 0,
                                                                              endImportTime: 0,
                                                                            });
                                                                            merged36.emoji = "\u{1F310}";
                                                                            merged36.name =
                                                                              "Dispatch READY Supplemental";
                                                                            merged[35] = merged36;
                                                                            const self36 = this;
                                                                            if (typeof TTITimer === "function") {
                                                                              const merged37 = Object.assign({
                                                                                start_: 0,
                                                                                startNumImports: 0,
                                                                                startImportTime: 0,
                                                                                end_: 0,
                                                                                endNumImports: 0,
                                                                                endImportTime: 0,
                                                                              });
                                                                              merged37.emoji = "\u{1F310}";
                                                                              merged37.name = "Fetch messages";
                                                                              merged[36] = merged37;
                                                                              const self37 = this;
                                                                              if (typeof TTITimer === "function") {
                                                                                const merged38 = Object.assign({
                                                                                  start_: 0,
                                                                                  startNumImports: 0,
                                                                                  startImportTime: 0,
                                                                                  end_: 0,
                                                                                  endNumImports: 0,
                                                                                  endImportTime: 0,
                                                                                });
                                                                                merged38.emoji = "\u{1F310}";
                                                                                merged38.name = "Dispatch messages";
                                                                                merged[37] = merged38;
                                                                                const self38 = this;
                                                                                if (
                                                                                  typeof TTIImportEvent === "function"
                                                                                ) {
                                                                                  const obj = {
                                                                                    polyfillsEnd: Object.assign({
                                                                                      time_: 0,
                                                                                    }),
                                                                                    sentryEnd: null,
                                                                                    appStateChangeStart: null,
                                                                                    appStateChangeEnd: null,
                                                                                    loadMiniCacheStart: null,
                                                                                    loadStorageStart: null,
                                                                                    loadStorageEnd: null,
                                                                                  };
                                                                                  const self39 = this;
                                                                                  if (
                                                                                    typeof TTIImportEvent === "function"
                                                                                  ) {
                                                                                    obj.sentryEnd = Object.assign({
                                                                                      time_: 0,
                                                                                    });
                                                                                    const self40 = this;
                                                                                    if (
                                                                                      typeof TTIImportEvent ===
                                                                                      "function"
                                                                                    ) {
                                                                                      obj.appStateChangeStart =
                                                                                        Object.assign({ time_: 0 });
                                                                                      const self41 = this;
                                                                                      if (
                                                                                        typeof TTIImportEvent ===
                                                                                        "function"
                                                                                      ) {
                                                                                        obj.appStateChangeEnd =
                                                                                          Object.assign({ time_: 0 });
                                                                                        const self42 = this;
                                                                                        if (
                                                                                          typeof TTIImportEvent ===
                                                                                          "function"
                                                                                        ) {
                                                                                          obj.loadMiniCacheStart =
                                                                                            Object.assign({ time_: 0 });
                                                                                          const self43 = this;
                                                                                          if (
                                                                                            typeof TTIImportEvent ===
                                                                                            "function"
                                                                                          ) {
                                                                                            obj.loadStorageStart =
                                                                                              Object.assign({
                                                                                                time_: 0,
                                                                                              });
                                                                                            const self44 = this;
                                                                                            if (
                                                                                              typeof TTIImportEvent ===
                                                                                              "function"
                                                                                            ) {
                                                                                              obj.loadStorageEnd =
                                                                                                Object.assign({
                                                                                                  time_: 0,
                                                                                                });
                                                                                              merged[38] = obj;
                                                                                              return merged;
                                                                                            } else {
                                                                                              throw new TypeError(
                                                                                                "Trying to call a non-function",
                                                                                              );
                                                                                            }
                                                                                          } else {
                                                                                            throw new TypeError(
                                                                                              "Trying to call a non-function",
                                                                                            );
                                                                                          }
                                                                                        } else {
                                                                                          throw new TypeError(
                                                                                            "Trying to call a non-function",
                                                                                          );
                                                                                        }
                                                                                      } else {
                                                                                        throw new TypeError(
                                                                                          "Trying to call a non-function",
                                                                                        );
                                                                                      }
                                                                                    } else {
                                                                                      throw new TypeError(
                                                                                        "Trying to call a non-function",
                                                                                      );
                                                                                    }
                                                                                  } else {
                                                                                    throw new TypeError(
                                                                                      "Trying to call a non-function",
                                                                                    );
                                                                                  }
                                                                                } else {
                                                                                  throw new TypeError(
                                                                                    "Trying to call a non-function",
                                                                                  );
                                                                                }
                                                                              } else {
                                                                                throw new TypeError(
                                                                                  "Trying to call a non-function",
                                                                                );
                                                                              }
                                                                            } else {
                                                                              throw new TypeError(
                                                                                "Trying to call a non-function",
                                                                              );
                                                                            }
                                                                          } else {
                                                                            throw new TypeError(
                                                                              "Trying to call a non-function",
                                                                            );
                                                                          }
                                                                        } else {
                                                                          throw new TypeError(
                                                                            "Trying to call a non-function",
                                                                          );
                                                                        }
                                                                      } else {
                                                                        throw new TypeError(
                                                                          "Trying to call a non-function",
                                                                        );
                                                                      }
                                                                    } else {
                                                                      throw new TypeError(
                                                                        "Trying to call a non-function",
                                                                      );
                                                                    }
                                                                  } else {
                                                                    throw new TypeError(
                                                                      "Trying to call a non-function",
                                                                    );
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
  }
}
class TTITracker extends TTITrackers {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.readyProperties = {};
    applyArgumentsResult.didBackgroundApp = false;
    applyArgumentsResult.wasEverActive = false;
    applyArgumentsResult.wasAuthenticated = false;
    applyArgumentsResult.interstitial = null;
    applyArgumentsResult.cachedChannelCounts = new Map();
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
    new Map();
    return applyArgumentsResult;
  }
  setTTICallback(arg0) {
    let closure_0 = arg0;
    loggerCallback = function loggerCallback() {
      if (true === closure_0()) {
        loggerCallback = function loggerCallback() {
          return false;
        };
      }
    };
  }
  setInitialPage(page) {
    this.initialPage = page;
  }
  setInitialGuildId(initialGuildId) {
    this.initialGuildId = initialGuildId;
  }
  setEarlyCacheInfo(earlyCacheInfo) {
    this.earlyCacheInfo = earlyCacheInfo;
  }
  setLazyCacheInfo(lazyCacheInfo) {
    this.lazyCacheInfo = lazyCacheInfo;
  }
  setInterstitial(EmptyState) {
    this.interstitial = EmptyState;
    loggerCallback();
  }
  addLocalMessages(channelId, length) {
    const self = this;
    const cachedChannelCounts = this.cachedChannelCounts;
    const result = cachedChannelCounts.set(channelId, length);
    if (this.cachedChannelCounts.size > 100) {
      do {
        let cachedChannelCounts2 = self.cachedChannelCounts;
        let iter = cachedChannelCounts2.keys();
        let cachedChannelCounts3 = self.cachedChannelCounts;
        let deleteResult = cachedChannelCounts3.delete(iter.next().value);
        size = self.cachedChannelCounts.size;
      } while (size > 100);
    }
  }
  attachReadyPayloadProperties(readyProperties) {
    this.readyProperties = readyProperties;
  }
  appStateChanged(state) {
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
  }
  recordRender(length, GatewayConnectionStore) {
    const self = this;
    const renderMessages = this.renderMessages;
    renderMessages.record();
    const tmp2 = GatewayConnectionStore || length > 0;
    if (tmp2) {
      const renderMessagesWithCache = self.renderMessagesWithCache;
      renderMessagesWithCache.record();
    }
    if (GatewayConnectionStore) {
      const renderLatestMessages = self.renderLatestMessages;
      renderLatestMessages.record();
    }
  }
  recordMessageRender(channelId, mapped, hasFetched, hasMoreAfter) {
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
      const tmp5 = hasFetched;
      if (tmp5) {
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
                const first = sorted.reverse()[0];
                const sorted1 = mapped.sort(_default.compare);
                const _Math = Math;
                const extractTimestampResult = _default.extractTimestamp(sorted1.reverse()[0]);
                self.messageCacheAgeSeconds = floor((extractTimestampResult - _default.extractTimestamp(first)) / 1000);
                const length = mapped.filter((item) => {
                  const cachedMessageIds = self.cachedMessageIds;
                  let hasItem;
                  if (cachedMessageIds != null) {
                    hasItem = cachedMessageIds.includes(item);
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
              }
            }
          }
          self.messageCacheMissingReason = "no-cache";
        }
      } else {
        const tmp7 = null != self.cachedChannelId && channelId !== self.cachedChannelId;
        if (!tmp7) {
          self.cachedChannelId = channelId;
          self.cachedMessageIds = mapped;
          if (mapped.length > 0) {
            self.messageCacheMissingReason = null;
          }
        }
      }
    }
  }
  getStartTime(arg0) {
    let start;
    const self = this;
    if (this.extraProperties.headless_task_ran) {
      if (null != self.firstAppActiveTime) {
        start = self.firstAppActiveTime;
      }
      return start;
    }
    start = arg0;
    if (null == arg0) {
      start = self.loadIndex.start;
    }
  }
  processNativeLogs(nativeLogs, arg1) {
    const self = this;
    const startTime = this.getStartTime(arg1);
    const iter = nativeLogs[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      switch (nextResult.label) {
        case "Finish MainApplication.initialize()": {
          self.extraProperties.time_main_application_initialize_end = serialize(startTime, tmp3.timestamp);
          continue;
          break;
        }
        case "GET_REACT_INSTANCE_MANAGER_START": {
          self.extraProperties.time_get_react_instance_manager_start = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "GET_REACT_INSTANCE_MANAGER_END": {
          self.extraProperties.time_get_react_instance_manager_end = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "PROCESS_PACKAGES_START": {
          self.extraProperties.time_process_packages_start = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "PROCESS_PACKAGES_END": {
          self.extraProperties.time_process_packages_end = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "CREATE_CATALYST_INSTANCE_START": {
          self.extraProperties.time_create_catalyst_instance_start = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "CREATE_CATALYST_INSTANCE_END": {
          self.extraProperties.time_create_catalyst_instance_end = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "CREATE_UI_MANAGER_MODULE_START": {
          self.extraProperties.time_create_ui_manager_module_start = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "CREATE_UI_MANAGER_MODULE_END": {
          self.extraProperties.time_create_ui_manager_module_end = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "REACT_BRIDGE_LOADING_START": {
          self.extraProperties.time_react_bridge_loading_start = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "REACT_BRIDGE_LOADING_END": {
          self.extraProperties.time_react_bridge_loading_end = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "CacheStorage Init Start": {
          self.extraProperties.time_init_native_storage_start = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "CacheStorage Init End": {
          self.extraProperties.time_init_native_storage_end = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "RUN_JS_BUNDLE_START": {
          self.extraProperties.time_before_js_bundle_start = serialize(startTime, tmp3.timestamp);
          break;
        }
        case "ChatModule.updateRows() Start": {
          if (null != self.extraProperties.time_first_native_message_render_start) {
            continue;
          } else {
            self.extraProperties.time_first_native_message_render_start = serialize(startTime, tmp3.timestamp);
          }
          break;
        }
        case "ChatModule.updateRows() Finish": {
          if (null != self.extraProperties.time_first_native_message_render_end) {
            continue;
          } else {
            self.extraProperties.time_first_native_message_render_end = serialize(startTime, tmp3.timestamp);
          }
          break;
        }
      }
    }
  }
  serializeAppStartupMetrics() {
    return {
      ready_packing_algorithm: this.readyProperties.packing_algorithm,
      ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms,
    };
  }
  serializeWebPerfStartupMetrics(arg0) {
    let firstRenderAfterReadyPayload;
    const obj = { time_first_render_after_ready_end: firstRenderAfterReadyPayload.serialize(arg0) };
    const merged = Object.assign(this.serializeAppStartupMetrics());
    ({ wasAuthenticated: obj.was_authenticated, firstRenderAfterReadyPayload } = this);
    return obj;
  }
  serializeTTITracker(appFirstVisibleTime) {
    let basicChannels;
    let basicChannelsStale;
    let beginFastConnect;
    let beginFastConnect2;
    let deserializeCache;
    let deserializeCache2;
    let dispatchLazyCache;
    let dispatchLazyCache2;
    let dispatchMessages;
    let dispatchMessages2;
    let dispatchReady;
    let dispatchReady2;
    let dispatchReadySupplemental;
    let dispatchReadySupplemental2;
    let displayLatestMessages;
    let displayMessagesWithCache;
    let fetchGuildCache;
    let fetchGuildCache2;
    let fetchLazyCache;
    let fetchLazyCache2;
    let fetchMessages;
    let fetchMessages2;
    let fetchStaleChannels;
    let fetchStaleChannels2;
    let firstContentfulPaint;
    let firstRowGenerator;
    let firstRowGenerator2;
    let fullChannelGuilds;
    let fullChannels;
    let hydrateReady;
    let hydrateReady2;
    let hydrateReadySupplemental;
    let hydrateReadySupplemental2;
    let init;
    let init2;
    let initialGuild;
    let initialGuild2;
    let loadCachedMessages;
    let loadCachedMessages2;
    let loadFastConnectNativeModule;
    let loadFastConnectNativeModule2;
    let loadImports;
    let loadImports2;
    let loadIndex;
    let loadIndex2;
    let loadLazyCache;
    let loadLazyCache2;
    let loadMiniCache;
    let loadMiniCache2;
    let loadStorage;
    let loadStorage2;
    let max;
    let num;
    let num2;
    let parseLazyCache;
    let parseLazyCache2;
    let parseReady;
    let parseReady2;
    let parseReadySupplemental;
    let parseReadySupplemental2;
    let parseStorage;
    let parseStorage2;
    let privateChannels;
    let ready;
    let ready2;
    let readySupplemental;
    let readySupplemental2;
    let renderApp;
    let renderAppEffect;
    let renderLatestMessages;
    let renderMessages;
    let renderMessagesWithCache;
    const self = this;
    const startTime = this.getStartTime(appFirstVisibleTime);
    const tmp2 = _mod12;
    const tmp2Result = tmp2(AppStartPerformanceDefault.logGroups[0].logs);
    const found = tmp2Result.filter((log) => {
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
    const sumResult = mapped.sum();
    const result = this.serializeAppStartupMetrics();
    const obj = {
      time_load_index_start: loadIndex.serializeStart(startTime),
      time_load_index_end: loadIndex2.serializeEnd(startTime),
      time_begin_fast_connect_start: beginFastConnect.serializeStart(startTime),
      time_begin_fast_connect_end: beginFastConnect2.serializeEnd(startTime),
      time_load_imports_start: loadImports.serializeStart(startTime),
      time_load_imports_end: loadImports2.serializeEnd(startTime),
      time_init_start: init.serializeStart(startTime),
      time_init_end: init2.serializeEnd(startTime),
      time_load_storage_start: loadStorage.serializeStart(startTime),
      time_load_storage_end: loadStorage2.serializeEnd(startTime),
      time_parse_storage_start: parseStorage.serializeStart(startTime),
      time_parse_storage_end: parseStorage2.serializeEnd(startTime),
      time_load_mini_cache_start: loadMiniCache.serializeStart(startTime),
      time_load_mini_cache_end: loadMiniCache2.serializeEnd(startTime),
      time_fetch_initial_guild_start: fetchGuildCache.serializeStart(startTime),
      time_fetch_initial_guild_end: fetchGuildCache2.serializeEnd(startTime),
      time_load_cached_messages_start: loadCachedMessages.serializeStart(startTime),
      time_load_cached_messages_end: loadCachedMessages2.serializeEnd(startTime),
      time_render_app_start: renderApp.serialize(startTime),
      time_render_app_effect_start: renderAppEffect.serialize(startTime),
      time_first_contentful_paint: firstContentfulPaint.serialize(startTime),
      time_render_messages_end: renderMessages.serialize(startTime),
      time_render_messages_with_cache_end: renderMessagesWithCache.serialize(startTime),
      time_render_latest_messages_end: renderLatestMessages.serialize(startTime),
      time_display_messages_with_cache_end: displayMessagesWithCache.serialize(startTime),
      time_display_latest_messages_end: displayLatestMessages.serialize(startTime),
      time_first_row_generator_start: firstRowGenerator.serializeStart(startTime),
      time_first_row_generator_end: firstRowGenerator2.serializeEnd(startTime),
      time_initial_guild_start: initialGuild.serializeStart(startTime),
      time_initial_guild_end: initialGuild2.serializeEnd(startTime),
      time_load_lazy_cache_start: loadLazyCache.serializeStart(startTime),
      time_load_lazy_cache_end: loadLazyCache2.serializeEnd(startTime),
      time_fetch_lazy_cache_start: fetchLazyCache.serializeStart(startTime),
      time_fetch_lazy_cache_end: fetchLazyCache2.serializeEnd(startTime),
      time_parse_lazy_cache_start: parseLazyCache.serializeStart(startTime),
      time_parse_lazy_cache_end: parseLazyCache2.serializeEnd(startTime),
      time_fetch_stale_channels_start: fetchStaleChannels.serializeStart(startTime),
      time_fetch_stale_channels_end: fetchStaleChannels2.serializeEnd(startTime),
      time_deserialize_cache_start: deserializeCache.serializeStart(startTime),
      time_deserialize_cache_end: deserializeCache2.serializeEnd(startTime),
      time_dispatch_lazy_cache_start: dispatchLazyCache.serializeStart(startTime),
      time_dispatch_lazy_cache_end: dispatchLazyCache2.serializeEnd(startTime),
      time_parse_ready_start: parseReady.serializeStart(startTime),
      time_parse_ready_end: parseReady2.serializeEnd(startTime),
      time_ready_start: ready.serializeStart(startTime),
      time_ready_end: ready2.serializeEnd(startTime),
      time_hydrate_ready_start: hydrateReady.serializeStart(startTime),
      time_hydrate_ready_end: hydrateReady2.serializeEnd(startTime),
      time_dispatch_ready_start: dispatchReady.serializeStart(startTime),
      time_dispatch_ready_end: dispatchReady2.serializeEnd(startTime),
      time_parse_ready_supplemental_start: parseReadySupplemental.serializeStart(startTime),
      time_parse_ready_supplemental_end: parseReadySupplemental2.serializeEnd(startTime),
      time_ready_supplemental_start: readySupplemental.serializeStart(startTime),
      time_ready_supplemental_end: readySupplemental2.serializeEnd(startTime),
      time_hydrate_ready_supplemental_start: hydrateReadySupplemental.serializeStart(startTime),
      time_hydrate_ready_supplemental_end: hydrateReadySupplemental2.serializeEnd(startTime),
      time_dispatch_ready_supplemental_start: dispatchReadySupplemental.serializeStart(startTime),
      time_dispatch_ready_supplemental_end: dispatchReadySupplemental2.serializeEnd(startTime),
      time_fetch_messages_start: fetchMessages.serializeStart(startTime),
      time_fetch_messages_end: fetchMessages2.serializeEnd(startTime),
      time_dispatch_messages_start: dispatchMessages.serializeStart(startTime),
      time_dispatch_messages_end: dispatchMessages2.serializeEnd(startTime),
      time_load_fast_connect_native_module_start: loadFastConnectNativeModule.serializeStart(startTime),
      time_load_fast_connect_native_module_end: loadFastConnectNativeModule2.serializeEnd(startTime),
      identify_total_server_duration_ms: this.readyProperties.identify_total_server_duration_ms,
      identify_api_duration_ms: this.readyProperties.identify_api_duration_ms,
      identify_guilds_duration_ms: this.readyProperties.identify_guilds_duration_ms,
      ready_compressed_byte_size: this.readyProperties.compressed_byte_size,
      ready_uncompressed_byte_size: this.readyProperties.uncompressed_byte_size,
      identify_compressed_byte_size: this.readyProperties.identify_compressed_byte_size,
      identify_uncompressed_byte_size: this.readyProperties.identify_uncompressed_byte_size,
      ready_compression_algorithm: this.readyProperties.compression_algorithm,
      is_reconnect: this.readyProperties.is_reconnect,
      is_fast_connect: this.readyProperties.is_fast_connect,
      did_force_clear_guild_hashes: this.readyProperties.did_force_clear_guild_hashes,
      num_guilds: this.readyProperties.num_guilds,
      num_changed_guild_channels: this.readyProperties.num_guild_channels,
      ready_presences_size: this.readyProperties.presences_size,
      ready_users_size: this.readyProperties.users_size,
      ready_read_states_size: this.readyProperties.read_states_size,
      ready_private_channels_size: this.readyProperties.private_channels_size,
      ready_user_guild_settings_size: this.readyProperties.user_guild_settings_size,
      ready_relationships_size: this.readyProperties.relationships_size,
      ready_experiments_size: this.readyProperties.experiments_size,
      ready_user_settings_size: this.readyProperties.user_settings_size,
      ready_remaining_data_size: this.readyProperties.remaining_data_size,
      ready_guild_channels_size: this.readyProperties.guild_channels_size,
      ready_guild_members_size: this.readyProperties.guild_members_size,
      ready_guild_presences_size: this.readyProperties.guild_presences_size,
      ready_guild_roles_size: this.readyProperties.guild_roles_size,
      ready_guild_emojis_size: this.readyProperties.guild_emojis_size,
      ready_guild_remaining_data_size: this.readyProperties.guild_remaining_data_size,
      ready_guild_threads_size: this.readyProperties.guild_threads_size,
      ready_guild_stickers_size: this.readyProperties.guild_stickers_size,
      ready_guild_events_size: this.readyProperties.guild_events_size,
      ready_guild_features_size: this.readyProperties.guild_features_size,
      ready_size_metrics_duration_ms: this.readyProperties.size_metrics_duration_ms,
      had_cache_at_startup: this.readyProperties.had_cache_at_startup,
      used_cache_at_startup: this.readyProperties.used_cache_at_startup,
      duration_major_js_imports: this.loadImports.end - this.loadIndex.start + sumResult,
      cache_num_guilds: max(num, num2),
      cache_num_private_channels: privateChannels,
      cache_num_basic_channels: basicChannels,
      cache_num_basic_channels_stale: basicChannelsStale,
      cache_num_full_channels: fullChannels,
      cache_num_full_channel_guilds: fullChannelGuilds,
      num_imports_at_load_index_end: self.loadIndex.endNumImports,
      num_imports_at_init_end: self.init.endNumImports,
      num_imports_at_load_mini_cache_end: self.loadMiniCache.endNumImports,
      num_imports_at_render_app_start: self.renderApp.numImports,
      num_imports_at_render_app_effect_start: self.renderAppEffect.numImports,
      num_imports_at_render_messages_end: self.renderMessages.numImports,
      num_imports_at_render_messages_with_cache_end: self.renderMessagesWithCache.numImports,
      num_imports_at_render_latest_messages_end: self.renderLatestMessages.numImports,
      num_imports_at_load_lazy_cache_start: self.loadLazyCache.startNumImports,
      num_imports_at_load_lazy_cache_end: self.loadLazyCache.endNumImports,
      num_imports_at_ready_start: self.ready.startNumImports,
      num_imports_at_ready_end: self.ready.endNumImports,
      num_imports_at_ready_supplemental_start: self.readySupplemental.startNumImports,
      num_imports_at_ready_supplemental_end: self.readySupplemental.endNumImports,
      duration_imports_at_load_index_start: Math.ceil(self.loadIndex.startImportTime),
      duration_imports_at_load_index_end: Math.ceil(self.loadIndex.endImportTime),
      duration_imports_at_init_end: Math.ceil(self.init.endImportTime),
      duration_imports_at_load_mini_cache_end: Math.ceil(self.loadMiniCache.endImportTime),
      duration_imports_at_render_app_start: Math.ceil(self.renderApp.importTime),
      duration_imports_at_render_app_effect_start: Math.ceil(self.renderAppEffect.importTime),
      duration_imports_at_render_messages_end: Math.ceil(self.renderMessages.importTime),
      duration_imports_at_render_messages_with_cache_end: Math.ceil(self.renderMessagesWithCache.importTime),
      duration_imports_at_render_latest_messages_end: Math.ceil(self.renderLatestMessages.importTime),
      duration_imports_at_load_lazy_cache_start: Math.ceil(self.loadLazyCache.startImportTime),
      duration_imports_at_load_lazy_cache_end: Math.ceil(self.loadLazyCache.endImportTime),
      duration_imports_at_ready_start: Math.ceil(self.ready.startImportTime),
      duration_imports_at_ready_end: Math.ceil(self.ready.endImportTime),
      duration_imports_at_ready_supplemental_start: Math.ceil(self.readySupplemental.startImportTime),
      duration_imports_at_ready_supplemental_end: Math.ceil(self.readySupplemental.endImportTime),
      duration_imports_at_polyfills_end: Math.ceil(self.imports.polyfillsEnd.time),
      duration_imports_at_sentry_end: Math.ceil(self.imports.sentryEnd.time),
      duration_imports_at_fast_connect_start: Math.ceil(self.beginFastConnect.startImportTime),
      duration_imports_at_fast_connect_end: Math.ceil(self.beginFastConnect.endImportTime),
      duration_imports_at_app_state_change_start: Math.ceil(self.imports.appStateChangeStart.time),
      duration_imports_at_app_state_change_end: Math.ceil(self.imports.appStateChangeEnd.time),
      duration_imports_at_load_mini_cache_start: Math.ceil(self.imports.loadMiniCacheStart.time),
      duration_imports_at_load_storage_start: Math.ceil(self.imports.loadStorageStart.time),
      duration_imports_at_load_storage_end: Math.ceil(self.imports.loadStorageEnd.time),
    };
    const merged = Object.assign(this.extraProperties);
    const merged1 = Object.assign(result);
    ({ initialPage: obj2.initial_page, initialGuildId: obj2.guild_id, loadIndex } = this);
    loadIndex2 = this.loadIndex;
    beginFastConnect = this.beginFastConnect;
    beginFastConnect2 = this.beginFastConnect;
    loadImports = this.loadImports;
    loadImports2 = this.loadImports;
    init = this.init;
    init2 = this.init;
    loadStorage = this.loadStorage;
    loadStorage2 = this.loadStorage;
    parseStorage = this.parseStorage;
    parseStorage2 = this.parseStorage;
    loadMiniCache = this.loadMiniCache;
    loadMiniCache2 = this.loadMiniCache;
    fetchGuildCache = this.fetchGuildCache;
    fetchGuildCache2 = this.fetchGuildCache;
    loadCachedMessages = this.loadCachedMessages;
    loadCachedMessages2 = this.loadCachedMessages;
    renderApp = this.renderApp;
    renderAppEffect = this.renderAppEffect;
    firstContentfulPaint = this.firstContentfulPaint;
    renderMessages = this.renderMessages;
    renderMessagesWithCache = this.renderMessagesWithCache;
    renderLatestMessages = this.renderLatestMessages;
    displayMessagesWithCache = this.displayMessagesWithCache;
    displayLatestMessages = this.displayLatestMessages;
    firstRowGenerator = this.firstRowGenerator;
    firstRowGenerator2 = this.firstRowGenerator;
    initialGuild = this.initialGuild;
    initialGuild2 = this.initialGuild;
    loadLazyCache = this.loadLazyCache;
    loadLazyCache2 = this.loadLazyCache;
    fetchLazyCache = this.fetchLazyCache;
    fetchLazyCache2 = this.fetchLazyCache;
    parseLazyCache = this.parseLazyCache;
    parseLazyCache2 = this.parseLazyCache;
    fetchStaleChannels = this.fetchStaleChannels;
    fetchStaleChannels2 = this.fetchStaleChannels;
    deserializeCache = this.deserializeCache;
    deserializeCache2 = this.deserializeCache;
    dispatchLazyCache = this.dispatchLazyCache;
    dispatchLazyCache2 = this.dispatchLazyCache;
    parseReady = this.parseReady;
    parseReady2 = this.parseReady;
    ready = this.ready;
    ready2 = this.ready;
    hydrateReady = this.hydrateReady;
    hydrateReady2 = this.hydrateReady;
    dispatchReady = this.dispatchReady;
    dispatchReady2 = this.dispatchReady;
    parseReadySupplemental = this.parseReadySupplemental;
    parseReadySupplemental2 = this.parseReadySupplemental;
    readySupplemental = this.readySupplemental;
    readySupplemental2 = this.readySupplemental;
    hydrateReadySupplemental = this.hydrateReadySupplemental;
    hydrateReadySupplemental2 = this.hydrateReadySupplemental;
    dispatchReadySupplemental = this.dispatchReadySupplemental;
    dispatchReadySupplemental2 = this.dispatchReadySupplemental;
    fetchMessages = this.fetchMessages;
    fetchMessages2 = this.fetchMessages;
    dispatchMessages = this.dispatchMessages;
    dispatchMessages2 = this.dispatchMessages;
    loadFastConnectNativeModule = this.loadFastConnectNativeModule;
    loadFastConnectNativeModule2 = this.loadFastConnectNativeModule;
    ({
      wasAuthenticated: obj2.was_authenticated,
      didBackgroundApp: obj2.did_background_app,
      interstitial: obj2.interstitial,
      messageCacheMissingReason: obj2.message_cache_missing_reason,
      messageCacheAgeSeconds: obj2.message_cache_age_seconds,
      messageCacheCount: obj2.message_cache_count,
      messageCacheHavingCount: obj2.message_cache_having_count,
      messageCacheMissingCount: obj2.message_cache_missing_count,
      messageRenderFullCount: obj2.message_render_full_count,
      messageRenderCachedCount: obj2.message_render_cached_count,
      messageRenderHasMoreAfter: obj2.message_render_has_more_after,
    } = this);
    const earlyCacheInfo = this.earlyCacheInfo;
    num = undefined;
    const _Math = Math;
    max = Math.max;
    if (earlyCacheInfo != null) {
      num = earlyCacheInfo.guilds;
    }
    if (num == null) {
      num = 0;
    }
    const lazyCacheInfo = self.lazyCacheInfo;
    num2 = undefined;
    if (lazyCacheInfo != null) {
      num2 = lazyCacheInfo.guilds;
    }
    if (num2 == null) {
      num2 = 0;
    }
    const lazyCacheInfo2 = self.lazyCacheInfo;
    privateChannels = undefined;
    if (lazyCacheInfo2 != null) {
      privateChannels = lazyCacheInfo2.privateChannels;
    }
    const lazyCacheInfo3 = self.lazyCacheInfo;
    basicChannels = undefined;
    if (lazyCacheInfo3 != null) {
      basicChannels = lazyCacheInfo3.basicChannels;
    }
    const lazyCacheInfo4 = self.lazyCacheInfo;
    basicChannelsStale = undefined;
    if (lazyCacheInfo4 != null) {
      basicChannelsStale = lazyCacheInfo4.basicChannelsStale;
    }
    const lazyCacheInfo5 = self.lazyCacheInfo;
    fullChannels = undefined;
    if (lazyCacheInfo5 != null) {
      fullChannels = lazyCacheInfo5.fullChannels;
    }
    const lazyCacheInfo6 = self.lazyCacheInfo;
    fullChannelGuilds = undefined;
    if (lazyCacheInfo6 != null) {
      fullChannelGuilds = lazyCacheInfo6.fullChannelGuilds;
    }
    return obj;
  }
}
const prototype2 = TTITracker.prototype;
const tTITracker = new TTITracker();
let size = size_mod;
let result = size.fileFinishedImporting("modules/tti_analytics/TTITracker.tsx");

export default tTITracker;
