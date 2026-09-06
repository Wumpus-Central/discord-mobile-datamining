// discord_app/modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx
import isForwardMessageDefault from "../../../forwarding/isForwardMessage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MessageRecord from "../../../../records/MessageRecord.tsx";

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
