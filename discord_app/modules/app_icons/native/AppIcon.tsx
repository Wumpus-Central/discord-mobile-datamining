// === Module 15621: AppIcon ===

// Module 15621 (AppIcon)
import nativeDefault from "native" /* 576 */;
import useThemeDefault from "useTheme" /* 4574 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const getIconById = fn(9455).getIconById;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = { container: { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, image: { resizeMode: "contain", height: "100%", width: "100%" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = closure_7();
  const tmp2 = useThemeDefault();
  const tmp3 = getIconById(size.id);
  let num2 = 1;
  if (obj.isThemeDark(tmp2)) {
    num2 = 0;
  }
  const obj2 = { style: null, children: <React3 style={tmp.image} source={tmp3.iconSource} /> };
  const items = [tmp.container, { width: num, height: num, borderWidth: num2 }, size.style];
  obj2.style = items;
  return <React4 style={null}><React3 style={tmp.image} source={tmp3.iconSource} /></React4>;
};