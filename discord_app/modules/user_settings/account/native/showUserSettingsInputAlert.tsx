// === Module 14640: showUserSettingsInputAlert ===

// Module 14640 (showUserSettingsInputAlert)
import noopAll from "noop" /* 19 */;
import _modDef4859 from "module_4859" /* 4859 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/showUserSettingsInputAlert.tsx");

export default function showUserSettingsInputAlert(arg0) {
  ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap } = arg0);
  closure_3 = Object.assign(arg0, Object.create(null));
  let obj = _modDef4859;
  obj = {
    importer() {
      return closure_1_0(closure_1_2[4])(closure_1_2[3], closure_1_2.paths).then((arg0) => {
        closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(closure_1_3);
          const intl = closure_2_0(closure_2_2[5]).intl;
          obj.cancelText = intl.string(closure_2_0(closure_2_2[5]).t["ETE/oC"]);
          const intl2 = closure_2_0(closure_2_2[5]).intl;
          obj.confirmText = intl2.string(closure_2_0(closure_2_2[5]).t.BddRzS);
          if (null != closure_1_3.confirmColor) {
            let RED = closure_1_3.confirmColor;
          } else {
            RED = closure_2_1(closure_2_2[6]).Colors.RED;
          }
          obj.confirmColor = RED;
          obj.onSubmit = closure_0;
          obj.onSuccess = closure_1_1;
          obj.onError = closure_1_2;
          return closure_2_3(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};