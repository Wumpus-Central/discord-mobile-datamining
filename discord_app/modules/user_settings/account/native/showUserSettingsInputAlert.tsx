// === Module 15073: showUserSettingsInputAlert ===

// Module 15073 (showUserSettingsInputAlert)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5109 */;
import common_AlertDefault from "common/Alert" /* 5205 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/showUserSettingsInputAlert.tsx");

export default function showUserSettingsInputAlert(arg0) {
  ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap } = arg0);
  closure_3 = Object.assign(arg0, Object.assign({ onSubmit: 0, onSuccess: 0, onError: 0 }));
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(15074, dependencyMap.paths).then((result) => {
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
    isDismissable: false
  });
};