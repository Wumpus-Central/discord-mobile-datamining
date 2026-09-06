// discord_app/actions/native/BundleUpdaterActionCreators.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import util from "../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../AlertActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
let c4 = false;
const result = size.fileFinishedImporting("actions/native/BundleUpdaterActionCreators.tsx");

export default {
  prepareUpdate(versionRequired) {
    if (versionRequired) {
      const obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.GQZdmI);
      const intl2 = util.intl;
      obj.body = intl2.string(util.t.Fizu9y);
      const intl3 = util.intl;
      obj.confirmText = intl3.string(util.t.UefCDS);
      const intl4 = util.intl;
      obj.cancelText = intl4.string(util.t["1SzcG6"]);
      obj.onConfirm = function onConfirm() {
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
  },
};
