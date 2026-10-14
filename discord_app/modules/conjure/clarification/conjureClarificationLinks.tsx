// === Module 11954: conjureClarificationLinks ===

// Module 11954 (conjureClarificationLinks)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10748 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _approveCaller(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp2;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          let ticket;
          let baseUrl;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: ConjureWorkerTickets.mintWorkerTicket(closure_0), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          baseUrl = closure_130_1.baseUrl;
          const _fetch = fetch;
          const _URLSearchParams = URLSearchParams;
          const obj7 = { ticket };
          const uRLSearchParams = new URLSearchParams(obj7);
          const _HermesInternal = HermesInternal;
          const request = { method: "PUT", body: null };
          const _JSON = JSON;
          const obj8 = { caller_project_id: closure_130_0 };
          const combined = "" + baseUrl + "/agent/linked-apps?" + uRLSearchParams;
          request.body = JSON.stringify(obj8);
          c3 = 2;
          c4 = 1;
          const obj9 = { value: fetch(combined, request), done: false };
          return obj9;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp10) {
      c4 = tmp;
      throw tmp10;
    }
  }
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