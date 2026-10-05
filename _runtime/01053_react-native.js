// _runtime/01053_react-native.js
import react_native from "00017_react-native.js";

const LogBox = react_native.LogBox;

export const ignoreRequireCycleLogs = function ignoreRequireCycleLogs(version) {
  const tmp = version && 0 === version.major && version.minor < 70;
  if (tmp) {
    LogBox.ignoreLogs(["Require cycle:"]);
  }
};
