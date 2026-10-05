// === Module 15960: ChannelUnreadBadge ===

// Module 15960 (ChannelUnreadBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import useFontScale from "useFontScale" /* 5602 */;
import shared_components_Badge from "shared_components/Badge" /* 7503 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import ChannelListLayout from "ChannelListLayout" /* 11698 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const shared_components_BadgeDefault = shared_components_Badge;
let panelVariant;

const View = react_native.View;
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" }, unreadBadgePanel: { marginLeft: -16 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((panelVariant) => {
  let isThread;
  let items1;
  let launchpad;
  let layout;
  let muted;
  let resolvedUnreadSetting;
  let unread;
  panelVariant = panelVariant.panelVariant;
  let tmp = undefined !== panelVariant;
  ({ unread, resolvedUnreadSetting, muted, isThread, layout, launchpad } = panelVariant);
  if (tmp) {
    tmp = panelVariant;
  }
  const tmp2 = closure_7();
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout, launchpad);
  useFontScale;
  let tmp9Result = null;
  if (unread) {
    let num2;
    const items = [tmp2.unreadBadge, , , ];
    let unreadBadgePanel;
    if (tmp) {
      unreadBadgePanel = tmp2.unreadBadgePanel;
    }
    items[1] = unreadBadgePanel;
    const unreadBadge = layoutStyles.unreadBadge;
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    const tmp3Result = ChannelListLayout;
    items[3] = tmp3Result.makeSizeStyle(layoutStyles.unreadBadge.size);
    ({ classic: tmp, size: shared_components_Badge.CHANNEL_BADGE_SIZE * Math.max(tmp7, 1), badgeStyle: items1 });
    const _Math = Math;
    shared_components_BadgeDefault;
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    items1 = [{ opacity: num2 }];
    tmp9Result = <View style={items}>{null}</View>;
    const obj4 = { opacity: num2 };
  }
  return tmp9Result;
}) : ((panelVariant) => {
  let isThread;
  let items1;
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
  const tmp = closure_7();
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout, launchpad);
  useFontScale;
  let tmp8Result = null;
  if (unread) {
    let num2;
    const items = [tmp.unreadBadge, , , ];
    let unreadBadgePanel;
    if (flag) {
      unreadBadgePanel = tmp.unreadBadgePanel;
    }
    items[1] = unreadBadgePanel;
    const unreadBadge = layoutStyles.unreadBadge;
    items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
    const tmp2Result = ChannelListLayout;
    items[3] = tmp2Result.makeSizeStyle(layoutStyles.unreadBadge.size);
    ({ classic: flag, size: shared_components_Badge.CHANNEL_BADGE_SIZE * Math.max(tmp6, 1), badgeStyle: items1 });
    const _Math = Math;
    shared_components_BadgeDefault;
    if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
      num2 = MUTED_OPACITY_CONTENT;
    } else {
      num2 = 1;
    }
    items1 = [{ opacity: num2 }];
    tmp8Result = <View style={items}>{null}</View>;
    const obj4 = { opacity: num2 };
  }
  return tmp8Result;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx");

export default memoResult;