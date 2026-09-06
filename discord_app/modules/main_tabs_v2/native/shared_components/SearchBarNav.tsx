// === Module 7376: SearchBarNav ===

// Module 7376 (SearchBarNav)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import Pressables from "Pressables" /* 5123 */;
import SearchField from "SearchField" /* 7050 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let obj = { container: null, cancelText: null, cancelIcon: null, flex: null };
obj = { flexDirection: "row", alignItems: "center", height: fn(5682).NAV_BAR_HEIGHT, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_STRONG };
obj.container = obj;
const createStyles = { paddingLeft: nativeDefault.space.PX_16 };
obj.cancelText = createStyles;
obj.cancelIcon = { marginRight: nativeDefault.space.PX_16 };
obj.flex = { flex: 1 };
let closure_5 = createStyles.createStyles(obj);
let obj2 = { marginRight: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default noop.forwardRef((onClose, ref) => {
  const merged = Object.assign(onClose, Object.assign({ onClose: 0 }));
  const tmp2 = closure_5();
  let obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["ETE/oC"]);
  obj.onPress = onClose.onClose;
  obj.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
  let obj1 = PlatformUtils;
  if (obj1.isAndroid()) {
    obj = { style: tmp2.cancelIcon };
    let tmp3Result = tmp3(tmp4(5628).ArrowLargeLeftIcon, obj);
  } else {
    obj = { style: tmp2.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp4(1114).intl;
    obj.children = intl2.string(tmp4(1114).t["ETE/oC"]);
    tmp3Result = tmp3(tmp4(4556).Text, obj);
  }
  obj.children = tmp3Result;
  tmp3Result = tmp3(Pressables.PressableOpacity, obj);
  obj1 = { style: tmp2.container, children: null };
  let tmp4Result = tmp4(1115);
  let tmp10 = null;
  if (tmp4Result.isAndroid()) {
    tmp10 = tmp3Result;
  }
  const items = [tmp10, , ];
  const obj2 = { style: tmp2.flex, children: null };
  const obj3 = { children: null };
  const merged1 = Object.assign(merged);
  obj3.children = React3(SearchField.SearchField, { size: "md", isRound: true, ref });
  obj2.children = React3(React2, obj3);
  items[1] = React3(React2, obj2);
  tmp4Result = tmp4(1115);
  let tmp12 = null;
  if (!tmp4Result.isAndroid()) {
    tmp12 = tmp3Result;
  }
  items[2] = tmp12;
  obj1.children = items;
  return React4(React2, obj1);
});