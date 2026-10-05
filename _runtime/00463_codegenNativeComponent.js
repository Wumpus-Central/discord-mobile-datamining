// _runtime/00463_codegenNativeComponent.js
import _modDef68 from "metro/00068__.js";
import _modDef464 from "metro/00464__.js";

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
      const obj2 = _modDef68;
      if (!obj2.hasViewManagerConfig(arg0)) {
        if (null != paperComponentName.paperComponentNameDeprecated) {
          const tmp5Result = _modDef68;
          if (tmp5Result.hasViewManagerConfig(paperComponentName.paperComponentNameDeprecated)) {
            paperComponentNameDeprecated = paperComponentName.paperComponentNameDeprecated;
          }
        }
        let str = paperComponentName.paperComponentNameDeprecated;
        const _Error = Error;
        if (str == null) {
          str = "(unknown)";
        }
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const _Error1 = new _Error("Failed to find native component for either " + arg0 + " or " + str);
        throw _Error1;
      }
    }
  }
  return _modDef464(paperComponentNameDeprecated);
}
