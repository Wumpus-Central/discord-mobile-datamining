// === Module 10794: conjureWorkerFetch ===

// Module 10794 (conjureWorkerFetch)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_3 = async function _fetchConjureWorker(arg0) {
  closure_134_0 = closure_0;
  closure_134_1 = closure_1;
  let obj6 = closure_2;
  if (closure_2 === undefined) {
    obj6 = {};
  }
  ({ query: closure_134_2, json: closure_134_3, headers: closure_134_4 } = obj6);
  closure_134_5 = Object.assign(obj6, Object.assign({ query: 0, json: 0, headers: 0 }));
  closure_134_6 = function send(ticket) {
    const merged = Object.assign(closure_1_2);
    const uRLSearchParams = new URLSearchParams({ ticket: ticket.ticket });
    const combined = "" + ticket.baseUrl + closure_1_1 + "?" + uRLSearchParams;
    if (undefined === closure_1_3) {
      const _fetch2 = fetch;
      const obj2 = {};
      const merged1 = Object.assign(closure_1_5);
      obj2.headers = headers;
      let response = fetch(combined, obj2);
    } else {
      const _fetch = fetch;
      const obj3 = {};
      const merged2 = Object.assign(closure_1_5);
      const obj4 = {};
      const merged3 = Object.assign(headers);
      obj4["content-type"] = "application/json";
      obj3.headers = obj4;
      const _JSON = JSON;
      obj3.body = JSON.stringify(tmp4);
      response = fetch(combined, obj3);
    }
    return response;
  };
  await "Reflect";
  const headers = closure_134_6;
  await closure_133_0(closure_133_1[1]).getMediaTicket(closure_134_0);
  await headers(value);
  if (3 === tmp4) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      closure_134_7 = value;
      if (401 !== closure_134_7.status) {
        c8 = 3;
      } else {
        closure_133_0(closure_133_1[1]).retireMediaTicket(closure_134_0);
        closure_3 = closure_134_6;
        closure_133_0(closure_133_1[1]);
        c7 = 4;
        c8 = 1;
        return { value: closure_133_0(closure_133_1[1]).getMediaTicket(closure_134_0), done: false };
      }
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_3(value);
  }
  return value;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/connection/conjureWorkerFetch.tsx");

export const fetchConjureWorker = function fetchConjureWorker() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};