// === Module 12385: useConjureSharedProjectLaunch ===

// Module 12385 (useConjureSharedProjectLaunch)
import conjureSharedProjectHome from "conjureSharedProjectHome" /* 12006 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectLaunch.tsx");

export default function useConjureSharedProjectLaunch(arg0, arg1, guildId) {
  _require = arg0;
  closure_1 = arg1;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  _slicedToArray = undefined;
  noop = undefined;
  let stateFromStores;
  [tmp2, c4] = noop.useState(false);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  noop = tmp3[1];
  const tmp = _slicedToArray(noop.useState(false), 2);
  items = [stateFromStores];
  const items1 = [arg1, channelId];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let result = null != closure_1;
    if (result) {
      result = null != channelId;
    }
    if (result) {
      result = conjureSharedProjectHome.canLaunchSharedProject(closure_1);
    }
    return result;
  }, items1);
  const items2 = [stateFromStores, arg0, guildId, channelId];
  let obj = require("initialize");
  return {
    canLaunch: stateFromStores,
    launching: tmp2,
    failed: tmp3[0],
    launch: noop.useCallback(channelId(function*() {
      if (v32 === 2) {
        v32 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v32 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 === 2) {
              v32 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const applicationId = tmp4;
              if (stateFromStores) {
                if (null != channelId) {
                  v32(true);
                  closure_5(false);
                  c3 = 2;
                  const obj4 = { applicationId, guildId, channelId: tmp26 };
                  v3 = 3;
                  v32 = 1;
                  const obj5 = { value: v3(tmp35[6])(obj4), done: false };
                  return obj5;
                }
              }
              v32 = 3;
              return { value: false, done: true };
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_4(false);
            throw tmp35;
          } else if (2 === tmp8) {
            c3 = 1;
            closure_128_5(true);
            c3 = 0;
            closure_128_4(false);
            v32 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            v32 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_4(false);
            v32 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_4(false);
            v32 = 3;
            return { value: true, done: true };
          }
        } catch (tmp35) {
          if (tmp5 === c3) {
            v32 = tmp3;
            throw tmp35;
          } else if (tmp2 === tmp37) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }), items2)
  };
};