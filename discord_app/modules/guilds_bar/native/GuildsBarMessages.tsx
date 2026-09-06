// === Module 16307: GuildsBarMessages ===

// Module 16307 (GuildsBarMessages)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ChatIcon from "ChatIcon" /* 5071 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 16294 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 16296 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16308 */;
import HomeDrawerDirectMessagesRowDefault from "HomeDrawerDirectMessagesRow" /* 16309 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

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
  let obj = GuildsBarAnimatedItemWrapper;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
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
  obj = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "CATEGORY_COLLAPSE_ALL", externalChildren: null, expandedChildren: false, children: false };
  const tmp6 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp7 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const intl = util.intl;
  obj.label = intl.string(util.t.YUU0RF);
  obj.externalChildren = badge;
  obj.expandedChildren = jsx(HomeDrawerDirectMessagesRowDefault, {});
  obj.children = jsx(ChatIcon.ChatIcon, { color: tmp7 });
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "CATEGORY_COLLAPSE_ALL", externalChildren: null, expandedChildren: false, children: false });
});