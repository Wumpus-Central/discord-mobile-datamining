// === Module 230: Alert ===

// Module 230 (Alert)
import _mod231 from "module_231" /* 231 */;

require = arg1;
const dependencyMap = arg6;
if (!alert.alert) {
  alert.alert = (arg0) => {
    _mod231.default.alert("Alert", "" + arg0);
  };
}