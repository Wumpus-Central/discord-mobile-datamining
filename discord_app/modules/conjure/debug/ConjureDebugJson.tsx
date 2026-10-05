// discord_app/modules/conjure/debug/ConjureDebugJson.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugJson.tsx");

export const extractLogJson = function extractLogJson(message) {
  if (message.length > 16000) {
    return null;
  } else {
    const index = message.indexOf("{");
    const index1 = message.indexOf("[");
    let tmp3 = index1;
    if (-1 !== index) {
      let bound = index;
      if (-1 !== index1) {
        const _Math = Math;
        bound = Math.min(index, index1);
      }
      tmp3 = bound;
    }
    if (-1 === tmp3) {
      return null;
    } else {
      const str3 = message.slice(tmp3);
      const trimmed = str3.trim();
      if (trimmed.length < 2) {
        return null;
      } else {
        try {
          const _JSON = JSON;
          const parsed = JSON.parse(trimmed);
          if (typeof parsed === "object") {
            if (null != parsed) {
              let obj;
              const str4 = message.slice(0, tmp3);
              const trimmed1 = str4.trim();
              const _JSON2 = JSON;
              const json = JSON.stringify(parsed, null, 2);
              const _Array = Array;
              if (Array.isArray(parsed)) {
                obj = { prefix: trimmed1, pretty: json, marker: "[\u2026]", size: parsed.length };
                const obj2 = { prefix: trimmed1, pretty: json, marker: "[\u2026]", size: parsed.length };
              } else {
                obj = { prefix: trimmed1, pretty: json, marker: "{\u2026}", size: Object.keys(parsed).length };
                const _Object = Object;
              }
              return obj;
            }
          }
          return null;
        } catch (err) {
          return null;
        }
      }
    }
  }
};
