// discord_app/modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx
import Constants from "../../../../../../Constants.tsx";
import createMediaPostPreviewEmbedContentDefault from "../../../../../media_channel/native/createMediaPostPreviewEmbedContent.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx");

export const createPostPreviewEmbeds = function createPostPreviewEmbeds(message, roleStyle) {
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
