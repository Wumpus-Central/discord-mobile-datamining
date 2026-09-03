// discord_app/modules/guilds_bar/native/GuildsBarMessages.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import ChatIcon from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import UnreadIndicator from "GuildsBarAnimatedItemWrapper.tsx";
import UnreadIndicatorDefault from "GuildsBarAnimatedItemWrapper.tsx";
import useGuildsBarBottomRightBadgeDefault from "hooks/useGuildsBarBottomRightBadge.tsx";
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";
import HomeDrawerDMsRowDefault from "../../home_drawer/native/HomeDrawerDirectMessagesRow.tsx";
import closure_3 from "../../../stores/SelectedGuildStore.tsx";
import { ME } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
let closure_6 = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  },
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
  obj = {
    selected: stateFromStores,
    circle: false,
    unread: false,
    styles: guildsBarAnimatedWrapperStyles,
    cutouts,
    config: closure_6,
    overState: "y",
    label: "d",
    externalChildren: 90.254,
    expandedChildren: 60.843,
    children: 29.892,
  };
  const tmp6 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp7 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const intl = tmp(1233).intl;
  obj[7] = intl.string(getSystemLocale.t.YUU0RF);
  obj[8] = badge;
  obj[9] = jsx(HomeDrawerDMsRowDefault, {});
  obj[10] = jsx(ChatIcon.ChatIcon, { color: tmp7 });
  return jsx(UnreadIndicatorDefault, {
    selected: stateFromStores,
    circle: false,
    unread: false,
    styles: guildsBarAnimatedWrapperStyles,
    cutouts,
    config: closure_6,
    overState: "y",
    label: "d",
    externalChildren: 90.254,
    expandedChildren: 60.843,
    children: 29.892,
  });
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default memoResult;
