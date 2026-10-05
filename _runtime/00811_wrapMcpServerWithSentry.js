// _runtime/00811_wrapMcpServerWithSentry.js
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

let _self, closure_3, closure_4, closure_5;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakSet = new WeakSet();

export const wrapMcpServerWithSentry = function wrapMcpServerWithSentry(arg0, recordInputs) {
  let obj3;
  let recordOutputs;
  if (weakSet.has(arg0)) {
    return arg0;
  } else {
    const tmp = obj3;
    const obj2 = obj3(812);
    if (obj2.validateMcpServerInstance(arg0)) {
      const tmpResult = tmp(724);
      const client = tmpResult.getClient();
      const tmp4 = null;
      let sendDefaultPii;
      const _Boolean = Boolean;
      if (client != null) {
        sendDefaultPii = client.getOptions().sendDefaultPii;
      }
      const _BooleanResult = _Boolean(sendDefaultPii);
      recordInputs = undefined;
      if (recordInputs != null) {
        recordInputs = recordInputs.recordInputs;
      }
      if (recordInputs == null) {
        recordInputs = _BooleanResult;
      }
      obj3 = { recordInputs, recordOutputs };
      recordOutputs = undefined;
      if (recordInputs != null) {
        recordOutputs = recordInputs.recordOutputs;
      }
      if (recordOutputs == null) {
        recordOutputs = _BooleanResult;
      }
      const tmpResult3 = tmp(698);
      tmpResult3.fill(arg0, "connect", (arg0) => {
        let closure_0 = _asyncToGenerator(async function (arg0) {
          const self = this;
          let closure_1 = arg0;
          let value = [...arguments].slice();
          let c6 = 0;
          let c7 = 0;
          const iter = (async (arg0) => {
            if (c7 === 2) {
              c7 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                return { value, done: true };
              } else {
                return { value: "IconComponent", done: null };
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
                    return { value, done: true };
                  } else {
                    closure_5 = self;
                    closure_4 = self;
                    closure_3 = tmp;
                    _self = closure_1;
                    closure_1 = value;
                    value = undefined;
                    c6 = 1;
                    c7 = 1;
                    return { value: "Set", done: true };
                  }
                } else if (1 === tmp5) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    return { value, done: true };
                  } else {
                    const call = self.call;
                    const items = [closure_5, _self];
                    HermesBuiltin.arraySpread(items, closure_1, 2);
                    c6 = 2;
                    c7 = 1;
                    const obj5 = { value: HermesBuiltin.apply(call, items, self), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  return { value, done: true };
                } else {
                  const obj7 = _self(closure_3_1[4]);
                  const result = obj7.wrapTransportOnMessage(_self, _self);
                  const obj8 = _self(closure_3_1[4]);
                  obj8.wrapTransportSend(_self, _self);
                  const obj9 = _self(closure_3_1[4]);
                  obj9.wrapTransportOnClose(_self);
                  const obj10 = _self(closure_3_1[4]);
                  obj10.wrapTransportError(_self);
                  c7 = 3;
                  return { value, done: true };
                }
              } catch (tmp21) {
                c7 = 3;
                throw tmp21;
              }
            }
          })();
          iter.next();
          return iter;
        });
        return function (arg0) {
          return closure_0(...arguments);
        };
      });
      const tmpResult4 = tmp(824);
      tmpResult4.wrapAllMCPHandlers(arg0);
      weakSet.add(arg0);
      return arg0;
    } else {
      return arg0;
    }
  }
};
