// === Module 11945: ? ===

// Module 11945
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import Text from "Text" /* 4734 */;
import registerAssetDefault from "registerAsset" /* 11946 */;
import registerAssetDefault2 from "registerAsset" /* 11947 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, image: { width: 120, height: 80 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 } });
const memoResult = importAllResult.memo((topViewHeight) => {
  let num = topViewHeight.topViewHeight;
  if (num === undefined) {
    num = 0;
  }
  const tagFilter = topViewHeight.tagFilter;
  const tmp = callback();
  const rect = useSafeAreaInsetsDefault();
  let obj = { style: items, children: null };
  items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  let obj2 = AccessibilityAnnouncer;
  if (obj2.isThemeLight(obj.useThemeContext().theme)) {
    let tmp4Result = registerAssetDefault;
  } else {
    tmp4Result = registerAssetDefault2;
  }
  obj = { source: tmp4Result, style: tmp.image };
  const items1 = [callback(closure_4, obj), , ];
  obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  if (tagFilter.size > 0) {
    obj2 = { numTags: null };
    obj2[0] = tagFilter.size;
    let formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t.lvPci0, obj2);
  } else {
    formatToPlainStringResult = intl.string(getSystemLocale.t.PwTMG0);
  }
  obj1[4] = formatToPlainStringResult;
  items1[1] = callback(Text.Text, obj1);
  const obj3 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = getSystemLocale.t;
  if (tagFilter.size > 0) {
    const obj4 = { numTags: null };
    obj4[0] = tagFilter.size;
    let formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj4);
  } else {
    const obj5 = { channelName: null };
    obj5[0] = topViewHeight.channelName;
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj5);
  }
  obj3[3] = formatToPlainStringResult1;
  items1[2] = callback(Text.Text, obj3);
  obj[1] = items1;
  return callback2(closure_3, obj);
});
const result = require("obj132").fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default memoResult;