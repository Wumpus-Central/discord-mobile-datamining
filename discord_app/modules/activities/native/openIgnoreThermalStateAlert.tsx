// discord_app/modules/activities/native/openIgnoreThermalStateAlert.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef4905 from "../../../actions/native/AlertActionCreators.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  closure_0 = arg0;
  let obj = _modDef4905;
  obj = {
    importer() {
      return callback(closure_1_2[4])(closure_1_2[3], closure_1_2.paths).then((IgnoreThermalStateAlert) => {
        IgnoreThermalStateAlert = IgnoreThermalStateAlert.IgnoreThermalStateAlert;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onConfirm = IgnoreThermalStateAlert;
          return closure_2_3(IgnoreThermalStateAlert, obj);
        };
      });
    },
  };
  obj.openLazy(obj);
};
