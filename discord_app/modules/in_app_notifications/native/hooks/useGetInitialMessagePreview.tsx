// === Module 10079: useGetInitialMessagePreview ===

// Module 10079 (useGetInitialMessagePreview)
import noop from "noop" /* 19 */;
import hasFlag from "hasFlag" /* 4031 */;
import { MessageSnapshotRecord } from "hasFlag" /* 4031 */;

const result = require("obj132").fileFinishedImporting("modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx");

export const useGetInitialMessagePreview = function useGetInitialMessagePreview(message) {
  message = message.message;
  const items = [message];
  return React.useMemo(() => {
    const tmp2 = new closure_1_3(message);
    tmp2.attachments = [];
    tmp2.stickerItems = [];
    if (tmp2.embeds.length > 0) {
      const embeds = tmp2.embeds;
      tmp2.embeds = embeds.filter((item, index) => null == item.image && null == item.thumbnail);
    }
    if (message(dependencyMap[2])(message)) {
      const messageSnapshots = tmp2.messageSnapshots;
      tmp2.messageSnapshots = messageSnapshots.map((item, index) => {
        message = item.message;
        const obj = { message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) };
        return new closure_4({ message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) });
      });
    }
    return tmp2;
  }, items);
};