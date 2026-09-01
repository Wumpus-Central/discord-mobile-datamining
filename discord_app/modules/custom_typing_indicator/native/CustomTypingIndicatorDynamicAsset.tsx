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
  return { emojiRow, emoji, text: { flexShrink: 1 } };
});
const result = require("set").fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx",
);

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
    }),
  };
  const items = [callback(View, obj)];
  obj = { variant: textVariant, color: textColor, lineClamp, includeFontPadding: true, style: items1, children: null };
  items1 = [tmpResult.text, textStyle];
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[5] = intl.format(
    require("../CustomTypingIndicatorUtils.tsx").getCustomTypingIndicatorSuggestionWithNameMessage(suggestion),
    { name },
  );
  items[1] = callback(require("../../../design/components/Text/native/Text.tsx").Text, obj);
  obj[5] = items;
  return callback2(require("../../../design/components/Stack/native/Stack.native.tsx").Stack, obj);
}
