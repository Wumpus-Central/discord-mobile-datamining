// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx
import asyncRequireImpl from "../../../../../../_runtime/02009_asyncRequireImpl.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let closure_4 = importAllResult.lazy(() => asyncRequireImpl(12019, dependencyMap.paths));
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return importAllResult.useCallback(() => {
    let obj = callback(table[4]);
    obj = { guildId: callback, powerup: table };
    obj.openAlert("guild-powerups-deactivate-alert", closure_1_3(closure_1_4, obj));
  }, items);
};