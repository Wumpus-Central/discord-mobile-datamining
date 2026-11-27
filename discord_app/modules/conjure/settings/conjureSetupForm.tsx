// discord_app/modules/conjure/settings/conjureSetupForm.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4245 from "../intl/ConjureUntranslated.messages.js";
import conjureSettingValues from "conjureSettingValues.tsx";
import conjureSettingsRequest from "conjureSettingsRequest.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conjure/settings/conjureSetupForm.tsx");

export function conjureSetupItems(found1, stateFromStores, arg2) {
  closure_0 = stateFromStores;
  closure_1 = arg2;
  return found1.flatMap((key) => {
    const result = conjureSettingsRequest.conjureSettingsRequestEntry(key, closure_0);
    if (null == result) {
      return [];
    } else if ("secret" === result.kind) {
      let filled = result.filled;
      if (!filled) {
        let str2 = closure_1.secrets[key];
        if (str2 == null) {
          str2 = "";
        }
        filled = "" !== str2.trim();
      }
      const obj2 = { key, label: null, filled: null, needed: null };
      const def = result.def;
      let label;
      if (def != null) {
        label = def.label;
      }
      if (label == null) {
        label = key;
      }
      obj2.label = label;
      obj2.filled = filled;
      obj2.needed = !filled;
      items = [obj2];
      return items;
    } else {
      const def2 = result.def;
      const tmpResult = conjureSettingValues;
      const tmp11 = closure_1.values[tmpResult.conjureSettingDraftKey(tmpResult, def2, closure_1.serverId)];
      let result1;
      if (undefined !== tmp11) {
        result1 = conjureSettingValues.conjureSettingSubmitValue(def2, tmp11);
        const tmpResult4 = conjureSettingValues;
      }
      if (undefined === result1) {
        result1 = conjureSettingValues.conjureSettingAnyStoredValue(closure_0, def2);
        const tmpResult5 = conjureSettingValues;
      }
      let tmp6 = null != result1;
      if (tmp6) {
        tmp6 = "" !== result1;
      }
      const obj3 = { key, label: def2.label, filled: tmp6, needed: null };
      const tmpResult6 = conjureSettingsRequest;
      obj3.needed = conjureSettingsRequest.conjureSettingsEntryRequired(result) && !tmp6;
      const items1 = [obj3];
      return items1;
    }
  });
}
export function conjureSettingDraftError(type, arg1) {
  if ("number" === type.type) {
    if (undefined !== arg1) {
      const result = conjureSettingValues.conjureSettingSubmitValue(type, arg1);
      if (null === result) {
        return null;
      } else if (typeof result !== "number") {
        const obj2 = { kind: "invalid" };
      } else {
        if (null != type.min) {
          if (result < type.min) {
            const obj5 = { kind: "min", min: type.min };
          }
        }
        if (null != type.max) {
          if (result > type.max) {
            const obj = { kind: "max", max: type.max };
          }
        }
      }
    }
  }
  return null;
}
export function conjureSetupTitle(name) {
  let str;
  if (name != null) {
    str = name.trim();
  }
  if (str == null) {
    str = "";
  }
  if ("" === str) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef4245.AP0svk);
  } else {
    const intl = util.intl;
    const obj = { name: str };
    stringResult = intl.formatToPlainString(_modDef4245.x1ppJb, obj);
  }
  return stringResult;
}
export const SETUP_STATUS_MAX_LINES = 2;
export function conjureSetupNeededText(join) {
  if (join.length > 2) {
    const intl = util.intl;
    const obj = { count: join.length };
    let formatToPlainStringResult = intl.formatToPlainString(_modDef4245.GCBZ4y, obj);
  } else {
    formatToPlainStringResult = join.join(", ");
  }
  return formatToPlainStringResult;
}
export function conjureSetupStatusText(conjureSetupItemsResult) {
  const found = conjureSetupItemsResult.filter((needed) => needed.needed);
  if (0 === found.length) {
    let stringResult = null;
    if (conjureSetupItemsResult.length > 0) {
      stringResult = null;
      if (conjureSetupItemsResult.every((filled) => filled.filled)) {
        const intl4 = util.intl;
        stringResult = intl4.string(_modDef4245["7dCuuy"]);
      }
    }
    let stringResult1 = stringResult;
  } else if (conjureSetupItemsResult.some((filled) => filled.filled)) {
    let intl2 = require;
    let obj = dependencyMap;
    const intl3 = util.intl;
    let GCBZ4y = importDefault;
    let mapped = found.map((label) => label.label);
    if (mapped.length > 2) {
      intl2 = intl2(1112).intl;
      GCBZ4y = GCBZ4y(4245).GCBZ4y;
      const obj2 = { count: null };
      mapped = mapped.length;
      obj2.count = mapped;
      let formatToPlainStringResult = intl2.formatToPlainString(GCBZ4y, obj2);
    } else {
      formatToPlainStringResult = mapped.join(", ");
    }
    obj = { items: formatToPlainStringResult };
    intl3.formatToPlainString(_modDef4245.LqdG9C, obj);
  } else {
    stringResult1 = null;
    if (conjureSetupItemsResult.length > 1) {
      const intl = util.intl;
      stringResult1 = intl.string(_modDef4245.t5po6q);
    }
  }
  return stringResult1;
}
export function conjureSetupFieldErrorText(label, draftErrorOfResult) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef4245.fsStRX, { label, error: draftErrorOfResult });
}
