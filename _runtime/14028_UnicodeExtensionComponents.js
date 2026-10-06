// === Module 14028: UnicodeExtensionComponents ===

// Module 14028 (UnicodeExtensionComponents)
import _mod14023 from "module_14023" /* 14023 */;


export const UnicodeExtensionComponents = function UnicodeExtensionComponents(str) {
  let iter;
  _mod14023.invariant(str === str.toLowerCase(), "Expected extension to be lowercase");
  let num = 3;
  _mod14023.invariant("-u-" === str.slice(0, 3), "Expected extension to be a Unicode locale extension");
  const attributes = [];
  const keywords = [];
  if (3 < str.length) {
    while (true) {
      let tmp13;
      let index = str.indexOf("-", num);
      let tmp6 = -1 === index ? length - num : index - num;
      let substr = str.slice(num, num + tmp6);
      let invariantResult2 = _mod14023.invariant(tmp6 >= 2, "Expected a subtag to have at least 2 characters");
      if (undefined === iter) {
        if (2 !== tmp6) {
          tmp13 = iter;
          if (-1 === attributes.indexOf(substr)) {
            let arr = attributes.push(substr);
            tmp13 = iter;
          }
          num = num + (tmp6 + 1);
          iter = tmp13;
          if (num >= length) {
            break;
          }
        }
      }
      if (2 === tmp6) {
        let entry = { key: substr, value: "" };
        tmp13 = entry;
        if (undefined === keywords.find((key) => {
          let key1;
          if (null != entry) {
            key1 = entry.key;
          }
          return key.key === key1;
        })) {
          let arr2 = keywords.push(entry);
          tmp13 = entry;
        }
      } else {
        let value;
        if (null != iter) {
          value = iter.value;
        }
        if ("" === value) {
          iter.value = substr;
          tmp13 = iter;
        } else {
          let invariantResult3 = _mod14023.invariant(undefined !== iter, "Expected keyword to be defined");
          iter.value = `${iter.value}-${tmp7}`;
          tmp13 = iter;
        }
      }
    }
  }
  return { attributes, keywords };
};