// discord_app/modules/conjure/connection/conjureWorkerFetch.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_3 = async function _fetchConjureWorker(arg0) {
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
      return { value: "IconComponent", done: null };
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
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let obj4 = closure_2;
          if (closure_2 === undefined) {
            obj4 = {};
          }
          ({ query: closure_131_2, json: closure_131_3, headers: closure_131_4 } = obj4);
          closure_131_5 = Object.assign(obj4, Object.assign({ query: 0, json: 0, headers: 0 }));
          closure_131_6 = undefined;
          let ticket;
          closure_131_8 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "test", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c5 = 2;
          c6 = 1;
          const obj8 = { value: closure_132_0(closure_132_1[1]).mintWorkerTicket(closure_131_0), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_131_6 = value;
        ticket = closure_131_6.ticket;
        const baseUrl = closure_131_6.baseUrl;
        let obj11 = globalThis;
        const _URLSearchParams = URLSearchParams;
        const obj10 = { ticket };
        const merged = Object.assign(closure_131_2);
        const uRLSearchParams = new URLSearchParams(obj10);
        const _HermesInternal = HermesInternal;
        closure_131_8 = "" + baseUrl + closure_131_1 + "?" + uRLSearchParams;
        if (undefined === closure_131_3) {
          obj11 = {};
          const merged1 = Object.assign(closure_131_5);
          obj11.headers = closure_131_4;
          const response = obj11.fetch(closure_131_8, obj11);
        } else {
          const _fetch = fetch;
          const obj = {};
          const merged2 = Object.assign(closure_131_5);
          const obj12 = {};
          const merged3 = Object.assign(closure_131_4);
          obj12["content-type"] = "application/json";
          obj.headers = obj12;
          const _JSON = JSON;
          obj.body = JSON.stringify(closure_131_3);
          const response1 = fetch(closure_131_8, obj);
        }
        c6 = 3;
      }
    } catch (tmp30) {
      c6 = tmp;
      throw tmp30;
    }
  }
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
