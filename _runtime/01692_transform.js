// _runtime/01692_transform.js
import "module_32";

let items = [
  { code: '(function invalidTransform_Pnpm_transformTs1(transform){return"Invalid transform property: "+transform;})' },
];
[tmp2] = items;
let obj = { invalidTransform: null };
function invalidTransform(arg0) {
  return "Invalid transform property: " + arg0;
}
invalidTransform.__workletHash = 10133863561085;
invalidTransform.__initData = tmp2;
obj.invalidTransform = invalidTransform;
let items1 = [
  {
    code: "(function parseValues_Pnpm_transformTs2(valueString){return valueString.split(',').map(function(value){const trimmedValue=value.trim();if(['deg','rad','%'].some(function(unit){return trimmedValue.endsWith(unit);})){return trimmedValue;}const numValue=parseFloat(trimmedValue);return isNaN(numValue)?trimmedValue:numValue;});})",
  },
];
[tmp3] = items1;
function parseValues(str) {
  const parts = str.split(",");
  return parts.map((item) => {
    const trimmed = item.trim();
    items = ["deg", "rad", "%"];
    if (items.some((item) => trimmed.endsWith(item))) {
      return trimmed;
    } else {
      const _parseFloat = parseFloat;
      let parsed = parseFloat(trimmed);
      const _isNaN = isNaN;
      if (isNaN(parsed)) {
        parsed = trimmed;
      }
      return parsed;
    }
  });
}
parseValues.__workletHash = 16792377556904;
parseValues.__initData = tmp3;
let items2 = [
  {
    code: "(function parseTranslateX_Pnpm_transformTs3(values){let[isNumber,isPercentage]=this.__closure;return values.length===1&&(isNumber(values[0])||isPercentage(values[0]))?[{translateX:values[0]}]:[];})",
  },
  fn(1677).isNumber,
  fn(1677).isPercentage,
];
let closure_129_0;
let closure_129_1;
[tmp4, tmp5, tmp6] = items2;
function parseTranslateX(arg0) {
  if (1 !== arg0.length) {
    items = [];
  } else {
    const obj = { translateX: arg0[0] };
    const items1 = [obj];
    items = items1;
  }
  return items;
}
let items3 = [tmp5, tmp6];
parseTranslateX.__closure = items3;
parseTranslateX.__workletHash = 1467157381340;
parseTranslateX.__initData = tmp4;
const items4 = [
  {
    code: "(function parseTranslateY_Pnpm_transformTs4(values){let[isNumber,isPercentage]=this.__closure;return values.length===1&&(isNumber(values[0])||isPercentage(values[0]))?[{translateY:values[0]}]:[];})",
  },
  fn(1677).isNumber,
  fn(1677).isPercentage,
];
let closure_130_0;
let closure_130_1;
[tmp7, tmp8, tmp9] = items4;
function parseTranslateY(arg0) {
  if (1 !== arg0.length) {
    items = [];
  } else {
    const obj = { translateY: arg0[0] };
    const items1 = [obj];
    items = items1;
  }
  return items;
}
const items5 = [tmp8, tmp9];
parseTranslateY.__closure = items5;
parseTranslateY.__workletHash = 12094491490523;
parseTranslateY.__initData = tmp7;
const items6 = [
  {
    code: "(function parseTranslate_Pnpm_transformTs5(values){let[parseTranslateX,parseTranslateY]=this.__closure;var _values$;if(values.length>2){return[];}const result=parseTranslateX([values[0]]).concat(parseTranslateY([(_values$=values[1])!==null&&_values$!==void 0?_values$:0]));return result.length===2?result:[];})",
  },
  parseTranslateX,
  parseTranslateY,
];
let closure_131_0;
let closure_131_1;
[tmp10, tmp11, tmp12] = items6;
function parseTranslate(arg0) {
  if (arg0.length > 2) {
    return [];
  } else {
    items = [arg0[0]];
    let num = arg0[1];
    if (num == null) {
      num = 0;
    }
    const items1 = [num];
    let combined = _slicedToArray(items).concat(_undefined(items1));
    if (2 !== combined.length) {
      combined = [];
    }
    return combined;
  }
}
const items7 = [tmp11, tmp12];
parseTranslate.__closure = items7;
parseTranslate.__workletHash = 428035541875;
parseTranslate.__initData = tmp10;
const items8 = [
  {
    code: "(function parseScaleX_Pnpm_transformTs6(values){let[isNumber]=this.__closure;return values.length===1&&isNumber(values[0])?[{scaleX:values[0]}]:[];})",
  },
  fn(1677).isNumber,
];
let closure_132_0;
[tmp13, tmp14] = items8;
function parseScaleX(arg0) {
  if (1 === arg0.length) {
    if (_slicedToArray(arg0[0])) {
      const obj = { scaleX: arg0[0] };
      items = [obj];
    }
    return [];
  }
}
const items9 = [tmp14];
parseScaleX.__closure = items9;
parseScaleX.__workletHash = 4770326947227;
parseScaleX.__initData = tmp13;
const items10 = [
  {
    code: "(function parseScaleY_Pnpm_transformTs7(values){let[isNumber]=this.__closure;return values.length===1&&isNumber(values[0])?[{scaleY:values[0]}]:[];})",
  },
  fn(1677).isNumber,
];
let closure_133_0;
[tmp15, tmp16] = items10;
function parseScaleY(arg0) {
  if (1 === arg0.length) {
    if (_slicedToArray(arg0[0])) {
      const obj = { scaleY: arg0[0] };
      items = [obj];
    }
    return [];
  }
}
const items11 = [tmp16];
parseScaleY.__closure = items11;
parseScaleY.__workletHash = 16489187686298;
parseScaleY.__initData = tmp15;
const items12 = [
  {
    code: "(function parseScale_Pnpm_transformTs8(values){let[isNumber,parseScaleX,parseScaleY]=this.__closure;var _values$;if(values.length>2){return[];}if(values.length===1){return isNumber(values[0])?[{scale:values[0]}]:[];}const result=parseScaleX([values[0]]).concat(parseScaleY([(_values$=values[1])!==null&&_values$!==void 0?_values$:values[0]]));return result.length===2?result:[];})",
  },
  fn(1677).isNumber,
  parseScaleX,
  parseScaleY,
];
let closure_134_0;
let closure_134_1;
let closure_134_2;
[tmp17, tmp18, tmp19, tmp20] = items12;
function parseScale(arg0) {
  if (arg0.length > 2) {
    return [];
  } else if (1 === arg0.length) {
    if (_slicedToArray(arg0[0])) {
      const obj2 = { scale: arg0[0] };
      items = [obj2];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  } else {
    const items2 = [arg0[0]];
    let first = arg0[1];
    if (first == null) {
      first = arg0[0];
    }
    const items3 = [first];
    let combined = _undefined(items2).concat(_undefined2(items3));
    if (2 !== combined.length) {
      combined = [];
    }
    return combined;
  }
}
const items13 = [tmp18, tmp19, tmp20];
parseScale.__closure = items13;
parseScale.__workletHash = 14052166635821;
parseScale.__initData = tmp17;
const items14 = [
  {
    code: "(function parseRotate_Pnpm_transformTs9(key,values){let[isAngle]=this.__closure;return values.length===1&&(isAngle(values[0])||values[0]===0)?[{[key]:values[0]===0?'0deg':values[0]}]:[];})",
  },
  fn(1677).isAngle,
];
let closure_135_0;
[tmp21, tmp22] = items14;
function parseRotate(arg0, arg1) {
  if (1 === arg1.length) {
    if (!_slicedToArray(arg1[0])) {
      return items;
    }
    let str = "0deg";
    if (0 !== arg1[0]) {
      str = arg1[0];
    }
    const obj = {};
    obj[arg0] = str;
    items = [obj];
  }
  items = [];
}
const items15 = [tmp22];
parseRotate.__closure = items15;
parseRotate.__workletHash = 4222235264597;
parseRotate.__initData = tmp21;
const items16 = [
  {
    code: "(function parseSkewX_Pnpm_transformTs10(values){let[isAngle]=this.__closure;return values.length===1&&(isAngle(values[0])||values[0]===0)?[{skewX:values[0]===0?'0deg':values[0]}]:[];})",
  },
  fn(1677).isAngle,
];
let closure_136_0;
[tmp23, tmp24] = items16;
function parseSkewX(arg0) {
  if (1 === arg0.length) {
    if (!_slicedToArray(arg0[0])) {
      return items;
    }
    let str = "0deg";
    if (0 !== arg0[0]) {
      str = arg0[0];
    }
    const obj = { skewX: str };
    items = [obj];
  }
  items = [];
}
const items17 = [tmp24];
parseSkewX.__closure = items17;
parseSkewX.__workletHash = 8324667323742;
parseSkewX.__initData = tmp23;
const items18 = [
  {
    code: "(function parseSkewY_Pnpm_transformTs11(values){let[isAngle]=this.__closure;return values.length===1&&(isAngle(values[0])||values[0]===0)?[{skewY:values[0]===0?'0deg':values[0]}]:[];})",
  },
  fn(1677).isAngle,
];
let closure_137_0;
[tmp25, tmp26] = items18;
function parseSkewY(arg0) {
  if (1 === arg0.length) {
    if (!_slicedToArray(arg0[0])) {
      return items;
    }
    let str = "0deg";
    if (0 !== arg0[0]) {
      str = arg0[0];
    }
    const obj = { skewY: str };
    items = [obj];
  }
  items = [];
}
const items19 = [tmp26];
parseSkewY.__closure = items19;
parseSkewY.__workletHash = 8939039659071;
parseSkewY.__initData = tmp25;
const items20 = [
  {
    code: "(function parseSkew_Pnpm_transformTs12(values){let[parseSkewX,parseSkewY]=this.__closure;var _values$;if(values.length>2){return[];}const result=parseSkewX([values[0]]).concat(parseSkewY([(_values$=values[1])!==null&&_values$!==void 0?_values$:0]));return result.length===2?result:[];})",
  },
  parseSkewX,
  parseSkewY,
];
let closure_138_0;
let closure_138_1;
[tmp27, tmp28, tmp29] = items20;
function parseSkew(arg0) {
  if (arg0.length > 2) {
    return [];
  } else {
    items = [arg0[0]];
    let num = arg0[1];
    if (num == null) {
      num = 0;
    }
    const items1 = [num];
    let combined = _slicedToArray(items).concat(_undefined(items1));
    if (2 !== combined.length) {
      combined = [];
    }
    return combined;
  }
}
const items21 = [tmp28, tmp29];
parseSkew.__closure = items21;
parseSkew.__workletHash = 7685827480937;
parseSkew.__initData = tmp27;
const items22 = [
  {
    code: "(function parseMatrix_Pnpm_transformTs13(values){let[isNumberArray]=this.__closure;let matrixValues=[];if(isNumberArray(values)){if(values.length===6){matrixValues=[values[0],values[1],0,0,values[2],values[3],0,0,0,0,1,0,values[4],values[5],0,1];}else if(values.length===16){matrixValues=values;}}return matrixValues.length>0?[{matrix:matrixValues}]:[];})",
  },
  fn(1677).isNumberArray,
];
let closure_139_0;
[tmp30, tmp31] = items22;
function parseMatrix(arg0) {
  let arr = arg0;
  items = [];
  if (!_slicedToArray(arg0)) {
    if (items.length > 0) {
      const obj = { matrix: items };
      const items1 = [obj];
      let items2 = items1;
    } else {
      items2 = [];
    }
    return items2;
  } else if (6 === arr.length) {
    const items3 = [, , , , , , , , , , , , , , ,];
    [arr3[0], arr3[1]] = arr;
    items3[2] = 0;
    items3[3] = 0;
    items3[4] = arr[2];
    items3[5] = arr[3];
    items3[6] = 0;
    items3[7] = 0;
    items3[8] = 0;
    items3[9] = 0;
    items3[10] = 1;
    items3[11] = 0;
    items3[12] = arr[4];
    arr = arr[5];
    items3[13] = arr;
    items3[14] = 0;
    items3[15] = 1;
    items = items3;
  } else if (16 === arr.length) {
    items = arr;
  }
}
const items23 = [tmp31];
parseMatrix.__closure = items23;
parseMatrix.__workletHash = 9310173096838;
parseMatrix.__initData = tmp30;
const items24 = [
  {
    code: "(function parsePerspective_Pnpm_transformTs14(values){let[isNumber]=this.__closure;return values.length===1&&isNumber(values[0])?[{perspective:values[0]}]:[];})",
  },
  fn(1677).isNumber,
];
let closure_140_0;
[tmp32, tmp33] = items24;
function parsePerspective(arg0) {
  if (1 === arg0.length) {
    if (_slicedToArray(arg0[0])) {
      const obj = { perspective: arg0[0] };
      items = [obj];
    }
    return [];
  }
}
const items25 = [tmp33];
parsePerspective.__closure = items25;
parsePerspective.__workletHash = 5067845823688;
parsePerspective.__initData = tmp32;
const items26 = [
  {
    code: "(function pnpm_transformTs15(transform){let[parseValues,parseTranslate,parseTranslateX,parseTranslateY,parseScale,parseScaleX,parseScaleY,parseRotate,parseSkew,parseSkewX,parseSkewY,parseMatrix,parsePerspective]=this.__closure;const[key,valueString]=transform.split(/\\(\\s*/);const values=parseValues(valueString.replace(/\\)$/g,''));switch(key){case'translate':return parseTranslate(values);case'translateX':return parseTranslateX(values);case'translateY':return parseTranslateY(values);case'scale':return parseScale(values);case'scaleX':return parseScaleX(values);case'scaleY':return parseScaleY(values);case'rotate':case'rotateX':case'rotateY':case'rotateZ':return parseRotate(key,values);case'skew':return parseSkew(values);case'skewX':return parseSkewX(values);case'skewY':return parseSkewY(values);case'matrix':return parseMatrix(values);case'perspective':return parsePerspective(values);default:return[];}})",
  },
  parseValues,
  parseTranslate,
  parseTranslateX,
  parseTranslateY,
  parseScale,
  parseScaleX,
  parseScaleY,
  parseRotate,
  parseSkew,
  parseSkewX,
  parseSkewY,
  parseMatrix,
  parsePerspective,
];
let _slicedToArray;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let c9;
let c10;
let c11;
let c12;
[tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items26;
function pnpm_transformTs15(str) {
  [tmp2, str] = str.split(/\(\s*/);
  const tmp3 = _slicedToArray(str.replace(/\)$/g, ""));
  switch (tmp2) {
    case "translate":
      return _undefined(tmp3);
    case "translateX":
      return _undefined2(tmp3);
    case "translateY":
      return _undefined3(tmp3);
    case "scale":
      return _undefined4(tmp3);
    case "scaleX":
      return _undefined5(tmp3);
    case "scaleY":
      return _undefined6(tmp3);
    case "rotate":
      let tmp10 = _undefined7(tmp2, tmp3);
      return tmp10;
    case "rotateX":
      tmp10 = _undefined7(tmp2, tmp3);
      return tmp10;
    case "rotateY":
      tmp10 = _undefined7(tmp2, tmp3);
      return tmp10;
    case "rotateZ":
      tmp10 = _undefined7(tmp2, tmp3);
      return tmp10;
    case "skew":
      return _undefined8(tmp3);
    case "skewX":
      return _undefined9(tmp3);
    case "skewY":
      return _undefined10(tmp3);
    case "matrix":
      return _undefined11(tmp3);
    case "perspective":
      return _undefined12(tmp3);
    default:
      return [];
  }
  const tmp = _slicedToArray(str.split(/\(\s*/), 2);
}
const items27 = [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47];
pnpm_transformTs15.__closure = items27;
pnpm_transformTs15.__workletHash = 6060252501613;
pnpm_transformTs15.__initData = tmp34;
const items28 = [
  {
    code: "(function pnpm_transformTs16(value){let[parseTransformProperty,ERROR_MESSAGES]=this.__closure;if(typeof value!=='string'){return value;}if(value==='none'){return[];}return value.split(/\\)\\s*/).filter(Boolean).flatMap(function(part){const parsed=parseTransformProperty(part);if(parsed.length===0){throw new Error(\"[Reanimated] \"+ERROR_MESSAGES.invalidTransform(part+\")\"));}return parsed;});})",
  },
  pnpm_transformTs15,
  obj,
];
let closure_141_0;
let closure_141_1;
[tmp48, tmp49, tmp50] = items28;
function pnpm_transformTs16(str) {
  if (typeof str !== "string") {
    return str;
  } else if ("none" === "none") {
    items = [];
  } else {
    const parts = str.split(/\)\s*/);
    const _Boolean = Boolean;
    const found = parts.filter(Boolean);
    items = found.flatMap((item) => {
      const arr = _slicedToArray(item);
      if (0 === arr.length) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const _HermesInternal2 = HermesInternal;
        const error = new Error("[Reanimated] " + _undefined.invalidTransform("" + item + ")"));
        throw error;
      } else {
        return arr;
      }
    });
  }
}
const items29 = [tmp49, tmp50];
pnpm_transformTs16.__closure = items29;
pnpm_transformTs16.__workletHash = 3134845826437;
pnpm_transformTs16.__initData = tmp48;

export const ERROR_MESSAGES = obj;
export const processTransform = pnpm_transformTs16;
