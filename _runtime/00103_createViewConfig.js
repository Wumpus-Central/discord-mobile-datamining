// === Module 103: createViewConfig ===

// Module 103 (createViewConfig)
const module = arg2;
const dependencyMap = arg6;
arg5.createViewConfig = function createViewConfig(closure_2) {
  let obj = { uiViewClassName: closure_2.uiViewClassName, Commands: {}, bubblingEventTypes: null, directEventTypes: null, validAttributes: null };
  let bubblingEventTypes = module(104).bubblingEventTypes;
  bubblingEventTypes = closure_2.bubblingEventTypes;
  if (null != bubblingEventTypes) {
    if (null != bubblingEventTypes) {
      obj = {};
      const merged = Object.assign(bubblingEventTypes);
      const merged1 = Object.assign(bubblingEventTypes);
    }
    obj[2] = obj;
    let directEventTypes = tmp(104).directEventTypes;
    directEventTypes = closure_2.directEventTypes;
    if (null != directEventTypes) {
      if (null != directEventTypes) {
        obj = {};
        const merged2 = Object.assign(directEventTypes);
        const merged3 = Object.assign(directEventTypes);
      }
      obj[3] = obj;
      let obj2 = tmp(104).validAttributes;
      obj2 = closure_2.validAttributes;
      if (null != obj2) {
        if (null != obj2) {
          let obj1 = {};
          const merged4 = Object.assign(obj2);
          const merged5 = Object.assign(obj2);
        }
        obj[4] = obj1;
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