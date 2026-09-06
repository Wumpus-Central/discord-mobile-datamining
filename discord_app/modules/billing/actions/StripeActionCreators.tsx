// discord_app/modules/billing/actions/StripeActionCreators.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = async function _createStripeSetupIntent() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let obj1 = closure_0;
          if (closure_0 === undefined) {
            obj1 = {};
          }
          closure_129_0 = obj1;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          const HTTP = closure_130_0(closure_130_1[2]).HTTP;
          const obj3 = {
            url: closure_130_3.BILLING_STRIPE_SETUP_INTENT_SECRET,
            oldFormErrors: true,
            rejectWithError: true,
          };
          const merged = Object.assign(closure_129_0);
          c3 = 2;
          c4 = 1;
          const obj4 = { value: HTTP.post(obj3), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c4 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp14) {
      c4 = tmp;
      throw tmp14;
    }
  }
};
let closure_5 = async function _createSetupIntentForPaymentElements() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let obj1 = closure_0;
          if (closure_0 === undefined) {
            obj1 = {};
          }
          closure_129_0 = obj1;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          const HTTP = closure_130_0(closure_130_1[2]).HTTP;
          const obj3 = {
            url: closure_130_3.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS,
            oldFormErrors: true,
            rejectWithError: true,
            failImmediatelyWhenRateLimited: true,
          };
          const merged = Object.assign(closure_129_0);
          c3 = 2;
          c4 = 1;
          const obj4 = { value: HTTP.post(obj3), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c4 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp14) {
      c4 = tmp;
      throw tmp14;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/actions/StripeActionCreators.tsx");

export const createStripeSetupIntent = function createStripeSetupIntent() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createSetupIntentForPaymentElements = function createSetupIntentForPaymentElements() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
