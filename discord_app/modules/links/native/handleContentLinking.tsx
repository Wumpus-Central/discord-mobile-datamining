// discord_app/modules/links/native/handleContentLinking.tsx
import transitionTo from "transitionTo";
import { Routes } from "ME";

const require = arg1;
function _handleContentLinking() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = 0;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              c2 = undefined;
              c3 = undefined;
              c4 = undefined;
              ({ guildId: c0, channelId: c1, navigationSettings: c2, messageId: c3, summaryId: c4 } = callback);
              let safe;
              let navigationReplace;
              let c7;
              let waitForConnection;
              let c9;
              let skipMessageFetch;
              c3 = 1;
              c4 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                callback2(c2[3]).popAll();
                safe = c2.safe;
                navigationReplace = c2.navigationReplace;
                let tmp7 = undefined === navigationReplace;
                if (!tmp7) {
                  tmp7 = navigationReplace;
                }
                c7 = tmp7;
                waitForConnection = c2.waitForConnection;
                let tmp11 = undefined === waitForConnection;
                if (!tmp11) {
                  tmp11 = waitForConnection;
                }
                c9 = tmp11;
                skipMessageFetch = c2.skipMessageFetch;
                if (c9) {
                  if (navigationReplace != null) {
                    navigationReplace();
                  }
                  const promise = new Promise((arg0, arg1) => {
                    let closure_0 = arg0;
                    let closure_1 = arg1;
                    function o() {
                      const error = new Error("superseded");
                      return callback2(error);
                    }
                    v1(() => {
                      const o = null;
                      callback();
                    });
                  });
                  c3 = 2;
                  c4 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = promise;
                  return obj2;
                }
                const obj12 = callback2(c2[3]);
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              let tmp31 = null != callback2;
              if (tmp31) {
                tmp31 = null != c4;
              }
              if (tmp31) {
                let obj4 = callback2(c2[6]);
                obj4.setSelectedSummary(callback2, c4);
              }
              c4 = 3;
              return { value: "T", done: null };
            }
            if (safe) {
              obj4 = { navigationReplace: null, openChannel: true, skipMessageFetch: null };
              obj4[0] = c7;
              obj4[2] = skipMessageFetch;
              c3 = 3;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = callback2(c2[4])(safe.CHANNEL(callback, callback2, c3), obj4);
              return obj5;
            } else {
              obj2 = callback(c2[5]);
              const obj6 = { navigationReplace: null, openChannel: true, skipMessageFetch: null };
              obj6[0] = c7;
              obj6[2] = skipMessageFetch;
              obj2.transitionTo(safe.CHANNEL(callback, callback2, c3), obj6);
            }
          }
        } catch (tmp59) {
          c4 = tmp;
          throw tmp59;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _handleContentLinking = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
require("processCallbacks").addPostConnectionCallback;
let c6 = null;
const result = require("ME").fileFinishedImporting("modules/links/native/handleContentLinking.tsx");

export default function handleContentLinking() {
  const self = this;
  const apply = _handleContentLinking.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};