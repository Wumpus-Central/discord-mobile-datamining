// === Module 12609: useGuildPowerupOnShowDeactivate ===

// Module 12609 (useGuildPowerupOnShowDeactivate)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import useAlertStore from "useAlertStore" /* 4951 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let closure_4 = noop.lazy(() => asyncRequireImpl(12610, dependencyMap.paths));
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(guildId, powerup) {
  const items = [guildId, powerup];
  return noop.useCallback(() => {
    const obj = { guildId, powerup };
    obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
};