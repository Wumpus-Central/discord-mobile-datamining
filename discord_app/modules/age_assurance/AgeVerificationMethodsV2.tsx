// === Module 6785: _fetchAgeVerificationMethodsV ===

// Module 6785 (_fetchAgeVerificationMethodsV)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _fetchAgeVerificationMethodsV() {
  const self = this;
  const tmp = callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp2;
            const HTTP = outer1_0(table[2]).HTTP;
            const obj1 = { url: null, rejectWithError: true };
            obj1[0] = outer1_3.AGE_VERIFICATION_METHODS_V2;
            table = 1;
            c2 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          const methods = arg1.body.methods;
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = methods.map((method) => {
            const obj = { method: method.method, vendor: method.vendor, title: method.title, description: method.description, providedBy: null };
            let provided_by = method.provided_by;
            if (provided_by == null) {
              provided_by = null;
            }
            obj[4] = provided_by;
            return obj;
          });
          return obj;
        }
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
      }
    }
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