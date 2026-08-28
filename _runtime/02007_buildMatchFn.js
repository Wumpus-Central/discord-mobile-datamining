// _runtime/02007_buildMatchFn.js

export default function buildMatchFn(arg0) {
  closure_0 = arg0;
  return (str) => {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let obj = arguments[1];
      }
      const width = obj.width;
      let tmp2 = width;
      if (width) {
        tmp2 = closure_0.matchPatterns[width];
      }
      if (!tmp2) {
        tmp2 = closure_0.matchPatterns[closure_0.defaultMatchWidth];
      }
      const match = str.match(tmp2);
      if (match) {
        const first = match[0];
        let arr2 = width;
        if (width) {
          arr2 = closure_0.parsePatterns[width];
        }
        if (!arr2) {
          arr2 = closure_0.parsePatterns[closure_0.defaultParseWidth];
        }
        const _Array = Array;
        if (Array.isArray(arr2)) {
          let num = 0;
          let tmp15;
          if (0 < arr2.length) {
            tmp15 = num;
            while (!obj3.test(first)) {
              let sum = num + 1;
              num = sum;
              if (sum >= arr2.length) {
                break;
              }
            }
            obj3 = arr2[num];
          }
          let tmp12 = tmp15;
        } else {
          const keys = Object.keys();
          if (keys !== undefined) {
            while (keys[tmp] !== undefined) {
              let tmp20 = tmp14;
              if (!arr2.hasOwnProperty(tmp14)) {
                continue;
              } else {
                let obj2 = arr2[tmp14];
                tmp12 = tmp14;
                if (obj2.test(first)) {
                  break;
                }
              }
              continue;
            }
          }
        }
        let valueCallbackResult = tmp12;
        if (closure_0.valueCallback) {
          valueCallbackResult = closure_0.valueCallback(tmp12);
        }
        if (obj.valueCallback) {
          valueCallbackResult = obj.valueCallback(valueCallbackResult);
        }
        obj = { value: null, rest: null };
        obj[0] = valueCallbackResult;
        obj[1] = str.slice(first.length);
        return obj;
      } else {
        return null;
      }
    }
    obj = {};
  };
};
export default exports.default;