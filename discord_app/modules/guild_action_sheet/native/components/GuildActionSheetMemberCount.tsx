// === Module 12713: ? ===

// Module 12713
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;
import PlatformTypes from "PlatformTypes" /* 501 */;

require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm };
obj[1] = obj;
obj[2] = { alignItems: "center", justifyContent: "center", marginRight: 4 };
const createCacheKey = { backgroundColor: ThemesDefault.colors.TEXT_STATUS_ONLINE };
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
const memoResult = importAllResult.memo(function MemberCount(arg0) {
  ({ type, count, color, dotContainerWidth } = arg0);
  const tmp2 = useIsMobileVisualRefreshExperimentEnabledDefault("GuildActionSheetMemberCount");
  if (null == count) {
    const intl2 = getSystemLocale.intl;
    if ("online" === type) {
      let v3DzP7x = getSystemLocale.t["3DzP7x"];
    } else {
      v3DzP7x = getSystemLocale.t["5SWsJX"];
    }
    intl2.string(v3DzP7x);
  } else {
    const intl = getSystemLocale.intl;
    if ("online" === type) {
      let etqpUG = getSystemLocale.t.PIikks;
    } else {
      etqpUG = getSystemLocale.t.etqpUG;
    }
    let obj = { count: null };
    obj[0] = count;
    const tmp11 = callback();
    obj = { style: null, children: null };
    obj[0] = tmp11.wrapper;
    const items = [tmp11.dotContainer, ];
    let tmp15 = null != dotContainerWidth;
    if (tmp15) {
      obj = { width: null };
      obj[0] = dotContainerWidth;
      tmp15 = obj;
    }
    obj1 = { style: null, children: null };
    items[1] = tmp15;
    obj1[0] = items;
    const items1 = [tmp11.dot, ];
    const obj2 = { style: null };
    items1[1] = "online" === type ? tmp11.onlineDot : tmp11.offlineDot;
    obj2[0] = items1;
    obj1[1] = callback(View, obj2);
    const items2 = [callback(View, obj1), ];
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
    obj3[3] = tmp2 ? tmp11.refreshText : tmp11.text;
    obj3[4] = intl.format(etqpUG, obj);
    items2[1] = callback(Text.Text, obj3);
    obj[1] = items2;
    return callback2(View, obj);
  }
});
const result = require("obj132").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx");

export default memoResult;