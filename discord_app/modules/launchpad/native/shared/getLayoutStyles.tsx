// === Module 16475: getLayoutStyles ===

// Module 16475 (getLayoutStyles)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import GameIcon from "GameIcon" /* 6593 */;
import size from "module_2" /* 2 */;

const obj = { layout: { margin: { marginLeft: 8, marginRight: 8, marginVertical: 0 } }, container: { borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 } }, voiceUsers: { height: 36, margin: { marginLeft: 60 } }, voiceOrStageSummaryRow: null, channelName: null, messagePreview: null, timestamp: null, inviteRow: null, icon: null, unreadBadge: null, mentionBadge: null, category: null, typing: null, activeThreadCount: null, joinVoiceButton: null, threadSpine: null, happeningNow: null, separator: null, searchButton: null };
const obj2 = { borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 } };
obj.voiceOrStageSummaryRow = { size: 24, avatarSize: native.AvatarSizes.XSMALL };
obj.channelName = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
const obj3 = { size: 24, avatarSize: native.AvatarSizes.XSMALL };
obj.messagePreview = { messageTypeIconSize: native.IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.timestamp = { text: { variant: "text-xs/medium" } };
obj.inviteRow = { text: { variant: "text-sm/semibold" } };
const obj4 = { messageTypeIconSize: native.IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.icon = { avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: GuildIcon.GuildIconSizes.SMALL_32, guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
obj.unreadBadge = { size: 8, position: { left: -12 } };
obj.mentionBadge = { position: { top: 28 } };
obj.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj5 = { avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: GuildIcon.GuildIconSizes.SMALL_32, guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
obj.typing = { position: { top: 3, left: 3 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32 };
obj.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj7 = { text: { variant: "text-xs/bold" }, layout: { paddingVertical: 4, paddingRight: 8, paddingLeft: 8, height: 24 }, icon: null };
const obj6 = { position: { top: 3, left: 3 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32 };
obj7.icon = { size: native.IconSizes.EXTRA_SMALL, gameSize: GameIcon.GameIconSizes.SIZE_24 };
obj.joinVoiceButton = obj7;
const obj9 = { left: 38, startAndEndHeight: 15, transform: null, topOffset: -2 };
const items = [{ translateY: 10 }];
obj9.transform = items;
obj.threadSpine = obj9;
obj.happeningNow = { margin: { marginTop: 16, marginBottom: 16 } };
obj.separator = { margin: { marginVertical: 12 } };
obj.searchButton = { margin: { marginHorizontal: 12 } };
const result = size.fileFinishedImporting("modules/launchpad/native/shared/getLayoutStyles.tsx");

export default function getLayoutStyle() {
  return obj;
};