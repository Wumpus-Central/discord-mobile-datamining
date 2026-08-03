// === Module 12504: createPostPreviewEmbeds ===

// Module 12504 (createPostPreviewEmbeds)
import { MessageEmbedTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx");

export const createPostPreviewEmbeds = function createPostPreviewEmbeds(message, roleStyle, useReducedMotion) {
  let closure_0 = message;
  let closure_1 = roleStyle;
  let flag = useReducedMotion;
  if (useReducedMotion === undefined) {
    flag = false;
  }
  const items = [];
  const embeds = message.embeds;
  if (embeds != null) {
    const item = embeds.forEach((type) => {
      if (type.type === flag.POST_PREVIEW) {
        const tmp6 = message(table[1])(message, table, type.url, flag);
        if (null != tmp6) {
          items.push(tmp6);
        }
      }
    });
  }
  return items;
};