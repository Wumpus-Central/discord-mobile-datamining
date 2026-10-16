// === Module 463: codegenNativeComponent ===

// Module 463 (codegenNativeComponent)
import _modDef68 from "module_68" /* 68 */;
import _modDef464 from "module_464" /* 464 */;

const global = arg0;
importDefault = arg2;
const dependencyMap = arg6;

export default function codegenNativeComponent(arg0, paperComponentName) {
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
          tmp7Result = _modDef68;
        }
        let str = paperComponentName.paperComponentNameDeprecated;
        if (str == null) {
          str = "(unknown)";
        }
        const _HermesInternal = HermesInternal;
        const error = new Error("Failed to find native component for either " + arg0 + " or " + str);
        throw error;
      }
      obj2 = _modDef68;
    }
  }
  return _modDef464(paperComponentNameDeprecated);
};