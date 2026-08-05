// _runtime/00230_Alert.js
const require = arg1;
const dependencyMap = arg6;
if (!alert.alert) {
  alert.alert = (arg0) => {
    require("00231_Alert.js") /* Alert */.default.alert("Alert", "" + arg0);
  };
}