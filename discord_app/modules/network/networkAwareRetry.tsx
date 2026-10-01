// === Module 13585: networkAwareRetry ===

// Module 13585 (networkAwareRetry)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
let closure_5 = async function _networkAwareRetry(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let num14 = closure_1;
          if (closure_1 === undefined) {
            num14 = 3;
          }
          closure_130_1 = num14;
          let id;
          closure_130_3 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "flex", done: null };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            id = closure_131_4.getId();
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
            c6 = 4;
            c7 = 1;
            const obj6 = { value: closure_131_0(closure_131_2[2]).timeoutPromise(2000 * (closure_130_3 + 1)), done: false };
            return obj6;
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c5 = 0;
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } else if (4 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            c6 = 5;
            c7 = 1;
            const obj11 = { value: closure_131_1(closure_131_2[3]).awaitOnline(), done: false };
            return obj11;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } else if (id !== closure_131_4.getId()) {
          const _Error = Error;
          const error1 = new Error("User changed.");
          throw error1;
        } else {
          closure_130_3 = closure_130_3 + 1;
        }
        c5 = 1;
        c6 = 3;
        c7 = 1;
        const obj12 = { value: closure_130_0(), done: false };
        return obj12;
      }
    } catch (tmp47) {
      closure_4 = tmp47;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp47;
      } else {
        c6 = tmp;
      }
    }
  }
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