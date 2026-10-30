// === Module 823: convertPromptToMessages ===

// Module 823 (convertPromptToMessages)
import EMBEDDINGS_OPS from "EMBEDDINGS_OPS" /* 821 */;
import AI_MODEL_ID_ATTRIBUTE from "AI_MODEL_ID_ATTRIBUTE" /* 822 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 824 */;
import extractSystemInstructions from "extractSystemInstructions" /* 825 */;

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
          const obj = { role: "system", content: system };
          items.push(obj);
        }
        if (typeof _prompt === "string") {
          const obj2 = { role: "user", content: _prompt };
          items.push(obj2);
        }
        return items;
      }
    }
    return [];
  } catch (err) {
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function _INTERNAL_cleanupToolCallSpan(arg0) {
  const toolCallSpanMap = EMBEDDINGS_OPS.toolCallSpanMap;
  toolCallSpanMap.delete(arg0);
}
export function _INTERNAL_getSpanForToolCallId(arg0) {
  const toolCallSpanMap = EMBEDDINGS_OPS.toolCallSpanMap;
  return toolCallSpanMap.get(arg0);
}
export function accumulateTokensForParent(item10015, map) {
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
}
export function applyAccumulatedTokens(trace, map) {
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
}
export function convertAvailableToolsToJsonString(data) {
  return JSON.stringify(data.map((item) => {
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
  }));
}
export { convertPromptToMessages };
export function getSpanOpFromName(description) {
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
}
export function requestMessagesFromPrompt(setAttribute, data) {
  if (data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_ATTRIBUTE]) {
    const attr = setAttribute.setAttribute("gen_ai.prompt", extractSystemInstructions.getTruncatedJsonString(data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_ATTRIBUTE]));
    const tmpResult = extractSystemInstructions;
  }
  const tmp4 = data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_ATTRIBUTE];
  if (typeof tmp4 === "string") {
    if (!data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]) {
      if (!data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_MESSAGES_ATTRIBUTE]) {
        const arr = convertPromptToMessages(tmp4);
        if (arr.length) {
          const result = extractSystemInstructions.extractSystemInstructions(arr);
          ({ systemInstructions, filteredMessages } = result);
          if (systemInstructions) {
            const attr1 = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
          }
          const _Array = Array;
          let num = 0;
          if (Array.isArray(filteredMessages)) {
            num = filteredMessages.length;
          }
          const obj = {};
          const tmpResult5 = extractSystemInstructions;
          obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ATTRIBUTE] = extractSystemInstructions.getTruncatedJsonString(filteredMessages);
          obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = num;
          setAttribute.setAttributes(obj);
          const tmpResult6 = extractSystemInstructions;
        }
      }
    }
  }
  if (typeof data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_MESSAGES_ATTRIBUTE] === "string") {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_MESSAGES_ATTRIBUTE]);
      const _Array2 = Array;
      if (Array.isArray(parsed)) {
        const result1 = extractSystemInstructions.extractSystemInstructions(parsed);
        const systemInstructions2 = result1.systemInstructions;
        const filteredMessages1 = result1.filteredMessages;
        if (systemInstructions2) {
          const attr2 = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions2);
        }
        const _Array3 = Array;
        let num2 = 0;
        if (Array.isArray(filteredMessages1)) {
          num2 = filteredMessages1.length;
        }
        const obj2 = {};
        obj2[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_MESSAGES_ATTRIBUTE] = undefined;
        const tmpResult7 = extractSystemInstructions;
        obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ATTRIBUTE] = extractSystemInstructions.getTruncatedJsonString(filteredMessages1);
        obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = num2;
        setAttribute.setAttributes(obj2);
        const tmpResult8 = extractSystemInstructions;
      }
    } catch (err) {
    }
  }
}