// _runtime/00828_extractRequestParameters.js
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00823_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import INSTRUMENTED_METHODS2 from "00829_INSTRUMENTED_METHODS.js";

require = arg1;
const dependencyMap = arg6;
function getOperationName(arr) {
  if (arr.includes("chat.completions")) {
    let CONVERSATIONS = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_OPERATIONS.CHAT;
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addChatCompletionAttributes = function addChatCompletionAttributes(setAttributes, created, recordOutputs) {
  ({ id, model } = created);
  setAttributes.setAttributes({
    [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: id,
    [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: id,
  });
  setAttributes.setAttributes({
    [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: model,
    [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: model,
  });
  let obj = {};
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = new Date(
    1000 * created.created,
  ).toISOString();
  setAttributes.setAttributes(obj);
  if (created.usage) {
    const prompt_tokens = created.usage.prompt_tokens;
    const completion_tokens = created.usage.completion_tokens;
    const total_tokens = created.usage.total_tokens;
    if (undefined !== prompt_tokens) {
      obj = {};
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = prompt_tokens;
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = prompt_tokens;
      setAttributes.setAttributes(obj);
    }
    if (undefined !== completion_tokens) {
      obj = {};
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] = completion_tokens;
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = completion_tokens;
      setAttributes.setAttributes(obj);
    }
    if (undefined !== total_tokens) {
      const obj1 = {};
      obj1[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = total_tokens;
      setAttributes.setAttributes(obj1);
    }
  }
  if (Array.isArray(created.choices)) {
    const choices = created.choices;
    const mapped = choices.map((finish_reason) => finish_reason.finish_reason);
    const found = mapped.filter((item) => null !== item);
    if (found.length > 0) {
      const obj2 = {};
      const _JSON = JSON;
      obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(found);
      setAttributes.setAttributes(obj2);
    }
    if (recordOutputs) {
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
        let isArray = Array.isArray(item);
        if (isArray) {
          isArray = item.length > 0;
        }
        return isArray;
      });
      const flatResult = found1.flat();
      if (flatResult.length > 0) {
        const obj3 = {};
        const _JSON2 = JSON;
        obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] =
          JSON.stringify(flatResult);
        setAttributes.setAttributes(obj3);
      }
    }
  }
  const date = new Date(1000 * created.created);
};
export const addConversationAttributes = function addConversationAttributes(setAttributes, choices) {
  ({ id, created_at } = choices);
  setAttributes.setAttributes({
    [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: id,
    [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: id,
    [closure_1_0(closure_1_1[0]).GEN_AI_CONVERSATION_ID_ATTRIBUTE]: id,
  });
  if (created_at) {
    const obj = {};
    const _Date = Date;
    const date = new Date(1000 * created_at);
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date.toISOString();
    setAttributes.setAttributes(obj);
  }
};
export const addEmbeddingsAttributes = function addEmbeddingsAttributes(setAttributes, model) {
  let obj = {
    [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: model.model,
    [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: model.model,
  };
  setAttributes.setAttributes(obj);
  if (model.usage) {
    const prompt_tokens = model.usage.prompt_tokens;
    const total_tokens = model.usage.total_tokens;
    if (undefined !== prompt_tokens) {
      obj = {};
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = prompt_tokens;
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = prompt_tokens;
      setAttributes.setAttributes(obj);
    }
    if (undefined !== total_tokens) {
      obj = {};
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = total_tokens;
      setAttributes.setAttributes(obj);
    }
  }
};
export const addResponsesApiAttributes = function addResponsesApiAttributes(setAttributes, created_at, recordOutputs) {
  ({ id, model } = created_at);
  setAttributes.setAttributes({
    [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: id,
    [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: id,
  });
  setAttributes.setAttributes({
    [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: model,
    [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: model,
  });
  let obj = {};
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = new Date(
    1000 * created_at.created_at,
  ).toISOString();
  setAttributes.setAttributes(obj);
  if (created_at.status) {
    obj = {};
    const _JSON = JSON;
    const items = [created_at.status];
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(items);
    setAttributes.setAttributes(obj);
  }
  if (created_at.usage) {
    const input_tokens = created_at.usage.input_tokens;
    const output_tokens = created_at.usage.output_tokens;
    const total_tokens = created_at.usage.total_tokens;
    if (undefined !== input_tokens) {
      obj = {};
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = input_tokens;
      obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = input_tokens;
      setAttributes.setAttributes(obj);
    }
    if (undefined !== output_tokens) {
      const obj1 = {};
      obj1[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] = output_tokens;
      obj1[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = output_tokens;
      setAttributes.setAttributes(obj1);
    }
    if (undefined !== total_tokens) {
      const obj2 = {};
      obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = total_tokens;
      setAttributes.setAttributes(obj2);
    }
  }
  if (recordOutputs) {
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
          const obj3 = {};
          const _JSON2 = JSON;
          obj3[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(found);
          setAttributes.setAttributes(obj3);
        }
      }
    }
  }
  const date = new Date(1000 * created_at.created_at);
};
export const buildMethodPath = function buildMethodPath(arg0, arg1) {
  let combined = arg1;
  if (arg0) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "." + arg1;
  }
  return combined;
};
export const extractRequestParameters = function extractRequestParameters(model) {
  let str = model.model;
  if (str == null) {
    str = "unknown";
  }
  const obj = {};
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
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
      let previous_response_id = model.conversation;
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
export const isChatCompletionChunk = function isChatCompletionChunk(object) {
  let tmp = null !== object && typeof object === "object";
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "chat.completion.chunk" === object.object;
  }
  return tmp;
};
export const isChatCompletionResponse = function isChatCompletionResponse(object) {
  let tmp = null !== object && typeof object === "object";
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "chat.completion" === object.object;
  }
  return tmp;
};
export const isConversationResponse = function isConversationResponse(object) {
  let tmp = null !== object && typeof object === "object";
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "conversation" === object.object;
  }
  return tmp;
};
export const isEmbeddingsResponse = function isEmbeddingsResponse(object) {
  if (null !== object) {
    if (typeof object === "object") {
      if ("object" in object) {
        let hasItem = "list" === object.object && typeof object.model === "string";
        if (hasItem) {
          const formatted = object.model.toLowerCase();
          hasItem = formatted.includes("embedding");
        }
        return hasItem;
      }
    }
  }
  return false;
};
export const isResponsesApiResponse = function isResponsesApiResponse(object) {
  let tmp = null !== object && typeof object === "object";
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "response" === object.object;
  }
  return tmp;
};
export const isResponsesApiStreamEvent = function isResponsesApiStreamEvent(type) {
  let startsWithResult = null !== type && typeof type === "object";
  if (startsWithResult) {
    startsWithResult = "type" in type;
  }
  if (startsWithResult) {
    startsWithResult = typeof type.type === "string";
  }
  if (startsWithResult) {
    type = type.type;
    startsWithResult = type.startsWith("response.");
  }
  return startsWithResult;
};
export const setCommonResponseAttributes = function setCommonResponseAttributes(
  setAttributes,
  responseId,
  responseModel,
  responseTimestamp,
) {
  let obj = {
    [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: responseId,
    [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: responseId,
  };
  setAttributes.setAttributes(obj);
  obj = {
    [closure_1_0(closure_1_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: responseModel,
    [closure_1_0(closure_1_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: responseModel,
  };
  setAttributes.setAttributes(obj);
  obj = {};
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = new Date(
    1000 * responseTimestamp,
  ).toISOString();
  setAttributes.setAttributes(obj);
};
export const setTokenUsageAttributes = function setTokenUsageAttributes(setAttributes, arg1, arg2, arg3) {
  if (undefined !== arg1) {
    let obj = {};
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = arg1;
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = arg1;
    setAttributes.setAttributes(obj);
  }
  if (undefined !== arg2) {
    obj = {};
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] = arg2;
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = arg2;
    setAttributes.setAttributes(obj);
  }
  if (undefined !== arg3) {
    obj = {};
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = arg3;
    setAttributes.setAttributes(obj);
  }
};
export const shouldInstrument = function shouldInstrument(arg0) {
  const INSTRUMENTED_METHODS = INSTRUMENTED_METHODS2.INSTRUMENTED_METHODS;
  return INSTRUMENTED_METHODS.includes(arg0);
};
