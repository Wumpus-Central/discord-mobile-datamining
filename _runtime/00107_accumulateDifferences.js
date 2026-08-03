const exports = arg3;
const dependencyMap = arg6;
function accumulateDifferences(items, arr2, obj, arg3) {
  for (const key10009 in arg2) {
    let tmp21 = key10009;
    let tmp22 = arg2[key10009];
    if (arg3.hasOwnProperty(key10009)) {
      let tmp4 = arg3[key10009];
      let tmp5 = null;
      if (typeof tmp22 !== "window") {
        let _Array = Array;
        tmp5 = null;
        if (!Array.isArray(tmp22)) {
          tmp5 = tmp22;
        }
      }
      if (null != tmp5) {
        let tmp6 = null;
        if (typeof tmp4 !== "window") {
          let _Array2 = Array;
          tmp6 = null;
          if (!Array.isArray(tmp4)) {
            tmp6 = tmp4;
          }
        }
        if (null != tmp6) {
          let arr = arg1.push(key10009);
          let tmp14 = accumulateDifferences;
          let num3 = 0;
          let tmp15 = arg0;
          let tmp16 = arg1;
          let tmp17 = tmp5;
          let tmp18 = tmp6;
          let tmp19 = accumulateDifferences(arg0, arg1, tmp5, tmp6);
          arr = arg1.pop();
          continue;
        }
      }
      let result = tmp22 === tmp4;
      if (!result) {
        let tmp8 = exports;
        let tmp9 = dependencyMap;
        let obj2 = exports(27);
        result = obj2.enableNativeCSSParsing();
      }
      if (result) {
        continue;
      } else {
        obj = { path: null, type: "unequal", nativeValue: null, staticValue: null };
        items = [];
        let tmp10 = items;
        let tmp11 = arg1;
        let num2 = 0;
        items[HermesBuiltin.arraySpread(arg1, 0)] = key10009;
        obj[0] = items;
        obj[2] = tmp22;
        obj[3] = tmp4;
        let arr1 = arg0.push(obj);
        continue;
      }
      continue;
    } else {
      obj = { path: null, type: "missing", nativeValue: null };
      let items1 = [];
      let tmp = items1;
      let tmp2 = arg1;
      let num = 0;
      items1[HermesBuiltin.arraySpread(arg1, 0)] = key10009;
      obj[0] = items1;
      obj[2] = tmp22;
      arr2 = arg0.push(obj);
      continue;
    }
    continue;
  }
}
arg5.validate = function validate(arg0, bubblingEventTypes, bubblingEventTypes2) {
  const items = [];
  let obj = { bubblingEventTypes: bubblingEventTypes.bubblingEventTypes, directEventTypes: bubblingEventTypes.directEventTypes, uiViewClassName: bubblingEventTypes.uiViewClassName, validAttributes: bubblingEventTypes.validAttributes };
  obj = { bubblingEventTypes: bubblingEventTypes2.bubblingEventTypes, directEventTypes: bubblingEventTypes2.directEventTypes, uiViewClassName: bubblingEventTypes2.uiViewClassName, validAttributes: bubblingEventTypes2.validAttributes };
  accumulateDifferences(items, [], obj, obj);
  if (0 === items.length) {
    obj = { type: "valid" };
  } else {
    obj = { type: "invalid", differences: null };
    obj[1] = items;
  }
  return obj;
};
arg5.stringifyValidationResult = function stringifyValidationResult(arg0, validateResult) {
  const items = ["StaticViewConfigValidator: Invalid static view config for '" + arg0 + "'.", "", ];
  const differences = validateResult.differences;
  items[HermesBuiltin.arraySpread(differences.map((arg0) => {
    let path;
    let type;
    ({ type, path } = arg0);
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