// === Module 839: extractRequestParameters ===

// Module 839 (extractRequestParameters)
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 834 */;
import INSTRUMENTED_METHODS2 from "INSTRUMENTED_METHODS" /* 840 */;

let message;

function getOperationName(arr) {
  let CONVERSATIONS;
  if (arr.includes("chat.completions")) {
    CONVERSATIONS = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_OPERATIONS.CHAT;
  } else if (arr.includes("responses")) {
    CONVERSATIONS = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_OPERATIONS.RESPONSES;
  } else if (arr.includes("embeddings")) {
    CONVERSATIONS = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_OPERATIONS.EMBEDDINGS;
  } else if (arr.includes("conversations")) {
    CONVERSATIONS = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_OPERATIONS.CONVERSATIONS;
  } else {
    const parts = arr.split(".");
    CONVERSATIONS = parts.pop() || "unknown";
  }
  return CONVERSATIONS;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addChatCompletionAttributes = function addChatCompletionAttributes(setAttributes, created, recordOutputs) {
  let id;
  let model;
  ({ id, model } = created);
  created = created.created;
  setAttributes.setAttributes({ [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: id, [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: id });
  setAttributes.setAttributes({ [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: model, [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: model });
  const obj = {};
  setAttributes = setAttributes.setAttributes;
  const OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE;
  const date = new Date(1000 * created);
  obj[OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date.toISOString();
  setAttributes(obj);
  if (created.usage) {
    const prompt_tokens = created.usage.prompt_tokens;
    const completion_tokens = created.usage.completion_tokens;
    const total_tokens = created.usage.total_tokens;
    if (undefined !== prompt_tokens) {
      const obj2 = {};
      obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = prompt_tokens;
      obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = prompt_tokens;
      setAttributes.setAttributes(obj2);
    }
    if (undefined !== completion_tokens) {
      const obj3 = {};
      obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] = completion_tokens;
      obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = completion_tokens;
      setAttributes.setAttributes(obj3);
    }
    if (undefined !== total_tokens) {
      const obj4 = {};
      obj4[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = total_tokens;
      setAttributes.setAttributes(obj4);
    }
  }
  if (Array.isArray(created.choices)) {
    const choices = created.choices;
    const mapped = choices.map((finish_reason) => finish_reason.finish_reason);
    const found = mapped.filter((item) => null !== item);
    if (found.length > 0) {
      const obj5 = {};
      const setAttributes2 = setAttributes.setAttributes;
      const _JSON = JSON;
      obj5[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(found);
      setAttributes2(obj5);
    }
    const tmp10 = recordOutputs;
    if (tmp10) {
      const choices1 = created.choices;
      const mapped1 = choices1.map((message) => {
        message = message.message;
        let tool_calls;
        if (message != null) {
          tool_calls = message.tool_calls;
        }
        return tool_calls;
      });
      const found1 = mapped1.filter((item) => {
        const isArray = Array.isArray(item) && item.length > 0;
        return isArray;
      });
      const flatResult = found1.flat();
      if (flatResult.length > 0) {
        const obj6 = {};
        const setAttributes3 = setAttributes.setAttributes;
        const _JSON2 = JSON;
        obj6[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(flatResult);
        setAttributes3(obj6);
      }
    }
  }
};
export const addConversationAttributes = function addConversationAttributes(setAttributes, choices) {
  let created_at;
  let id;
  ({ id, created_at } = choices);
  setAttributes.setAttributes({ [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: id, [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: id, [closure_1_0(closure_1_1[0]).GEN_AI_CONVERSATION_ID_ATTRIBUTE]: id });
  if (created_at) {
    const obj = {};
    setAttributes = setAttributes.setAttributes;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE;
    const date = new Date(1000 * created_at);
    obj[OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date.toISOString();
    setAttributes(obj);
  }
};
export const addEmbeddingsAttributes = function addEmbeddingsAttributes(setAttributes, model) {
  const obj = { [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: model.model, [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: model.model };
  setAttributes.setAttributes(obj);
  if (model.usage) {
    const prompt_tokens = model.usage.prompt_tokens;
    const total_tokens = model.usage.total_tokens;
    if (undefined !== prompt_tokens) {
      const obj2 = {};
      obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = prompt_tokens;
      obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = prompt_tokens;
      setAttributes.setAttributes(obj2);
    }
    if (undefined !== total_tokens) {
      const obj3 = {};
      obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = total_tokens;
      setAttributes.setAttributes(obj3);
    }
  }
};
export const addResponsesApiAttributes = function addResponsesApiAttributes(setAttributes, created_at, recordOutputs) {
  let id;
  let model;
  ({ id, model } = created_at);
  created_at = created_at.created_at;
  setAttributes.setAttributes({ [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: id, [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: id });
  setAttributes.setAttributes({ [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: model, [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: model });
  const obj = {};
  setAttributes = setAttributes.setAttributes;
  const OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE;
  const date = new Date(1000 * created_at);
  obj[OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date.toISOString();
  setAttributes(obj);
  if (created_at.status) {
    const obj2 = {};
    const setAttributes2 = setAttributes.setAttributes;
    const _JSON = JSON;
    const items = [created_at.status];
    obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(items);
    setAttributes2(obj2);
  }
  if (created_at.usage) {
    const input_tokens = created_at.usage.input_tokens;
    const output_tokens = created_at.usage.output_tokens;
    const total_tokens = created_at.usage.total_tokens;
    if (undefined !== input_tokens) {
      const obj3 = {};
      obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = input_tokens;
      obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = input_tokens;
      setAttributes.setAttributes(obj3);
    }
    if (undefined !== output_tokens) {
      const obj4 = {};
      obj4[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] = output_tokens;
      obj4[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = output_tokens;
      setAttributes.setAttributes(obj4);
    }
    if (undefined !== total_tokens) {
      const obj5 = {};
      obj5[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = total_tokens;
      setAttributes.setAttributes(obj5);
    }
  }
  const tmp10 = recordOutputs;
  if (tmp10) {
    const _Array = Array;
    if (Array.isArray(created_at.output)) {
      if (created_at.output.length > 0) {
        const output = created_at.output;
        const found = output.filter((type) => {
          let tmp = typeof type === "object";
          if (typeof type === "object") {
            tmp = null !== type;
          }
          if (tmp) {
            tmp = "function_call" === type.type;
          }
          return tmp;
        });
        if (found.length > 0) {
          const obj6 = {};
          const setAttributes3 = setAttributes.setAttributes;
          const _JSON2 = JSON;
          obj6[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(found);
          setAttributes3(obj6);
        }
      }
    }
  }
};
export const buildMethodPath = function buildMethodPath(c0, arg1) {
  let combined = arg1;
  if (c0) {
    const _HermesInternal = HermesInternal;
    combined = "" + c0 + "." + arg1;
  }
  return combined;
};
export const extractRequestParameters = function extractRequestParameters(model) {
  let previous_response_id;
  let str = model.model;
  const GEN_AI_REQUEST_MODEL_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MODEL_ATTRIBUTE;
  if (str == null) {
    str = "unknown";
  }
  const obj = {};
  obj[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
  if ("temperature" in model) {
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = model.temperature;
  }
  if ("top_p" in model) {
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = model.top_p;
  }
  if ("frequency_penalty" in model) {
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = model.frequency_penalty;
  }
  if ("presence_penalty" in model) {
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = model.presence_penalty;
  }
  if ("stream" in model) {
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_STREAM_ATTRIBUTE] = model.stream;
  }
  if ("encoding_format" in model) {
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE] = model.encoding_format;
  }
  if ("dimensions" in model) {
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE] = model.dimensions;
  }
  if ("conversation" in model) {
    if (typeof model.conversation === "string") {
      previous_response_id = model.conversation;
    }
    if (previous_response_id) {
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_CONVERSATION_ID_ATTRIBUTE] = previous_response_id;
    }
    return obj;
  }
  if ("previous_response_id" in model) {
    if (typeof model.previous_response_id === "string") {
      previous_response_id = model.previous_response_id;
    }
  }
};
export { getOperationName };
export const getSpanOperation = function getSpanOperation(arr) {
  return "gen_ai." + getOperationName(arr);
};
export const isChatCompletionChunk = function isChatCompletionChunk(c8) {
  return null !== c8 && typeof c8 === "object" && "object" in c8 && "chat.completion.chunk" === c8.object;
};
export const isChatCompletionResponse = function isChatCompletionResponse(object) {
  return null !== object && typeof object === "object" && "object" in object && "chat.completion" === object.object;
};
export const isConversationResponse = function isConversationResponse(object) {
  return null !== object && typeof object === "object" && "object" in object && "conversation" === object.object;
};
export const isEmbeddingsResponse = function isEmbeddingsResponse(object) {
  if (null !== object) {
    if (typeof object === "object") {
      if ("object" in object) {
        let hasItem = "list" === object.object && typeof object.model === "string";
        if (hasItem) {
          const str2 = object.model;
          const formatted = str2.toLowerCase();
          hasItem = formatted.includes("embedding");
        }
        return hasItem;
      }
    }
  }
  return false;
};
export const isResponsesApiResponse = function isResponsesApiResponse(object) {
  return null !== object && typeof object === "object" && "object" in object && "response" === object.object;
};
export const isResponsesApiStreamEvent = function isResponsesApiStreamEvent(c8) {
  let startsWithResult = null !== c8 && typeof c8 === "object" && "type" in c8 && typeof c8.type === "string";
  if (startsWithResult) {
    const type = c8.type;
    startsWithResult = type.startsWith("response.");
  }
  return startsWithResult;
};
export const setCommonResponseAttributes = function setCommonResponseAttributes(setAttributes, responseId, responseModel, responseTimestamp) {
  const obj = { [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: responseId, [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: responseId };
  setAttributes.setAttributes(obj);
  const obj2 = { [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: responseModel, [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: responseModel };
  setAttributes.setAttributes(obj2);
  const obj3 = {};
  setAttributes = setAttributes.setAttributes;
  const OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE;
  const date = new Date(1000 * responseTimestamp);
  obj3[OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date.toISOString();
  setAttributes(obj3);
};
export const setTokenUsageAttributes = function setTokenUsageAttributes(setAttributes, arg1, arg2, arg3) {
  if (undefined !== arg1) {
    const obj = {};
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = arg1;
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = arg1;
    setAttributes.setAttributes(obj);
  }
  if (undefined !== arg2) {
    const obj2 = {};
    obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] = arg2;
    obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = arg2;
    setAttributes.setAttributes(obj2);
  }
  if (undefined !== arg3) {
    const obj3 = {};
    obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = arg3;
    setAttributes.setAttributes(obj3);
  }
};
export const shouldInstrument = function shouldInstrument(methodPath) {
  const INSTRUMENTED_METHODS = INSTRUMENTED_METHODS2.INSTRUMENTED_METHODS;
  return INSTRUMENTED_METHODS.includes(methodPath);
};