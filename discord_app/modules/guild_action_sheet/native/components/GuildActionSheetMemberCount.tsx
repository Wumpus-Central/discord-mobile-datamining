// === Module 12830: ? ===

// Module 12830
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import Text from "Text" /* 4440 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;
import PlatformTypes from "PlatformTypes" /* 501 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { wrapper: { flexDirection: "row", alignItems: "center" }, dot: null, dotContainer: null, onlineDot: null, offlineDot: null, text: null, refreshText: null };
obj = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm };
obj[1] = obj;
obj[2] = { alignItems: "center", justifyContent: "center", marginRight: 4 };
createCacheKey = { backgroundColor: ThemesDefault.colors.TEXT_STATUS_ONLINE };
obj[3] = createCacheKey;
obj[4] = { backgroundColor: ThemesDefault.colors.TEXT_STATUS_OFFLINE };
let num;
if (PlatformTypes.isAndroid()) {
  num = 12;
}
obj[5] = { textAlignVertical: "center", lineHeight: num };
let num2;
if (PlatformTypes.isAndroid()) {
  num2 = 14;
}
obj[6] = { textAlignVertical: "center", lineHeight: num2 };
let closure_6 = createCacheKey.createStyles(obj);
let obj2 = { backgroundColor: ThemesDefault.colors.TEXT_STATUS_OFFLINE };
const memoResult = importAllResult.memo(function MemberCount(arg0) {
  ({ type, count, color, dotContainerWidth } = arg0);
  const tmp2 = useIsMobileVisualRefreshExperimentEnabledDefault("GuildActionSheetMemberCount");
  if (null == count) {
    const intl2 = getSystemLocale.intl;
    if ("online" === type) {
    } else {
    }
    intl2.string(_5SWsJX);
  } else {
    const intl = getSystemLocale.intl;
    if ("online" === type) {
      let etqpUG = tmp3(1236).t.PIikks;
    } else {
      etqpUG = tmp3(1236).t.etqpUG;
    }
    let obj = { count: null };
    obj[0] = count;
    const tmp10 = callback();
    obj = { style: null, children: null };
    obj[0] = tmp10.wrapper;
    const items = [tmp10.dotContainer, ];
    let tmp14 = null != dotContainerWidth;
    if (tmp14) {
      obj = { width: null };
      obj[0] = dotContainerWidth;
      tmp14 = obj;
    }
    obj1 = { style: null, children: null };
    items[1] = tmp14;
    obj1[0] = items;
    const items1 = [tmp10.dot, ];
    const obj2 = { style: null };
    items1[1] = "online" === type ? tmp10.onlineDot : tmp10.offlineDot;
    obj2[0] = items1;
    obj1[1] = closure_4(View, obj2);
    const items2 = [closure_4(View, obj1), ];
    let str4 = "text-xs/medium";
    if (tmp2) {
      str4 = "text-sm/normal";
    }
    const obj3 = { variant: null, color: null, lineClamp: 1, style: null, children: null };
    obj3[0] = str4;
    if (color == null) {
      color = "text-default";
    }
    obj3[1] = color;
    obj3[3] = tmp2 ? tmp10.refreshText : tmp10.text;
    obj3[4] = intl.format(etqpUG, obj);
    items2[1] = closure_4(Text.Text, obj3);
    obj[1] = items2;
    return closure_5(View, obj);
  }
});
const result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx");

export default memoResult;