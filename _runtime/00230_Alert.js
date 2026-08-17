// _runtime/00230_Alert.js
import Alert from "00231_Alert.js";

require = arg1;
const dependencyMap = arg6;
if (!alert.alert) {
  alert.alert = (arg0) => {
    Alert.default.alert("Alert", "" + arg0);
  };
}