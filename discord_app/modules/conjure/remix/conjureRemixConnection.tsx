// === Module 13245: conjureRemixConnection ===

// Module 13245 (conjureRemixConnection)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 13241 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _remixProjectWorkspace(arg0) {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          const items = [ConjureWorkerTickets.mintRemixTicket(closure_0), ];
          items[1] = ConjureWorkerTickets.mintWorkerTicket(closure_1);
          c4 = 1;
          c5 = 1;
          const obj4 = { value: Promise.all(items), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_0 = value;
          closure_130_1 = closure_131_2(closure_130_0, 2);
          closure_130_2 = closure_130_1[0];
          closure_130_3 = closure_130_1[1];
          const _URLSearchParams = URLSearchParams;
          const obj6 = { ticket: closure_130_2.ticket };
          const uRLSearchParams = new URLSearchParams(obj6);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal = HermesInternal;
          const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          const obj7 = { dest_ticket: closure_130_3.ticket };
          const combined = "" + closure_130_2.baseUrl + "/agent/fork?" + closure_130_4;
          request.body = JSON.stringify(obj7);
          c4 = 2;
          c5 = 1;
          const obj8 = { value: fetch(combined, request), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_5 = value;
        if (closure_130_5.ok) {
          c5 = 3;
          return { value: "IconComponent", done: null };
        } else {
          throw new closure_131_4(closure_130_5.status);
        }
      }
    } catch (tmp13) {
      c5 = tmp;
      throw tmp13;
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
const prototype = function ConjureRemixError(status) {
  const tmp3 = new tmp(concat(status, ")"), tmp2, concat);
  tmp3.status = status;
  return tmp3;
}.prototype;
class prototype extends Error {
}
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
  }
};
export const ConjureRemixError = prototype;
export const remixProjectWorkspace = function remixProjectWorkspace() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};