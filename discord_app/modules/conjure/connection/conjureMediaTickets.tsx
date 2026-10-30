// === Module 10928: conjureMediaTickets ===

// Module 10928 (conjureMediaTickets)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10860 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const map = new Map();
const map1 = new Map();
let result = size.fileFinishedImporting("modules/conjure/connection/conjureMediaTickets.tsx");

export function getMediaTicket(projectId) {
  _require = projectId;
  value = map.get(projectId);
  if (null != value) {
    const _Date = Date;
    if (value.expiresAt > Date.now()) {
      return Promise.resolve(value.ticket);
    }
  }
  value2 = map1.get(projectId);
  if (null != value2) {
    return value2;
  } else {
    const obj2 = require("ConjureWorkerTickets");
    const mintWorkerTicketResult = require("ConjureWorkerTickets").mintWorkerTicket(projectId);
    const cleanupPromise = require("ConjureWorkerTickets").mintWorkerTicket(projectId).then((ticket) => {
      const tmp = (function ticketExpiryMs(ticket) {
        try {
          const _atob = atob;
          const str2 = ticket.split(".")[0];
          const _JSON = JSON;
          const exp = JSON.parse(atob(ticket.split(".")[0].replace(/-/g, "+").replace(/_/g, "/"))).exp;
          let result = null;
          if (typeof exp === "number") {
            const _Number = Number;
            result = null;
            if (Number.isFinite(tmp3)) {
              result = 1000 * tmp3;
            }
          }
          return result;
        } catch (err) {
          return null;
        }
      })(ticket.ticket);
      if (null != tmp) {
        const obj = { ticket, expiresAt: tmp - 30000 };
        let result = map.set(closure_0, obj);
      }
      return ticket;
    }).finally(() => {
      map1.delete(closure_0);
    });
    let result = map1.set(projectId, cleanupPromise);
    return cleanupPromise;
  }
}
export function retireMediaTicket(id) {
  map.delete(id);
  ConjureWorkerTickets.forgetEarlyTicket(id);
}
export function clearMediaTickets() {
  map.clear();
  ConjureWorkerTickets.forgetEarlyTickets();
}