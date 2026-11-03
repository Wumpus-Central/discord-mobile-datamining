// === Module 16040: supportsWindowsLoopbackCapture ===

// Module 16040 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import DiscordNativeDefault from "DiscordNative" /* 4952 */;
import _modDef16041 from "module_16041" /* 16041 */;
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
    isWindowsResult = _modDef16041.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};