// === Module 16468: GuildsBarMessages ===

// Module 16468 (GuildsBarMessages)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ChatIcon from "ChatIcon" /* 5158 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 16454 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 16457 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16469 */;
import HomeDrawerDirectMessagesRowDefault from "HomeDrawerDirectMessagesRow" /* 16470 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4461 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const config = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default noop.memo(function GuildsBarMessages() {
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  const items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === ME;
    }
    return tmp2;
  });
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
  const colors = nativeDefault.colors;
  const obj3 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "explicit_media_report_false_positive_success", externalChildren: null, expandedChildren: null, children: "text-brand" };
  const tmp6 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp7 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const intl = util.intl;
  obj3.label = intl.string(util.t.YUU0RF);
  obj3.externalChildren = badge;
  obj3.expandedChildren = jsx(HomeDrawerDirectMessagesRowDefault, {});
  obj3.children = jsx(ChatIcon.ChatIcon, { color: tmp7 });
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "explicit_media_report_false_positive_success", externalChildren: null, expandedChildren: null, children: "text-brand" });
});