// discord_app/modules/calls/native/usePrivateChannelCall.tsx
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/calls/native/usePrivateChannelCall.tsx");

export default function usePrivateChannelCall(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  let obj = _initialize;
  const items = [closure_5];
  const items1 = [arg1, arg0];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const channel = closure_1_5.getChannel(closure_1_5.getDMFromUserId(callback));
    if (null != channel) {
      if (channel.isPrivate()) {
        let obj = { text: null, accessibilityHint: null, inCall: null };
        ({ text: obj2[0], accessibilityHint: obj2[1], inCall: obj2[2] } = callback2(9646)(channel, callback2));
        return obj;
      }
    }
    const intl = callback(1236).intl;
    const string = intl.string;
    const t = callback(1236).t;
    if (callback2) {
      let stringResult = string(t["7AWk50"]);
      let tmp10 = tmp6;
    } else {
      stringResult = string(t["EZgS+9"]);
      tmp10 = tmp6;
    }
    obj = { text: stringResult, accessibilityHint: null, inCall: false };
    const intl2 = tmp10(1236).intl;
    const string2 = intl2.string;
    const t2 = tmp10(1236).t;
    if (callback2) {
      let string2Result = string2(t2.oCqlGG);
    } else {
      string2Result = string2(t2.focH1t);
    }
    obj[1] = string2Result;
    return obj;
  }, items1);
  obj = {
    text: stateFromStoresObject.text,
    inCall: stateFromStoresObject.inCall,
    accessibilityHint: stateFromStoresObject.accessibilityHint,
    handlePress: React.useCallback(callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let channel = tmp2;
              channel = undefined;
              closure_1 = undefined;
              channel = closure_1_5.getChannel(closure_1_5.getDMFromUserId(closure_1_0));
              if (null == channel) {
                dependencyMap = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_1(4770).ensurePrivateChannel(tmp33);
                return obj1;
              }
              tmp33 = closure_1_0;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = arg1;
            channel = closure_1_5.getChannel(closure_1);
          }
          obj1 = channel;
          let isPrivateResult;
          if (channel != null) {
            isPrivateResult = obj1.isPrivate();
          }
          if (isPrivateResult) {
            closure_1_1(9646)(channel, closure_1).onPress();
            const obj3 = closure_1_1(9646)(channel, closure_1);
          }
          if (dependencyMap != null) {
            dependencyMap();
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp25) {
          c3 = tmp;
          throw tmp25;
        }
      }
    }), items2)
  };
  items2 = [arg0, arg1, arg2];
  return obj;
};