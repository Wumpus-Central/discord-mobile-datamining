// _runtime/00851_contentUnionToMessages.js
import CHATS_CREATE_METHOD from "00850_CHATS_CREATE_METHOD.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function contentUnionToMessages(contents) {
  let flatMapResult;
  let str = user;
  if (user === undefined) {
    str = "user";
  }
  if (typeof contents === "string") {
    const items = [{ role: str, content: contents }];
    flatMapResult = items;
    const obj2 = { role: str, content: contents };
  } else {
    const _Array = Array;
    if (Array.isArray(contents)) {
      flatMapResult = contents.flatMap((item) => contentUnionToMessages(item, str));
    } else {
      if (typeof contents === "object") {
        if (contents) {
          let items3;
          if ("role" in contents) {
            if (typeof contents.role === "string") {
              const items1 = [contents];
              items3 = items1;
            }
            flatMapResult = items3;
          }
          if ("parts" in contents) {
            const obj3 = { role: str };
            const merged = Object.assign(contents);
            const items2 = [obj3];
            items3 = items2;
          } else {
            items3 = [{ role: str, content: contents }];
            const obj = { role: str, content: contents };
          }
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
    const arr = parts.pop();
    const GOOGLE_GENAI_INSTRUMENTED_METHODS2 = CHATS_CREATE_METHOD.GOOGLE_GENAI_INSTRUMENTED_METHODS;
    return GOOGLE_GENAI_INSTRUMENTED_METHODS2.includes(arr);
  }
};
