// discord_app/modules/age_assurance/AgeVerificationMethodsV2.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _fetchAgeVerificationMethodsV() {
  const self = this;
  const tmp = callback(function*() {
    let closure_0 = tmp2;
    const HTTP = outer1_0(table[2]).HTTP;
    const obj1 = { url: null, rejectWithError: true };
    obj1[0] = outer1_3.AGE_VERIFICATION_METHODS_V2;
    yield HTTP.get(obj1);
    const methods = arg1.body.methods;
    return methods.map((method) => {
      const obj = { method: method.method, vendor: method.vendor, title: method.title, description: method.description, providedBy: null };
      let provided_by = method.provided_by;
      if (provided_by == null) {
        provided_by = null;
      }
      obj[4] = provided_by;
      return obj;
    });
  });
  const _fetchAgeVerificationMethodsV = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/age_assurance/AgeVerificationMethodsV2.tsx");

export const fetchAgeVerificationMethodsV2 = function fetchAgeVerificationMethodsV2() {
  const self = this;
  const apply = _fetchAgeVerificationMethodsV.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};