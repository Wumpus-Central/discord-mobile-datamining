// === Module 6733: dedupeEmojisByNameOrId ===

// Module 6733 (dedupeEmojisByNameOrId)
import obj132 from "obj132" /* 2 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4034 */;

let result = obj132.fileFinishedImporting("modules/emojis/utils/dedupeEmojisByNameOrId.tsx");

export default function dedupeEmojisByNameOrId(arg0) {
  const map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null == nextResult.id) {
      let obj2 = parseRawEmojiObjectDefault;
      let result = obj2.convertSurrogateToBase(tmp2.surrogates);
      if (result == null) {
        result = nextResult;
      }
      let result1 = map.set(result.name, result);
    } else {
      let result2 = map.set(tmp2.id, tmp2);
    }
    continue;
  }
  return map;
};