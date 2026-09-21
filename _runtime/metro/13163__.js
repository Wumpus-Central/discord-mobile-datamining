// _runtime/metro/13163__.js
import _mod13051 from "13051__.js";
import _mod13164 from "13164__.js";

require = arg1;
const dependencyMap = arg6;

export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod13164.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = _mod13051.GLOBAL_OBJ.process;
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
