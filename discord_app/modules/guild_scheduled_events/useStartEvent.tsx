// === Module 9460: useStartEvent ===

// Module 9460 (useStartEvent)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_6 = {
  onSuccess() {

  },
  permissionOverwrites: []
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useStartEvent.tsx");

export default function useStartEvent() {
  closure_2 = async function _startEvent(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    dependencyMap = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    let iter = (async (arg0, value) => {
      closure_4 = tmp3;
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
      await "flex";
      closure_132_0(true);
      c6 = 1;
      await closure_1(9461).preStartEventActions(closure_131_0, closure_131_3);
      if (2 === tmp7) {
        c6 = 0;
        closure_131_5 = closure_5;
        const aPIError = new closure_0(5266).APIError(closure_131_5);
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
          return { value, done: true };
        } else {
          c7 = 4;
          c8 = 1;
          return { value: closure_1(9461).setEventAsActive(closure_131_0, closure_131_1), done: false };
        }
      } else if (4 === tmp7) {
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
          return { value: closure_0(9462).navigateToEvent(closure_131_0, closure_131_2), done: false };
        }
      } else if (5 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          return { value, done: true };
        } else {
          c7 = 6;
          c8 = 1;
          return { value: closure_0(9462).postStartActions(closure_131_0, closure_131_2), done: false };
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_132_0(false);
        c6 = 0;
      }
      c6 = 0;
      return value;
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
};