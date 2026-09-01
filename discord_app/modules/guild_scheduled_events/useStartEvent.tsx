// discord_app/modules/guild_scheduled_events/useStartEvent.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../_runtime/00019_noop.js";

const require = arg1;
let closure_6 = {
  onSuccess() {

  },
  permissionOverwrites: []
};
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useStartEvent.tsx");

export default function useStartEvent() {
  function _startEvent() {
    const self = this;
    const tmp = closure_1_3((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      c7 = 0;
      c8 = 0;
      c6 = 0;
      const iter = (function*(arg0, arg1) {
        c4 = tmp3;
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
        yield "PX_16";
        callback(true);
        c6 = 1;
        yield callback2(9900).preStartEventActions(callback, permissionOverwrites);
        if (2 === tmp7) {
          c6 = 0;
          aPIError = new callback(4376).APIError(closure_5);
          callback2(aPIError);
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
            let obj7 = callback2(9900);
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
            obj4 = callback(9901);
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
            obj1 = callback(9901);
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
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback(React.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  closure_1 = tmp2[1];
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