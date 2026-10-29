// _runtime/metro/00832__.js
import spanToJSON from "../00695_spanToJSON.js";
import GEN_AI_CONVERSATION_ID_ATTRIBUTE from "../00715_GEN_AI_CONVERSATION_ID_ATTRIBUTE.js";
import EMBEDDINGS_OPS2 from "../00833_EMBEDDINGS_OPS.js";
import AI_MODEL_ID_ATTRIBUTE from "../00834_AI_MODEL_ID_ATTRIBUTE.js";
import convertPromptToMessages from "../00835_convertPromptToMessages.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "../00836_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";

require = arg1;
const dependencyMap = arg6;
function onVercelAiSpanStart(setAttribute) {
  ({ data, description } = spanToJSON.spanToJSON(setAttribute));
  if (description) {
    if (data[AI_MODEL_ID_ATTRIBUTE.AI_TOOL_CALL_NAME_ATTRIBUTE]) {
      if (data[AI_MODEL_ID_ATTRIBUTE.AI_TOOL_CALL_ID_ATTRIBUTE]) {
        if ("ai.toolCall" === description) {
          const attr = setAttribute.setAttribute(
            GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
            "auto.vercelai.otel",
          );
          const attr1 = setAttribute.setAttribute(
            GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_OP,
            "gen_ai.execute_tool",
          );
          const attr2 = setAttribute.setAttribute(
            ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_OPERATION_NAME_ATTRIBUTE,
            "execute_tool",
          );
          const AI_TOOL_CALL_NAME_ATTRIBUTE = AI_MODEL_ID_ATTRIBUTE.AI_TOOL_CALL_NAME_ATTRIBUTE;
          if (null != data[AI_TOOL_CALL_NAME_ATTRIBUTE]) {
            data[tmp36] = data[AI_TOOL_CALL_NAME_ATTRIBUTE];
            delete tmp[tmp2];
          }
          const AI_TOOL_CALL_ID_ATTRIBUTE = AI_MODEL_ID_ATTRIBUTE.AI_TOOL_CALL_ID_ATTRIBUTE;
          if (null != data[AI_TOOL_CALL_ID_ATTRIBUTE]) {
            data[tmp38] = data[AI_TOOL_CALL_ID_ATTRIBUTE];
            delete tmp[tmp2];
          }
          const tmp39 = data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_TOOL_CALL_ID_ATTRIBUTE];
          if (typeof tmp39 === "string") {
            const toolCallSpanMap = EMBEDDINGS_OPS2.toolCallSpanMap;
            const result = toolCallSpanMap.set(tmp39, setAttribute);
          }
          if (!data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_TOOL_TYPE_ATTRIBUTE]) {
            const attr3 = setAttribute.setAttribute(
              ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_TOOL_TYPE_ATTRIBUTE,
              "function",
            );
          }
          const tmp41 = data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_TOOL_NAME_ATTRIBUTE];
          if (tmp41) {
            const _HermesInternal7 = HermesInternal;
            setAttribute.updateName("execute_tool " + tmp41);
          }
        }
      }
    }
    let startsWithResult = data[AI_MODEL_ID_ATTRIBUTE.AI_OPERATION_ID_ATTRIBUTE];
    if (!startsWithResult) {
      startsWithResult = description.startsWith("ai.");
    }
    if (startsWithResult) {
      const attr4 = setAttribute.setAttribute(
        GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
        "auto.vercelai.otel",
      );
      const replaced = description.replace("ai.", "");
      const attr5 = setAttribute.setAttribute("ai.pipeline.name", replaced);
      setAttribute.updateName(replaced);
      const tmp11 = data[AI_MODEL_ID_ATTRIBUTE.AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE];
      let tmp12 = tmp11;
      if (tmp11) {
        tmp12 = typeof tmp11 === "string";
      }
      if (tmp12) {
        const _HermesInternal = HermesInternal;
        setAttribute.updateName("" + replaced + " " + tmp11);
        const attr6 = setAttribute.setAttribute("gen_ai.function_id", tmp11);
      }
      const messagesFromPrompt = convertPromptToMessages.requestMessagesFromPrompt(setAttribute, data);
      const tmp3Result = convertPromptToMessages;
      if (tmp17) {
        const attr7 = setAttribute.setAttribute(
          ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_MODEL_ATTRIBUTE,
          data[AI_MODEL_ID_ATTRIBUTE.AI_MODEL_ID_ATTRIBUTE],
        );
      }
      const attr8 = setAttribute.setAttribute("ai.streaming", description.includes("stream"));
      tmp17 =
        data[AI_MODEL_ID_ATTRIBUTE.AI_MODEL_ID_ATTRIBUTE] &&
        !data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_MODEL_ATTRIBUTE];
      const spanOpFromName = convertPromptToMessages.getSpanOpFromName(description);
      if (spanOpFromName) {
        const attr9 = setAttribute.setAttribute(
          GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_OP,
          spanOpFromName,
        );
      }
      const tmp22 = data[AI_MODEL_ID_ATTRIBUTE.AI_MODEL_ID_ATTRIBUTE];
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
      const tmp3Result2 = convertPromptToMessages;
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
    renameAttributeKey(
      data,
      AI_MODEL_ID_ATTRIBUTE.AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE,
      ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE,
    );
    renameAttributeKey(
      data,
      AI_MODEL_ID_ATTRIBUTE.AI_USAGE_PROMPT_TOKENS_ATTRIBUTE,
      ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE,
    );
    renameAttributeKey(
      data,
      AI_MODEL_ID_ATTRIBUTE.AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE,
      ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
    );
    const tmp36 = data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    let tmp37 = typeof tmp36 === "number";
    if (typeof tmp36 === "number") {
      tmp37 =
        typeof data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE] === "number";
    }
    if (tmp37) {
      data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
        data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] +
        data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE];
    }
    let tmp3 = data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
    let tmp4 = typeof tmp3 === "number";
    if (typeof tmp3 === "number") {
      tmp4 = typeof data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] === "number";
    }
    if (tmp4) {
      data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
        data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] +
        data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    }
    let isArray = data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_TOOLS_ATTRIBUTE];
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_TOOLS_ATTRIBUTE]);
    }
    if (isArray) {
      data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_TOOLS_ATTRIBUTE] = convertPromptToMessages.convertAvailableToolsToJsonString(
        data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_TOOLS_ATTRIBUTE],
      );
      const tmp31Result = convertPromptToMessages;
    }
    if (data[AI_MODEL_ID_ATTRIBUTE.OPERATION_NAME_ATTRIBUTE]) {
      data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_OPERATION_NAME_ATTRIBUTE] =
        (function mapVercelAiOperationName(data) {
          const INVOKE_AGENT_OPS = EMBEDDINGS_OPS2.INVOKE_AGENT_OPS;
          let str = "invoke_agent";
          if (!INVOKE_AGENT_OPS.has(data)) {
            const GENERATE_CONTENT_OPS = EMBEDDINGS_OPS2.GENERATE_CONTENT_OPS;
            let str2 = "generate_content";
            if (!GENERATE_CONTENT_OPS.has(data)) {
              const EMBEDDINGS_OPS = EMBEDDINGS_OPS2.EMBEDDINGS_OPS;
              let str3 = "embeddings";
              if (!EMBEDDINGS_OPS.has(data)) {
                let str4 = "execute_tool";
                if ("ai.toolCall" !== data) {
                  str4 = data;
                }
                str3 = str4;
              }
              str2 = str3;
            }
            str = str2;
          }
          return str;
        })(data[AI_MODEL_ID_ATTRIBUTE.OPERATION_NAME_ATTRIBUTE]);
      const OPERATION_NAME_ATTRIBUTE = AI_MODEL_ID_ATTRIBUTE.OPERATION_NAME_ATTRIBUTE;
      delete tmp2[tmp];
      const tmp7 = (function mapVercelAiOperationName(data) {
        const INVOKE_AGENT_OPS = EMBEDDINGS_OPS2.INVOKE_AGENT_OPS;
        let str = "invoke_agent";
        if (!INVOKE_AGENT_OPS.has(data)) {
          const GENERATE_CONTENT_OPS = EMBEDDINGS_OPS2.GENERATE_CONTENT_OPS;
          let str2 = "generate_content";
          if (!GENERATE_CONTENT_OPS.has(data)) {
            const EMBEDDINGS_OPS = EMBEDDINGS_OPS2.EMBEDDINGS_OPS;
            let str3 = "embeddings";
            if (!EMBEDDINGS_OPS.has(data)) {
              let str4 = "execute_tool";
              if ("ai.toolCall" !== data) {
                str4 = data;
              }
              str3 = str4;
            }
            str2 = str3;
          }
          str = str2;
        }
        return str;
      })(data[AI_MODEL_ID_ATTRIBUTE.OPERATION_NAME_ATTRIBUTE]);
    }
    renameAttributeKey(
      data,
      AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_MESSAGES_ATTRIBUTE,
      ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
    );
    renameAttributeKey(data, AI_MODEL_ID_ATTRIBUTE.AI_RESPONSE_TEXT_ATTRIBUTE, "gen_ai.response.text");
    renameAttributeKey(data, AI_MODEL_ID_ATTRIBUTE.AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, "gen_ai.response.tool_calls");
    renameAttributeKey(data, AI_MODEL_ID_ATTRIBUTE.AI_RESPONSE_OBJECT_ATTRIBUTE, "gen_ai.response.object");
    renameAttributeKey(data, AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_TOOLS_ATTRIBUTE, "gen_ai.request.available_tools");
    renameAttributeKey(
      data,
      AI_MODEL_ID_ATTRIBUTE.AI_TOOL_CALL_ARGS_ATTRIBUTE,
      ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_TOOL_INPUT_ATTRIBUTE,
    );
    renameAttributeKey(
      data,
      AI_MODEL_ID_ATTRIBUTE.AI_TOOL_CALL_RESULT_ATTRIBUTE,
      ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_TOOL_OUTPUT_ATTRIBUTE,
    );
    renameAttributeKey(data, AI_MODEL_ID_ATTRIBUTE.AI_SCHEMA_ATTRIBUTE, "gen_ai.request.schema");
    renameAttributeKey(
      data,
      AI_MODEL_ID_ATTRIBUTE.AI_MODEL_ID_ATTRIBUTE,
      ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MODEL_ATTRIBUTE,
    );
    (function addProviderMetadataToAttributes(data) {
      const tmp3 = data[AI_MODEL_ID_ATTRIBUTE.AI_RESPONSE_PROVIDER_METADATA_ATTRIBUTE];
      if (tmp3) {
        try {
          const _JSON = JSON;
          const parsed = JSON.parse(tmp3);
          let azure = parsed.openai;
          if (azure == null) {
            azure = tmp6.azure;
          }
          if (azure) {
            setAttributeIfDefined(
              data,
              ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
              azure.cachedPromptTokens,
            );
            setAttributeIfDefined(data, "gen_ai.usage.output_tokens.reasoning", azure.reasoningTokens);
            setAttributeIfDefined(
              data,
              "gen_ai.usage.output_tokens.prediction_accepted",
              azure.acceptedPredictionTokens,
            );
            setAttributeIfDefined(
              data,
              "gen_ai.usage.output_tokens.prediction_rejected",
              azure.rejectedPredictionTokens,
            );
            setAttributeIfDefined(data, "gen_ai.conversation.id", azure.responseId);
          }
          if (parsed.anthropic) {
            const usage = tmp6.anthropic.usage;
            let prop;
            if (usage != null) {
              prop = usage.cache_read_input_tokens;
            }
            if (prop == null) {
              prop = tmp6.anthropic.cacheReadInputTokens;
            }
            setAttributeIfDefined(
              data,
              ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
              prop,
            );
            const usage2 = tmp6.anthropic.usage;
            let prop1;
            if (usage2 != null) {
              prop1 = usage2.cache_creation_input_tokens;
            }
            if (prop1 == null) {
              prop1 = tmp6.anthropic.cacheCreationInputTokens;
            }
            setAttributeIfDefined(
              data,
              ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE,
              prop1,
            );
          }
          const bedrock = tmp6.bedrock;
          let usage1;
          if (bedrock != null) {
            usage1 = bedrock.usage;
          }
          if (usage1) {
            setAttributeIfDefined(
              data,
              ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
              tmp6.bedrock.usage.cacheReadInputTokens,
            );
            setAttributeIfDefined(
              data,
              ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE,
              tmp6.bedrock.usage.cacheWriteInputTokens,
            );
          }
          if (parsed.deepseek) {
            setAttributeIfDefined(
              data,
              ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
              parsed.deepseek.promptCacheHitTokens,
            );
            setAttributeIfDefined(data, "gen_ai.usage.input_tokens.cache_miss", parsed.deepseek.promptCacheMissTokens);
          }
        } catch (err) {}
      }
    })(data);
    const _Object = Object;
    const keys = Object.keys(data);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp24 = nextResult;
      if (nextResult.startsWith("ai.")) {
        let _HermesInternal = HermesInternal;
        let tmp28 = renameAttributeKey(data, tmp24, "vercel." + tmp24);
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
function setAttributeIfDefined(data, GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, acceptedPredictionTokens) {
  if (null != acceptedPredictionTokens) {
    data[GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE] = acceptedPredictionTokens;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function addVercelAiProcessors(on) {
  on.on("spanStart", onVercelAiSpanStart);
  on.addEventProcessor(Object.assign(vercelAiEventProcessor, { id: "VercelAiEventProcessor" }));
}
