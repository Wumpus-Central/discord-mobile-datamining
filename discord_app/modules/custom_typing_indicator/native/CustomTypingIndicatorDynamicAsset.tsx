// === Module 11970: CustomTypingIndicatorDynamicAsset ===

// Module 11970 (CustomTypingIndicatorDynamicAsset)
import FastImageDefault from "FastImage" /* 5587 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((width, gap) => {
  let obj = { emojiRow: null, emoji: null, text: { flexShrink: 1 } };
  obj = { flexDirection: "row", gap };
  obj.emojiRow = obj;
  obj.emoji = { width, height: width };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx");

export default function CustomTypingIndicatorDynamicAsset(arg0) {
  ({ spacing, emojiGap, emojiSource } = arg0);
  _require = undefined;
  ({ name, suggestion, emojiSize, textVariant, textColor, textStyle, lineClamp, style } = arg0);
  if (emojiGap == null) {
    emojiGap = spacing;
  }
  const tmpResult = closure_6(emojiSize, emojiGap);
  _require = tmpResult;
  let obj = { direction: "horizontal", spacing, align: "center", justify: "flex-start", style, children: null };
  obj = {
    style: tmpResult.emojiRow,
    children: emojiSource.map((uri, index) => {
      let obj = { fadeDuration: 0, source: null, style: emoji.emoji };
      obj = { uri };
      obj.source = obj;
      return React4(FastImageDefault, obj, index);
    })
  };
  const items = [closure_4(View, obj), ];
  obj = { variant: textVariant, color: textColor, lineClamp, includeFontPadding: true, style: null, children: null };
  const items1 = [tmpResult.text, textStyle];
  obj.style = items1;
  const intl = require("util").intl;
  obj.children = intl.format(require("CustomTypingIndicatorUtils").getCustomTypingIndicatorSuggestionWithNameMessage(suggestion), { name });
  items[1] = closure_4(require("Text/Text").Text, obj);
  obj.children = items;
  return closure_5(require("Stack/Stack").Stack, obj);
};