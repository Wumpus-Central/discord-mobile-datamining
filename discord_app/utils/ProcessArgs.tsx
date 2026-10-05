// === Module 6714: ProcessArgs ===

// Module 6714 (ProcessArgs)
import DiscordNativeDefault from "DiscordNative" /* 4490 */;
import size from "module_2" /* 2 */;

class ProcessArgs {
  static get() {
    if (null == ProcessArgs.cached) {
      const tmp4 = DiscordNativeDefault;
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
      const tmp5 = null != mainArgvSync && mainArgvSync.length > 1;
      if (tmp5) {
        mainArgvSync.shift();
      }
      if (mainArgvSync == null) {
        mainArgvSync = [];
      }
      ProcessArgs.cached = mainArgvSync;
    }
    return ProcessArgs.cached;
  }
  static contains(arg0) {
    const value = ProcessArgs.get();
    return value.includes(arg0);
  }
  static isEnvVariableTrue(DISCORD_DISALLOW_POPUPS) {
    if (undefined === DiscordNativeDefault) {
      return false;
    } else {
      const tmpResult = DiscordNativeDefault;
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
  }
  static isDisallowPopupsSet() {
    const hasItem = ProcessArgs.contains("--disallow-popups");
    const tmp2 = !hasItem && !ProcessArgs.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS");
    return !tmp2;
  }
  static isDiscordTestSet() {
    return ProcessArgs.isEnvVariableTrue("DISCORD_TEST");
  }
  static isDiscordGatewayPlaintextSet() {
    return false;
  }
}
const result = size.fileFinishedImporting("utils/ProcessArgs.tsx");

export { ProcessArgs };