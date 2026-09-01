// === Module 4788: isArguments ===

// Module 4788 (isArguments)
import isArguments from "isArguments" /* 4789 */;

if (Object.keys) {
  module.exports = undefined;
} else {
  const _Object = Object;
  const _Object2 = Object;
  let closure_2 = isArguments;
  const _Object3 = Object;
  let call = propertyIsEnumerable.call;
  if (typeof call === "unknown") {
    let propertyIsEnumerableResult = propertyIsEnumerable("toString");
  } else {
    propertyIsEnumerableResult = call(obj, "toString");
  }
  let closure_3 = !propertyIsEnumerableResult;
  let call2 = propertyIsEnumerable.call;
  const fn = () => {

  };
  if (typeof call2 === "unknown") {
    let propertyIsEnumerableResult1 = propertyIsEnumerable("prototype");
  } else {
    propertyIsEnumerableResult1 = call2(fn, "prototype");
  }
  let closure_5 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  function equalsConstructorPrototype(arg0) {
    const constructor = arg0.constructor;
    let tmp = constructor;
    if (constructor) {
      tmp = constructor.prototype === arg0;
    }
    return tmp;
  }
  let closure_7 = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true };
  let closure_8 = (() => {
    if (typeof window === "undefined") {
      return false;
    } else {
      const _window5 = window;
      for (const key10002 in window) {
        let tmp7 = key10002;
        try {
          let tmp = table;
          if (!table["$" + key10002]) {
            let tmp2 = hasOwnProperty;
            let call = hasOwnProperty.call;
            let _window = window;
            if (typeof call === "unknown") {
              let callResult = tmp2(key10002);
            } else {
              callResult = call(_window, key10002);
            }
            if (callResult) {
              let _window2 = window;
              if (null !== window[key10002]) {
                let _window3 = window;
                if (typeof window[key10002] === "object") {
                  try {
                    let tmp4 = equalsConstructorPrototype;
                    let _window4 = window;
                    let tmp5 = equalsConstructorPrototype(window[key10002]);
                  } catch (err) {
                    let flag = true;
                    return true;
                  }
                }
              }
            }
          }
          continue;
        } catch (err) {
          let flag2 = true;
          return true;
        }
      }
      return false;
    }
  })();
  function keys(obj) {
    let length;
    let length2;
    let str = toString;
    const call = toString.call;
    const tmp3 = callback(obj);
    if (!(null !== obj && typeof obj === "object")) {
      if (!tmp) {
        if (!tmp6) {
          if (!tmp3) {
            const _TypeError = TypeError;
            const typeError = new TypeError("Object.keys called on a non-object");
            throw typeError;
          }
        }
      }
      let tmp12 = propertyIsEnumerableResult1;
      if (propertyIsEnumerableResult1) {
        tmp12 = tmp6;
      }
      const items = [];
      if (tmp) {
        if (obj.length > 0) {
          const call3 = hasOwnProperty.call;
          if (!(typeof call3 === "unknown" ? tmp13(0) : call3(obj, 0))) {
            let num3 = 0;
            if (0 < obj.length) {
              do {
                let _String = String;
                let arr = items.push(String(num3));
                num3 = num3 + 1;
                length = obj.length;
              } while (num3 < length);
            }
          }
          tmp13 = hasOwnProperty;
        }
      }
      if (tmp3) {
        if (obj.length > 0) {
          let num6 = 0;
          if (0 < obj.length) {
            do {
              let _String3 = String;
              arr = items.push(String(num6));
              num6 = num6 + 1;
              length2 = obj.length;
            } while (num6 < length2);
          }
        }
        if (closure_3) {
          let num7 = 0;
          const tmp26 = ((arg0) => {
            if (typeof window !== "undefined") {
              if (closure_8) {
                try {
                  return callback(arg0);
                } catch (err) {
                  return false;
                }
              }
            }
            return callback(arg0);
          })(obj);
          if (0 < closure_5.length) {
            while (true) {
              let tmp28 = num7;
              let tmp29 = tmp26;
              if (tmp26) {
                let tmp30 = closure_5;
                tmp29 = "constructor" === closure_5[num7];
              }
              if (!tmp29) {
                break;
              } else {
                if (!tmp29) {
                  let tmp35 = closure_5;
                  let arr1 = items.push(closure_5[num7]);
                }
                num7 = num7 + 1;
                let tmp37 = closure_5;
              }
            }
            const call5 = hasOwnProperty.call;
            !(typeof call5 === "unknown" ? hasOwnProperty(closure_5[num7]) : call5(obj, closure_5[num7]));
            const tmp31 = hasOwnProperty;
          }
        }
        return items;
      }
      for (const key10045 in arg0) {
        let tmp38 = key10045;
        let tmp18 = tmp12;
        if (tmp12) {
          tmp18 = "prototype" === key10045;
        }
        if (tmp18) {
          if (tmp18) {
            continue;
          } else {
            let _String2 = String;
            let arr2 = items.push(String(key10045));
            continue;
          }
          continue;
        } else {
          let tmp19 = hasOwnProperty;
          let call4 = hasOwnProperty.call;
          if (typeof call4 === "unknown") {
            let call4Result = tmp19(key10045);
          } else {
            call4Result = call4(arg0, key10045);
          }
          let tmp21 = !call4Result;
        }
      }
    } else {
      const call2 = str.call;
      str = "[object String]";
      const tmp4 = typeof call2 === "unknown" ? str() : call2(obj);
    }
  }
  obj = { toString: null };
}