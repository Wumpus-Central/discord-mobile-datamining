// _runtime/01051_ignoreRequireCycleLogs.js
import _mod17 from "metro/00017__.js";

const LogBox = _mod17.LogBox;

export function ignoreRequireCycleLogs(version) {
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
}
