// _runtime/12780_filters.js
import _mod12773 from "metro/12773__.js";
import _mod12777 from "metro/12777__.js";

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const filters = require("metro/12781__.js").filters;
export const pseudos = require("pseudos").pseudos;
export const aliases = require("aliases").aliases;
export function compilePseudoSelector(acc, type, pseudos, arg3, compileToken) {
  closure_1 = pseudos;
  ({ name, data } = type);
  if (Array.isArray(data)) {
    if (name in _mod12777.subselects) {
      const subselects2 = _mod12777.subselects;
      return subselects2[name](acc, data, pseudos, arg3, compileToken);
    } else {
      const _Error3 = Error;
      const concat3 = "Unknown pseudo-class :".concat;
      const combined = "Unknown pseudo-class :".concat(name, "(");
      const error = new Error(combined.concat(data, ")"));
      throw error;
    }
  } else {
    pseudos = pseudos.pseudos;
    let tmp2;
    if (null !== pseudos) {
      if (undefined !== pseudos) {
        tmp2 = pseudos[name];
      }
    }
    closure_3 = tmp2;
    let tmp3 = tmp2;
    if (typeof tmp2 !== "string") {
      tmp3 = require("aliases").aliases[name];
    }
    if (typeof tmp3 === "string") {
      if (null != data) {
        const _Error2 = Error;
        const concat2 = "Pseudo ".concat;
        const error1 = new Error("Pseudo ".concat(name, " doesn't have any arguments"));
        throw error1;
      } else {
        const parsed = _mod12773.parse(tmp3);
        const subselects = _mod12777.subselects;
        return subselects.is(acc, parsed, pseudos, arg3, compileToken);
      }
    } else if (typeof tmp2 === "function") {
      require("pseudos").verifyPseudoArgs(tmp2, name, data, 1);
      return (arg0) => {
        let tmp = closure_3(arg0, data);
        if (tmp) {
          tmp = acc(arg0);
        }
        return tmp;
      };
    } else if (name in require("metro/12781__.js").filters) {
      const filters = require("metro/12781__.js").filters;
      return filters[name](acc, data, pseudos, arg3);
    } else if (name in require("pseudos").pseudos) {
      const tmp8 = require("pseudos").pseudos[name];
      closure_4 = tmp8;
      require("pseudos").verifyPseudoArgs(tmp8, name, data, 2);
      return (arg0) => {
        let tmp = closure_4(arg0, closure_1, data);
        if (tmp) {
          tmp = acc(arg0);
        }
        return tmp;
      };
    } else {
      const _Error = Error;
      const concat = "Unknown pseudo-class :".concat;
      const error2 = new Error("Unknown pseudo-class :".concat(name));
      throw error2;
    }
  }
}
