// === Module 8778: isConjureProjectLinkEmbed ===

// Module 8778 (isConjureProjectLinkEmbed)
import Constants from "Constants" /* 1071 */;
import conjureProjectLink from "conjureProjectLink" /* 8779 */;
import size from "module_2" /* 2 */;

const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/conjure/share/isConjureProjectLinkEmbed.tsx");

export default function isConjureProjectLinkEmbed(url) {
  url = url.url;
  if (url.type !== MessageEmbedTypes.RICH) {
    if (null != url) {
      try {
        const _URL = URL;
        const uRL = new URL(url);
        return null != conjureProjectLink.parseConjureProjectLink(uRL);
      } catch (err) {
        return false;
      }
    }
  }
  return false;
};