// === Module 12927: ConjureWorkerTickets ===

// Module 12927 (ConjureWorkerTickets)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function mintTicket() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_5 = async function _mintTicket() {
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
    closure_3 = tmp5;
    closure_2 = tmp2;
    const HTTP = HTTPUtils.HTTP;
    await HTTP.post({ url, rejectWithError: true });
    const body = value.body;
    const obj7 = { ticket: body.ticket, baseUrl: null };
    const conjureTunnelWorkerOrigin = closure_131_0(closure_131_1[3]).getConjureTunnelWorkerOrigin();
    url = conjureTunnelWorkerOrigin;
    if (conjureTunnelWorkerOrigin == null) {
      url = body.url;
    }
    obj7.baseUrl = url;
    return obj7;
  })();
};
const Endpoints = fn(1085).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/connection/ConjureWorkerTickets.tsx");

export const mintWorkerTicket = function mintWorkerTicket(projectId) {
  return mintTicket(Endpoints.CONJURE_PROJECT_WS_TICKET(projectId));
};
export const mintRemixTicket = function mintRemixTicket(arg0) {
  return mintTicket(Endpoints.CONJURE_PROJECT_REMIX_TICKET(arg0));
};