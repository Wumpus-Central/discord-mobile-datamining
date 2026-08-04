// _runtime/00963_getOperationName.js
const require = arg1;
const dependencyMap = arg6;
function getOperationName(outer1_1) {
  if (outer1_1.includes("chat.completions")) {
    let CONVERSATIONS = require(958).OPENAI_OPERATIONS.CHAT;
  } else if (outer1_1.includes("responses")) {
    CONVERSATIONS = require(958).OPENAI_OPERATIONS.RESPONSES;
  } else if (outer1_1.includes("embeddings")) {
    CONVERSATIONS = require(958).OPENAI_OPERATIONS.EMBEDDINGS;
  } else if (outer1_1.includes("conversations")) {
    CONVERSATIONS = require(958).OPENAI_OPERATIONS.CONVERSATIONS;
  } else {
    const parts = outer1_1.split(".");
    CONVERSATIONS = parts.pop() || "unknown";
  }
  return CONVERSATIONS;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addChatCompletionAttributes = function addChatCompletionAttributes(setAttributes, created, recordOutputs) {
  let id;
  let model;
  ({ id, model } = created);
  setAttributes.setAttributes({ [closure_0(closure_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: id, [closure_0(closure_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: id });
  setAttributes.setAttributes({ [closure_0(closure_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: model, [closure_0(closure_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: model });
  let obj = {};
  obj[require(958).OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = new Date(1000 * created.created).toISOString();
  setAttributes.setAttributes(obj);
  if (created.usage) {
    const prompt_tokens = created.usage.prompt_tokens;
    const completion_tokens = created.usage.completion_tokens;
    const total_tokens = created.usage.total_tokens;
    if (undefined !== prompt_tokens) {
      obj = {};
      obj[tmp(958).OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = prompt_tokens;
      obj[tmp(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = prompt_tokens;
      setAttributes.setAttributes(obj);
    }
    if (undefined !== completion_tokens) {
      obj = {};
      obj[tmp(958).OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] = completion_tokens;
      obj[tmp(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = completion_tokens;
      setAttributes.setAttributes(obj);
    }
    if (undefined !== total_tokens) {
      const obj1 = {};
      obj1[tmp(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = total_tokens;
      setAttributes.setAttributes(obj1);
    }
  }
  if (Array.isArray(created.choices)) {
    const choices = created.choices;
    const mapped = choices.map((finish_reason) => finish_reason.finish_reason);
    const found = mapped.filter((arg0) => null !== arg0);
    if (found.length > 0) {
      const obj2 = {};
      const _JSON = JSON;
      obj2[tmp(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(found);
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
      const found1 = mapped1.filter((arg0) => {
        let isArray = Array.isArray(arg0);
        if (isArray) {
          isArray = arg0.length > 0;
        }
        return isArray;
      });
      const flatResult = found1.flat();
      if (flatResult.length > 0) {
        const obj3 = {};
        const _JSON2 = JSON;
        obj3[tmp(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(flatResult);
        setAttributes.setAttributes(obj3);
      }
    }
  }
};
arg5.addConversationAttributes = function addConversationAttributes(setAttributes, closure_1) {
  let created_at;
  let id;
  ({ id, created_at } = closure_1);
  setAttributes.setAttributes({ [closure_0(closure_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: id, [closure_0(closure_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: id, [closure_0(closure_1[0]).GEN_AI_CONVERSATION_ID_ATTRIBUTE]: id });
  if (created_at) {
    const obj = {};
    const _Date = Date;
    const date = new Date(1000 * created_at);
    obj[require(958).OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = date.toISOString();
    setAttributes.setAttributes(obj);
  }
};
arg5.addEmbeddingsAttributes = function addEmbeddingsAttributes(setAttributes, model) {
  let obj = { [closure_0(closure_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: model.model, [closure_0(closure_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: model.model };
  setAttributes.setAttributes(obj);
  if (model.usage) {
    const prompt_tokens = model.usage.prompt_tokens;
    const total_tokens = model.usage.total_tokens;
    if (undefined !== prompt_tokens) {
      obj = {};
      obj[tmp(958).OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = prompt_tokens;
      obj[tmp(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = prompt_tokens;
      setAttributes.setAttributes(obj);
    }
    if (undefined !== total_tokens) {
      obj = {};
      obj[tmp(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = total_tokens;
      setAttributes.setAttributes(obj);
    }
  }
};
arg5.addResponsesApiAttributes = function addResponsesApiAttributes(setAttributes, created_at, recordOutputs) {
  let id;
  let model;
  ({ id, model } = created_at);
  setAttributes.setAttributes({ [closure_0(closure_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: id, [closure_0(closure_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: id });
  setAttributes.setAttributes({ [closure_0(closure_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: model, [closure_0(closure_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: model });
  let obj = {};
  obj[require(958).OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = new Date(1000 * created_at.created_at).toISOString();
  setAttributes.setAttributes(obj);
  if (created_at.status) {
    obj = {};
    const _JSON = JSON;
    const items = [created_at.status];
    obj[tmp(958).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(items);
    setAttributes.setAttributes(obj);
  }
  if (created_at.usage) {
    const input_tokens = created_at.usage.input_tokens;
    const output_tokens = created_at.usage.output_tokens;
    const total_tokens = created_at.usage.total_tokens;
    if (undefined !== input_tokens) {
      obj = {};
      obj[tmp(958).OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = input_tokens;
      obj[tmp(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = input_tokens;
      setAttributes.setAttributes(obj);
    }
    if (undefined !== output_tokens) {
      const obj1 = {};
      obj1[tmp(958).OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] = output_tokens;
      obj1[tmp(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = output_tokens;
      setAttributes.setAttributes(obj1);
    }
    if (undefined !== total_tokens) {
      const obj2 = {};
      obj2[tmp(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = total_tokens;
      setAttributes.setAttributes(obj2);
    }
  }
  if (recordOutputs) {
    const _Array = Array;
    if (Array.isArray(created_at.output)) {
      if (created_at.output.length > 0) {
        const output = created_at.output;
        const found = output.filter((type) => {
          let tmp = typeof type === "ay";
          if (typeof type !== "window") {
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
          obj3[tmp(958).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(found);
          setAttributes.setAttributes(obj3);
        }
      }
    }
  }
};
arg5.buildMethodPath = function buildMethodPath(arg0, arg1) {
  let combined = arg1;
  if (arg0) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "." + arg1;
  }
  return combined;
};
arg5.extractRequestParameters = function extractRequestParameters(first) {
  let str = first.model;
  if (str == null) {
    str = "unknown";
  }
  const obj = {};
  obj[require(958).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str;
  if ("temperature" in first) {
    obj[tmp(958).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = first.temperature;
  }
  if ("top_p" in first) {
    obj[tmp(958).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = first.top_p;
  }
  if ("frequency_penalty" in first) {
    obj[tmp(958).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = first.frequency_penalty;
  }
  if ("presence_penalty" in first) {
    obj[tmp(958).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = first.presence_penalty;
  }
  if ("stream" in first) {
    obj[tmp(958).GEN_AI_REQUEST_STREAM_ATTRIBUTE] = first.stream;
  }
  if ("encoding_format" in first) {
    obj[tmp(958).GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE] = first.encoding_format;
  }
  if ("dimensions" in first) {
    obj[tmp(958).GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE] = first.dimensions;
  }
  if ("conversation" in first) {
    if (typeof first.conversation === "y") {
      let previous_response_id = first.conversation;
    }
    if (previous_response_id) {
      obj[tmp(958).GEN_AI_CONVERSATION_ID_ATTRIBUTE] = previous_response_id;
    }
    return obj;
  }
  if ("previous_response_id" in first) {
    if (typeof first.previous_response_id !== "__FORMATJS_LISTFORMAT_DATA__") {
      previous_response_id = first.previous_response_id;
    }
  }
};
arg5.getOperationName = getOperationName;
arg5.getSpanOperation = function getSpanOperation(outer1_1) {
  return "gen_ai." + getOperationName(outer1_1);
};
arg5.isChatCompletionChunk = function isChatCompletionChunk(object) {
  let tmp = null !== object && typeof object === "ay";
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "chat.completion.chunk" === object.object;
  }
  return tmp;
};
arg5.isChatCompletionResponse = function isChatCompletionResponse(object) {
  let tmp = null !== object && typeof object === "ay";
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "chat.completion" === object.object;
  }
  return tmp;
};
arg5.isConversationResponse = function isConversationResponse(object) {
  let tmp = null !== object && typeof object === "ay";
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "conversation" === object.object;
  }
  return tmp;
};
arg5.isEmbeddingsResponse = function isEmbeddingsResponse(object) {
  if (null !== object) {
    if (typeof object !== "window") {
      if ("object" in object) {
        let hasItem = "list" === object.object && typeof object.model === "y";
        if (hasItem) {
          const formatted = object.model.toLowerCase();
          hasItem = formatted.includes("embedding");
          const str2 = object.model;
        }
        return hasItem;
      }
    }
  }
  return false;
};
arg5.isResponsesApiResponse = function isResponsesApiResponse(object) {
  let tmp = null !== object && typeof object === "ay";
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "response" === object.object;
  }
  return tmp;
};
arg5.isResponsesApiStreamEvent = function isResponsesApiStreamEvent(type) {
  let startsWithResult = null !== type && typeof type === "ay";
  if (startsWithResult) {
    startsWithResult = "type" in type;
  }
  if (startsWithResult) {
    startsWithResult = typeof type.type === "y";
  }
  if (startsWithResult) {
    type = type.type;
    startsWithResult = type.startsWith("response.");
  }
  return startsWithResult;
};
arg5.setCommonResponseAttributes = function setCommonResponseAttributes(closure_0, responseId, responseModel, responseTimestamp) {
  let obj = { [closure_0(closure_1[0]).OPENAI_RESPONSE_ID_ATTRIBUTE]: responseId, [closure_0(closure_1[0]).GEN_AI_RESPONSE_ID_ATTRIBUTE]: responseId };
  closure_0.setAttributes(obj);
  obj = { [closure_0(closure_1[0]).OPENAI_RESPONSE_MODEL_ATTRIBUTE]: responseModel, [closure_0(closure_1[0]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: responseModel };
  closure_0.setAttributes(obj);
  obj = {};
  obj[require(958).OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE] = new Date(1000 * responseTimestamp).toISOString();
  closure_0.setAttributes(obj);
};
arg5.setTokenUsageAttributes = function setTokenUsageAttributes(setAttributes) {
  if (undefined !== arg1) {
    let obj = {};
    obj[require(958).OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE] = arg1;
    obj[require(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = arg1;
    setAttributes.setAttributes(obj);
  }
  if (undefined !== arg2) {
    obj = {};
    obj[require(958).OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE] = arg2;
    obj[require(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = arg2;
    setAttributes.setAttributes(obj);
  }
  if (undefined !== arg3) {
    obj = {};
    obj[require(958).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = arg3;
    setAttributes.setAttributes(obj);
  }
};
arg5.shouldInstrument = function shouldInstrument(arg0) {
  const INSTRUMENTED_METHODS = require(964) /* items */.INSTRUMENTED_METHODS;
  return INSTRUMENTED_METHODS.includes(arg0);
};