// discord_app/i18n/native/i18nMessagesProvider.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import NativeI18nModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeI18nModule.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

if (PlatformUtils.isAndroid()) {
  let i18nManager = NativeI18nModuleDefault;
} else {
  i18nManager = _mod17.NativeModules.i18nManager;
}
let result = size.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_2.keysRequest((arr) => {
      i18nManager.valuesResult(
        arr.map((item) => {
          const result = closure_1_0(1155).runtimeHashMessageKey(item);
          const tmp4 = closure_1_0(1114).t[result];
          let str = "";
          if (null != tmp4) {
            const intl = closure_1_0(1114).intl;
            str = intl.reserialize(tmp4);
          }
          return str;
        }),
      );
      closure_0(true);
    });
  });
}
