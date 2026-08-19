// === Module 14711: CustomTypingIndicatorGlyph ===

// Module 14711 (CustomTypingIndicatorGlyph)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import CustomTypingIndicatorAnimation from "CustomTypingIndicatorAnimation" /* 14707 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default function CustomTypingIndicatorGlyph(arg0) {
  ({ config, size: require } = arg0);
  let obj = CustomTypingIndicatorAnimation;
  const effectiveCustomTypingIndicatorAnimation = obj.getEffectiveCustomTypingIndicatorAnimation(config);
  const tmp = callback();
  if (obj2.hasCustomTypingIndicatorEmojis(config.emojis)) {
    obj = { style: null, children: null };
    obj[0] = tmp.emojiRow;
    const emojis = config.emojis;
    obj[1] = emojis.map((item, index) => jsx(callback(dependencyMap[7]), { emoji: item, index, animation: callback, size: closure_0 }, index));
    let tmp4Result = <View style={null}>{null}</View>;
  } else {
    tmp4Result = jsx(Button.Ellipsis, {});
  }
  return tmp4Result;
};