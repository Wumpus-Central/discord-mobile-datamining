// === Module 14344: AIGlyphText ===

// Module 14344 (AIGlyphText)
import useToken from "useToken" /* 4423 */;
import AIGlyphFont from "AIGlyphFont" /* 14345 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4458 */;

require = fn;
const Text = fn(17).Text;
const jsx = fn(21).jsx;
let closure_4 = ReanimatedRexport.createAnimatedComponent(Text);
const createStyles = fn(4722);
let closure_5 = createStyles.createStyles((fontSize, color) => {
  const obj = { glyph: { color, fontFamily: AIGlyphFont.AI_GLYPH_FONT_FAMILY_NATIVE, fontSize, lineHeight: fontSize, textAlign: "center", includeFontPadding: false } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/visual-identities/ai/AIGlyphText.native.tsx");

export const AIGlyphText = function AIGlyphText(color) {
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
};