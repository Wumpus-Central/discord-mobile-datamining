// === Module 12300: conjureRemixConnection ===

// Module 12300 (conjureRemixConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 6939 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 6940 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _acceptRemix(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let flag = closure_2;
          if (closure_2 === undefined) {
            flag = false;
          }
          closure_131_2 = flag;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          closure_131_8 = undefined;
          closure_131_9 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          items = [closure_131_0, closure_132_0(closure_132_2[3]).mintWorkerTicket(closure_131_1)];
          c5 = 2;
          c6 = 1;
          const obj5 = { value: Promise.all(items), done: false };
          return obj5;
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_131_3 = value;
            closure_131_4 = closure_132_3(closure_131_3, 2);
            closure_131_5 = closure_131_4[0];
            closure_131_6 = closure_131_4[1];
            const _URLSearchParams = URLSearchParams;
            const obj8 = { ticket: closure_131_5.ticket };
            const uRLSearchParams = new URLSearchParams(obj8);
            closure_131_7 = uRLSearchParams;
            closure_131_8 = 1;
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_131_9 = value;
            if (null != closure_131_9) {
              if (closure_131_9 < 300) {
                c6 = 3;
                return { value: "accepted", done: true };
              }
            }
            if (409 === closure_131_9) {
              c6 = 3;
              return { value: "unreachable", done: true };
            } else {
              if (null != closure_131_9) {
                if (closure_131_9 < 500) {
                  if (429 !== closure_131_9) {
                    c6 = 3;
                    return { value: "rejected", done: true };
                  }
                }
              }
              if (3 === closure_131_8) {
                c6 = 3;
                return { value: "unreachable", done: true };
              } else {
                const promise = new Promise((arg0) => setTimeout(arg0, 1000));
                c5 = 4;
                c6 = 1;
                const obj10 = { value: promise, done: false };
                return obj10;
              }
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_131_8 = closure_131_8 + 1;
        }
        let _fetch = fetch;
        const _HermesInternal = HermesInternal;
        let then = "" + closure_131_5.baseUrl + "/agent/fork?" + closure_131_7;
        let request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
        let fn = { dest_ticket: closure_131_6.ticket };
        if (closure_131_2) {
          let obj11 = { copy: true };
        } else {
          obj11 = {};
        }
        const merged = Object.assign(obj11);
        request.body = JSON.stringify(fn);
        _fetch = _fetch(then, request);
        then = _fetch.then;
        fn = (status) => status.status;
        request = then(fn, () => null);
        c5 = 3;
        c6 = 1;
      }
    } catch (tmp41) {
      c6 = tmp;
      throw tmp41;
    }
  }
};
let closure_6 = async function _mintUpstreamTicket(arg0) {
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  await ConjureWorkerTickets.mintRemixTicket(closure_2);
  if (1 === tmp6) {
    c6 = 0;
    let status;
    if (tmp24 != null) {
      status = tmp24.status;
    }
    closure_131_3 = status;
    let str = "failed";
    if (403 === closure_131_3) {
      str = "forbidden";
    }
    const result = closure_131_0.sendUpstreamTicketAck(closure_131_1, undefined, str);
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const ticket = value.ticket;
    const result1 = closure_131_0.sendUpstreamTicketAck(closure_131_1, ticket);
    c6 = 0;
  }
  return value;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/conjureRemixConnection.tsx");

export const remixFrameHandlers = {
  request_upstream_ticket(id, ws) {
    !(function mintUpstreamTicket() {
      const self = this;
      const apply = closure_1_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(ws.ws, id.id, id.project_id);
  },
  remix_state(pending, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_REMIX_STATE_SET", projectId: projectId.projectId, pending: pending.pending, failed: pending.failed });
  }
};
export function acceptRemix() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function sendRetryRemix(projectId) {
  return conjureProjectSockets.sendOnConjureSocket(projectId, "retry remix", (sendRetryRemix) => sendRetryRemix.sendRetryRemix());
}