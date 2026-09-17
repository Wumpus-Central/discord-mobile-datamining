// === Module 18170: BundleUpdaterActionCreators ===

// Module 18170 (BundleUpdaterActionCreators)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4984 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let c4 = false;
const result = size.fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default {
  prepareUpdate(versionRequired) {
    if (versionRequired) {
      const obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.GQZdmI);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.Fizu9y);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t.UefCDS);
      const intl4 = util.intl;
      obj2.cancelText = intl4.string(util.t["1SzcG6"]);
      obj2.onConfirm = function onConfirm() {
        BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
        return BundleUpdaterManager.reload();
      };
      AlertActionCreatorsDefault.show(obj2);
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