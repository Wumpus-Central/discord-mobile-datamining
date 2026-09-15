// === Module 14228: AIGlyphText ===

// Module 14228 (AIGlyphText)
import useToken from "useToken" /* 4341 */;
import AIGlyphFont from "AIGlyphFont" /* 14229 */;
import noop from "module_19" /* 19 */;

require = fn;
const Text = fn(17).Text;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_4 = createStyles.createStyles((fontSize, color) => {
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
  ({ allowFontScaling, style, children } = color);
  let tmp;
  if ("none" !== str) {
    tmp = str;
  }
  const obj2 = { style: null, allowFontScaling: null, children: null };
  const items = [closure_4(color.size, useToken.useToken(tmp)).glyph, style];
  obj2.style = items;
  obj2.allowFontScaling = allowFontScaling;
  obj2.children = children;
  return <Text style={null} allowFontScaling={null}>{null}</Text>;
};