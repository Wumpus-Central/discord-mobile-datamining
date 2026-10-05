// _runtime/metro/00759__slicedToArray.js
import _slicedToArray from "00032__slicedToArray.js";

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
  let unit;
  function getTypedAttributeValue(value) {
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
      return { value, type: str };
    }
  }
  let tmp = value;
  if (!isAttributeObject(value)) {
    const obj = { value, unit: "r" };
    tmp = obj;
  }
  ({ value, unit } = tmp);
  const tmp2 = getTypedAttributeValue(value);
  if (unit) {
    let obj5;
    if (typeof unit === "string") {
      obj5 = { unit };
      const obj2 = { unit };
    }
    if (tmp2) {
      const obj3 = {};
      const merged = Object.assign(tmp2);
      const merged1 = Object.assign(obj5);
      return obj3;
    } else {
      const tmp3 = flag;
      if (tmp3) {
        let str = "skip-undefined";
        let str2 = "";
        let str3 = "";
        try {
          const _JSON = JSON;
          str3 = JSON.stringify(value) ?? "";
          const str4 = JSON.stringify(value) ?? "";
        } catch (err) {}
        const obj4 = { value: str3, type: "string" };
        const merged2 = Object.assign(obj5);
        return obj4;
      }
    }
  }
  obj5 = {};
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { attributeValueToTypedAttributeValue };
export { isAttributeObject };
export const serializeAttributes = function serializeAttributes(attributes) {
  let obj = attributes;
  const obj2 = {};
  const _Object = Object;
  if (attributes == null) {
    obj = {};
  }
  const entries1 = entries(obj);
  const tmp2 = entries1[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let first = tmp5[0];
    let tmp8 = attributeValueToTypedAttributeValue(tmp5[1], flag);
    if (tmp8) {
      obj2[first] = tmp9;
    }
    continue;
  }
  return obj2;
};
