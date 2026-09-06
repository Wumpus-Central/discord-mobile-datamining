// === Module 10140: useGetInitialMessagePreview ===

// Module 10140 (useGetInitialMessagePreview)
import isForwardMessageDefault from "isForwardMessage" /* 7302 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 4210 */;

const MessageSnapshotRecord = fn(4210).MessageSnapshotRecord;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx");

export const useGetInitialMessagePreview = function useGetInitialMessagePreview(message) {
  message = message.message;
  const items = [message];
  return noop.useMemo(() => {
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
        const obj = { message: null };
        message = message.message;
        obj.message = message.merge({ attachments: [], embeds: [], stickerItems: [] });
        return new closure_1_4(obj);
      });
    }
    return tmp2;
  }, items);
};