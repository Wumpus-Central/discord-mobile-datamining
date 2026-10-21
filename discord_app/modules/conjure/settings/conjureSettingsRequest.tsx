// === Module 12293: conjureSettingsRequest ===

// Module 12293 (conjureSettingsRequest)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsRequest.tsx");

export const conjureSettingsRequestBlocks = function conjureSettingsRequestBlocks(arg0, settings) {
  let someResult = null != settings;
  if (someResult) {
    let keys = arg0.keys;
    if (keys == null) {
      keys = [];
    }
    someResult = keys.some((item) => {
      settings = item;
      const schema = settings.schema;
      const found = schema.find((key) => key.key === closure_0);
      if (null == found) {
        return false;
      } else if ("secret" === found.type) {
        const secrets = tmp.secrets;
        const found1 = secrets.find((name) => name.name === closure_0);
        let set;
        if (found1 != null) {
          set = found1.set;
        }
        return true !== set;
      } else {
        let tmp4 = null == tmp3;
        if (!tmp4) {
          tmp4 = "" === tmp3;
        }
        return tmp4;
      }
    });
  }
  return someResult;
};