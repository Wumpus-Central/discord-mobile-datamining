// === Module 8340: useStartEvent ===

// Module 8340 (useStartEvent)
import V6OrEarlierAPIError from "V6OrEarlierAPIError";
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
let closure_6 = {
  onSuccess() {

  },
  permissionOverwrites: []
};
const result = require("noop").fileFinishedImporting("modules/guild_scheduled_events/useStartEvent.tsx");

export default function useStartEvent() {
  function _startEvent() {
    const self = this;
    const tmp = outer1_3((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      const iter = (function*(arg0, arg1) {
        if (c8 === 2) {
          c8 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let c4 = tmp3;
                let permissionOverwrites = tmp7;
                let onSuccess;
                permissionOverwrites = undefined;
                let tmp57 = onSuccess;
                if (onSuccess === undefined) {
                  tmp57 = c6;
                }
                onSuccess = tmp57.onSuccess;
                if (onSuccess === undefined) {
                  onSuccess = c6.onSuccess;
                }
                permissionOverwrites = tmp57.permissionOverwrites;
                if (permissionOverwrites === undefined) {
                  permissionOverwrites = c6.permissionOverwrites;
                }
                c4 = undefined;
                c7 = 1;
                c8 = 1;
                return { value: "ct", done: "Array" };
              }
            } else if (1 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                callback(true);
                c6 = 1;
                c7 = 3;
                c8 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback2(8341).preStartEventActions(callback, permissionOverwrites);
                return obj2;
              }
            } else {
              if (2 === tmp7) {
                c6 = 0;
                const outer1_5 = noop;
                const aPIError = new callback(4092).APIError(outer1_5);
                const outer1_4 = aPIError;
                callback2(outer1_4);
                callback(false);
                callback(false);
                c8 = 3;
              } else if (3 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  let obj7 = callback2(8341);
                  c7 = 4;
                  c8 = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = obj7.setEventAsActive(callback, callback2);
                  return obj4;
                }
              } else if (4 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj5 = { value: null, done: true };
                  obj5[0] = arg1;
                  return obj5;
                } else {
                  obj4 = callback(8342);
                  c7 = 5;
                  c8 = 1;
                  const obj6 = { value: null, done: false };
                  obj6[0] = obj4.navigateToEvent(callback, onSuccess);
                  return obj6;
                }
              } else if (5 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  obj7 = { value: null, done: true };
                  obj7[0] = arg1;
                  return obj7;
                } else {
                  obj1 = callback(8342);
                  c7 = 6;
                  c8 = 1;
                  const obj8 = { value: null, done: false };
                  obj8[0] = obj1.postStartActions(callback, onSuccess);
                  return obj8;
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                callback(false);
                c6 = 0;
              }
              c6 = 0;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp60) {
            noop = tmp60;
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
    });
    const _startEvent = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  const items = [
    function startEvent(arg0, arg1) {
      const self = this;
      const apply = _startEvent.apply;
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