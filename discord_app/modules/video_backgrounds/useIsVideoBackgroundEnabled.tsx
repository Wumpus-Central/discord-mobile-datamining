// discord_app/modules/video_backgrounds/useIsVideoBackgroundEnabled.tsx
import react from "../../../_runtime/00576_react.js";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import VirtualBackgroundsIosExperimentDefault from "VirtualBackgroundsIosExperiment.tsx";
import useIsVideoBackgroundSupportedDefault from "useIsVideoBackgroundSupported.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let tmp4;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const obj3 = VirtualBackgroundsIosExperimentDefault;
      const enabled = obj3.useConfig(tmp4).enabled;
      let tmp5 = useIsVideoBackgroundSupportedDefault();
      if (tmp5) {
        const tmpResult = PlatformUtils;
        const isIOSResult = tmpResult.isIOS();
        let tmp7 = !isIOSResult;
        if (isIOSResult) {
          tmp7 = enabled;
        }
        tmp5 = tmp7;
      }
      return tmp5;
    }
  : (location) => {
      const obj = VirtualBackgroundsIosExperimentDefault;
      const obj2 = { location };
      const enabled = obj.useConfig(obj2).enabled;
      let tmp2 = useIsVideoBackgroundSupportedDefault();
      if (tmp2) {
        const obj3 = PlatformUtils;
        const isIOSResult = obj3.isIOS();
        let tmp5 = !isIOSResult;
        if (isIOSResult) {
          tmp5 = enabled;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundEnabled.tsx");

export default tmp2;
