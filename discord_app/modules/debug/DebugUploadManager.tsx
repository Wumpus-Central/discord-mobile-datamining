// discord_app/modules/debug/DebugUploadManager.tsx
import V6OrEarlierAPIError from "V6OrEarlierAPIError";
import ensureGuildLoaded from "ensureGuildLoaded";
import { Endpoints } from "ME";

const require = arg1;
function _uploadDebugLogFiles() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp3;
              let closure_2 = tmp7;
              const callback = closure_1;
              closure_1 = undefined;
              let c5 = 1;
              c6 = 2;
              c7 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_11(callback);
              return obj1;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_2 = V6OrEarlierAPIError;
            if (closure_2 instanceof callback(4202).UploadVoiceDebugLogsError) {
              closure_1 = (function uploadErrorToAVUnderlyingError(closure_2) {
                const code = closure_2.code;
                if (callback(tmp3[5]).UploadErrorCodes.GENERAL === code) {
                  return tmp(tmp2[6]).AVUnderlyingError.UploadErrorGeneral;
                } else if (tmp(tmp2[5]).UploadErrorCodes.NO_FILE === code) {
                  return tmp(tmp2[6]).AVUnderlyingError.UploadErrorNoFile;
                } else if (tmp(tmp2[5]).UploadErrorCodes.PROGRESS === code) {
                  return tmp(tmp2[6]).AVUnderlyingError.UploadErrorProgress;
                } else if (tmp(tmp2[5]).UploadErrorCodes.UPLOAD === code) {
                  return tmp(tmp2[6]).AVUnderlyingError.UploadErrorUpload;
                } else if (tmp(tmp2[5]).UploadErrorCodes.READ === code) {
                  return tmp(tmp2[6]).AVUnderlyingError.UploadErrorRead;
                }
              })(closure_2);
            }
            let obj4 = callback(9175);
            const obj2 = { type: null, underlyingError: null, errorMessage: null };
            obj2[0] = callback(9175).AVError.DEBUG_LOG_UPLOAD_FAILED;
            obj2[1] = closure_1;
            obj2[2] = outer1_2.message;
            obj4.reportAVError(obj2);
            throw outer1_2;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              obj1 = callback(9876);
              c6 = 3;
              c7 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = obj1.uploadRtcLogFiles(14680064, callback);
              return obj4;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp35) {
          V6OrEarlierAPIError = tmp35;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp35;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _uploadDebugLogFiles = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function uploadAppLogFiles() {
  const self = this;
  const apply = _uploadAppLogFiles.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _uploadAppLogFiles() {
  const self = this;
  let tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0) {
      let length;
      let length2;
      let length3;
      let length4;
      let slice;
      let slice2;
      let slice3;
      let slice4;
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else {
        let tmp = arg0;
        tmp = tmp9;
        tmp = globalThis;
        tmp = null;
        if (tmp10 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp4;
                let lib2 = tmp8;
                tmp = callback;
                let lib;
                lib2 = undefined;
                closure_3 = undefined;
                let V6OrEarlierAPIError;
                let debugInfo;
                c6 = undefined;
                c7 = undefined;
                let logger;
                let getSystemLog;
                debugInfo = 2;
                tmp = outer1_2;
                tmp = outer1_3;
                lib = outer1_2(outer1_3[8]).stringify();
                debugInfo = 1;
                debugInfo = 3;
                getSystemLog = undefined;
                if (getSystemLog != null) {
                  getSystemLog = getSystemLog.getSystemLog;
                }
                let str = "";
                if (null != getSystemLog) {
                  let promise = new Promise((arg0) => systemLog.getSystemLog(arg0));
                  c6 = 5;
                  c7 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = promise;
                  return obj1;
                } else {
                  lib2 = str;
                  debugInfo = 1;
                  debugInfo = 4;
                  promise = lib(closure_3[9])();
                  promise.then((arg0) => callback(table[10])(arg0, true));
                  c6 = 7;
                  c7 = 1;
                }
                const obj14 = outer1_2(outer1_3[8]);
              }
            } else {
              if (1 === tmp11) {
                debugInfo = 0;
                const message = V6OrEarlierAPIError;
                const _HermesInternal6 = HermesInternal;
                logger.error("uploadAppLogFiles: upload app log files error " + message.message);
                c7 = 3;
              } else if (2 !== tmp11) {
                if (3 === tmp11) {
                  debugInfo = 1;
                  const _HermesInternal4 = HermesInternal;
                  lib2 = "System Logs failed " + V6OrEarlierAPIError;
                } else {
                  if (4 === tmp11) {
                    debugInfo = 1;
                    const _HermesInternal2 = HermesInternal;
                    closure_3 = "Push logs failed: " + V6OrEarlierAPIError;
                    debugInfo = 5;
                    let obj4 = callback(closure_3[11]);
                    const consumeLogsResult = obj4.consumeLogs();
                    lib = consumeLogsResult;
                    if (consumeLogsResult == null) {
                      lib = "";
                    }
                    V6OrEarlierAPIError = lib;
                    debugInfo = 1;
                  } else if (5 === tmp11) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw arg1;
                    } else {
                      str = arg1;
                      if (arg0 === 2) {
                        debugInfo = 0;
                        c7 = 3;
                        const obj2 = { value: null, done: true };
                        obj2[0] = arg1;
                        return obj2;
                      }
                    }
                  } else {
                    if (6 === tmp11) {
                      debugInfo = 1;
                      const _HermesInternal = HermesInternal;
                      V6OrEarlierAPIError = "LibDiscore logs failed: " + V6OrEarlierAPIError;
                    } else if (7 === tmp11) {
                      if (arg0 === 1) {
                        c7 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        debugInfo = 0;
                        c7 = 3;
                        const obj3 = { value: null, done: true };
                        obj3[0] = arg1;
                        return obj3;
                      } else {
                        closure_3 = arg1;
                        debugInfo = 1;
                      }
                    } else if (8 === tmp11) {
                      if (arg0 === 1) {
                        c7 = 3;
                        throw arg1;
                      } else {
                        let tmp12 = arg1;
                        if (arg0 === 2) {
                          debugInfo = 0;
                          c7 = 3;
                          obj4 = { value: null, done: true };
                          obj4[0] = arg1;
                          return obj4;
                        }
                      }
                    } else if (arg0 === 1) {
                      c7 = 3;
                      throw arg1;
                    } else if (arg0 !== 2) {
                      debugInfo = 0;
                    }
                    c7 = tmp12;
                    const tmp42 = lib(closure_3[13])(c7);
                    let obj5 = callback(closure_3[14]);
                    const result = obj5.serializeComponentRenderAverages();
                    const _JSON = JSON;
                    const _JSON2 = JSON;
                    const json = JSON.stringify(lib(closure_3[15])(), undefined, 2);
                    const _HermesInternal3 = HermesInternal;
                    logger = "\n    " + tmp42 + "\n\n    " + result + "\n\n    Metadata:\n    " + json + "\n\n    ChannelStore:\n    " + JSON.stringify(debugInfo.getDebugInfo(), undefined, 2) + "\n\n    Logs:\n    " + lib + "\n\n    System logs:\n    " + lib2 + "\n\n    LibDiscore logs:\n    " + V6OrEarlierAPIError + "\n\n    Push Notifications:\n    " + closure_3 + "\n    ";
                    let obj6 = lib2(closure_3[8]);
                    obj6.clear();
                    getSystemLog = c6.DEBUG_LOG(callback, "discord_app_logs");
                    const HTTP = callback(closure_3[16]).HTTP;
                    obj5 = { url: null, body: null, retries: 3, headers: null, oldFormErrors: true, rejectWithError: false };
                    obj5[0] = getSystemLog;
                    obj5[1] = logger;
                    obj5[3] = { "Content-Type": "text/plain" };
                    c6 = 9;
                    c7 = 1;
                    obj6 = { value: null, done: false };
                    obj6[0] = HTTP.post(obj5);
                    return obj6;
                  }
                  debugInfo = lib.length + lib2.length + closure_3.length + V6OrEarlierAPIError.length;
                  if (debugInfo > c7) {
                    tmp = lib2;
                    tmp = closure_3;
                    tmp = c7;
                    tmp = debugInfo;
                    c6 = 1 - c7 / debugInfo;
                    tmp = lib;
                    tmp = lib;
                    const _Math = Math;
                    tmp = lib;
                    tmp = c6;
                    ({ slice, length } = lib);
                    lib = slice(length - Math.floor(lib.length * c6));
                    tmp = lib2;
                    tmp = lib2;
                    const _Math2 = Math;
                    tmp = lib2;
                    tmp = c6;
                    ({ slice: slice2, length: length2 } = lib2);
                    lib2 = slice2(length2 - Math.floor(lib2.length * c6));
                    tmp = closure_3;
                    tmp = closure_3;
                    const _Math3 = Math;
                    tmp = closure_3;
                    tmp = c6;
                    ({ slice: slice3, length: length3 } = closure_3);
                    closure_3 = slice3(length3 - Math.floor(closure_3.length * c6));
                    tmp = V6OrEarlierAPIError;
                    tmp = V6OrEarlierAPIError;
                    const _Math4 = Math;
                    tmp = V6OrEarlierAPIError;
                    tmp = c6;
                    ({ slice: slice4, length: length4 } = V6OrEarlierAPIError);
                    V6OrEarlierAPIError = slice4(length4 - Math.floor(V6OrEarlierAPIError.length * c6));
                  }
                  tmp12 = null;
                  if (null != callback(closure_3[12]).default) {
                    c6 = 8;
                    c7 = 1;
                    const obj7 = { value: null, done: false };
                    obj7[0] = callback(closure_3[12]).default.getAppFirstVisibleTimestamp();
                    return obj7;
                  }
                }
              }
              debugInfo = 0;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            debugInfo = 1;
            const _HermesInternal5 = HermesInternal;
            lib = "Logs failed: " + V6OrEarlierAPIError;
          } catch (tmp94) {
            V6OrEarlierAPIError = tmp94;
            if (tmp5 === debugInfo) {
              c7 = tmp3;
              throw tmp94;
            } else if (tmp2 === tmp96) {
              c6 = tmp2;
            } else if (tmp === tmp96) {
              c6 = tmp;
            } else if (tmp3 === tmp96) {
              c6 = tmp3;
            } else if (tmp7 === tmp96) {
              c6 = tmp7;
            } else {
              c6 = tmp6;
            }
          }
        }
      }
    })();
  });
  const _uploadAppLogFiles = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c7 = 9437184;
const metroImportAll = new require("timestamp")("DebugUploadManager");
const CrashReportingManager = require("set").NativeModules.CrashReportingManager;
const tmp2 = new require("timestamp")("DebugUploadManager");
let result = require("ME").fileFinishedImporting("modules/debug/DebugUploadManager.tsx");

export const uploadDebugLogFiles = function uploadDebugLogFiles(ANDROID_APP) {
  const self = this;
  const apply = _uploadDebugLogFiles.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { uploadAppLogFiles };