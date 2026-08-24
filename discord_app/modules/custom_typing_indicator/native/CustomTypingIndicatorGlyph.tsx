// === Module 11202: CustomTypingIndicatorGlyph ===

// Module 11202 (CustomTypingIndicatorGlyph)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default function CustomTypingIndicatorGlyph(arg0) {
  ({ config, size } = arg0);
  ({ textEmojiLineHeight: importDefault, bypassReducedMotionCheck: dependencyMap } = arg0);
  let effectiveCustomTypingIndicatorAnimation;
  let obj = dependencyMap;
  const tmp = callback();
  const tmp2 = size;
  effectiveCustomTypingIndicatorAnimation = size(11197).getEffectiveCustomTypingIndicatorAnimation(config);
  const obj2 = size(11197);
  if (obj3.hasCustomTypingIndicatorEmojis(config.emojis)) {
    let items = [tmp.emojiRow, ];
    if (null == size) {
      let PX_4 = ThemesDefault.space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    obj = { style: null, children: null };
    obj = { gap: null };
    obj[0] = PX_4;
    items[1] = obj;
    obj[0] = items;
    items = config.emojis;
    config = items.map;
    obj[1] = config((emoji, index) => {
      const obj = { emoji, index, animation: closure_3, size, textEmojiLineHeight: closure_1, bypassReducedMotionCheck: closure_2 };
      return closure_1_4(closure_1_1(closure_1_2[7]), obj, index);
    });
    tmp3(effectiveCustomTypingIndicatorAnimation, obj);
    const tmp4 = effectiveCustomTypingIndicatorAnimation;
  } else {
    return tmp3(tmp2(1297).Ellipsis, {});
  }
};