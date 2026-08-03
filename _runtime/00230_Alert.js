const require = arg1;
const dependencyMap = arg6;
if (!alert.alert) {
  alert.alert = (arg0) => {
    require(231) /* Alert */.default.alert("Alert", "" + arg0);
  };
}