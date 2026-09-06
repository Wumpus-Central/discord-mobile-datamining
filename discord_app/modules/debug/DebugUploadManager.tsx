// === Module 10188: DebugUploadManager ===

// Module 10188 (DebugUploadManager)
import LoggerDefault from "Logger" /* 3 */;
import LogAggregatorAll from "LogAggregator" /* 7 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
let closure_10 = async function _uploadDebugLogFiles(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_1;
          let enabled;
          closure_130_2 = undefined;
          c5 = 1;
          c6 = 2;
          c7 = 1;
          let obj1 = { value: uploadAppLogFiles(closure_0), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_3 = closure_4;
        if (closure_130_3 instanceof closure_131_0(closure_131_3[5]).UploadVoiceDebugLogsError) {
          closure_130_2 = (function uploadErrorToAVUnderlyingError(code) {
            code = code.code;
            if (closure_1_0(dependencyMap[5]).UploadErrorCodes.GENERAL === code) {
              return closure_1_0(dependencyMap[6]).AVUnderlyingError.UploadErrorGeneral;
            } else if (closure_1_0(dependencyMap[5]).UploadErrorCodes.NO_FILE === code) {
              return closure_1_0(dependencyMap[6]).AVUnderlyingError.UploadErrorNoFile;
            } else if (closure_1_0(dependencyMap[5]).UploadErrorCodes.PROGRESS === code) {
              return closure_1_0(dependencyMap[6]).AVUnderlyingError.UploadErrorProgress;
            } else if (closure_1_0(dependencyMap[5]).UploadErrorCodes.UPLOAD === code) {
              return closure_1_0(dependencyMap[6]).AVUnderlyingError.UploadErrorUpload;
            } else if (closure_1_0(dependencyMap[5]).UploadErrorCodes.READ === code) {
              return closure_1_0(dependencyMap[6]).AVUnderlyingError.UploadErrorRead;
            }
          })(closure_130_3);
        }
        let obj2 = { type: closure_131_0(closure_131_3[6]).AVError.DEBUG_LOG_UPLOAD_FAILED, underlyingError: closure_130_2, errorMessage: closure_130_3.message };
        closure_131_0(closure_131_3[6]).reportAVError(obj2);
        throw closure_130_3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          obj1 = closure_131_1(closure_131_3[7]);
          enabled = obj1.getConfig({ location: "uploadDebugLogFiles" }).enabled;
          obj2 = closure_131_0(closure_131_3[8]);
          c6 = 3;
          c7 = 1;
          const obj4 = { value: obj2.uploadRtcLogFiles(14680064, enabled, closure_130_0), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c5 = 0;
        c7 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp38) {
      closure_4 = tmp38;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp38;
      } else {
        c6 = tmp;
      }
    }
  }
};
function uploadAppLogFiles() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _uploadAppLogFiles(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp10 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp4;
          closure_2 = tmp8;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          closure_130_9 = undefined;
          c5 = 2;
          closure_130_1 = LogAggregatorAll.stringify();
          c5 = 1;
          c5 = 3;
          let getSystemLog;
          if (closure_131_9 != null) {
            getSystemLog = closure_131_9.getSystemLog;
          }
          let str = "";
          if (null != getSystemLog) {
            let promise = new Promise((arg0) => systemLog.getSystemLog(arg0));
            c6 = 5;
            c7 = 1;
            const obj1 = { value: promise, done: false };
            return obj1;
          } else {
            closure_130_2 = str;
            c5 = 1;
            c5 = 4;
            promise = closure_131_1(closure_131_3[10])();
            promise.then((result) => closure_1_1(closure_1_3[11])(result, true));
            c6 = 7;
            c7 = 1;
          }
        }
      } else {
        if (1 === tmp11) {
          c5 = 0;
          closure_130_10 = closure_4;
          const _HermesInternal6 = HermesInternal;
          closure_131_8.error("uploadAppLogFiles: upload app log files error " + closure_130_10.message);
          c7 = 3;
        } else if (2 !== tmp11) {
          if (3 === tmp11) {
            c5 = 1;
            const _HermesInternal4 = HermesInternal;
            closure_130_2 = "System Logs failed " + closure_4;
          } else {
            if (4 === tmp11) {
              c5 = 1;
              const _HermesInternal2 = HermesInternal;
              closure_130_3 = "Push logs failed: " + closure_4;
              c5 = 5;
              let obj4 = closure_131_0(closure_131_3[12]);
              const consumeLogsResult = obj4.consumeLogs();
              c1 = consumeLogsResult;
              if (consumeLogsResult == null) {
                c1 = "";
              }
              closure_130_4 = c1;
              c5 = 1;
            } else if (5 === tmp11) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else {
                str = value;
                if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                }
              }
            } else {
              if (6 === tmp11) {
                c5 = 1;
                const _HermesInternal = HermesInternal;
                closure_130_4 = "LibDiscore logs failed: " + closure_4;
              } else if (7 === tmp11) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_130_3 = value;
                  c5 = 1;
                }
              } else if (8 === tmp11) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else {
                  let tmp12 = value;
                  if (arg0 === 2) {
                    c5 = 0;
                    c7 = 3;
                    obj4 = { value, done: true };
                    return obj4;
                  }
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 !== 2) {
                c5 = 0;
              }
              closure_130_7 = tmp12;
              const tmp42 = closure_131_1(closure_131_3[14])(closure_130_7);
              let obj5 = closure_131_0(closure_131_3[15]);
              const result = obj5.serializeComponentRenderAverages();
              const _JSON = JSON;
              const _JSON2 = JSON;
              const json = JSON.stringify(closure_131_1(closure_131_3[16])(), undefined, 2);
              const _HermesInternal3 = HermesInternal;
              closure_130_8 = "\n    " + tmp42 + "\n\n    " + result + "\n\n    Metadata:\n    " + json + "\n\n    ChannelStore:\n    " + JSON.stringify(closure_131_5.getDebugInfo(), undefined, 2) + "\n\n    Logs:\n    " + closure_130_1 + "\n\n    System logs:\n    " + closure_130_2 + "\n\n    LibDiscore logs:\n    " + closure_130_4 + "\n\n    Push Notifications:\n    " + closure_130_3 + "\n    ";
              let obj6 = closure_131_2(closure_131_3[9]);
              obj6.clear();
              closure_130_9 = closure_131_6.DEBUG_LOG(closure_130_0, "discord_app_logs");
              const HTTP = closure_131_0(closure_131_3[17]).HTTP;
              const request = { url: closure_130_9, body: closure_130_8, retries: 3, headers: { "Content-Type": "text/plain" }, oldFormErrors: true, rejectWithError: false };
              c6 = 9;
              c7 = 1;
              obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
            closure_130_5 = closure_130_1.length + closure_130_2.length + closure_130_3.length + closure_130_4.length;
            if (closure_130_5 > closure_131_7) {
              closure_130_6 = 1 - closure_131_7 / closure_130_5;
              const _Math = Math;
              ({ slice, length } = closure_130_1);
              closure_130_1 = slice(length - Math.floor(closure_130_1.length * closure_130_6));
              const _Math2 = Math;
              ({ slice: slice2, length: length2 } = closure_130_2);
              closure_130_2 = slice2(length2 - Math.floor(closure_130_2.length * closure_130_6));
              const _Math3 = Math;
              ({ slice: slice3, length: length3 } = closure_130_3);
              closure_130_3 = slice3(length3 - Math.floor(closure_130_3.length * closure_130_6));
              const _Math4 = Math;
              ({ slice: slice4, length: length4 } = closure_130_4);
              closure_130_4 = slice4(length4 - Math.floor(closure_130_4.length * closure_130_6));
            }
            tmp12 = null;
            if (null != closure_131_0(closure_131_3[13]).default) {
              c6 = 8;
              c7 = 1;
              obj6 = { value: closure_131_0(closure_131_3[13]).default.getAppFirstVisibleTimestamp(), done: false };
              return obj6;
            }
          }
        }
        c5 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
      c5 = 1;
      const _HermesInternal5 = HermesInternal;
      closure_130_1 = "Logs failed: " + closure_4;
    } catch (tmp94) {
      closure_4 = tmp94;
      if (tmp5 === c5) {
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
};
const Endpoints = fn(1074).Endpoints;
let c7 = 9437184;
let closure_8 = new LoggerDefault("DebugUploadManager");
const CrashReportingManager = fn(17).NativeModules.CrashReportingManager;
const size = fn(2);
let result = size.fileFinishedImporting("modules/debug/DebugUploadManager.tsx");

export const uploadDebugLogFiles = function uploadDebugLogFiles() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { uploadAppLogFiles };