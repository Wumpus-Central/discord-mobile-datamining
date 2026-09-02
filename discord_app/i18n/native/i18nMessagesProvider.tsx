// discord_app/i18n/native/i18nMessagesProvider.tsx
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import enforcingDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeI18nModule.tsx";
import set from "../../utils/PlatformUtils.tsx";

if (set.isAndroid()) {
  let i18nManager = enforcingDefault;
} else {
  i18nManager = get_ActivityIndicator.NativeModules.i18nManager;
}
let result = set.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_2.keysRequest((arr) => {
      closure_1_2.valuesResult(
        arr.map((code) => {
          const result = callback(1273).runtimeHashMessageKey(code);
          const tmp4 = callback(1233).t[result];
          let str = "";
          if (null != tmp4) {
            const intl = callback(1233).intl;
            str = intl.reserialize(tmp4);
          }
          return str;
        }),
      );
      callback(true);
    });
  });
}
