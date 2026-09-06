// === Module 16033: ChannelUnreadBadge ===

// Module 16033 (ChannelUnreadBadge)
import useFontScale from "useFontScale" /* 4982 */;
import Badge from "Badge" /* 7869 */;
import ChannelListLayout from "ChannelListLayout" /* 10121 */;
import noop from "module_19" /* 19 */;

const BadgeDefault = Badge;

require = fn;
const View = fn(17).View;
const MUTED_OPACITY_CONTENT = fn(10118).MUTED_OPACITY_CONTENT;
const UnreadSetting = fn(4742).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
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
  let obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout, launchpad);
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
    obj = { style: null, children: null };
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    items[3] = ChannelListLayout.makeSizeStyle(layoutStyles.unreadBadge.size);
    obj.style = items;
    obj = { classic: flag, size: null, badgeStyle: null };
    const tmp2Result = ChannelListLayout;
    const _Math = Math;
    obj.size = Badge.CHANNEL_BADGE_SIZE * Math.max(tmp6, 1);
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      let num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    const obj1 = { opacity: num2 };
    const items1 = [obj1];
    obj.badgeStyle = items1;
    obj.children = jsx(BadgeDefault, { classic: flag, size: null, badgeStyle: null });
    tmp8Result = <View classic={flag} size={null} badgeStyle={null} />;
  }
  return tmp8Result;
});