// === Module 16220: DISCORD_VARIANTS ===

// Module 16220 (DISCORD_VARIANTS)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;

let obj = { production: null, ci: null, main: null, beta: null, dev: null };
obj = { scheme: "discord-prod", label: "Discord", color: ThemesDefault.unsafe_rawColors.BRAND_500 };
obj[0] = obj;
obj = { scheme: "discord-ci", label: "Discord (CI)", color: ThemesDefault.unsafe_rawColors.GREEN_360 };
obj[1] = obj;
obj[2] = { scheme: "discord-main", label: "Discord Main", color: ThemesDefault.unsafe_rawColors.BLUE_345 };
const obj1 = { scheme: "discord-main", label: "Discord Main", color: ThemesDefault.unsafe_rawColors.BLUE_345 };
obj[3] = { scheme: "discord-beta", label: "Discord Beta", color: ThemesDefault.unsafe_rawColors.ORANGE_345 };
const obj2 = { scheme: "discord-beta", label: "Discord Beta", color: ThemesDefault.unsafe_rawColors.ORANGE_345 };
obj[4] = { scheme: "discord-dev", label: "Discord Dev", color: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
const keys = Object.keys(obj);
const obj3 = { scheme: "discord-dev", label: "Discord Dev", color: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
const result = set.fileFinishedImporting("modules/links/native/DiscordVariantTypes.tsx");

export const DISCORD_VARIANTS = obj;
export const DISCORD_VARIANT_LIST = keys;