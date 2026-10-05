// === Module 12530: uploadRtcLogFiles ===

// Module 12530 (uploadRtcLogFiles)
import LoggerDefault from "Logger" /* 3 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c7, c8;

let c3;
let closure_4;
let obj = function _uploadRtcLogFiles() {
  obj = _asyncToGenerator(async function(arg0) {
    let closure_4;
    let closure_0 = arg0;
    if (c8 === 2) {
      c8 = 3;
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
      while (true) {
        let message;
        let c1;
        let body;
        let closure_1;
        c8 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            message = tmp4;
            c1 = undefined;
            body = undefined;
            let items = ["discord-webrtc_0", "discord-webrtc_1", "discord-last-webrtc_0", "discord-last-webrtc_1"];
            closure_1 = items[Symbol.iterator]();
          }
        } else if (1 === tmp4) {
          let c6 = 0;
          closure_1.return();
          throw closure_1_5;
        } else if (2 === tmp4) {
          c6 = 1;
          message = closure_1_5;
          let _HermesInternal2 = HermesInternal;
          let errorResult = closure_132_5.error("uploadRtcLogFiles: Log file reading error: " + message.message);
          let self5 = this;
          let self6 = this;
          let uploadVoiceDebugLogsError = new closure_132_0(closure_132_1[4]).UploadVoiceDebugLogsError(closure_132_0(closure_132_1[4]).UploadErrorCodes.READ);
          throw uploadVoiceDebugLogsError;
        } else if (3 === tmp4) {
          c6 = 1;
          let _HermesInternal = HermesInternal;
          let errorResult1 = closure_132_5.error("uploadRtcLogFiles: Log file upload error: status: " + closure_1_5.status + ", message: " + closure_1_5.message);
          if (429 === closure_1_5.status) {
            let self3 = this;
            let self4 = this;
            let uploadVoiceDebugLogsError1 = new closure_132_0(closure_132_1[4]).UploadVoiceDebugLogsError(closure_132_0(closure_132_1[4]).UploadErrorCodes.PROGRESS);
            throw uploadVoiceDebugLogsError1;
          } else {
            let self = this;
            let self2 = this;
            let uploadVoiceDebugLogsError2 = new closure_132_0(closure_132_1[4]).UploadVoiceDebugLogsError(closure_132_0(closure_132_1[4]).UploadErrorCodes.UPLOAD);
            throw uploadVoiceDebugLogsError2;
          }
        } else if (4 === tmp4) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_1.return();
            c8 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            body = value;
            if (null == value) {
              c6 = 0;
            } else if (body.length > closure_0) {
              let warnResult = closure_132_5.warn("uploadRtcLogFiles: Log file is too big, skipping upload");
              c6 = 0;
            } else {
              c6 = 3;
              let HTTP = closure_132_0(closure_132_1[5]).HTTP;
              let request = { url: closure_132_4.DEBUG_LOG(closure_132_3.ANDROID_APP, c1), body, headers: { "Content-Type": "text/plain" }, rejectWithError: false };
              let post = HTTP.post;
              c7 = 5;
              c8 = 1;
              let obj6 = { value: post(request), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_1.return();
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
        }
        if (closure_1 === undefined) {
          c8 = 3;
          return { value: "IconComponent", done: null };
        } else {
          c1 = tmp51;
          body = "";
          c6 = 2;
          let obj4 = closure_132_0(closure_132_1[3]);
          c7 = 4;
          c8 = 1;
          let obj7 = { value: obj4.readFile("documents", c1, "utf8"), done: false };
          return obj7;
        }
      }
    }
  });
  return obj(...arguments);
};
({ DebugLogCategory: c3, Endpoints: closure_4 } = Constants);
const tmp3 = new LoggerDefault("uploadRtcLogFiles");
let closure_5 = tmp3;
const result = size.fileFinishedImporting("lib/uploadRtcLogFiles.android.tsx");

export const uploadRtcLogFiles = function uploadRtcLogFiles() {
  return obj(...arguments);
};