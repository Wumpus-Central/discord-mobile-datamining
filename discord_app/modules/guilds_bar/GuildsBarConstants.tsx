// === Module 16290: guilds_bar/GuildsBarConstants ===

// Module 16290 (guilds_bar/GuildsBarConstants)
import ColorUtils from "utils/ColorUtils" /* 1091 */;
import shims from "shims" /* 575 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guilds_bar/GuildsBarConstants.tsx");

export const DEFAULT_FOLDER_COLOR = ColorUtils.hex2int(shims.unsafe_getResolvedRawColor("BRAND_500", { saturation: 1 }));
export const GuildPeekCardTypes = { WHO: 0, [0]: "WHO", WHAT: 1, [1]: "WHAT" };
export const CardCategory = { HANGOUT: "hangout", EMBEDDED_ACTIVITY: "embedded-activity", EVENT: "event", GAMING: "gaming" };