// === Module 4738: get ===

// Module 4738 (get)
let prototype;
prototype = function ProcessArgs() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["get"] = function get() {
  if (null == prototype.cached) {
    const tmp4 = importDefault(3804);
    let mainArgvSync;
    if (tmp4 != null) {
      const processUtils = tmp4.processUtils;
      if (processUtils != null) {
        const getMainArgvSync = processUtils.getMainArgvSync;
        if (getMainArgvSync != null) {
          mainArgvSync = getMainArgvSync();
        }
      }
    }
    let tmp5 = null != mainArgvSync;
    if (tmp5) {
      tmp5 = mainArgvSync.length > 1;
    }
    if (tmp5) {
      mainArgvSync.shift();
    }
    if (mainArgvSync == null) {
      mainArgvSync = [];
    }
    tmp.cached = mainArgvSync;
  }
  return prototype.cached;
};
prototype["contains"] = function contains(arg0) {
  const value = prototype.get();
  return value.includes(arg0);
};
prototype["isEnvVariableTrue"] = function isEnvVariableTrue(DISCORD_DISALLOW_POPUPS) {
  if (undefined === importDefault(3804)) {
    return false;
  } else {
    const tmpResult = tmp(3804);
    let tmp5;
    if (tmpResult != null) {
      const _process = tmpResult.process;
      if (_process != null) {
        const env = _process.env;
        if (env != null) {
          tmp5 = env[DISCORD_DISALLOW_POPUPS];
        }
      }
    }
    if ("1" !== tmp5) {
      if ("true" !== tmp5) {
        return false;
      }
    }
    return true;
  }
  tmp = importDefault;
};
prototype["isDisallowPopupsSet"] = function isDisallowPopupsSet() {
  const hasItem = prototype.contains("--disallow-popups");
  let tmp2 = !hasItem;
  if (!hasItem) {
    tmp2 = !prototype.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS");
  }
  return !tmp2;
};
prototype["isDiscordTestSet"] = function isDiscordTestSet() {
  return prototype.isEnvVariableTrue("DISCORD_TEST");
};
prototype["isDiscordGatewayPlaintextSet"] = function isDiscordGatewayPlaintextSet() {
  return false;
};
const result = require("set").fileFinishedImporting("utils/ProcessArgs.tsx");

export const ProcessArgs = prototype;