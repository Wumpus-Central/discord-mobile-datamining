// === Module 12272: useConjurePublishProgressLabel ===

// Module 12272 (useConjurePublishProgressLabel)
import _modDef4028 from "module_4028" /* 4028 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10996 */;

const require = globalThis.__r;

const require = fn;
let obj = { preparing: _modDef4028.GQeas1, approval: _modDef4028["TkHHD+"], approved_by_grant: _modDef4028["9+kNt8"], setup: _modDef4028["F+AxgM"], build: _modDef4028.oQeMIy, deploy: _modDef4028.LqZvZ2, discord: _modDef4028.LFcGAT, activating: _modDef4028.ff1Fq1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishProgressLabel.tsx");

export default function useConjurePublishProgressLabel(arg0) {
  _require = arg0;
  obj = require("initialize");
  items = [ConjurePublishStatusStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let publishProgress = null;
    if (null != closure_0) {
      publishProgress = ConjurePublishStatusStore.getPublishProgress(tmp);
    }
    return publishProgress;
  });
  const tmp4 = _slicedToArray(noop.useState(() => Date.now()), 2);
  dependencyMap = tmp4[1];
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      const _Date = Date;
      closure_2(Date.now());
      const _setInterval = setInterval;
      const interval = setInterval(() => closure_1_2(Date.now()), 1000);
      return () => clearInterval(closure_0);
    }
  }, items1);
  let formatToPlainStringResult = null;
  if (null != stateFromStores) {
    const intl = tmp(1113).intl;
    const obj2 = { action: null, detail: null };
    const intl2 = tmp(1113).intl;
    obj2.action = intl2.string(obj[stateFromStores.stage]);
    obj2.detail = tmp(12273).formatElapsed(tmp4[0] - stateFromStores.stageStartedAt);
    formatToPlainStringResult = intl.formatToPlainString(stateFromStores(4028)["ndkR+x"], obj2);
    const tmpResult = tmp(12273);
  }
  return formatToPlainStringResult;
};