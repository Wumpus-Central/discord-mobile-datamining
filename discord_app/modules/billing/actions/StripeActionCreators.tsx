// === Module 4935: StripeActionCreators ===

// Module 4935 (StripeActionCreators)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _createStripeSetupIntent() {
  closure_1 = tmp2;
  let obj1 = closure_0;
  if (closure_0 === undefined) {
    obj1 = {};
  }
  closure_129_0 = obj1;
  await "PX_16";
  const HTTP = closure_130_0(closure_130_1[2]).HTTP;
  const merged = Object.assign(closure_129_0);
  await HTTP.post({ url: closure_130_3.BILLING_STRIPE_SETUP_INTENT_SECRET, oldFormErrors: true, rejectWithError: true });
  return value.body;
};
let closure_5 = async function _createSetupIntentForPaymentElements() {
  closure_1 = tmp2;
  let obj1 = closure_0;
  if (closure_0 === undefined) {
    obj1 = {};
  }
  closure_129_0 = obj1;
  await "PX_16";
  const HTTP = closure_130_0(closure_130_1[2]).HTTP;
  const merged = Object.assign(closure_129_0);
  await HTTP.post({ url: closure_130_3.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS, oldFormErrors: true, rejectWithError: true, failImmediatelyWhenRateLimited: true });
  return value.body;
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