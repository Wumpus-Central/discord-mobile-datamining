// === Module 7251: uploadMessageAttachments ===

// Module 7251 (uploadMessageAttachments)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UploadStore from "UploadStore" /* 7252 */;

const require = fn;
let closure_6 = async function _uploadMessageAttachments(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp5;
          dependencyMap = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          ({ channelId: closure_130_0, message: closure_130_1, nonce: closure_130_2, items: closure_130_3, shouldUploadFailureSendNotification: closure_130_4 } = channelId);
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else if (closure_131_5.has(closure_130_2)) {
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          const tmp16 = new closure_131_1(closure_131_2[2])();
          closure_130_5 = tmp16;
          const _HermesInternal = HermesInternal;
          closure_130_6 = "pending-upload-" + closure_130_5._file.id;
          const obj6 = {};
          const merged = Object.assign(closure_130_1);
          obj6.key = closure_130_6;
          closure_130_7 = closure_131_0(closure_131_2[3]).createMessageRecord(obj6);
          closure_130_5.on("start", (file) => {
            uploader.add(dependencyMap);
            closure_1(573).dispatch({ type: "UPLOAD_START", channelId, file, uploader, message });
          });
          closure_130_5.on("compression-progress", (file) => {
            closure_1(573).dispatch({ type: "UPLOAD_COMPRESSION_PROGRESS", channelId, file });
          });
          closure_130_5.on("progress", (file) => {
            closure_1(573).dispatch({ type: "UPLOAD_PROGRESS", channelId, file });
          });
          closure_130_5.on("error", (file) => {
            uploader.delete(dependencyMap);
            uploader.cancel();
            closure_1(573).dispatch({ type: "UPLOAD_FAIL", channelId, file, messageId: message.id, shouldSendNotification });
          });
          closure_130_5.on("complete", (id) => {
            const file = id;
            uploader.delete(closure_2);
            const messageForFile = shouldSendNotification.getMessageForFile(id.id);
            let _aborted = null != messageForFile;
            if (_aborted) {
              _aborted = "" === messageForFile.content;
            }
            if (_aborted) {
              _aborted = uploader._aborted;
            }
            if (_aborted) {
              id = messageForFile.nonce;
              if (id == null) {
                id = messageForFile.id;
              }
              const obj2 = { type: "MESSAGE_DELETE", id, channelId: messageForFile.channel_id };
              closure_1_1(573).dispatch(obj2);
              const obj = closure_1_1(573);
            }
            if (uploader._aborted) {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => {
                closure_1(closure_2[4]).dispatch({ type: "UPLOAD_COMPLETE", channelId, file, aborted: true });
              }, 0);
            }
          });
          closure_130_5.on("cancel-upload-item", (file) => {
            closure_1(573).dispatch({ type: "UPLOAD_FILE_UPDATE", file, channelId });
          });
          value = {};
          c4 = 2;
          c5 = 1;
          const obj7 = { value: closure_130_5.uploadFiles(closure_130_3), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        value.attachments = value;
        value.uploader = closure_130_5;
        c5 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp39) {
      c5 = tmp;
      throw tmp39;
    }
  }
};
const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_uploads/uploadMessageAttachments.native.tsx");

export const uploadMessageAttachments = function uploadMessageAttachments() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};