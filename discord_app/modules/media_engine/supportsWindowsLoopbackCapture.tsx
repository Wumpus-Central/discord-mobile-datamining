// === Module 15305: supportsWindowsLoopbackCapture ===

// Module 15305 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import DiscordNativeDefault from "DiscordNative" /* 4724 */;
import _modDef15306 from "module_15306" /* 15306 */;
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
    isWindowsResult = _modDef15306.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};