// === Module 16990: renderChannelItem ===

// Module 16990 (renderChannelItem)
import nativeDefault from "native" /* 576 */;
import useChannelName from "useChannelName" /* 4713 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7641 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9770 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10910 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16977 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16979 */;
import renderChannelContentDefault from "renderChannelContent" /* 16982 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const tmp = closure_11();
  channel(504);
  const items = [GuildStore];
  let obj = { children: null };
  obj = { style: tmp.guildBadgeIcon, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const tmp2 = getLayoutStylesDefault();
  obj.children = closure_8(GuildIconDefault, { guild: stateFromStores, size: getLayoutStylesDefault().icon.guildBadgeIconSize });
  const items1 = [closure_8(View, obj), closure_8(channel(12191).ChannelIcon, { channel, size: "sm", wrapperSize: 32 })];
  obj.children = items1;
  return closure_10(closure_9, obj);
}
const View = fn(17).View;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
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
      let obj = NotificationCenterUtils;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp7 = getLayoutStylesDefault();
  const children = [unreadBadge, , , ];
  obj = { style: null, children: null };
  const size = { position: "relative", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: tmp7.icon.wrapper.size, height: tmp7.icon.wrapper.size };
  const merged = Object.assign(tmp7.icon.margin);
  obj.style = size;
  if (channel.isGroupDM()) {
    obj = { channel, size: tmp7.icon.avatarSize };
    let tmp11Result = React6(GroupDMAvatarDefault, obj);
  } else {
    const obj1 = { channel };
    tmp11Result = React6(LaunchpadChannelIcon, obj1);
  }
  obj.children = tmp11Result;
  children[1] = React6(View, obj);
  const tmp8 = renderChannelWrapperDefault;
  if (channelName == null) {
    channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
  }
  children[2] = renderChannelContentDefault({ name: channelName, subtitle, unread: flag, resolvedUnreadSetting: ONLY_MENTIONS, muted: flag3, lastMessageTimestampString: relativeTimestamp, channel, channelCategoryName, locked, connected, live: flag2, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess: flag4 });
  tmp11Result = null;
  if (null != end) {
    const obj2 = { style: { paddingLeft: 8 }, children: end };
    tmp11Result = React6(View, obj2);
  }
  children[3] = tmp11Result;
  return tmp8(closure_1_10(React7, { children }), { fontScale });
};
export const getChannelAccessibilityProps = function getChannelAccessibilityProps(arg0) {
  ({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount } = arg0);
  return { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabelDefault({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }) };
};