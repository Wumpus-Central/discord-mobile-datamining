// === Module 7336: ? ===

// Module 7336
import obj132 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6316 */;
import SearchField from "SearchField" /* 7337 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

require = fn;
({ View: obj1, StyleSheet } = get_ActivityIndicator);
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { flexDirection: "row", alignItems: "center", height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, paddingHorizontal: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: ThemesDefault.colors.BORDER_STRONG };
obj[0] = obj;
const createCacheKey = { paddingLeft: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
obj[2] = { marginRight: ThemesDefault.space.PX_16 };
obj[3] = { flex: 1 };
let closure_5 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((onClose, ref) => {
  const merged = Object.assign(onClose, Object.create(null));
  const tmp2 = callback();
  let obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["ETE/oC"]);
  obj[2] = onClose.onClose;
  obj[3] = { top: 8, right: 8, bottom: 8, left: 8 };
  obj1 = obj132;
  if (obj1.isAndroid()) {
    obj = { style: null };
    obj[0] = tmp2.cancelIcon;
    let tmp3Result = callback(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj);
  } else {
    obj = { style: null, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj[0] = tmp2.cancelText;
    const intl2 = getSystemLocale.intl;
    obj[4] = intl2.string(getSystemLocale.t["ETE/oC"]);
    tmp3Result = callback(Text.Text, obj);
  }
  obj[4] = tmp3Result;
  tmp3Result = callback(PressableBase.PressableOpacity, obj);
  obj1 = { style: tmp2.container, children: null };
  let tmp4Result = obj132;
  let tmp10 = null;
  if (tmp4Result.isAndroid()) {
    tmp10 = tmp3Result;
  }
  const items = [tmp10, , ];
  const obj2 = { style: tmp2.flex, children: null };
  const obj3 = { children: null };
  const merged1 = Object.assign(merged);
  obj3[0] = callback(SearchField.SearchField, { size: "md", isRound: true, ref });
  obj2[1] = callback(closure_2, obj3);
  items[1] = callback(closure_2, obj2);
  tmp4Result = obj132;
  let tmp12 = null;
  if (!tmp4Result.isAndroid()) {
    tmp12 = tmp3Result;
  }
  items[2] = tmp12;
  obj1[1] = items;
  return callback2(closure_2, obj1);
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default forwardRefResult;