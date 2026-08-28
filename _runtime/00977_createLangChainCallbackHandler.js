// _runtime/00977_createLangChainCallbackHandler.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createLangChainCallbackHandler = function createLangChainCallbackHandler() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag;
  let flag2;
  let map;
  let exitSpan;
  obj = undefined;
  flag = obj.recordInputs;
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
  obj = { lc_serializable: false, lc_namespace: ["langchain_core", "callbacks", "sentry"], lc_secrets: "r", lc_attributes: "accessibilityRole", lc_aliases: "items", lc_serializable_keys: "label", lc_id: ["langchain_core", "callbacks", "sentry"], lc_kwargs: false, name: false, ignoreLLM: false, ignoreChain: false, ignoreAgent: false, ignoreRetriever: false, ignoreCustomEvent: true, raiseError: null, awaitHandlers: null, handleLLMStart: null, handleChatModelStart: null, handleLLMEnd: null, handleLLMError: null, handleChainStart: null, handleChainEnd: null, handleChainError: null, handleToolStart: null, handleToolEnd: null, handleToolError: null, copy: null, toJSON: "function processTransformOrigin_Pnpm_processTransformOriginTs2(transformOriginIn){const{INDEX_X,INDEX_Z,INDEX_Y,__DEV__,validateTransformOrigin}=this.__closure;let transformOrigin=Array.isArray(transformOriginIn)?transformOriginIn:['50%','50%',0];if(typeof transformOriginIn==='string'){const transformOriginString=transformOriginIn;const regex=/(top|bottom|left|right|center|\\d+(?:%|px)|0)/gi;const transformOriginArray=['50%','50%',0];let index=INDEX_X;let matches;while(matches=regex.exec(transformOriginString)){let nextIndex=index+1;const value=matches[0];const valueLower=value.toLowerCase();switch(valueLower){case'left':case'right':{if(index!==INDEX_X){throw new ReanimatedError(\"Transform-origin \"+value+\" can only be used for x-position\");}transformOriginArray[INDEX_X]=valueLower==='left'?0:'100%';break;}case'top':case'bottom':{if(index===INDEX_Z){throw new ReanimatedError(\"Transform-origin \"+value+\" can only be used for y-position\");}transformOriginArray[INDEX_Y]=valueLower==='top'?0:'100%';if(index===INDEX_X){const horizontal=regex.exec(transformOriginString);if(horizontal==null){break;}switch(horizontal===null||horizontal===void 0?void 0:horizontal[0].toLowerCase()){case'left':transformOriginArray[INDEX_X]=0;break;case'right':transformOriginArray[INDEX_X]='100%';break;case'center':transformOriginArray[INDEX_X]='50%';break;default:throw new ReanimatedError(\"Could not parse transform-origin: \"+transformOriginString);}nextIndex=INDEX_Z;}break;}case'center':{if(index===INDEX_Z){throw new ReanimatedError(\"Transform-origin value \"+value+\" cannot be used for z-position\");}transformOriginArray[index]='50%';break;}default:{if(value.endsWith('%')){transformOriginArray[index]=value;}else{const numericValue=parseFloat(value);if(isNaN(numericValue)){throw new ReanimatedError(\"Invalid numeric value in transform-origin: \"+value);}transformOriginArray[index]=numericValue;}break;}}index=nextIndex;}transformOrigin=transformOriginArray;}if(typeof transformOriginIn!=='string'&&!Array.isArray(transformOriginIn)){throw new ReanimatedError(\"Invalid transformOrigin type: \"+typeof transformOriginIn);}if(__DEV__){validateTransformOrigin(transformOrigin);}return transformOrigin;}", toJSONNotImplemented: "filterNonAnimatedProps" };
  obj[7] = {};
  obj[16] = function handleLLMStart(arg0, arr, closure_0, arg3, arg4, invocation_params, ls_provider) {
    obj = flag(flag2[0]);
    const invocationParams = obj.getInvocationParams(invocation_params);
    let result = flag(flag2[0]).extractLLMRequestAttributes(arg0, arr, closure_0, invocationParams, ls_provider);
    const obj2 = flag(flag2[0]);
    obj = { name: "" + result[flag(undefined, flag2[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[flag(undefined, flag2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.pipeline", attributes: null };
    obj = {};
    const merged = Object.assign(result);
    obj[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.pipeline";
    obj[2] = obj;
    flag(flag2[2]).startSpanManual(obj, (arg0) => {
      const result = closure_1_2.set(closure_0, arg0);
      return arg0;
    });
  };
  obj[17] = function handleChatModelStart(id, arr, closure_0, arg3, arg4, invocation_params, ls_provider) {
    obj = flag(flag2[0]);
    const invocationParams = obj.getInvocationParams(invocation_params);
    let result = flag(flag2[0]).extractChatModelRequestAttributes(id, arr, closure_0, invocationParams, ls_provider);
    const obj2 = flag(flag2[0]);
    obj = { name: "" + result[flag(undefined, flag2[1]).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[flag(undefined, flag2[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.chat", attributes: null };
    obj = {};
    const merged = Object.assign(result);
    obj[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.chat";
    obj[2] = obj;
    flag(flag2[2]).startSpanManual(obj, (arg0) => {
      const result = closure_1_2.set(closure_0, arg0);
      return arg0;
    });
  };
  obj[18] = function handleLLMEnd(generations) {
    let value = map.get(arg1);
    let isRecordingResult;
    if (value != null) {
      isRecordingResult = value.isRecording();
    }
    if (isRecordingResult) {
      const result = flag(flag2[0]).extractLlmResponseAttributes(generations, flag2);
      if (result) {
        value.setAttributes(result);
      }
      if (typeof exitSpan !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value = obj.get(arg1);
      let isRecordingResult1;
      if (value != null) {
        isRecordingResult1 = value.isRecording();
      }
      if (isRecordingResult1) {
        value.end();
        obj.delete(arg1);
      }
      const obj3 = flag(flag2[0]);
    }
  };
  obj[19] = function handleLLMError(arg0, arg1) {
    obj = map;
    let value = map.get(arg1);
    let isRecordingResult;
    if (value != null) {
      isRecordingResult = value.isRecording();
    }
    if (isRecordingResult) {
      obj = { code: null, message: "llm_error" };
      obj[0] = flag(flag2[4]).SPAN_STATUS_ERROR;
      value.setStatus(obj);
      if (typeof exitSpan !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value = obj.get(arg1);
      let isRecordingResult1;
      if (value != null) {
        isRecordingResult1 = value.isRecording();
      }
      if (isRecordingResult1) {
        value.end();
        obj.delete(arg1);
      }
    }
    obj = { mechanism: null };
    const obj5 = flag(flag2[5]);
    obj[0] = { handled: false, type: "" + flag(flag2[6]).LANGCHAIN_ORIGIN + ".llm_error_handler" };
    obj5.captureException(arg0, obj);
  };
  obj[20] = function handleChainStart(name) {
    closure_0 = arg2;
    obj = { [closure_1_0(closure_1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.langchain", "langchain.chain.name": tmp };
    if (closure_0) {
      const _JSON = JSON;
      obj["langchain.chain.inputs"] = JSON.stringify(arg1);
    }
    obj = { name: "chain " + tmp, op: "gen_ai.invoke_agent", attributes: null };
    obj = {};
    const merged = Object.assign(obj);
    obj[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.invoke_agent";
    obj[2] = obj;
    flag(flag2[2]).startSpanManual(obj, (arg0) => {
      const result = closure_1_2.set(closure_0, arg0);
      return arg0;
    });
  };
  obj[21] = function handleChainEnd(arg0, arg1) {
    obj = map;
    let value = map.get(arg1);
    let isRecordingResult;
    if (value != null) {
      isRecordingResult = value.isRecording();
    }
    if (isRecordingResult) {
      if (flag2) {
        obj = { "langchain.chain.outputs": null };
        const _JSON = JSON;
        obj[0] = JSON.stringify(arg0);
        value.setAttributes(obj);
      }
      if (typeof exitSpan !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value = obj.get(arg1);
      let isRecordingResult1;
      if (value != null) {
        isRecordingResult1 = value.isRecording();
      }
      if (isRecordingResult1) {
        value.end();
        obj.delete(arg1);
      }
    }
  };
  obj[22] = function handleChainError(arg0, arg1) {
    obj = map;
    let value = map.get(arg1);
    let isRecordingResult;
    if (value != null) {
      isRecordingResult = value.isRecording();
    }
    if (isRecordingResult) {
      obj = { code: null, message: "chain_error" };
      obj[0] = flag(flag2[4]).SPAN_STATUS_ERROR;
      value.setStatus(obj);
      if (typeof exitSpan !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value = obj.get(arg1);
      let isRecordingResult1;
      if (value != null) {
        isRecordingResult1 = value.isRecording();
      }
      if (isRecordingResult1) {
        value.end();
        obj.delete(arg1);
      }
    }
    obj = { mechanism: null };
    const obj5 = flag(flag2[5]);
    obj[0] = { handled: false, type: "" + flag(flag2[6]).LANGCHAIN_ORIGIN + ".chain_error_handler" };
    obj5.captureException(arg0, obj);
  };
  obj[23] = function handleToolStart(name, gen_ai_tool_input) {
    closure_0 = arg2;
    obj = {};
    obj[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = flag(flag2[6]).LANGCHAIN_ORIGIN;
    obj["gen_ai.tool.name"] = name.name || "unknown_tool";
    if (closure_0) {
      obj["gen_ai.tool.input"] = gen_ai_tool_input;
    }
    obj = { name: "execute_tool " + tmp, op: "gen_ai.execute_tool", attributes: null };
    obj = {};
    const merged = Object.assign(obj);
    obj[flag(flag2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.execute_tool";
    obj[2] = obj;
    flag(flag2[2]).startSpanManual(obj, (arg0) => {
      const result = closure_1_2.set(closure_0, arg0);
      return arg0;
    });
  };
  obj[24] = function handleToolEnd(arg0, arg1) {
    obj = map;
    let value = map.get(arg1);
    let isRecordingResult;
    if (value != null) {
      isRecordingResult = value.isRecording();
    }
    if (isRecordingResult) {
      if (flag2) {
        obj = { "gen_ai.tool.output": null };
        const _JSON = JSON;
        obj[0] = JSON.stringify(arg0);
        value.setAttributes(obj);
      }
      if (typeof exitSpan !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value = obj.get(arg1);
      let isRecordingResult1;
      if (value != null) {
        isRecordingResult1 = value.isRecording();
      }
      if (isRecordingResult1) {
        value.end();
        obj.delete(arg1);
      }
    }
  };
  obj[25] = function handleToolError(arg0, arg1) {
    obj = map;
    let value = map.get(arg1);
    let isRecordingResult;
    if (value != null) {
      isRecordingResult = value.isRecording();
    }
    if (isRecordingResult) {
      obj = { code: null, message: "tool_error" };
      obj[0] = flag(flag2[4]).SPAN_STATUS_ERROR;
      value.setStatus(obj);
      if (typeof exitSpan !== "function") {
        HermesBuiltin.throwTypeError();
      }
      value = obj.get(arg1);
      let isRecordingResult1;
      if (value != null) {
        isRecordingResult1 = value.isRecording();
      }
      if (isRecordingResult1) {
        value.end();
        obj.delete(arg1);
      }
    }
    obj = { mechanism: null };
    const obj5 = flag(flag2[5]);
    obj[0] = { handled: false, type: "" + flag(flag2[6]).LANGCHAIN_ORIGIN + ".tool_error_handler" };
    obj5.captureException(arg0, obj);
  };
  obj[26] = function copy() {
    return obj;
  };
  obj[27] = function toJSON() {
    obj = { lc: 1, type: "not_implemented", id: obj.lc_id };
    return obj;
  };
  obj[28] = function toJSONNotImplemented() {
    obj = { lc: 1, type: "not_implemented", id: obj.lc_id };
    return obj;
  };
  return obj;
};