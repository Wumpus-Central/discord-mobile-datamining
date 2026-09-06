// === Module 17176: getConsoleColor ===

// Module 17176 (getConsoleColor)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const obj = { [XBOX]: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, [PLAYSTATION]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION_STAGING]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
};