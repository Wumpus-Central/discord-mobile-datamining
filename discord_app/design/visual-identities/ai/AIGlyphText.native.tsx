// === Module 12446: AIGlyphText ===

// Module 12446 (AIGlyphText)
import useToken from "useToken" /* 5726 */;
import AIGlyphFont from "AIGlyphFont" /* 12447 */;
import noop from "module_19" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;

require = fn;
const Text = fn(17).Text;
const jsx = fn(21).jsx;
let closure_4 = module_1652.createAnimatedComponent(Text);
const createStyles = fn(5142);
let closure_5 = createStyles.createStyles((fontSize, color) => {
  const obj = { glyph: { color, fontFamily: AIGlyphFont.AI_GLYPH_FONT_FAMILY_NATIVE, fontSize, lineHeight: fontSize, textAlign: "center", includeFontPadding: false } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/visual-identities/ai/AIGlyphText.native.tsx");

export function AIGlyphText(color) {
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
  items = [closure_5(color.size, useToken.useToken(tmp)).glyph, style];
  obj2.style = items;
  obj2.allowFontScaling = allowFontScaling;
  obj2.numberOfLines = numberOfLines;
  obj2.ellipsizeMode = ellipsizeMode;
  obj2.children = children;
  return jsx(animated ? closure_4 : Text, { style: null, allowFontScaling: null, numberOfLines: null, ellipsizeMode: null, children: null });
}