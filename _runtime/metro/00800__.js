// === Module 800: ? ===

// Module 800
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakSet = new WeakSet();

export const wrapMcpServerWithSentry = function wrapMcpServerWithSentry(arg0, recordInputs) {
  let obj = weakSet;
  if (weakSet.has(arg0)) {
    return arg0;
  } else {
    if (obj2.validateMcpServerInstance(arg0)) {
      let tmpResult = tmp(713);
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
      obj = { recordInputs, recordOutputs: null };
      let recordOutputs;
      if (recordInputs != null) {
        recordOutputs = recordInputs.recordOutputs;
      }
      if (recordOutputs == null) {
        recordOutputs = BooleanResult;
      }
      obj.recordOutputs = recordOutputs;
      tmpResult = tmp(687);
      tmpResult.fill(arg0, "connect", (arg0) => {
        closure_0 = asyncGeneratorStep(async function(arg0) {
          const self = this;
          closure_1 = arg0;
          closure_2 = [...arguments].slice();
          c6 = 0;
          c7 = 0;
          const iter = (async (arg0) => {
            closure_5 = self;
            closure_4 = self;
            closure_3 = tmp2;
            closure_131_0 = closure_1;
            closure_131_1 = closure_2;
            await "PX_16";
            const call = self.call;
            const items = [closure_5, closure_131_0];
            HermesBuiltin.arraySpread(closure_131_1, 2);
            await HermesBuiltin.apply(items, self);
            closure_131_2 = value;
            const result = obj(802).wrapTransportOnMessage(closure_131_0, closure_0);
            obj(802).wrapTransportSend(closure_131_0, closure_0);
            obj(802).wrapTransportOnClose(closure_131_0);
            obj(802).wrapTransportError(closure_131_0);
            return closure_131_2;
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
      tmp(813).wrapAllMCPHandlers(arg0);
      obj.add(arg0);
      return arg0;
    } else {
      return arg0;
    }
    obj2 = obj(801);
  }
};