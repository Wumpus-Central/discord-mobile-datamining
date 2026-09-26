// === Module 16474: renderChannelItem ===

// Module 16474 (renderChannelItem)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useChannelName from "useChannelName" /* 4989 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7055 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9060 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10371 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16475 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16476 */;
import renderChannelContentDefault from "renderChannelContent" /* 16478 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const tmp = closure_11();
  const tmp2 = getLayoutStylesDefault();
  const items = [GuildStore];
  const obj2 = { children: null };
  const obj3 = { style: tmp.guildBadgeIcon, children: null };
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  obj3.children = closure_8(GuildIconDefault, { guild: stateFromStores, size: tmp2.icon.guildBadgeIconSize });
  const items1 = [closure_8(View, obj3), closure_8(channel(11673).ChannelIcon, { channel, size: "sm", wrapperSize: 32 })];
  obj2.children = items1;
  return closure_10(closure_9, obj2);
}
const View = fn(17).View;
const UnreadSetting = fn(5018).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4836);
let closure_11 = createStyles.createStyles(() => {
  const obj = { guildBadgeIcon: null };
  const rect = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: 6 };
  obj.guildBadgeIcon = rect;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

export default function renderChannelItem(unread) {
  ({ channel, locked } = unread);
  ({ channelCategoryName, subtitle, unreadBadge, mentionBadge } = unread);
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
  ({ latestMessageTimestamp, end, channelName, isSubscriptionGated, connected, mentionCount, fontScale } = unread);
  if (isSubscriptionGated === undefined) {
    isSubscriptionGated = false;
  }
  let flag4 = unread.needSubscriptionToAccess;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let relativeTimestamp = null;
  if (null != latestMessageTimestamp) {
    relativeTimestamp = null;
    if (!flag3) {
      relativeTimestamp = NotificationCenterUtils.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp7 = getLayoutStylesDefault();
  const children = [unreadBadge, , , ];
  const obj2 = { style: null, children: null };
  const size = { position: "relative", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: tmp7.icon.wrapper.size, height: tmp7.icon.wrapper.size };
  const merged = Object.assign(tmp7.icon.margin);
  obj2.style = size;
  if (channel.isGroupDM()) {
    const obj3 = { channel, size: tmp7.icon.avatarSize };
    let tmp11Result = React6(GroupDMAvatarDefault, obj3);
  } else {
    const obj4 = { channel };
    tmp11Result = React6(LaunchpadChannelIcon, obj4);
  }
  obj2.children = tmp11Result;
  children[1] = React6(View, obj2);
  const tmp8 = renderChannelWrapperDefault;
  if (channelName == null) {
    channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  }
  children[2] = renderChannelContentDefault({ name: channelName, subtitle, unread: flag, resolvedUnreadSetting: ONLY_MENTIONS, muted: flag3, lastMessageTimestampString: relativeTimestamp, channel, channelCategoryName, locked, connected, live: flag2, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess: flag4 });
  let tmp11Result2 = null;
  if (null != end) {
    const obj5 = { style: { paddingLeft: 8 }, children: end };
    tmp11Result2 = React6(View, obj5);
  }
  children[3] = tmp11Result2;
  return tmp8(closure_1_10(React7, { children }), { fontScale });
};
export const getChannelAccessibilityProps = function getChannelAccessibilityProps(channel) {
  channel = channel.channel;
  const obj = { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabelDefault({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }), accessibilityHint: null };
  ({ unread, mentionCount, voiceStates, embeddedActivitiesCount } = channel);
  if (channel.isGuildVoice()) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["9C444m"]);
  }
  obj.accessibilityHint = stringResult;
  return obj;
};