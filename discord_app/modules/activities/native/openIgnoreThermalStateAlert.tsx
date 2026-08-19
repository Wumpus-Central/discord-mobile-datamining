// === Module 12430: openIgnoreThermalStateAlert ===

// Module 12430 (openIgnoreThermalStateAlert)
import noopAll from "noop" /* 19 */;
import _modDef4656 from "module_4656" /* 4656 */;
import { jsx } from "jsxProd" /* 21 */;

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