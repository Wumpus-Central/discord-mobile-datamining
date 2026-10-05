// === Module 18093: BundleUpdaterActionCreators ===

// Module 18093 (BundleUpdaterActionCreators)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import size from "module_2" /* 2 */;

const NativeModules = react_native.NativeModules;
let c4 = false;
let obj = {
  prepareUpdate(versionRequired) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    const tmp = versionRequired;
    if (tmp) {
      const obj = {
        title: intl.string(intl5.t.GQZdmI),
        body: intl2.string(intl5.t.Fizu9y),
        confirmText: intl3.string(intl5.t.UefCDS),
        cancelText: intl4.string(intl5.t["1SzcG6"]),
        onConfirm() {
            BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
            return BundleUpdaterManager.reload();
          }
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = intl5.intl;
      intl2 = intl5.intl;
      intl3 = intl5.intl;
      intl4 = intl5.intl;
      show(obj);
      c4 = true;
    }
  },
  deferUpdate() {
    const tmp = c4;
    if (tmp) {
      c4 = false;
      const BundleUpdaterManager = NativeModules.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    }
  }
};
const result = size.fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default obj;