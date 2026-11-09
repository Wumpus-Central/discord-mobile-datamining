// === Module 16209: supportsWindowsLoopbackCapture ===

// Module 16209 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import DiscordNativeDefault from "DiscordNative" /* 4951 */;
import _modDef16210 from "module_16210" /* 16210 */;
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
    isWindowsResult = _modDef16210.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};