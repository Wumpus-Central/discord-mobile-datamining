// === Module 13309: useGuildPowerupOnShowDeactivate ===

// Module 13309 (useGuildPowerupOnShowDeactivate)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import useAlertStore from "useAlertStore" /* 5743 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let closure_4 = noop.lazy(() => asyncRequireImpl(13310, dependencyMap.paths));
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default function useGuildPowerupOnShowDeactivate(guildId, powerup) {
  items = [guildId, powerup];
  return noop.useCallback(() => {
    useAlertStore.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
};