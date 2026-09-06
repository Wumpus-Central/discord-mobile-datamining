// _runtime/metro/04835__.js
import _mod4836 from "04836__.js";

if (Object.keys) {
  module.exports = undefined;
} else {
  const _Object = Object;
  const _Object2 = Object;
  let closure_2 = _mod4836;
  const _Object3 = Object;
  let call = propertyIsEnumerable.call;
  if (typeof call === "unknown") {
    let propertyIsEnumerableResult = propertyIsEnumerable("toString");
  } else {
    propertyIsEnumerableResult = call(obj, "toString");
  }
  let closure_3 = !propertyIsEnumerableResult;
  let call2 = propertyIsEnumerable.call;
  const fn = () => {};
  if (typeof call2 === "unknown") {
    propertyIsEnumerable("prototype");
  } else {
    call2(fn, "prototype");
  }
  function equalsConstructorPrototype(arg0) {
    const constructor = arg0.constructor;
    let tmp = constructor;
    if (constructor) {
      tmp = constructor.prototype === arg0;
    }
    return tmp;
  }
  let closure_7 = {
    $applicationCache: true,
    $console: true,
    $external: true,
    $frame: true,
    $frameElement: true,
    $frames: true,
    $innerHeight: true,
    $innerWidth: true,
    $onmozfullscreenchange: true,
    $onmozfullscreenerror: true,
    $outerHeight: true,
    $outerWidth: true,
    $pageXOffset: true,
    $pageYOffset: true,
    $parent: true,
    $scrollLeft: true,
    $scrollTop: true,
    $scrollX: true,
    $scrollY: true,
    $self: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $window: true,
  };
  let closure_8 = (() => {
    if (typeof window === "undefined") {
      return false;
    } else {
      const _window5 = window;
      for (const key10002 in window) {
        try {
          if (!closure_7["$" + key10002]) {
            let call = hasOwnProperty.call;
            let _window = window;
            if (typeof call === "unknown") {
              let callResult = hasOwnProperty(key10002);
            } else {
              callResult = call(_window, key10002);
            }
            if (callResult) {
              let _window2 = window;
              if (null !== window[key10002]) {
                let _window3 = window;
                if (typeof window[key10002] === "object") {
                  try {
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
    let length2;
    let str = toString;
    const call = toString.call;
    const tmp3 = closure_2(obj);
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
          if (!(typeof call3 === "unknown" ? hasOwnProperty(0) : call3(obj, 0))) {
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
              if (closure_1_8) {
                try {
                  return equalsConstructorPrototype(arg0);
                } catch (err) {
                  return false;
                }
              }
            }
            return equalsConstructorPrototype(arg0);
          })(obj);
          if (0 < length.length) {
            while (true) {
              let tmp29 = tmp26;
              if (tmp26) {
                tmp29 = "constructor" === length[num7];
              }
              if (!tmp29) {
                break;
              } else {
                if (!tmp29) {
                  let arr1 = items.push(length[num7]);
                }
                num7 = num7 + 1;
              }
            }
            const call5 = hasOwnProperty.call;
            !(typeof call5 === "unknown" ? hasOwnProperty(length[num7]) : call5(obj, length[num7]));
          }
        }
        return items;
      }
      for (const key10045 in arg0) {
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
          let call4 = hasOwnProperty.call;
          if (typeof call4 === "unknown") {
            let call4Result = hasOwnProperty(key10045);
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
    const tmp2 = typeof call === "unknown" ? str() : call(obj);
  }
  obj = { toString: null };
}
