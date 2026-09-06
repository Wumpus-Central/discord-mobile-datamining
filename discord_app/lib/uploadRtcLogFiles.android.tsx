// discord_app/lib/uploadRtcLogFiles.android.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_6 = async function _uploadRtcLogFiles(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c8 = 2;
      let tmp4 = c7;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp;
          closure_3 = tmp4;
          closure_131_0 = closure_0;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          let items = ["discord-webrtc_0", "discord-webrtc_1", "discord-last-webrtc_0", "discord-last-webrtc_1"];
          dependencyMap = items[Symbol.iterator]();
        }
      } else if (1 === tmp4) {
        c6 = 0;
        dependencyMap.return();
        throw closure_1_5;
      } else if (2 === tmp4) {
        c6 = 1;
        closure_131_3 = closure_1_5;
        let _HermesInternal2 = HermesInternal;
        let errorResult = closure_132_5.error("uploadRtcLogFiles: Log file reading error: " + closure_131_3.message);
        let tmp48 = new.target;
        let tmp49 = new.target;
        let uploadVoiceDebugLogsError = new closure_132_0(closure_132_1[4]).UploadVoiceDebugLogsError(
          closure_132_0(closure_132_1[4]).UploadErrorCodes.READ,
        );
        throw uploadVoiceDebugLogsError;
      } else if (3 === tmp4) {
        c6 = 1;
        closure_131_4 = closure_1_5;
        let _HermesInternal = HermesInternal;
        let errorResult1 = closure_132_5.error(
          "uploadRtcLogFiles: Log file upload error: status: " +
            closure_131_4.status +
            ", message: " +
            closure_131_4.message,
        );
        if (429 === closure_131_4.status) {
          let tmp33 = new.target;
          let tmp34 = new.target;
          let uploadVoiceDebugLogsError1 = new closure_132_0(closure_132_1[4]).UploadVoiceDebugLogsError(
            closure_132_0(closure_132_1[4]).UploadErrorCodes.PROGRESS,
          );
          throw uploadVoiceDebugLogsError1;
        } else {
          let tmp24 = new.target;
          let tmp25 = new.target;
          let uploadVoiceDebugLogsError2 = new closure_132_0(closure_132_1[4]).UploadVoiceDebugLogsError(
            closure_132_0(closure_132_1[4]).UploadErrorCodes.UPLOAD,
          );
          throw uploadVoiceDebugLogsError2;
        }
      } else if (4 === tmp4) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          dependencyMap.return();
          c8 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          closure_131_2 = value;
          if (null == value) {
            c6 = 0;
          } else if (closure_131_2.length > closure_131_0) {
            let warnResult = closure_132_5.warn("uploadRtcLogFiles: Log file is too big, skipping upload");
            c6 = 0;
          } else {
            c6 = 3;
            let HTTP = closure_132_0(closure_132_1[5]).HTTP;
            let request = { url: null, body: null, headers: null, rejectWithError: false };
            request.url = closure_132_4.DEBUG_LOG(closure_132_3.ANDROID_APP, closure_131_1);
            request.body = closure_131_2;
            request.headers = { "Content-Type": "text/plain" };
            c7 = 5;
            c8 = 1;
            let obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        dependencyMap.return();
        c8 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c6 = 0;
      }
      if (dependencyMap === undefined) {
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } else {
        closure_131_1 = tmp57;
        closure_131_2 = "";
        c6 = 2;
        closure_132_0(closure_132_1[3]);
        c7 = 4;
        c8 = 1;
        let obj3 = { value: null, done: false };
        obj3.value = obj3.readFile("documents", closure_131_1, "utf8");
        return obj3;
      }
    }
  }
};
const Constants = fn(1074);
({ DebugLogCategory: c3, Endpoints: closure_4 } = Constants);
let closure_5 = new LoggerDefault("uploadRtcLogFiles");
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploadRtcLogFiles.android.tsx");

export const uploadRtcLogFiles = function uploadRtcLogFiles() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
