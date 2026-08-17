// _runtime/01177_ignoreRequireCycleLogs.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const LogBox = get_ActivityIndicator.LogBox;

export const ignoreRequireCycleLogs = function ignoreRequireCycleLogs(version) {
  let tmp = version;
  if (version) {
    tmp = 0 === version.major;
  }
  if (tmp) {
    tmp = version.minor < 70;
  }
  if (tmp) {
    LogBox.ignoreLogs(["Require cycle:"]);
  }
};