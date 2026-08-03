import { View } from "get ActivityIndicator";
import { MUTED_OPACITY_CONTENT } from "hairlineWidth";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" }, unreadBadgePanel: { marginLeft: -16 } });
const memoResult = require("noop").memo(function ChannelUnreadBadge(panelVariant) {
  let isThread;
  let launchpad;
  let layout;
  let muted;
  let resolvedUnreadSetting;
  let unread;
  let flag = panelVariant.panelVariant;
  ({ unread, resolvedUnreadSetting, muted, isThread, layout, launchpad } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  let obj = require(10438) /* getLayoutStyles */;
  const layoutStyles = obj.getLayoutStyles(layout, launchpad);
  require(4672) /* getFontScale */;
  let tmp8Result = null;
  if (unread) {
    const items = [tmp.unreadBadge, , , ];
    let unreadBadgePanel;
    if (flag) {
      unreadBadgePanel = tmp.unreadBadgePanel;
    }
    items[1] = unreadBadgePanel;
    const unreadBadge = layoutStyles.unreadBadge;
    obj = { style: null, children: null };
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    items[3] = tmp2(10438).makeSizeStyle(layoutStyles.unreadBadge.size);
    obj[0] = items;
    obj = { classic: null, size: null, badgeStyle: null };
    obj[0] = flag;
    const tmp2Result = tmp2(10438);
    const tmp9 = View;
    const _Math = Math;
    obj[1] = tmp2(9306).CHANNEL_BADGE_SIZE * Math.max(tmp6, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    const obj1 = { opacity: null };
    obj1[0] = num2;
    const items1 = [obj1];
    obj[2] = items1;
    obj[1] = jsx(importDefault(9306), { classic: null, size: null, badgeStyle: null });
    tmp8Result = tmp8(tmp9, obj);
    const tmp12 = importDefault(9306);
  }
  return tmp8Result;
});
const result = require("hairlineWidth").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx");

export default memoResult;