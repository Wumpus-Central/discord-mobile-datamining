// === Module 13836: networkAwareRetry ===

// Module 13836 (networkAwareRetry)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
let closure_5 = async function _networkAwareRetry(arg0) {
  if (1 === tmp7) {
    if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c7 = 3;
      let obj1 = { value, done: true };
      return obj1;
    } else {
      const id = closure_131_4.getId();
      closure_130_3 = 0;
      if (closure_130_3 >= closure_130_1) {
        const _Error2 = Error;
        const error = new Error("Unreachable code in networkAwareRetry");
        throw error;
      }
    }
  } else if (2 === tmp7) {
    c5 = 0;
    closure_130_4 = closure_4;
    if (closure_130_3 + 1 >= closure_130_1) {
      throw closure_130_4;
    } else {
      let obj6 = closure_131_0(closure_131_2[2]);
      c6 = 4;
      c7 = 1;
      return { value: obj6.timeoutPromise(2000 * (closure_130_3 + 1)), done: false };
    }
  } else if (3 === tmp7) {
    if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 0;
      c7 = 3;
      return { value, done: true };
    } else {
      c5 = 0;
      c7 = 3;
      return { value, done: true };
    }
  } else if (4 === tmp7) {
    if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c7 = 3;
      return { value, done: true };
    } else {
      obj1 = closure_131_1(closure_131_2[3]);
      c6 = 5;
      c7 = 1;
      obj6 = { value: obj1.awaitOnline(), done: false };
      return obj6;
    }
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 === 2) {
    c7 = 3;
    return { value, done: true };
  } else if (id !== closure_131_4.getId()) {
    const _Error = Error;
    const error1 = new Error("User changed.");
    throw error1;
  } else {
    closure_130_3 = closure_130_3 + 1;
  }
  await closure_130_0();
  closure_3 = tmp3;
  closure_130_0 = closure_0;
  let num14 = closure_1;
  if (closure_1 === undefined) {
    num14 = 3;
  }
  closure_130_1 = num14;
  return "PX_16";
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/network/networkAwareRetry.tsx");

export default function networkAwareRetry() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};