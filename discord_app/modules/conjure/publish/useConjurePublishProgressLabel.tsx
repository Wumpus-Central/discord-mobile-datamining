// discord_app/modules/conjure/publish/useConjurePublishProgressLabel.tsx
import _modDef4131 from "../intl/ConjureUntranslated.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjurePublishStatusStore from "ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

const require = fn;
let obj = {
  preparing: _modDef4131.GQeas1,
  approval: _modDef4131["TkHHD+"],
  approved_by_grant: _modDef4131["9+kNt8"],
  setup: _modDef4131["F+AxgM"],
  build: _modDef4131.oQeMIy,
  deploy: _modDef4131.LqZvZ2,
  discord: _modDef4131.LFcGAT,
  activating: _modDef4131.ff1Fq1,
};
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
  const tmp4 = _slicedToArray(
    noop.useState(() => Date.now()),
    2,
  );
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
    obj2.detail = tmp(13170).formatElapsed(tmp4[0] - stateFromStores.stageStartedAt);
    formatToPlainStringResult = intl.formatToPlainString(stateFromStores(4131)["ndkR+x"], obj2);
    const tmpResult = tmp(13170);
  }
  return formatToPlainStringResult;
}
