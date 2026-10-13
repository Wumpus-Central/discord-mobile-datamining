// discord_app/modules/conjure/secrets/conjureSecretsRequests.tsx
import ConjureWorkerTickets from "../connection/ConjureWorkerTickets.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _submitProjectSecrets(arg0) {
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
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          c4 = 1;
          c5 = 1;
          const obj5 = { value: ConjureWorkerTickets.mintWorkerTicket(closure_0), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj7 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj7);
          closure_130_4 = uRLSearchParams;
          const _fetch = fetch;
          const _HermesInternal2 = HermesInternal;
          const request = { method: "PUT", headers: { "content-type": "application/json" }, body: null };
          const _JSON = JSON;
          const combined = "" + baseUrl + "/agent/secrets?" + closure_130_4;
          request.body = JSON.stringify(closure_130_0);
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
        if (410 === closure_130_5.status) {
          throw new closure_131_3("secret request expired");
        } else if (closure_130_5.ok) {
          c5 = 3;
          return { value: "IconComponent", done: null };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("secret submission failed (" + closure_130_5.status + ")");
          throw error;
        }
      }
    } catch (tmp22) {
      c5 = tmp;
      throw tmp22;
    }
  }
};
const prototype = function ConjureSecretRequestExpiredError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/secrets/conjureSecretsRequests.tsx");

export const ConjureSecretRequestExpiredError = prototype;
export const submitProjectSecrets = function submitProjectSecrets() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
