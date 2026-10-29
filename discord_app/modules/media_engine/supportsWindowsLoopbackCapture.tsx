// discord_app/modules/media_engine/supportsWindowsLoopbackCapture.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import DiscordNativeDefault from "../../lib/DiscordNative.tsx";
import _modDef15814 from "../../../_runtime/metro/15814__.js";
import size from "../../../_runtime/metro/00002__.js";

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
}
