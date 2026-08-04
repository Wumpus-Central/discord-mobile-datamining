// discord_app/modules/activities/native/openIgnoreThermalStateAlert.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4533").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  let closure_0 = arg0;
  let obj = importDefault(4533);
  obj = {
    importer() {
      return callback(outer1_2[4])(outer1_2[3], outer1_2.paths).then((IgnoreThermalStateAlert) => {
        IgnoreThermalStateAlert = IgnoreThermalStateAlert.IgnoreThermalStateAlert;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onConfirm = IgnoreThermalStateAlert;
          return outer2_3(IgnoreThermalStateAlert, obj);
        };
      });
    }
  };
  obj.openLazy(obj);
};