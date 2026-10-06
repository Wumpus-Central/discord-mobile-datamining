// === Module 12543: DebugUploadManager ===

// Module 12543 (DebugUploadManager)
import LoggerDefault from "Logger" /* 3 */;
import LogAggregatorAll from "LogAggregator" /* 7 */;
import react_native from "react-native" /* 17 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let appFirstVisibleTimestamp, body;

let obj = function _uploadDebugLogFiles() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj3;
    function uploadErrorToAVUnderlyingError(code) {
      code = code.code;
      if (closure_1_0(message[4]).UploadErrorCodes.GENERAL === code) {
        return closure_1_0(message[5]).AVUnderlyingError.UploadErrorGeneral;
      } else if (closure_1_0(message[4]).UploadErrorCodes.NO_FILE === code) {
        return closure_1_0(message[5]).AVUnderlyingError.UploadErrorNoFile;
      } else if (closure_1_0(message[4]).UploadErrorCodes.PROGRESS === code) {
        return closure_1_0(message[5]).AVUnderlyingError.UploadErrorProgress;
      } else if (closure_1_0(message[4]).UploadErrorCodes.UPLOAD === code) {
        return closure_1_0(message[5]).AVUnderlyingError.UploadErrorUpload;
      } else if (closure_1_0(message[4]).UploadErrorCodes.READ === code) {
        return closure_1_0(message[5]).AVUnderlyingError.UploadErrorRead;
      }
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let message;
        let enabled;
        let underlyingError;
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
            message = tmp;
            closure_0 = closure_1;
            enabled = undefined;
            underlyingError = undefined;
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj6 = { value: uploadAppLogFiles(closure_0), done: false };
            return obj6;
          }
        } else if (1 === c6) {
          c5 = 0;
          message = closure_4;
          if (message instanceof closure_131_0(closure_131_3[4]).UploadVoiceDebugLogsError) {
            underlyingError = uploadErrorToAVUnderlyingError(message);
          }
          const obj7 = { type: closure_131_0(closure_131_3[5]).AVError.DEBUG_LOG_UPLOAD_FAILED, underlyingError, errorMessage: message.message };
          const reportAVError = closure_131_0(closure_131_3[5]).reportAVError;
          const tmp26 = closure_131_0(closure_131_3[5]);
          reportAVError(obj7);
          throw message;
        } else if (2 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj2 = closure_131_1(closure_131_3[6]);
            enabled = obj2.getConfig({ location: "uploadDebugLogFiles" }).enabled;
            c6 = 3;
            c7 = 1;
            const obj9 = { value: obj3.uploadRtcLogFiles(14680064, enabled, closure_0), done: false };
            obj3 = closure_131_0(closure_131_3[7]);
            return obj9;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        closure_4 = tmp36;
        if (0 === c5) {
          c7 = 3;
          throw tmp36;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function uploadAppLogFiles() {
  return obj(...arguments);
}
obj = function _uploadAppLogFiles() {
  obj = _asyncToGenerator(async (category) => {
    let closure_3;
    let closure_4;
    c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0) {
      let length;
      let length2;
      let length3;
      let length4;
      let slice;
      let slice2;
      let slice3;
      let slice4;
      let systemLog;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp80;
        try {
          let tmp;
          let closure_5;
          let closure_6;
          let _var;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              tmp = undefined;
              tmp80 = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              appFirstVisibleTimestamp = undefined;
              body = undefined;
              const obj15 = LogAggregatorAll;
              _var = obj15.stringify();
              c5 = 1;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              message = tmp80;
              const _HermesInternal6 = HermesInternal;
              closure_131_7.error("uploadAppLogFiles: upload app log files error " + message.message);
            } else {
              if (2 === c6) {
                c5 = 1;
                const _HermesInternal5 = HermesInternal;
                _var = "Logs failed: " + tmp80;
              } else if (3 === c6) {
                c5 = 1;
                const _HermesInternal4 = HermesInternal;
                appFirstVisibleTimestamp = "System Logs failed " + tmp80;
              } else {
                if (4 === c6) {
                  const _HermesInternal2 = HermesInternal;
                  tmp = "Push logs failed: " + tmp80;
                  c5 = 5;
                  const obj5 = closure_131_0(closure_131_3[11]);
                  const consumeLogsResult = obj5.consumeLogs();
                  let c1 = consumeLogsResult;
                  if (consumeLogsResult == null) {
                    c1 = "";
                  }
                  tmp80 = c1;
                  c5 = 1;
                } else if (5 === c6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else {
                    let str = value;
                    if (arg0 !== 2) {
                      appFirstVisibleTimestamp = str;
                      c5 = 1;
                    } else {
                      c5 = 0;
                      c7 = 3;
                      return { value, done: true };
                    }
                  }
                } else {
                  if (6 === c6) {
                    c5 = 1;
                    const _HermesInternal = HermesInternal;
                    tmp80 = "LibDiscore logs failed: " + tmp80;
                  } else if (7 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c5 = 0;
                      c7 = 3;
                      return { value, done: true };
                    } else {
                      tmp = value;
                      c5 = 1;
                    }
                  } else if (8 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else {
                      appFirstVisibleTimestamp = value;
                      if (arg0 === 2) {
                        c5 = 0;
                        c7 = 3;
                        return { value, done: true };
                      }
                    }
                  } else if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 0;
                    c7 = 3;
                    return { value, done: true };
                  } else {
                    c5 = 0;
                  }
                  const tmp35 = closure_131_1(closure_131_3[13])(appFirstVisibleTimestamp);
                  const obj6 = closure_131_0(closure_131_3[14]);
                  const result = obj6.serializeComponentRenderAverages();
                  const _JSON = JSON;
                  const _JSON2 = JSON;
                  const json = JSON.stringify(closure_131_1(closure_131_3[15])(), undefined, 2);
                  const _HermesInternal3 = HermesInternal;
                  body = "\n    " + tmp35 + "\n\n    " + result + "\n\n    Metadata:\n    " + json + "\n\n    ChannelStore:\n    " + JSON.stringify(closure_131_5.getDebugInfo(), undefined, 2) + "\n\n    Logs:\n    " + _var + "\n\n    System logs:\n    " + appFirstVisibleTimestamp + "\n\n    LibDiscore logs:\n    " + tmp80 + "\n\n    Push Notifications:\n    " + tmp + "\n    ";
                  const obj7 = closure_131_2(closure_131_3[8]);
                  obj7.clear();
                  const obj10 = { category, filename: "discord_app_logs", body };
                  appFirstVisibleTimestamp = closure_131_1(closure_131_3[16])(obj10);
                  c6 = 9;
                  c7 = 1;
                  return { value: appFirstVisibleTimestamp, done: false };
                }
                closure_5 = _var.length + appFirstVisibleTimestamp.length + tmp.length + tmp80.length;
                if (closure_5 > closure_131_6) {
                  closure_6 = 1 - closure_131_6 / closure_5;
                  const _Math = Math;
                  ({ slice, length } = _var);
                  _var = slice(length - Math.floor(_var.length * closure_6));
                  const _Math2 = Math;
                  ({ slice: slice2, length: length2 } = appFirstVisibleTimestamp);
                  appFirstVisibleTimestamp = slice2(length2 - Math.floor(appFirstVisibleTimestamp.length * closure_6));
                  const _Math3 = Math;
                  ({ slice: slice3, length: length3 } = tmp);
                  tmp = slice3(length3 - Math.floor(tmp.length * closure_6));
                  const _Math4 = Math;
                  ({ slice: slice4, length: length4 } = tmp80);
                  tmp80 = slice4(length4 - Math.floor(tmp80.length * closure_6));
                }
                appFirstVisibleTimestamp = null;
                if (null != closure_131_0(closure_131_3[12]).default) {
                  const _default = closure_131_0(closure_131_3[12]).default;
                  appFirstVisibleTimestamp = _default.getAppFirstVisibleTimestamp();
                  c6 = 8;
                  c7 = 1;
                  return { value: appFirstVisibleTimestamp, done: false };
                }
              }
              c5 = 4;
              appFirstVisibleTimestamp = closure_131_1(closure_131_3[9])();
              c6 = 7;
              c7 = 1;
              const obj13 = { value: appFirstVisibleTimestamp.then((result) => _var(closure_1_3[10])(result, true)), done: false };
              return obj13;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
          c5 = 3;
          appFirstVisibleTimestamp = closure_131_8;
          let getSystemLog;
          if (closure_131_8 != null) {
            getSystemLog = appFirstVisibleTimestamp.getSystemLog;
          }
          str = "";
          if (null != getSystemLog) {
            appFirstVisibleTimestamp = Promise;
            const self = this;
            const self2 = this;
            c6 = 5;
            c7 = 1;
            const obj14 = { value: new Promise((arg0) => systemLog.getSystemLog(arg0)), done: false };
            return obj14;
          }
        } catch (tmp80) {
          if (0 === c5) {
            c7 = 3;
            throw tmp80;
          } else if (1 === c5) {
            c6 = 1;
          } else if (2 === c5) {
            c6 = 2;
          } else if (3 === c5) {
            c6 = 3;
          } else if (4 === c5) {
            c6 = 4;
          } else {
            c6 = 6;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let c6 = 9437184;
let closure_7 = new LoggerDefault("DebugUploadManager");
new LoggerDefault("DebugUploadManager");
const CrashReportingManager = react_native.NativeModules.CrashReportingManager;
let result = size.fileFinishedImporting("modules/debug/DebugUploadManager.tsx");

export const uploadDebugLogFiles = function uploadDebugLogFiles() {
  return obj(...arguments);
};
export { uploadAppLogFiles };