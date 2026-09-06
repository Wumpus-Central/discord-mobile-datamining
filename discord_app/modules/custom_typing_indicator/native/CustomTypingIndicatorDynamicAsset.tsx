// === Module 11970: CustomTypingIndicatorDynamicAsset ===

// Module 11970 (CustomTypingIndicatorDynamicAsset)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles((width, gap) => {
  const emojiRow = { flexDirection: "row", gap };
  const emoji = { width, height: width };
  return { emojiRow, emoji, text: { flexShrink: 1 } };
});
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx");

export default function CustomTypingIndicatorDynamicAsset(arg0) {
  ({ spacing, emojiGap, emojiSource } = arg0);
  let _require;
  ({ name, suggestion, emojiSize, textVariant, textColor, textStyle, lineClamp, style } = arg0);
  if (emojiGap == null) {
    emojiGap = spacing;
  }
  const tmpResult = closure_6(emojiSize, emojiGap);
  _require = tmpResult;
  let obj = { direction: "horizontal", spacing, align: "center", justify: "flex-start", style, children: null };
  obj = {
    style: tmpResult.emojiRow,
    children: emojiSource.map((uri) => {
      obj = { fadeDuration: 0, source: obj, style: emoji.emoji };
      obj = { uri };
      return closure_1_4(closure_1_1(closure_1_2[5]), obj, arg1);
    })
  };
  const items = [callback(View, obj), ];
  obj = { variant: textVariant, color: textColor, lineClamp, includeFontPadding: true, style: items1, children: null };
  items1 = [tmpResult.text, textStyle];
  const intl = _require(1114).intl;
  obj[5] = intl.format(_require(11971).getCustomTypingIndicatorSuggestionWithNameMessage(suggestion), { name });
  items[1] = callback(_require(4556).Text, obj);
  obj[5] = items;
  return callback2(_require(4973).Stack, obj);
};