// === Module 945: createErrorCapturingHandler ===

// Module 945 (createErrorCapturingHandler)
import captureError from "captureError" /* 944 */;

require = arg1;
const dependencyMap = arg6;
function createErrorCapturingHandler(apply) {
  closure_0 = arg1;
  closure_1 = arg2;
  try {
    const self = this;
    const applyResult = apply.apply(this, arg3);
    if (applyResult) {
      if (typeof promise === "object") {
        if (typeof promise.then === "function") {
          const resolved = Promise.resolve(applyResult);
          let catchPromise = resolved.catch((arg0) => {
            closure_1_3(arg0, closure_0, closure_1);
            throw arg0;
          });
        }
        return catchPromise;
      }
    }
    catchPromise = applyResult;
  } catch (tmp10) {
    captureHandlerError(tmp10, tmp3, tmp2);
    throw tmp10;
  }
}
function captureHandlerError(name, arg1, tool_name) {
  try {
    const obj = {};
    if ("tool" === arg1) {
      obj.tool_name = tool_name;
      if ("ProtocolValidationError" !== name.name) {
        const message4 = name.message;
        if (!message4.includes("validation")) {
          const message = name.message;
          if (!message.includes("protocol")) {
            if ("ServerTimeoutError" !== name.name) {
              const message2 = name.message;
              if (!message2.includes("timed out")) {
                const message3 = name.message;
                if (!message3.includes("timeout")) {
                  captureError.captureError(name, "tool_execution", obj);
                  const obj3 = captureError;
                }
              }
            }
            captureError.captureError(name, "timeout", obj);
            const obj4 = captureError;
          }
        }
      }
      captureError.captureError(name, "validation", obj);
      const obj5 = captureError;
    } else if ("resource" === arg1) {
      obj.resource_uri = tool_name;
      captureError.captureError(name, "resource_execution", obj);
      const obj2 = captureError;
    } else if ("prompt" === arg1) {
      obj.prompt_name = tool_name;
      captureError.captureError(name, "prompt_execution", obj);
      const obj6 = captureError;
    }
  } catch (err) {
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.wrapAllMCPHandlers = function wrapAllMCPHandlers(arg0) {
  let prompt = "tool";
  prompt(819).fill(arg0, "tool", (arg0) => {
    closure_0 = arg0;
    return function(arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        let call = closure_0.call;
        let items = [self, arg0];
        HermesBuiltin.arraySpread(substr, 2);
        return HermesBuiltin.apply(items, closure_0);
      } else {
        closure_0 = tmp;
        closure_1 = closure_0;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2.call;
            if (typeof call === "unknown") {
              let callResult = tmp3(tmp4, tmp5, tmp6, items);
            } else {
              callResult = call(self, tmp4, tmp5, tmp6, items);
            }
            return callResult;
          } catch (tmp13) {
            if (callback(table[1]).DEBUG_BUILD) {
              const debug = callback(table[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return callback.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
  prompt = "resource";
  const obj = prompt(819);
  prompt(819).fill(arg0, "resource", (arg0) => {
    closure_0 = arg0;
    return function(arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        let call = closure_0.call;
        let items = [self, arg0];
        HermesBuiltin.arraySpread(substr, 2);
        return HermesBuiltin.apply(items, closure_0);
      } else {
        closure_0 = tmp;
        closure_1 = closure_0;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2.call;
            if (typeof call === "unknown") {
              let callResult = tmp3(tmp4, tmp5, tmp6, items);
            } else {
              callResult = call(self, tmp4, tmp5, tmp6, items);
            }
            return callResult;
          } catch (tmp13) {
            if (callback(table[1]).DEBUG_BUILD) {
              const debug = callback(table[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return callback.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
  prompt = "prompt";
  const obj2 = prompt(819);
  prompt(819).fill(arg0, "prompt", (arg0) => {
    closure_0 = arg0;
    return function(arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        let call = closure_0.call;
        let items = [self, arg0];
        HermesBuiltin.arraySpread(substr, 2);
        return HermesBuiltin.apply(items, closure_0);
      } else {
        closure_0 = tmp;
        closure_1 = closure_0;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2.call;
            if (typeof call === "unknown") {
              let callResult = tmp3(tmp4, tmp5, tmp6, items);
            } else {
              callResult = call(self, tmp4, tmp5, tmp6, items);
            }
            return callResult;
          } catch (tmp13) {
            if (callback(table[1]).DEBUG_BUILD) {
              const debug = callback(table[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return callback.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
};
arg5.wrapPromptHandlers = function wrapPromptHandlers(arg0) {
  const prompt = "prompt";
  prompt(819).fill(arg0, "prompt", (arg0) => {
    closure_0 = arg0;
    return function(arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        let call = closure_0.call;
        let items = [self, arg0];
        HermesBuiltin.arraySpread(substr, 2);
        return HermesBuiltin.apply(items, closure_0);
      } else {
        closure_0 = tmp;
        closure_1 = closure_0;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2.call;
            if (typeof call === "unknown") {
              let callResult = tmp3(tmp4, tmp5, tmp6, items);
            } else {
              callResult = call(self, tmp4, tmp5, tmp6, items);
            }
            return callResult;
          } catch (tmp13) {
            if (callback(table[1]).DEBUG_BUILD) {
              const debug = callback(table[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return callback.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
};
arg5.wrapResourceHandlers = function wrapResourceHandlers(arg0) {
  const resource = "resource";
  resource(819).fill(arg0, "resource", (arg0) => {
    closure_0 = arg0;
    return function(arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        let call = closure_0.call;
        let items = [self, arg0];
        HermesBuiltin.arraySpread(substr, 2);
        return HermesBuiltin.apply(items, closure_0);
      } else {
        closure_0 = tmp;
        closure_1 = closure_0;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2.call;
            if (typeof call === "unknown") {
              let callResult = tmp3(tmp4, tmp5, tmp6, items);
            } else {
              callResult = call(self, tmp4, tmp5, tmp6, items);
            }
            return callResult;
          } catch (tmp13) {
            if (callback(table[1]).DEBUG_BUILD) {
              const debug = callback(table[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return callback.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
};
arg5.wrapToolHandlers = function wrapToolHandlers(arg0) {
  const tool = "tool";
  tool(819).fill(arg0, "tool", (arg0) => {
    closure_0 = arg0;
    return function(arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        let call = closure_0.call;
        let items = [self, arg0];
        HermesBuiltin.arraySpread(substr, 2);
        return HermesBuiltin.apply(items, closure_0);
      } else {
        closure_0 = tmp;
        closure_1 = closure_0;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2.call;
            if (typeof call === "unknown") {
              let callResult = tmp3(tmp4, tmp5, tmp6, items);
            } else {
              callResult = call(self, tmp4, tmp5, tmp6, items);
            }
            return callResult;
          } catch (tmp13) {
            if (callback(table[1]).DEBUG_BUILD) {
              const debug = callback(table[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return callback.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
};