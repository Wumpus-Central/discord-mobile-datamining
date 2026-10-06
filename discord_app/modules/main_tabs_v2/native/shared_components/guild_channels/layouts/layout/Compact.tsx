// === Module 11715: Compact ===

// Module 11715 (Compact)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import GameIcon from "GameIcon" /* 6674 */;
import deepmergeDefault from "deepmerge" /* 11714 */;
import size from "module_2" /* 2 */;

let items;
let obj7;
let obj9;
const CHANNEL_LIST_STYLES_COMPACT = { layout: { margin: { marginLeft: 4, marginRight: 4, marginVertical: 0 }, marginPanels: { marginLeft: 8, marginRight: 8, marginVertical: 0 }, marginThread: { marginLeft: 56, marginRight: 4, marginVertical: 0 } }, container: { borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } }, voiceUsers: { height: 36, margin: { marginLeft: 60 } }, voiceOrStageSummaryRow: { size: 24, avatarSize: native.AvatarSizes.XSMALL }, channelName: { height: 20, text: { variant: "redesign/channel-title/semibold" } }, messagePreview: { messageTypeIconSize: native.IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } }, timestamp: { text: { variant: "text-xs/medium" } }, inviteRow: { text: { variant: "text-sm/semibold" } }, icon: { avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: GuildIcon.GuildIconSizes.SMALL_32, guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } }, unreadBadge: { size: 8, position: { left: 4 }, positionThread: { left: -48 } }, mentionBadge: { position: { top: 28 }, positionThread: { top: 20 } }, category: { height: 30, margin: { marginTop: 16 }, text: { size: 14 } }, typing: { position: { top: 3, left: 3 }, positionThread: { top: -5, left: -16 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32 }, activeThreadCount: { text: { variant: "text-xs/bold" } }, joinVoiceButton: obj7, threadSpine: obj9, happeningNow: { margin: { marginTop: 16, marginBottom: 16 } }, separator: { margin: { marginVertical: 12 } }, searchButton: { margin: { marginHorizontal: 16 }, marginPanels: { marginHorizontal: 12 } } };
({ borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } });
({ size: 24, avatarSize: native.AvatarSizes.XSMALL });
({ messageTypeIconSize: native.IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } });
({ avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: GuildIcon.GuildIconSizes.SMALL_32, guildBadgeIconSize: GuildIcon.GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } });
obj7 = { text: { variant: "text-xs/bold" }, layout: { paddingVertical: 4, paddingRight: 8, paddingLeft: 8, height: 24 }, icon: { size: native.IconSizes.EXTRA_SMALL, gameSize: GameIcon.GameIconSizes.SIZE_24 } };
({ position: { top: 3, left: 3 }, positionThread: { top: -5, left: -16 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32 });
obj9 = { left: 38, startAndEndHeight: 15, transform: items, topOffset: -2 };
items = [{ translateY: 10 }];
const obj10 = { layout: { marginThread: { marginLeft: 4 } }, container: { paddingThread: { paddingLeft: 8 } }, unreadBadge: { positionThread: { left: 4 } } };
({ size: native.IconSizes.EXTRA_SMALL, gameSize: GameIcon.GameIconSizes.SIZE_24 });
const tmp2 = deepmergeDefault(CHANNEL_LIST_STYLES_COMPACT, obj10);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Compact.tsx");

export { CHANNEL_LIST_STYLES_COMPACT };
export const getCompactStyles = function getCompactStyles() {
  const obj = { messagePreview: { text: { variant: "text-sm/medium", color: "text-muted" } }, timestamp: { text: { variant: "text-xs/semibold" } } };
  return deepmergeDefault(obj, obj);
};
export const CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD = tmp2;