// === Module 12425: ConjureProjectIcon ===

// Module 12425 (ConjureProjectIcon)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AppsIcon from "AppsIcon" /* 8670 */;
import useConjureDefaultAppIconDefault from "useConjureDefaultAppIcon" /* 12426 */;
import useConjureProjectIcon from "useConjureProjectIcon" /* 12428 */;
import MagicWandIcon from "MagicWandIcon" /* 12429 */;
import noop from "module_19" /* 19 */;

const useConjureProjectIconDefault = useConjureProjectIcon;

require = fn;
function ConjureProjectIconFallback(project) {
  project = project.project;
  ({ pixels, glyphStyle } = project);
  const tmp2 = useConjureDefaultAppIconDefault(project.application_id, project.name);
  ({ character, foregroundColor } = tmp2);
  const tmp3 = closure_9(pixels, tmp2.backgroundColor, foregroundColor);
  const obj = { style: tmp3.tile, children: null };
  if (null != character) {
    const obj2 = { variant: "heading-md/bold", color: "none", style: tmp3.character, allowFontScaling: false, children: character };
    let tmp4Result = hasOwnProperty(Text_Text.Text, obj2);
  } else {
    const obj3 = { size: "custom", style: glyphStyle, color: foregroundColor };
    tmp4Result = hasOwnProperty(AppsIcon.AppsIcon, obj3);
  }
  obj.children = tmp4Result;
  return hasOwnProperty(React4, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const dependencyMap = { header: 20, list: 32, card: 40, dialog: 48 };
let createStyles = fn(5009);
let closure_8 = createStyles.createStyles((width, borderRadius, width2) => {
  const obj = { frame: { width, height: width, borderRadius, overflow: "hidden", alignItems: "center", justifyContent: "center" }, image: { width, height: width }, border: null, glyph: null };
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.borderRadius = borderRadius;
  obj2.borderWidth = 1;
  obj2.borderColor = nativeDefault.colors.BORDER_SUBTLE;
  obj.border = obj2;
  obj.glyph = { width: width2, height: width2 };
  return obj;
});
createStyles = fn(5009);
let closure_9 = createStyles.createStyles((width, backgroundColor, color) => {
  const obj = { tile: null, character: { color, fontSize: Math.round(width / 2), lineHeight: Math.round(0.625 * width) } };
  const size = { width, height: width, alignItems: "center", justifyContent: "center", backgroundColor };
  obj.tile = size;
  return obj;
});
createStyles = fn(5009);
let closure_11 = createStyles.createStyles((backgroundColor) => {
  const obj = { tile: { backgroundColor } };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectIcon.tsx");

export default function ConjureProjectIcon(project) {
  project = project.project;
  const tmp4 = useConjureProjectIconDefault(project, dependencyMap[project.size]);
  const url = tmp4.url;
  const tmp5 = closure_8(dependencyMap[project.size], tmp4.radius, tmp4.glyphSize);
  const obj = { style: tmp5.frame, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  if (null != url) {
    const obj2 = { source: null, style: null };
    const tmp2Result = FastImageDefault;
    obj2.source = AvatarUtils.makeSource(url);
    obj2.style = tmp5.image;
    let tmp11 = hasOwnProperty(tmp2Result, obj2);
    let tmp10 = hasOwnProperty;
  } else {
    const obj3 = { project, pixels: tmp, glyphStyle: tmp5.glyph };
    tmp10 = hasOwnProperty;
    tmp11 = hasOwnProperty(ConjureProjectIconFallback, obj3);
  }
  const items = [tmp11, tmp10(React4, { style: tmp5.border, pointerEvents: "none" })];
  obj.children = items;
  return timestampProducer(React4, obj);
};
export function ConjureNewProjectIcon(arg0) {
  const result = useConjureProjectIcon.conjureProjectIconMetrics(tmp);
  const tmp3 = closure_8(dependencyMap[arg0.size], result.radius, result.glyphSize);
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  const obj3 = _modDef671(token);
  const obj4 = { style: null, children: null };
  const items = [tmp3.frame, closure_11(_modDef671(token).alpha(0.24).css()).tile];
  obj4.style = items;
  const alphaResult = _modDef671(token).alpha(0.24);
  obj4.children = hasOwnProperty(MagicWandIcon.MagicWandIcon, { size: "custom", style: tmp3.glyph, color: nativeDefault.colors.ICON_BRAND });
  return hasOwnProperty(React4, obj4);
}