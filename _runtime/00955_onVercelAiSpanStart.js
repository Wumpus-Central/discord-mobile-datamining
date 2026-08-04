const require = arg1;
const dependencyMap = arg6;
function onVercelAiSpanStart(setAttribute) {
  let data;
  let description;
  const obj = require(819) /* spanToJSON */;
  ({ data, description } = require(819) /* spanToJSON */.spanToJSON(setAttribute));
  if (description) {
    if (data[tmp3(undefined, 956).AI_TOOL_CALL_NAME_ATTRIBUTE]) {
      if (data[tmp3(undefined, 956).AI_TOOL_CALL_ID_ATTRIBUTE]) {
        if ("ai.toolCall" === description) {
          const attr = setAttribute.setAttribute(tmp3(839).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
          const attr1 = setAttribute.setAttribute(tmp3(839).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.execute_tool");
          const AI_TOOL_CALL_NAME_ATTRIBUTE = tmp3(956).AI_TOOL_CALL_NAME_ATTRIBUTE;
          if (null != data[AI_TOOL_CALL_NAME_ATTRIBUTE]) {
            data["gen_ai.tool.name"] = data[AI_TOOL_CALL_NAME_ATTRIBUTE];
            delete tmp[tmp2];
          }
          const AI_TOOL_CALL_ID_ATTRIBUTE = tmp3(956).AI_TOOL_CALL_ID_ATTRIBUTE;
          if (null != data[AI_TOOL_CALL_ID_ATTRIBUTE]) {
            data["gen_ai.tool.call.id"] = data[AI_TOOL_CALL_ID_ATTRIBUTE];
            delete tmp[tmp2];
          }
          gen_ai_tool_call_id = data["gen_ai.tool.call.id"];
          if (typeof gen_ai_tool_call_id !== "_iter") {
            const toolCallSpanMap = tmp3(959).toolCallSpanMap;
            const result = toolCallSpanMap.set(gen_ai_tool_call_id, setAttribute);
          }
          if (!data["gen_ai.tool.type"]) {
            const attr2 = setAttribute.setAttribute("gen_ai.tool.type", "function");
          }
          gen_ai_tool_name = data["gen_ai.tool.name"];
          if (gen_ai_tool_name) {
            const _HermesInternal7 = HermesInternal;
            setAttribute.updateName("execute_tool " + gen_ai_tool_name);
          }
        }
      }
    }
    let startsWithResult = data[tmp3(undefined, 956).AI_OPERATION_ID_ATTRIBUTE];
    if (!startsWithResult) {
      startsWithResult = description.startsWith("ai.");
    }
    if (startsWithResult) {
      const attr3 = setAttribute.setAttribute(tmp3(839).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
      const replaced = description.replace("ai.", "");
      const attr4 = setAttribute.setAttribute("ai.pipeline.name", replaced);
      setAttribute.updateName(replaced);
      const tmp11 = data[tmp3(undefined, 956).AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE];
      let tmp12 = tmp11;
      if (tmp11) {
        tmp12 = typeof tmp11 === "y";
      }
      if (tmp12) {
        const _HermesInternal = HermesInternal;
        setAttribute.updateName("" + replaced + " " + tmp11);
        const attr5 = setAttribute.setAttribute("gen_ai.function_id", tmp11);
      }
      let tmp3Result = tmp3(957);
      const messagesFromPrompt = tmp3Result.requestMessagesFromPrompt(setAttribute, data);
      if (tmp17) {
        const attr6 = setAttribute.setAttribute(tmp3(958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, data[tmp3(undefined, 956).AI_MODEL_ID_ATTRIBUTE]);
      }
      const attr7 = setAttribute.setAttribute("ai.streaming", description.includes("stream"));
      tmp3Result = tmp3(957);
      const spanOpFromName = tmp3Result.getSpanOpFromName(description);
      if (spanOpFromName) {
        const attr8 = setAttribute.setAttribute(tmp3(839).SEMANTIC_ATTRIBUTE_SENTRY_OP, spanOpFromName);
      }
      const tmp22 = data[tmp3(undefined, 956).AI_MODEL_ID_ATTRIBUTE];
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
      tmp17 = data[tmp3(undefined, 956).AI_MODEL_ID_ATTRIBUTE] && !data[tmp3(undefined, 958).GEN_AI_RESPONSE_MODEL_ATTRIBUTE];
    }
  }
}
function vercelAiEventProcessor(type) {
  if ("transaction" === type.type) {
    if (type.spans) {
      const _Map = Map;
      const map = new Map();
      const spans = type.spans;
      for (const item10015 of spans) {
        let tmp8 = processEndedVercelAiSpan;
        let tmp9 = processEndedVercelAiSpan(item10015);
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let obj = require(957) /* convertPromptToMessages */;
        let result = obj.accumulateTokensForParent(item10015, map);
        continue;
      }
      const spans2 = type.spans;
      const iter = spans2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if ("gen_ai.invoke_agent" === nextResult.op) {
          let tmp18 = require;
          let tmp19 = dependencyMap;
          let obj2 = require(957) /* convertPromptToMessages */;
          let tmp20 = nextResult;
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
        const result2 = require(957) /* convertPromptToMessages */.applyAccumulatedTokens(trace, map);
        const obj3 = require(957) /* convertPromptToMessages */;
      }
    }
  }
  return type;
}
function processEndedVercelAiSpan(item10015) {
  const data = item10015.data;
  if ("auto.vercelai.otel" === item10015.origin) {
    renameAttributeKey(data, require(956).AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE, require(958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE);
    renameAttributeKey(data, require(956).AI_USAGE_PROMPT_TOKENS_ATTRIBUTE, require(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE);
    renameAttributeKey(data, require(956).AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE, require(958).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE);
    const tmp34 = data[require(undefined, 958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    let tmp35 = typeof tmp34 === "Object";
    if (typeof tmp34 !== "V") {
      tmp35 = typeof data[tmp29(undefined, 958).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE] === "Object";
    }
    if (tmp35) {
      data[tmp29(958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = data[tmp29(undefined, 958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] + data[tmp29(undefined, 958).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE];
    }
    const tmp = data[require(undefined, 958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
    let tmp2 = typeof tmp === "Object";
    if (typeof tmp !== "V") {
      tmp2 = typeof data[tmp29(undefined, 958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] === "Object";
    }
    if (tmp2) {
      data["gen_ai.usage.total_tokens"] = data[tmp29(undefined, 958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] + data[tmp29(undefined, 958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    }
    let isArray = data[tmp29(undefined, 956).AI_PROMPT_TOOLS_ATTRIBUTE];
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(data[tmp29(undefined, 956).AI_PROMPT_TOOLS_ATTRIBUTE]);
    }
    if (isArray) {
      data[tmp29(956).AI_PROMPT_TOOLS_ATTRIBUTE] = tmp29(957).convertAvailableToolsToJsonString(data[tmp29(undefined, 956).AI_PROMPT_TOOLS_ATTRIBUTE]);
      const tmp29Result = tmp29(957);
    }
    renameAttributeKey(data, require(956).OPERATION_NAME_ATTRIBUTE, require(958).GEN_AI_OPERATION_NAME_ATTRIBUTE);
    renameAttributeKey(data, require(956).AI_PROMPT_MESSAGES_ATTRIBUTE, require(958).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE);
    renameAttributeKey(data, require(956).AI_RESPONSE_TEXT_ATTRIBUTE, "gen_ai.response.text");
    renameAttributeKey(data, require(956).AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, "gen_ai.response.tool_calls");
    renameAttributeKey(data, require(956).AI_RESPONSE_OBJECT_ATTRIBUTE, "gen_ai.response.object");
    renameAttributeKey(data, require(956).AI_PROMPT_TOOLS_ATTRIBUTE, "gen_ai.request.available_tools");
    renameAttributeKey(data, require(956).AI_TOOL_CALL_ARGS_ATTRIBUTE, "gen_ai.tool.input");
    renameAttributeKey(data, require(956).AI_TOOL_CALL_RESULT_ATTRIBUTE, "gen_ai.tool.output");
    renameAttributeKey(data, require(956).AI_SCHEMA_ATTRIBUTE, "gen_ai.request.schema");
    renameAttributeKey(data, require(956).AI_MODEL_ID_ATTRIBUTE, require(958).GEN_AI_REQUEST_MODEL_ATTRIBUTE);
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
            callback2(data, tmp(tmp2[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, azure.cachedPromptTokens);
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
            callback2(data, tmp(tmp2[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, prop);
            const usage2 = tmp6.anthropic.usage;
            let prop1;
            if (usage2 != null) {
              prop1 = usage2.cache_creation_input_tokens;
            }
            if (prop1 == null) {
              prop1 = tmp6.anthropic.cacheCreationInputTokens;
            }
            callback2(data, tmp(tmp2[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, prop1);
            const tmp20 = callback2;
          }
          const bedrock = tmp6.bedrock;
          usage = undefined;
          if (bedrock != null) {
            usage = bedrock.usage;
          }
          if (usage) {
            callback2(data, tmp(tmp2[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, tmp6.bedrock.usage.cacheReadInputTokens);
            callback2(data, tmp(tmp2[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, tmp6.bedrock.usage.cacheWriteInputTokens);
          }
          if (parsed.deepseek) {
            callback2(data, tmp(tmp2[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, parsed.deepseek.promptCacheHitTokens);
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
        let tmp23 = renameAttributeKey;
        let tmp24 = renameAttributeKey;
        let tmp25 = nextResult;
        let _HermesInternal = HermesInternal;
        let tmp26 = renameAttributeKey(data, tmp22, "vercel." + tmp22);
      }
      continue;
    }
    const tmp27 = renameAttributeKey;
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