// === Module 13001: useConjureSharedProjectLaunch ===

// Module 13001 (useConjureSharedProjectLaunch)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectLaunch.tsx");

export default function useConjureSharedProjectLaunch(arg0, install_scope, guildId) {
  _require = arg0;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [tmp2, c3] = noop.useState(false);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp3[1];
  let result = null != install_scope;
  if (result) {
    result = null != channelId;
  }
  if (result) {
    result = require("conjureSharedProjectHome").canLaunchSharedProject(install_scope, guildId);
    let obj2 = require("conjureSharedProjectHome");
  }
  noop = result;
  items = [result, arg0, guildId, channelId];
  const tmp = _slicedToArray(noop.useState(false), 2);
  return {
    canLaunch: result,
    launching: tmp2,
    failed: tmp3[0],
    launch: noop.useCallback(asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const applicationId = tmp4;
              if (c5) {
                if (null != guildId) {
                  if (null != channelId) {
                    v0(true);
                    v32(false);
                    v0 = 2;
                    const obj4 = { applicationId, guildId: tmp26, channelId: tmp27 };
                    v3 = 3;
                    c4 = 1;
                    const obj5 = { value: v3(tmp35[4])(obj4), done: false };
                    return obj5;
                  }
                }
              }
              c4 = 3;
              return { value: false, done: true };
            }
          } else if (1 === tmp8) {
            v0 = 0;
            closure_128_3(false);
            throw tmp35;
          } else if (2 === tmp8) {
            v0 = 1;
            closure_128_4(true);
            v0 = 0;
            closure_128_3(false);
            c4 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v0 = 0;
            closure_128_3(false);
            c4 = 3;
            return { value: true, done: true };
          }
        } catch (tmp35) {
          if (tmp5 === v0) {
            c4 = tmp3;
            throw tmp35;
          } else if (tmp2 === tmp37) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }), items)
  };
};