// === Module 11708: useGuildPowerupOnShowDeactivate ===

// Module 11708 (useGuildPowerupOnShowDeactivate)
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
let closure_4 = importAllResult.lazy(() => asyncRequireImpl(11709, dependencyMap.paths));
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return importAllResult.useCallback(() => {
    callback(table[4]);
    const obj = { guildId: callback, powerup: table };
    obj.openAlert("guild-powerups-deactivate-alert", <closure_1_4 guildId={callback} powerup={table} />);
  }, items);
};