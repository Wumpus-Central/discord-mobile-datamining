// discord_app/modules/launchpad/native/shared/renderChannelItem.tsx
import "set";
import { View } from "ChannelContent";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { getChannelA11yLabel } from "../../../channel/getChannelA11yLabel.tsx";
import { computeChannelName } from "../../../channel/useChannelName.tsx";
import { GuildIconSizes } from "../../../guild/native/GuildIcon.tsx";
import { getRelativeTimestamp } from "../../../notification_center/NotificationCenterUtils.tsx";
import { getLayoutStyle } from "getLayoutStyles.tsx";
import { ChannelContent } from "renderChannelContent.tsx";
import { renderChannelWrapper } from "renderChannelWrapper.tsx";

let c10;
let c9;
let metroImportAll;
const require = arg1;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = channel(589);
  const items = [createGuildRecordFromRust];
  obj = { children: null };
  obj = { style: tmp.guildBadgeIcon, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(channel.guild_id));
  const tmp2 = getLayoutStyle();
  obj[1] = callback(GuildIconSizes, { guild: stateFromStores, size: getLayoutStyle().icon.guildBadgeIconSize });
  const items1 = [callback(View, obj), callback(channel(11488).ChannelIcon, { channel, size: "sm", wrapperSize: 32 })];
  obj[0] = items1;
  return callback2(closure_9, obj);
}
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles(() => {
  let obj = { guildBadgeIcon: null };
  obj = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: Themes.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: 6 };
  obj[0] = obj;
  return obj;
});
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

export default function renderChannelItem(unread) {
  let channel;
  let channelCategoryName;
  let channelName;
  let connected;
  let end;
  let fontScale;
  let isSubscriptionGated;
  let latestMessageTimestamp;
  let locked;
  let mentionBadge;
  let mentionCount;
  let subtitle;
  let unreadBadge;
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
      let obj = getRelativeTimestamp /* getRelativeTimestamp */;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp7 = getLayoutStyle();
  const children = [unreadBadge, , , ];
  obj = { style: null, children: null };
  obj = { position: "relative", borderRadius: null, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: null, height: null };
  obj[1] = Themes.radii.round;
  obj[6] = tmp7.icon.wrapper.size;
  obj[7] = tmp7.icon.wrapper.size;
  const merged = Object.assign(tmp7.icon.margin);
  obj[0] = obj;
  if (channel.isGroupDM()) {
    const obj1 = { channel: null, size: null };
    obj1[0] = channel;
    obj1[1] = tmp7.icon.avatarSize;
    let tmp11Result = tmp11(tmp5(9582), obj1);
  } else {
    const obj2 = { channel: null };
    obj2[0] = channel;
    tmp11Result = tmp11(LaunchpadChannelIcon, obj2);
  }
  obj[1] = tmp11Result;
  children[1] = closure_8(View, obj);
  const tmp10 = closure_9;
  const tmp8 = renderChannelWrapper;
  const tmp9 = closure_10;
  if (channelName == null) {
    channelName = computeChannelName /* computeChannelName */.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
    const obj6 = computeChannelName /* computeChannelName */;
  }
  children[2] = ChannelContent({ name: channelName, subtitle, unread: flag, resolvedUnreadSetting: ONLY_MENTIONS, muted: flag3, lastMessageTimestampString: relativeTimestamp, channel, channelCategoryName, locked, connected, live: flag2, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess: flag4 });
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
  let channel;
  let embeddedActivitiesCount;
  let mentionCount;
  let unread;
  let voiceStates;
  ({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount } = arg0);
  return { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabel({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }) };
};