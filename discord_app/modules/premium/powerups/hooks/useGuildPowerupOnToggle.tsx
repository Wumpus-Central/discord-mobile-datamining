// === Module 12272: useGuildPowerupOnToggle ===

// Module 12272 (useGuildPowerupOnToggle)
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12224 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupOnToggle(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(7);
  const obj = require("c");
  [tmp3, _slicedToArray] = noop.useState(false);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp5, noop] = noop.useState(undefined);
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp3) {
        if (cResult[5] === tmp6) {
          let tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { isLoading: tmp3, error: tmp5, onToggle: tmp6 };
    cResult[3] = tmp5;
    cResult[4] = tmp3;
    cResult[5] = tmp6;
    cResult[6] = obj2;
    tmp7 = obj2;
  }
  const fn = function s(arg0) {
    if (null == closure_1) {
      return Promise.resolve();
    } else {
      const tmp5 = GuildPowerupsActionCreators;
      _slicedToArray(true);
      noop(undefined);
      const tmp6 = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild;
      const tmp6Result = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild(closure_0, tmp.skuId);
      return arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild(closure_0, tmp.skuId).catch((error) => {
        const body = error.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        closure_1_3(message);
        throw error;
      }).finally(() => {
        closure_1_2(false);
      });
    }
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp6 = fn;
}) : (function useGuildPowerupOnToggle(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  [tmp2, _slicedToArray] = noop.useState(false);
  const tmp3 = _slicedToArray(noop.useState(undefined), 2);
  noop = tmp3[1];
  const obj = { isLoading: tmp2, error: tmp3[0], onToggle: null };
  const items = [arg0, arg1];
  obj.onToggle = noop.useCallback((arg0) => {
    if (null == closure_1) {
      return Promise.resolve();
    } else {
      const tmp5 = GuildPowerupsActionCreators;
      _slicedToArray(true);
      closure_3(undefined);
      const tmp6 = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild;
      const tmp6Result = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild(closure_0, tmp.skuId);
      return arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild(closure_0, tmp.skuId).catch((error) => {
        const body = error.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        closure_1_3(message);
        throw error;
      }).finally(() => {
        closure_1_2(false);
      });
    }
  }, items);
  return obj;
});