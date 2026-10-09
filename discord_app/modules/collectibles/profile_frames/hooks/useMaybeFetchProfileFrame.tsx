// === Module 8311: useMaybeFetchProfileFrame ===

// Module 8311 (useMaybeFetchProfileFrame)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7256 */;
import useFramePreviewOverrideFrameDefault from "useFramePreviewOverrideFrame" /* 8312 */;
import useProfileFrameDefault from "useProfileFrame" /* 8322 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchProfileFrame(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  let tmp2 = useFramePreviewOverrideFrameDefault();
  const tmp3 = useProfileFrameDefault(arg0);
  importDefault = tmp4;
  if (cResult[0] === (null == tmp2 && null != arg0 && null == tmp3)) {
    if (cResult[1] === arg0) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    if (tmp2 == null) {
      tmp2 = tmp3;
    }
    return tmp2;
  }
  const fn = function u() {
    if (closure_1) {
      const result = CollectiblesActionCreators.maybeFetchCollectiblesProduct(closure_0);
    }
  };
  const items = [null == tmp2 && null != arg0 && null == tmp3, arg0];
  cResult[0] = null == tmp2 && null != arg0 && null == tmp3;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
  let obj = require("c");
}) : (function useMaybeFetchProfileFrame(arg0) {
  closure_0 = arg0;
  let tmp = useFramePreviewOverrideFrameDefault();
  const tmp2 = useProfileFrameDefault(arg0);
  importDefault = tmp3;
  const items = [null == tmp && null != arg0 && null == tmp2, arg0];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      const result = CollectiblesActionCreators.maybeFetchCollectiblesProduct(closure_0);
    }
  }, items);
  if (tmp == null) {
    tmp = tmp2;
  }
  return tmp;
});