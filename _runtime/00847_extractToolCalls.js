// _runtime/00847_extractToolCalls.js
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00823_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import asString from "00843_asString.js";

require = arg1;
const dependencyMap = arg6;
function extractToolCalls(substr) {
  if (substr) {
    if (0 !== substr.length) {
      const items = [];
      const iter = substr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (nextResult) {
          if (typeof tmp4 === "object") {
            let tool_calls = tmp4.tool_calls;
            let tmp18 = tool_calls;
            if (tool_calls) {
              let _Array = Array;
              tool_calls = Array.isArray(tmp18);
            }
            if (tool_calls) {
              let push = items.push;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(tmp18, 0);
              let applyResult = HermesBuiltin.apply(items1, items);
            }
          }
        }
        continue;
      }
      let tmp14 = null;
      if (items.length > 0) {
        tmp14 = items;
      }
      return tmp14;
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
      const obj = { inputTokens: num5, outputTokens: num6, totalTokens: num7 };
      return obj;
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
      if (tmp) {
        const attr = setAttribute.setAttribute(
          ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_MODEL_ATTRIBUTE,
          response_metadata.model_name,
        );
      }
      if (tmp6) {
        const items = [response_metadata.finish_reason];
        const attr1 = setAttribute.setAttribute(
          ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE,
          items,
        );
      }
      tmp = response_metadata.model_name && typeof response_metadata.model_name === "string";
      tmp6 = response_metadata.finish_reason && typeof response_metadata.finish_reason === "string";
    }
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { extractModelMetadata };
export { extractTokenUsageFromMessage };
export { extractToolCalls };
export const extractToolsFromCompiledGraph = function extractToolsFromCompiledGraph(builder) {
  builder = builder.builder;
  let tools;
  if (builder != null) {
    const nodes = builder.nodes;
    if (nodes != null) {
      tools = nodes.tools;
      if (tools != null) {
        const runnable = tools.runnable;
        if (runnable != null) {
          tools = runnable.tools;
        }
      }
    }
  }
  if (tools) {
    const builder2 = builder.builder;
    let tools1;
    if (builder2 != null) {
      const nodes2 = builder2.nodes;
      if (nodes2 != null) {
        const tools2 = nodes2.tools;
        if (tools2 != null) {
          const runnable2 = tools2.runnable;
          if (runnable2 != null) {
            tools1 = runnable2.tools;
          }
        }
      }
    }
    let mapped = null;
    if (tools1) {
      const _Array = Array;
      mapped = null;
      if (Array.isArray(tools1)) {
        mapped = null;
        if (0 !== tools1.length) {
          mapped = tools1.map((lc_kwargs) => {
            lc_kwargs = lc_kwargs.lc_kwargs;
            let name;
            if (lc_kwargs != null) {
              name = lc_kwargs.name;
            }
            const obj = { name, description: null, schema: null };
            const lc_kwargs2 = lc_kwargs.lc_kwargs;
            let description;
            if (lc_kwargs2 != null) {
              description = lc_kwargs2.description;
            }
            obj.description = description;
            const lc_kwargs3 = lc_kwargs.lc_kwargs;
            let schema;
            if (lc_kwargs3 != null) {
              schema = lc_kwargs3.schema;
            }
            obj.schema = schema;
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
export const setResponseAttributes = function setResponseAttributes(setAttribute, c2, messages) {
  messages = undefined;
  if (messages != null) {
    messages = messages.messages;
  }
  if (messages) {
    const _Array = Array;
    if (Array.isArray(messages)) {
      let num;
      if (extractToolCalls != null) {
        num = extractToolCalls.length;
      }
      if (num == null) {
        num = 0;
      }
      if (messages.length > num) {
        let substr = messages.slice(num);
      } else {
        substr = [];
      }
      if (0 !== substr.length) {
        const tmp34 = extractToolCalls(substr);
        if (tmp34) {
          const _JSON = JSON;
          const attr = setAttribute.setAttribute(
            ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE,
            JSON.stringify(tmp34),
          );
        }
        const result = asString.normalizeLangChainMessages(substr);
        const _JSON2 = JSON;
        const attr1 = setAttribute.setAttribute(
          ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TEXT_ATTRIBUTE,
          JSON.stringify(result),
        );
        let num3 = 0;
        let num4 = 0;
        let num5 = 0;
        for (const item10050 of substr) {
          let tmp14 = extractTokenUsageFromMessage(item10050);
          num3 = num3 + tmp14.inputTokens;
          num4 = num4 + tmp14.outputTokens;
          num5 = num5 + tmp14.totalTokens;
          let tmp19 = extractModelMetadata(arg0, item10050);
          continue;
        }
        if (num3 > 0) {
          const attr2 = setAttribute.setAttribute(
            ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE,
            num3,
          );
        }
        if (num4 > 0) {
          const attr3 = setAttribute.setAttribute(
            ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE,
            num4,
          );
        }
        if (num5 > 0) {
          const attr4 = setAttribute.setAttribute(
            ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE,
            num5,
          );
        }
      }
    }
  }
};
