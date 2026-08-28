// _runtime/00883_isAttributeObject.js
import closure_0 from "metro/00032__slicedToArray.js";

function isAttributeObject(obj) {
  let hasItem = typeof obj === "object";
  if (typeof obj === "object") {
    hasItem = null != obj;
  }
  if (hasItem) {
    const _Array = Array;
    hasItem = !Array.isArray(obj);
  }
  if (hasItem) {
    const _Object = Object;
    const keys = Object.keys(obj);
    hasItem = keys.includes("value");
  }
  return hasItem;
}
function attributeValueToTypedAttributeValue(arg0, flag) {
  let tmp = arg0;
  if (!isAttributeObject(arg0)) {
    let obj = { value: null, unit: "r" };
    obj[0] = arg0;
    tmp = obj;
  }
  ({ value, unit } = tmp);
  const tmp2 = (function getTypedAttributeValue(value) {
    let str = "string";
    if (typeof value !== "string") {
      let str3 = "boolean";
      if (typeof value !== "boolean") {
        let tmp = null;
        if (typeof value === "number") {
          const _Number2 = Number;
          tmp = null;
          if (!Number.isNaN(value)) {
            const _Number = Number;
            let str2 = "double";
            if (Number.isInteger(value)) {
              str2 = "integer";
            }
            tmp = str2;
          }
        }
        str3 = tmp;
      }
      str = str3;
    }
    if (str) {
      const obj = { value: null, type: null };
      obj[0] = value;
      obj[1] = str;
      return obj;
    }
  })(value);
  if (unit) {
    if (typeof unit === "string") {
      obj = { unit: null };
      obj[0] = unit;
      let obj2 = obj;
    }
    if (tmp2) {
      obj = {};
      const merged = Object.assign(tmp2);
      const merged1 = Object.assign(obj2);
      return obj;
    } else if (flag) {
      try {
        const _JSON = JSON;
        let str4 = JSON.stringify(value);
        if (str4 == null) {
          str4 = "";
        }
        obj1 = { value: null, type: "string" };
        obj1[0] = str4;
        const merged2 = Object.assign(obj2);
        return obj1;
      } catch (err) {
      }
    }
  }
  obj2 = {};
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { attributeValueToTypedAttributeValue };
export { isAttributeObject };
export const serializeAttributes = function serializeAttributes(attributes, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let obj = attributes;
  obj = {};
  if (attributes == null) {
    obj = {};
  }
  const entries = Object.entries(obj);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let first = tmp5[0];
    let tmp7 = attributeValueToTypedAttributeValue;
    let tmp8 = attributeValueToTypedAttributeValue(tmp5[1], flag);
    if (tmp8) {
      let tmp10 = first;
      let tmp11 = tmp8;
      obj[first] = tmp9;
    }
    continue;
  }
  return obj;
};