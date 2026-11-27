// discord_app/modules/conjure/remix/useConjureRemixSettingsRequest.tsx
import conjureSetupAsk from "../setup_asks/conjureSetupAsk.tsx";
import conjureRemixSettingsRequest from "conjureRemixSettingsRequest.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureSettingsStore from "../settings/ConjureSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixSettingsRequest.tsx");

export default function useConjureRemixSettingsRequest(projectId, arg1, askId) {
  _require = projectId;
  dependencyMap = arg1;
  noop = askId;
  items = [arg1];
  const memo = noop.useMemo(() => conjureRemixSettingsRequest.conjureRemixSettingsRequest(closure_1), items);
  const conjureSettingsAskSource = require("conjureSettingsAsks").useConjureSettingsAskSource(projectId, memo, askId);
  const saved = conjureSettingsAskSource.saved;
  const superseded = conjureSettingsAskSource.superseded;
  let obj = require("conjureSettingsAsks");
  const items1 = [memo];
  const items2 = [memo, askId, projectId, saved, superseded];
  const stateFromStores = require("initialize").useStateFromStores(
    items1,
    () => {
      const settings = ConjureSettingsStore.getSettings(closure_0);
      let status = null;
      if (null != memo) {
        status = null;
        if (null != closure_2) {
          status = null;
          if (null != settings) {
            const obj2 = { kind: "settings", request: tmp2, askId: tmp4, saved, superseded };
            status = conjureSetupAsk.conjureSetupAskState(obj2, settings).status;
          }
        }
      }
      return status;
    },
    items2,
  );
  const items3 = [memo, stateFromStores];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != memo) {
      tmp2 = null;
      if (null != stateFromStores) {
        const obj = { request: tmp, open: "open" === tmp3 };
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items3);
}
