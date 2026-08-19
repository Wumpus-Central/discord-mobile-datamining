// discord_app/lib/uploadRtcLogFiles.android.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ME from "../Constants.tsx";

const require = fn;
function _uploadRtcLogFiles() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c8 = 2;
          let tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              let items = ["discord-webrtc_0", "discord-webrtc_1", "discord-last-webrtc_0", "discord-last-webrtc_1"];
              let length = items;
              closure_1 = items[Symbol.iterator]();
            }
          } else if (1 === tmp4) {
            c6 = 0;
            closure_1.return();
            throw logger;
          } else if (2 === tmp4) {
            c6 = 1;
            closure_3 = logger;
            let _HermesInternal2 = HermesInternal;
            let errorResult = logger.error("uploadRtcLogFiles: Log file reading error: " + closure_3.message);
            let uploadVoiceDebugLogsError = new callback(closure_1[4]).UploadVoiceDebugLogsError(callback(closure_1[4]).UploadErrorCodes.READ);
            throw uploadVoiceDebugLogsError;
          } else if (3 === tmp4) {
            c6 = 1;
            closure_4 = logger;
            let _HermesInternal = HermesInternal;
            let errorResult1 = logger.error("uploadRtcLogFiles: Log file upload error: status: " + closure_4.status + ", message: " + closure_4.message);
            if (429 === closure_4.status) {
              let uploadVoiceDebugLogsError1 = new callback(closure_1[4]).UploadVoiceDebugLogsError(callback(closure_1[4]).UploadErrorCodes.PROGRESS);
              throw uploadVoiceDebugLogsError1;
            } else {
              let uploadVoiceDebugLogsError2 = new callback(closure_1[4]).UploadVoiceDebugLogsError(callback(closure_1[4]).UploadErrorCodes.UPLOAD);
              throw uploadVoiceDebugLogsError2;
            }
          } else if (4 === tmp4) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_1.return();
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              length = arg1;
              if (null == arg1) {
                c6 = 0;
              } else if (length.length > callback) {
                let warnResult = logger.warn("uploadRtcLogFiles: Log file is too big, skipping upload");
                c6 = 0;
              } else {
                c6 = 3;
                let HTTP = callback(closure_1[5]).HTTP;
                let obj2 = { url: null, body: null, headers: null, rejectWithError: false };
                obj2[0] = closure_4.DEBUG_LOG(closure_3.ANDROID_APP, closure_1);
                obj2[1] = length;
                obj2[2] = { "Content-Type": "text/plain" };
                c7 = 5;
                c8 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = HTTP.post(obj2);
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_1.return();
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c6 = 0;
          }
          if (closure_1 === undefined) {
            c8 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else {
            closure_1 = tmp57;
            length = "";
            c6 = 2;
            obj3 = callback(closure_1[3]);
            c7 = 4;
            c8 = 1;
            let obj4 = { value: null, done: false };
            obj4[0] = obj3.readFile("documents", closure_1, "utf8");
            return obj4;
          }
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ DebugLogCategory: c3, Endpoints: c4 } = ME);
let closure_5 = new timestampDefault("uploadRtcLogFiles");
const tmp3 = new timestampDefault("uploadRtcLogFiles");
const result = require("obj132").fileFinishedImporting("lib/uploadRtcLogFiles.android.tsx");

export const uploadRtcLogFiles = function uploadRtcLogFiles(arg0, closure_0) {
  const self = this;
  const apply = _uploadRtcLogFiles.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};