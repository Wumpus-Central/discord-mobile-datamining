// === Module 748: ? ===

// Module 748
import _slicedToArray from "module_32" /* 32 */;

function isAttributeObject(value) {
  let hasItem = typeof value === "object";
  if (typeof value === "object") {
    hasItem = null != value;
  }
  if (hasItem) {
    const _Array = Array;
    hasItem = !Array.isArray(value);
  }
  if (hasItem) {
    const _Object = Object;
    const keys = Object.keys(value);
    hasItem = keys.includes("value");
  }
  return hasItem;
}
function attributeValueToTypedAttributeValue(value, flag) {
  let tmp = value;
  if (!isAttributeObject(value)) {
    let obj = { value, unit: "a" };
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
      const obj = { value, type: str };
      return obj;
    }
  })(value);
  if (unit) {
    if (typeof unit === "string") {
      obj = { unit };
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
        const obj1 = { value: str4, type: "string" };
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
export const serializeAttributes = function serializeAttributes(attributes) {
  if (flag === undefined) {
    flag = false;
  }
  let obj = {};
  if (attributes == null) {
    obj = {};
  }
  const entries = Object.entries(obj);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    let tmp8 = attributeValueToTypedAttributeValue(tmp5[1], flag);
    if (tmp8) {
      obj[first] = tmp9;
    }
    continue;
  }
  return obj;
};