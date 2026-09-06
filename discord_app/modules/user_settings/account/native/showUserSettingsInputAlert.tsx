// discord_app/modules/user_settings/account/native/showUserSettingsInputAlert.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/showUserSettingsInputAlert.tsx");

export default function showUserSettingsInputAlert(arg0) {
  ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap } = arg0);
  closure_3 = Object.assign(arg0, Object.assign({ onSubmit: 0, onSuccess: 0, onError: 0 }));
  let obj = {
    importer() {
      return asyncRequireImpl(14797, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(confirmColor);
          const intl = util.intl;
          obj.cancelText = intl.string(util.t["ETE/oC"]);
          const intl2 = util.intl;
          obj.confirmText = intl2.string(util.t.BddRzS);
          if (null != confirmColor.confirmColor) {
            let RED = confirmColor.confirmColor;
          } else {
            RED = common_AlertDefault.Colors.RED;
          }
          obj.confirmColor = RED;
          obj.onSubmit = onSubmit;
          obj.onSuccess = onSuccess;
          obj.onError = onError;
          return closure_3(closure_0, obj);
        };
      });
    },
  };
  obj.openLazy(obj);
}
