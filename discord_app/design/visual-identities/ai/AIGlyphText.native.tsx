// === Module 14205: AIGlyphText ===

// Module 14205 (AIGlyphText)
import c from "c" /* 576 */;
import useToken from "useToken" /* 4818 */;
import AIGlyphFont from "AIGlyphFont" /* 14206 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;

require = fn;
const Text = fn(17).Text;
const jsx = fn(21).jsx;
let closure_4 = ReanimatedRexport.createAnimatedComponent(Text);
const createStyles = fn(5092);
let closure_5 = createStyles.createStyles((fontSize, color) => {
  const obj = { glyph: { color, fontFamily: AIGlyphFont.AI_GLYPH_FONT_FAMILY_NATIVE, fontSize, lineHeight: fontSize, textAlign: "center", includeFontPadding: false } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/visual-identities/ai/AIGlyphText.native.tsx");

export const AIGlyphText = ReactCompilerGating.isReactCompilerEnabled() ? (function AIGlyphText(size) {
  const cResult = c.c(10);
  ({ color, allowFontScaling, animated, numberOfLines, ellipsizeMode, style, children } = size);
  let str = "text-default";
  if (undefined !== color) {
    str = color;
  }
  const tmp4 = undefined !== animated && animated;
  let tmp5;
  if ("none" !== str) {
    tmp5 = str;
  }
  const tmp6 = closure_5(size.size, useToken.useToken(tmp5));
  const tmp7 = tmp4 ? closure_4 : Text;
  if (cResult[0] === style) {
    if (cResult[1] === tmp6.glyph) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === tmp7) {
      if (cResult[4] === allowFontScaling) {
        if (cResult[5] === children) {
          if (cResult[6] === ellipsizeMode) {
            if (cResult[7] === numberOfLines) {
              if (cResult[8] === tmp8) {
                let tmp9 = cResult[9];
              }
              return tmp9;
            }
          }
        }
      }
    }
    const obj2 = { style: tmp8, allowFontScaling, numberOfLines, ellipsizeMode, children };
    const tmp11 = <tmp7 style={tmp8} allowFontScaling={allowFontScaling} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}>{children}</tmp7>;
    cResult[3] = tmp7;
    cResult[4] = allowFontScaling;
    cResult[5] = children;
    cResult[6] = ellipsizeMode;
    cResult[7] = numberOfLines;
    cResult[8] = tmp8;
    cResult[9] = tmp11;
    tmp9 = tmp11;
  }
  const items = [tmp6.glyph, style];
  cResult[0] = style;
  cResult[1] = tmp6.glyph;
  cResult[2] = items;
  tmp8 = items;
  const tmpResult = useToken;
}) : (function AIGlyphText(color) {
  let str = color.color;
  if (str === undefined) {
    str = "text-default";
  }
  ({ animated, allowFontScaling } = color);
  if (animated === undefined) {
    animated = false;
  }
  ({ numberOfLines, ellipsizeMode, style, children } = color);
  let tmp;
  if ("none" !== str) {
    tmp = str;
  }
  const obj2 = { style: null, allowFontScaling: null, numberOfLines: null, ellipsizeMode: null, children: null };
  const items = [closure_5(color.size, useToken.useToken(tmp)).glyph, style];
  obj2.style = items;
  obj2.allowFontScaling = allowFontScaling;
  obj2.numberOfLines = numberOfLines;
  obj2.ellipsizeMode = ellipsizeMode;
  obj2.children = children;
  return jsx(animated ? closure_4 : Text, { style: null, allowFontScaling: null, numberOfLines: null, ellipsizeMode: null, children: null });
});