// === Module 12198: useGuildPowerupOnShowDeactivate ===

// Module 12198 (useGuildPowerupOnShowDeactivate)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const jsx = Fragment.jsx;
let closure_4 = react.lazy(() => asyncRequire(12199, dependencyMap.paths));
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, powerup) => {
  _require = guildId;
  dependencyMap = powerup;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === guildId) {
    let tmp2;
    if (cResult[1] === powerup) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function p() {
    const obj = useAlertStore;
    obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  };
  cResult[0] = guildId;
  cResult[1] = powerup;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((guildId, powerup) => {
  const items = [guildId, powerup];
  return react.useCallback(() => {
    const obj = useAlertStore;
    obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
  }, items);
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default tmp2;