// === Module 7872: useMaybeFetchProfileFrame ===

// Module 7872 (useMaybeFetchProfileFrame)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import useFramePreviewOverrideFrameDefault from "useFramePreviewOverrideFrame" /* 7873 */;
import useProfileFrameDefault from "useProfileFrame" /* 7883 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  let tmp2 = useFramePreviewOverrideFrameDefault();
  const tmp3 = useProfileFrameDefault(arg0);
  importDefault = tmp4;
  if (cResult[0] === (null == tmp2 && null != arg0 && null == tmp3)) {
    let tmp5;
    let tmp6;
    if (cResult[1] === arg0) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const effect = react.useEffect(tmp5, tmp6);
    if (tmp2 == null) {
      tmp2 = tmp3;
    }
    return tmp2;
  }
  const fn = function u() {
    if (closure_1) {
      const obj = CollectiblesActionCreators;
      const result = obj.maybeFetchCollectiblesProduct(closure_0);
    }
  };
  const items = [null == tmp2 && null != arg0 && null == tmp3, arg0];
  cResult[0] = null == tmp2 && null != arg0 && null == tmp3;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
}) : ((arg0) => {
  let closure_1;
  let closure_0 = arg0;
  let tmp = useFramePreviewOverrideFrameDefault();
  const tmp2 = useProfileFrameDefault(arg0);
  importDefault = tmp3;
  const items = [null == tmp && null != arg0 && null == tmp2, arg0];
  const effect = react.useEffect(() => {
    if (closure_1) {
      const obj = CollectiblesActionCreators;
      const result = obj.maybeFetchCollectiblesProduct(closure_0);
    }
  }, items);
  if (tmp == null) {
    tmp = tmp2;
  }
  return tmp;
});
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeFetchProfileFrame.tsx");

export default tmp2;