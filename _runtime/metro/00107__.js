// === Module 107: ? ===

// Module 107
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;

function accumulateDifferences(items, arr2, obj, arg3) {
  for (const key10009 in obj) {
    let tmp22 = obj[key10009];
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
          let arr = arr2.push(key10009);
          let tmp19 = accumulateDifferences(items, arr2, tmp5, tmp6);
          arr2 = arr2.pop();
          continue;
        }
      }
      let result = tmp22 === tmp4;
      if (!result) {
        let obj2 = javaScriptFlagGetterAll;
        result = obj2.enableNativeCSSParsing();
      }
      if (result) {
        continue;
      } else {
        let obj3 = { path: items, type: "unequal", nativeValue: tmp22, staticValue: tmp4 };
        items = [];
        items[HermesBuiltin.arraySpread(items, arr2, 0)] = key10009;
        let arr6 = items.push(obj3);
        continue;
      }
      continue;
    } else {
      obj = { path: items1, type: "missing", nativeValue: tmp22 };
      let items1 = [];
      items1[HermesBuiltin.arraySpread(items1, arr2, 0)] = key10009;
      let arr7 = items.push(obj);
      continue;
    }
    continue;
  }
}

export const validate = function validate(arg0, bubblingEventTypes, bubblingEventTypes2) {
  let obj3;
  const items = [];
  const obj = { bubblingEventTypes: bubblingEventTypes.bubblingEventTypes, directEventTypes: bubblingEventTypes.directEventTypes, uiViewClassName: bubblingEventTypes.uiViewClassName, validAttributes: bubblingEventTypes.validAttributes };
  const obj2 = { bubblingEventTypes: bubblingEventTypes2.bubblingEventTypes, directEventTypes: bubblingEventTypes2.directEventTypes, uiViewClassName: bubblingEventTypes2.uiViewClassName, validAttributes: bubblingEventTypes2.validAttributes };
  accumulateDifferences(items, [], obj, obj2);
  if (0 === items.length) {
    obj3 = { type: "valid" };
  } else {
    obj3 = { type: "invalid", differences: items };
  }
  return obj3;
};
export const stringifyValidationResult = function stringifyValidationResult(RNBridgeless, validateResult) {
  const items = ["StaticViewConfigValidator: Invalid static view config for '" + RNBridgeless + "'.", "", ];
  const differences = validateResult.differences;
  items[HermesBuiltin.arraySpread(items, differences.map((item) => {
    let path;
    let type;
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