// discord_app/modules/applications/useIsSocialLayerParentApplication.tsx
import react2 from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import ApplicationFlagUtils from "utils/ApplicationFlagUtils.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ApplicationFlags = Constants.ApplicationFlags;
function getIsSocialLayerParentApplication(application) {
  const obj = ApplicationFlagUtils;
  return obj.hasApplicationFlag(application, ApplicationFlags.PARENT);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (application) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== application) {
        const tmpResult = ApplicationFlagUtils;
        const hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.PARENT);
        cResult[0] = application;
        cResult[1] = hasApplicationFlagResult;
        tmp4 = hasApplicationFlagResult;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      return react.useMemo(() => {
        const obj = ApplicationFlagUtils;
        return obj.hasApplicationFlag(closure_0, ApplicationFlags.PARENT);
      }, items);
    };
const result = size.fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default tmp2;
export { getIsSocialLayerParentApplication };
