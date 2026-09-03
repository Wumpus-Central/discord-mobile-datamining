// === Module 16128: DEFAULT_FOLDER_COLOR ===

// Module 16128 (DEFAULT_FOLDER_COLOR)
import set from "set" /* 2 */;
import int2hslRaw from "int2hslRaw" /* 685 */;
import unsafe_getRawColor from "unsafe_getRawColor" /* 708 */;

const hex2intResult = int2hslRaw.hex2int(unsafe_getRawColor.unsafe_getResolvedRawColor("BRAND_500", { saturation: 1 }));
const result = set.fileFinishedImporting("modules/guilds_bar/GuildsBarConstants.tsx");

export const DEFAULT_FOLDER_COLOR = hex2intResult;
export const GuildPeekCardTypes = { WHO: 0, [0]: "WHO", WHAT: 1, [1]: "WHAT" };
export const CardCategory = { HANGOUT: "hangout", EMBEDDED_ACTIVITY: "embedded-activity", EVENT: "event", GAMING: "gaming" };