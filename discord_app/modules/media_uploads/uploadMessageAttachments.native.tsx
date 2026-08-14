// discord_app/modules/media_uploads/uploadMessageAttachments.native.tsx
import closure_3 from "set";
import initialize from "initialize";
import set from "nativeEventEmitter";

const require = arg1;
function _uploadMessageAttachments() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0, attachments) {
      let c0;
      let c2;
      let c3;
      let c4;
      let closure_1;
      if (set === 2) {
        set = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw attachments;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = attachments;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          set = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              set = 3;
              throw attachments;
            } else if (arg0 === 2) {
              set = 3;
              obj = { value: null, done: true };
              obj[0] = attachments;
              return obj;
            } else {
              c3 = tmp5;
              let dependencyMap = tmp2;
              let callback;
              let callback2;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              ({ channelId: c0, message: closure_1, nonce: c2, items: c3, shouldUploadFailureSendNotification: c4 } = callback);
              set = undefined;
              let closure_6;
              let closure_7;
              c4 = 1;
              set = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              set = 3;
              throw attachments;
            } else if (arg0 === 2) {
              set = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = attachments;
              return obj1;
            } else if (set.has(dependencyMap)) {
              set = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const tmp16 = new callback2(7365)();
              set = tmp16;
              const _HermesInternal = HermesInternal;
              closure_6 = "pending-upload-" + set._file.id;
              let obj2 = callback(4586);
              obj2 = {};
              const merged = Object.assign(callback2);
              obj2.key = closure_6;
              closure_7 = obj2.createMessageRecord(obj2);
              set.on("start", (file) => {
                set.add(_undefined);
                let obj = callback(_undefined[4]);
                obj = { type: "UPLOAD_START", channelId: c0, file, uploader: set, message: closure_7 };
                obj.dispatch(obj);
              });
              set.on("compression-progress", (file) => {
                let obj = callback(_undefined[4]);
                obj = { type: "UPLOAD_COMPRESSION_PROGRESS", channelId: c0, file };
                obj.dispatch(obj);
              });
              set.on("progress", (file) => {
                let obj = callback(_undefined[4]);
                obj = { type: "UPLOAD_PROGRESS", channelId: c0, file };
                obj.dispatch(obj);
              });
              set.on("error", (file) => {
                set.delete(_undefined);
                set.cancel();
                let obj = callback(_undefined[4]);
                obj = { type: "UPLOAD_FAIL", channelId: c0, file, messageId: id.id, shouldSendNotification: c4 };
                obj.dispatch(obj);
              });
              set.on("complete", (id) => {
                let closure_0 = id;
                set.delete(_undefined);
                messageForFile = messageForFile.getMessageForFile(id.id);
                let _aborted = null != messageForFile;
                if (_aborted) {
                  _aborted = "" === messageForFile.content;
                }
                if (_aborted) {
                  _aborted = set._aborted;
                }
                if (_aborted) {
                  let obj = callback(_undefined[4]);
                  id = messageForFile.nonce;
                  if (id == null) {
                    id = messageForFile.id;
                  }
                  obj = { type: "MESSAGE_DELETE", id: null, channelId: null };
                  obj[1] = id;
                  obj[2] = messageForFile.channel_id;
                  obj.dispatch(obj);
                }
                if (set._aborted) {
                  const _setTimeout = setTimeout;
                  const timerId = setTimeout(() => {
                    let obj = callback(table[4]);
                    obj = { type: "UPLOAD_COMPLETE", channelId: closure_0, file: closure_0, aborted: true };
                    obj.dispatch(obj);
                  }, 0);
                }
              });
              set.on("cancel-upload-item", (file) => {
                let obj = callback(_undefined[4]);
                obj = { type: "UPLOAD_FILE_UPDATE", file, channelId: c0 };
                obj.dispatch(obj);
              });
              callback2 = {};
              c4 = 2;
              set = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = set.uploadFiles(c3);
              return obj3;
            }
          } else if (arg0 === 1) {
            set = 3;
            throw attachments;
          } else if (arg0 === 2) {
            set = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = attachments;
            return obj4;
          } else {
            callback2.attachments = attachments;
            callback2.uploader = set;
            set = 3;
            obj = { value: null, done: true };
            obj[0] = callback2;
            return obj;
          }
        } catch (tmp39) {
          set = tmp;
          throw tmp39;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _uploadMessageAttachments = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let set = new Set();
const result = set.fileFinishedImporting("modules/media_uploads/uploadMessageAttachments.native.tsx");

export const uploadMessageAttachments = function uploadMessageAttachments(arg0) {
  const self = this;
  const apply = _uploadMessageAttachments.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};