// === Module 9648: DebugUploadManager ===

// Module 9648 (DebugUploadManager)
import LoggerDefault from "Logger" /* 3 */;
import LogAggregatorAll from "LogAggregator" /* 7 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const require = fn;
let closure_9 = async function _uploadDebugLogFiles(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          dependencyMap = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_1;
          let enabled;
          closure_130_2 = undefined;
          c5 = 1;
          c6 = 2;
          c7 = 1;
          const obj7 = { value: uploadAppLogFiles(closure_0), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_3 = closure_4;
        if (closure_130_3 instanceof closure_131_0(closure_131_3[4]).UploadVoiceDebugLogsError) {
          closure_130_2 = (function uploadErrorToAVUnderlyingError(code) {
            code = code.code;
            if (closure_1_0(dependencyMap[4]).UploadErrorCodes.GENERAL === code) {
              return closure_1_0(dependencyMap[5]).AVUnderlyingError.UploadErrorGeneral;
            } else if (closure_1_0(dependencyMap[4]).UploadErrorCodes.NO_FILE === code) {
              return closure_1_0(dependencyMap[5]).AVUnderlyingError.UploadErrorNoFile;
            } else if (closure_1_0(dependencyMap[4]).UploadErrorCodes.PROGRESS === code) {
              return closure_1_0(dependencyMap[5]).AVUnderlyingError.UploadErrorProgress;
            } else if (closure_1_0(dependencyMap[4]).UploadErrorCodes.UPLOAD === code) {
              return closure_1_0(dependencyMap[5]).AVUnderlyingError.UploadErrorUpload;
            } else if (closure_1_0(dependencyMap[4]).UploadErrorCodes.READ === code) {
              return closure_1_0(dependencyMap[5]).AVUnderlyingError.UploadErrorRead;
            }
          })(closure_130_3);
        }
        const obj8 = { type: closure_131_0(closure_131_3[5]).AVError.DEBUG_LOG_UPLOAD_FAILED, underlyingError: closure_130_2, errorMessage: closure_130_3.message };
        closure_131_0(closure_131_3[5]).reportAVError(obj8);
        throw closure_130_3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          enabled = closure_131_1(closure_131_3[6]).getConfig({ location: "uploadDebugLogFiles" }).enabled;
          const obj2 = closure_131_1(closure_131_3[6]);
          c6 = 3;
          c7 = 1;
          const obj10 = { value: closure_131_0(closure_131_3[7]).uploadRtcLogFiles(14680064, enabled, closure_130_0), done: false };
          return obj10;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj = { value, done: true };
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
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _uploadAppLogFiles(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp10 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
          c5 = 2;
          closure_130_1 = LogAggregatorAll.stringify();
          c5 = 1;
          c5 = 3;
          let getSystemLog;
          if (closure_131_8 != null) {
            getSystemLog = closure_131_8.getSystemLog;
          }
          let str = "";
          if (null != getSystemLog) {
            const promise2 = new Promise((arg0) => systemLog.getSystemLog(arg0));
            c6 = 5;
            c7 = 1;
            const obj4 = { value: promise2, done: false };
            return obj4;
          } else {
            closure_130_2 = str;
            c5 = 1;
            c5 = 4;
            closure_131_1(closure_131_3[9])().then((result) => closure_1_1(closure_1_3[10])(result, true));
            c6 = 7;
            c7 = 1;
            const promise = closure_131_1(closure_131_3[9])();
          }
        }
      } else {
        if (1 === tmp11) {
          c5 = 0;
          closure_130_9 = closure_4;
          const _HermesInternal6 = HermesInternal;
          closure_131_7.error("uploadAppLogFiles: upload app log files error " + closure_130_9.message);
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
              const consumeLogsResult = closure_131_0(closure_131_3[11]).consumeLogs();
              c1 = consumeLogsResult;
              if (consumeLogsResult == null) {
                c1 = "";
              }
              closure_130_4 = c1;
              c5 = 1;
              const obj5 = closure_131_0(closure_131_3[11]);
            } else if (5 === tmp11) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else {
                str = value;
                if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
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
                  const obj9 = { value, done: true };
                  return obj9;
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
                    const obj10 = { value, done: true };
                    return obj10;
                  }
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 !== 2) {
                c5 = 0;
              }
              closure_130_7 = tmp12;
              const tmp42 = closure_131_1(closure_131_3[13])(closure_130_7);
              const result = closure_131_0(closure_131_3[14]).serializeComponentRenderAverages();
              const _JSON = JSON;
              const _JSON2 = JSON;
              const json = JSON.stringify(closure_131_1(closure_131_3[15])(), undefined, 2);
              const _HermesInternal3 = HermesInternal;
              closure_130_8 = "\n    " + tmp42 + "\n\n    " + result + "\n\n    Metadata:\n    " + json + "\n\n    ChannelStore:\n    " + JSON.stringify(closure_131_5.getDebugInfo(), undefined, 2) + "\n\n    Logs:\n    " + closure_130_1 + "\n\n    System logs:\n    " + closure_130_2 + "\n\n    LibDiscore logs:\n    " + closure_130_4 + "\n\n    Push Notifications:\n    " + closure_130_3 + "\n    ";
              const obj6 = closure_131_0(closure_131_3[14]);
              closure_131_2(closure_131_3[8]).clear();
              const obj11 = { category: closure_130_0, filename: "discord_app_logs", body: closure_130_8 };
              c6 = 9;
              c7 = 1;
              const obj12 = { value: closure_131_1(closure_131_3[16])(obj11), done: false };
              return obj12;
            }
            closure_130_5 = closure_130_1.length + closure_130_2.length + closure_130_3.length + closure_130_4.length;
            if (closure_130_5 > closure_131_6) {
              closure_130_6 = 1 - closure_131_6 / closure_130_5;
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
            if (null != closure_131_0(closure_131_3[12]).default) {
              c6 = 8;
              c7 = 1;
              const obj13 = { value: closure_131_0(closure_131_3[12]).default.getAppFirstVisibleTimestamp(), done: false };
              return obj13;
            }
          }
        }
        c5 = 0;
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c5 = 1;
      const _HermesInternal5 = HermesInternal;
      closure_130_1 = "Logs failed: " + closure_4;
    } catch (tmp92) {
      closure_4 = tmp92;
      if (tmp5 === c5) {
        c7 = tmp3;
        throw tmp92;
      } else if (tmp2 === tmp94) {
        c6 = tmp2;
      } else if (tmp === tmp94) {
        c6 = tmp;
      } else if (tmp3 === tmp94) {
        c6 = tmp3;
      } else if (tmp7 === tmp94) {
        c6 = tmp7;
      } else {
        c6 = tmp6;
      }
    }
  }
};
let c6 = 9437184;
let closure_7 = new LoggerDefault("DebugUploadManager");
const CrashReportingManager = fn(17).NativeModules.CrashReportingManager;
const size = fn(2);
let result = size.fileFinishedImporting("modules/debug/DebugUploadManager.tsx");

export const uploadDebugLogFiles = function uploadDebugLogFiles() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { uploadAppLogFiles };