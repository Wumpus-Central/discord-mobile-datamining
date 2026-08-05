// discord_app/modules/billing/actions/StripeActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _createStripeSetupIntent() {
  const self = this;
  const tmp = callback(() => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      const table = tmp2;
      if (obj1 === undefined) {
        obj1 = {};
      }
      yield "PX_8";
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
  const _createStripeSetupIntent = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
      const table = tmp2;
      if (obj1 === undefined) {
        obj1 = {};
      }
      yield "PX_8";
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
  const _createSetupIntentForPaymentElements = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/billing/actions/StripeActionCreators.tsx");

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