// discord_app/modules/conjure/server_apps/useConjureServerApplicationIds.tsx
import ConjureGuildExperiment from "../experiments/ConjureGuildExperiment.tsx";
import prefetchConjureApplicationDefault from "../projects/prefetchConjureApplication.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_apps/useConjureServerApplicationIds.tsx");

export default function useConjureServerApplicationIds(arg0, join) {
  _require = arg0;
  const joined = join.join(",");
  items = [require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let result = null != closure_0;
      if (result) {
        result = ConjureGuildExperiment.isConjureGuildEnabledWithoutExposure(tmp, "ConjureServerApplicationIds");
      }
      return result;
    },
    items1,
  );
  const items2 = [stateFromStores, joined];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if ("" !== joined) {
        const parts = joined.split(",");
        for (const item10010 of parts) {
          let tmp6 = prefetchConjureApplicationDefault(item10010);
          continue;
        }
      }
    }
  }, items2);
  let obj = require("initialize");
  const items3 = [ApplicationStore];
  const items4 = [stateFromStores, joined];
  return require("initialize").useStateFromStoresArray(
    items3,
    () => {
      if (stateFromStores) {
        if ("" !== joined) {
          const parts = joined.split(",");
          const found = parts.filter((item) => {
            application = application.getApplication(item);
            let conjureProjectId;
            if (application != null) {
              conjureProjectId = application.conjureProjectId;
            }
            return null != conjureProjectId;
          });
        }
        return [];
      }
    },
    items4,
  );
}
