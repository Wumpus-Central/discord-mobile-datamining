// discord_app/actions/native/BundleUpdaterActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import getSystemLocale from "../../intl/index.native.tsx";
import obj132Default from "../AlertActionCreators.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
let c4 = false;
const result = obj132.fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default {
  prepareUpdate(versionRequired) {
    if (versionRequired) {
      const obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
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