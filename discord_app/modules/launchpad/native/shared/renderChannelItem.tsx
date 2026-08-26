// === Module 16419: LaunchpadChannelIcon ===

// Module 16419 (LaunchpadChannelIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import computeChannelName from "computeChannelName" /* 4638 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 5951 */;
import getRelativeTimestamp from "getRelativeTimestamp" /* 7313 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9248 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16406 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16408 */;
import ChannelContentDefault from "ChannelContent" /* 16411 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "markAllUserIdListsStale" /* 4098 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { UnreadSetting } from "ReadStateTypes" /* 4654 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = channel(589);
  const items = [closure_4];
  obj = { children: null };
  obj = { style: tmp.guildBadgeIcon, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getGuild(channel.guild_id));
  const tmp2 = getLayoutStyleDefault();
  obj[1] = callback(GuildIconSizesDefault, { guild: stateFromStores, size: getLayoutStyleDefault().icon.guildBadgeIconSize });
  const items1 = [callback(View, obj), callback(channel(11846).ChannelIcon, { channel, size: "sm", wrapperSize: 32 })];
  obj[0] = items1;
  return callback2(closure_9, obj);
}
noopAll;
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles(() => {
  let obj = { guildBadgeIcon: null };
  obj = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: 6 };
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

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
      let obj = getRelativeTimestamp;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp7 = getLayoutStyleDefault();
  const children = [unreadBadge, , , ];
  obj = { style: null, children: null };
  obj = { position: "relative", borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: tmp7.icon.wrapper.size, height: tmp7.icon.wrapper.size };
  const merged = Object.assign(tmp7.icon.margin);
  obj[0] = obj;
  if (channel.isGroupDM()) {
    obj1 = { channel: null, size: null };
    obj1[0] = channel;
    obj1[1] = tmp7.icon.avatarSize;
    let tmp11Result = tmp11(tmp5(9880), obj1);
  } else {
    const obj2 = { channel: null };
    obj2[0] = channel;
    tmp11Result = tmp11(LaunchpadChannelIcon, obj2);
  }
  obj[1] = tmp11Result;
  children[1] = closure_8(View, obj);
  const tmp10 = closure_9;
  const tmp8 = renderChannelWrapperDefault;
  const tmp9 = closure_10;
  if (channelName == null) {
    channelName = computeChannelName.computeChannelName(channel, closure_6, closure_5);
    const obj6 = computeChannelName;
  }
  children[2] = ChannelContentDefault({ name: channelName, subtitle, unread: flag, resolvedUnreadSetting: ONLY_MENTIONS, muted: flag3, lastMessageTimestampString: relativeTimestamp, channel, channelCategoryName, locked, connected, live: flag2, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess: flag4 });
  tmp11Result = null;
  if (null != end) {
    const obj3 = { style: null, children: null };
    obj3[0] = { paddingLeft: 8 };
    obj3[1] = end;
    tmp11Result = tmp11(tmp12, obj3);
  }
  children[3] = tmp11Result;
  return tmp8(tmp9(tmp10, { children }), { fontScale });
};
export const getChannelAccessibilityProps = function getChannelAccessibilityProps(arg0) {
  ({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount } = arg0);
  return { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabelDefault({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }) };
};