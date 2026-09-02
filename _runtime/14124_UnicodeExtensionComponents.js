// === Module 14124: UnicodeExtensionComponents ===

// Module 14124 (UnicodeExtensionComponents)
const require = arg1;
const dependencyMap = arg6;
arg5.UnicodeExtensionComponents = function UnicodeExtensionComponents(str) {
  let obj;
  obj(14119).invariant(str === str.toLowerCase(), "Expected extension to be lowercase");
  let num = 3;
  obj(14119).invariant("-u-" === str.slice(0, 3), "Expected extension to be a Unicode locale extension");
  const attributes = [];
  const keywords = [];
  if (3 < str.length) {
    while (true) {
      let index = str.indexOf("-", num);
      let tmp4 = num;
      let tmp5 = iter;
      let tmp6 = -1 === index ? length - num : index - num;
      let substr = str.slice(num, num + tmp6);
      let tmp8 = obj;
      let tmp9 = dependencyMap;
      let invariantResult2 = obj(14119).invariant(tmp6 >= 2, "Expected a subtag to have at least 2 characters");
      if (undefined === iter) {
        if (2 !== tmp6) {
          let tmp13 = iter;
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
        obj = { key: null, value: "" };
        obj[0] = substr;
        tmp13 = obj;
        if (undefined === keywords.find((key) => {
          key = undefined;
          if (null != obj) {
            key = obj.key;
          }
          return key.key === key;
        })) {
          arr = keywords.push(obj);
          tmp13 = obj;
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
          let invariantResult3 = tmp8(14119).invariant(undefined !== iter, "Expected keyword to be defined");
          iter.value = `${iter.value}-${tmp7}`;
          tmp13 = iter;
        }
      }
    }
  }
  return { attributes, keywords };
};