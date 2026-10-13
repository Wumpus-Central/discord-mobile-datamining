// discord_app/modules/conjure/remix/conjureRemixConnection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import conjureProjectSockets from "../connection/conjureProjectSockets.tsx";
import ConjureWorkerTickets from "../connection/ConjureWorkerTickets.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _acceptRemix(arg0) {
  closure_2 = tmp2;
  const items = [ConjureWorkerTickets.mintRemixTicket(closure_0)];
  items[1] = ConjureWorkerTickets.mintWorkerTicket(closure_1);
  await Promise.all(items);
  if (1 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      closure_130_0 = value;
      closure_130_1 = closure_131_3(closure_130_0, 2);
      closure_130_2 = closure_130_1[0];
      closure_130_3 = closure_130_1[1];
      const _URLSearchParams = URLSearchParams;
      const uRLSearchParams = new URLSearchParams({ ticket: closure_130_2.ticket });
      closure_130_4 = uRLSearchParams;
      closure_130_5 = 1;
      const _fetch = fetch;
      const _HermesInternal = HermesInternal;
      const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
      const _JSON = JSON;
      const combined = "" + closure_130_2.baseUrl + "/agent/fork?" + closure_130_4;
      request.body = JSON.stringify({ dest_ticket: closure_130_3.ticket });
      const response = fetch(combined, request);
      response.then(
        (status) => status.status,
        () => null,
      );
      c4 = 2;
      c5 = 1;
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      closure_130_6 = value;
      if (null != closure_130_6) {
        if (closure_130_6 < 300) {
          c5 = 3;
          return { value: "accepted", done: true };
        }
      }
      if (409 === closure_130_6) {
        c5 = 3;
        return { value: "unreachable", done: true };
      } else {
        if (null != closure_130_6) {
          if (closure_130_6 < 500) {
            if (429 !== closure_130_6) {
              c5 = 3;
              return { value: "rejected", done: true };
            }
          }
        }
        if (3 === closure_130_5) {
          c5 = 3;
          return { value: "unreachable", done: true };
        } else {
          c4 = 3;
          c5 = 1;
          new Promise((arg0) => setTimeout(arg0, 1000));
          return { value: new Promise((arg0) => setTimeout(arg0, 1000)), done: false };
        }
      }
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_130_5 = closure_130_5 + 1;
  }
  return value;
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
    DispatcherDefault.dispatch({
      type: "CONJURE_REMIX_STATE_SET",
      projectId: projectId.projectId,
      pending: pending.pending,
      failed: pending.failed,
    });
  },
};
export const acceptRemix = function acceptRemix() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendRetryRemix = function sendRetryRemix(arg0) {
  return conjureProjectSockets.sendOnConjureSocket(arg0, "retry remix", (sendRetryRemix) =>
    sendRetryRemix.sendRetryRemix(),
  );
};
