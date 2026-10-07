// === Module 12213: useGuildPowerupOnShowDeactivate ===

// Module 12213 (useGuildPowerupOnShowDeactivate)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import useAlertStore from "useAlertStore" /* 5716 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
let closure_4 = noop.lazy(() => asyncRequireImpl(12214, dependencyMap.paths));
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, powerup) => {
  _require = guildId;
  dependencyMap = powerup;
  const cResult = require("c").c(3);
  if (cResult[0] === guildId) {
    if (cResult[1] === powerup) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function p() {
    useAlertStore.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  };
  cResult[0] = guildId;
  cResult[1] = powerup;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((guildId, powerup) => {
  const items = [guildId, powerup];
  return noop.useCallback(() => {
    useAlertStore.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
});