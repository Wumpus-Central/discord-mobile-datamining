// _runtime/metro/00103__.js
import _modDef104 from "00104__.js";

importDefault = arg2;
const dependencyMap = arg6;

export const createViewConfig = function createViewConfig(uiViewClassName) {
  const obj = {
    uiViewClassName: uiViewClassName.uiViewClassName,
    Commands: {},
    bubblingEventTypes: null,
    directEventTypes: null,
    validAttributes: null,
  };
  let bubblingEventTypes1 = _modDef104.bubblingEventTypes;
  const bubblingEventTypes = uiViewClassName.bubblingEventTypes;
  if (null != bubblingEventTypes1) {
    if (null != bubblingEventTypes) {
      let obj2 = {};
      const merged = Object.assign(bubblingEventTypes1);
      const merged1 = Object.assign(bubblingEventTypes);
    }
    obj.bubblingEventTypes = obj2;
    let directEventTypes1 = _modDef104.directEventTypes;
    const directEventTypes = uiViewClassName.directEventTypes;
    if (null != directEventTypes1) {
      if (null != directEventTypes) {
        let obj3 = {};
        const merged2 = Object.assign(directEventTypes1);
        const merged3 = Object.assign(directEventTypes);
      }
      obj.directEventTypes = obj3;
      let validAttributes2 = _modDef104.validAttributes;
      const validAttributes = uiViewClassName.validAttributes;
      if (null != validAttributes2) {
        if (null != validAttributes) {
          let obj4 = {};
          const merged4 = Object.assign(validAttributes2);
          const merged5 = Object.assign(validAttributes);
        }
        obj.validAttributes = obj4;
        return obj;
      }
      if (validAttributes2 == null) {
        validAttributes2 = validAttributes;
      }
      if (validAttributes2 == null) {
        validAttributes2 = {};
      }
      obj4 = validAttributes2;
    }
    if (directEventTypes1 == null) {
      directEventTypes1 = directEventTypes;
    }
    if (directEventTypes1 == null) {
      directEventTypes1 = {};
    }
    obj3 = directEventTypes1;
  }
  if (bubblingEventTypes1 == null) {
    bubblingEventTypes1 = bubblingEventTypes;
  }
  if (bubblingEventTypes1 == null) {
    bubblingEventTypes1 = {};
  }
  obj2 = bubblingEventTypes1;
};
