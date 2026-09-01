// _runtime/00935_weakSet.js
import closure_2 from "00005_asyncGeneratorStep.js";

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
        closure_0 = arg0;
        closure_0 = closure_1_2(function(arg0) {
          const self = this;
          closure_1 = arg0;
          closure_2 = [...arguments].slice();
          c6 = 0;
          c7 = 0;
          const iter = (function*(arg0) {
            closure_5 = closure_0;
            closure_4 = closure_0;
            closure_3 = tmp2;
            closure_0 = closure_1;
            closure_1 = closure_2;
            yield "PX_16";
            const call = self.call;
            const items = [closure_5, closure_0];
            HermesBuiltin.arraySpread(closure_1, 2);
            closure_2 = yield HermesBuiltin.apply(items, self);
            const result = obj(closure_3_1[4]).wrapTransportOnMessage(closure_0, closure_0);
            const obj7 = obj(closure_3_1[4]);
            obj(closure_3_1[4]).wrapTransportSend(closure_0, closure_0);
            const obj8 = obj(closure_3_1[4]);
            obj(closure_3_1[4]).wrapTransportOnClose(closure_0);
            const obj9 = obj(closure_3_1[4]);
            obj(closure_3_1[4]).wrapTransportError(closure_0);
            return closure_2;
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