// === Module 9240: _getDisclosures ===

// Module 9240 (_getDisclosures)
import create from "create" /* 9241 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 1074 */;

require = arg1;
function _getDisclosures() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      closure_1 = tmp2;
      const result = c3.APPLICATION_DISCLOSURES(lib);
      const HTTP = lib(closure_1_1[2]).HTTP;
      obj1 = { url: null, retries: 3, rejectWithError: null };
      obj1[0] = result;
      obj1[2] = lib(closure_1_1[2]).rejectWithMigratedError();
      lib = yield HTTP.get(obj1);
      const obj = { disclosures: null, ackedDisclosures: null, allAcked: null };
      obj[0] = lib.body.disclosures;
      obj[1] = lib.body.acked_disclosures;
      obj[2] = lib.body.all_acked;
      return obj;
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _ackDisclosures() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const result = c3.APPLICATION_DISCLOSURES(callback);
              const HTTP = callback(1272).HTTP;
              obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = result;
              const obj2 = { disclosures: null };
              obj2[0] = dependencyMap;
              obj1[1] = obj2;
              obj1[2] = callback(1272).rejectWithMigratedError();
              c3 = 1;
              c2 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          c2 = tmp;
          throw tmp5;
        }
      }
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
let result = require("set").fileFinishedImporting("modules/applications/disclosures.tsx");

export const ApplicationDisclosure = require("create").ApplicationDisclosureType;
export const getDisclosures = function getDisclosures(closure_0) {
  const self = this;
  const apply = _getDisclosures.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const ackDisclosures = function ackDisclosures(closure_0, closure_1_50) {
  const self = this;
  const apply = _ackDisclosures.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getTextForDisclosure = function getTextForDisclosure(toFixed) {
  if (create.ApplicationDisclosureType.IP_LOCATION === toFixed) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["6wPmjo"]);
  } else if (tmp(9241).ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === toFixed) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t["/uOMKZ"]);
  } else {
    return null;
  }
};