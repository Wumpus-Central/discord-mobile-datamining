// === Module 16593: VibegrationsWorkerTickets ===

// Module 16593 (VibegrationsWorkerTickets)
import HTTPUtils from "HTTPUtils" /* 1272 */;
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
    const obj4 = { ticket: body.ticket, baseUrl: null };
    const vibegrationsTunnelWorkerOrigin = closure_131_0(closure_131_1[3]).getVibegrationsTunnelWorkerOrigin();
    url = vibegrationsTunnelWorkerOrigin;
    if (vibegrationsTunnelWorkerOrigin == null) {
      url = body.url;
    }
    obj4.baseUrl = url;
    return obj4;
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsWorkerTickets.tsx");

export const mintWorkerTicket = function mintWorkerTicket(projectId) {
  return mintTicket(Endpoints.VIBEGRATIONS_PROJECT_WS_TICKET(projectId));
};
export const mintRemixTicket = function mintRemixTicket(arg0) {
  return mintTicket(Endpoints.VIBEGRATIONS_PROJECT_REMIX_TICKET(arg0));
};