// discord_app/modules/guilds_bar/GuildsBarConstants.tsx
import ColorUtils from "../../../discord_common/js/shared/utils/ColorUtils.tsx";
import shims from "../../../discord_common/js/packages/tokens/shims.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guilds_bar/GuildsBarConstants.tsx");

export const DEFAULT_FOLDER_COLOR = ColorUtils.hex2int(
  shims.unsafe_getResolvedRawColor("BRAND_500", { saturation: 1 }),
);
export const GuildPeekCardTypes = { WHO: 0, [0]: "WHO", WHAT: 1, [1]: "WHAT" };
export const CardCategory = {
  HANGOUT: "hangout",
  EMBEDDED_ACTIVITY: "embedded-activity",
  EVENT: "event",
  GAMING: "gaming",
};
