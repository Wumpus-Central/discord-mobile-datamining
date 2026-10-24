// === Module 12485: conjureSecretsRequests ===

// Module 12485 (conjureSecretsRequests)
import conjureWorkerFetch from "conjureWorkerFetch" /* 10793 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _submitProjectSecrets(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp2;
            closure_2 = tmp3;
            closure_130_0 = undefined;
            const obj5 = { method: "PUT", json };
            c4 = 1;
            c5 = 1;
            const obj6 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/secrets", obj5), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_130_0 = value;
          if (410 === closure_130_0.status) {
            throw new closure_131_3("secret request expired");
          } else if (closure_130_0.ok) {
            c5 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("secret submission failed (" + closure_130_0.status + ")");
            throw error;
          }
        }
      } catch (tmp23) {
        c5 = tmp;
        throw tmp23;
      }
    }
  })();
};
const prototype = function ConjureSecretRequestExpiredError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
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