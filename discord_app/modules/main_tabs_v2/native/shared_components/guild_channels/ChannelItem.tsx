// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import GuildIconDefault from "../../../../guild/native/GuildIcon.tsx";
import NotificationCenterUtils from "../../../../notification_center/NotificationCenterUtils.tsx";
import getChannelA11yLabelDefault from "../../../../channel/getChannelA11yLabel.tsx";
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import GroupDMAvatarDefault from "../../../../group_dm/native/GroupDMAvatar.tsx";
import ChannelWrapper from "ChannelWrapper.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const layout = channel.layout;
  let obj = channel(10121);
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = channel(504);
  const items = [GuildStore];
  obj = { style: closure_11(layout).guildBadgeIcon, children: null };
  const stateFromStores = obj1.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  obj = { guild: stateFromStores, size: layoutStyles.icon.guildBadgeIconSize };
  obj.children = closure_8(GuildIconDefault, obj);
  const items1 = [closure_8(View, obj)];
  obj1 = { channel, size: null, wrapperSize: null };
  const tmp = closure_11(layout);
  const tmp6 = closure_10;
  const tmp7 = closure_9;
  const tmp8 = closure_8;
  let str = "sm";
  if (obj6.isLayoutCozy(layout)) {
    str = "md";
  }
  obj1.size = str;
  obj6 = channel(10121);
  let num = 32;
  if (tmp2Result.isLayoutCozy(layout)) {
    num = 48;
  }
  const obj2 = { children: null };
  obj1.wrapperSize = num;
  items1[1] = tmp8(channel(12191).ChannelIcon, obj1);
  obj2.children = items1;
  return tmp6(tmp7, obj2);
}
const View = fn(17).View;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((layout) => {
  const guildBadgeIcon = {
    position: "absolute",
    zIndex: 1,
    bottom: -4,
    right: -4,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
    borderRadius: null,
  };
  let num = 6;
  if (obj2.isLayoutCozy(layout)) {
    num = 9;
  }
  guildBadgeIcon.borderRadius = num;
  return { guildBadgeIcon };
});
const size = fn(2);
const result = size.fileFinishedImporting(
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
    const intl = util.intl;
    obj.accessibilityHint = intl.string(util.t["9C444m"]);
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
      let obj = NotificationCenterUtils;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  let obj1 = ChannelListLayout;
  const layoutStyles = obj1.getLayoutStyles(layout);
  let obj2 = ChannelWrapper;
  const children = [unreadBadge, , ,];
  obj = { style: null, children: null };
  obj = {
    position: "relative",
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexGrow: 0,
  };
  const merged = Object.assign(ChannelListLayout.makeSizeStyle(layoutStyles.icon.wrapper.size));
  const merged1 = Object.assign(layoutStyles.icon.margin);
  obj.style = obj;
  if (channel.isGroupDM()) {
    obj1 = { channel, size: layoutStyles.icon.avatarSize };
    let tmp10Result = tmp10(GroupDMAvatarDefault, obj1);
  } else {
    obj2 = { channel, layout };
    tmp10Result = tmp10(LaunchpadChannelIcon, obj2);
  }
  obj.children = tmp10Result;
  children[1] = React6(View, obj);
  let tmp5Result = tmp5(16660);
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
    tmp5Result = tmp5(4713);
    channelName = tmp5Result.computeChannelName(channel, UserStore, RelationshipStore);
  }
  obj3.name = channelName;
  obj3.subtitle = subtitle;
  obj3.unread = flag;
  obj3.resolvedUnreadSetting = ONLY_MENTIONS;
  obj3.muted = flag3;
  obj3.lastMessageTimestampString = relativeTimestamp;
  obj3.channel = channel;
  obj3.locked = locked;
  obj3.connected = connected;
  obj3.live = flag2;
  obj3.mentionCount = mentionCount;
  obj3.mentionBadge = mentionBadge;
  obj3.isSubscriptionGated = isSubscriptionGated;
  obj3.needSubscriptionToAccess = flag4;
  children[2] = tmp5Result.renderChannelContent(obj3);
  tmp10Result = null;
  if (null != end) {
    const obj4 = { style: { paddingLeft: 8 }, children: end };
    tmp10Result = tmp10(tmp11, obj4);
  }
  children[3] = tmp10Result;
  return obj2.renderChannelWrapper(closure_1_10(React7, { children }), {
    channel,
    layout,
    launchpad,
    fontScale,
    panelVariant,
  });
};
