// === Module 8648: useStartEvent ===

// Module 8648 (useStartEvent)
import StartEventUtilsAll from "StartEventUtils" /* 8649 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_6 = {
  onSuccess() {

  },
  permissionOverwrites: []
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useStartEvent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useStartEvent() {
  const cResult = require("c").c(4);
  const obj = require("c");
  [tmp3, closure_0] = noop.useState(false);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  [tmp5, importAll] = noop.useState(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    _require = asyncGeneratorStep(async (arg0, arg1, arg2) => {
      closure_4 = tmp3;
      closure_3 = tmp5;
      closure_131_0 = closure_0;
      closure_131_1 = closure_1;
      let tmp49 = closure_2;
      if (undefined === closure_2) {
        tmp49 = closure_2_6;
      }
      ({ onSuccess, permissionOverwrites } = tmp49);
      if (undefined === onSuccess) {
        onSuccess = closure_2_6.onSuccess;
      }
      closure_131_2 = onSuccess;
      if (undefined === permissionOverwrites) {
        permissionOverwrites = closure_2_6.permissionOverwrites;
      }
      closure_0(true);
      await StartEventUtilsAll.preStartEventActions(closure_0, permissionOverwrites);
      if (1 === tmp8) {
        c6 = 0;
        closure_131_3 = closure_5;
        const aPIError = new closure_0(5631).APIError(closure_131_3);
        closure_131_4 = aPIError;
        closure_1(closure_131_4);
        closure_0(false);
        closure_0(false);
        c8 = 3;
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          return { value, done: true };
        } else {
          c7 = 3;
          c8 = 1;
          return { value: StartEventUtilsAll.setEventAsActive(closure_131_0, closure_131_1), done: false };
        }
      } else if (3 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          return { value, done: true };
        } else {
          c7 = 4;
          c8 = 1;
          return { value: closure_0(8650).navigateToEvent(closure_131_0, closure_131_2), done: false };
        }
      } else if (4 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          return { value, done: true };
        } else {
          c7 = 5;
          c8 = 1;
          return { value: closure_0(8650).postStartActions(closure_131_0, closure_131_2), done: false };
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_0(false);
        c6 = 0;
      }
      return value;
    });
    function startEvent() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[0] = startEvent;
    let first = startEvent;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp5) {
    if (cResult[2] === tmp3) {
      let tmp8 = cResult[3];
    }
    return tmp8;
  }
  const items = [first, { loading: tmp3, error: tmp5 }];
  cResult[1] = tmp5;
  cResult[2] = tmp3;
  cResult[3] = items;
  tmp8 = items;
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}) : (function useStartEvent() {
  closure_2 = async function _startEvent2(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    dependencyMap = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    let iter = (async (arg0, value) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              closure_131_2 = undefined;
              closure_131_3 = undefined;
              closure_131_0 = closure_0;
              closure_131_1 = closure_1;
              let tmp57 = dependencyMap;
              if (dependencyMap === undefined) {
                tmp57 = c6;
              }
              let onSuccess = tmp57.onSuccess;
              if (onSuccess === undefined) {
                onSuccess = c6.onSuccess;
              }
              closure_131_2 = onSuccess;
              let permissionOverwrites = tmp57.permissionOverwrites;
              if (permissionOverwrites === undefined) {
                permissionOverwrites = c6.permissionOverwrites;
              }
              closure_131_3 = permissionOverwrites;
              closure_131_4 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_132_0(true);
              c6 = 1;
              c7 = 3;
              c8 = 1;
              const obj7 = { value: closure_1(8649).preStartEventActions(closure_131_0, closure_131_3), done: false };
              return obj7;
            }
          } else {
            if (2 === tmp7) {
              c6 = 0;
              closure_131_5 = closure_5;
              const aPIError = new closure_0(5631).APIError(closure_131_5);
              closure_131_4 = aPIError;
              closure_132_1(closure_131_4);
              closure_132_0(false);
              closure_132_0(false);
              c8 = 3;
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                c7 = 4;
                c8 = 1;
                const obj10 = { value: closure_1(8649).setEventAsActive(closure_131_0, closure_131_1), done: false };
                return obj10;
              }
            } else if (4 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                c7 = 5;
                c8 = 1;
                const obj13 = { value: closure_0(8650).navigateToEvent(closure_131_0, closure_131_2), done: false };
                return obj13;
              }
            } else if (5 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                c7 = 6;
                c8 = 1;
                const obj15 = { value: closure_0(8650).postStartActions(closure_131_0, closure_131_2), done: false };
                return obj15;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_132_0(false);
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp60) {
          closure_5 = tmp60;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp60;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  const items = [
    function startEvent(arg0, arg1) {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    { loading: tmp[0], error: tmp2[0] }
  ];
  return items;
});