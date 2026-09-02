// === Module 16412: mintTicket ===

// Module 16412 (mintTicket)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 673 */;

const require = arg1;
function mintTicket(Endpoints) {
  const self = this;
  const apply = _mintTicket.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _mintTicket() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      closure_3 = tmp5;
      closure_2 = tmp2;
      const HTTP = callback(closure_1_1[2]).HTTP;
      obj1 = { url: null, rejectWithError: true };
      obj1[0] = body;
      yield HTTP.post(obj1);
      body = body.body;
      const obj4 = { ticket: null, baseUrl: null };
      obj4[0] = body.ticket;
      const vibegrationsTunnelWorkerOrigin = body(url[3]).getVibegrationsTunnelWorkerOrigin();
      url = vibegrationsTunnelWorkerOrigin;
      if (vibegrationsTunnelWorkerOrigin == null) {
        url = body.url;
      }
      obj4[1] = url;
      return obj4;
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/vibegrations/lib/VibegrationsWorkerTickets.tsx");

export const mintWorkerTicket = function mintWorkerTicket(closure_0) {
  return mintTicket(Endpoints.VIBEGRATIONS_PROJECT_WS_TICKET(closure_0));
};
export const mintRemixTicket = function mintRemixTicket(closure_0) {
  return mintTicket(Endpoints.VIBEGRATIONS_PROJECT_REMIX_TICKET(closure_0));
};