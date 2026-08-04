const require = arg1;
const dependencyMap = arg6;
function convertPromptToMessages(data) {
  let _prompt;
  let system;
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(data);
    if (parsed) {
      if (typeof tmp4 === "object") {
        ({ prompt: _prompt, system } = tmp4);
        const items = [];
        if (typeof system === "string") {
          let obj = { role: "system", content: null };
          obj[1] = system;
          items.push(obj);
        }
        if (typeof _prompt === "string") {
          obj = { role: "user", content: null };
          obj[1] = _prompt;
          items.push(obj);
        }
        return items;
      }
    }
    return [];
  } catch (err) {
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._INTERNAL_cleanupToolCallSpan = function _INTERNAL_cleanupToolCallSpan(arg0) {
  const toolCallSpanMap = require(959) /* map */.toolCallSpanMap;
  toolCallSpanMap.delete(arg0);
};
arg5._INTERNAL_getSpanForToolCallId = function _INTERNAL_getSpanForToolCallId(arg0) {
  const toolCallSpanMap = require(959) /* map */.toolCallSpanMap;
  return toolCallSpanMap.get(arg0);
};
arg5.accumulateTokensForParent = function accumulateTokensForParent(item10015, map) {
  const parent_span_id = item10015.parent_span_id;
  if (parent_span_id) {
    const tmp3 = item10015.data[require(undefined, 958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    const tmp4 = item10015.data[require(undefined, 958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
    if (typeof tmp3 === "number") {
      const tmp6 = map.get(parent_span_id) || { inputTokens: 0, outputTokens: 0 };
      if (typeof tmp3 === "number") {
        tmp6.inputTokens = tmp6.inputTokens + tmp3;
      }
      if (typeof tmp4 === "number") {
        tmp6.outputTokens = tmp6.outputTokens + tmp4;
      }
      const result = map.set(parent_span_id, tmp6);
    }
  }
};
arg5.applyAccumulatedTokens = function applyAccumulatedTokens(trace, map) {
  const value = map.get(trace.span_id);
  let data = value;
  if (value) {
    data = trace.data;
  }
  if (data) {
    if (value.inputTokens > 0) {
      trace.data[require(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = value.inputTokens;
    }
    if (value.outputTokens > 0) {
      trace.data[require(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = value.outputTokens;
    }
    if (tmp6) {
      trace.data["gen_ai.usage.total_tokens"] = value.inputTokens + value.outputTokens;
    }
    tmp6 = value.inputTokens > 0 || value.outputTokens > 0;
  }
};
arg5.convertAvailableToolsToJsonString = function convertAvailableToolsToJsonString(arr) {
  return JSON.stringify(arr.map((str) => {
    if (typeof str === "string") {
      try {
        const _JSON = JSON;
        return JSON.parse(str);
      } catch (err) {
        return tmp;
      }
    } else {
      return str;
    }
  }));
};
arg5.convertPromptToMessages = convertPromptToMessages;
arg5.getSpanOpFromName = function getSpanOpFromName(description) {
  return require(958).GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE;
};
arg5.requestMessagesFromPrompt = function requestMessagesFromPrompt(setAttribute, data) {
  if (data[require(undefined, 956).AI_PROMPT_ATTRIBUTE]) {
    let tmpResult = tmp(960);
    const attr = setAttribute.setAttribute("gen_ai.prompt", tmpResult.getTruncatedJsonString(data[tmp(undefined, 956).AI_PROMPT_ATTRIBUTE]));
  }
  const tmp4 = data[require(undefined, 956).AI_PROMPT_ATTRIBUTE];
  if (typeof tmp4 === "string") {
    if (!data[tmp(undefined, 958).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE]) {
      if (!data[tmp(undefined, 956).AI_PROMPT_MESSAGES_ATTRIBUTE]) {
        const arr = convertPromptToMessages(tmp4);
        if (arr.length) {
          let obj = {};
          tmpResult = tmp(960);
          obj[tmp(958).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmpResult.getTruncatedJsonString(arr);
          obj[tmp(958).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = arr.length;
          setAttribute.setAttributes(obj);
        }
      }
    }
  }
  if (typeof data[require(undefined, 956).AI_PROMPT_MESSAGES_ATTRIBUTE] === "string") {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(data[tmp(undefined, 956).AI_PROMPT_MESSAGES_ATTRIBUTE]);
      const _Array = Array;
      if (Array.isArray(parsed)) {
        obj = {};
        obj[tmp(956).AI_PROMPT_MESSAGES_ATTRIBUTE] = undefined;
        obj[tmp(958).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmp(960).getTruncatedJsonString(parsed);
        obj[tmp(958).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = parsed.length;
        setAttribute.setAttributes(obj);
        const tmpResult1 = tmp(960);
      }
    } catch (err) {
    }
  }
};