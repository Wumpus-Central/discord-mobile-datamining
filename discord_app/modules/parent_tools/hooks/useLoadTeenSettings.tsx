// === Module 17316: useLoadTeenSettings ===

// Module 17316 (useLoadTeenSettings)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8675 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/hooks/useLoadTeenSettings.tsx");

export default function useLoadTeenSettings(id1, arg1) {
  _require = id1;
  const hasLoadedSettingsForTeen = require("useSelectedTeenUser").useHasLoadedSettingsForTeen(id1);
  dependencyMap = noop.useEffectEvent(arg1);
  items = [id1, hasLoadedSettingsForTeen];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      if (!hasLoadedSettingsForTeen) {
        const result = FamilyCenterActionCreatorsDefault.onTeenSettingsLoadFailure(closure_0, closure_2);
        const teenSettingsAndConsents = FamilyCenterActionCreatorsDefault.fetchTeenSettingsAndConsents(closure_0);
        return result;
      }
    }
  }, items);
  return hasLoadedSettingsForTeen;
};