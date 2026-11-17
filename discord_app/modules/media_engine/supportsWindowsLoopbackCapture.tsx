// === Module 16551: supportsWindowsLoopbackCapture ===

// Module 16551 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import DiscordNativeDefault from "DiscordNative" /* 5120 */;
import _modDef16552 from "module_16552" /* 16552 */;
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
    isWindowsResult = _modDef16552.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};