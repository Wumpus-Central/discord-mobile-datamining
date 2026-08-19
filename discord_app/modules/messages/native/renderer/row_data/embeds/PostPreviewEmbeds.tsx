// discord_app/modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx
import obj132 from "../../../../../../../_runtime/00002_obj132.js";
import ME from "../../../../../../Constants.tsx";

const MessageEmbedTypes = ME.MessageEmbedTypes;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx");

export const createPostPreviewEmbeds = function createPostPreviewEmbeds(message, roleStyle, useReducedMotion) {
  closure_0 = message;
  closure_1 = roleStyle;
  let flag = useReducedMotion;
  if (useReducedMotion === undefined) {
    flag = false;
  }
  const items = [];
  const embeds = message.embeds;
  if (embeds != null) {
    const item = embeds.forEach((item, index) => {
      if (item.type === flag.POST_PREVIEW) {
        const tmp6 = message(table[1])(message, table, item.url, flag);
        if (null != tmp6) {
          items.push(tmp6);
        }
      }
    });
  }
  return items;
};