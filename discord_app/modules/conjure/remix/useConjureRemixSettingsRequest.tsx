// discord_app/modules/conjure/remix/useConjureRemixSettingsRequest.tsx
import conjureSettingsRequest from "../settings/conjureSettingsRequest.tsx";
import ConjureSettingsStore from "../settings/ConjureSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixSettingsRequest.tsx");

export default function useConjureRemixSettingsRequest(arg0, type) {
  _require = arg0;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  let settings_keys;
  if ("remixed" === type) {
    settings_keys = type.settings_keys;
  }
  const items = [ConjureSettingsStore];
  const items1 = [settings_keys, arg0];
  let tmp5 = null;
  if (
    obj.useStateFromStores(
      items,
      () => {
        let result = null != settings_keys;
        if (result) {
          result = settings_keys.length > 0;
        }
        if (result) {
          const obj2 = { keys: settings_keys };
          result = conjureSettingsRequest.conjureSettingsRequestBlocks(
            obj2,
            ConjureSettingsStore.getSettings(closure_0),
          );
        }
        return result;
      },
      items1,
    )
  ) {
    tmp5 = null;
    if (null != settings_keys) {
      let obj2 = { keys: settings_keys, note: null };
      const intl = require("util").intl;
      obj2.note = intl.string(settings_keys(3868).F2yVHg);
      tmp5 = obj2;
    }
  }
  return tmp5;
}
