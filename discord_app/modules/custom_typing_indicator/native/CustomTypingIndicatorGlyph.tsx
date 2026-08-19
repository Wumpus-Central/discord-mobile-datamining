// === Module 14711: CustomTypingIndicatorGlyph ===

// Module 14711 (CustomTypingIndicatorGlyph)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import CustomTypingIndicatorAnimation from "CustomTypingIndicatorAnimation" /* 14707 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
createCacheKey = { emojiRow: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default function CustomTypingIndicatorGlyph(arg0) {
  ({ config, size: require } = arg0);
  let effectiveCustomTypingIndicatorAnimation;
  let obj = CustomTypingIndicatorAnimation;
  effectiveCustomTypingIndicatorAnimation = obj.getEffectiveCustomTypingIndicatorAnimation(config);
  const tmp = callback();
  const tmp2 = require;
  if (obj2.hasCustomTypingIndicatorEmojis(config.emojis)) {
    obj = { style: null, children: null };
    obj[0] = tmp.emojiRow;
    const emojis = config.emojis;
    obj[1] = emojis.map((emoji, index) => closure_1_4(callback(closure_1_2[7]), { emoji, index, animation: callback, size: closure_0 }, index));
    let tmp4Result = tmp4(View, obj);
  } else {
    tmp4Result = tmp4(Button.Ellipsis, {});
  }
  return tmp4Result;
};