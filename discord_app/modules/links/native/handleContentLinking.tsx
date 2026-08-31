// === Module 11147: _handleContentLinking ===

// Module 11147 (_handleContentLinking)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Routes } from "ME" /* 676 */;

const require = arg1;
function _handleContentLinking() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_7 = undefined;
              let waitForConnection;
              closure_9 = undefined;
              let skipMessageFetch;
              c3 = 1;
              c4 = 1;
              return { value: "Object", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj1 = { value: null, done: true };
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
                closure_7 = tmp7;
                waitForConnection = c2.waitForConnection;
                let tmp11 = undefined === waitForConnection;
                if (!tmp11) {
                  tmp11 = waitForConnection;
                }
                closure_9 = tmp11;
                skipMessageFetch = c2.skipMessageFetch;
                if (closure_9) {
                  if (navigationReplace != null) {
                    navigationReplace();
                  }
                  const promise = new Promise((arg0, arg1) => {
                    closure_0 = arg0;
                    closure_1 = arg1;
                    c6 = function o() {
                      error = new Error("superseded");
                      return callback2(error);
                    };
                    v1(() => {
                      c6 = null;
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
              return { value: "HermesInternal", done: "HermesInternal" };
            }
            if (safe) {
              obj4 = { navigationReplace: null, openChannel: true, skipMessageFetch: null };
              obj4[0] = closure_7;
              obj4[2] = skipMessageFetch;
              c3 = 3;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = callback2(c2[4])(safe.CHANNEL(callback, callback2, c3), obj4);
              return obj5;
            } else {
              obj2 = callback(c2[5]);
              const obj6 = { navigationReplace: null, openChannel: true, skipMessageFetch: null };
              obj6[0] = closure_7;
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
  closure_7 = tmp;
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
const result = require("set").fileFinishedImporting("modules/links/native/handleContentLinking.tsx");

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