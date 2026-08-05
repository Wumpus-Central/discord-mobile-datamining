// discord_app/modules/guilds_bar/native/GuildsBarMessages.tsx
import handleConnectionOpen from "handleConnectionOpen";
import { ME } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { ChatIcon } from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { HomeDrawerDMsRow } from "../../home_drawer/native/HomeDrawerDirectMessagesRow.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { UnreadIndicator } from "GuildsBarAnimatedItemWrapper.tsx";
import { useGuildsBarBottomRightBadge } from "hooks/useGuildsBarBottomRightBadge.tsx";
import { transitionGuildsBarToGuildOrOpenSelectedChannel } from "utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";

const require = arg1;
let closure_6 = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannel(ME);
  }
};
const memoResult = require("noop").memo(function GuildsBarMessages() {
  let badge;
  let cutouts;
  const tmp3 = useIsMobileVisualRefreshExperimentEnabled("GuildsBarMessages");
  let obj = UnreadIndicator /* UnreadIndicator */;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const items = [handleConnectionOpen];
  const stateFromStores = initialize /* initialize */.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === closure_4;
    }
    return tmp2;
  });
  const obj2 = initialize /* initialize */;
  ({ badge, cutouts } = useGuildsBarBottomRightBadge({ mentionCount: 0 }));
  const colors = Themes.colors;
  obj = { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "STORE_LISTING_FETCH_SUCCESS", externalChildren: null, expandedChildren: null, children: 0 };
  let tmp11 = !tmp3;
  const tmp7 = useGuildsBarBottomRightBadge({ mentionCount: 0 });
  const tmp8 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  if (!tmp3) {
    tmp11 = !stateFromStores;
  }
  obj[1] = tmp11;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[5] = closure_6;
  const intl = tmp4(1236).intl;
  obj[7] = intl.string(getSystemLocale /* getSystemLocale */.t.YUU0RF);
  obj[8] = badge;
  obj[9] = jsx(HomeDrawerDMsRow, {});
  obj[10] = jsx(ChatIcon /* ChatIcon */.ChatIcon, { color: tmp8 });
  return jsx(UnreadIndicator, { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "STORE_LISTING_FETCH_SUCCESS", externalChildren: null, expandedChildren: null, children: 0 });
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;