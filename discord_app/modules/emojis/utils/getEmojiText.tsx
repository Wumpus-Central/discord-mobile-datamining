// discord_app/modules/emojis/utils/getEmojiText.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/emojis/utils/getEmojiText.tsx");

export default function getEmojiText(id) {
  let surrogates;
  if (null == id.id) {
    if (null != id.surrogates) {
      surrogates = id.surrogates;
    }
    return surrogates;
  }
  if (null != id.uniqueName) {
    let name;
    if ("" !== id.uniqueName) {
      name = id.uniqueName;
    }
    const _HermesInternal = HermesInternal;
    surrogates = ":" + name + ":";
  }
  name = id.name;
}
