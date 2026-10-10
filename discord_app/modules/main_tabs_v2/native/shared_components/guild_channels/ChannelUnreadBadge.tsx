// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx
import useFontScale from "../../../../screen/native/useFontScale.tsx";
import Badge from "../Badge.tsx";
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const BadgeDefault = Badge;

require = fn;
const View = fn(17).View;
const MUTED_OPACITY_CONTENT = fn(11758).MUTED_OPACITY_CONTENT;
const UnreadSetting = fn(5967).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles({
  unreadBadge: { flexGrow: 0, flexShrink: 0, position: "absolute" },
  unreadBadgePanel: { marginLeft: -16 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelUnreadBadge(panelVariant) {
        panelVariant = panelVariant.panelVariant;
        let tmp = undefined !== panelVariant;
        ({ unread, resolvedUnreadSetting, muted, isThread, layout, launchpad } = panelVariant);
        if (tmp) {
          tmp = panelVariant;
        }
        const tmp2 = closure_7();
        const layoutStyles = ChannelListLayout.getLayoutStyles(layout, launchpad);
        useFontScale;
        let tmp9Result = null;
        if (unread) {
          const items = [tmp2.unreadBadge, , ,];
          let unreadBadgePanel;
          if (tmp) {
            unreadBadgePanel = tmp2.unreadBadgePanel;
          }
          items[1] = unreadBadgePanel;
          const unreadBadge = layoutStyles.unreadBadge;
          const obj2 = { style: null, children: null };
          items[2] = isThread ? unreadBadge.positionThread : unreadBadge.position;
          items[3] = ChannelListLayout.makeSizeStyle(layoutStyles.unreadBadge.size);
          obj2.style = items;
          const obj3 = { classic: tmp, size: null, badgeStyle: null };
          const tmp3Result = ChannelListLayout;
          const _Math = Math;
          obj3.size = Badge.CHANNEL_BADGE_SIZE * Math.max(tmp7, 1);
          if (resolvedUnreadSetting !== UnreadSetting.ALL_MESSAGES) {
            let num2 = MUTED_OPACITY_CONTENT;
          } else {
            num2 = 1;
          }
          const obj4 = { opacity: num2 };
          obj3.badgeStyle = obj4;
          obj2.children = jsx(BadgeDefault, { classic: tmp, size: null, badgeStyle: null });
          tmp9Result = <View style={null}>{null}</View>;
        }
        return tmp9Result;
      }
    : function ChannelUnreadBadge(panelVariant) {
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
          const items = [tmp.unreadBadge, , ,];
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
          obj3.badgeStyle = obj4;
          obj2.children = jsx(BadgeDefault, { classic: flag, size: null, badgeStyle: null });
          tmp8Result = <View style={null}>{null}</View>;
        }
        return tmp8Result;
      },
);
