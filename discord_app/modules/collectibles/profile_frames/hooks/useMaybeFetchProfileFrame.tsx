// discord_app/modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx
import useFramePreviewOverrideFrameDefault from "useFramePreviewOverrideFrame.native.tsx";
import useProfileFrameDefault from "useProfileFrame.tsx";
import noop from "../../../../../_runtime/00019_noop.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0, location) {
  const _require = arg0;
  let tmp = useFramePreviewOverrideFrameDefault();
  const isProfileFramesEnabled = require("../../experiments/CollectiblesProfileFramesExperiment.tsx").useIsProfileFramesEnabled(location);
  const tmp3 = useProfileFrameDefault(arg0);
  importDefault = tmp4;
  const items = [null == tmp && isProfileFramesEnabled && null != arg0 && null == tmp3, arg0];
  const effect = React.useEffect(() => {
    if (closure_1) {
      const result = callback(dependencyMap[4]).maybeFetchCollectiblesProduct(callback);
      const obj = callback(dependencyMap[4]);
    }
  }, items);
  if (tmp == null) {
    let tmp6;
    if (isProfileFramesEnabled) {
      tmp6 = tmp3;
    }
    tmp = tmp6;
  }
  return tmp;
};