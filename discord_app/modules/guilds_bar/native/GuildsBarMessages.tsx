// discord_app/modules/guilds_bar/native/GuildsBarMessages.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ChatIcon from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper.tsx";
import useGuildsBarBottomRightBadgeDefault from "hooks/useGuildsBarBottomRightBadge.tsx";
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx";
import HomeDrawerDirectMessagesRowDefault from "../../home_drawer/native/HomeDrawerDirectMessagesRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const config = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  },
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
  obj = {
    selected: stateFromStores,
    circle: false,
    unread: false,
    styles: guildsBarAnimatedWrapperStyles,
    cutouts,
    config,
    overState: "y",
    label: "CATEGORY_COLLAPSE_ALL",
    externalChildren: null,
    expandedChildren: false,
    children: false,
  };
  const tmp6 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp7 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const intl = util.intl;
  obj.label = intl.string(util.t.YUU0RF);
  obj.externalChildren = badge;
  obj.expandedChildren = jsx(HomeDrawerDirectMessagesRowDefault, {});
  obj.children = jsx(ChatIcon.ChatIcon, { color: tmp7 });
  return jsx(GuildsBarAnimatedItemWrapperDefault, {
    selected: stateFromStores,
    circle: false,
    unread: false,
    styles: guildsBarAnimatedWrapperStyles,
    cutouts,
    config,
    overState: "y",
    label: "CATEGORY_COLLAPSE_ALL",
    externalChildren: null,
    expandedChildren: false,
    children: false,
  });
});
