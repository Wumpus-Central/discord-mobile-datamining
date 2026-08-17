// _runtime/00960_buildMethodPath.js
import _mod958 from "module_958" /* 958 */;
import truncateTextByBytes from "truncateTextByBytes" /* 961 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.buildMethodPath = function buildMethodPath(arg0, arg1) {
  let combined = arg1;
  if (arg0) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "." + arg1;
  }
  return combined;
};
arg5.getFinalOperationName = function getFinalOperationName(closure_0) {
  let str = "messages";
  if (!closure_0.includes("messages")) {
    let str2 = "completions";
    if (!closure_0.includes("completions")) {
      let str3 = "models";
      if (!closure_0.includes("models")) {
        let str4 = "chat";
        if (!closure_0.includes("chat")) {
          const parts = closure_0.split(".");
          str4 = parts.pop() || "unknown";
          const tmp = parts.pop() || "unknown";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
arg5.getSpanOperation = function getSpanOperation(arr) {
  let str = "messages";
  if (!arr.includes("messages")) {
    let str2 = "completions";
    if (!arr.includes("completions")) {
      let str3 = "models";
      if (!arr.includes("models")) {
        let str4 = "chat";
        if (!arr.includes("chat")) {
          const parts = arr.split(".");
          str4 = parts.pop() || "unknown";
          const tmp = parts.pop() || "unknown";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return "gen_ai." + str;
};
arg5.getTruncatedJsonString = function getTruncatedJsonString(arr) {
  if (typeof arr === "string") {
    return truncateTextByBytes.truncateGenAiStringInput(arr);
  } else {
    const _Array = Array;
    if (Array.isArray(arr)) {
      const _JSON2 = JSON;
      return JSON.stringify(truncateTextByBytes.truncateGenAiMessages(arr));
    } else {
      const _JSON = JSON;
      return JSON.stringify(arr);
    }
  }
};
arg5.setTokenUsageAttributes = function setTokenUsageAttributes(setAttributes) {
  let num = arg1;
  if (undefined !== arg1) {
    let obj = {};
    obj[_mod958.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = num;
    setAttributes.setAttributes(obj);
  }
  let num2 = arg2;
  if (undefined !== arg2) {
    obj = {};
    obj[_mod958.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = num2;
    setAttributes.setAttributes(obj);
  }
  let num3 = arg3;
  let num4 = arg4;
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
  setAttributes.setAttributes({ [closure_0(closure_1[0]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE]: sum2 });
};