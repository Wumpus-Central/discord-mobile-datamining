// === Module 13242: PostPreviewEmbeds ===

// Module 13242 (PostPreviewEmbeds)
import Constants from "Constants" /* 1074 */;
import createMediaPostPreviewEmbedContentDefault from "createMediaPostPreviewEmbedContent" /* 13243 */;
import size from "module_2" /* 2 */;

const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx");

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
    const item = embeds.forEach((type) => {
      if (type.type === MessageEmbedTypes.POST_PREVIEW) {
        const tmp6 = createMediaPostPreviewEmbedContentDefault(closure_0, closure_1, type.url, flag);
        if (null != tmp6) {
          items.push(tmp6);
        }
      }
    });
  }
  return items;
};