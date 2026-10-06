// === Module 16853: getLayoutStyles ===

// Module 16853 (getLayoutStyles)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import GameIcon from "GameIcon" /* 6674 */;
import size from "module_2" /* 2 */;

let items;
let obj7;
let obj9;
const obj = { layout: { margin: { marginLeft: 8, marginRight: 8, marginVertical: 0 } }, container: { borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 } }, voiceUsers: { height: 36, margin: { marginLeft: 60 } }, voiceOrStageSummaryRow: { size: 24, avatarSize: native.AvatarSizes.XSMALL }, channelName: { height: 20, text: { variant: "redesign/channel-title/semibold" } }, messagePreview: { messageTypeIconSize: native.IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } }, timestamp: { text: { variant: "text-xs/medium" } }, inviteRow: { text: { variant: "text-sm/semibold" } }, icon: { avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: GuildIcon.GuildIconSizes.SMALL_32, guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } }, unreadBadge: { size: 8, position: { left: -12 } }, mentionBadge: { position: { top: 28 } }, category: { height: 30, margin: { marginTop: 16 }, text: { size: 14 } }, typing: { position: { top: 3, left: 3 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32 }, activeThreadCount: { text: { variant: "text-xs/bold" } }, joinVoiceButton: obj7, threadSpine: obj9, happeningNow: { margin: { marginTop: 16, marginBottom: 16 } }, separator: { margin: { marginVertical: 12 } }, searchButton: { margin: { marginHorizontal: 12 } } };
({ borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 } });
({ size: 24, avatarSize: native.AvatarSizes.XSMALL });
({ messageTypeIconSize: native.IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } });
({ avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: GuildIcon.GuildIconSizes.SMALL_32, guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } });
obj7 = { text: { variant: "text-xs/bold" }, layout: { paddingVertical: 4, paddingRight: 8, paddingLeft: 8, height: 24 }, icon: { size: native.IconSizes.EXTRA_SMALL, gameSize: GameIcon.GameIconSizes.SIZE_24 } };
({ position: { top: 3, left: 3 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32 });
obj9 = { left: 38, startAndEndHeight: 15, transform: items, topOffset: -2 };
items = [{ translateY: 10 }];
({ size: native.IconSizes.EXTRA_SMALL, gameSize: GameIcon.GameIconSizes.SIZE_24 });
const result = size.fileFinishedImporting("modules/launchpad/native/shared/getLayoutStyles.tsx");

export default function getLayoutStyle() {
  return obj;
};