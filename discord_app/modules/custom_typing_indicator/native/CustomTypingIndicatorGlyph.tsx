// === Module 11549: CustomTypingIndicatorGlyph ===

// Module 11549 (CustomTypingIndicatorGlyph)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default function CustomTypingIndicatorGlyph(config) {
  let map = config.config;
  const size = config.size;
  const bypassReducedMotionCheck = config.bypassReducedMotionCheck;
  let effectiveCustomTypingIndicatorAnimation;
  let obj = bypassReducedMotionCheck;
  const tmp = callback();
  const tmp2 = map;
  effectiveCustomTypingIndicatorAnimation = map(bypassReducedMotionCheck[4]).getEffectiveCustomTypingIndicatorAnimation(map);
  const obj2 = map(bypassReducedMotionCheck[4]);
  if (obj3.hasCustomTypingIndicatorEmojis(map.emojis)) {
    let items = [tmp.emojiRow, ];
    if (null == size) {
      let PX_4 = size(obj[6]).space.PX_4;
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
    obj[1] = map((emoji, index) => closure_1_4(size(bypassReducedMotionCheck[7]), { emoji, index, emojiCount: map.emojis.length, animation: closure_3, size, bypassReducedMotionCheck }, index));
    tmp3(effectiveCustomTypingIndicatorAnimation, obj);
    const tmp4 = effectiveCustomTypingIndicatorAnimation;
  } else {
    return tmp3(tmp2(obj[5]).Ellipsis, {});
  }
};