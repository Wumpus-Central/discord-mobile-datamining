// === Module 840: contentUnionToMessages ===

// Module 840 (contentUnionToMessages)
import CHATS_CREATE_METHOD from "CHATS_CREATE_METHOD" /* 839 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function contentUnionToMessages(contents) {
  let str = user;
  if (user === undefined) {
    str = "user";
  }
  if (typeof contents === "string") {
    let obj = { role: str, content: contents };
    const items = [obj];
    let flatMapResult = items;
  } else {
    const _Array = Array;
    if (Array.isArray(contents)) {
      flatMapResult = contents.flatMap((item) => contentUnionToMessages(item, str));
    } else {
      if (typeof contents === "object") {
        if (contents) {
          if (!("role" in contents)) {
            if ("parts" in contents) {
              obj = {};
              const merged = Object.assign(contents);
              obj.role = str;
              const items1 = [obj];
              let items2 = items1;
            } else {
              obj = { role: str, content: contents };
              items2 = [obj];
            }
          }
          const items3 = [contents];
          items2 = items3;
        }
      }
      flatMapResult = [];
    }
  }
  return flatMapResult;
}

export { contentUnionToMessages };
export const isStreamingMethod = function isStreamingMethod(arr) {
  return arr.includes("Stream");
};
export const shouldInstrument = function shouldInstrument(str) {
  const GOOGLE_GENAI_INSTRUMENTED_METHODS = CHATS_CREATE_METHOD.GOOGLE_GENAI_INSTRUMENTED_METHODS;
  if (GOOGLE_GENAI_INSTRUMENTED_METHODS.includes(str)) {
    return true;
  } else {
    const parts = str.split(".");
    const GOOGLE_GENAI_INSTRUMENTED_METHODS2 = CHATS_CREATE_METHOD.GOOGLE_GENAI_INSTRUMENTED_METHODS;
    return GOOGLE_GENAI_INSTRUMENTED_METHODS2.includes(parts.pop());
  }
};