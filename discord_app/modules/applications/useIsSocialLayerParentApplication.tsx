// === Module 9771: useIsSocialLayerParentApplication ===

// Module 9771 (useIsSocialLayerParentApplication)
import getApplicationFlags from "getApplicationFlags" /* 7873 */;
import noop from "noop" /* 19 */;
import { ApplicationFlags } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => callback(dependencyMap[2]).hasApplicationFlag(callback, ApplicationFlags.PARENT), items);
};
export const getIsSocialLayerParentApplication = function getIsSocialLayerParentApplication(application) {
  return getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.PARENT);
};