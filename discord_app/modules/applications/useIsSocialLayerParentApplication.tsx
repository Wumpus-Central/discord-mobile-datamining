// === Module 9748: useIsSocialLayerParentApplication ===

// Module 9748 (useIsSocialLayerParentApplication)
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6883 */;
import noop from "module_19" /* 19 */;

require = fn;
const ApplicationFlags = fn(1072).ApplicationFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => ApplicationFlagUtils.hasApplicationFlag(closure_0, ApplicationFlags.PARENT), items);
};
export function getIsSocialLayerParentApplication(application) {
  return ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.PARENT);
}