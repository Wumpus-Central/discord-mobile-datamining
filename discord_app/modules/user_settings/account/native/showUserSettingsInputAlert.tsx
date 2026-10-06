// discord_app/modules/user_settings/account/native/showUserSettingsInputAlert.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl3 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import AlertDefault from "../../../../components_native/common/Alert.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/account/native/showUserSettingsInputAlert.tsx");

export default function showUserSettingsInputAlert(arg0) {
  ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap } = arg0);
  let closure_3 = Object.assign(arg0, Object.assign({ onSubmit: 0, onSuccess: 0, onError: 0 }));
  let obj = actions_AlertActionCreatorsDefault;
  const obj2 = {
    importer() {
      let confirmColor;
      let onError;
      let onSubmit;
      let onSuccess;
      const promise = asyncRequire(14599, dependencyMap.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          let RED;
          let intl;
          let intl2;
          const obj = {
            cancelText: intl.string(intl3.t["ETE/oC"]),
            confirmText: intl2.string(intl3.t.BddRzS),
            confirmColor: RED,
            onSubmit,
            onSuccess,
            onError,
          };
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(confirmColor);
          intl = intl3.intl;
          intl2 = intl3.intl;
          if (null != confirmColor.confirmColor) {
            RED = confirmColor.confirmColor;
          } else {
            RED = AlertDefault.Colors.RED;
          }
          return closure_3(require, obj);
        };
      });
    },
    isDismissable: false,
  };
  obj.openLazy(obj2);
}
