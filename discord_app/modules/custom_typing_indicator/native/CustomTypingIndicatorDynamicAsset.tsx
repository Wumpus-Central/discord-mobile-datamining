// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
let closure_6 = createStyles.createStyles((width, gap) => {
  const obj = { emojiRow: { flexDirection: "row", gap }, emoji: { width, height: width }, text: { flexShrink: 1 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx",
);

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
  const items = [
    closure_4(View, {
      style: tmpResult.emojiRow,
      children: emojiSource.map((uri, index) => {
        const obj = { fadeDuration: 0, source: { uri }, style: emoji.emoji };
        return React4(FastImageDefault, obj, index);
      }),
    }),
  ];
  const obj3 = {
    variant: textVariant,
    color: textColor,
    lineClamp,
    includeFontPadding: true,
    style: null,
    children: null,
  };
  const items1 = [tmpResult.text, textStyle];
  obj3.style = items1;
  const intl = require("util").intl;
  const obj2 = {
    style: tmpResult.emojiRow,
    children: emojiSource.map((uri, index) => {
      const obj = { fadeDuration: 0, source: { uri }, style: emoji.emoji };
      return React4(FastImageDefault, obj, index);
    }),
  };
  obj3.children = intl.format(
    require("CustomTypingIndicatorUtils").getCustomTypingIndicatorSuggestionWithNameMessage(suggestion),
    { name },
  );
  items[1] = closure_4(require("Text/Text").Text, obj3);
  obj.children = items;
  return closure_5(require("Stack/Stack").Stack, obj);
}
