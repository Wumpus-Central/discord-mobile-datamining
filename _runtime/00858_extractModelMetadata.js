// === Module 858: extractModelMetadata ===

// Module 858 (extractModelMetadata)
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 834 */;
import extractChatModelRequestAttributes from "extractChatModelRequestAttributes" /* 854 */;

let lc_kwargs;

function extractToolCalls(substr) {
  if (substr) {
    if (0 !== substr.length) {
      const items = [];
      const iter = substr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        if (tmp5) {
          if (typeof tmp5 === "object") {
            let tool_calls = tmp5.tool_calls;
            let tmp19 = tool_calls;
            if (tmp19) {
              let _Array = Array;
              tool_calls = Array.isArray(tmp19);
            }
            if (tool_calls) {
              let push = items.push;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp19, 0);
              let applyResult = HermesBuiltin.apply(push, items1, items);
            }
          }
        }
        continue;
      }
      let tmp15 = null;
      if (items.length > 0) {
        tmp15 = items;
      }
      return tmp15;
    }
  }
  return null;
}
function extractTokenUsageFromMessage(item10050) {
  if (item10050.usage_metadata) {
    if (typeof item10050.usage_metadata === "object") {
      const usage_metadata = item10050.usage_metadata;
      let num5 = 0;
      if (typeof usage_metadata.input_tokens === "number") {
        num5 = usage_metadata.input_tokens;
      }
      let num6 = 0;
      if (typeof usage_metadata.output_tokens === "number") {
        num6 = usage_metadata.output_tokens;
      }
      let num7 = 0;
      if (typeof usage_metadata.total_tokens === "number") {
        num7 = usage_metadata.total_tokens;
      }
      return { inputTokens: num5, outputTokens: num6, totalTokens: num7 };
    }
  }
  let totalTokens = 0;
  let outputTokens = 0;
  let inputTokens = 0;
  if (item10050.response_metadata) {
    totalTokens = 0;
    outputTokens = 0;
    inputTokens = 0;
    if (typeof item10050.response_metadata === "object") {
      const response_metadata = item10050.response_metadata;
      totalTokens = 0;
      outputTokens = 0;
      inputTokens = 0;
      if (response_metadata.tokenUsage) {
        totalTokens = 0;
        outputTokens = 0;
        inputTokens = 0;
        if (typeof response_metadata.tokenUsage === "object") {
          const tokenUsage = response_metadata.tokenUsage;
          let num8 = 0;
          if (typeof tokenUsage.promptTokens === "number") {
            num8 = tokenUsage.promptTokens;
          }
          let num4 = 0;
          if (typeof tokenUsage.completionTokens === "number") {
            num4 = tokenUsage.completionTokens;
          }
          totalTokens = 0;
          outputTokens = num4;
          inputTokens = num8;
          if (typeof tokenUsage.totalTokens === "number") {
            totalTokens = tokenUsage.totalTokens;
            outputTokens = num4;
            inputTokens = num8;
          }
        }
      }
    }
  }
  return { inputTokens, outputTokens, totalTokens };
}
function extractModelMetadata(setAttribute, item10050) {
  if (item10050.response_metadata) {
    if (typeof item10050.response_metadata === "object") {
      const response_metadata = item10050.response_metadata;
      const tmp = response_metadata.model_name && typeof response_metadata.model_name === "string";
      if (tmp) {
        const attr = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, response_metadata.model_name);
      }
      const tmp6 = response_metadata.finish_reason && typeof response_metadata.finish_reason === "string";
      if (tmp6) {
        const items = [response_metadata.finish_reason];
        const attr1 = setAttribute.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, items);
      }
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { extractModelMetadata };
export { extractTokenUsageFromMessage };
export { extractToolCalls };
export const extractToolsFromCompiledGraph = function extractToolsFromCompiledGraph(builder) {
  builder = builder.builder;
  let tools1;
  if (builder != null) {
    const nodes = builder.nodes;
    if (nodes != null) {
      const tools = nodes.tools;
      if (tools != null) {
        const runnable = tools.runnable;
        if (runnable != null) {
          tools1 = runnable.tools;
        }
      }
    }
  }
  if (tools1) {
    const builder2 = builder.builder;
    let tools3;
    if (builder2 != null) {
      const nodes2 = builder2.nodes;
      if (nodes2 != null) {
        const tools2 = nodes2.tools;
        if (tools2 != null) {
          const runnable2 = tools2.runnable;
          if (runnable2 != null) {
            tools3 = runnable2.tools;
          }
        }
      }
    }
    let mapped = null;
    if (tools3) {
      const _Array = Array;
      mapped = null;
      if (Array.isArray(tools3)) {
        mapped = null;
        if (0 !== tools3.length) {
          mapped = tools3.map((lc_kwargs) => {
            let description;
            let schema;
            lc_kwargs = lc_kwargs.lc_kwargs;
            let name;
            if (lc_kwargs != null) {
              name = lc_kwargs.name;
            }
            const lc_kwargs2 = lc_kwargs.lc_kwargs;
            const obj = { name, description, schema };
            description = undefined;
            if (lc_kwargs2 != null) {
              description = lc_kwargs2.description;
            }
            const lc_kwargs3 = lc_kwargs.lc_kwargs;
            schema = undefined;
            if (lc_kwargs3 != null) {
              schema = lc_kwargs3.schema;
            }
            return obj;
          });
        }
      }
    }
    return mapped;
  } else {
    return null;
  }
};
export const setResponseAttributes = function setResponseAttributes(apply, c2, messages) {
  messages = undefined;
  if (messages != null) {
    messages = messages.messages;
  }
  if (messages) {
    const _Array = Array;
    if (Array.isArray(messages)) {
      let substr;
      let num;
      if (extractToolCalls != null) {
        num = extractToolCalls.length;
      }
      if (num == null) {
        num = 0;
      }
      if (messages.length > num) {
        substr = messages.slice(num);
      } else {
        substr = [];
      }
      if (0 !== substr.length) {
        const tmp34 = extractToolCalls(substr);
        if (tmp34) {
          const setAttribute = apply.setAttribute;
          const _JSON = JSON;
          const attr = setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(tmp34));
        }
        const obj = extractChatModelRequestAttributes;
        const result = obj.normalizeLangChainMessages(substr);
        const setAttribute2 = apply.setAttribute;
        const _JSON2 = JSON;
        setAttribute2(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TEXT_ATTRIBUTE, JSON.stringify(result));
        let num3 = 0;
        let num4 = 0;
        let num5 = 0;
        for (const item10050 of substr) {
          let tmp14 = extractTokenUsageFromMessage(item10050);
          num3 = num3 + tmp14.inputTokens;
          num4 = num4 + tmp14.outputTokens;
          num5 = num5 + tmp14.totalTokens;
          let tmp19 = extractModelMetadata(apply, item10050);
          continue;
        }
        if (num3 > 0) {
          const attr1 = apply.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, num3);
        }
        if (num4 > 0) {
          const attr2 = apply.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, num4);
        }
        if (num5 > 0) {
          const attr3 = apply.setAttribute(ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, num5);
        }
      }
    }
  }
};