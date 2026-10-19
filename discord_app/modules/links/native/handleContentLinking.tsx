// === Module 9986: handleContentLinking ===

// Module 9986 (handleContentLinking)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_7 = async function _handleContentLinking(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c2 = 0;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ guildId: closure_129_0, channelId: closure_129_1, navigationSettings: closure_129_2, messageId: closure_129_3, summaryId: closure_129_4, conversationId: closure_129_5 } = closure_0);
          let safe;
          let navigationReplace;
          closure_129_8 = undefined;
          let waitForConnection;
          closure_129_10 = undefined;
          let skipMessageFetch;
          closure_129_12 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "test", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_130_1(closure_130_2[3]).popAll();
            safe = closure_129_2.safe;
            navigationReplace = closure_129_2.navigationReplace;
            let tmp7 = undefined === navigationReplace;
            if (!tmp7) {
              tmp7 = navigationReplace;
            }
            closure_129_8 = tmp7;
            waitForConnection = closure_129_2.waitForConnection;
            let tmp11 = undefined === waitForConnection;
            if (!tmp11) {
              tmp11 = waitForConnection;
            }
            closure_129_10 = tmp11;
            skipMessageFetch = closure_129_2.skipMessageFetch;
            closure_129_12 = closure_129_2.isAppStartupNavigation;
            if (closure_129_10) {
              if (closure_130_6 != null) {
                closure_130_6();
              }
              const promise = new Promise((arg0, arg1) => {
                closure_0 = arg0;
                closure_1 = arg1;
                function o() {
                  const error = new Error("superseded");
                  return closure_1(error);
                }
                closure_4(() => {
                  c6 = null;
                  closure_0();
                });
              });
              c3 = 2;
              c4 = 1;
              const obj7 = { value: promise, done: false };
              return obj7;
            }
            const obj13 = closure_130_1(closure_130_2[3]);
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (null != closure_129_1) {
            if (null != closure_129_4) {
              closure_130_1(closure_130_2[6]).setSelectedSummary(closure_129_1, closure_129_4);
              const obj5 = closure_130_1(closure_130_2[6]);
            }
            let tmp42 = null != closure_129_5;
            if (tmp42) {
              tmp42 = null != closure_129_0;
            }
            if (tmp42) {
              tmp42 = null != closure_129_3;
            }
            if (tmp42) {
              const obj9 = { guildId: closure_129_0, channelId: closure_129_1, conversationId: closure_129_5, messageId: closure_129_3 };
              closure_130_1(closure_130_2[7])(obj9);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
        if (safe) {
          const obj10 = { navigationReplace: closure_129_8, openChannel: true, skipMessageFetch, isAppStartupNavigation: closure_129_12 };
          c3 = 3;
          c4 = 1;
          const obj11 = { value: closure_130_1(closure_130_2[4])(closure_130_5.CHANNEL(closure_129_0, closure_129_1, closure_129_3), obj10), done: false };
          return obj11;
        } else {
          const obj12 = { navigationReplace: closure_129_8, openChannel: true, skipMessageFetch, isAppStartupNavigation: closure_129_12 };
          closure_130_0(closure_130_2[5]).transitionTo(closure_130_5.CHANNEL(closure_129_0, closure_129_1, closure_129_3), obj12);
          const obj3 = closure_130_0(closure_130_2[5]);
        }
      }
    } catch (tmp75) {
      c4 = tmp;
      throw tmp75;
    }
  }
};
fn(6807).addPostConnectionCallback;
const Routes = fn(1087).Routes;
let c6 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/links/native/handleContentLinking.tsx");

export default function handleContentLinking() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};