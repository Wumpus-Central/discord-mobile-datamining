// === Module 18657: conjureRemixSettingsRequest ===

// Module 18657 (conjureRemixSettingsRequest)
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/remix/conjureRemixSettingsRequest.tsx");

export function conjureRemixSettingsRequest(projectEvent) {
  let type;
  if (projectEvent != null) {
    type = projectEvent.type;
  }
  let settings_keys;
  if ("remixed" === type) {
    settings_keys = projectEvent.settings_keys;
  }
  let tmp3 = null;
  if (null != settings_keys) {
    tmp3 = null;
    if (0 !== settings_keys.length) {
      const obj = { keys: settings_keys, note: null };
      const intl = util.intl;
      obj.note = intl.string(_modDef4245.F2yVHg);
      tmp3 = obj;
    }
  }
  return tmp3;
}