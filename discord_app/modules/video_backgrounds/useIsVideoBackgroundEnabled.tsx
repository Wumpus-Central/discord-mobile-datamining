// discord_app/modules/video_backgrounds/useIsVideoBackgroundEnabled.tsx
import c from "../../../_runtime/00576_c.js";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundEnabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsVideoBackgroundEnabled(location) {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      let tmp5 = useIsVideoBackgroundSupportedDefault();
      if (tmp5) {
        const isIOSResult = PlatformUtils.isIOS();
        let enabled = !isIOSResult;
        if (isIOSResult) {
          enabled = obj3.useConfig(tmp4).enabled;
        }
        tmp5 = enabled;
        const tmpResult = PlatformUtils;
      }
      return tmp5;
    }
  : function useIsVideoBackgroundEnabled(location) {
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
