// discord_app/modules/stage_channels/native/components/StageSparkle.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef8408 from "../../../../../_runtime/metro/08408__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function StageSparkleInner(style) {
  ({ IconComponent, icon } = style);
  if (icon === undefined) {
    icon = _modDef8408;
  }
  const tmp3 = closure_6();
  let obj = { style: null, children: null };
  const items = [tmp3.container, style.style];
  obj.style = items;
  obj = { style: tmp3.iconContainer, children: null };
  if (null != IconComponent) {
    obj = { size: "lg", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
    let tmp6Result = tmp6(IconComponent, obj);
    let tmp10 = importDefault;
  } else {
    const obj1 = { source: icon, style: tmp3.iconStyle };
    tmp6Result = tmp6(FastImageDefault, obj1);
    tmp10 = importDefault;
  }
  obj.children = tmp6Result;
  const items1 = [React4(View, obj)];
  const obj2 = { style: tmp3.sparkles, source: tmp10(8409) };
  items1[1] = React4(tmp10(5587), obj2);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
const createStyles = {
  container: { width: 88, height: 88, alignItems: "center", justifyContent: "center" },
  iconContainer: null,
  iconStyle: null,
  sparkles: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: 28,
  height: 56,
  width: 56,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.iconContainer = size;
const size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
createStyles.iconStyle = size1;
createStyles.sparkles = { position: "absolute", top: 0 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSparkle.tsx");

export default function StageSparkle(theme) {
  theme = theme.theme;
  const merged = Object.assign(theme, Object.assign({ theme: 0 }));
  if (null != theme) {
    let obj = { theme, children: null };
    obj = {};
    const merged1 = Object.assign(merged);
    obj.children = React4(StageSparkleInner, obj);
    let tmp7 = React4(native.ThemeContextProvider, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp7 = React4(StageSparkleInner, obj);
  }
  return tmp7;
}
