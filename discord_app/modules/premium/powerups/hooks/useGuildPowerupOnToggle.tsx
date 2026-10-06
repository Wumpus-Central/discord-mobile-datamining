// === Module 12210: useGuildPowerupOnToggle ===

// Module 12210 (useGuildPowerupOnToggle)
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12162 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let tmp3;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(7);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp3, _slicedToArray] = tmp2;
  const tmp4 = _slicedToArray(react.useState(undefined), 2);
  [tmp5, react] = tmp4;
  if (cResult[0] === arg0) {
    let tmp6;
    if (cResult[1] === arg1) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp3) {
        let tmp7;
        if (cResult[5] === tmp6) {
          tmp7 = cResult[6];
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
      const tmp6 = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild;
      _slicedToArray(true);
      react(undefined);
      const tmp6Result = tmp6(closure_0, tmp.skuId);
      const catchPromise = tmp6Result.catch((error) => {
        const body = error.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        closure_1_3(message);
        throw error;
      });
      return catchPromise.finally(() => {
        closure_1_2(false);
      });
    }
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_3;
  let items;
  let tmp2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, _slicedToArray] = tmp;
  const tmp3 = _slicedToArray(react.useState(undefined), 2);
  react = tmp3[1];
  const obj = {
    isLoading: tmp2,
    error: tmp3[0],
    onToggle: react.useCallback((arg0) => {
      if (null == closure_1) {
        return Promise.resolve();
      } else {
        const tmp5 = GuildPowerupsActionCreators;
        const tmp6 = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild;
        _slicedToArray(true);
        closure_3(undefined);
        const tmp6Result = tmp6(closure_0, tmp.skuId);
        const catchPromise = tmp6Result.catch((error) => {
          const body = error.body;
          let message;
          if (body != null) {
            message = body.message;
          }
          closure_1_3(message);
          throw error;
        });
        return catchPromise.finally(() => {
          closure_1_2(false);
        });
      }
    }, items)
  };
  items = [arg0, arg1];
  return obj;
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx");

export default tmp2;