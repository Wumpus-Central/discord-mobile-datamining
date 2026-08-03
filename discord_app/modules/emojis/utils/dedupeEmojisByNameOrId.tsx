let result = require("set").fileFinishedImporting("modules/emojis/utils/dedupeEmojisByNameOrId.tsx");

export default function dedupeEmojisByNameOrId(arg0) {
  const map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null == nextResult.id) {
      let tmp5 = importDefault;
      let tmp6 = dependencyMap;
      let obj2 = importDefault(3896);
      let tmp7 = nextResult;
      let result = obj2.convertSurrogateToBase(tmp2.surrogates);
      if (result == null) {
        result = nextResult;
      }
      let result1 = map.set(result.name, result);
    } else {
      let tmp3 = nextResult;
      let result2 = map.set(tmp2.id, tmp2);
    }
    continue;
  }
  return map;
};