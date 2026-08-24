// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles((width, gap) => {
  const emojiRow = { flexDirection: "row", gap };
  const emoji = { width, height: width };
  return { emojiRow, emoji };
});
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx");

export default function CustomTypingIndicatorDynamicAsset(arg0) {
  ({ spacing, emojiGap } = arg0);
  let _require;
  ({ name, suggestion, emojiSize, textVariant, textColor, textStyle, lineClamp, style } = arg0);
  if (emojiGap == null) {
    emojiGap = spacing;
  }
  const tmpResult = closure_6(emojiSize, emojiGap);
  _require = tmpResult;
  let obj = { direction: "horizontal", spacing, align: "center", justify: "center", style, children: null };
  obj = { style: tmpResult.emojiRow, children: null };
  obj = { length: require("../CustomTypingIndicatorTypes.tsx").CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
  obj[1] = Array.from(obj, (arg0, arg1) => {
    let obj = { fadeDuration: 0, source: null, style: null };
    obj = { uri: closure_1_1(closure_1_2[7]) };
    obj[1] = obj;
    obj[2] = emoji.emoji;
    return closure_1_4(closure_1_1(closure_1_2[6]), obj, arg1);
  });
  const items = [callback(View, obj), ];
  obj1 = { variant: textVariant, color: textColor, lineClamp, style: textStyle, children: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj1[4] = intl.format(require("../CustomTypingIndicatorUtils.tsx").getCustomTypingIndicatorSuggestionWithNameMessage(suggestion), { name });
  items[1] = callback(require("../../../design/components/Text/native/Text.tsx").Text, obj1);
  obj[5] = items;
  return callback2(require("../../../design/components/Stack/native/Stack.native.tsx").Stack, obj);
};