// === Module 16566: useFirstMessageOrEmbedContent ===

// Module 16566 (useFirstMessageOrEmbedContent)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_onboarding_home/useFirstMessageOrEmbedContent.tsx");

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
            if (tmp5.rawDescription.length > 0) {
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