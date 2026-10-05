// === Module 11702: Cozy ===

// Module 11702 (Cozy)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import GameIcon from "GameIcon" /* 6667 */;
import Compact from "Compact" /* 11701 */;
import deepmerge from "deepmerge" /* 11700 */;
import size from "module_2" /* 2 */;

let items;
let obj2;
let obj6;
let obj8;
let obj9;
const obj = { layout: { margin: { marginVertical: 2 }, marginPanels: { marginVertical: 2 }, marginThread: { marginVertical: 2, marginLeft: 76 } }, container: obj2, category: { margin: { marginTop: 24 } }, voiceUsers: { height: 40, margin: { marginTop: -4, marginLeft: 80 } }, voiceOrStageSummaryRow: { size: 32, avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32 }, messagePreview: { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: native.IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } }, inviteRow: { text: { variant: "text-md/semibold" } }, icon: { avatarSize: native.AvatarSizes.LARGE_48, guildIconSize: GuildIcon.GuildIconSizes.LARGE, guildBadgeIconSize: GuildIcon.GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { size: 24, lineHeight: 32 } }, unreadBadge: { positionThread: { left: -68 } }, mentionBadge: { position: { top: 34 }, positionThread: { top: 27 } }, joinVoiceButton: obj6, threadSpine: obj8, happeningNow: { margin: { marginBottom: 20 } }, typing: obj9, separator: { margin: { marginVertical: 20 } } };
obj2 = { borderRadius: nativeDefault.radii.lg, padding: { paddingVertical: 8 }, paddingPanels: { paddingVertical: 8 }, paddingThread: { paddingVertical: 6, paddingLeft: 8 } };
const CHANNEL_LIST_STYLES_COMPACT = Compact.CHANNEL_LIST_STYLES_COMPACT;
({ size: 32, avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32 });
({ text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: native.IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } });
obj6 = { text: { variant: "text-sm/bold" }, layout: { paddingVertical: 6, paddingRight: 12, paddingLeft: 12, height: 32 }, icon: { size: native.IconSizes.REFRESH_SMALL_16, gameSize: GameIcon.GameIconSizes.SMALL } };
({ avatarSize: native.AvatarSizes.LARGE_48, guildIconSize: GuildIcon.GuildIconSizes.LARGE, guildBadgeIconSize: GuildIcon.GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { size: 24, lineHeight: 32 } });
obj8 = { left: 48, startAndEndHeight: 16, transform: items, topOffset: -6 };
items = [{ translateY: 0 }];
obj9 = { position: { top: 12, left: 12 }, positionThread: { top: 3, left: -17 }, typingIndicator: { position: { top: 25, left: 11 } } };
({ size: native.IconSizes.REFRESH_SMALL_16, gameSize: GameIcon.GameIconSizes.SMALL });
const importDefaultResultResult = deepmerge(CHANNEL_LIST_STYLES_COMPACT, obj);
const obj10 = { layout: { marginThread: { marginLeft: 0 } }, container: { paddingThread: { paddingLeft: 20 } }, unreadBadge: { positionThread: { left: 4 } }, mentionBadge: { positionThread: { top: 34 } } };
const tmp4 = deepmerge(importDefaultResultResult, obj10);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Cozy.tsx");

export const CHANNEL_LIST_STYLES_COZY = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_LAUNCHPAD = tmp4;