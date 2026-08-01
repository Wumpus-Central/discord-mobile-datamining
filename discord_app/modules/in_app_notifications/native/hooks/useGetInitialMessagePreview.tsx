// === Module 10315: useGetInitialMessagePreview ===

// Module 10315 (useGetInitialMessagePreview)
import noop from "noop";
import hasFlag from "hasFlag";
import { MessageSnapshotRecord } from "hasFlag";

const result = require("isForwardMessage").fileFinishedImporting("modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx");

export const useGetInitialMessagePreview = function useGetInitialMessagePreview(message) {
  message = message.message;
  const items = [message];
  return React.useMemo(() => {
    const tmp2 = new outer1_3(message);
    tmp2.attachments = [];
    tmp2.stickerItems = [];
    if (tmp2.embeds.length > 0) {
      const embeds = tmp2.embeds;
      tmp2.embeds = embeds.filter((image) => null == image.image && null == image.thumbnail);
    }
    if (message(outer1_1[2])(message)) {
      const messageSnapshots = tmp2.messageSnapshots;
      tmp2.messageSnapshots = messageSnapshots.map((message) => {
        message = message.message;
        const obj = { message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) };
        return new closure_4({ message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) });
      });
    }
    return tmp2;
  }, items);
};