// === Module 8725: useIsSocialLayerParentApplication ===

// Module 8725 (useIsSocialLayerParentApplication)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8726 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
function getIsSocialLayerParentApplication(application) {
  const obj = ApplicationFlagUtils;
  return obj.hasApplicationFlag(application, ApplicationFlags.PARENT);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
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
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const obj = ApplicationFlagUtils;
    return obj.hasApplicationFlag(closure_0, ApplicationFlags.PARENT);
  }, items);
});
const result = size.fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default tmp2;
export { getIsSocialLayerParentApplication };