// === Module 12320: conjureSettingsSummary ===

// Module 12320 (conjureSettingsSummary)
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsSummary.tsx");

export const conjureSettingsSummary = function conjureSettingsSummary(settingsRequest, settings, arg2) {
  _require = settings;
  closure_1 = arg2;
  const result = require("conjureSettingsRequest").conjureSettingsRequestKeys(settingsRequest, settings);
  return result.flatMap((key) => {
    const schema = settings.schema;
    let found = schema.find((key) => key.key === found);
    if (null == found) {
      return [];
    } else {
      const obj = { key, text: null };
      let intl = util.intl;
      const obj2 = { label: found.label, value: null };
      const _Array = Array;
      if (Array.isArray("secret" === found.type || settings.values[key])) {
        const _String2 = String;
        let mapped = arr2.map(String);
      } else {
        const _String = String;
        mapped = [String(arr2)];
      }
      const type = found.type;
      if ("secret" === type) {
        const intl4 = util.intl;
        let stringResult = intl4.string(_modDef3830.CJq1rY);
      } else if ("checkbox" === type) {
        const intl3 = util.intl;
        if (true === arr2) {
          let nXtpn3 = _modDef3830.nXtpn3;
        } else {
          nXtpn3 = _modDef3830["0vfaMW"];
        }
        stringResult = intl3.string(nXtpn3);
      } else if ("select" === type) {
        const mapped1 = mapped.map((item) => {
          closure_0 = item;
          const options = found.options;
          let label;
          if (options != null) {
            found = options.find((value) => value.value === closure_0);
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
            const intl = closure_0(1128).intl;
            combined = intl.string(closure_1(3830).Fw9G9A);
          }
          return combined;
        });
        stringResult = mapped2.join(", ");
      } else {
        if ("role" !== type) {
          if ("user" !== type) {
            stringResult = mapped.join(", ");
          }
        }
        const intl2 = util.intl;
        stringResult = intl2.string(_modDef3830.Fw9G9A);
      }
      obj2.value = stringResult;
      obj.text = intl.formatToPlainString(_modDef3830["Z+FC3j"], obj2);
      const items = [obj];
      return items;
    }
  });
};
export const conjureConnectedKeysSummary = function conjureConnectedKeysSummary(arr) {
  const mapped = arr.map((label) => {
    const intl = require("util").intl;
    const obj = { label, value: null };
    const intl2 = require("util").intl;
    obj.value = intl2.string(_modDef3830.CJq1rY);
    return intl.formatToPlainString(_modDef3830["Z+FC3j"], obj);
  });
  return mapped.join(" \u00B7 ");
};