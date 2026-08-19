// === Module 16196: getLayoutStyle ===

// Module 16196 (getLayoutStyle)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import GameIcon from "GameIcon" /* 7149 */;
import GuildIconSizes from "GuildIconSizes" /* 7188 */;

let obj = { borderRadius: ThemesDefault.radii.md, padding: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 } };
obj[1] = obj;
obj[2] = { height: 36, margin: { marginLeft: 60 } };
obj = { size: 24, avatarSize: Button.AvatarSizes.XSMALL };
obj[3] = obj;
obj[4] = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
obj[5] = { messageTypeIconSize: Button.IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj[6] = { text: { variant: "text-xs/medium" } };
obj[7] = { text: { variant: "text-sm/semibold" } };
obj[8] = { avatarSize: Button.AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: GuildIconSizes.GuildIconSizes.SMALL_32, guildBadgeIconSize: GuildIconSizes.GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
obj[9] = { size: 8, position: { left: -12 } };
obj[10] = { position: { top: 28 } };
obj[11] = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
obj[12] = { position: { top: 3, left: 3 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: Button.AvatarSizes.REFRESH_MEDIUM_32 };
obj[13] = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: { paddingVertical: 4, paddingRight: 8, paddingLeft: 8, height: 24 }, icon: null };
obj4[2] = { size: Button.IconSizes.EXTRA_SMALL, gameSize: GameIcon.GameIconSizes.SIZE_24 };
obj[14] = obj4;
const items = [{ translateY: 10 }];
obj[15] = { left: 38, startAndEndHeight: 15, transform: items, topOffset: -2 };
obj[16] = { margin: { marginTop: 16, marginBottom: 16 } };
obj[17] = { margin: { marginVertical: 12 } };
obj[18] = { margin: { marginHorizontal: 12 } };
const result = obj132.fileFinishedImporting("modules/launchpad/native/shared/getLayoutStyles.tsx");

export default function getLayoutStyle() {
  return obj;
};