// === Module 16193: ChannelUnreadBadge ===

// Module 16193 (ChannelUnreadBadge)
import useFontScale from "useFontScale" /* 5069 */;
import Badge from "Badge" /* 7990 */;
import ChannelListLayout from "ChannelListLayout" /* 10270 */;
import noop from "module_19" /* 19 */;

const BadgeDefault = Badge;

require = fn;
const View = fn(17).View;
const MUTED_OPACITY_CONTENT = fn(10267).MUTED_OPACITY_CONTENT;
const UnreadSetting = fn(4822).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" }, unreadBadgePanel: { marginLeft: -16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx");

export default noop.memo(function ChannelUnreadBadge(panelVariant) {
  let flag = panelVariant.panelVariant;
  ({ unread, resolvedUnreadSetting, muted, isThread, layout, launchpad } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout, launchpad);
  useFontScale;
  let tmp8Result = null;
  if (unread) {
    const items = [tmp.unreadBadge, , , ];
    let unreadBadgePanel;
    if (flag) {
      unreadBadgePanel = tmp.unreadBadgePanel;
    }
    items[1] = unreadBadgePanel;
    const unreadBadge = layoutStyles.unreadBadge;
    const obj2 = { style: null, children: null };
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    items[3] = ChannelListLayout.makeSizeStyle(layoutStyles.unreadBadge.size);
    obj2.style = items;
    const obj3 = { classic: flag, size: null, badgeStyle: null };
    const tmp2Result = ChannelListLayout;
    const _Math = Math;
    obj3.size = Badge.CHANNEL_BADGE_SIZE * Math.max(tmp6, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    const obj4 = { opacity: num2 };
    const items1 = [obj4];
    obj3.badgeStyle = items1;
    obj2.children = jsx(BadgeDefault, { classic: flag, size: null, badgeStyle: null });
    tmp8Result = <View style={null}>{null}</View>;
  }
  return tmp8Result;
});