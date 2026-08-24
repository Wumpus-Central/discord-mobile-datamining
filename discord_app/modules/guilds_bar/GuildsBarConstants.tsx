// discord_app/modules/guilds_bar/GuildsBarConstants.tsx
import set from "../../../_runtime/00002_set.js";
import int2hslRaw from "../../../discord_common/js/shared/utils/ColorUtils.tsx";
import unsafe_getRawColor from "../../../discord_common/js/packages/tokens/shims.native.tsx";

const hex2intResult = int2hslRaw.hex2int(unsafe_getRawColor.unsafe_getResolvedRawColor("BRAND_500", { saturation: 1 }));
const result = set.fileFinishedImporting("modules/guilds_bar/GuildsBarConstants.tsx");

export const DEFAULT_FOLDER_COLOR = hex2intResult;
export const GuildPeekCardTypes = { WHO: 0, [0]: "WHO", WHAT: 1, [1]: "WHAT" };
export const CardCategory = { HANGOUT: "hangout", EMBEDDED_ACTIVITY: "embedded-activity", EVENT: "event", GAMING: "gaming" };