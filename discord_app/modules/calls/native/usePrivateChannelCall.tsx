// discord_app/modules/calls/native/usePrivateChannelCall.tsx
import intl3 from "../../../intl/index.native.tsx";
import getPrivateChannelCallDefault from "getPrivateChannelCall.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c2, c3, dependencyMap;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let accessibilityHint;
      let closure_0;
      let closure_2;
      let first;
      let inCall;
      let text;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      const tmp = _require;
      const tmp2 = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(14);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp6;
        let tmp7;
        if (cResult[2] === arg0) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = tmp(504);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
        ({ text, accessibilityHint, inCall } = stateFromStoresObject);
        if (cResult[5] === arg1) {
          if (cResult[6] === arg2) {
            let tmp9;
            if (cResult[7] === arg0) {
              tmp9 = cResult[8];
            }
            if (cResult[9] === accessibilityHint) {
              if (cResult[10] === tmp9) {
                if (cResult[11] === inCall) {
                  let tmp11;
                  if (cResult[12] === text) {
                    tmp11 = cResult[13];
                  }
                  return tmp11;
                }
              }
            }
            let obj2 = { text, inCall, accessibilityHint, handlePress: tmp9 };
            cResult[9] = accessibilityHint;
            cResult[10] = tmp9;
            cResult[11] = inCall;
            cResult[12] = text;
            cResult[13] = obj2;
            tmp11 = obj2;
          }
        }
        _require = _asyncToGenerator(async () => {
          let obj4;
          let v1;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
              let channel;
              c3 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  channel = undefined;
                  closure_1 = undefined;
                  const tmp30 = channel;
                  channel = authStore.getChannel(authStore.getDMFromUserId(channel));
                  if (null == channel) {
                    v1 = 1;
                    c3 = 1;
                    const obj7 = { value: obj4.ensurePrivateChannel(tmp30), done: false };
                    obj4 = closure_2_1(closure_2_2[8]);
                    return obj7;
                  }
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_1 = value;
                channel = authStore.getChannel(closure_1);
              }
              let isPrivateResult;
              const obj2 = channel;
              if (channel != null) {
                isPrivateResult = obj2.isPrivate();
              }
              if (isPrivateResult) {
                const obj3 = closure_2_1(closure_2_2[6])(channel, closure_1);
                obj3.onPress();
              }
              if (v1 != null) {
                v1();
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp24) {
              c3 = 3;
              throw tmp24;
            }
          }
        });
        const fn2 = function () {
          return closure_0(...arguments);
        };
        cResult[5] = arg1;
        cResult[6] = arg2;
        cResult[7] = arg0;
        cResult[8] = fn2;
        tmp9 = fn2;
      }
      const fn = function o() {
        let string2Result;
        let stringResult;
        let tmp10;
        const channel = ChannelStore.getChannel(ChannelStore.getDMFromUserId(closure_0));
        if (null != channel) {
          if (channel.isPrivate()) {
            const obj = { text: null, accessibilityHint: null, inCall: null };
            ({
              text: obj2.text,
              accessibilityHint: obj2.accessibilityHint,
              inCall: obj2.inCall,
            } = getPrivateChannelCallDefault(channel, closure_1));
            getPrivateChannelCallDefault(channel, closure_1);
            return obj;
          }
        }
        const intl = intl3.intl;
        const string = intl.string;
        const t = intl3.t;
        if (closure_1) {
          stringResult = string(t["7AWk50"]);
          tmp10 = require;
        } else {
          stringResult = string(t["EZgS+9"]);
          tmp10 = require;
        }
        const obj3 = { text: stringResult, accessibilityHint: string2Result, inCall: false };
        const intl2 = tmp10(1126).intl;
        const string2 = intl2.string;
        const t2 = tmp10(1126).t;
        if (closure_1) {
          string2Result = string2(t2.oCqlGG);
        } else {
          string2Result = string2(t2.focH1t);
        }
        return obj3;
      };
      const items1 = [arg1, arg0];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
    }
  : (arg0, arg1, arg2) => {
      let closure_0;
      let closure_2;
      let items2;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = arg2;
      let obj = require("get initialized");
      const items = [ChannelStore];
      const items1 = [arg1, arg0];
      const stateFromStoresObject = obj.useStateFromStoresObject(
        items,
        () => {
          let string2Result;
          let stringResult;
          let tmp10;
          const channel = ChannelStore.getChannel(ChannelStore.getDMFromUserId(closure_0));
          if (null != channel) {
            if (channel.isPrivate()) {
              const obj = { text: null, accessibilityHint: null, inCall: null };
              ({
                text: obj2.text,
                accessibilityHint: obj2.accessibilityHint,
                inCall: obj2.inCall,
              } = getPrivateChannelCallDefault(channel, closure_1));
              getPrivateChannelCallDefault(channel, closure_1);
              return obj;
            }
          }
          const intl = intl3.intl;
          const string = intl.string;
          const t = intl3.t;
          if (closure_1) {
            stringResult = string(t["7AWk50"]);
            tmp10 = require;
          } else {
            stringResult = string(t["EZgS+9"]);
            tmp10 = require;
          }
          const obj3 = { text: stringResult, accessibilityHint: string2Result, inCall: false };
          const intl2 = tmp10(1126).intl;
          const string2 = intl2.string;
          const t2 = tmp10(1126).t;
          if (closure_1) {
            string2Result = string2(t2.oCqlGG);
          } else {
            string2Result = string2(t2.focH1t);
          }
          return obj3;
        },
        items1,
      );
      let obj2 = {
        text: stateFromStoresObject.text,
        inCall: stateFromStoresObject.inCall,
        accessibilityHint: stateFromStoresObject.accessibilityHint,
        handlePress: react.useCallback(
          _asyncToGenerator(async () => {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
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
                let channel;
                let tmp2;
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    channel = undefined;
                    tmp2 = undefined;
                    const tmp30 = channel;
                    channel = authStore.getChannel(authStore.getDMFromUserId(channel));
                    if (null == channel) {
                      const obj4 = tmp2(c2[8]);
                      c2 = 1;
                      c3 = 1;
                      const obj7 = { value: obj4.ensurePrivateChannel(tmp30), done: false };
                      return obj7;
                    }
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  tmp2 = value;
                  channel = authStore.getChannel(tmp2);
                }
                let isPrivateResult;
                const obj2 = channel;
                if (channel != null) {
                  isPrivateResult = obj2.isPrivate();
                }
                if (isPrivateResult) {
                  const obj3 = tmp2(c2[6])(channel, closure_129_1);
                  obj3.onPress();
                }
                if (closure_129_2 != null) {
                  closure_129_2();
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp24) {
                c3 = 3;
                throw tmp24;
              }
            }
          }),
          items2,
        ),
      };
      items2 = [arg0, arg1, arg2];
      return obj2;
    };
const result = size.fileFinishedImporting("modules/calls/native/usePrivateChannelCall.tsx");

export default tmp2;
