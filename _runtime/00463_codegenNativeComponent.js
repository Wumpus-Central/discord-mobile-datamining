// === Module 463: codegenNativeComponent ===

// Module 463 (codegenNativeComponent)
const global = arg0;
const module = arg2;
const dependencyMap = arg6;
arg5.default = function codegenNativeComponent(arg0, paperComponentName) {
  paperComponentName = arg0;
  if (paperComponentName) {
    paperComponentName = arg0;
    if (null != paperComponentName.paperComponentName) {
      paperComponentName = paperComponentName.paperComponentName;
    }
  }
  let paperComponentNameDeprecated = paperComponentName;
  if (null != paperComponentName) {
    paperComponentNameDeprecated = paperComponentName;
    if (null != paperComponentName.paperComponentNameDeprecated) {
      paperComponentNameDeprecated = arg0;
      if (!obj2.hasViewManagerConfig(arg0)) {
        if (null != paperComponentName.paperComponentNameDeprecated) {
          if (tmp7Result.hasViewManagerConfig(paperComponentName.paperComponentNameDeprecated)) {
            paperComponentNameDeprecated = paperComponentName.paperComponentNameDeprecated;
          }
          tmp7Result = tmp7(68);
        }
        let str = paperComponentName.paperComponentNameDeprecated;
        if (str == null) {
          str = "(unknown)";
        }
        const _HermesInternal = HermesInternal;
        error = new Error("Failed to find native component for either " + arg0 + " or " + str);
        throw error;
      }
      obj2 = module(68);
      tmp7 = module;
    }
  }
  return module(464)(paperComponentNameDeprecated);
};