// === Module 16129: ? ===

// Module 16129
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ChatIcon from "ChatIcon" /* 5024 */;
import UnreadIndicator from "UnreadIndicator" /* 16116 */;
import UnreadIndicatorDefault from "UnreadIndicator" /* 16116 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 16118 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16130 */;
import HomeDrawerDMsRowDefault from "HomeDrawerDMsRow" /* 16131 */;
import closure_3 from "handleConnectionOpen" /* 4299 */;
import { ME } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_6 = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  }
};
const memoResult = importAllResult.memo(function GuildsBarMessages() {
  let obj = UnreadIndicator;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === closure_4;
    }
    return tmp2;
  });
  const obj2 = initialize;
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
  const colors = ThemesDefault.colors;
  obj = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config: closure_6, overState: "y", label: "URLSearchParams", externalChildren: true, expandedChildren: false, children: "on-drag" };
  const tmp6 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp7 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const intl = tmp(1233).intl;
  obj[7] = intl.string(getSystemLocale.t.YUU0RF);
  obj[8] = badge;
  obj[9] = jsx(HomeDrawerDMsRowDefault, {});
  obj[10] = jsx(ChatIcon.ChatIcon, { color: tmp7 });
  return jsx(UnreadIndicatorDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config: closure_6, overState: "y", label: "URLSearchParams", externalChildren: true, expandedChildren: false, children: "on-drag" });
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;