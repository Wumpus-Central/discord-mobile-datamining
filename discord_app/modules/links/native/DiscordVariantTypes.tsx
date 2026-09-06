// === Module 16382: DiscordVariantTypes ===

// Module 16382 (DiscordVariantTypes)
import nativeDefault from "native" /* 576 */;
import size from "module_2" /* 2 */;

let obj = { production: null, ci: null, main: null, beta: null, dev: null };
obj = { scheme: "discord-prod", label: "Discord", color: nativeDefault.unsafe_rawColors.BRAND_500 };
obj.production = obj;
obj = { scheme: "discord-ci", label: "Discord (CI)", color: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.ci = obj;
obj.main = { scheme: "discord-main", label: "Discord Main", color: nativeDefault.unsafe_rawColors.BLUE_345 };
const obj1 = { scheme: "discord-main", label: "Discord Main", color: nativeDefault.unsafe_rawColors.BLUE_345 };
obj.beta = { scheme: "discord-beta", label: "Discord Beta", color: nativeDefault.unsafe_rawColors.ORANGE_345 };
const obj2 = { scheme: "discord-beta", label: "Discord Beta", color: nativeDefault.unsafe_rawColors.ORANGE_345 };
obj.dev = { scheme: "discord-dev", label: "Discord Dev", color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
const keys = Object.keys(obj);
const result = size.fileFinishedImporting("modules/links/native/DiscordVariantTypes.tsx");

export const DISCORD_VARIANTS = obj;
export const DISCORD_VARIANT_LIST = keys;