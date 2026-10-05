// === Module 2126: buildMatchFn ===

// Module 2126 (buildMatchFn)

export default function buildMatchFn(arg0) {
  let closure_0 = arg0;
  return function(str) {
    if (arguments.length > 1) {
      let obj;
      if (undefined !== arguments[1]) {
        obj = arguments[1];
      }
      const width = obj.width;
      const tmp2 = width && closure_0.matchPatterns[width] || closure_0.matchPatterns[closure_0.defaultMatchWidth];
      const match = str.match(tmp2);
      if (match) {
        let tmp12;
        const first = match[0];
        const _Array = Array;
        if (Array.isArray(width && closure_0.parsePatterns[width] || closure_0.parsePatterns[closure_0.defaultParseWidth])) {
          let num = 0;
          let tmp15;
          if (0 < (width && closure_0.parsePatterns[width] || closure_0.parsePatterns[closure_0.defaultParseWidth]).length) {
            tmp15 = num;
            const obj3 = (width && closure_0.parsePatterns[width] || closure_0.parsePatterns[closure_0.defaultParseWidth])[num];
            while (!obj3.test(first)) {
              let sum = num + 1;
              num = sum;
              if (sum >= arr2.length) {
                break;
              }
            }
          }
          tmp12 = tmp15;
        } else {
          const keys = Object.keys();
          if (keys !== undefined) {
            while (keys[tmp] !== undefined) {
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
        let valueCallbackResult2 = valueCallbackResult;
        if (obj.valueCallback) {
          valueCallbackResult2 = obj.valueCallback(valueCallbackResult);
        }
        const obj5 = { value: valueCallbackResult2, rest: str.slice(first.length) };
        return obj5;
      } else {
        return null;
      }
    }
    obj = {};
  };
};