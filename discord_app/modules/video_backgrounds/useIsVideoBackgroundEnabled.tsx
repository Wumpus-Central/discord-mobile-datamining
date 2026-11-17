// === Module 11644: useIsVideoBackgroundEnabled ===

// Module 11644 (useIsVideoBackgroundEnabled)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported" /* 11645 */;
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