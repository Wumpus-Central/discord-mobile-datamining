// === Module 17523: AppIcon ===

// Module 17523 (AppIcon)
import nativeDefault from "native" /* 575 */;
import useThemeDefault from "useTheme" /* 5484 */;
import FastImageDefault from "FastImage" /* 5957 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const getIconById = fn(11118).getIconById;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj2 = { container: { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, image: { resizeMode: "contain", height: "100%", width: "100%" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = closure_6();
  const tmp4 = useThemeDefault();
  const tmp5 = getIconById(size.id);
  let num2 = 1;
  if (obj.isThemeDark(tmp4)) {
    num2 = 0;
  }
  const obj2 = { style: null, children: jsx(FastImageDefault, { style: tmp.image, source: tmp5.iconSource }) };
  items = [tmp.container, { width: num, height: num, borderWidth: num2 }, size.style];
  obj2.style = items;
  return <View style={null}>{jsx(FastImageDefault, { style: tmp.image, source: tmp5.iconSource })}</View>;
};