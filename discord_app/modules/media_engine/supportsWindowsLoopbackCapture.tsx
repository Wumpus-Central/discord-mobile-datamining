// === Module 15220: supportsWindowsLoopbackCapture ===

// Module 15220 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import DiscordNativeDefault from "DiscordNative" /* 4603 */;
import _modDef15221 from "module_15221" /* 15221 */;
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
    isWindowsResult = _modDef15221.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};