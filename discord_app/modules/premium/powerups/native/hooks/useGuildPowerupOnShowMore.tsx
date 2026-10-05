// === Module 12225: useGuildPowerupOnShowMore ===

// Module 12225 (useGuildPowerupOnShowMore)
import openGuildPowerupsBottomSheetDefault from "openGuildPowerupsBottomSheet" /* 12174 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, arg1) => {
  _require = guildId;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === guildId) {
    let tmp2;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function n() {
    if (null != closure_1) {
      const obj = { guildId, powerup: tmp };
      openGuildPowerupsBottomSheetDefault(obj);
    }
  };
  cResult[0] = guildId;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((guildId, arg1) => {
  let closure_1 = arg1;
  const items = [guildId, arg1];
  return react.useCallback(() => {
    if (null != closure_1) {
      const obj = { guildId, powerup: tmp };
      openGuildPowerupsBottomSheetDefault(obj);
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx");

export default tmp2;