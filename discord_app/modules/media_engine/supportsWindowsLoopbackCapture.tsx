// === Module 15234: supportsWindowsLoopbackCapture ===

// Module 15234 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import DiscordNativeDefault from "DiscordNative" /* 4633 */;
import _modDef15235 from "module_15235" /* 15235 */;
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
    isWindowsResult = _modDef15235.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};