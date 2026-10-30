// === Module 1039: ignoreRequireCycleLogs ===

// Module 1039 (ignoreRequireCycleLogs)
import _mod17 from "module_17" /* 17 */;

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