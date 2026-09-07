// _runtime/metro/12914__.js
import _mod12802 from "12802__.js";
import _mod12915 from "12915__.js";

require = arg1;
const dependencyMap = arg6;

export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod12915.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod12802.GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
  }
  return tmp;
};
