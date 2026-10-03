// === Module 1053: ignoreRequireCycleLogs ===

// Module 1053 (ignoreRequireCycleLogs)
import _mod17 from "module_17" /* 17 */;

const LogBox = _mod17.LogBox;

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