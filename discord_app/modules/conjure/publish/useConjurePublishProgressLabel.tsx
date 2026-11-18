// === Module 18312: useConjurePublishProgressLabel ===

// Module 18312 (useConjurePublishProgressLabel)
import _modDef4121 from "module_4121" /* 4121 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6890 */;

const require = globalThis.__r;

const require = fn;
let obj = { preparing: _modDef4121.GQeas1, approval: _modDef4121["TkHHD+"], approved_by_grant: _modDef4121["9+kNt8"], setup: _modDef4121["F+AxgM"], build: _modDef4121.oQeMIy, deploy: _modDef4121.LqZvZ2, discord: _modDef4121.LFcGAT, activating: _modDef4121.ff1Fq1 };
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
    obj2.detail = tmp(18313).formatElapsed(tmp4[0] - stateFromStores.stageStartedAt);
    formatToPlainStringResult = intl.formatToPlainString(stateFromStores(4121)["ndkR+x"], obj2);
    const tmpResult = tmp(18313);
  }
  return formatToPlainStringResult;
};