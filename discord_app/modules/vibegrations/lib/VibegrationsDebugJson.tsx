// === Module 17136: VibegrationsDebugJson ===

// Module 17136 (VibegrationsDebugJson)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugJson.tsx");

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
      const trimmed = message.slice(tmp3).trim();
      if (trimmed.length < 2) {
        return null;
      } else {
        try {
          const _JSON = JSON;
          const parsed = JSON.parse(trimmed);
          if (typeof parsed === "object") {
            if (null != parsed) {
              const trimmed1 = message.slice(0, tmp3).trim();
              const _JSON2 = JSON;
              const json = JSON.stringify(parsed, null, 2);
              const _Array = Array;
              if (Array.isArray(parsed)) {
                const obj2 = { prefix: trimmed1, pretty: json, marker: "[\u2026]", size: parsed.length };
                let obj = obj2;
              } else {
                obj = { prefix: trimmed1, pretty: json, marker: "{\u2026}", size: null };
                const _Object = Object;
                obj.size = Object.keys(parsed).length;
              }
              return obj;
            }
          }
          return null;
        } catch (err) {
          return null;
        }
      }
      const str3 = message.slice(tmp3);
    }
  }
};