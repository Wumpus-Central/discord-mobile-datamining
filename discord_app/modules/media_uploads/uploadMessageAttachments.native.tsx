// === Module 7465: uploadMessageAttachments ===

// Module 7465 (uploadMessageAttachments)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UploadStore from "UploadStore" /* 7466 */;
import size from "module_2" /* 2 */;

let c5, id;

let obj = function _uploadMessageAttachments() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let closure_0;
    let value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let uploader;
        let key;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            c3 = undefined;
            ({ channelId: c0, message: c1, nonce: c2, items: c3, shouldUploadFailureSendNotification: c4 } = channelId);
            uploader = undefined;
            key = undefined;
            let message;
            c4 = 1;
            c5 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (closure_131_5.has(c2)) {
            c5 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const self = this;
            const self2 = this;
            const tmp13 = new closure_131_1(closure_131_2[2])();
            uploader = tmp13;
            const _HermesInternal = HermesInternal;
            const str = "pending-upload-";
            key = "pending-upload-" + uploader._file.id;
            const obj5 = { key };
            const createMessageRecord = closure_131_0(closure_131_2[3]).createMessageRecord;
            const tmp18 = closure_131_0(closure_131_2[3]);
            const merged = Object.assign(c1);
            message = createMessageRecord(obj5);
            uploader.on("start", (file) => {
              uploader.add(closure_1_2);
              obj = closure_1(closure_2[4]);
              const obj2 = { type: "UPLOAD_START", channelId, file, uploader, message };
              obj.dispatch(obj2);
            });
            uploader.on("compression-progress", (file) => {
              obj = closure_1(closure_2[4]);
              const obj2 = { type: "UPLOAD_COMPRESSION_PROGRESS", channelId, file };
              obj.dispatch(obj2);
            });
            uploader.on("progress", (file) => {
              obj = closure_1(closure_2[4]);
              const obj2 = { type: "UPLOAD_PROGRESS", channelId, file };
              obj.dispatch(obj2);
            });
            uploader.on("error", (file) => {
              uploader.delete(closure_1_2);
              uploader.cancel();
              obj = closure_1(closure_2[4]);
              const obj2 = { type: "UPLOAD_FAIL", channelId, file, messageId: message.id, shouldSendNotification };
              obj.dispatch(obj2);
            });
            uploader.on("complete", (id) => {
              const file = id;
              uploader.delete(closure_2);
              const messageForFile = shouldSendNotification.getMessageForFile(id.id);
              const _aborted = null != messageForFile && "" === messageForFile.content && uploader._aborted;
              if (_aborted) {
                id = messageForFile.nonce;
                const dispatch = closure_1_1(closure_1_2[4]).dispatch;
                closure_1_1(closure_1_2[4]);
                if (id == null) {
                  id = messageForFile.id;
                }
                obj = { type: "MESSAGE_DELETE", id, channelId: messageForFile.channel_id };
                dispatch(obj);
              }
              if (uploader._aborted) {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => {
                  obj = closure_1(closure_2[4]);
                  const obj2 = { type: "UPLOAD_COMPLETE", channelId, file, aborted: true };
                  obj.dispatch(obj2);
                }, 0);
              }
            });
            uploader.on("cancel-upload-item", (file) => {
              obj = closure_1(closure_2[4]);
              const obj2 = { type: "UPLOAD_FILE_UPDATE", file, channelId };
              obj.dispatch(obj2);
            });
            value = {};
            c4 = 2;
            c5 = 1;
            const obj6 = { value: uploader.uploadFiles(c3), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          value.attachments = value;
          value.uploader = uploader;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp37) {
        c5 = 3;
        throw tmp37;
      }
    }
  });
  return obj(...arguments);
};
new Set();
const result = size.fileFinishedImporting("modules/media_uploads/uploadMessageAttachments.native.tsx");

export const uploadMessageAttachments = function uploadMessageAttachments() {
  return obj(...arguments);
};