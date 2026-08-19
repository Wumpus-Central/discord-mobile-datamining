// === Module 15571: ? ===

// Module 15571
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import ChatIcon from "ChatIcon" /* 6867 */;
import UnreadIndicator from "UnreadIndicator" /* 15558 */;
import UnreadIndicatorDefault from "UnreadIndicator" /* 15558 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 15560 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 15572 */;
import HomeDrawerDMsRowDefault from "HomeDrawerDMsRow" /* 15573 */;
import closure_3 from "handleConnectionOpen" /* 4197 */;
import { ME } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_6 = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  }
};
const memoResult = importAllResult.memo(function GuildsBarMessages() {
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("GuildsBarMessages");
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
  obj = { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "addition", externalChildren: null, expandedChildren: null, children: 0 };
  let tmp11 = !tmp3;
  const tmp7 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp8 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  if (!tmp3) {
    tmp11 = !stateFromStores;
  }
  obj[1] = tmp11;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[5] = closure_6;
  const intl = tmp4(1236).intl;
  obj[7] = intl.string(getSystemLocale.t.YUU0RF);
  obj[8] = badge;
  obj[9] = jsx(HomeDrawerDMsRowDefault, {});
  obj[10] = jsx(ChatIcon.ChatIcon, { color: tmp8 });
  return jsx(UnreadIndicatorDefault, { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "addition", externalChildren: null, expandedChildren: null, children: 0 });
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;