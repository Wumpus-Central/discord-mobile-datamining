// discord_app/modules/guilds_bar/native/GuildsBarMessages.tsx
import handleConnectionOpen from "handleConnectionOpen";
import { ME } from "ME";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_6 = {
  onPress() {
    require("utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx")(ME);
  }
};
const memoResult = require("noop").memo(function GuildsBarMessages() {
  let badge;
  let cutouts;
  const tmp3 = require("../../themes/experiments/MobileVisualRefreshExperiment.tsx")("GuildsBarMessages");
  let obj = require("GuildsBarAnimatedItemWrapper.tsx") /* UnreadIndicator */;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const items = [handleConnectionOpen];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === closure_4;
    }
    return tmp2;
  });
  const obj2 = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  ({ badge, cutouts } = require("hooks/useGuildsBarBottomRightBadge.tsx")({ mentionCount: 0 }));
  const colors = require("../../../../discord_common/js/packages/tokens/native.tsx").colors;
  obj = { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "STORE_LISTING_FETCH_SUCCESS", externalChildren: null, expandedChildren: null, children: 0 };
  let tmp11 = !tmp3;
  const tmp7 = require("hooks/useGuildsBarBottomRightBadge.tsx")({ mentionCount: 0 });
  const tmp8 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  if (!tmp3) {
    tmp11 = !stateFromStores;
  }
  obj[1] = tmp11;
  obj[3] = guildsBarAnimatedWrapperStyles;
  obj[4] = cutouts;
  obj[5] = closure_6;
  const intl = tmp4(1236).intl;
  obj[7] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.YUU0RF);
  obj[8] = badge;
  obj[9] = jsx(require("../../home_drawer/native/HomeDrawerDirectMessagesRow.tsx"), {});
  obj[10] = jsx(require("../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx") /* ChatIcon */.ChatIcon, { color: tmp8 });
  return jsx(require("GuildsBarAnimatedItemWrapper.tsx"), { selected: stateFromStores, circle: null, unread: false, styles: null, cutouts: null, config: null, overState: "y", label: "STORE_LISTING_FETCH_SUCCESS", externalChildren: null, expandedChildren: null, children: 0 });
});
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;