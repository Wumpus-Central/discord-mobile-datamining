// === Module 8525: StageSparkle ===

// Module 8525 (StageSparkle)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4347 */;
import FastImageDefault from "FastImage" /* 5668 */;
import _modDef8526 from "module_8526" /* 8526 */;
import noop from "module_19" /* 19 */;

require = fn;
function StageSparkleInner(style) {
  ({ IconComponent, icon } = style);
  if (icon === undefined) {
    icon = _modDef8526;
  }
  const tmp3 = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp3.container, style.style];
  obj.style = items;
  const obj2 = { style: tmp3.iconContainer, children: null };
  if (null != IconComponent) {
    const obj3 = { size: "lg", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
    let tmp6Result = React4(IconComponent, obj3);
    let tmp10 = importDefault;
  } else {
    const obj4 = { source: icon, style: tmp3.iconStyle };
    tmp6Result = React4(FastImageDefault, obj4);
    tmp10 = importDefault;
  }
  obj2.children = tmp6Result;
  const items1 = [React4(View, obj2), ];
  const obj5 = { style: tmp3.sparkles, source: tmp10(8527) };
  items1[1] = React4(tmp10(5668), obj5);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { width: 88, height: 88, alignItems: "center", justifyContent: "center" }, iconContainer: null, iconStyle: null, sparkles: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 28, height: 56, width: 56, alignItems: "center", justifyContent: "center" };
obj2.iconContainer = size;
const size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
obj2.iconStyle = size1;
obj2.sparkles = { position: "absolute", top: 0 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSparkle.tsx");

export default function StageSparkle(theme) {
  theme = theme.theme;
  const merged = Object.assign(theme, Object.assign({ theme: 0 }));
  if (null != theme) {
    const obj2 = { theme, children: null };
    const obj3 = {};
    const merged1 = Object.assign(merged);
    obj2.children = React4(StageSparkleInner, obj3);
    let tmp7 = React4(native.ThemeContextProvider, obj2);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    tmp7 = React4(StageSparkleInner, obj);
  }
  return tmp7;
};