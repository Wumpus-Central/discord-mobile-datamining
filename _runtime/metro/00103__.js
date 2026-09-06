// === Module 103: ? ===

// Module 103
import _modDef104 from "module_104" /* 104 */;

importDefault = arg2;
const dependencyMap = arg6;

export const createViewConfig = function createViewConfig(uiViewClassName) {
  let obj = { uiViewClassName: uiViewClassName.uiViewClassName, Commands: {}, bubblingEventTypes: null, directEventTypes: null, validAttributes: null };
  let bubblingEventTypes = uiViewClassName.bubblingEventTypes;
  if (null != bubblingEventTypes) {
    if (null != bubblingEventTypes) {
      obj = {};
      const merged = Object.assign(bubblingEventTypes);
      const merged1 = Object.assign(bubblingEventTypes);
    }
    obj.bubblingEventTypes = obj;
    tmp(104).directEventTypes;
    let directEventTypes = uiViewClassName.directEventTypes;
    if (null != directEventTypes) {
      if (null != directEventTypes) {
        obj = {};
        const merged2 = Object.assign(directEventTypes);
        const merged3 = Object.assign(directEventTypes);
      }
      obj.directEventTypes = obj;
      tmp(104).validAttributes;
      let obj2 = uiViewClassName.validAttributes;
      if (null != obj2) {
        if (null != obj2) {
          let obj1 = {};
          const merged4 = Object.assign(obj2);
          const merged5 = Object.assign(obj2);
        }
        obj.validAttributes = obj1;
        return obj;
      }
      if (obj2 == null) {
        obj2 = {};
      }
      obj1 = obj2;
    }
    if (directEventTypes == null) {
      directEventTypes = {};
    }
    obj = directEventTypes;
  }
  if (bubblingEventTypes == null) {
    bubblingEventTypes = {};
  }
  obj = bubblingEventTypes;
};