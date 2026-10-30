// === Module 15852: supportsWindowsLoopbackCapture ===

// Module 15852 (supportsWindowsLoopbackCapture)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import DiscordNativeDefault from "DiscordNative" /* 4820 */;
import _modDef15853 from "module_15853" /* 15853 */;
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
    isWindowsResult = _modDef15853.satisfies(release, ">=10.0.15063");
  }
  return isWindowsResult;
};