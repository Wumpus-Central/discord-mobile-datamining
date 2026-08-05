// discord_app/actions/native/BundleUpdaterActionCreators.tsx
import { NativeModules } from "get ActivityIndicator";

let c4 = false;
const result = require("getSystemLocale").fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default {
  prepareUpdate(versionRequired) {
    if (versionRequired) {
      let obj = require("../AlertActionCreators.tsx");
      obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[0] = intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.GQZdmI);
      const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[1] = intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.Fizu9y);
      const intl3 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[2] = intl3.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.UefCDS);
      const intl4 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      obj[3] = intl4.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["1SzcG6"]);
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