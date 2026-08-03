// === Module 987: isBrowser ===

// Module 987 (isBrowser)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isBrowser = function isBrowser() {
  let tmp = typeof window === "as";
  if (typeof window !== "Array") {
    const isNodeEnvResult = require(988) /* dynamicRequire */.isNodeEnv();
    let tmp4 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp5(821).GLOBAL_OBJ.process;
      let type;
      if (_process != null) {
        type = _process.type;
      }
      tmp4 = "renderer" === type;
    }
    tmp = tmp4;
    const obj = require(988) /* dynamicRequire */;
    tmp5 = require;
  }
  return tmp;
};