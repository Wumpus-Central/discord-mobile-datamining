// _runtime/01693_transformOrigin.js
const rect = { left: 0, center: "50%", right: "100%" };
const rect1 = { top: 0, center: "50%", bottom: "100%" };
let items = [
  {
    code: "(function getAllowedValues_Pnpm_transformOriginTs1(axis,isArray){let[HORIZONTAL_CONVERSIONS,VERTICAL_CONVERSIONS]=this.__closure;const allowed=[];if(isArray){allowed.push('numbers');}else{allowed.push('numbers with px unit');}allowed.push('percentages');let keywords=[];switch(axis){case'x':keywords=Object.keys(HORIZONTAL_CONVERSIONS);break;case'y':keywords=Object.keys(VERTICAL_CONVERSIONS);break;}if(keywords.length){allowed.push(\"keywords (\"+keywords.join(', ')+\")\");}allowed[allowed.length-1]=\"or \"+allowed[allowed.length-1];return allowed.join(', ');})",
  },
  rect,
  rect1,
];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
function getAllowedValues(arg0, arg1) {
  items = [];
  const push = items.push;
  if (arg1) {
    push("numbers");
  } else {
    push("numbers with px unit");
  }
  items.push("percentages");
  if ("x" === arg0) {
    const _Object2 = Object;
    let keys = Object.keys(c0);
  } else {
    keys = [];
    if ("y" === arg0) {
      const _Object = Object;
      keys = Object.keys(c1);
    }
  }
  if (keys.length) {
    const _HermesInternal = HermesInternal;
    items.push("keywords (" + keys.join(", ") + ")");
  }
  const diff = items.length - 1;
  items[diff] = "or " + items[items.length - 1];
  return items.join(", ");
}
let items1 = [tmp3, tmp4];
getAllowedValues.__closure = items1;
getAllowedValues.__workletHash = 16372008677436;
getAllowedValues.__initData = tmp2;
const items2 = [
  {
    code: '(function pnpm_transformOriginTs2(value){return"Invalid transformOrigin: "+JSON.stringify(value)+". Expected 1-3 values.";})',
  },
];
[tmp5] = items2;
const obj = { invalidTransformOrigin: null, invalidValue: null };
function pnpm_transformOriginTs2(arg0) {
  return "Invalid transformOrigin: " + JSON.stringify(arg0) + ". Expected 1-3 values.";
}
pnpm_transformOriginTs2.__workletHash = 12318349369709;
pnpm_transformOriginTs2.__initData = tmp5;
obj.invalidTransformOrigin = pnpm_transformOriginTs2;
const items3 = [
  {
    code: '(function pnpm_transformOriginTs3(value,axis,origin,isArray){let[getAllowedValues]=this.__closure;return"Invalid value \\""+value+"\\" for the "+axis+"-axis in transformOrigin "+JSON.stringify(origin)+". Allowed values: "+getAllowedValues(axis,isArray)+".";})',
  },
  getAllowedValues,
];
let closure_129_0;
[tmp6, tmp7] = items3;
function pnpm_transformOriginTs3(arg0, arg1, arg2, arg3) {
  const json = JSON.stringify(arg2);
  return (
    'Invalid value "' +
    arg0 +
    '" for the ' +
    arg1 +
    "-axis in transformOrigin " +
    json +
    ". Allowed values: " +
    _undefined(arg1, arg3) +
    "."
  );
}
const items4 = [tmp7];
pnpm_transformOriginTs3.__closure = items4;
pnpm_transformOriginTs3.__workletHash = 5048846349923;
pnpm_transformOriginTs3.__initData = tmp6;
obj.invalidValue = pnpm_transformOriginTs3;
const items5 = [
  {
    code: "(function maybeSwapComponents_Pnpm_transformOriginTs4(components){let[VERTICAL_CONVERSIONS,HORIZONTAL_CONVERSIONS]=this.__closure;if(Object.prototype.hasOwnProperty.call(VERTICAL_CONVERSIONS,components[0])&&(components[1]===undefined||Object.prototype.hasOwnProperty.call(HORIZONTAL_CONVERSIONS,components[1]))){const copy=[...components];[copy[0],copy[1]]=[copy[1],copy[0]];return copy;}return components;})",
  },
  rect1,
  rect,
];
let closure_130_0;
let closure_130_1;
[tmp8, tmp9, tmp10] = items5;
function maybeSwapComponents(key10009) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  const call = hasOwnProperty.call;
  const first = key10009[0];
  if (typeof call === "unknown" ? hasOwnProperty(first) : call(c0, first)) {
    if (undefined !== key10009[1]) {
      const _Object = Object;
      const call2 = hasOwnProperty2.call;
    }
    items = [];
    HermesBuiltin.arraySpread(key10009, 0);
    const items1 = [,];
    [arr2[1], arr2[0]] = items;
    items[0] = items1[0];
    items[1] = items1[1];
    return items;
  }
  return key10009;
}
const items6 = [tmp9, tmp10];
maybeSwapComponents.__closure = items6;
maybeSwapComponents.__workletHash = 1025039578605;
maybeSwapComponents.__initData = tmp8;
const items7 = [
  {
    code: "(function parseValue_Pnpm_transformOriginTs5(value,allowPercentages,customParse,getError,keywordConversions){if(typeof value==='number'){return value;}if(keywordConversions&&Object.prototype.hasOwnProperty.call(keywordConversions,value)){return keywordConversions[value];}if(allowPercentages&&value.endsWith('%')){const num=parseFloat(value);if(num===0){return 0;}if(!isNaN(num)){return num+\"%\";}}const parsed=customParse(value);if(parsed===null){throw new Error(\"[Reanimated] \"+getError());}return parsed;})",
  },
];
[tmp11] = items7;
function parseValue(key10009, arg1, fn, fn2, arg4) {
  if (typeof key10009 === "number") {
    return key10009;
  } else {
    if (arg4) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      if (typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg4, key10009)) {
        return arg4[key10009];
      }
    }
    if (arg1) {
      if (key10009.endsWith("%")) {
        const _parseFloat = parseFloat;
        const parsed = parseFloat(key10009);
        if (0 === parsed) {
          return 0;
        } else {
          const _isNaN = isNaN;
          if (!isNaN(parsed)) {
            const _HermesInternal = HermesInternal;
            return "" + parsed + "%";
          }
        }
      }
    }
    const tmp6 = fn(key10009);
    if (null === tmp6) {
      const _Error = Error;
      const _HermesInternal2 = HermesInternal;
      const error = new Error("[Reanimated] " + fn2());
      throw error;
    } else {
      return tmp6;
    }
  }
}
parseValue.__workletHash = 9665217514367;
parseValue.__initData = tmp11;
const items8 = [
  {
    code: "(function parsePx_Pnpm_transformOriginTs6(component){if(component.endsWith('px')||component==='0'){const num=parseFloat(component);if(!isNaN(num)){return num;}}return null;})",
  },
];
[tmp12] = items8;
function parsePx(str) {
  if (str.endsWith("px")) {
    const _parseFloat = parseFloat;
    const parsed = parseFloat(str);
    const _isNaN = isNaN;
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  return null;
}
parsePx.__workletHash = 3767372639537;
parsePx.__initData = tmp12;
const items9 = [
  {
    code: "(function pnpm_transformOriginTs7(value){let[parsePx,ERROR_MESSAGES,maybeSwapComponents,parseValue,HORIZONTAL_CONVERSIONS,VERTICAL_CONVERSIONS]=this.__closure;var _components$,_components$2,_components$3;const isArray=Array.isArray(value);let components=typeof value==='string'?value.split(/\\s+/):value;const customParse=isArray?function(){return null;}:parsePx;if(components.length<1||components.length>3){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidTransformOrigin(value));}components=maybeSwapComponents(components);return[parseValue((_components$=components[0])!==null&&_components$!==void 0?_components$:'50%',true,customParse,function(){return ERROR_MESSAGES.invalidValue(components[0],'x',value,isArray);},HORIZONTAL_CONVERSIONS),parseValue((_components$2=components[1])!==null&&_components$2!==void 0?_components$2:'50%',true,customParse,function(){return ERROR_MESSAGES.invalidValue(components[1],'y',value,isArray);},VERTICAL_CONVERSIONS),parseValue((_components$3=components[2])!==null&&_components$3!==void 0?_components$3:0,false,customParse,function(){return ERROR_MESSAGES.invalidValue(components[2],'z',value,isArray);})];})",
  },
  parsePx,
  obj,
  maybeSwapComponents,
  parseValue,
  rect,
  rect1,
];
let closure_131_0;
let closure_131_1;
let closure_131_2;
let closure_131_3;
let closure_131_4;
let closure_131_5;
[tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items9;
function pnpm_transformOriginTs7(str) {
  closure_0 = str;
  const isArray = Array.isArray(str);
  let parts = str;
  if (typeof str === "string") {
    parts = str.split(/\s+/);
  }
  dependencyMap = parts;
  if (isArray) {
    let fn = () => null;
  } else {
    fn = closure_0;
  }
  if (parts.length >= 1) {
    if (parts.length <= 3) {
      const tmp12 = dependencyMap(parts);
      dependencyMap = tmp12;
      str = tmp12[0];
      if (str == null) {
        str = "50%";
      }
      items = [
        closure_3(str, true, fn, () => isArray.invalidValue(dependencyMap[0], "x", closure_0, isArray), closure_4),
        ,
      ];
      let str2 = tmp12[1];
      if (str2 == null) {
        str2 = "50%";
      }
      items[1] = closure_3(
        str2,
        true,
        fn,
        () => isArray.invalidValue(dependencyMap[1], "y", closure_0, isArray),
        closure_5,
      );
      let num = tmp12[2];
      if (num == null) {
        num = 0;
      }
      items[2] = closure_3(num, false, fn, () => isArray.invalidValue(dependencyMap[2], "z", closure_0, isArray));
      return items;
    }
  }
  const error = new Error("[Reanimated] " + isArray.invalidTransformOrigin(str));
  throw error;
}
const items10 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
pnpm_transformOriginTs7.__closure = items10;
pnpm_transformOriginTs7.__workletHash = 9922296706760;
pnpm_transformOriginTs7.__initData = tmp13;

export const ERROR_MESSAGES = obj;
export const processTransformOrigin = pnpm_transformOriginTs7;
