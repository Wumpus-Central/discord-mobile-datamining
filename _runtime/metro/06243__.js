// === Module 6243: ? ===

// Module 6243
import react_native from "react-native" /* 17 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let c4, c5;

let c2;
let c3;
({ useEffect: c2, useState: c3 } = react);
const AccessibilityInfo = react_native.AccessibilityInfo;

export const useIsScreenReaderEnabled = function useIsScreenReaderEnabled() {
  let closure_0;
  let first;
  [first, closure_0] = closure_3(false);
  const tmp3 = closure_2(() => {
    function checkStatus() {
      return closure_0(...arguments);
    }
    closure_0(function*() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              closure_0 = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: screenReaderEnabled.isScreenReaderEnabled(), done: false };
              return obj4;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const _console = console;
              console.warn("Could not read accessibility info: defaulting to false");
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              closure_0(closure_0);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          let closure_2 = tmp13;
          if (0 === c3) {
            c5 = 3;
            throw tmp13;
          } else {
            c4 = 1;
          }
        }
      }
    });
    const tmp = checkStatus();
    closure_0 = AccessibilityInfo.addEventListener("screenReaderChanged", (event) => {
      closure_0(event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  return first;
};