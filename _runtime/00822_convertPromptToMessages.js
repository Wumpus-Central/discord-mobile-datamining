// _runtime/00822_convertPromptToMessages.js
import AI_MODEL_ID_ATTRIBUTE from "00821_AI_MODEL_ID_ATTRIBUTE.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00823_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import toolCallSpanMap2 from "00824_toolCallSpanMap.js";

require = arg1;
const dependencyMap = arg6;
function convertPromptToMessages(data) {
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(data);
    if (parsed) {
      if (typeof tmp4 === "object") {
        ({ prompt: _prompt, system } = tmp4);
        const items = [];
        if (typeof system === "string") {
          let obj = { role: "system", content: system };
          items.push(obj);
        }
        if (typeof _prompt === "string") {
          obj = { role: "user", content: _prompt };
          items.push(obj);
        }
        return items;
      }
    }
    return [];
  } catch (err) {}
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_cleanupToolCallSpan = function _INTERNAL_cleanupToolCallSpan(arg0) {
  const toolCallSpanMap = toolCallSpanMap2.toolCallSpanMap;
  toolCallSpanMap.delete(arg0);
};
export const _INTERNAL_getSpanForToolCallId = function _INTERNAL_getSpanForToolCallId(arg0) {
  const toolCallSpanMap = toolCallSpanMap2.toolCallSpanMap;
  return toolCallSpanMap.get(arg0);
};
export const accumulateTokensForParent = function accumulateTokensForParent(item10015, map) {
  const parent_span_id = item10015.parent_span_id;
  if (parent_span_id) {
    const tmp3 = item10015.data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    const tmp4 = item10015.data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
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
export const applyAccumulatedTokens = function applyAccumulatedTokens(trace, map) {
  value = map.get(trace.span_id);
  let data = value;
  if (value) {
    data = trace.data;
  }
  if (data) {
    if (value.inputTokens > 0) {
      trace.data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = value.inputTokens;
    }
    if (value.outputTokens > 0) {
      trace.data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = value.outputTokens;
    }
    if (tmp6) {
      trace.data["gen_ai.usage.total_tokens"] = value.inputTokens + value.outputTokens;
    }
    tmp6 = value.inputTokens > 0 || value.outputTokens > 0;
  }
};
export const convertAvailableToolsToJsonString = function convertAvailableToolsToJsonString(data) {
  return JSON.stringify(
    data.map((item) => {
      if (typeof item === "string") {
        try {
          const _JSON = JSON;
          return JSON.parse(item);
        } catch (err) {
          return tmp;
        }
      } else {
        return item;
      }
    }),
  );
};
export { convertPromptToMessages };
export const getSpanOpFromName = function getSpanOpFromName(description) {
  switch (description) {
    case "ai.generateText":
      let tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "ai.streamText":
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "ai.generateObject":
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "ai.streamObject":
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "ai.embed":
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "ai.embedMany":
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "ai.generateText.doGenerate":
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_GENERATE_TEXT_DO_GENERATE_OPERATION_ATTRIBUTE;
    case "ai.streamText.doStream":
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_STREAM_TEXT_DO_STREAM_OPERATION_ATTRIBUTE;
    case "ai.generateObject.doGenerate":
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_GENERATE_OBJECT_DO_GENERATE_OPERATION_ATTRIBUTE;
    case "ai.streamObject.doStream":
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_STREAM_OBJECT_DO_STREAM_OPERATION_ATTRIBUTE;
    case "ai.embed.doEmbed":
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_EMBED_DO_EMBED_OPERATION_ATTRIBUTE;
    case "ai.embedMany.doEmbed":
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_EMBED_MANY_DO_EMBED_OPERATION_ATTRIBUTE;
    case "ai.toolCall":
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE;
    default:
      let str2;
      if (description.startsWith("ai.stream")) {
        str2 = "ai.run";
      }
      return str2;
  }
};
export const requestMessagesFromPrompt = function requestMessagesFromPrompt(setAttribute, data) {
  if (data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_ATTRIBUTE]) {
    let tmpResult = tmp(825);
    const attr = setAttribute.setAttribute(
      "gen_ai.prompt",
      tmpResult.getTruncatedJsonString(data[tmp(undefined, 821).AI_PROMPT_ATTRIBUTE]),
    );
  }
  const tmp4 = data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_ATTRIBUTE];
  if (typeof tmp4 === "string") {
    if (!data[tmp(undefined, 823).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE]) {
      if (!data[tmp(undefined, 821).AI_PROMPT_MESSAGES_ATTRIBUTE]) {
        const arr = convertPromptToMessages(tmp4);
        if (arr.length) {
          let obj = {};
          tmpResult = tmp(825);
          obj[tmp(823).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmpResult.getTruncatedJsonString(arr);
          obj[tmp(823).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = arr.length;
          setAttribute.setAttributes(obj);
        }
      }
    }
  }
  if (typeof data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_MESSAGES_ATTRIBUTE] === "string") {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(data[tmp(undefined, 821).AI_PROMPT_MESSAGES_ATTRIBUTE]);
      const _Array = Array;
      if (Array.isArray(parsed)) {
        obj = {};
        obj[tmp(821).AI_PROMPT_MESSAGES_ATTRIBUTE] = undefined;
        obj[tmp(823).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmp(825).getTruncatedJsonString(parsed);
        obj[tmp(823).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = parsed.length;
        setAttribute.setAttributes(obj);
        const tmpResult1 = tmp(825);
      }
    } catch (err) {}
  }
};
