// === Module 12562: conjureSendToProject ===

// Module 12562 (conjureSendToProject)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10860 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _sendConjureMessageToProject(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const ticket = tmp3;
          closure_3 = tmp7;
          closure_131_0 = closure_1;
          closure_131_1 = closure_2;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          let ticket2;
          let baseUrl;
          closure_131_6 = undefined;
          c7 = 1;
          c8 = 1;
          const obj5 = { value: ConjureWorkerTickets.mintWorkerTicket(closure_0), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_131_3 = value;
          ticket2 = closure_131_3.ticket;
          baseUrl = closure_131_3.baseUrl;
          const conjureWebSocket = new closure_132_0(closure_132_1[2]).ConjureWebSocket();
          closure_131_6 = conjureWebSocket;
          c6 = 1;
          const promise = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            const timeout = setTimeout(() => {
              const error = new Error("Timed out sending the message");
              return closure_1(error);
            }, 20000);
            closure_6.open({
              url,
              ticket,
              onEvent(type) {
                if ("hello" === type.type) {
                  try {
                    closure_2_6.sendUserMessage(closure_2_0, closure_2_1);
                  } catch (tmp19) {
                    closure_1(tmp19);
                  }
                } else {
                  if ("user_message" === type.type) {
                    if (type.nonce === closure_2_1) {
                      closure_0();
                    }
                  }
                  let tmp2 = "step" === type.type;
                  if (tmp2) {
                    tmp2 = "turn_result" === type.kind;
                  }
                  if (tmp2) {
                    tmp2 = "error" === type.result;
                  }
                  if (tmp2) {
                    tmp2 = null == type.turn_id;
                  }
                  if (tmp2) {
                    let str4 = type.summary;
                    if (str4 == null) {
                      str4 = "The message was refused";
                    }
                    const error = new Error(str4);
                    closure_1(error);
                  }
                }
              },
              onClose() {
                const error = new Error("Connection closed before the message was stored");
                return closure_1(error);
              }
            });
          });
          c7 = 3;
          c8 = 1;
          const obj7 = { value: promise, done: false };
          return obj7;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        const _clearTimeout3 = clearTimeout;
        clearTimeout(closure_131_2);
        closure_131_6.close();
        throw url;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        const _clearTimeout2 = clearTimeout;
        clearTimeout(closure_131_2);
        closure_131_6.close();
        c8 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c6 = 0;
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_131_2);
        closure_131_6.close();
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp31) {
      url = tmp31;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp31;
      } else {
        c7 = tmp;
      }
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/connection/conjureSendToProject.tsx");

export function sendConjureMessageToProject() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}