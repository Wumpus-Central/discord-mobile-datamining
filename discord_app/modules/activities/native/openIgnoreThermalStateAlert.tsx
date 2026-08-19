// discord_app/modules/activities/native/openIgnoreThermalStateAlert.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef4656 from "../../../actions/native/AlertActionCreators.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  closure_0 = arg0;
  let obj = {
    importer() {
      return callback(dependencyMap[4])(dependencyMap[3], dependencyMap.paths).then((result) => {
        const IgnoreThermalStateAlert = result.IgnoreThermalStateAlert;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onConfirm = IgnoreThermalStateAlert;
          return closure_2_3(IgnoreThermalStateAlert, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};