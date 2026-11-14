// === Module 1679: guards ===

// Module 1679 (guards)
const items = [{ code: "(function pnpm_guardsTs1(value){return typeof value==='string'&&/^-?\\d+(\\.\\d+)?(deg|rad)$/.test(value);})" }];
[tmp2] = items;
function pnpm_guardsTs1(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = /^-?\d+(\.\d+)?(deg|rad)$/.test(str);
    const obj = /^-?\d+(\.\d+)?(deg|rad)$/;
  }
  return isMatch;
}
pnpm_guardsTs1.__workletHash = 15415465767309;
pnpm_guardsTs1.__initData = tmp2;
const items1 = [{ code: "(function pnpm_guardsTs2(value){return typeof value==='number'&&!isNaN(value);})" }];
[tmp3] = items1;
function pnpm_guardsTs2(num) {
  let tmp = typeof num === "number";
  if (typeof num === "number") {
    const _isNaN = isNaN;
    tmp = !isNaN(num);
  }
  return tmp;
}
pnpm_guardsTs2.__workletHash = 9230504808626;
pnpm_guardsTs2.__initData = tmp3;
const items2 = [{ code: "(function pnpm_guardsTs3(value){let[isNumber]=this.__closure;return Array.isArray(value)&&value.every(isNumber);})" }, pnpm_guardsTs2];
let c0;
[tmp4, tmp5] = items2;
function pnpm_guardsTs3(arr) {
  let isArray = Array.isArray(arr);
  if (isArray) {
    isArray = arr.every(c0);
  }
  return isArray;
}
const items3 = [tmp5];
pnpm_guardsTs3.__closure = items3;
pnpm_guardsTs3.__workletHash = 3894501263460;
pnpm_guardsTs3.__initData = tmp4;
const items4 = [{ code: "(function pnpm_guardsTs4(value){return value.endsWith('px')||!isNaN(Number(value));})" }];
[tmp6] = items4;
function pnpm_guardsTs4(str) {
  let endsWithResult = str.endsWith("px");
  if (!endsWithResult) {
    const _isNaN = isNaN;
    const _Number = Number;
    endsWithResult = !isNaN(Number(str));
  }
  return endsWithResult;
}
pnpm_guardsTs4.__workletHash = 11082395374208;
pnpm_guardsTs4.__initData = tmp6;
const items5 = [{ code: "(function pnpm_guardsTs5(value){return typeof value==='string'&&/^-?\\d+(\\.\\d+)?%$/.test(value);})" }];
[tmp7] = items5;
function pnpm_guardsTs5(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = /^-?\d+(\.\d+)?%$/.test(str);
    const obj = /^-?\d+(\.\d+)?%$/;
  }
  return isMatch;
}
pnpm_guardsTs5.__workletHash = 1496107320448;
pnpm_guardsTs5.__initData = tmp7;
const items6 = [{ code: "(function pnpm_guardsTs6(value){return typeof value==='object'&&value!==null&&!Array.isArray(value);})" }];
[tmp8] = items6;
function pnpm_guardsTs6(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  return tmp;
}
pnpm_guardsTs6.__workletHash = 4924885652062;
pnpm_guardsTs6.__initData = tmp8;
let closure_129_0 = pnpm_guardsTs6;
const items7 = [{ code: "(function pnpm_guardsTs7(value){let[isRecord]=this.__closure;return isRecord(value)&&Object.keys(value).length===0;})" }, pnpm_guardsTs6];
let closure_130_0;
[tmp9, tmp10] = items7;
function pnpm_guardsTs7(arg0) {
  let tmp = _undefined(arg0);
  if (tmp) {
    const _Object = Object;
    tmp = 0 === Object.keys(arg0).length;
  }
  return tmp;
}
const items8 = [tmp10];
pnpm_guardsTs7.__closure = items8;
pnpm_guardsTs7.__workletHash = 11918161535111;
pnpm_guardsTs7.__initData = tmp9;

export (arg0) => null != arg0
export const isAngle = pnpm_guardsTs1;
export const isNumber = pnpm_guardsTs2;
export const isNumberArray = pnpm_guardsTs3;
export const isLength = pnpm_guardsTs4;
export const isPercentage = pnpm_guardsTs5;
export const isRecord = pnpm_guardsTs6;
export const isEmptyObject = pnpm_guardsTs7;
export (arg0) => {
  let tmp = arg0 && typeof arg0 === "object";
  if (tmp) {
    tmp = "as" in arg0;
  }
  if (tmp) {
    tmp = typeof arg0.as === "string";
  }
  return tmp;
}
export (obj) => {
  if (typeof c0 === "function") {
    let tmp2 = typeof obj === "object";
    if (typeof obj === "object") {
      tmp2 = null !== obj;
    }
    if (tmp2) {
      const _Array = Array;
      tmp2 = !Array.isArray(obj);
    }
    if (tmp2) {
      tmp2 = "process" in obj;
    }
    return tmp2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}