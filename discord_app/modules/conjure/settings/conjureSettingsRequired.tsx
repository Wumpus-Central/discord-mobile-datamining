// === Module 11792: conjureSettingsRequired ===

// Module 11792 (conjureSettingsRequired)
import size from "module_2" /* 2 */;

const set = new Set(["select", "checkbox", "channel", "role", "user"]);
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsRequired.tsx");

export const isConjureSettingRequired = function isConjureSettingRequired(required) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  required = undefined;
  if (required != null) {
    required = required.required;
  }
  let tmp2 = true === required;
  if (tmp2) {
    tmp2 = "secret" !== required.type || !flag;
    const tmp3 = "secret" !== required.type || !flag;
  }
  return tmp2;
};
export const conjureMissingRequiredSettings = function conjureMissingRequiredSettings(arr) {
  const found = arr.filter((item) => {
    ({ def, value, secretStored } = item);
    const hasItem = set.has(def.type);
    let tmp2 = !hasItem;
    if (!hasItem) {
      if (secretStored === undefined) {
        secretStored = false;
      }
      let required;
      if (def != null) {
        required = def.required;
      }
      let tmp5 = true === required;
      if (tmp5) {
        tmp5 = "secret" !== def.type || !secretStored;
        const tmp6 = "secret" !== def.type || !secretStored;
      }
      tmp2 = tmp5;
    }
    if (tmp2) {
      if (null == trimmed) {
        tmp2 = tmp8;
      } else if (typeof trimmed === "string") {
        trimmed = trimmed.trim();
        let isArray = "" === trimmed;
      } else {
        const _Array = Array;
        isArray = Array.isArray(trimmed);
        if (isArray) {
          isArray = 0 === trimmed.length;
        }
      }
    }
    return tmp2;
  });
  return found.map((def) => def.def.key);
};