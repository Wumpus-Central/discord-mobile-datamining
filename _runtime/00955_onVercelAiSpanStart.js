// === Module 955: onVercelAiSpanStart ===

// Module 955 (onVercelAiSpanStart)
import spanToJSON from "spanToJSON" /* 819 */;
import _mod839 from "module_839" /* 839 */;
import _mod956 from "module_956" /* 956 */;
import convertPromptToMessages from "convertPromptToMessages" /* 957 */;
import _mod958 from "module_958" /* 958 */;
import map2 from "map" /* 959 */;

require = arg1;
const dependencyMap = arg6;
function onVercelAiSpanStart(setAttribute) {
  ({ data, description } = spanToJSON.spanToJSON(setAttribute));
  if (description) {
    if (data[_mod956.AI_TOOL_CALL_NAME_ATTRIBUTE]) {
      if (data[_mod956.AI_TOOL_CALL_ID_ATTRIBUTE]) {
        if ("ai.toolCall" === description) {
          const attr = setAttribute.setAttribute(_mod839.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
          const attr1 = setAttribute.setAttribute(_mod839.SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.execute_tool");
          const AI_TOOL_CALL_NAME_ATTRIBUTE = _mod956.AI_TOOL_CALL_NAME_ATTRIBUTE;
          if (null != data[AI_TOOL_CALL_NAME_ATTRIBUTE]) {
            data["gen_ai.tool.name"] = data[AI_TOOL_CALL_NAME_ATTRIBUTE];
            delete tmp[tmp2];
          }
          const AI_TOOL_CALL_ID_ATTRIBUTE = _mod956.AI_TOOL_CALL_ID_ATTRIBUTE;
          if (null != data[AI_TOOL_CALL_ID_ATTRIBUTE]) {
            data["gen_ai.tool.call.id"] = data[AI_TOOL_CALL_ID_ATTRIBUTE];
            delete tmp[tmp2];
          }
          const prop = data["gen_ai.tool.call.id"];
          if (typeof prop === "string") {
            const toolCallSpanMap = map2.toolCallSpanMap;
            const result = toolCallSpanMap.set(prop, setAttribute);
          }
          if (!data["gen_ai.tool.type"]) {
            const attr2 = setAttribute.setAttribute("gen_ai.tool.type", "function");
          }
          const prop1 = data["gen_ai.tool.name"];
          if (prop1) {
            const _HermesInternal7 = HermesInternal;
            setAttribute.updateName("execute_tool " + prop1);
          }
        }
      }
    }
    let startsWithResult = data[_mod956.AI_OPERATION_ID_ATTRIBUTE];
    if (!startsWithResult) {
      startsWithResult = description.startsWith("ai.");
    }
    if (startsWithResult) {
      const attr3 = setAttribute.setAttribute(_mod839.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
      const replaced = description.replace("ai.", "");
      const attr4 = setAttribute.setAttribute("ai.pipeline.name", replaced);
      setAttribute.updateName(replaced);
      const tmp11 = data[_mod956.AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE];
      let tmp12 = tmp11;
      if (tmp11) {
        tmp12 = typeof tmp11 === "string";
      }
      if (tmp12) {
        const _HermesInternal = HermesInternal;
        setAttribute.updateName("" + replaced + " " + tmp11);
        const attr5 = setAttribute.setAttribute("gen_ai.function_id", tmp11);
      }
      let tmp3Result = convertPromptToMessages;
      const messagesFromPrompt = tmp3Result.requestMessagesFromPrompt(setAttribute, data);
      if (tmp17) {
        const attr6 = setAttribute.setAttribute(_mod958.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, data[_mod956.AI_MODEL_ID_ATTRIBUTE]);
      }
      const attr7 = setAttribute.setAttribute("ai.streaming", description.includes("stream"));
      tmp3Result = convertPromptToMessages;
      const spanOpFromName = tmp3Result.getSpanOpFromName(description);
      if (spanOpFromName) {
        const attr8 = setAttribute.setAttribute(_mod839.SEMANTIC_ATTRIBUTE_SENTRY_OP, spanOpFromName);
      }
      const tmp22 = data[_mod956.AI_MODEL_ID_ATTRIBUTE];
      if (tmp22) {
        if ("ai.generateText.doGenerate" === description) {
          const _HermesInternal6 = HermesInternal;
          setAttribute.updateName("generate_text " + tmp22);
        } else if ("ai.streamText.doStream" === description) {
          const _HermesInternal5 = HermesInternal;
          setAttribute.updateName("stream_text " + tmp22);
        } else if ("ai.generateObject.doGenerate" === description) {
          const _HermesInternal4 = HermesInternal;
          setAttribute.updateName("generate_object " + tmp22);
        } else if ("ai.streamObject.doStream" === description) {
          const _HermesInternal3 = HermesInternal;
          setAttribute.updateName("stream_object " + tmp22);
        } else if ("ai.embed.doEmbed" === description) {
          const _HermesInternal2 = HermesInternal;
          setAttribute.updateName("embed " + tmp22);
        } else if ("ai.embedMany.doEmbed" === description) {
          const _HermesInternal8 = HermesInternal;
          setAttribute.updateName("embed_many " + tmp22);
        }
      }
      tmp17 = data[_mod956.AI_MODEL_ID_ATTRIBUTE] && !data[_mod958.GEN_AI_RESPONSE_MODEL_ATTRIBUTE];
    }
  }
  const spanToJSONResult = spanToJSON.spanToJSON(setAttribute);
}
function vercelAiEventProcessor(type) {
  if ("transaction" === type.type) {
    if (type.spans) {
      const _Map = Map;
      const map = new Map();
      const spans = type.spans;
      for (const item10015 of spans) {
        let tmp9 = processEndedVercelAiSpan(item10015);
        let obj = convertPromptToMessages;
        let result = obj.accumulateTokensForParent(item10015, map);
        continue;
      }
      const spans2 = type.spans;
      const iter = spans2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if ("gen_ai.invoke_agent" === nextResult.op) {
          let obj2 = convertPromptToMessages;
          let result1 = obj2.applyAccumulatedTokens(tmp17, map);
        }
        continue;
      }
      const contexts = type.contexts;
      let trace;
      if (contexts != null) {
        trace = contexts.trace;
      }
      let tmp24 = trace;
      if (trace) {
        tmp24 = "gen_ai.invoke_agent" === trace.op;
      }
      if (tmp24) {
        const result2 = convertPromptToMessages.applyAccumulatedTokens(trace, map);
      }
    }
  }
  return type;
}
function processEndedVercelAiSpan(item10015) {
  const data = item10015.data;
  if ("auto.vercelai.otel" === item10015.origin) {
    renameAttributeKey(data, _mod956.AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE, _mod958.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE);
    renameAttributeKey(data, _mod956.AI_USAGE_PROMPT_TOKENS_ATTRIBUTE, _mod958.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE);
    renameAttributeKey(data, _mod956.AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE, _mod958.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE);
    const tmp34 = data[_mod958.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    let tmp35 = typeof tmp34 === "number";
    if (typeof tmp34 === "number") {
      tmp35 = typeof data[_mod958.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE] === "number";
    }
    if (tmp35) {
      data[_mod958.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = data[_mod958.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] + data[_mod958.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE];
    }
    const tmp = data[_mod958.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
    let tmp2 = typeof tmp === "number";
    if (typeof tmp === "number") {
      tmp2 = typeof data[_mod958.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] === "number";
    }
    if (tmp2) {
      data["gen_ai.usage.total_tokens"] = data[_mod958.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] + data[_mod958.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    }
    let isArray = data[_mod956.AI_PROMPT_TOOLS_ATTRIBUTE];
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(data[_mod956.AI_PROMPT_TOOLS_ATTRIBUTE]);
    }
    if (isArray) {
      data[_mod956.AI_PROMPT_TOOLS_ATTRIBUTE] = convertPromptToMessages.convertAvailableToolsToJsonString(data[_mod956.AI_PROMPT_TOOLS_ATTRIBUTE]);
      const tmp29Result = convertPromptToMessages;
    }
    renameAttributeKey(data, _mod956.OPERATION_NAME_ATTRIBUTE, _mod958.GEN_AI_OPERATION_NAME_ATTRIBUTE);
    renameAttributeKey(data, _mod956.AI_PROMPT_MESSAGES_ATTRIBUTE, _mod958.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE);
    renameAttributeKey(data, _mod956.AI_RESPONSE_TEXT_ATTRIBUTE, "gen_ai.response.text");
    renameAttributeKey(data, _mod956.AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, "gen_ai.response.tool_calls");
    renameAttributeKey(data, _mod956.AI_RESPONSE_OBJECT_ATTRIBUTE, "gen_ai.response.object");
    renameAttributeKey(data, _mod956.AI_PROMPT_TOOLS_ATTRIBUTE, "gen_ai.request.available_tools");
    renameAttributeKey(data, _mod956.AI_TOOL_CALL_ARGS_ATTRIBUTE, "gen_ai.tool.input");
    renameAttributeKey(data, _mod956.AI_TOOL_CALL_RESULT_ATTRIBUTE, "gen_ai.tool.output");
    renameAttributeKey(data, _mod956.AI_SCHEMA_ATTRIBUTE, "gen_ai.request.schema");
    renameAttributeKey(data, _mod956.AI_MODEL_ID_ATTRIBUTE, _mod958.GEN_AI_REQUEST_MODEL_ATTRIBUTE);
    (function addProviderMetadataToAttributes(data) {
      const tmp3 = data[callback(undefined, table[2]).AI_RESPONSE_PROVIDER_METADATA_ATTRIBUTE];
      if (tmp3) {
        try {
          const _JSON = JSON;
          const parsed = JSON.parse(tmp3);
          let azure = parsed.openai;
          if (azure == null) {
            azure = tmp6.azure;
          }
          if (azure) {
            callback2(data, callback(table[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, azure.cachedPromptTokens);
            callback2(data, "gen_ai.usage.output_tokens.reasoning", azure.reasoningTokens);
            callback2(data, "gen_ai.usage.output_tokens.prediction_accepted", azure.acceptedPredictionTokens);
            callback2(data, "gen_ai.usage.output_tokens.prediction_rejected", azure.rejectedPredictionTokens);
            callback2(data, "gen_ai.conversation.id", azure.responseId);
          }
          if (parsed.anthropic) {
            let usage = tmp6.anthropic.usage;
            let prop;
            if (usage != null) {
              prop = usage.cache_read_input_tokens;
            }
            if (prop == null) {
              prop = tmp6.anthropic.cacheReadInputTokens;
            }
            callback2(data, callback(table[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, prop);
            const usage2 = tmp6.anthropic.usage;
            let prop1;
            if (usage2 != null) {
              prop1 = usage2.cache_creation_input_tokens;
            }
            if (prop1 == null) {
              prop1 = tmp6.anthropic.cacheCreationInputTokens;
            }
            callback2(data, callback(table[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, prop1);
          }
          const bedrock = tmp6.bedrock;
          usage = undefined;
          if (bedrock != null) {
            usage = bedrock.usage;
          }
          if (usage) {
            callback2(data, callback(table[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, tmp6.bedrock.usage.cacheReadInputTokens);
            callback2(data, callback(table[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, tmp6.bedrock.usage.cacheWriteInputTokens);
          }
          if (parsed.deepseek) {
            callback2(data, callback(table[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, parsed.deepseek.promptCacheHitTokens);
            callback2(data, "gen_ai.usage.input_tokens.cache_miss", parsed.deepseek.promptCacheMissTokens);
          }
        } catch (err) {
        }
      }
    })(data);
    const _Object = Object;
    const keys = Object.keys(data);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp22 = nextResult;
      if (nextResult.startsWith("ai.")) {
        let _HermesInternal = HermesInternal;
        let tmp26 = renameAttributeKey(data, tmp22, "vercel." + tmp22);
      }
      continue;
    }
  }
}
function renameAttributeKey(data, AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE) {
  if (null != data[AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE]) {
    data[GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = data[AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE];
    delete tmp2[tmp];
  }
}
function setAttributeIfDefined(arg0, arg1, arg2) {
  if (null != arg2) {
    arg0[arg1] = arg2;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addVercelAiProcessors = function addVercelAiProcessors(on) {
  on.on("spanStart", onVercelAiSpanStart);
  on.addEventProcessor(Object.assign(vercelAiEventProcessor, { id: "VercelAiEventProcessor" }));
};