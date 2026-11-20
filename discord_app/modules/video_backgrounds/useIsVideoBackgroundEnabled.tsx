// === Module 10846: useIsVideoBackgroundEnabled ===

// Module 10846 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 10847 */;
import size from "module_2" /* 2 */;

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
};