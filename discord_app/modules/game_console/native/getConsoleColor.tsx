// discord_app/modules/game_console/native/getConsoleColor.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  [XBOX]: nativeDefault.unsafe_rawColors.PLATFORM_XBOX,
  [PLAYSTATION]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION,
  [PLAYSTATION_STAGING]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION,
};
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
}
