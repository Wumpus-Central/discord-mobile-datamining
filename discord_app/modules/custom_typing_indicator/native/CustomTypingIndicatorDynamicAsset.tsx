// === Module 11599: CustomTypingIndicatorDynamicAsset ===

// Module 11599 (CustomTypingIndicatorDynamicAsset)
import FastImageDefault from "FastImage" /* 5981 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles((width, gap) => {
  const obj = { emojiRow: { flexDirection: "row", gap }, emoji: { width, height: width }, text: { flexShrink: 1 } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((emojiSize) => {
  const cResult = require("c").c(25);
  ({ name, suggestion, spacing, emojiGap, textVariant, textColor, textStyle, lineClamp, style, emojiSource } = emojiSize);
  if (emojiGap == null) {
    emojiGap = spacing;
  }
  const tmp4Result = closure_6(emojiSize.emojiSize, emojiGap);
  _require = tmp4Result;
  if (cResult[0] === emojiSource) {
    if (cResult[1] === tmp4Result.emoji) {
      if (cResult[5] === tmp4Result.emojiRow) {
        if (cResult[6] === tmp7) {
          let tmp10 = cResult[7];
        }
        if (cResult[8] === tmp4Result.text) {
          if (cResult[9] === textStyle) {
            let tmp14 = cResult[10];
          }
          if (cResult[11] === name) {
            if (cResult[12] === suggestion) {
              let tmp15 = cResult[13];
            }
            if (cResult[14] === lineClamp) {
              if (cResult[15] === tmp14) {
                if (cResult[16] === tmp15) {
                  if (cResult[17] === textColor) {
                    if (cResult[18] === textVariant) {
                      let tmp17 = cResult[19];
                    }
                    if (cResult[20] === spacing) {
                      if (cResult[21] === style) {
                        if (cResult[22] === tmp10) {
                          if (cResult[23] === tmp17) {
                            let tmp20 = cResult[24];
                          }
                          return tmp20;
                        }
                      }
                    }
                    const obj2 = { direction: "horizontal", spacing, align: "center", justify: "flex-start", style, children: null };
                    const items = [tmp10, tmp17];
                    obj2.children = items;
                    const tmp22 = closure_5(tmp(5600).Stack, obj2);
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
            const tmp19 = closure_4(tmp(4892).Text, obj3);
            cResult[14] = lineClamp;
            cResult[15] = tmp14;
            cResult[16] = tmp15;
            cResult[17] = textColor;
            cResult[18] = textVariant;
            cResult[19] = tmp19;
            tmp17 = tmp19;
          }
          const intl = tmp(1126).intl;
          const obj4 = { name };
          const formatResult = intl.format(tmp(11600).getCustomTypingIndicatorSuggestionWithNameMessage(suggestion), obj4);
          cResult[11] = name;
          cResult[12] = suggestion;
          cResult[13] = formatResult;
          tmp15 = formatResult;
          const tmpResult = tmp(11600);
        }
        const items1 = [tmp4Result.text, textStyle];
        cResult[8] = tmp4Result.text;
        cResult[9] = textStyle;
        cResult[10] = items1;
        tmp14 = items1;
      }
      const obj5 = { style: tmp6, children: cResult[2] };
      const tmp13 = closure_4(View, obj5);
      cResult[5] = tmp4Result.emojiRow;
      cResult[6] = cResult[2];
      cResult[7] = tmp13;
      tmp10 = tmp13;
    }
  }
  if (cResult[3] !== tmp4Result.emoji) {
    const fn = function u(uri, arg1) {
      const obj = { fadeDuration: 0, source: { uri }, style: emoji.emoji };
      return React4(FastImageDefault, obj, arg1);
    };
    cResult[3] = tmp4Result.emoji;
    cResult[4] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const mapped = emojiSource.map(tmp8);
  cResult[0] = emojiSource;
  emojiSource = tmp4Result.emoji;
  cResult[1] = emojiSource;
  cResult[2] = mapped;
  let obj = require("c");
}) : ((arg0) => {
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
      })
    }),

  ];
  const obj3 = { variant: textVariant, color: textColor, lineClamp, includeFontPadding: true, style: null, children: null };
  const items1 = [tmpResult.text, textStyle];
  obj3.style = items1;
  const intl = require("util").intl;
  const obj2 = {
    style: tmpResult.emojiRow,
    children: emojiSource.map((uri, index) => {
      const obj = { fadeDuration: 0, source: { uri }, style: emoji.emoji };
      return React4(FastImageDefault, obj, index);
    })
  };
  obj3.children = intl.format(require("CustomTypingIndicatorUtils").getCustomTypingIndicatorSuggestionWithNameMessage(suggestion), { name });
  items[1] = closure_4(require("Text/Text").Text, obj3);
  obj.children = items;
  return closure_5(require("Stack/Stack").Stack, obj);
});