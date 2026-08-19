// === Module 15592: isGuildsBarGuildDataEqual ===

// Module 15592 (isGuildsBarGuildDataEqual)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx");

export default function isGuildsBarGuildDataEqual(icon, icon2) {
  return icon.icon === icon2.icon && icon.guildName === icon2.guildName;
};