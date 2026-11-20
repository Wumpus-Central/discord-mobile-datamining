// === Module 17760: GuildsBarMessages ===

// Module 17760 (GuildsBarMessages)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import ChatIcon from "ChatIcon" /* 7552 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 17697 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 17746 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 17749 */;
import HomeDrawerDirectMessagesRowDefault from "HomeDrawerDirectMessagesRow" /* 17761 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 9913 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
const ME = fn(1071).ME;
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
  items = [SelectedGuildStore, ICYMIStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === ME;
    }
    if (tmp2) {
      tmp2 = !isTabFocused.getIsTabFocused();
    }
    return tmp2;
  });
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
  colors = nativeDefault.colors;
  const obj3 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "BG_GRADIENT_HEXAGON_PROMO_1", externalChildren: 0.6, expandedChildren: 560, children: 24 };
  const tmp6 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp7 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const intl = util.intl;
  obj3.label = intl.string(util.t.YUU0RF);
  obj3.externalChildren = badge;
  obj3.expandedChildren = jsx(HomeDrawerDirectMessagesRowDefault, {});
  obj3.children = jsx(ChatIcon.ChatIcon, { color: tmp7 });
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "BG_GRADIENT_HEXAGON_PROMO_1", externalChildren: 0.6, expandedChildren: 560, children: 24 });
});