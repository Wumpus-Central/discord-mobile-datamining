// discord_app/modules/video_backgrounds/isVideoBackgroundEnabled.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported.tsx";
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/video_backgrounds/isVideoBackgroundEnabled.tsx");

export default function isVideoBackgroundEnabled(location) {
  let tmp3 = isVideoBackgroundSupportedDefault();
  if (tmp3) {
    const obj = PlatformUtils;
    const isIOSResult = obj.isIOS();
    let enabled = !isIOSResult;
    if (isIOSResult) {
      const obj2 = { location };
      const tmpResult = VirtualBackgroundsIosExperimentDefault;
      enabled = tmpResult.getConfig(obj2).enabled;
    }
    tmp3 = enabled;
  }
  return tmp3;
}
