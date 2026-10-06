// === Module 5362: isArguments ===

// Module 5362 (isArguments)
import isArguments from "isArguments" /* 5363 */;

let keys;
if (!Object.keys) {
  const _Object = Object;
  const _Object2 = Object;
  let closure_2 = isArguments;
  const _Object3 = Object;
  let closure_3 = !propertyIsEnumerable.call({ toString: null }, "toString");
  let closure_4 = propertyIsEnumerable.call(() => {

  }, "prototype");
  let closure_5 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  function equalsConstructorPrototype(arg0) {
    const constructor = arg0.constructor;
    return constructor && constructor.prototype === arg0;
  }
  let closure_7 = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true };
  let closure_8 = (() => {
    if (typeof window === "undefined") {
      return false;
    } else {
      const _window4 = window;
      for (const key10002 in window) {
        try {
          if (!closure_7["$" + key10002]) {
            if (hasOwnProperty.call(window, key10002)) {
              let _window = window;
              if (null !== window[key10002]) {
                let _window2 = window;
                if (typeof window[key10002] === "object") {
                  try {
                    let _window3 = window;
                    let tmp3 = equalsConstructorPrototype(window[key10002]);
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
  keys = function keys(obj) {
    let length;
    let length2;
    const callResult = toString.call(obj);
    const tmp3 = closure_2(obj);
    const tmp4 = tmp && "[object String]" === toString.call(obj);
    if (!(null !== obj && typeof obj === "object")) {
      if ("[object Function]" !== callResult) {
        if (!tmp3) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("Object.keys called on a non-object");
          throw typeError;
        }
      }
    }
    const items = [];
    const tmp9 = closure_4 && "[object Function]" === callResult;
    if (tmp4) {
      if (obj.length > 0) {
        if (!hasOwnProperty.call(obj, 0)) {
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
            let arr5 = items.push(String(num6));
            num6 = num6 + 1;
            length2 = obj.length;
          } while (num6 < length2);
        }
      }
      if (closure_3) {
        let num7 = 0;
        const tmp17 = ((arg0) => {
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
        if (0 < closure_5.length) {
          do {
            let tmp20 = tmp17 && "constructor" === closure_5[num7] || !hasOwnProperty.call(obj, closure_5[num7]);
            if (!tmp20) {
              let arr6 = items.push(closure_5[num7]);
            }
            num7 = num7 + 1;
          } while (num7 < closure_5.length);
        }
      }
      return items;
    }
    for (const key10045 in obj) {
      let tmp12 = tmp9 && "prototype" === key10045 || !hasOwnProperty.call(obj, key10045);
      if (tmp12) {
        continue;
      } else {
        let _String2 = String;
        let arr7 = items.push(String(key10045));
        continue;
      }
      continue;
    }
  };
}

export default keys;