// === Module 14796: showUserSettingsInputAlert ===

// Module 14796 (showUserSettingsInputAlert)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import noop from "module_19" /* 19 */;

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
    }
  };
  obj.openLazy(obj);
};