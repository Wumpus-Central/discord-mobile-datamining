// discord_app/modules/applications/useIsSocialLayerParentApplication.tsx
import ApplicationFlagUtils from "utils/ApplicationFlagUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const ApplicationFlags = fn(1074).ApplicationFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => ApplicationFlagUtils.hasApplicationFlag(closure_0, ApplicationFlags.PARENT), items);
}
export const getIsSocialLayerParentApplication = function getIsSocialLayerParentApplication(application) {
  return ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.PARENT);
};
