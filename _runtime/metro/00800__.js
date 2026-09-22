// === Module 800: ? ===

// Module 800
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakSet = new WeakSet();

export const wrapMcpServerWithSentry = function wrapMcpServerWithSentry(arg0, recordInputs) {
  if (weakSet.has(arg0)) {
    return arg0;
  } else {
    if (obj2.validateMcpServerInstance(arg0)) {
      const client = tmp(713).getClient();
      let sendDefaultPii;
      if (client != null) {
        sendDefaultPii = client.getOptions().sendDefaultPii;
      }
      const BooleanResult = Boolean(sendDefaultPii);
      recordInputs = undefined;
      if (recordInputs != null) {
        recordInputs = recordInputs.recordInputs;
      }
      if (recordInputs == null) {
        recordInputs = BooleanResult;
      }
      let obj3 = { recordInputs, recordOutputs: null };
      let recordOutputs;
      if (recordInputs != null) {
        recordOutputs = recordInputs.recordOutputs;
      }
      if (recordOutputs == null) {
        recordOutputs = BooleanResult;
      }
      obj3.recordOutputs = recordOutputs;
      const tmpResult = tmp(713);
      tmp(687).fill(arg0, "connect", (arg0) => {
        closure_0 = asyncGeneratorStep(async function(arg0) {
          const self = this;
          closure_1 = arg0;
          closure_2 = [...arguments].slice();
          c6 = 0;
          c7 = 0;
          const iter = (async (arg0) => {
            if (c7 === 2) {
              c7 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
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
                    obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_5 = self;
                    closure_4 = self;
                    closure_3 = tmp2;
                    closure_131_0 = closure_1;
                    closure_131_1 = closure_2;
                    closure_131_2 = undefined;
                    c6 = 1;
                    c7 = 1;
                    return { value: "flex", done: true };
                  }
                } else if (1 === tmp5) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    const call = self.call;
                    const items = [closure_5, closure_131_0];
                    HermesBuiltin.arraySpread(closure_131_1, 2);
                    c6 = 2;
                    c7 = 1;
                    const obj5 = { value: HermesBuiltin.apply(items, self), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  closure_131_2 = value;
                  const result = obj3(802).wrapTransportOnMessage(closure_131_0, closure_0);
                  const obj7 = obj3(802);
                  obj3(802).wrapTransportSend(closure_131_0, closure_0);
                  const obj8 = obj3(802);
                  obj3(802).wrapTransportOnClose(closure_131_0);
                  const obj9 = obj3(802);
                  obj3(802).wrapTransportError(closure_131_0);
                  c7 = 3;
                  const obj = { value: closure_131_2, done: true };
                  return obj;
                }
              } catch (tmp21) {
                c7 = tmp;
                throw tmp21;
              }
            }
          })();
          iter.next();
          return iter;
        });
        return function(arg0) {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
      });
      const tmpResult3 = tmp(687);
      tmp(813).wrapAllMCPHandlers(arg0);
      weakSet.add(arg0);
      return arg0;
    } else {
      return arg0;
    }
    obj2 = obj3(801);
  }
};