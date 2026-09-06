// _runtime/00230_Alert.js
import _mod231 from "metro/00231__.js";

require = arg1;
const dependencyMap = arg6;
if (!alert.alert) {
  alert.alert = (arg0) => {
    _mod231.default.alert("Alert", "" + arg0);
  };
}
