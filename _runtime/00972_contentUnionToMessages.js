// === Module 972: contentUnionToMessages ===

// Module 972 (contentUnionToMessages)
import _mod971 from "module_971" /* 971 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function contentUnionToMessages(contents, user) {
  let str = user;
  if (user === undefined) {
    str = "user";
  }
  if (typeof contents === "string") {
    let obj = { role: null, content: null };
    obj[0] = str;
    obj[1] = contents;
    const items = [obj];
    let flatMapResult = items;
  } else {
    const _Array = Array;
    if (Array.isArray(contents)) {
      flatMapResult = contents.flatMap((arg0) => closure_1_2(arg0, str));
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
              obj = { role: null, content: null };
              obj[0] = str;
              obj[1] = contents;
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
arg5.contentUnionToMessages = contentUnionToMessages;
arg5.isStreamingMethod = function isStreamingMethod(arr) {
  return arr.includes("Stream");
};
arg5.shouldInstrument = function shouldInstrument(str) {
  const GOOGLE_GENAI_INSTRUMENTED_METHODS = _mod971.GOOGLE_GENAI_INSTRUMENTED_METHODS;
  if (GOOGLE_GENAI_INSTRUMENTED_METHODS.includes(str)) {
    return true;
  } else {
    const parts = str.split(".");
    const GOOGLE_GENAI_INSTRUMENTED_METHODS2 = _mod971.GOOGLE_GENAI_INSTRUMENTED_METHODS;
    return GOOGLE_GENAI_INSTRUMENTED_METHODS2.includes(parts.pop());
  }
  const tmp = require;
};