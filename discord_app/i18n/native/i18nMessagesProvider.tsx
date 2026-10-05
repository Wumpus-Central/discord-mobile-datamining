// discord_app/i18n/native/i18nMessagesProvider.tsx
import intl2 from "../../intl/index.native.tsx";
import _mod1165 from "../../../_runtime/metro/01165__.js";
import react_nativeDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeI18nModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  let obj = react_nativeDefault;
  const keys = obj.getKeys();
  const mapped = keys.map((item) => {
    const obj = _mod1165;
    const result = obj.runtimeHashMessageKey(item);
    const tmp4 = intl2.t[result];
    let str = "";
    if (null != tmp4) {
      const intl = intl2.intl;
      str = intl.reserialize(tmp4);
    }
    return str;
  });
  const obj2 = react_nativeDefault;
  obj2.valuesResult(mapped);
}
