// discord_app/modules/calls/native/usePrivateChannelCall.tsx
import util from "../../../intl/index.native.tsx";
import getPrivateChannelCallDefault from "getPrivateChannelCall.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/usePrivateChannelCall.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      _require = arg0;
      closure_1 = arg1;
      dependencyMap = arg2;
      const cResult = require("c").c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const stateFromStoresObject = tmp(504).useStateFromStoresObject(first, tmp6, tmp7);
        ({ text, accessibilityHint, inCall } = stateFromStoresObject);
        if (cResult[5] === arg1) {
          if (cResult[6] === arg2) {
            if (cResult[7] === arg0) {
              let tmp9 = cResult[8];
            }
            if (cResult[9] === accessibilityHint) {
              if (cResult[10] === tmp9) {
                if (cResult[11] === inCall) {
                  if (cResult[12] === text) {
                    let tmp11 = cResult[13];
                  }
                  return tmp11;
                }
              }
            }
            const obj2 = { text, inCall, accessibilityHint, handlePress: tmp9 };
            cResult[9] = accessibilityHint;
            cResult[10] = tmp9;
            cResult[11] = inCall;
            cResult[12] = text;
            cResult[13] = obj2;
            tmp11 = obj2;
          }
        }
        _require = asyncGeneratorStep(async () => {
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
              return { value: "IconComponent", done: null };
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
                    const obj7 = { value: tmp3(4909).ensurePrivateChannel(tmp32), done: false };
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
                tmp3(10616)(channel, tmp3).onPress();
                const obj3 = tmp3(10616)(channel, tmp3);
              }
              if (dependencyMap != null) {
                dependencyMap();
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp25) {
              c3 = tmp;
              throw tmp25;
            }
          }
        });
        const fn2 = function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        cResult[5] = arg1;
        cResult[6] = arg2;
        cResult[7] = arg0;
        cResult[8] = fn2;
        tmp9 = fn2;
        const tmpResult = tmp(504);
      }
      const fn = function o() {
        const channel = ChannelStore.getChannel(ChannelStore.getDMFromUserId(closure_0));
        if (null != channel) {
          if (channel.isPrivate()) {
            ({
              text: obj2.text,
              accessibilityHint: obj2.accessibilityHint,
              inCall: obj2.inCall,
            } = getPrivateChannelCallDefault(channel, closure_1));
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
        const intl2 = tmp10(1126).intl;
        const string2 = intl2.string;
        const t2 = tmp10(1126).t;
        if (closure_1) {
          let string2Result = string2(t2.oCqlGG);
        } else {
          string2Result = string2(t2.focH1t);
        }
        obj3.accessibilityHint = string2Result;
        return obj3;
      };
      const items1 = [arg1, arg0];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
      let obj = require("c");
      tmp = _require;
    }
  : (arg0, arg1, arg2) => {
      _require = arg0;
      closure_1 = arg1;
      dependencyMap = arg2;
      const items = [ChannelStore];
      const items1 = [arg1, arg0];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(
        items,
        () => {
          const channel = ChannelStore.getChannel(ChannelStore.getDMFromUserId(closure_0));
          if (null != channel) {
            if (channel.isPrivate()) {
              ({
                text: obj2.text,
                accessibilityHint: obj2.accessibilityHint,
                inCall: obj2.inCall,
              } = getPrivateChannelCallDefault(channel, closure_1));
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
          const intl2 = tmp10(1126).intl;
          const string2 = intl2.string;
          const t2 = tmp10(1126).t;
          if (closure_1) {
            let string2Result = string2(t2.oCqlGG);
          } else {
            string2Result = string2(t2.focH1t);
          }
          obj3.accessibilityHint = string2Result;
          return obj3;
        },
        items1,
      );
      const obj2 = {
        text: stateFromStoresObject.text,
        inCall: stateFromStoresObject.inCall,
        accessibilityHint: stateFromStoresObject.accessibilityHint,
        handlePress: null,
      };
      const items2 = [arg0, arg1, arg2];
      obj2.handlePress = noop.useCallback(
        asyncGeneratorStep(async () => {
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
              return { value: "IconComponent", done: null };
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
                    const obj7 = { value: tmp3(4909).ensurePrivateChannel(tmp32), done: false };
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
                tmp3(10616)(channel, closure_129_1).onPress();
                const obj3 = tmp3(10616)(channel, closure_129_1);
              }
              if (closure_129_2 != null) {
                closure_129_2();
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp25) {
              c3 = tmp;
              throw tmp25;
            }
          }
        }),
        items2,
      );
      return obj2;
    };
