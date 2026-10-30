// discord_app/modules/video_backgrounds/useIsVideoBackgroundEnabled.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundEnabled.tsx");

export default function useIsVideoBackgroundEnabled(location) {
  let tmp2 = useIsVideoBackgroundSupportedDefault();
  if (tmp2) {
    const isIOSResult = PlatformUtils.isIOS();
    let enabled = !isIOSResult;
    if (isIOSResult) {
      enabled = obj.useConfig(obj2).enabled;
    }
    tmp2 = enabled;
  }
  return tmp2;
}
