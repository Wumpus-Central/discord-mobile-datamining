// === Module 17410: ? ===

// Module 17410
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setDefault from "set" /* 4822 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let c4 = false;
const result = set.fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default {
  prepareUpdate(versionRequired) {
    if (versionRequired) {
      let obj = setDefault;
      obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.GQZdmI);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t.Fizu9y);
      const intl3 = getSystemLocale.intl;
      obj[2] = intl3.string(getSystemLocale.t.UefCDS);
      const intl4 = getSystemLocale.intl;
      obj[3] = intl4.string(getSystemLocale.t["1SzcG6"]);
      obj[4] = function onConfirm() {
        BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
        return BundleUpdaterManager.reload();
      };
      obj.show(obj);
      c4 = true;
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