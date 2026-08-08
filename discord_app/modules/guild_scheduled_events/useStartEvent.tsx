// discord_app/modules/guild_scheduled_events/useStartEvent.tsx
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
        let c4 = tmp3;
        let tmp57 = onSuccess;
        if (onSuccess === undefined) {
          tmp57 = c6;
        }
        onSuccess = tmp57.onSuccess;
        if (onSuccess === undefined) {
          onSuccess = c6.onSuccess;
        }
        let permissionOverwrites = tmp57.permissionOverwrites;
        if (permissionOverwrites === undefined) {
          permissionOverwrites = c6.permissionOverwrites;
        }
        yield "ct";
        callback(true);
        c6 = 1;
        yield callback2(9054).preStartEventActions(callback, permissionOverwrites);
        if (2 === tmp7) {
          c6 = 0;
          const outer1_5 = noop;
          const aPIError = new callback(4202).APIError(outer1_5);
          const outer1_4 = aPIError;
          callback2(outer1_4);
          callback(false);
          callback(false);
          let c8 = 3;
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
            let obj7 = callback2(9054);
            let c7 = 4;
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
            obj4 = callback(9055);
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
            const obj1 = callback(9055);
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
        return arg1;
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