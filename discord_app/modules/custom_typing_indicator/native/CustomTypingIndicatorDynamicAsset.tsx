// === Module 11599: CustomTypingIndicatorDynamicAsset ===

// Module 11599 (CustomTypingIndicatorDynamicAsset)
import react_native from "react-native" /* 17 */;
import FastImageDefault from "FastImage" /* 5981 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((width, gap) => {
  const obj = { emojiRow: obj2, emoji: { width, height: width }, text: { flexShrink: 1 } };
  return obj;
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((emojiSize) => {
  let emoji;
  let emojiGap;
  let emojiSource;
  let items;
  let lineClamp;
  let name;
  let spacing;
  let style;
  let suggestion;
  let textColor;
  let textStyle;
  let textVariant;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(25);
  ({ name, suggestion, spacing, emojiGap, textVariant, textColor, textStyle, lineClamp, style, emojiSource } = emojiSize);
  emojiSize = emojiSize.emojiSize;
  if (emojiGap == null) {
    emojiGap = spacing;
  }
  const tmp4Result = closure_6(emojiSize, emojiGap);
  _require = tmp4Result;
  if (cResult[0] === emojiSource) {
    let tmp7;
    if (cResult[1] === tmp4Result.emoji) {
      tmp7 = cResult[2];
    }
    if (cResult[5] === tmp4Result.emojiRow) {
      let tmp10;
      if (cResult[6] === tmp7) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4Result.text) {
        let tmp14;
        if (cResult[9] === textStyle) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === name) {
          let tmp15;
          if (cResult[12] === suggestion) {
            tmp15 = cResult[13];
          }
          if (cResult[14] === lineClamp) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp15) {
                if (cResult[17] === textColor) {
                  let tmp17;
                  if (cResult[18] === textVariant) {
                    tmp17 = cResult[19];
                  }
                  if (cResult[20] === spacing) {
                    if (cResult[21] === style) {
                      if (cResult[22] === tmp10) {
                        let tmp20;
                        if (cResult[23] === tmp17) {
                          tmp20 = cResult[24];
                        }
                        return tmp20;
                      }
                    }
                  }
                  let obj2 = { direction: "horizontal", spacing, align: "center", justify: "flex-start", style, children: items };
                  items = [tmp10, tmp17];
                  const tmp22 = closure_5(require("Stack/Stack").Stack, obj2);
                  cResult[20] = spacing;
                  cResult[21] = style;
                  cResult[22] = tmp10;
                  cResult[23] = tmp17;
                  cResult[24] = tmp22;
                  tmp20 = tmp22;
                }
              }
            }
          }
          const obj3 = { variant: textVariant, color: textColor, lineClamp, includeFontPadding: true, style: tmp14, children: tmp15 };
          const tmp19 = closure_4(require("Text/Text").Text, obj3);
          cResult[14] = lineClamp;
          cResult[15] = tmp14;
          cResult[16] = tmp15;
          cResult[17] = textColor;
          cResult[18] = textVariant;
          cResult[19] = tmp19;
          tmp17 = tmp19;
        }
        const intl = tmp(1126).intl;
        const format = intl.format;
        const obj4 = { name };
        const tmpResult = require("CustomTypingIndicatorUtils");
        const formatResult = format(tmpResult.getCustomTypingIndicatorSuggestionWithNameMessage(suggestion), obj4);
        cResult[11] = name;
        cResult[12] = suggestion;
        cResult[13] = formatResult;
        tmp15 = formatResult;
      }
      const items1 = [tmp4Result.text, textStyle];
      cResult[8] = tmp4Result.text;
      cResult[9] = textStyle;
      cResult[10] = items1;
      tmp14 = items1;
    }
    const obj5 = { style: tmp6, children: tmp7 };
    const tmp13 = closure_4(View, obj5);
    cResult[5] = tmp4Result.emojiRow;
    cResult[6] = tmp7;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  if (cResult[3] !== tmp4Result.emoji) {
    const fn = function u(uri, arg1) {
      let obj2;
      const obj = { fadeDuration: 0, source: obj2, style: emoji.emoji };
      obj2 = { uri };
      return React3(FastImageDefault, obj, arg1);
    };
    cResult[3] = tmp4Result.emoji;
    cResult[4] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const mapped = emojiSource.map(tmp8);
  cResult[0] = emojiSource;
  cResult[1] = tmp4Result.emoji;
  cResult[2] = mapped;
  tmp7 = mapped;
}) : ((arg0) => {
  let emoji;
  let emojiGap;
  let emojiSize;
  let emojiSource;
  let format;
  let items;
  let items1;
  let lineClamp;
  let name;
  let obj4;
  let spacing;
  let style;
  let suggestion;
  let textColor;
  let textStyle;
  let textVariant;
  ({ spacing, emojiGap, emojiSource } = arg0);
  _require = undefined;
  ({ name, suggestion, emojiSize, textVariant, textColor, textStyle, lineClamp, style } = arg0);
  if (emojiGap == null) {
    emojiGap = spacing;
  }
  const tmpResult = closure_6(emojiSize, emojiGap);
  _require = tmpResult;
  let obj = { direction: "horizontal", spacing, align: "center", justify: "flex-start", style, children: items };
  let obj2 = {
    style: tmpResult.emojiRow,
    children: emojiSource.map((uri, index) => {
      let obj2;
      const obj = { fadeDuration: 0, source: obj2, style: emoji.emoji };
      obj2 = { uri };
      return React3(FastImageDefault, obj, index);
    })
  };
  const Stack = require("Stack/Stack").Stack;
  items = [closure_4(View, obj2), ];
  const obj3 = { variant: textVariant, color: textColor, lineClamp, includeFontPadding: true, style: items1, children: format(obj4.getCustomTypingIndicatorSuggestionWithNameMessage(suggestion), { name }) };
  items1 = [tmpResult.text, textStyle];
  const Text = require("Text/Text").Text;
  const intl = require("intl").intl;
  format = intl.format;
  obj4 = require("CustomTypingIndicatorUtils");
  items[1] = closure_4(Text, obj3);
  return closure_5(Stack, obj);
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx");

export default tmp4;