// === Module 10164: importDefaultResult1 ===

// Module 10164 (importDefaultResult1)
import ThemesDefault from "Themes" /* 712 */;
import importDefaultResult from "merge" /* 10165 */;

let obj = { container: null, channelName: null, messagePreview: null, inviteRow: null, icon: null, unreadBadge: null, mentionBadge: null, joinVoiceButton: null, threadSpine: null, happeningNow: null, typing: null, separator: null };
obj = { borderRadius: ThemesDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 6, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } };
obj[0] = obj;
obj[1] = { height: 20, text: { variant: "text-md/semibold" } };
obj = { text: { variant: "text-xs/medium" }, messageTypeIconSize: require("Button").IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 0 } };
obj[2] = obj;
obj[3] = { text: { variant: "text-md/semibold" } };
obj[4] = { avatarSize: require("Button").AvatarSizes.NORMAL, guildIconSize: require("GuildIconSizes").GuildIconSizes.NORMAL, guildBadgeIconSize: require("GuildIconSizes").GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { size: 24, lineHeight: 32 } };
obj[5] = { positionThread: { left: -68 } };
obj[6] = { position: { top: 34 }, positionThread: { top: 27 } };
const obj2 = { text: { variant: "text-sm/bold" }, layout: { paddingVertical: 6, paddingRight: 12, paddingLeft: 12, height: 32 }, icon: null };
const obj1 = { avatarSize: require("Button").AvatarSizes.NORMAL, guildIconSize: require("GuildIconSizes").GuildIconSizes.NORMAL, guildBadgeIconSize: require("GuildIconSizes").GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { size: 24, lineHeight: 32 } };
obj2[2] = { size: require("Button").IconSizes.REFRESH_SMALL_16, gameSize: require("GameIcon").GameIconSizes.SMALL };
obj[7] = obj2;
const items = [{ translateY: 0 }];
obj[8] = { left: 48, startAndEndHeight: 16, transform: items, topOffset: -6 };
obj[9] = { margin: { marginBottom: 20 } };
obj[10] = { position: { top: 12, left: 12 }, positionThread: { top: 3, left: -17 }, typingIndicator: { position: { top: 25, left: 11 } } };
obj[11] = { margin: { marginVertical: 20 } };
const obj3 = { size: require("Button").IconSizes.REFRESH_SMALL_16, gameSize: require("GameIcon").GameIconSizes.SMALL };
const importDefaultResultResult = importDefaultResult(require("CHANNEL_LIST_STYLES_COMPACT").CHANNEL_LIST_STYLES_COMPACT, obj);
const obj4 = { container: { paddingPanels: { paddingVertical: 8 } }, icon: null };
const importDefaultResult1 = importDefaultResult;
obj4[1] = { avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
const obj5 = { avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
const importDefaultResult1Result = importDefaultResult1(require("CHANNEL_LIST_STYLES_COMPACT").CHANNEL_LIST_STYLES_COMPACT, obj4);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/CozyDrawer.tsx");

export const CHANNEL_LIST_STYLES_COZY_DRAWER = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL = importDefaultResult1Result;