// discord_app/lib/uploadRtcLogFiles.android.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import closure_2 from "../../_runtime/00005_asyncGeneratorStep.js";
import ME from "../Constants.tsx";

const require = arg1;
function _uploadRtcLogFiles() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function* (arg0) {
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let num = 2;
          c8 = 2;
          let tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              let num9 = 3;
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num8 = 3;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              let tmp81 = callback;
              closure_1 = undefined;
              let length;
              let items = ["discord-webrtc_0", "discord-webrtc_1", "discord-last-webrtc_0", "discord-last-webrtc_1"];
              length = items;
              let tmp82 = items;
              length = items;
              closure_1 = items[Symbol.iterator]();
            }
          } else if (1 === tmp4) {
            let tmp52 = logger;
            let tmp53 = logger;
            c6 = 0;
            let tmp54 = closure_1;
            closure_1.return();
            throw logger;
          } else if (2 === tmp4) {
            let tmp37 = closure_3;
            let tmp38 = closure_4;
            let tmp39 = logger;
            let tmp40 = logger;
            c6 = 1;
            closure_3 = logger;
            let tmp41 = logger;
            let tmp42 = closure_3;
            let _HermesInternal2 = HermesInternal;
            let errorResult = logger.error("uploadRtcLogFiles: Log file reading error: " + closure_3.message);
            let tmp44 = callback;
            let tmp45 = closure_1;
            let tmp46 = callback;
            let tmp47 = closure_1;
            let tmp48 = new.target;
            let tmp49 = new.target;
            let uploadVoiceDebugLogsError = new callback(closure_1[4]).UploadVoiceDebugLogsError(
              callback(closure_1[4]).UploadErrorCodes.READ,
            );
            let tmp51 = uploadVoiceDebugLogsError;
            throw uploadVoiceDebugLogsError;
          } else if (3 === tmp4) {
            let tmp10 = closure_3;
            let tmp11 = closure_4;
            let tmp12 = logger;
            let tmp13 = logger;
            c6 = 1;
            closure_4 = logger;
            let tmp14 = logger;
            let tmp15 = closure_4;
            let tmp16 = closure_4;
            let _HermesInternal = HermesInternal;
            let errorResult1 = logger.error(
              "uploadRtcLogFiles: Log file upload error: status: " +
                closure_4.status +
                ", message: " +
                closure_4.message,
            );
            let tmp18 = closure_4;
            if (429 === closure_4.status) {
              let tmp28 = closure_4;
              let tmp29 = callback;
              let tmp30 = closure_1;
              let tmp31 = callback;
              let tmp32 = closure_1;
              let tmp33 = new.target;
              let tmp34 = new.target;
              let uploadVoiceDebugLogsError1 = new callback(closure_1[4]).UploadVoiceDebugLogsError(
                callback(closure_1[4]).UploadErrorCodes.PROGRESS,
              );
              let tmp36 = uploadVoiceDebugLogsError1;
              throw uploadVoiceDebugLogsError1;
            } else {
              let tmp19 = closure_4;
              let tmp20 = callback;
              let tmp21 = closure_1;
              let tmp22 = callback;
              let tmp23 = closure_1;
              let tmp24 = new.target;
              let tmp25 = new.target;
              let uploadVoiceDebugLogsError2 = new callback(closure_1[4]).UploadVoiceDebugLogsError(
                callback(closure_1[4]).UploadErrorCodes.UPLOAD,
              );
              let tmp27 = uploadVoiceDebugLogsError2;
              throw uploadVoiceDebugLogsError2;
            }
          } else if (4 === tmp4) {
            if (arg0 === 1) {
              let num5 = 3;
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              let tmp9 = closure_1;
              closure_1.return();
              let num4 = 3;
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let tmp69 = closure_3;
              length = arg1;
              if (null == arg1) {
                c6 = 0;
              } else {
                let tmp70 = closure_3;
                let tmp71 = length;
                let tmp72 = callback;
                if (length.length > callback) {
                  let tmp6 = closure_4;
                  let tmp7 = logger;
                  let warnResult = logger.warn("uploadRtcLogFiles: Log file is too big, skipping upload");
                  c6 = 0;
                } else {
                  let tmp73 = closure_3;
                  let tmp74 = closure_4;
                  c6 = 3;
                  let tmp75 = callback;
                  let tmp76 = closure_1;
                  let HTTP = callback(closure_1[5]).HTTP;
                  let obj2 = { url: null, body: null, headers: null, rejectWithError: false };
                  let tmp77 = closure_4;
                  let tmp78 = closure_3;
                  let tmp79 = closure_1;
                  obj2[0] = closure_4.DEBUG_LOG(closure_3.ANDROID_APP, closure_1);
                  let tmp80 = length;
                  obj2[1] = length;
                  obj2[2] = { "Content-Type": "text/plain" };
                  c7 = 5;
                  let num18 = 1;
                  c8 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = HTTP.post(obj2);
                  return obj3;
                }
              }
            }
          } else if (arg0 === 1) {
            let num3 = 3;
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            let tmp5 = closure_1;
            closure_1.return();
            let num2 = 3;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c6 = 0;
          }
          let tmp55 = length;
          let tmp56 = closure_1;
          if (closure_1 === undefined) {
            let num7 = 3;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            let tmp58 = closure_3;
            closure_1 = tmp57;
            length = "";
            let tmp59 = closure_4;
            c6 = 2;
            let tmp60 = callback;
            let tmp61 = closure_1;
            obj3 = callback(closure_1[3]);
            let tmp62 = closure_1;
            c7 = 4;
            let num6 = 1;
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
const result = require("set").fileFinishedImporting("lib/uploadRtcLogFiles.android.tsx");

export const uploadRtcLogFiles = function uploadRtcLogFiles(arg0, enabled, closure_0) {
  const self = this;
  const apply = _uploadRtcLogFiles.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
