// discord_app/modules/conjure/share/isConjureProjectLinkEmbed.tsx
import Constants from "../../../Constants.tsx";
import conjureProjectLink from "conjureProjectLink.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
