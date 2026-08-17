// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Compact.tsx
import ThemesDefault from "Themes" /* 712 */;
import mergeDefault from "merge" /* 10058 */;

let obj = { layout: { margin: { marginLeft: 4, marginRight: 4, marginVertical: 0 }, marginPanels: { marginLeft: 8, marginRight: 8, marginVertical: 0 }, marginThread: { marginLeft: 56, marginRight: 4, marginVertical: 0 } }, container: null, voiceUsers: null, voiceOrStageSummaryRow: null, channelName: null, messagePreview: null, timestamp: null, inviteRow: null, icon: null, unreadBadge: null, mentionBadge: null, category: null, typing: null, activeThreadCount: null, joinVoiceButton: null, threadSpine: null, happeningNow: null, separator: null, searchButton: null };
obj = { borderRadius: ThemesDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } };
obj[1] = obj;
obj[2] = { height: 36, margin: { marginLeft: 60 } };
obj = { size: 24, avatarSize: require("Button").AvatarSizes.XSMALL };
obj[3] = obj;
obj[4] = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
obj[5] = { messageTypeIconSize: require("Button").IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj[6] = { text: { variant: "text-xs/medium" } };
obj[7] = { text: { variant: "text-sm/semibold" } };
const obj1 = { messageTypeIconSize: require("Button").IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj[8] = { avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require("GuildIconSizes").GuildIconSizes.SMALL_32, guildBadgeIconSize: require("GuildIconSizes").GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
obj[9] = { size: 8, position: { left: 4 }, positionThread: { left: -48 } };
obj[10] = { position: { top: 28 }, positionThread: { top: 20 } };
obj[11] = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj2 = { avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require("GuildIconSizes").GuildIconSizes.SMALL_32, guildBadgeIconSize: require("GuildIconSizes").GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
obj[12] = { position: { top: 3, left: 3 }, positionThread: { top: -5, left: -16 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
obj[13] = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: { paddingVertical: 4, paddingRight: 8, paddingLeft: 8, height: 24 }, icon: null };
const obj3 = { position: { top: 3, left: 3 }, positionThread: { top: -5, left: -16 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
obj4[2] = { size: require("Button").IconSizes.EXTRA_SMALL, gameSize: require("GameIcon").GameIconSizes.SIZE_24 };
obj[14] = obj4;
const items = [{ translateY: 10 }];
obj[15] = { left: 38, startAndEndHeight: 15, transform: items, topOffset: -2 };
obj[16] = { margin: { marginTop: 16, marginBottom: 16 } };
obj[17] = { margin: { marginVertical: 12 } };
obj[18] = { margin: { marginHorizontal: 16 }, marginPanels: { marginHorizontal: 12 } };
const obj5 = { size: require("Button").IconSizes.EXTRA_SMALL, gameSize: require("GameIcon").GameIconSizes.SIZE_24 };
const tmp2 = mergeDefault(obj, { layout: { marginThread: { marginLeft: 4 } }, container: { paddingThread: { paddingLeft: 8 } }, unreadBadge: { positionThread: { left: 4 } } });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Compact.tsx");

export const CHANNEL_LIST_STYLES_COMPACT = obj;
export const getCompactStyles = function getCompactStyles(arg0) {
  if (arg0) {
    obj = { messagePreview: null, timestamp: null };
    obj = { text: null };
    obj[0] = { variant: "text-sm/medium", color: "text-muted" };
    obj[0] = obj;
    obj = { text: null };
    obj[0] = { variant: "text-xs/semibold" };
    obj[1] = obj;
    let tmp = mergeDefault(obj, obj);
  } else {
    tmp = obj;
  }
  return tmp;
};
export const CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD = tmp2;