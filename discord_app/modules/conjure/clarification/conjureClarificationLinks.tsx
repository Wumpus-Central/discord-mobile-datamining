// === Module 12181: conjureClarificationLinks ===

// Module 12181 (conjureClarificationLinks)
import conjureWorkerFetch from "conjureWorkerFetch" /* 10972 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _approveCaller(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj5 = { method: "PUT", json: null };
            const obj6 = { caller_project_id };
            obj5.json = obj6;
            c3 = 1;
            c2 = 1;
            const obj7 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/linked-apps", obj5), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
      }
    }
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/conjureClarificationLinks.tsx");

export const sendAfterLinkingApps = function sendAfterLinkingApps(arg0, result1, arg2, fn) {
  closure_0 = arg0;
  closure_1 = arg2;
  const questions = result1.questions;
  const flatMapResult = questions.flatMap((link) => {
    if (true === link.link) {
      let kind;
      if (tmp != null) {
        kind = tmp.kind;
      }
      if ("entities" === kind) {
        const entities = tmp.entities;
        const mapped = entities.map((id) => id.id);
      }
      return [];
    }
  });
  if (0 !== flatMapResult.length) {
    Promise.allSettled(flatMapResult.map((item) => (function approveCaller() {
      const self = this;
      const apply = closure_1_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(item, closure_0))).then(fn);
    const allSettledResult = Promise.allSettled(flatMapResult.map((item) => (function approveCaller() {
      const self = this;
      const apply = closure_1_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(item, closure_0)));
  } else {
    fn();
  }
};