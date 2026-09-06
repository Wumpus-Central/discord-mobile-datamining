// === Module 813: ? ===

// Module 813
import captureError from "captureError" /* 812 */;

require = arg1;
const dependencyMap = arg6;
function createErrorCapturingHandler(apply, arg1, arg2, arg3) {
  closure_0 = arg1;
  closure_1 = arg2;
  try {
    const self = this;
    const applyResult = apply.apply(this, arg3);
    if (applyResult) {
      if (typeof promise === "object") {
        if (typeof promise.then === "function") {
          const resolved = Promise.resolve(applyResult);
          let catchPromise = resolved.catch((error) => {
            captureHandlerError(error, closure_0, closure_1);
            throw error;
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
                }
              }
            }
            captureError.captureError(name, "timeout", obj);
          }
        }
      }
      captureError.captureError(name, "validation", obj);
    } else if ("resource" === arg1) {
      obj.resource_uri = tool_name;
      captureError.captureError(name, "resource_execution", obj);
    } else if ("prompt" === arg1) {
      obj.prompt_name = tool_name;
      captureError.captureError(name, "prompt_execution", obj);
    }
  } catch (err) {
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const wrapAllMCPHandlers = function wrapAllMCPHandlers(arg0) {
  const tool = "tool";
  tool(687).fill(arg0, "tool", (arg0) => {
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
        closure_1 = tool;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2_2.call;
            if (typeof call === "unknown") {
              let callResult = closure_2_2(closure_0, closure_1, closure_2, items);
            } else {
              callResult = call(self, closure_0, closure_1, closure_2, items);
            }
            return callResult;
          } catch (tmp13) {
            if (closure_0(dependencyMap[1]).DEBUG_BUILD) {
              const debug = closure_0(dependencyMap[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return closure_0.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
  closure_129_0 = "resource";
  const obj = tool(687);
  tool(687).fill(arg0, "resource", (arg0) => {
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
        closure_1 = tool;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2_2.call;
            if (typeof call === "unknown") {
              let callResult = closure_2_2(closure_0, closure_1, closure_2, items);
            } else {
              callResult = call(self, closure_0, closure_1, closure_2, items);
            }
            return callResult;
          } catch (tmp13) {
            if (closure_0(dependencyMap[1]).DEBUG_BUILD) {
              const debug = closure_0(dependencyMap[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return closure_0.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
  closure_130_0 = "prompt";
  const obj2 = tool(687);
  tool(687).fill(arg0, "prompt", (arg0) => {
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
        closure_1 = tool;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2_2.call;
            if (typeof call === "unknown") {
              let callResult = closure_2_2(closure_0, closure_1, closure_2, items);
            } else {
              callResult = call(self, closure_0, closure_1, closure_2, items);
            }
            return callResult;
          } catch (tmp13) {
            if (closure_0(dependencyMap[1]).DEBUG_BUILD) {
              const debug = closure_0(dependencyMap[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return closure_0.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
};
export const wrapPromptHandlers = function wrapPromptHandlers(arg0) {
  const prompt = "prompt";
  prompt(687).fill(arg0, "prompt", (arg0) => {
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
        closure_1 = tool;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2_2.call;
            if (typeof call === "unknown") {
              let callResult = closure_2_2(closure_0, closure_1, closure_2, items);
            } else {
              callResult = call(self, closure_0, closure_1, closure_2, items);
            }
            return callResult;
          } catch (tmp13) {
            if (closure_0(dependencyMap[1]).DEBUG_BUILD) {
              const debug = closure_0(dependencyMap[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return closure_0.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
};
export const wrapResourceHandlers = function wrapResourceHandlers(arg0) {
  const resource = "resource";
  resource(687).fill(arg0, "resource", (arg0) => {
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
        closure_1 = tool;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2_2.call;
            if (typeof call === "unknown") {
              let callResult = closure_2_2(closure_0, closure_1, closure_2, items);
            } else {
              callResult = call(self, closure_0, closure_1, closure_2, items);
            }
            return callResult;
          } catch (tmp13) {
            if (closure_0(dependencyMap[1]).DEBUG_BUILD) {
              const debug = closure_0(dependencyMap[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return closure_0.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
};
export const wrapToolHandlers = function wrapToolHandlers(arg0) {
  const tool = "tool";
  tool(687).fill(arg0, "tool", (arg0) => {
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
        closure_1 = tool;
        closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0, ];
        items1[HermesBuiltin.arraySpread(substr.slice(0, -1), 2)] = function() {
          const self = this;
          const items = [...arguments];
          try {
            const call = closure_2_2.call;
            if (typeof call === "unknown") {
              let callResult = closure_2_2(closure_0, closure_1, closure_2, items);
            } else {
              callResult = call(self, closure_0, closure_1, closure_2, items);
            }
            return callResult;
          } catch (tmp13) {
            if (closure_0(dependencyMap[1]).DEBUG_BUILD) {
              const debug = closure_0(dependencyMap[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp13);
            }
            return closure_0.apply(tmp2, tmp);
          }
        };
        return HermesBuiltin.apply(items1, closure_0);
      }
    };
  });
};