// discord_app/modules/conjure/settings/conjureSettingsSummary.tsx
import _modDef4245 from "../intl/ConjureUntranslated.messages.js";
import conjureSettingsRequest from "conjureSettingsRequest.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const util = intl(1112);
const conjureSettingValues = intl(14759);
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSummary.tsx");

export function conjureSettingsSummary(request2, settings, arg2) {
  _require = settings;
  closure_1 = arg2;
  let result = require("conjureSettingsRequest").conjureSettingsRequestKeys(request2, settings);
  return result.flatMap((key) => {
    let intl = require;
    let prop = dependencyMap;
    const result = conjureSettingsRequest.conjureSettingsRequestEntry(key, def2);
    if (null != result) {
      if (result.filled) {
        const obj2 = { key, text: null };
        const intl2 = util.intl;
        const def = result.def;
        let label;
        if (def != null) {
          label = def.label;
        }
        if (label == null) {
          label = key;
        }
        let obj3 = { label, value: null };
        if ("secret" === result.kind) {
          intl = util.intl;
          prop = _modDef4245["w0Pnu+"];
          let stringResult = intl.string(prop);
        } else {
          def2 = result.def;
          const result1 = conjureSettingValues.conjureSettingAnyStoredValue(def2, result.def);
          const _Array = Array;
          if (Array.isArray(result1)) {
            const _String2 = String;
            let mapped = result1.map(String);
          } else {
            const _String = String;
            mapped = [String(result1)];
          }
          const type = def2.type;
          if ("checkbox" === type) {
            const intl6 = util.intl;
            if (true === result1) {
              let nXtpn3 = _modDef4245.nXtpn3;
            } else {
              nXtpn3 = _modDef4245["0vfaMW"];
            }
            intl6.string(nXtpn3);
          } else if ("select" === type) {
            const mapped1 = mapped.map((item) => {
              closure_0 = item;
              const options = def2.options;
              let label;
              if (options != null) {
                const found = options.find((value) => value.value === closure_0);
                if (found != null) {
                  label = found.label;
                }
              }
              if (label == null) {
                label = item;
              }
              return label;
            });
            stringResult = mapped1.join(", ");
          } else if ("channel" === type) {
            const mapped2 = mapped.map((item) => {
              const tmp = closure_1(item);
              if (null != tmp) {
                const _HermesInternal = HermesInternal;
                let combined = "#" + tmp;
              } else {
                const intl = def2(1112).intl;
                combined = intl.string(closure_1(4245).Fw9G9A);
              }
              return combined;
            });
            stringResult = mapped2.join(", ");
          } else if ("game" === type) {
            if (0 === mapped.length) {
              const intl5 = util.intl;
              let stringResult2 = intl5.string(_modDef4245.nEv677);
            } else {
              const intl4 = util.intl;
              stringResult2 = intl4.string(_modDef4245.Fw9G9A);
            }
            stringResult = stringResult2;
          } else {
            if ("role" !== type) {
              if ("user" !== type) {
                stringResult = mapped.join(", ");
              }
            }
            const intl3 = util.intl;
            stringResult = intl3.string(_modDef4245.Fw9G9A);
          }
          const intlResult = conjureSettingValues;
        }
        obj3.value = stringResult;
        obj2.text = intl2.formatToPlainString(_modDef4245["Z+FC3j"], obj3);
        obj3 = [obj2];
      }
    }
    return [];
  });
}
export function conjureSavedKeysSummary(arr) {
  const mapped = arr.map((label) => {
    const intl = require("util").intl;
    const obj = { label, value: null };
    const intl2 = require("util").intl;
    obj.value = intl2.string(_modDef4245["w0Pnu+"]);
    return intl.formatToPlainString(_modDef4245["Z+FC3j"], obj);
  });
  return mapped.join(" \u00B7 ");
}
