// === Module 12493: useGetInitialMessagePreview ===

// Module 12493 (useGetInitialMessagePreview)
import react2 from "react" /* 576 */;
import MessageRecord2 from "MessageRecord" /* 4520 */;
import isForwardMessageDefault from "isForwardMessage" /* 6805 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MessageRecord = MessageRecord2;

const MessageSnapshotRecord = MessageRecord2.MessageSnapshotRecord;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(message) {
  let tmp3;
  let obj = react2;
  const cResult = obj.c(4);
  message = message.message;
  if (cResult[0] !== message) {
    const self = this;
    const self2 = this;
    const tmp6 = new MessageRecord(message);
    tmp6.attachments = [];
    tmp6.stickerItems = [];
    if (tmp6.embeds.length > 0) {
      let tmp9;
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(image) {
          return null == image.image && null == image.thumbnail;
        };
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const embeds = tmp6.embeds;
      tmp6.embeds = embeds.filter(tmp9);
    }
    if (isForwardMessageDefault(message)) {
      let tmp12;
      const _Symbol2 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f(message) {
          const obj = { message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) };
          message = message.message;
          const tmp = new MessageSnapshotRecord(obj);
          return tmp;
        };
        cResult[3] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[3];
      }
      const messageSnapshots = tmp6.messageSnapshots;
      tmp6.messageSnapshots = messageSnapshots.map(tmp12);
    }
    cResult[0] = message;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((message) => {
  message = message.message;
  const items = [message];
  return react.useMemo(() => {
    const tmp2 = new MessageRecord(message);
    tmp2.attachments = [];
    tmp2.stickerItems = [];
    if (tmp2.embeds.length > 0) {
      const embeds = tmp2.embeds;
      tmp2.embeds = embeds.filter((image) => null == image.image && null == image.thumbnail);
    }
    if (isForwardMessageDefault(message)) {
      const messageSnapshots = tmp2.messageSnapshots;
      tmp2.messageSnapshots = messageSnapshots.map((message) => {
        const obj = { message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) };
        message = message.message;
        const tmp = new closure_1_5(obj);
        return tmp;
      });
    }
    return tmp2;
  }, items);
});
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx");

export const useGetInitialMessagePreview = tmp2;