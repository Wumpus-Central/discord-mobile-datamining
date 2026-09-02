// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import GuildIconSizesDefault from "../../../../guild/native/GuildIcon.tsx";
import getRelativeTimestamp from "../../../../notification_center/NotificationCenterUtils.tsx";
import getChannelA11yLabelDefault from "../../../../channel/getChannelA11yLabel.tsx";
import getLayoutStyles from "layouts/ChannelListLayout.tsx";
import FacepileGroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import renderChannelWrapper from "ChannelWrapper.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../../stores/GuildStore.tsx";
import closure_5 from "../../../../../stores/RelationshipStore.tsx";
import closure_6 from "../../../../../stores/UserStore.tsx";
import { UnreadSetting } from "../../../../read_states/ReadStateConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const layout = channel.layout;
  let obj = channel(10224);
  const layoutStyles = obj.getLayoutStyles(layout);
  obj1 = channel(586);
  const items = [closure_4];
  obj = { style: callback2(layout).guildBadgeIcon, children: null };
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_4.getGuild(channel.guild_id));
  obj = { guild: stateFromStores, size: layoutStyles.icon.guildBadgeIconSize };
  obj[1] = callback(GuildIconSizesDefault, obj);
  const items1 = [callback(View, obj)];
  obj1 = { channel, size: null, wrapperSize: null };
  const tmp = callback2(layout);
  const tmp2 = channel;
  const tmp6 = closure_10;
  const tmp7 = closure_9;
  const tmp8 = callback;
  let str = "sm";
  if (obj6.isLayoutCozy(layout)) {
    str = "md";
  }
  obj1[1] = str;
  obj6 = channel(10224);
  let num = 32;
  if (tmp2Result.isLayoutCozy(layout)) {
    num = 48;
  }
  const obj2 = { children: null };
  obj1[2] = num;
  items1[1] = tmp8(channel(11981).ChannelIcon, obj1);
  obj2[0] = items1;
  return tmp6(tmp7, obj2);
}
noopAll;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((layout) => {
  const guildBadgeIcon = {
    position: "absolute",
    zIndex: 1,
    bottom: -4,
    right: -4,
    borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
    borderRadius: null,
  };
  let num = 6;
  if (obj2.isLayoutCozy(layout)) {
    num = 9;
  }
  guildBadgeIcon[6] = num;
  return { guildBadgeIcon };
});
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx",
);

export const getChannelAccessibilityProps = function getChannelAccessibilityProps(channel) {
  channel = channel.channel;
  let obj = {
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: getChannelA11yLabelDefault({
      channel,
      unread,
      mentionCount,
      voiceStates,
      embeddedActivitiesCount,
    }),
  };
  ({ unread, mentionCount, voiceStates, embeddedActivitiesCount } = channel);
  if (channel.isGuildVoice()) {
    obj = { accessibilityHint: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["9C444m"]);
    const tmp2 = obj;
  }
  const merged = Object.assign(tmp2);
  return obj;
};
export const renderChannelItem = function renderChannelItem(unread) {
  ({ channel, locked } = unread);
  ({ subtitle, unreadBadge, mentionBadge } = unread);
  if (locked === undefined) {
    locked = false;
  }
  let flag = unread.unread;
  if (flag === undefined) {
    flag = false;
  }
  let ONLY_MENTIONS = unread.resolvedUnreadSetting;
  if (ONLY_MENTIONS === undefined) {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  let flag2 = unread.live;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = unread.muted;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({
    latestMessageTimestamp,
    layout,
    end,
    channelName,
    isSubscriptionGated,
    connected,
    mentionCount,
    launchpad,
    fontScale,
  } = unread);
  if (isSubscriptionGated === undefined) {
    isSubscriptionGated = false;
  }
  let flag4 = unread.needSubscriptionToAccess;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let panelVariant = unread.panelVariant;
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let relativeTimestamp = null;
  if (null != latestMessageTimestamp) {
    relativeTimestamp = null;
    if (!flag3) {
      let obj = getRelativeTimestamp;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  obj1 = getLayoutStyles;
  const layoutStyles = obj1.getLayoutStyles(layout);
  let obj2 = renderChannelWrapper;
  const children = [unreadBadge, , ,];
  obj = { style: null, children: null };
  obj = {
    position: "relative",
    borderRadius: ThemesDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexGrow: 0,
  };
  const merged = Object.assign(getLayoutStyles.makeSizeStyle(layoutStyles.icon.wrapper.size));
  const merged1 = Object.assign(layoutStyles.icon.margin);
  obj[0] = obj;
  if (channel.isGroupDM()) {
    obj1 = { channel: null, size: null };
    obj1[0] = channel;
    obj1[1] = layoutStyles.icon.avatarSize;
    let tmp10Result = tmp10(FacepileGroupDMAvatarDefault, obj1);
  } else {
    obj2 = { channel: null, layout: null };
    obj2[0] = channel;
    obj2[1] = layout;
    tmp10Result = tmp10(LaunchpadChannelIcon, obj2);
  }
  obj[1] = tmp10Result;
  children[1] = closure_8(View, obj);
  let tmp5Result = tmp5(16476);
  const obj3 = {
    layout,
    name: null,
    subtitle: null,
    unread: null,
    resolvedUnreadSetting: null,
    muted: null,
    lastMessageTimestampString: null,
    channel: null,
    locked: null,
    connected: null,
    live: null,
    mentionCount: null,
    mentionBadge: null,
    isSubscriptionGated: null,
    needSubscriptionToAccess: null,
  };
  if (channelName == null) {
    tmp5Result = tmp5(4674);
    channelName = tmp5Result.computeChannelName(channel, closure_6, closure_5);
  }
  obj3[1] = channelName;
  obj3[2] = subtitle;
  obj3[3] = flag;
  obj3[4] = ONLY_MENTIONS;
  obj3[5] = flag3;
  obj3[6] = relativeTimestamp;
  obj3[7] = channel;
  obj3[8] = locked;
  obj3[9] = connected;
  obj3[10] = flag2;
  obj3[11] = mentionCount;
  obj3[12] = mentionBadge;
  obj3[13] = isSubscriptionGated;
  obj3[14] = flag4;
  children[2] = tmp5Result.renderChannelContent(obj3);
  tmp10Result = null;
  if (null != end) {
    const obj4 = { style: null, children: null };
    obj4[0] = { paddingLeft: 8 };
    obj4[1] = end;
    tmp10Result = tmp10(tmp11, obj4);
  }
  children[3] = tmp10Result;
  return obj2.renderChannelWrapper(closure_10(closure_9, { children }), {
    channel,
    layout,
    launchpad,
    fontScale,
    panelVariant,
  });
};
