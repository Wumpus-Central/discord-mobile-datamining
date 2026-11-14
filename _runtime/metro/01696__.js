// _runtime/metro/01696__.js
import _mod1677 from "01677__.js";
import ValueProcessorTarget from "../01684_ValueProcessorTarget.js";
import processStyleValue from "../01686_processStyleValue.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "(function build_Pnpm_createPropsBuilderTs1(props,options){let[ValueProcessorTarget,processedConfig,processStyleValue,warnIgnoredStyleValue,isRecord]=this.__closure;var _options$target;const context={target:(_options$target=options===null||options===void 0?void 0:options.target)!==null&&_options$target!==void 0?_options$target:ValueProcessorTarget.Default};const result={};for(const property in props){const configValue=processedConfig[property];const value=props[property];if(configValue===true){result[property]=value;continue;}if(!configValue||value===undefined){if(options!==null&&options!==void 0&&options.includeUnprocessed){result[property]=value;}continue;}if(value===null){result[property]=null;continue;}let processedValue;try{processedValue=processStyleValue(configValue,value,context);}catch(error){warnIgnoredStyleValue(error);continue;}if(isRecord(processedValue)&&!isRecord(value)){for(const processedKey in processedValue){if(!(processedKey in result)){result[processedKey]=processedValue[processedKey];}}}else{result[property]=processedValue;}}return result;})",
};

export default function createPropsBuilder(processConfigValue) {
  processConfigValue = processConfigValue.processConfigValue;
  const entries = Object.entries(processConfigValue.config);
  items = [_undefined3, , , , ,];
  const reduced = entries.reduce((acc, item) => {
    [tmp, tmp2] = item;
    let num = 0;
    if (tmp2) {
      const sum = num + 1;
      while (10 >= sum) {
        if (typeof tmp2 !== "function") {
          if (true !== tmp2) {
            tmp2 = _undefined(tmp2, tmp);
            num = sum;
          }
        }
        acc[tmp] = tmp2;
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("[Reanimated] Max process depth for props builder reached for property " + tmp);
      throw error;
    }
    return acc;
  }, {});
  items[1] = ValueProcessorTarget.ValueProcessorTarget;
  items[2] = reduced;
  items[3] = processStyleValue.processStyleValue;
  items[4] = processStyleValue.warnIgnoredStyleValue;
  items[5] = _mod1677.isRecord;
  processConfigValue = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  let obj = { build: null };
  function build(obj, target) {
    target = undefined;
    if (target != null) {
      target = target.target;
    }
    if (target == null) {
      target = _undefined.Default;
    }
    obj = {};
    for (const key10013 in arg0) {
      let tmp20 = _undefined2[key10013];
      let tmp21 = arg0[key10013];
      if (true !== tmp20) {
        if (tmp20) {
          if (undefined !== tmp21) {
            if (null !== tmp21) {
              try {
                let tmp6 = _undefined3(tmp20, tmp21, { target });
                let tmp9 = _undefined5(tmp6);
                if (tmp9) {
                  if (!_undefined5(tmp21)) {
                    let keys = Object.keys();
                    if (keys === undefined) {
                      continue;
                    } else {
                      let tmp12 = keys[tmp9];
                      while (tmp12 !== undefined) {
                        if (tmp12 in obj) {
                          continue;
                        } else {
                          obj[tmp12] = tmp6[tmp12];
                          continue;
                        }
                        continue;
                      }
                    }
                    continue;
                  }
                  continue;
                }
                obj[key10013] = tmp6;
                continue;
              } catch (tmp15) {
                let tmp17 = _undefined4(tmp15);
                continue;
              }
            } else {
              obj[key10013] = null;
              continue;
            }
            continue;
          }
        }
        let includeUnprocessed;
        if (arg1 != null) {
          includeUnprocessed = arg1.includeUnprocessed;
        }
        if (!includeUnprocessed) {
          continue;
        } else {
          obj[key10013] = tmp21;
          continue;
        }
        continue;
      } else {
        obj[key10013] = tmp21;
        continue;
      }
      continue;
    }
    return obj;
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
  build.__closure = items1;
  build.__workletHash = 15451700096909;
  build.__initData = tmp2;
  obj.build = build;
  return obj;
}
