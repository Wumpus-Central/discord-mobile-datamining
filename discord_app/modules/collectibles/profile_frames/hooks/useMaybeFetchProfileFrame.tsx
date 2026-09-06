// === Module 8201: useMaybeFetchProfileFrame ===

// Module 8201 (useMaybeFetchProfileFrame)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import useFramePreviewOverrideFrameDefault from "useFramePreviewOverrideFrame" /* 8202 */;
import useProfileFrameDefault from "useProfileFrame" /* 8213 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default function useMaybeFetchProfileFrame(arg0, location) {
  _require = arg0;
  let tmp = useFramePreviewOverrideFrameDefault();
  const isProfileFramesEnabled = require("CollectiblesProfileFramesExperiment").useIsProfileFramesEnabled(location);
  const tmp3 = useProfileFrameDefault(arg0);
  importDefault = tmp4;
  const items = [null == tmp && isProfileFramesEnabled && null != arg0 && null == tmp3, arg0];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const result = CollectiblesActionCreators.maybeFetchCollectiblesProduct(closure_0);
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