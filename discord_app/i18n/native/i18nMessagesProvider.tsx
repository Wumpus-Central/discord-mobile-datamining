// discord_app/i18n/native/i18nMessagesProvider.tsx
import util from "../../intl/index.native.tsx";
import _mod1165 from "../../../_runtime/metro/01165__.js";
import NativeI18nModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeI18nModule.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  const keys = NativeI18nModuleDefault.getKeys();
  const mapped = keys.map((item) => {
    const result = _mod1165.runtimeHashMessageKey(item);
    const tmp4 = util.t[result];
    let str = "";
    if (null != tmp4) {
      const intl = util.intl;
      str = intl.reserialize(tmp4);
    }
    return str;
  });
  NativeI18nModuleDefault.valuesResult(mapped);
}
