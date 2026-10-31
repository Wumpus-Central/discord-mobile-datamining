// === Module 11340: ConjureAppIconTile ===

// Module 11340 (ConjureAppIconTile)
import Text_Text from "Text/Text" /* 5624 */;
import AppsIcon from "AppsIcon" /* 8678 */;
import useConjureDefaultAppIconDefault from "useConjureDefaultAppIcon" /* 11341 */;
import useConjureProjectIcon from "useConjureProjectIcon" /* 11343 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_5 = createStyles.createStyles((width, width2, backgroundColor, color) => {
  const obj = { tile: null, character: { color, fontSize: Math.round(width / 2), lineHeight: Math.round(0.625 * width) }, glyph: { width: width2, height: width2 } };
  const size = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor };
  obj.tile = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureAppIconTile.tsx");

export default function ConjureAppIconTile(size) {
  size = size.size;
  ({ applicationId, name } = size);
  const tmp2 = useConjureDefaultAppIconDefault(applicationId, name);
  ({ character, foregroundColor } = tmp2);
  const tmp4 = closure_5(size, useConjureProjectIcon.conjureProjectIconMetrics(size).glyphSize, tmp2.backgroundColor, foregroundColor);
  const obj2 = { style: tmp4.tile, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  if (null != character) {
    const obj3 = { variant: "heading-md/bold", color: "none", style: tmp4.character, allowFontScaling: false, children: character };
    let tmp5Result = jsx(Text_Text.Text, { variant: "heading-md/bold", color: "none", style: tmp4.character, allowFontScaling: false, children: character });
  } else {
    const obj4 = { size: "custom", style: tmp4.glyph, color: foregroundColor };
    tmp5Result = jsx(AppsIcon.AppsIcon, { size: "custom", style: tmp4.glyph, color: foregroundColor });
  }
  obj2.children = tmp5Result;
  return <View style={tmp4.tile} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{null}</View>;
};