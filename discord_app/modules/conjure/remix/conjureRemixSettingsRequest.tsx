// discord_app/modules/conjure/remix/conjureRemixSettingsRequest.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4245 from "../intl/ConjureUntranslated.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

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
