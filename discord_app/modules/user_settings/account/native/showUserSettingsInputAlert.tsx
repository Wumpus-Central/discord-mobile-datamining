// discord_app/modules/user_settings/account/native/showUserSettingsInputAlert.tsx
import "noop";
import { jsx } from "jsxProd";
import { AlertActionCreators } from "../../../../actions/native/AlertActionCreators.tsx";

const require = arg1;
const result = require("module_4624").fileFinishedImporting("modules/user_settings/account/native/showUserSettingsInputAlert.tsx");

export default function showUserSettingsInputAlert(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap } = arg0);
  let closure_3 = Object.assign(arg0, Object.create(null));
  let obj = AlertActionCreators;
  obj = {
    importer() {
      return outer1_0(outer1_2[4])(outer1_2[3], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(outer1_3);
          const intl = outer2_0(outer2_2[5]).intl;
          obj.cancelText = intl.string(outer2_0(outer2_2[5]).t["ETE/oC"]);
          const intl2 = outer2_0(outer2_2[5]).intl;
          obj.confirmText = intl2.string(outer2_0(outer2_2[5]).t.BddRzS);
          if (null != outer1_3.confirmColor) {
            let RED = outer1_3.confirmColor;
          } else {
            RED = outer2_1(outer2_2[6]).Colors.RED;
          }
          obj.confirmColor = RED;
          obj.onSubmit = closure_0;
          obj.onSuccess = outer1_1;
          obj.onError = outer1_2;
          return outer2_3(closure_0, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};