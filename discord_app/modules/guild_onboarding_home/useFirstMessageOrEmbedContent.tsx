// === Module 16404: useFirstMessageOrEmbedContent ===

// Module 16404 (useFirstMessageOrEmbedContent)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_onboarding_home/useFirstMessageOrEmbedContent.tsx");

export default function useFirstMessageOrEmbedContent(content) {
  if (null == content) {
    return null;
  } else {
    content = content.content;
    let length;
    if (content != null) {
      length = content.length;
    }
    if (length > 0) {
      return content.content;
    } else {
      let embeds = content.embeds;
      let length1;
      if (embeds != null) {
        length1 = embeds.length;
      }
      if (length1 > 0) {
        embeds = content.embeds;
        for (const item10013 of embeds) {
          if (null != item10013.rawDescription) {
            let tmp6 = item10013;
            if (tmp5.rawDescription.length > 0) {
              let tmp7 = obj;
              obj.return();
              return item10013.rawDescription;
            }
          }
          continue;
        }
      }
      return null;
    }
  }
};