// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import CustomTypingIndicatorAnimation from "../CustomTypingIndicatorTypes.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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