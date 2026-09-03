// === Module 9570: openIgnoreThermalStateAlert ===

// Module 9570 (openIgnoreThermalStateAlert)
import noopAll from "noop" /* 19 */;
import _modDef4859 from "module_4859" /* 4859 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/activities/native/openIgnoreThermalStateAlert.tsx");

export const openIgnoreThermalStateAlert = function openIgnoreThermalStateAlert(arg0) {
  closure_0 = arg0;
  let obj = _modDef4859;
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
    }
  };
  obj.openLazy(obj);
};