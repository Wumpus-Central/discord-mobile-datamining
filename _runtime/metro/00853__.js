// === Module 853: ? ===

// Module 853
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 716 */;
import _mod745 from "module_745" /* 745 */;
import extractChatModelRequestAttributes from "extractChatModelRequestAttributes" /* 854 */;
import LANGCHAIN_INTEGRATION_NAME from "LANGCHAIN_INTEGRATION_NAME" /* 855 */;

let map;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createLangChainCallbackHandler = function createLangChainCallbackHandler() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag2;
  map = undefined;
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
    lc_attributes: "applicationId",
    lc_aliases: "formatToPlainString",
    lc_serializable_keys: "content",
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
      let obj4;
      let closure_0 = arg2;
      const obj = flag(flag2[0]);
      const invocationParams = obj.getInvocationParams(invocation_params);
      obj2 = flag(flag2[0]);
      let result = obj2.extractLLMRequestAttributes(kwargs, arr, closure_0, invocationParams, ls_provider);
      const tmp3 = result[flag(undefined, flag2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
      const tmp4 = result[flag(undefined, flag2[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE];
      const tmp5 = flag(flag2[2]);
      const startSpanManual = tmp5.startSpanManual;
      const obj3 = { name: "" + tmp4 + " " + tmp3, op: "gen_ai.pipeline", attributes: obj4 };
      obj4 = {};
      const merged = Object.assign(result);
      obj4[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.pipeline";
      startSpanManual(obj3, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
    },
    handleChatModelStart(id, arr, arg2, arg3, arg4, invocation_params, ls_provider, arg7) {
      let obj4;
      let closure_0 = arg2;
      const obj = flag(flag2[0]);
      const invocationParams = obj.getInvocationParams(invocation_params);
      obj2 = flag(flag2[0]);
      let result = obj2.extractChatModelRequestAttributes(id, arr, closure_0, invocationParams, ls_provider);
      const tmp3 = result[flag(undefined, flag2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
      const tmp4 = result[flag(undefined, flag2[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE];
      const tmp5 = flag(flag2[2]);
      const startSpanManual = tmp5.startSpanManual;
      const obj3 = { name: "" + tmp4 + " " + tmp3, op: "gen_ai.chat", attributes: obj4 };
      obj4 = {};
      const merged = Object.assign(result);
      obj4[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.chat";
      startSpanManual(obj3, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
    },
    handleLLMEnd(generations, arg1, arg2, arg3, arg4) {
      const value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        const obj3 = extractChatModelRequestAttributes;
        const result = obj3.extractLlmResponseAttributes(generations, flag2);
        if (result) {
          value.setAttributes(result);
        }
        if (typeof exitSpan === "function") {
          const value2 = map.get(arg1);
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
      const value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        const setStatus = value.setStatus;
        obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "llm_error" };
        setStatus(obj2);
        if (typeof exitSpan === "function") {
          const value2 = map.get(arg1);
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
      const obj3 = { mechanism: { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".llm_error_handler" } };
      const obj5 = _mod745;
      ({ handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".llm_error_handler" });
      obj5.captureException(error, obj3);
    },
    handleChainStart(name, arg1, arg2, arg3) {
      let obj3;
      let closure_0 = arg2;
      const obj = { [closure_1_0(closure_1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.langchain", "langchain.chain.name": name.name || "unknown_chain" };
      const tmp4 = closure_0;
      if (tmp4) {
        const _JSON = JSON;
        obj["langchain.chain.inputs"] = JSON.stringify(arg1);
      }
      const tmp2Result = flag(flag2[2]);
      const startSpanManual = tmp2Result.startSpanManual;
      obj2 = { name: "chain " + name.name || "unknown_chain", op: "gen_ai.invoke_agent", attributes: obj3 };
      obj3 = {};
      const merged = Object.assign(obj);
      obj3[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.invoke_agent";
      startSpanManual(obj2, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
    },
    handleChainEnd(arg0, arg1) {
      const value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        if (flag2) {
          const _JSON = JSON;
          const setAttributes = value.setAttributes;
          obj2 = { "langchain.chain.outputs": JSON.stringify(arg0) };
          setAttributes(obj2);
        }
        if (typeof exitSpan === "function") {
          const value2 = map.get(arg1);
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
      const value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        const setStatus = value.setStatus;
        obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "chain_error" };
        setStatus(obj2);
        if (typeof exitSpan === "function") {
          const value2 = map.get(arg1);
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
      const obj3 = { mechanism: { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".chain_error_handler" } };
      const obj5 = _mod745;
      ({ handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".chain_error_handler" });
      obj5.captureException(error, obj3);
    },
    handleToolStart(name, gen_ai_tool_input, arg2, arg3) {
      let obj3;
      let closure_0 = arg2;
      const obj = { "gen_ai.tool.name": name.name || "unknown_tool" };
      obj[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = flag(flag2[6]).LANGCHAIN_ORIGIN;
      const tmp4 = closure_0;
      if (tmp4) {
        obj["gen_ai.tool.input"] = gen_ai_tool_input;
      }
      const tmp2Result = flag(flag2[2]);
      const startSpanManual = tmp2Result.startSpanManual;
      obj2 = { name: "execute_tool " + name.name || "unknown_tool", op: "gen_ai.execute_tool", attributes: obj3 };
      obj3 = {};
      const merged = Object.assign(obj);
      obj3[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.execute_tool";
      startSpanManual(obj2, (arg0) => {
        const result = map.set(closure_0, arg0);
        return arg0;
      });
    },
    handleToolEnd(arg0, arg1) {
      const value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        if (flag2) {
          const _JSON = JSON;
          const setAttributes = value.setAttributes;
          obj2 = { "gen_ai.tool.output": JSON.stringify(arg0) };
          setAttributes(obj2);
        }
        if (typeof exitSpan === "function") {
          const value2 = map.get(arg1);
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
      const value = map.get(arg1);
      let isRecordingResult;
      if (value != null) {
        isRecordingResult = value.isRecording();
      }
      if (isRecordingResult) {
        const setStatus = value.setStatus;
        obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "tool_error" };
        setStatus(obj2);
        if (typeof exitSpan === "function") {
          const value2 = map.get(arg1);
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
      const obj3 = { mechanism: { handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".tool_error_handler" } };
      const obj5 = _mod745;
      ({ handled: false, type: "" + LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN + ".tool_error_handler" });
      obj5.captureException(error, obj3);
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