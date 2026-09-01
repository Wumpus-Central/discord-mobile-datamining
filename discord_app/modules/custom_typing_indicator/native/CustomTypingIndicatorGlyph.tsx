// === Module 11553: CustomTypingIndicatorGlyph ===

// Module 11553 (CustomTypingIndicatorGlyph)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default function CustomTypingIndicatorGlyph(config) {
  let map = config.config;
  const size = config.size;
  dependencyMap = undefined;
  let obj = dependencyMap;
  const tmp = callback();
  const tmp2 = map;
  dependencyMap = map(1942).getEffectiveCustomTypingIndicatorAnimation(map);
  const obj2 = map(1942);
  if (obj3.hasCustomTypingIndicatorEmojis(map.emojis)) {
    let items = [tmp.emojiRow, ];
    if (null == size) {
      let PX_4 = size(712).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    obj = { style: null, children: null };
    obj = { gap: null };
    obj[0] = PX_4;
    items[1] = obj;
    obj[0] = items;
    items = map.emojis;
    map = items.map;
    obj[1] = map((emoji, index) => closure_1_4(size(table[7]), { emoji, index, emojiCount: map.emojis.length, animation: table, size }, index));
    tmp3(View, obj);
    const tmp4 = View;
  } else {
    return tmp3(tmp2(1297).Ellipsis, {});
  }
};