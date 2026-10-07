// === Module 107: accumulateDifferences ===

// Module 107 (accumulateDifferences)
import _modAll27 from "module_27" /* 27 */;

importAll = arg3;
const dependencyMap = arg6;
function accumulateDifferences(items, arr2, obj, arg3) {
  for (const key10009 in arg2) {
    let tmp22 = arg2[key10009];
    if (arg3.hasOwnProperty(key10009)) {
      let tmp4 = arg3[key10009];
      let tmp5 = null;
      if (typeof tmp22 === "object") {
        let _Array = Array;
        tmp5 = null;
        if (!Array.isArray(tmp22)) {
          tmp5 = tmp22;
        }
      }
      if (null != tmp5) {
        let tmp6 = null;
        if (typeof tmp4 === "object") {
          let _Array2 = Array;
          tmp6 = null;
          if (!Array.isArray(tmp4)) {
            tmp6 = tmp4;
          }
        }
        if (null != tmp6) {
          let arr = arg1.push(key10009);
          let tmp19 = accumulateDifferences(arg0, arg1, tmp5, tmp6);
          arr2 = arg1.pop();
          continue;
        }
      }
      let result = tmp22 === tmp4;
      if (!result) {
        let obj2 = _modAll27;
        result = obj2.enableNativeCSSParsing();
      }
      if (result) {
        continue;
      } else {
        let obj3 = { path: null, type: "unequal", nativeValue: null, staticValue: null };
        items = [];
        items[HermesBuiltin.arraySpread(arg1, 0)] = key10009;
        obj3.path = items;
        obj3.nativeValue = tmp22;
        obj3.staticValue = tmp4;
        let arr6 = arg0.push(obj3);
        continue;
      }
      continue;
    } else {
      obj = { path: null, type: "missing", nativeValue: null };
      let items1 = [];
      items1[HermesBuiltin.arraySpread(arg1, 0)] = key10009;
      obj.path = items1;
      obj.nativeValue = tmp22;
      let arr7 = arg0.push(obj);
      continue;
    }
    continue;
  }
}

export const validate = function validate(arg0, bubblingEventTypes, bubblingEventTypes2) {
  const items = [];
  accumulateDifferences(items, [], { bubblingEventTypes: bubblingEventTypes.bubblingEventTypes, directEventTypes: bubblingEventTypes.directEventTypes, uiViewClassName: bubblingEventTypes.uiViewClassName, validAttributes: bubblingEventTypes.validAttributes }, { bubblingEventTypes: bubblingEventTypes2.bubblingEventTypes, directEventTypes: bubblingEventTypes2.directEventTypes, uiViewClassName: bubblingEventTypes2.uiViewClassName, validAttributes: bubblingEventTypes2.validAttributes });
  if (0 === items.length) {
    let obj3 = { type: "valid" };
  } else {
    obj3 = { type: "invalid", differences: items };
  }
  return obj3;
};
export const stringifyValidationResult = function stringifyValidationResult(arg0, validateResult) {
  const items = ["StaticViewConfigValidator: Invalid static view config for '" + arg0 + "'.", "", ];
  const differences = validateResult.differences;
  items[HermesBuiltin.arraySpread(differences.map((item) => {
    ({ type, path } = item);
    if ("missing" === type) {
      const _HermesInternal2 = HermesInternal;
      return "- '" + path.join(".") + "' is missing.";
    } else if ("unequal" === type) {
      const _HermesInternal = HermesInternal;
      return "- '" + path.join(".") + "' is the wrong value.";
    }
  }), 2)] = "";
  return items.join("\n");
};