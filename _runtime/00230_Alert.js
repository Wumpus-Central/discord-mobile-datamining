// === Module 230: Alert ===

// Module 230 (Alert)
import Alert from "Alert" /* 231 */;

require = arg1;
const dependencyMap = arg6;
if (!alert.alert) {
  alert.alert = (arg0) => {
    Alert.default.alert("Alert", "" + arg0);
  };
}