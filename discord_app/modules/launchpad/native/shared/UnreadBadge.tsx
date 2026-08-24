// discord_app/modules/launchpad/native/shared/UnreadBadge.tsx
import getFontScale from "../../../screen/native/useFontScale.tsx";
import DEFAULT_BADGE_SIZE from "../../../main_tabs_v2/native/shared_components/Badge.tsx";
import DEFAULT_BADGE_SIZEDefault from "../../../main_tabs_v2/native/shared_components/Badge.tsx";
import getLayoutStyleDefault from "getLayoutStyles.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MUTED_OPACITY_CONTENT } from "../../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
let closure_7 = createCacheKey.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" } });
const memoResult = importAllResult.memo(function UnreadBadge(arg0) {
  ({ unread, resolvedUnreadSetting, muted } = arg0);
  const tmp4 = getLayoutStyleDefault();
  getFontScale;
  let tmp9Result = null;
  if (unread) {
    let obj = { style: null, children: null };
    const items = [tmp.unreadBadge, tmp4.unreadBadge.position, ];
    obj = { width: null, height: null };
    obj[0] = tmp4.unreadBadge.size;
    obj[1] = tmp4.unreadBadge.size;
    items[2] = obj;
    obj[0] = items;
    obj = { classic: true, size: null, badgeStyle: null };
    const _Math = Math;
    obj[1] = DEFAULT_BADGE_SIZE.CHANNEL_BADGE_SIZE * Math.max(tmp7, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    obj1 = { opacity: null };
    obj1[0] = num2;
    const items1 = [obj1];
    obj[2] = items1;
    obj[1] = jsx(DEFAULT_BADGE_SIZEDefault, { classic: true, size: null, badgeStyle: null });
    tmp9Result = tmp9(View, obj);
    const tmp10 = View;
    const tmp2Result = DEFAULT_BADGE_SIZEDefault;
  }
  return tmp9Result;
});
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/UnreadBadge.tsx");

export default memoResult;