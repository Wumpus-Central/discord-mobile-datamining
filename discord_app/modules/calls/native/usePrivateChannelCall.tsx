// === Module 13261: usePrivateChannelCall ===

// Module 13261 (usePrivateChannelCall)
import util from "util" /* 1114 */;
import getPrivateChannelCallDefault from "getPrivateChannelCall" /* 10998 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/usePrivateChannelCall.tsx");

export default function usePrivateChannelCall(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [ChannelStore];
  const items1 = [arg1, arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    const channel = ChannelStore.getChannel(ChannelStore.getDMFromUserId(closure_0));
    if (null != channel) {
      if (channel.isPrivate()) {
        ({ text: obj2.text, accessibilityHint: obj2.accessibilityHint, inCall: obj2.inCall } = getPrivateChannelCallDefault(channel, closure_1));
        return { text: null, accessibilityHint: null, inCall: null };
      }
    }
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (closure_1) {
      let stringResult = string(t["7AWk50"]);
      let tmp10 = require;
    } else {
      stringResult = string(t["EZgS+9"]);
      tmp10 = require;
    }
    const obj3 = { text: stringResult, accessibilityHint: null, inCall: false };
    const intl2 = tmp10(1114).intl;
    const string2 = intl2.string;
    const t2 = tmp10(1114).t;
    if (closure_1) {
      let string2Result = string2(t2.oCqlGG);
    } else {
      string2Result = string2(t2.focH1t);
    }
    obj3.accessibilityHint = string2Result;
    return obj3;
  }, items1);
  const obj2 = { text: stateFromStoresObject.text, inCall: stateFromStoresObject.inCall, accessibilityHint: stateFromStoresObject.accessibilityHint, handlePress: null };
  const items2 = [arg0, arg1, arg2];
  obj2.handlePress = noop.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj5 = { value, done: true };
        return obj5;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = tmp2;
            let channel;
            closure_128_1 = undefined;
            channel = authStore.getChannel(authStore.getDMFromUserId(closure_0));
            if (null == channel) {
              dependencyMap = 1;
              c3 = 1;
              const obj7 = { value: tmp3(4649).ensurePrivateChannel(tmp32), done: false };
              return obj7;
            }
            tmp32 = closure_0;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_1 = value;
          channel = authStore.getChannel(closure_128_1);
        }
        let isPrivateResult;
        if (channel != null) {
          isPrivateResult = channel.isPrivate();
        }
        if (isPrivateResult) {
          tmp3(10998)(channel, closure_129_1).onPress();
          const obj3 = tmp3(10998)(channel, closure_129_1);
        }
        if (closure_129_2 != null) {
          closure_129_2();
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp25) {
        c3 = tmp;
        throw tmp25;
      }
    }
  }), items2);
  return obj2;
};