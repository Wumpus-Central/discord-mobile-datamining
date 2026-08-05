import { getSystemLocale } from "../../intl/index.native.tsx";
import { set } from "../AlertActionCreators.tsx";
// discord_app/actions/native/BundleUpdaterActionCreators.tsx
import { NativeModules } from "get ActivityIndicator";

let c4 = false;
const result = require("getSystemLocale").fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default {
  prepareUpdate(versionRequired) {
    if (versionRequired) {
      let obj = set;
      obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      const intl = getSystemLocale /* getSystemLocale */.intl;
      obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.GQZdmI);
      const intl2 = getSystemLocale /* getSystemLocale */.intl;
      obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.Fizu9y);
      const intl3 = getSystemLocale /* getSystemLocale */.intl;
      obj[2] = intl3.string(getSystemLocale /* getSystemLocale */.t.UefCDS);
      const intl4 = getSystemLocale /* getSystemLocale */.intl;
      obj[3] = intl4.string(getSystemLocale /* getSystemLocale */.t["1SzcG6"]);
      obj[4] = function onConfirm() {
        BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
        return BundleUpdaterManager.reload();
      };
      obj.show(obj);
      let c4 = true;
    }
  },
  deferUpdate() {
    if (c4) {
      c4 = false;
      const BundleUpdaterManager = NativeModules.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    }
  }
};