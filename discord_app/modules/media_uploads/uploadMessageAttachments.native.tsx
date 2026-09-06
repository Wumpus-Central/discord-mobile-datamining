// discord_app/modules/media_uploads/uploadMessageAttachments.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UploadStore from "../../stores/UploadStore.tsx";

const require = fn;
let closure_6 = async function _uploadMessageAttachments(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          dependencyMap = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          ({
            channelId: closure_130_0,
            message: closure_130_1,
            nonce: closure_130_2,
            items: closure_130_3,
            shouldUploadFailureSendNotification: closure_130_4,
          } = channelId);
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else if (closure_131_5.has(closure_130_2)) {
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          const tmp16 = new closure_131_1(closure_131_2[2])();
          closure_130_5 = tmp16;
          const _HermesInternal = HermesInternal;
          closure_130_6 = "pending-upload-" + closure_130_5._file.id;
          let obj2 = closure_131_0(closure_131_2[3]);
          obj2 = {};
          const merged = Object.assign(closure_130_1);
          obj2.key = closure_130_6;
          closure_130_7 = obj2.createMessageRecord(obj2);
          closure_130_5.on("start", (file) => {
            uploader.add(dependencyMap);
            closure_1(573);
            const obj = { type: "UPLOAD_START", channelId, file, uploader, message };
            obj.dispatch(obj);
          });
          closure_130_5.on("compression-progress", (file) => {
            closure_1(573);
            const obj = { type: "UPLOAD_COMPRESSION_PROGRESS", channelId, file };
            obj.dispatch(obj);
          });
          closure_130_5.on("progress", (file) => {
            closure_1(573);
            const obj = { type: "UPLOAD_PROGRESS", channelId, file };
            obj.dispatch(obj);
          });
          closure_130_5.on("error", (file) => {
            uploader.delete(dependencyMap);
            uploader.cancel();
            closure_1(573);
            const obj = { type: "UPLOAD_FAIL", channelId, file, messageId: message.id, shouldSendNotification };
            obj.dispatch(obj);
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
              let obj = closure_1_1(573);
              id = messageForFile.nonce;
              if (id == null) {
                id = messageForFile.id;
              }
              obj = { type: "MESSAGE_DELETE", id, channelId: messageForFile.channel_id };
              obj.dispatch(obj);
            }
            if (uploader._aborted) {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => {
                closure_1(closure_2[4]);
                const obj = { type: "UPLOAD_COMPLETE", channelId, file, aborted: true };
                obj.dispatch(obj);
              }, 0);
            }
          });
          closure_130_5.on("cancel-upload-item", (file) => {
            closure_1(573);
            const obj = { type: "UPLOAD_FILE_UPDATE", file, channelId };
            obj.dispatch(obj);
          });
          value = {};
          c4 = 2;
          c5 = 1;
          const obj3 = { value: closure_130_5.uploadFiles(closure_130_3), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        value.attachments = value;
        value.uploader = closure_130_5;
        c5 = 3;
        obj = { value, done: true };
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
