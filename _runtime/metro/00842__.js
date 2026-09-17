// === Module 842: ? ===

// Module 842
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import captureCheckIn from "captureCheckIn" /* 734 */;
import asString from "asString" /* 843 */;
import LANGCHAIN_INTEGRATION_NAME from "LANGCHAIN_INTEGRATION_NAME" /* 844 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createLangChainCallbackHandler = function createLangChainCallbackHandler() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag2;
  let map;
  let exitSpan;
  let obj2;
  let flag = obj.recordInputs;
  if (flag == null) {
    flag = false;
  }
  flag2 = obj.recordOutputs;
  if (flag2 == null) {
    flag2 = false;
  }
  map = new Map();
  exitSpan = function exitSpan(arg0) {

  };
  obj2 = {
    lc_serializable: false,
    lc_namespace: ["langchain_core", "callbacks", "sentry"],
    lc_secrets: "r",
    lc_attributes: "accessible",
    lc_aliases: "ty",
    lc_serializable_keys: "color",
    lc_id: ["langchain_core", "callbacks", "sentry"],
    lc_kwargs: {},
    name: false,
    ignoreLLM: false,
    ignoreChain: false,
    ignoreAgent: false,
    ignoreRetriever: false,
    ignoreCustomEvent: false,
    raiseError: true,
    awaitHandlers: null,
    handleLLMStart(kwargs, arr, arg2, arg3, arg4, invocation_params, ls_provider, arg7) {
      closure_0 = arg2;
      const invocationParams = flag(flag2[0]).getInvocationParams(invocation_params);
      const obj = flag(flag2[0]);
      let result = flag(flag2[0]).extractLLMRequestAttributes(kwargs, arr, closure_0, invocationParams, ls_provider);
      obj2 = flag(flag2[0]);
      const obj4 = { name: "" + result[flag(undefined, flag2[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[flag(undefined, flag2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.pipeline", attributes: null };
      const obj5 = {};
      const merged = Object.assign(result);
      obj5[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.pipeline";
      obj4.attributes = obj5;
      flag(flag2[2]).startSpanManual(obj4, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
    },
    handleChatModelStart(id, arr, arg2, arg3, arg4, invocation_params, ls_provider, arg7) {
      closure_0 = arg2;
      const invocationParams = flag(flag2[0]).getInvocationParams(invocation_params);
      const obj = flag(flag2[0]);
      let result = flag(flag2[0]).extractChatModelRequestAttributes(id, arr, closure_0, invocationParams, ls_provider);
      obj2 = flag(flag2[0]);
      const obj4 = { name: "" + result[flag(undefined, flag2[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[flag(undefined, flag2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.chat", attributes: null };
      const obj5 = {};
      const merged = Object.assign(result);
      obj5[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.chat";
      obj4.attributes = obj5;
      flag(flag2[2]).startSpanManual(obj4, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
    },
    handleLLMEnd(generations, arg1, arg2, arg3, arg4) {
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        const result = asString.extractLlmResponseAttributes(generations, flag2);
        if (result) {
          value.setAttributes(result);
        }
        if (typeof exitSpan === "function") {
          value2 = map.get(arg1);
          let isRecordingResult1;
          if (value2 != null) {
            isRecordingResult1 = value2.isRecording();
          }
          if (isRecordingResult1) {
            value2.end();
            map.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    handleLLMError(error, arg1) {
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "llm_error" };
        value.setStatus(obj2);
        if (typeof exitSpan === "function") {
          value2 = map.get(arg1);
          let isRecordingResult1;
          if (value2 != null) {
            isRecordingResult1 = value2.isRecording();
          }
          if (isRecordingResult1) {
            value2.end();
            map.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const obj3 = { mechanism: null };
      const obj5 = captureCheckIn;
      obj3.mechanism = { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".llm_error_handler" };
      obj5.captureException(error, obj3);
      const obj4 = { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".llm_error_handler" };
    },
    handleChainStart(name, arg1, arg2, arg3) {
      closure_0 = arg2;
      const obj = { [closure_1_0(closure_1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.langchain", "langchain.chain.name": name.name || "unknown_chain" };
      if (closure_0) {
        const _JSON = JSON;
        obj["langchain.chain.inputs"] = JSON.stringify(arg1);
      }
      obj2 = { name: "chain " + name.name || "unknown_chain", op: "gen_ai.invoke_agent", attributes: null };
      const obj3 = {};
      const merged = Object.assign(obj);
      obj3[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.invoke_agent";
      obj2.attributes = obj3;
      flag(flag2[2]).startSpanManual(obj2, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
      const tmp2Result = flag(flag2[2]);
    },
    handleChainEnd(arg0, arg1) {
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        if (flag2) {
          obj2 = { "langchain.chain.outputs": null };
          const _JSON = JSON;
          obj2["langchain.chain.outputs"] = JSON.stringify(arg0);
          value.setAttributes(obj2);
        }
        if (typeof exitSpan === "function") {
          value2 = map.get(arg1);
          let isRecordingResult1;
          if (value2 != null) {
            isRecordingResult1 = value2.isRecording();
          }
          if (isRecordingResult1) {
            value2.end();
            map.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    handleChainError(error, arg1) {
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "chain_error" };
        value.setStatus(obj2);
        if (typeof exitSpan === "function") {
          value2 = map.get(arg1);
          let isRecordingResult1;
          if (value2 != null) {
            isRecordingResult1 = value2.isRecording();
          }
          if (isRecordingResult1) {
            value2.end();
            map.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const obj3 = { mechanism: null };
      const obj5 = captureCheckIn;
      obj3.mechanism = { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".chain_error_handler" };
      obj5.captureException(error, obj3);
      const obj4 = { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".chain_error_handler" };
    },
    handleToolStart(name, gen_ai_tool_input, arg2, arg3) {
      closure_0 = arg2;
      const obj = {};
      obj[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = flag(flag2[6]).LANGCHAIN_ORIGIN;
      obj["gen_ai.tool.name"] = name.name || "unknown_tool";
      if (closure_0) {
        obj["gen_ai.tool.input"] = gen_ai_tool_input;
      }
      obj2 = { name: "execute_tool " + name.name || "unknown_tool", op: "gen_ai.execute_tool", attributes: null };
      const obj3 = {};
      const merged = Object.assign(obj);
      obj3[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.execute_tool";
      obj2.attributes = obj3;
      flag(flag2[2]).startSpanManual(obj2, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
      const tmp2Result = flag(flag2[2]);
    },
    handleToolEnd(arg0, arg1) {
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        if (flag2) {
          obj2 = { "gen_ai.tool.output": null };
          const _JSON = JSON;
          obj2["gen_ai.tool.output"] = JSON.stringify(arg0);
          value.setAttributes(obj2);
        }
        if (typeof exitSpan === "function") {
          value2 = map.get(arg1);
          let isRecordingResult1;
          if (value2 != null) {
            isRecordingResult1 = value2.isRecording();
          }
          if (isRecordingResult1) {
            value2.end();
            map.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    handleToolError(error, arg1) {
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "tool_error" };
        value.setStatus(obj2);
        if (typeof exitSpan === "function") {
          value2 = map.get(arg1);
          let isRecordingResult1;
          if (value2 != null) {
            isRecordingResult1 = value2.isRecording();
          }
          if (isRecordingResult1) {
            value2.end();
            map.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const obj3 = { mechanism: null };
      const obj5 = captureCheckIn;
      obj3.mechanism = { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".tool_error_handler" };
      obj5.captureException(error, obj3);
      const obj4 = { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".tool_error_handler" };
    },
    copy() {
      return obj2;
    },
    toJSON() {
      return { lc: 1, type: "not_implemented", id: obj2.lc_id };
    },
    toJSONNotImplemented() {
      return { lc: 1, type: "not_implemented", id: obj2.lc_id };
    }
  };
  return obj2;
};