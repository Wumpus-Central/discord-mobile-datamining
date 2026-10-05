// discord_app/modules/links/native/DiscordVariantTypes.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  production: { scheme: "discord-prod", label: "Discord", color: nativeDefault.unsafe_rawColors.BRAND_500 },
  ci: { scheme: "discord-ci", label: "Discord (CI)", color: nativeDefault.unsafe_rawColors.GREEN_360 },
  main: { scheme: "discord-main", label: "Discord Main", color: nativeDefault.unsafe_rawColors.BLUE_345 },
  beta: { scheme: "discord-beta", label: "Discord Beta", color: nativeDefault.unsafe_rawColors.ORANGE_345 },
  dev: { scheme: "discord-dev", label: "Discord Dev", color: nativeDefault.unsafe_rawColors.PRIMARY_400 },
};
({ scheme: "discord-prod", label: "Discord", color: nativeDefault.unsafe_rawColors.BRAND_500 });
({ scheme: "discord-ci", label: "Discord (CI)", color: nativeDefault.unsafe_rawColors.GREEN_360 });
({ scheme: "discord-main", label: "Discord Main", color: nativeDefault.unsafe_rawColors.BLUE_345 });
({ scheme: "discord-beta", label: "Discord Beta", color: nativeDefault.unsafe_rawColors.ORANGE_345 });
({ scheme: "discord-dev", label: "Discord Dev", color: nativeDefault.unsafe_rawColors.PRIMARY_400 });
const keys = Object.keys(obj);
const result = size.fileFinishedImporting("modules/links/native/DiscordVariantTypes.tsx");

export const DISCORD_VARIANTS = obj;
export const DISCORD_VARIANT_LIST = keys;
