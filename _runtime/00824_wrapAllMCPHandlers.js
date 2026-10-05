// _runtime/00824_wrapAllMCPHandlers.js
import captureError from "00823_captureError.js";

function createErrorCapturingHandler(apply, arg1, tool_name, arg3) {
  let closure_0 = arg1;
  let closure_1 = tool_name;
  try {
    const self = this;
    const applyResult = apply.apply(this, arg3);
    if (applyResult) {
      if (typeof applyResult === "object") {
        let catchPromise;
        if (typeof applyResult.then === "function") {
          const resolved = Promise.resolve(applyResult);
          catchPromise = resolved.catch((error) => {
            captureHandlerError(error, closure_0, tool_name);
            throw error;
          });
        }
        return catchPromise;
      }
    }
    catchPromise = applyResult;
  } catch (tmp7) {
    captureHandlerError(tmp7, arg1, tool_name);
    throw tmp7;
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
                  const obj3 = captureError;
                  obj3.captureError(name, "tool_execution", obj);
                }
              }
            }
            const obj4 = captureError;
            obj4.captureError(name, "timeout", obj);
          }
        }
      }
      const obj5 = captureError;
      obj5.captureError(name, "validation", obj);
    } else if ("resource" === arg1) {
      obj.resource_uri = tool_name;
      const obj2 = captureError;
      obj2.captureError(name, "resource_execution", obj);
    } else if ("prompt" === arg1) {
      obj.prompt_name = tool_name;
      const obj6 = captureError;
      obj6.captureError(name, "prompt_execution", obj);
    }
  } catch (err) {}
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const wrapAllMCPHandlers = function wrapAllMCPHandlers(arg0) {
  const tool = "tool";
  const obj = tool(698);
  obj.fill(arg0, "tool", (arg0) => {
    let closure_0 = arg0;
    return function (arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        const call = closure_0.call;
        let items = [self, arg0];
        const tmp5 = substr;
        HermesBuiltin.arraySpread(items, substr, 2);
        return HermesBuiltin.apply(call, items, closure_0);
      } else {
        closure_0 = tmp2;
        let closure_1 = prompt;
        let closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0];
        items1[HermesBuiltin.arraySpread(items1, substr.slice(0, -1), 2)] = function () {
          const self = this;
          const items = [...arguments];
          try {
            return closure_2_2.call(self, closure_0, closure_1, closure_2, items);
          } catch (tmp5) {
            if (closure_2_0(closure_2_1[1]).DEBUG_BUILD) {
              const debug = closure_2_0(closure_2_1[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp5);
            }
            return closure_0.apply(self, items);
          }
        };
        return HermesBuiltin.apply(call2, items1, closure_0);
      }
    };
  });
  const resource = "resource";
  const obj2 = tool(698);
  obj2.fill(arg0, "resource", (arg0) => {
    let closure_0 = arg0;
    return function (arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        const call = closure_0.call;
        let items = [self, arg0];
        const tmp5 = substr;
        HermesBuiltin.arraySpread(items, substr, 2);
        return HermesBuiltin.apply(call, items, closure_0);
      } else {
        closure_0 = tmp2;
        let closure_1 = prompt;
        let closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0];
        items1[HermesBuiltin.arraySpread(items1, substr.slice(0, -1), 2)] = function () {
          const self = this;
          const items = [...arguments];
          try {
            return closure_2_2.call(self, closure_0, closure_1, closure_2, items);
          } catch (tmp5) {
            if (closure_2_0(closure_2_1[1]).DEBUG_BUILD) {
              const debug = closure_2_0(closure_2_1[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp5);
            }
            return closure_0.apply(self, items);
          }
        };
        return HermesBuiltin.apply(call2, items1, closure_0);
      }
    };
  });
  const prompt = "prompt";
  const obj3 = tool(698);
  obj3.fill(arg0, "prompt", (arg0) => {
    let closure_0 = arg0;
    return function (arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        const call = closure_0.call;
        let items = [self, arg0];
        const tmp5 = substr;
        HermesBuiltin.arraySpread(items, substr, 2);
        return HermesBuiltin.apply(call, items, closure_0);
      } else {
        closure_0 = tmp2;
        let closure_1 = prompt;
        let closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0];
        items1[HermesBuiltin.arraySpread(items1, substr.slice(0, -1), 2)] = function () {
          const self = this;
          const items = [...arguments];
          try {
            return closure_2_2.call(self, closure_0, closure_1, closure_2, items);
          } catch (tmp5) {
            if (closure_2_0(closure_2_1[1]).DEBUG_BUILD) {
              const debug = closure_2_0(closure_2_1[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp5);
            }
            return closure_0.apply(self, items);
          }
        };
        return HermesBuiltin.apply(call2, items1, closure_0);
      }
    };
  });
};
export const wrapPromptHandlers = function wrapPromptHandlers(arg0) {
  const prompt = "prompt";
  const obj = prompt(698);
  obj.fill(arg0, "prompt", (arg0) => {
    let closure_0 = arg0;
    return function (arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        const call = closure_0.call;
        let items = [self, arg0];
        const tmp5 = substr;
        HermesBuiltin.arraySpread(items, substr, 2);
        return HermesBuiltin.apply(call, items, closure_0);
      } else {
        closure_0 = tmp2;
        let closure_1 = prompt;
        let closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0];
        items1[HermesBuiltin.arraySpread(items1, substr.slice(0, -1), 2)] = function () {
          const self = this;
          const items = [...arguments];
          try {
            return closure_2_2.call(self, closure_0, closure_1, closure_2, items);
          } catch (tmp5) {
            if (closure_2_0(closure_2_1[1]).DEBUG_BUILD) {
              const debug = closure_2_0(closure_2_1[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp5);
            }
            return closure_0.apply(self, items);
          }
        };
        return HermesBuiltin.apply(call2, items1, closure_0);
      }
    };
  });
};
export const wrapResourceHandlers = function wrapResourceHandlers(arg0) {
  const resource = "resource";
  const obj = resource(698);
  obj.fill(arg0, "resource", (arg0) => {
    let closure_0 = arg0;
    return function (arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        const call = closure_0.call;
        let items = [self, arg0];
        const tmp5 = substr;
        HermesBuiltin.arraySpread(items, substr, 2);
        return HermesBuiltin.apply(call, items, closure_0);
      } else {
        closure_0 = tmp2;
        let closure_1 = prompt;
        let closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0];
        items1[HermesBuiltin.arraySpread(items1, substr.slice(0, -1), 2)] = function () {
          const self = this;
          const items = [...arguments];
          try {
            return closure_2_2.call(self, closure_0, closure_1, closure_2, items);
          } catch (tmp5) {
            if (closure_2_0(closure_2_1[1]).DEBUG_BUILD) {
              const debug = closure_2_0(closure_2_1[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp5);
            }
            return closure_0.apply(self, items);
          }
        };
        return HermesBuiltin.apply(call2, items1, closure_0);
      }
    };
  });
};
export const wrapToolHandlers = function wrapToolHandlers(arg0) {
  const tool = "tool";
  const obj = tool(698);
  obj.fill(arg0, "tool", (arg0) => {
    let closure_0 = arg0;
    return function (arg0) {
      let self = this;
      const substr = [...arguments].slice();
      if (typeof substr[substr.length - 1] !== "function") {
        const call = closure_0.call;
        let items = [self, arg0];
        const tmp5 = substr;
        HermesBuiltin.arraySpread(items, substr, 2);
        return HermesBuiltin.apply(call, items, closure_0);
      } else {
        closure_0 = tmp2;
        let closure_1 = prompt;
        let closure_2 = arg0;
        const call2 = closure_0.call;
        const items1 = [self, arg0];
        items1[HermesBuiltin.arraySpread(items1, substr.slice(0, -1), 2)] = function () {
          const self = this;
          const items = [...arguments];
          try {
            return closure_2_2.call(self, closure_0, closure_1, closure_2, items);
          } catch (tmp5) {
            if (closure_2_0(closure_2_1[1]).DEBUG_BUILD) {
              const debug = closure_2_0(closure_2_1[2]).debug;
              debug.warn("MCP handler wrapping failed:", tmp5);
            }
            return closure_0.apply(self, items);
          }
        };
        return HermesBuiltin.apply(call2, items1, closure_0);
      }
    };
  });
};
