// === Module 5113: ? ===

// Module 5113
if ((function shouldUseNative() {
  let sum;
  try {
    const _Object = Object;
    if (Object.assign) {
      const _String = String;
      const string = new String("abc");
      string[5] = "de";
      const _Object2 = Object;
      if ("5" === Object.getOwnPropertyNames(string)[0]) {
        return false;
      } else {
        let obj = {};
        let num2 = 0;
        do {
          let tmp6 = obj;
          let _String2 = String;
          let tmp7 = num2;
          tmp10["_" + String.fromCharCode(num2)] = num2;
          sum = num2 + 1;
          num2 = sum;
        } while (sum < 10);
        const _Object3 = Object;
        const ownPropertyNames = Object.getOwnPropertyNames(obj);
        const mapped = ownPropertyNames.map((arg0) => obj[arg0]);
        if ("0123456789" !== mapped.join("")) {
          return false;
        } else {
          obj = {};
          const split = "abcdefghijklmnopqrst".split;
          const parts = "abcdefghijklmnopqrst".split("");
          const item = parts.forEach((arg0) => {
            obj[arg0] = arg0;
          });
          const _Object4 = Object;
          const _Object5 = Object;
          const keys = Object.keys(Object.assign({}, obj));
          return "abcdefghijklmnopqrst" === keys.join("");
        }
      }
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
})()) {
  let _Object = Object;
  let fn = Object.assign;
} else {
  fn = (arg0, arg1) => {
    if (null == arg0) {
      const _TypeError = TypeError;
      const typeError = new TypeError("Object.assign cannot be called with null or undefined");
      throw typeError;
    } else {
      const _Object2 = Object;
      const ObjectResult = Object(arg0);
      for (let num2 = 1; num2 < arguments.length; num2 = num2 + 1) {
        let _Object = Object;
        let ObjectResult1 = Object(arguments[num2]);
        let tmp2 = ObjectResult1;
        let tmp3 = num2;
        for (const key10010 in ObjectResult1) {
          let tmp15 = key10010;
          let tmp16 = hasOwnProperty;
          let call2 = hasOwnProperty.call;
          if (typeof call2 === "unknown") {
            let call2Result = tmp16(key10010);
          } else {
            call2Result = call2(ObjectResult1, key10010);
          }
          if (!call2Result) {
            continue;
          } else {
            ObjectResult[key10010] = ObjectResult1[key10010];
            continue;
          }
          continue;
        }
        if (getOwnPropertySymbols) {
          let arr = getOwnPropertySymbols(ObjectResult1);
          for (let num = 0; num < arr.length; num = num + 1) {
            let tmp5 = propertyIsEnumerable;
            let call = propertyIsEnumerable.call;
            let tmp6 = arr[num];
            let tmp7 = num;
            if (typeof call === "unknown" ? tmp5(tmp6) : call(ObjectResult1, tmp6)) {
              ObjectResult[arr[num]] = ObjectResult1[arr[num]];
            }
          }
        }
      }
      return ObjectResult;
    }
  };
}

export default fn;