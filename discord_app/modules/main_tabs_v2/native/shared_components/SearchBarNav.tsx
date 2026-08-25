// === Module 6100: ? ===

// Module 6100
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PressableBase from "PressableBase" /* 4949 */;
import SearchField from "SearchField" /* 6101 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ View: obj1, StyleSheet } = get_ActivityIndicator);
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { container: null, cancelText: null, cancelIcon: null, flex: null };
obj = { flexDirection: "row", alignItems: "center", height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, paddingHorizontal: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: ThemesDefault.colors.BORDER_STRONG };
obj[0] = obj;
createCacheKey = { paddingLeft: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { marginRight: ThemesDefault.space.PX_16 };
obj[3] = { flex: 1 };
let closure_5 = createCacheKey.createStyles(obj);
let obj2 = { marginRight: ThemesDefault.space.PX_16 };
const forwardRefResult = importAllResult.forwardRef((onClose, ref) => {
  const merged = Object.assign(onClose, Object.create(null));
  const tmp2 = callback();
  let obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["ETE/oC"]);
  obj[2] = onClose.onClose;
  obj[3] = { top: 8, right: 8, bottom: 8, left: 8 };
  obj1 = set;
  if (obj1.isAndroid()) {
    obj = { style: null };
    obj[0] = tmp2.cancelIcon;
    let tmp3Result = tmp3(tmp4(5380).ArrowLargeLeftIcon, obj);
  } else {
    obj = { style: null, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj[0] = tmp2.cancelText;
    const intl2 = tmp4(1236).intl;
    obj[4] = intl2.string(tmp4(1236).t["ETE/oC"]);
    tmp3Result = tmp3(tmp4(4376).Text, obj);
  }
  obj[4] = tmp3Result;
  tmp3Result = tmp3(PressableBase.PressableOpacity, obj);
  obj1 = { style: tmp2.container, children: null };
  let tmp4Result = tmp4(500);
  let tmp10 = null;
  if (tmp4Result.isAndroid()) {
    tmp10 = tmp3Result;
  }
  const items = [tmp10, , ];
  const obj2 = { style: tmp2.flex, children: null };
  const obj3 = { children: null };
  const merged1 = Object.assign(merged);
  obj3[0] = closure_3(SearchField.SearchField, { size: "md", isRound: true, ref });
  obj2[1] = closure_3(closure_2, obj3);
  items[1] = closure_3(closure_2, obj2);
  tmp4Result = tmp4(500);
  let tmp12 = null;
  if (!tmp4Result.isAndroid()) {
    tmp12 = tmp3Result;
  }
  items[2] = tmp12;
  obj1[1] = items;
  return closure_4(closure_2, obj1);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default forwardRefResult;