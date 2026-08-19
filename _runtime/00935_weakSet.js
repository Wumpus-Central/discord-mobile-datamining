// === Module 935: weakSet ===

// Module 935 (weakSet)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakSet = new WeakSet();

export const wrapMcpServerWithSentry = function wrapMcpServerWithSentry(arg0, recordInputs) {
  let obj = weakSet;
  if (weakSet.has(arg0)) {
    return arg0;
  } else {
    if (obj2.validateMcpServerInstance(arg0)) {
      let tmpResult = tmp(848);
      const client = tmpResult.getClient();
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
      obj = { recordInputs: null, recordOutputs: null };
      obj[0] = recordInputs;
      let recordOutputs;
      if (recordInputs != null) {
        recordOutputs = recordInputs.recordOutputs;
      }
      if (recordOutputs == null) {
        recordOutputs = BooleanResult;
      }
      obj[1] = recordOutputs;
      tmpResult = tmp(822);
      tmpResult.fill(arg0, "connect", (arg0) => {
        closure_0 = asyncGeneratorStep(function(arg0) {
          const self = this;
          closure_1 = arg0;
          closure_2 = [...arguments].slice();
          c6 = 0;
          c7 = 0;
          const iter = (function*(arg0) {
            if (c7 === 2) {
              c7 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              try {
                c7 = 2;
                if (0 === c6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    closure_5 = closure_0;
                    closure_4 = closure_0;
                    closure_3 = tmp2;
                    closure_0 = closure_1;
                    closure_1 = closure_2;
                    closure_2 = undefined;
                    c6 = 1;
                    c7 = 1;
                    return { value: "ct", done: true };
                  }
                } else if (1 === tmp5) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    obj1 = { value: null, done: true };
                    obj1[0] = arg1;
                    return obj1;
                  } else {
                    const call = self.call;
                    const items = [closure_5, closure_0];
                    HermesBuiltin.arraySpread(closure_1, 2);
                    c6 = 2;
                    c7 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = HermesBuiltin.apply(items, self);
                    return obj2;
                  }
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  closure_2 = arg1;
                  const result = obj(dependencyMap[4]).wrapTransportOnMessage(closure_0, closure_0);
                  const obj7 = obj(dependencyMap[4]);
                  obj(dependencyMap[4]).wrapTransportSend(closure_0, closure_0);
                  const obj8 = obj(dependencyMap[4]);
                  obj(dependencyMap[4]).wrapTransportOnClose(closure_0);
                  const obj9 = obj(dependencyMap[4]);
                  obj(dependencyMap[4]).wrapTransportError(closure_0);
                  c7 = 3;
                  obj = { value: null, done: true };
                  obj[0] = closure_2;
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
      tmp(948).wrapAllMCPHandlers(arg0);
      obj.add(arg0);
      return arg0;
    } else {
      return arg0;
    }
    obj2 = obj(936);
  }
};