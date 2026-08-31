// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import PlatformTypes from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";

require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { wrapper: { flexDirection: "row", alignItems: "center" }, dot: null, dotContainer: null, onlineDot: null, offlineDot: null, refreshText: null };
obj = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm };
obj[1] = obj;
obj[2] = { alignItems: "center", justifyContent: "center", marginRight: 4 };
createCacheKey = { backgroundColor: ThemesDefault.colors.TEXT_STATUS_ONLINE };
obj[3] = createCacheKey;
obj[4] = { backgroundColor: ThemesDefault.colors.TEXT_STATUS_OFFLINE };
let num;
if (PlatformTypes.isAndroid()) {
  num = 14;
}
obj[5] = { textAlignVertical: "center", lineHeight: num };
let closure_5 = createCacheKey.createStyles(obj);
let obj2 = { backgroundColor: ThemesDefault.colors.TEXT_STATUS_OFFLINE };
const memoResult = importAllResult.memo(function MemberCount(arg0) {
  ({ type, count, color, dotContainerWidth } = arg0);
  if (null == count) {
    const intl2 = getSystemLocale.intl;
    if ("online" === type) {
    } else {
    }
    intl2.string(_5SWsJX);
    const tmp6 = dependencyMap;
  } else {
    const intl = getSystemLocale.intl;
    if ("online" === type) {
      let etqpUG = tmp(1236).t.PIikks;
    } else {
      etqpUG = tmp(1236).t.etqpUG;
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
    obj1[1] = closure_3(View, obj2);
    const items2 = [closure_3(View, obj1), ];
    if (color == null) {
      color = "text-default";
    }
    const obj3 = { variant: "text-sm/normal", color: null, lineClamp: 1, style: null, children: null };
    obj3[1] = color;
    obj3[3] = tmp11.refreshText;
    obj3[4] = intl.format(etqpUG, obj);
    items2[1] = closure_3(Text.Text, obj3);
    obj[1] = items2;
    return closure_4(View, obj);
  }
});
const result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx");

export default memoResult;