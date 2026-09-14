// === Module 10252: Compact ===

// Module 10252 (Compact)
import nativeDefault from "native" /* 576 */;
import deepmergeDefault from "deepmerge" /* 10251 */;

const CHANNEL_LIST_STYLES_COMPACT = { layout: { margin: { marginLeft: 4, marginRight: 4, marginVertical: 0 }, marginPanels: { marginLeft: 8, marginRight: 8, marginVertical: 0 }, marginThread: { marginLeft: 56, marginRight: 4, marginVertical: 0 } }, container: { borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } }, voiceUsers: { height: 36, margin: { marginLeft: 60 } }, voiceOrStageSummaryRow: null, channelName: null, messagePreview: null, timestamp: null, inviteRow: null, icon: null, unreadBadge: null, mentionBadge: null, category: null, typing: null, activeThreadCount: null, joinVoiceButton: null, threadSpine: null, happeningNow: null, separator: null, searchButton: null };
const obj2 = { borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } };
CHANNEL_LIST_STYLES_COMPACT.voiceOrStageSummaryRow = { size: 24, avatarSize: fn(1176).AvatarSizes.XSMALL };
CHANNEL_LIST_STYLES_COMPACT.channelName = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
const obj3 = { size: 24, avatarSize: fn(1176).AvatarSizes.XSMALL };
CHANNEL_LIST_STYLES_COMPACT.messagePreview = { messageTypeIconSize: fn(1176).IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
CHANNEL_LIST_STYLES_COMPACT.timestamp = { text: { variant: "text-xs/medium" } };
CHANNEL_LIST_STYLES_COMPACT.inviteRow = { text: { variant: "text-sm/semibold" } };
const obj4 = { messageTypeIconSize: fn(1176).IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
CHANNEL_LIST_STYLES_COMPACT.icon = { avatarSize: fn(1176).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: fn(5665).GuildIconSizes.SMALL_32, guildBadgeIconSize: fn(5665).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
CHANNEL_LIST_STYLES_COMPACT.unreadBadge = { size: 8, position: { left: 4 }, positionThread: { left: -48 } };
CHANNEL_LIST_STYLES_COMPACT.mentionBadge = { position: { top: 28 }, positionThread: { top: 20 } };
CHANNEL_LIST_STYLES_COMPACT.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj5 = { avatarSize: fn(1176).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: fn(5665).GuildIconSizes.SMALL_32, guildBadgeIconSize: fn(5665).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
CHANNEL_LIST_STYLES_COMPACT.typing = { position: { top: 3, left: 3 }, positionThread: { top: -5, left: -16 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: fn(1176).AvatarSizes.REFRESH_MEDIUM_32 };
CHANNEL_LIST_STYLES_COMPACT.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj7 = { text: { variant: "text-xs/bold" }, layout: { paddingVertical: 4, paddingRight: 8, paddingLeft: 8, height: 24 }, icon: null };
const obj6 = { position: { top: 3, left: 3 }, positionThread: { top: -5, left: -16 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: fn(1176).AvatarSizes.REFRESH_MEDIUM_32 };
obj7.icon = { size: fn(1176).IconSizes.EXTRA_SMALL, gameSize: fn(7275).GameIconSizes.SIZE_24 };
CHANNEL_LIST_STYLES_COMPACT.joinVoiceButton = obj7;
const obj9 = { left: 38, startAndEndHeight: 15, transform: null, topOffset: -2 };
const items = [{ translateY: 10 }];
obj9.transform = items;
CHANNEL_LIST_STYLES_COMPACT.threadSpine = obj9;
CHANNEL_LIST_STYLES_COMPACT.happeningNow = { margin: { marginTop: 16, marginBottom: 16 } };
CHANNEL_LIST_STYLES_COMPACT.separator = { margin: { marginVertical: 12 } };
CHANNEL_LIST_STYLES_COMPACT.searchButton = { margin: { marginHorizontal: 16 }, marginPanels: { marginHorizontal: 12 } };
const obj10 = { layout: { marginThread: { marginLeft: 4 } }, container: { paddingThread: { paddingLeft: 8 } }, unreadBadge: { positionThread: { left: 4 } } };
const obj8 = { size: fn(1176).IconSizes.EXTRA_SMALL, gameSize: fn(7275).GameIconSizes.SIZE_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Compact.tsx");

export { CHANNEL_LIST_STYLES_COMPACT };
export const getCompactStyles = function getCompactStyles() {
  const obj = { messagePreview: { text: { variant: "text-sm/medium", color: "text-muted" } }, timestamp: { text: { variant: "text-xs/semibold" } } };
  return deepmergeDefault(obj, obj);
};
export const CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD = deepmergeDefault(CHANNEL_LIST_STYLES_COMPACT, { layout: { marginThread: { marginLeft: 4 } }, container: { paddingThread: { paddingLeft: 8 } }, unreadBadge: { positionThread: { left: 4 } } });