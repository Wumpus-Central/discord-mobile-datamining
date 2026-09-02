// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx
import getFontScale from "../../../../screen/native/useFontScale.tsx";
import DEFAULT_BADGE_SIZEDefault from "../Badge.tsx";
import getLayoutStyles from "layouts/ChannelListLayout.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MUTED_OPACITY_CONTENT } from "../../../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import { UnreadSetting } from "../../../../read_states/ReadStateConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
let closure_7 = createCacheKey.createStyles({
  unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" },
  unreadBadgePanel: { marginLeft: -16 },
});
const memoResult = importAllResult.memo(function ChannelUnreadBadge(panelVariant) {
  let flag = panelVariant.panelVariant;
  ({ unread, resolvedUnreadSetting, muted, isThread, layout, launchpad } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  let obj = getLayoutStyles;
  const layoutStyles = obj.getLayoutStyles(layout, launchpad);
  getFontScale;
  let tmp8Result = null;
  if (unread) {
    const items = [tmp.unreadBadge, , ,];
    let unreadBadgePanel;
    if (flag) {
      unreadBadgePanel = tmp.unreadBadgePanel;
    }
    items[1] = unreadBadgePanel;
    const unreadBadge = layoutStyles.unreadBadge;
    obj = { style: null, children: null };
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    items[3] = tmp2(10224).makeSizeStyle(layoutStyles.unreadBadge.size);
    obj[0] = items;
    obj = { classic: null, size: null, badgeStyle: null };
    obj[0] = flag;
    const tmp2Result = tmp2(10224);
    const tmp9 = View;
    const _Math = Math;
    obj[1] = tmp2(7623).CHANNEL_BADGE_SIZE * Math.max(tmp6, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    obj1 = { opacity: null };
    obj1[0] = num2;
    const items1 = [obj1];
    obj[2] = items1;
    obj[1] = jsx(DEFAULT_BADGE_SIZEDefault, { classic: null, size: null, badgeStyle: null });
    tmp8Result = tmp8(tmp9, obj);
    const tmp12 = DEFAULT_BADGE_SIZEDefault;
  }
  return tmp8Result;
});
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx",
);

export default memoResult;
