// discord_app/modules/conjure/connection/ConjureWorkerTickets.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import conjureLocalDev from "conjureLocalDev.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function mintTicket() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _mintTicket() {
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    closure_1 = workerTicket;
    const HTTP = HTTPUtils.HTTP;
    await HTTP.post({ url, rejectWithError: true });
    return closure_1(value.body);
  })();
};
function workerTicket(ticket) {
  const obj = { ticket: ticket.ticket, baseUrl: null };
  let url = conjureLocalDev.getConjureTunnelWorkerOrigin();
  if (url == null) {
    url = ticket.url;
  }
  obj.baseUrl = url;
  return obj;
}
const Endpoints = fn(1084).Endpoints;
const map = new Map();
let closure_5 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/connection/ConjureWorkerTickets.tsx");

export function rememberCreatedProjectTicket(id, ws_ticket) {
  const obj = { ticket: ws_ticket.ticket, baseUrl: null };
  let url = conjureLocalDev.getConjureTunnelWorkerOrigin();
  if (url == null) {
    url = ws_ticket.url;
  }
  obj.baseUrl = url;
  const result = map.set(id, { ticket: Promise.resolve(obj), until: Date.now() + 30000 });
  const obj3 = { ticket: Promise.resolve(obj), until: Date.now() + 30000 };
}
export function prefetchWorkerTicket(projectId) {
  closure_0 = projectId;
  const timestamp = Date.now();
  value = map.get(projectId);
  if (null == value) {
    let arr = closure_5;
    if (closure_5.length > 0) {
      arr = closure_5;
      if (timestamp - closure_5[0] > 60000) {
        closure_5.shift();
        arr = closure_5;
        while (closure_5.length > 0) {
          arr = closure_5;
          if (timestamp - closure_5[0] <= 60000) {
            break;
          }
        }
      }
    }
    if (arr.length < 5) {
      arr.push(timestamp);
      const promise = mintTicket(Endpoints.CONJURE_PROJECT_WS_TICKET(projectId));
      const obj = { ticket: promise, until: null };
      const _Date = Date;
      obj.until = Date.now() + 30000;
      const result = map.set(projectId, obj);
      promise.catch(() => {
        if (map.get(closure_0) === map) {
          map.delete(closure_0);
        }
      });
    }
  }
}
export function forgetEarlyTicket(id) {
  map.delete(id);
}
export function forgetEarlyTickets() {
  map.clear();
}
export function mintWorkerTicket(projectId) {
  value = map.get(projectId);
  if (null != value) {
    const _Date = Date;
    if (value.until > Date.now()) {
      let ticket = value.ticket;
    }
    return ticket;
  }
  map.delete(projectId);
  ticket = mintTicket(Endpoints.CONJURE_PROJECT_WS_TICKET(projectId));
}
export function mintRemixTicket(id) {
  return mintTicket(Endpoints.CONJURE_PROJECT_REMIX_TICKET(id));
}
