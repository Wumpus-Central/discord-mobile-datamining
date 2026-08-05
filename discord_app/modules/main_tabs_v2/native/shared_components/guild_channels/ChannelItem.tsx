// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx
import "computeChannelName";
import { View } from "FacepileGroupDMAvatar";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { getChannelA11yLabel } from "../../../../channel/getChannelA11yLabel.tsx";
import { FacepileGroupDMAvatar } from "../../../../group_dm/native/GroupDMAvatar.tsx";
import { GuildIconSizes } from "../../../../guild/native/GuildIcon.tsx";
import { getRelativeTimestamp } from "../../../../notification_center/NotificationCenterUtils.tsx";
import { renderChannelWrapper } from "ChannelWrapper.tsx";
import { getLayoutStyles } from "layouts/ChannelListLayout.tsx";

let c10;
let c9;
let metroImportAll;
const require = arg1;
function LaunchpadChannelIcon(channel) {
  channel = channel.channel;
  const layout = channel.layout;
  let obj = channel(9711);
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = channel(589);
  const items = [createGuildRecordFromRust];
  obj = { style: callback2(layout).guildBadgeIcon, children: null };
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_4.getGuild(channel.guild_id));
  obj = { guild: stateFromStores, size: layoutStyles.icon.guildBadgeIconSize };
  obj[1] = callback(GuildIconSizes, obj);
  const items1 = [callback(View, obj), ];
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
  obj6 = channel(9711);
  let num = 32;
  if (tmp2Result.isLayoutCozy(layout)) {
    num = 48;
  }
  const obj2 = { children: null };
  obj1[2] = num;
  items1[1] = tmp8(channel(11488).ChannelIcon, obj1);
  obj2[0] = items1;
  return tmp6(tmp7, obj2);
}
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((layout) => {
  const guildBadgeIcon = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: Themes.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: null };
  let num = 6;
  if (obj2.isLayoutCozy(layout)) {
    num = 9;
  }
  guildBadgeIcon[6] = num;
  return { guildBadgeIcon };
});
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx");

export const getChannelAccessibilityProps = function getChannelAccessibilityProps(channel) {
  let embeddedActivitiesCount;
  let mentionCount;
  let unread;
  let voiceStates;
  channel = channel.channel;
  let obj = { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabel({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }) };
  ({ unread, mentionCount, voiceStates, embeddedActivitiesCount } = channel);
  if (channel.isGuildVoice()) {
    obj = { accessibilityHint: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["9C444m"]);
    const tmp2 = obj;
  }
  const merged = Object.assign(tmp2);
  return obj;
};
export const renderChannelItem = function renderChannelItem(unread) {
  let channel;
  let channelName;
  let connected;
  let end;
  let fontScale;
  let isSubscriptionGated;
  let latestMessageTimestamp;
  let launchpad;
  let layout;
  let locked;
  let mentionBadge;
  let mentionCount;
  let subtitle;
  let unreadBadge;
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
  ({ latestMessageTimestamp, layout, end, channelName, isSubscriptionGated, connected, mentionCount, launchpad, fontScale } = unread);
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
      let obj = getRelativeTimestamp /* getRelativeTimestamp */;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  let obj1 = getLayoutStyles /* getLayoutStyles */;
  const layoutStyles = obj1.getLayoutStyles(layout);
  let obj2 = renderChannelWrapper /* renderChannelWrapper */;
  const children = [unreadBadge, , , ];
  obj = { style: null, children: null };
  obj = { position: "relative", borderRadius: Themes.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0 };
  const merged = Object.assign(getLayoutStyles /* getLayoutStyles */.makeSizeStyle(layoutStyles.icon.wrapper.size));
  const merged1 = Object.assign(layoutStyles.icon.margin);
  obj[0] = obj;
  if (channel.isGroupDM()) {
    obj1 = { channel: null, size: null };
    obj1[0] = channel;
    obj1[1] = layoutStyles.icon.avatarSize;
    let tmp10Result = tmp10(FacepileGroupDMAvatar, obj1);
  } else {
    obj2 = { channel: null, layout: null };
    obj2[0] = channel;
    obj2[1] = layout;
    tmp10Result = tmp10(LaunchpadChannelIcon, obj2);
  }
  obj[1] = tmp10Result;
  children[1] = closure_8(View, obj);
  let tmp5Result = tmp5(15617);
  const obj3 = { layout, name: null, subtitle: null, unread: null, resolvedUnreadSetting: null, muted: null, lastMessageTimestampString: null, channel: null, locked: null, connected: null, live: null, mentionCount: null, mentionBadge: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
  if (channelName == null) {
    tmp5Result = tmp5(4475);
    channelName = tmp5Result.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
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
  return obj2.renderChannelWrapper(closure_10(closure_9, { children }), { channel, layout, launchpad, fontScale, panelVariant });
};