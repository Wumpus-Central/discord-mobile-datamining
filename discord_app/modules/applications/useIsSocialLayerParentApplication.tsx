// discord_app/modules/applications/useIsSocialLayerParentApplication.tsx
import getApplicationFlags from "utils/ApplicationFlagUtils.tsx";
import noop from "../../../_runtime/00019_noop.js";
import { ApplicationFlags } from "../../Constants.tsx";

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