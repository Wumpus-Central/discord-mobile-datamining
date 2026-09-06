// === Module 12428: getEmojiText ===

// Module 12428 (getEmojiText)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/utils/getEmojiText.tsx");

export default function getEmojiText(id) {
  if (null == id.id) {
    if (null != id.surrogates) {
      let surrogates = id.surrogates;
    }
    return surrogates;
  }
  if (null != id.uniqueName) {
    if ("" !== id.uniqueName) {
      let name = id.uniqueName;
    }
    const _HermesInternal = HermesInternal;
    surrogates = ":" + name + ":";
  }
  name = id.name;
};