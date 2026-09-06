// === Module 842: ? ===

// Module 842
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import captureCheckIn from "captureCheckIn" /* 734 */;
import asString from "asString" /* 843 */;
import LANGCHAIN_INTEGRATION_NAME from "LANGCHAIN_INTEGRATION_NAME" /* 844 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createLangChainCallbackHandler = function createLangChainCallbackHandler(attributes) {
  if (attributes === undefined) {
    attributes = {};
  }
  let flag2;
  let map;
  let exitSpan;
  attributes = undefined;
  let flag = attributes.recordInputs;
  if (flag == null) {
    flag = false;
  }
  flag2 = attributes.recordOutputs;
  if (flag2 == null) {
    flag2 = false;
  }
  map = new Map();
  exitSpan = function exitSpan(arg0) {

  };
  attributes = {
    lc_serializable: false,
    lc_namespace: ["langchain_core", "callbacks", "sentry"],
    lc_secrets: "r",
    lc_attributes: "accessible",
    lc_aliases: "jsx",
    lc_serializable_keys: "__workletHash",
    lc_id: ["langchain_core", "callbacks", "sentry"],
    lc_kwargs: {},
    name: false,
    ignoreLLM: false,
    ignoreChain: false,
    ignoreAgent: false,
    ignoreRetriever: false,
    ignoreCustomEvent: true,
    raiseError: null,
    awaitHandlers: null,
    handleLLMStart(arg0, arr, arg2, arg3, arg4, invocation_params, ls_provider, arg7) {
      closure_0 = arg2;
      attributes = flag(flag2[0]);
      const invocationParams = attributes.getInvocationParams(invocation_params);
      let result = flag(flag2[0]).extractLLMRequestAttributes(arg0, arr, closure_0, invocationParams, ls_provider);
      const obj2 = flag(flag2[0]);
      attributes = { name: "" + result[flag(undefined, flag2[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[flag(undefined, flag2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.pipeline", attributes: null };
      attributes = {};
      const merged = Object.assign(result);
      attributes[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.pipeline";
      attributes.attributes = attributes;
      flag(flag2[2]).startSpanManual(attributes, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
    },
    handleChatModelStart(id, arr, arg2, arg3, arg4, invocation_params, ls_provider, arg7) {
      closure_0 = arg2;
      attributes = flag(flag2[0]);
      const invocationParams = attributes.getInvocationParams(invocation_params);
      let result = flag(flag2[0]).extractChatModelRequestAttributes(id, arr, closure_0, invocationParams, ls_provider);
      const obj2 = flag(flag2[0]);
      attributes = { name: "" + result[flag(undefined, flag2[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[flag(undefined, flag2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.chat", attributes: null };
      attributes = {};
      const merged = Object.assign(result);
      attributes[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.chat";
      attributes.attributes = attributes;
      flag(flag2[2]).startSpanManual(attributes, (arg0) => {
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
          value = obj.get(arg1);
          let isRecordingResult1;
          if (value != null) {
            isRecordingResult1 = value.isRecording();
          }
          if (isRecordingResult1) {
            value.end();
            obj.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    handleLLMError(arg0, arg1) {
      let obj = map;
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "llm_error" };
        value.setStatus(obj);
        if (typeof exitSpan === "function") {
          value = obj.get(arg1);
          let isRecordingResult1;
          if (value != null) {
            isRecordingResult1 = value.isRecording();
          }
          if (isRecordingResult1) {
            value.end();
            obj.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      obj = { mechanism: null };
      const obj5 = captureCheckIn;
      obj.mechanism = { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".llm_error_handler" };
      obj5.captureException(arg0, obj);
    },
    handleChainStart(name, arg1, arg2, arg3) {
      closure_0 = arg2;
      attributes = { [closure_1_0(closure_1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.langchain", "langchain.chain.name": tmp };
      if (closure_0) {
        const _JSON = JSON;
        attributes["langchain.chain.inputs"] = JSON.stringify(arg1);
      }
      attributes = { name: "chain " + tmp, op: "gen_ai.invoke_agent", attributes: null };
      attributes = {};
      const merged = Object.assign(attributes);
      attributes[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.invoke_agent";
      attributes.attributes = attributes;
      flag(flag2[2]).startSpanManual(attributes, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
    },
    handleChainEnd(arg0, arg1) {
      let obj = map;
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        if (flag2) {
          obj = { "langchain.chain.outputs": null };
          const _JSON = JSON;
          obj["langchain.chain.outputs"] = JSON.stringify(arg0);
          value.setAttributes(obj);
        }
        if (typeof exitSpan === "function") {
          value = obj.get(arg1);
          let isRecordingResult1;
          if (value != null) {
            isRecordingResult1 = value.isRecording();
          }
          if (isRecordingResult1) {
            value.end();
            obj.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    handleChainError(arg0, arg1) {
      let obj = map;
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "chain_error" };
        value.setStatus(obj);
        if (typeof exitSpan === "function") {
          value = obj.get(arg1);
          let isRecordingResult1;
          if (value != null) {
            isRecordingResult1 = value.isRecording();
          }
          if (isRecordingResult1) {
            value.end();
            obj.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      obj = { mechanism: null };
      const obj5 = captureCheckIn;
      obj.mechanism = { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".chain_error_handler" };
      obj5.captureException(arg0, obj);
    },
    handleToolStart(name, gen_ai_tool_input, arg2, arg3) {
      closure_0 = arg2;
      attributes = {};
      attributes[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = flag(flag2[6]).LANGCHAIN_ORIGIN;
      attributes["gen_ai.tool.name"] = name.name || "unknown_tool";
      if (closure_0) {
        attributes["gen_ai.tool.input"] = gen_ai_tool_input;
      }
      attributes = { name: "execute_tool " + tmp, op: "gen_ai.execute_tool", attributes: null };
      attributes = {};
      const merged = Object.assign(attributes);
      attributes[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.execute_tool";
      attributes.attributes = attributes;
      flag(flag2[2]).startSpanManual(attributes, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
    },
    handleToolEnd(arg0, arg1) {
      let obj = map;
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        if (flag2) {
          obj = { "gen_ai.tool.output": null };
          const _JSON = JSON;
          obj["gen_ai.tool.output"] = JSON.stringify(arg0);
          value.setAttributes(obj);
        }
        if (typeof exitSpan === "function") {
          value = obj.get(arg1);
          let isRecordingResult1;
          if (value != null) {
            isRecordingResult1 = value.isRecording();
          }
          if (isRecordingResult1) {
            value.end();
            obj.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    handleToolError(arg0, arg1) {
      let obj = map;
      value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "tool_error" };
        value.setStatus(obj);
        if (typeof exitSpan === "function") {
          value = obj.get(arg1);
          let isRecordingResult1;
          if (value != null) {
            isRecordingResult1 = value.isRecording();
          }
          if (isRecordingResult1) {
            value.end();
            obj.delete(arg1);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      obj = { mechanism: null };
      const obj5 = captureCheckIn;
      obj.mechanism = { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".tool_error_handler" };
      obj5.captureException(arg0, obj);
    },
    copy() {
      return obj;
    },
    toJSON() {
      obj = { lc: 1, type: "not_implemented", id: obj.lc_id };
      return obj;
    },
    toJSONNotImplemented() {
      obj = { lc: 1, type: "not_implemented", id: obj.lc_id };
      return obj;
    }
  };
  return attributes;
};