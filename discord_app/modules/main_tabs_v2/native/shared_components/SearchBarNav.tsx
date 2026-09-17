// === Module 7490: SearchBarNav ===

// Module 7490 (SearchBarNav)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import Text_Text from "Text/Text" /* 4636 */;
import Pressables from "Pressables" /* 5210 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5716 */;
import SearchField from "SearchField" /* 7164 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4640);
let obj = { container: { flexDirection: "row", alignItems: "center", height: fn(5770).NAV_BAR_HEIGHT, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_STRONG }, cancelText: null, cancelIcon: null, flex: null };
let obj3 = { flexDirection: "row", alignItems: "center", height: fn(5770).NAV_BAR_HEIGHT, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_STRONG };
obj.cancelText = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj.cancelIcon = { marginRight: nativeDefault.space.PX_16 };
obj.flex = { flex: 1 };
let closure_5 = createStyles.createStyles(obj);
let obj5 = { marginRight: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default noop.forwardRef((onClose, ref) => {
  const merged = Object.assign(onClose, Object.assign({ onClose: 0 }));
  const tmp2 = closure_5();
  const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["ETE/oC"]);
  obj.onPress = onClose.onClose;
  obj.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
  if (obj2.isAndroid()) {
    const obj3 = { style: tmp2.cancelIcon };
    let tmp3Result = React3(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj3);
  } else {
    const obj4 = { style: tmp2.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = util.intl;
    obj4.children = intl2.string(util.t["ETE/oC"]);
    tmp3Result = React3(Text_Text.Text, obj4);
  }
  obj.children = tmp3Result;
  const tmp3Result2 = React3(Pressables.PressableOpacity, obj);
  const obj5 = { style: tmp2.container, children: null };
  obj2 = PlatformUtils;
  let tmp10 = null;
  if (tmp4Result.isAndroid()) {
    tmp10 = tmp3Result2;
  }
  const items = [tmp10, , ];
  const obj6 = { style: tmp2.flex, children: null };
  const obj7 = { children: null };
  const merged1 = Object.assign(merged);
  obj7.children = React3(SearchField.SearchField, { size: "md", round: true, ref });
  obj6.children = React3(React2, obj7);
  items[1] = React3(React2, obj6);
  const obj8 = { size: "md", round: true, ref };
  tmp4Result = PlatformUtils;
  let tmp12 = null;
  if (!tmp4Result2.isAndroid()) {
    tmp12 = tmp3Result2;
  }
  items[2] = tmp12;
  obj5.children = items;
  return React4(React2, obj5);
});