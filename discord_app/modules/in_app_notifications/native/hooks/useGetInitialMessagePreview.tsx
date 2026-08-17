// discord_app/modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx
import closure_2 from "noop" /* 19 */;
import closure_3 from "hasFlag" /* 4031 */;
import { MessageSnapshotRecord } from "hasFlag" /* 4031 */;

const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/hooks/useGetInitialMessagePreview.tsx");

export const useGetInitialMessagePreview = function useGetInitialMessagePreview(message) {
  message = message.message;
  const items = [message];
  return React.useMemo(() => {
    const tmp2 = new closure_1_3(message);
    tmp2.attachments = [];
    tmp2.stickerItems = [];
    if (tmp2.embeds.length > 0) {
      const embeds = tmp2.embeds;
      tmp2.embeds = embeds.filter((image) => null == image.image && null == image.thumbnail);
    }
    if (message(closure_1_1[2])(message)) {
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