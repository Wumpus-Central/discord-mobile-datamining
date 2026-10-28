// === Module 12590: conjureTemplateIntakeRequests ===

// Module 12590 (conjureTemplateIntakeRequests)
import util from "util" /* 1125 */;
import conjureWorkerFetch from "conjureWorkerFetch" /* 10830 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _fetchStoredConjureIntake(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c5 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        if (0 === c3) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp6;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            c4 = 1;
            const obj4 = { query: null };
            const obj5 = { template, locale: util.intl.currentLocale };
            obj4.query = obj5;
            c3 = 2;
            c5 = 1;
            const obj6 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/template-intake", obj4), done: false };
            return obj6;
          }
        } else if (1 === tmp6) {
          c4 = 0;
          c5 = 3;
          return { value: null, done: true };
        } else if (2 === tmp6) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_130_0 = value;
            if (closure_130_0.ok) {
              c3 = 3;
              c5 = 1;
              const obj9 = { value: closure_130_0.json(), done: false };
              return obj9;
            } else {
              c4 = 0;
              c5 = 3;
              return { value: null, done: true };
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_1 = value;
          const _Array = Array;
          let tmp9 = null;
          if (Array.isArray(closure_130_1.questions)) {
            tmp9 = null;
            if (closure_130_1.questions.length > 0) {
              tmp9 = closure_130_1;
            }
          }
          c4 = 0;
          c5 = 3;
          const obj = { value: tmp9, done: true };
          return obj;
        }
      } catch (tmp17) {
        if (tmp3 === c4) {
          c5 = tmp2;
          throw tmp17;
        } else {
          c3 = tmp;
        }
      }
    }
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/templates/conjureTemplateIntakeRequests.tsx");

export const fetchStoredConjureIntake = function fetchStoredConjureIntake() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};