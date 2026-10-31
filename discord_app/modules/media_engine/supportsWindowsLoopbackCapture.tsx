// === Module 15893: supportsWindowsLoopbackCapture ===

// Module 15893 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import DiscordNativeDefault from "DiscordNative" /* 4825 */;
import _modDef15894 from "module_15894" /* 15894 */;
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
    isWindowsResult = _modDef15894.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};