// === Module 11216: StripeNextAction ===

// Module 11216 (StripeNextAction)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
function openNextActionInstructions(arg0) {
  if (null == arg0) {
    if (typeof prototype === "function") {
      const tmp8 = new arg0("Stripe next action context has no client secret or instructions url", tmp3, arg0);
      tmp8.name = "NextActionInstructionsMissing";
      throw tmp8;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const _window = window;
    window.open(arg0);
  }
}
function handleStripeNextAction() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _handleStripeNextAction(arg0) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else if (null != closure_130_0) {
      c4 = 2;
      c5 = 1;
      return { value: closure_131_0(closure_131_1[1]).getLoadedStripe(closure_130_2), done: false };
    } else {
      closure_131_5(closure_130_1);
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      closure_130_3 = value;
      c4 = 3;
      c5 = 1;
      return { value: closure_130_3.handleNextAction({ clientSecret: closure_130_0 }), done: false };
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 === 2) {
    c5 = 3;
    return { value, done: true };
  } else {
    const error = value.error;
    if (null != error) {
      throw new closure_131_4(error.message);
    }
  }
  await "HermesInternal";
  closure_2 = tmp2;
  ({ client_secret: closure_130_0, instructions_url: closure_130_1 } = closure_0);
  closure_130_2 = closure_1;
  return "Path";
};
let closure_8 = async function _reopenStripeNextAction(arg0) {
  closure_3 = tmp3;
  closure_130_0 = closure_0;
  await handleStripeNextAction(closure_0, closure_1);
  if (1 === tmp7) {
    c5 = 0;
    closure_130_1 = closure_4;
    const ClientBillingError = closure_131_0(closure_131_1[2]).ClientBillingError;
    ClientBillingError.report({ site: "order_signing_reopen_next_action" }, closure_130_1);
    let tmp17 = null != closure_130_0.client_secret;
    if (tmp17) {
      tmp17 = null != closure_130_0.instructions_url;
    }
    if (tmp17) {
      closure_131_5(closure_130_0.instructions_url);
    }
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c5 = 0;
  }
  return value;
};
const prototype = function NextActionInstructionsMissingError() {
  const tmp2 = new tmp("Stripe next action context has no client secret or instructions url", new.target);
  tmp2.name = "NextActionInstructionsMissing";
  return tmp2;
}.prototype;
class prototype extends Error {
}
const prototype2 = function StripeNextActionFailedError(arg0) {
  const tmp2 = new tmp(concat(arg0), concat);
  tmp2.name = "StripeNextActionFailed";
  return tmp2;
}.prototype;
class prototype2 extends Error {
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/StripeNextAction.tsx");

export { handleStripeNextAction };
export function reopenStripeNextAction() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}