// discord_app/modules/conjure/connection/ConjureWorkerTickets.tsx
import Constants from "../../../Constants.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let url;

function mintTicket() {
  return obj(...arguments);
}
let obj = function _mintTicket() {
  obj = _asyncToGenerator(async (url) => {
    let closure_2;
    let closure_3;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0) => {
      const HTTP = HTTPUtils.HTTP;
      const obj4 = { url, rejectWithError: true };
      await HTTP.post(obj4);
      const body = value.body;
      const obj7 = { ticket: body.ticket, baseUrl: url };
      const obj8 = closure_131_0(closure_131_1[3]);
      const conjureTunnelWorkerOrigin = obj8.getConjureTunnelWorkerOrigin();
      url = conjureTunnelWorkerOrigin;
      if (conjureTunnelWorkerOrigin == null) {
        url = body.url;
      }
      return obj7;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/conjure/connection/ConjureWorkerTickets.tsx");

export const mintWorkerTicket = function mintWorkerTicket(environment) {
  return mintTicket(Endpoints.CONJURE_PROJECT_WS_TICKET(environment));
};
export const mintRemixTicket = function mintRemixTicket(arg0) {
  return mintTicket(Endpoints.CONJURE_PROJECT_REMIX_TICKET(arg0));
};
