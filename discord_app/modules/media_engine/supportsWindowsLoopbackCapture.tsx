// === Module 15813: supportsWindowsLoopbackCapture ===

// Module 15813 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import DiscordNativeDefault from "DiscordNative" /* 4819 */;
import _modDef15814 from "module_15814" /* 15814 */;
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
    isWindowsResult = _modDef15814.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};