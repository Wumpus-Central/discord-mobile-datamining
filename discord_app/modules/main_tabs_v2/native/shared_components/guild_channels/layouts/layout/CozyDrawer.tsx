// === Module 10463: CozyDrawer ===

// Module 10463 (CozyDrawer)
import nativeDefault from "native" /* 576 */;
import "deepmerge";
import deepmerge from "deepmerge" /* 10464 */;

const obj = { container: { borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 6, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } }, channelName: { height: 20, text: { variant: "text-md/semibold" } }, messagePreview: null, inviteRow: null, icon: null, unreadBadge: null, mentionBadge: null, joinVoiceButton: null, threadSpine: null, happeningNow: null, typing: null, separator: null };
const obj2 = { borderRadius: nativeDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 6, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } };
obj.messagePreview = { text: { variant: "text-xs/medium" }, messageTypeIconSize: fn(1177).IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 0 } };
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const obj3 = { text: { variant: "text-xs/medium" }, messageTypeIconSize: fn(1177).IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 0 } };
obj.icon = { avatarSize: fn(1177).AvatarSizes.NORMAL, guildIconSize: fn(5887).GuildIconSizes.NORMAL, guildBadgeIconSize: fn(5887).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { size: 24, lineHeight: 32 } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj5 = { text: { variant: "text-sm/bold" }, layout: { paddingVertical: 6, paddingRight: 12, paddingLeft: 12, height: 32 }, icon: null };
const obj4 = { avatarSize: fn(1177).AvatarSizes.NORMAL, guildIconSize: fn(5887).GuildIconSizes.NORMAL, guildBadgeIconSize: fn(5887).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { size: 24, lineHeight: 32 } };
obj5.icon = { size: fn(1177).IconSizes.REFRESH_SMALL_16, gameSize: fn(7503).GameIconSizes.SMALL };
obj.joinVoiceButton = obj5;
const obj7 = { left: 48, startAndEndHeight: 16, transform: null, topOffset: -6 };
const items = [{ translateY: 0 }];
obj7.transform = items;
obj.threadSpine = obj7;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { top: 12, left: 12 }, positionThread: { top: 3, left: -17 }, typingIndicator: { position: { top: 25, left: 11 } } };
obj.separator = { margin: { marginVertical: 20 } };
const obj6 = { size: fn(1177).IconSizes.REFRESH_SMALL_16, gameSize: fn(7503).GameIconSizes.SMALL };
const obj8 = { position: { top: 12, left: 12 }, positionThread: { top: 3, left: -17 }, typingIndicator: { position: { top: 25, left: 11 } } };
const obj9 = { container: { paddingPanels: { paddingVertical: 8 } }, icon: null };
const importDefaultResultResult = deepmerge(fn(10465).CHANNEL_LIST_STYLES_COMPACT, obj);
obj9.icon = { avatarSize: fn(1177).AvatarSizes.REFRESH_MEDIUM_32 };
const obj10 = { avatarSize: fn(1177).AvatarSizes.REFRESH_MEDIUM_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/CozyDrawer.tsx");

export const CHANNEL_LIST_STYLES_COZY_DRAWER = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL = deepmerge(fn(10465).CHANNEL_LIST_STYLES_COMPACT, obj9);