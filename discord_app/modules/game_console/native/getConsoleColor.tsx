// discord_app/modules/game_console/native/getConsoleColor.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";

const obj = { [XBOX]: ThemesDefault.unsafe_rawColors.PLATFORM_XBOX, [PLAYSTATION]: ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION_STAGING]: ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = ME.PlatformTypes);
const result = set.fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
};