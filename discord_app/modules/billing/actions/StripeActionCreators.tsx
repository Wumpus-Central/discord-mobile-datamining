// === Module 4842: _createStripeSetupIntent ===

// Module 4842 (_createStripeSetupIntent)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _createStripeSetupIntent() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0, body) {
      const table = tmp2;
      if (obj1 === undefined) {
        obj1 = {};
      }
      yield "PX_16";
      const HTTP = obj1(table[2]).HTTP;
      const obj3 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj3[0] = constants.BILLING_STRIPE_SETUP_INTENT_SECRET;
      const merged = Object.assign(obj1);
      yield HTTP.post(obj3);
      return body.body;
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
      const table = tmp2;
      if (obj1 === undefined) {
        obj1 = {};
      }
      yield "PX_16";
      const HTTP = obj1(table[2]).HTTP;
      const obj3 = { url: null, oldFormErrors: true, rejectWithError: true, failImmediatelyWhenRateLimited: true };
      obj3[0] = constants.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS;
      const merged = Object.assign(obj1);
      yield HTTP.post(obj3);
      return body.body;
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