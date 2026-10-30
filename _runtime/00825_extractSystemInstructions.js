// === Module 825: extractSystemInstructions ===

// Module 825 (extractSystemInstructions)
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 824 */;
import truncateTextByBytes from "truncateTextByBytes" /* 826 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function buildMethodPath(arg0, arg1) {
  let combined = arg1;
  if (arg0) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "." + arg1;
  }
  return combined;
}
export function extractSystemInstructions(arr) {
  if (Array.isArray(arr)) {
    const findIndexResult = arr.findIndex((role) => {
      let tmp = role;
      if (role) {
        tmp = typeof role === "object";
      }
      if (tmp) {
        tmp = "role" in role;
      }
      if (tmp) {
        tmp = "system" === role.role;
      }
      return tmp;
    });
    if (-1 === findIndexResult) {
      const obj2 = { systemInstructions: "Array", filteredMessages: arr };
      return obj2;
    } else {
      if (typeof arr[findIndexResult].content === "string") {
        let content = tmp6.content;
      } else if (undefined !== tmp6.content) {
        const _JSON = JSON;
        content = JSON.stringify(tmp6.content);
      }
      if (content) {
        const obj3 = { systemInstructions: null, filteredMessages: null };
        const _JSON2 = JSON;
        const obj4 = { type: "text", content };
        const items = [obj4];
        obj3.systemInstructions = JSON.stringify(items);
        const items1 = [];
        HermesBuiltin.arraySpread(arr.slice(findIndexResult + 1), HermesBuiltin.arraySpread(arr.slice(0, findIndexResult), 0));
        obj3.filteredMessages = items1;
        let obj5 = obj3;
        const arraySpreadResult = HermesBuiltin.arraySpread(arr.slice(0, findIndexResult), 0);
      } else {
        obj5 = { systemInstructions: "Array", filteredMessages: arr };
      }
      return obj5;
    }
  } else {
    const obj = { systemInstructions: "Array", filteredMessages: arr };
    return obj;
  }
}
export function getFinalOperationName(arr) {
  let str = "chat";
  let str2 = "chat";
  if (!arr.includes("messages")) {
    let str4 = "text_completion";
    if (!arr.includes("completions")) {
      let str6 = "generate_content";
      if (!arr.includes("generateContent")) {
        let str7 = "models";
        if (!arr.includes("models")) {
          if (!arr.includes(`chat`)) {
            const parts = arr.split(".");
            str = parts.pop() || "unknown";
            const tmp = parts.pop() || "unknown";
          }
          str7 = str;
        }
        str6 = str7;
      }
      str4 = str6;
    }
    str2 = str4;
  }
  return str2;
}
export function getSpanOperation(arr) {
  let str = "chat";
  let str2 = "chat";
  if (!arr.includes("messages")) {
    let str4 = "text_completion";
    if (!arr.includes("completions")) {
      let str6 = "generate_content";
      if (!arr.includes("generateContent")) {
        let str7 = "models";
        if (!arr.includes("models")) {
          if (!arr.includes(`chat`)) {
            const parts = arr.split(".");
            str = parts.pop() || "unknown";
            const tmp = parts.pop() || "unknown";
          }
          str7 = str;
        }
        str6 = str7;
      }
      str4 = str6;
    }
    str2 = str4;
  }
  return "gen_ai." + str2;
}
export function getTruncatedJsonString(filteredMessages) {
  if (typeof filteredMessages === "string") {
    return truncateTextByBytes.truncateGenAiStringInput(filteredMessages);
  } else {
    const _Array = Array;
    if (Array.isArray(filteredMessages)) {
      const _JSON2 = JSON;
      return JSON.stringify(truncateTextByBytes.truncateGenAiMessages(filteredMessages));
    } else {
      const _JSON = JSON;
      return JSON.stringify(filteredMessages);
    }
  }
}
export function setTokenUsageAttributes(setAttributes, promptTokens, completionTokens, cacheCreationInputTokens, cacheReadInputTokens) {
  let num = promptTokens;
  if (tmp) {
    const obj = {};
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = num;
    setAttributes.setAttributes(obj);
  }
  let num2 = completionTokens;
  if (tmp5) {
    const obj2 = {};
    obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = num2;
    setAttributes.setAttributes(obj2);
  }
  let num3 = cacheCreationInputTokens;
  let num4 = cacheReadInputTokens;
  if (num == null) {
    num = 0;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const sum = num + num2;
  if (num3 == null) {
    num3 = 0;
  }
  const sum1 = sum + num3;
  if (num4 == null) {
    num4 = 0;
  }
  const sum2 = sum1 + num4;
  setAttributes.setAttributes({ [closure_1_0(closure_1_1[0]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE]: sum2 });
  tmp = undefined !== promptTokens;
  tmp5 = undefined !== completionTokens;
}