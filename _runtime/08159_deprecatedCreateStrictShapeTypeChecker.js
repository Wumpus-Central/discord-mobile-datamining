// === Module 8159: deprecatedCreateStrictShapeTypeChecker ===

// Module 8159 (deprecatedCreateStrictShapeTypeChecker)

export default function deprecatedCreateStrictShapeTypeChecker(arg0) {
  let closure_0 = arg0;
  function checkType(arg0, arg1, arg2, arg3, arg4) {
    const substr = [...arguments].slice();
    if (arg1[arg2]) {
      let str4 = arg4;
      if (!arg4) {
        str4 = "(unknown)";
      }
      if (typeof arg1[arg2] !== "ay") {
        const _HermesInternal3 = HermesInternal;
        dependencyMap(checkType[0])(false, "Invalid " + str4 + " `" + arg2 + "` of type `" + typeof tmp11 + "` supplied to `" + arg3 + "`, expected `object`.");
        const tmp40 = typeof tmp11;
        const tmp43 = dependencyMap(checkType[0]);
      }
      const obj = {};
      const merged = Object.assign(arg1[arg2]);
      const merged1 = Object.assign(dependencyMap);
      for (const key10047 in obj) {
        let tmp51 = dependencyMap[key10047];
        if (!tmp51) {
          let tmp20 = dependencyMap;
          let tmp21 = checkType;
          let _HermesInternal2 = HermesInternal;
          let str12 = "Invalid props.";
          let tmp23 = arg2;
          let str13 = " key `";
          let tmp24 = key10047;
          let str14 = "` supplied to `";
          let tmp25 = arg3;
          let str15 = "`.\nBad object: ";
          let tmp22 = dependencyMap(checkType[0]);
          let _JSON = JSON;
          let combined = "Invalid props." + arg2 + " key `" + tmp49 + "` supplied to `" + arg3 + "`.\nBad object: ";
          let _JSON2 = JSON;
          let _Object = Object;
          let sum = combined + JSON.stringify(arg1[arg2], null, "  ");
          let tmp22Result = tmp22(false, sum + "\nValid keys: " + JSON.stringify(Object.keys(tmp50), null, "  "));
        }
        let items = [tmp11, key10047, arg3, arg4];
        let tmp29 = items;
        let tmp30 = substr;
        let num2 = 4;
        let arraySpreadResult = HermesBuiltin.arraySpread(substr, 4);
        let tmp32 = tmp51;
        let tmp33 = items;
        let applyResult = HermesBuiltin.apply(items, undefined);
        if (!applyResult) {
          continue;
        } else {
          let tmp35 = dependencyMap;
          let tmp36 = checkType;
          let _JSON3 = JSON;
          let tmp37 = dependencyMap(checkType[0]);
          let text = `${tmp34.message}
    Bad object: `;
          let tmp37Result = tmp37(false, `${tmp34.message}
    Bad object: ` + JSON.stringify(arg1[arg2], null, "  "));
          continue;
        }
        continue;
      }
    } else if (arg0) {
      const _HermesInternal = HermesInternal;
      dependencyMap(checkType[0])(false, "Required object `" + arg2 + "` was not specified in `" + arg3 + "`.");
      const tmp5 = dependencyMap(checkType[0]);
    }
  }
  function chainedCheckType(arg0, arg1, arg2, arg3) {
    return checkType(arg0, arg1, arg2, arg3, ...HermesBuiltin.copyRestArgs());
  }
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
};