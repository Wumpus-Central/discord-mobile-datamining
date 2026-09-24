// === Module 10471: Cozy ===

// Module 10471 (Cozy)
import nativeDefault from "native" /* 576 */;
import deepmerge from "deepmerge" /* 10469 */;

const obj = { layout: { margin: { marginVertical: 2 }, marginPanels: { marginVertical: 2 }, marginThread: { marginVertical: 2, marginLeft: 76 } }, container: { borderRadius: nativeDefault.radii.lg, padding: { paddingVertical: 8 }, paddingPanels: { paddingVertical: 8 }, paddingThread: { paddingVertical: 6, paddingLeft: 8 } }, category: { margin: { marginTop: 24 } }, voiceUsers: { height: 40, margin: { marginTop: -4, marginLeft: 80 } }, voiceOrStageSummaryRow: null, messagePreview: null, inviteRow: null, icon: null, unreadBadge: null, mentionBadge: null, joinVoiceButton: null, threadSpine: null, happeningNow: null, typing: null, separator: null };
const obj2 = { borderRadius: nativeDefault.radii.lg, padding: { paddingVertical: 8 }, paddingPanels: { paddingVertical: 8 }, paddingThread: { paddingVertical: 6, paddingLeft: 8 } };
obj.voiceOrStageSummaryRow = { size: 32, avatarSize: fn(1177).AvatarSizes.REFRESH_MEDIUM_32 };
const obj3 = { size: 32, avatarSize: fn(1177).AvatarSizes.REFRESH_MEDIUM_32 };
obj.messagePreview = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: fn(1177).IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const obj4 = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: fn(1177).IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.icon = { avatarSize: fn(1177).AvatarSizes.LARGE_48, guildIconSize: fn(5889).GuildIconSizes.LARGE, guildBadgeIconSize: fn(5889).GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { size: 24, lineHeight: 32 } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj6 = { text: { variant: "text-sm/bold" }, layout: { paddingVertical: 6, paddingRight: 12, paddingLeft: 12, height: 32 }, icon: null };
const obj5 = { avatarSize: fn(1177).AvatarSizes.LARGE_48, guildIconSize: fn(5889).GuildIconSizes.LARGE, guildBadgeIconSize: fn(5889).GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { size: 24, lineHeight: 32 } };
obj6.icon = { size: fn(1177).IconSizes.REFRESH_SMALL_16, gameSize: fn(7505).GameIconSizes.SMALL };
obj.joinVoiceButton = obj6;
const obj8 = { left: 48, startAndEndHeight: 16, transform: null, topOffset: -6 };
const items = [{ translateY: 0 }];
obj8.transform = items;
obj.threadSpine = obj8;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { top: 12, left: 12 }, positionThread: { top: 3, left: -17 }, typingIndicator: { position: { top: 25, left: 11 } } };
obj.separator = { margin: { marginVertical: 20 } };
const importDefaultResultResult = deepmerge(fn(10470).CHANNEL_LIST_STYLES_COMPACT, obj);
const obj10 = { layout: { marginThread: { marginLeft: 0 } }, container: { paddingThread: { paddingLeft: 20 } }, unreadBadge: { positionThread: { left: 4 } }, mentionBadge: { positionThread: { top: 34 } } };
const obj7 = { size: fn(1177).IconSizes.REFRESH_SMALL_16, gameSize: fn(7505).GameIconSizes.SMALL };
const obj9 = { position: { top: 12, left: 12 }, positionThread: { top: 3, left: -17 }, typingIndicator: { position: { top: 25, left: 11 } } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Cozy.tsx");

export const CHANNEL_LIST_STYLES_COZY = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_LAUNCHPAD = deepmerge(importDefaultResultResult, { layout: { marginThread: { marginLeft: 0 } }, container: { paddingThread: { paddingLeft: 20 } }, unreadBadge: { positionThread: { left: 4 } }, mentionBadge: { positionThread: { top: 34 } } });