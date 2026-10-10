// === Module 12302: useGuildPowerupOnShowMore ===

// Module 12302 (useGuildPowerupOnShowMore)
import openGuildPowerupsBottomSheetDefault from "openGuildPowerupsBottomSheet" /* 12251 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupOnShowMore(guildId, arg1) {
  _require = guildId;
  closure_1 = arg1;
  const cResult = require("c").c(3);
  if (cResult[0] === guildId) {
    if (cResult[1] === arg1) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function l() {
    if (null != closure_1) {
      const obj = { guildId, powerup: tmp };
      openGuildPowerupsBottomSheetDefault(obj);
    }
  };
  cResult[0] = guildId;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useGuildPowerupOnShowMore(guildId, arg1) {
  closure_1 = arg1;
  const items = [guildId, arg1];
  return noop.useCallback(() => {
    if (null != closure_1) {
      const obj = { guildId, powerup: tmp };
      openGuildPowerupsBottomSheetDefault(obj);
    }
  }, items);
});