// discord_app/modules/billing/actions/StripeActionCreators.tsx
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../../Constants.tsx";

const require = arg1;
function _createStripeSetupIntent() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_2 = tmp5;
              const table = tmp2;
              obj1 = undefined;
              if (obj1 === undefined) {
                obj1 = {};
              }
              constants = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              const HTTP = obj1(table[2]).HTTP;
              const obj3 = { url: null, oldFormErrors: true, rejectWithError: true };
              obj3[0] = constants.BILLING_STRIPE_SETUP_INTENT_SECRET;
              const merged = Object.assign(obj1);
              constants = 2;
              c4 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj3);
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp14) {
          c4 = tmp;
          throw tmp14;
        }
      }
    })();
    iter.next();
    return iter;
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
function _createSetupIntentForPaymentElements() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_2 = tmp5;
              const table = tmp2;
              obj1 = undefined;
              if (obj1 === undefined) {
                obj1 = {};
              }
              constants = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              const HTTP = obj1(table[2]).HTTP;
              const obj3 = { url: null, oldFormErrors: true, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              obj3[0] = constants.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS;
              const merged = Object.assign(obj1);
              constants = 2;
              c4 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj3);
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp14) {
          c4 = tmp;
          throw tmp14;
        }
      }
    })();
    iter.next();
    return iter;
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
const result = require("set").fileFinishedImporting("modules/billing/actions/StripeActionCreators.tsx");

export const createStripeSetupIntent = function createStripeSetupIntent() {
  const self = this;
  const apply = _createStripeSetupIntent.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createSetupIntentForPaymentElements = function createSetupIntentForPaymentElements() {
  const self = this;
  const apply = _createSetupIntentForPaymentElements.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};