// === Module 15501: supportsWindowsLoopbackCapture ===

// Module 15501 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import DiscordNativeDefault from "DiscordNative" /* 4854 */;
import _modDef15502 from "module_15502" /* 15502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_engine/supportsWindowsLoopbackCapture.tsx");

export default function supportsWindowsLoopbackCapture() {
  let isWindowsResult = PlatformUtils.isWindows();
  if (isWindowsResult) {
    const tmp4 = DiscordNativeDefault;
    let release;
    if (tmp4 != null) {
      release = tmp4.os.release;
    }
    isWindowsResult = _modDef15502.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};