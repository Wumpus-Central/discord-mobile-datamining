// === Module 231: Alert ===

// Module 231 (Alert)
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

let Alert = arg1;
class Alert {
  constructor() {
    tmp = outer1_2(this, Alert);
    return;
  }
}
const items = [
  {
    key: "alert",
    value: function alert(Alert, arg1, items) {
      Alert = arg3;
      const _default = Alert(232).default;
      if (_default) {
        let str = Alert;
        const dependencyMap = _default.getConstants();
        if (!Alert) {
          str = "";
        }
        let str2 = arg1;
        let obj = { title: null, message: null, cancelable: false };
        obj[0] = str;
        if (!arg1) {
          str2 = "";
        }
        obj[1] = str2;
        let cancelable = arg3;
        if (arg3) {
          cancelable = arg3.cancelable;
        }
        if (cancelable) {
          obj.cancelable = arg3.cancelable;
        }
        if (items) {
          let substr = items.slice(0, 3);
        } else {
          substr = [{ text: "OK" }];
        }
        let arr = substr.pop();
        arr = substr.pop();
        const arr1 = substr.pop();
        if (arr1) {
          obj.buttonNeutral = arr1.text || "";
        }
        if (arr) {
          obj.buttonNegative = arr.text || "";
        }
        if (arr) {
          obj.buttonPositive = arr.text || "OK";
        }
        _default.showAlert(obj, (arg0) => console.warn(arg0), (arg0, arg1) => {
          if (arg0 === buttonClicked.buttonClicked) {
            if (arg1 === tmp.buttonNeutral) {
              if (arr1.onPress) {
                obj2.onPress();
              }
              obj2 = arr1;
            } else if (arg1 === tmp.buttonNegative) {
              if (arr.onPress) {
                obj.onPress();
              }
              obj = arr;
            } else {
              let onPress = arg1 === tmp.buttonPositive;
              if (onPress) {
                onPress = arr.onPress;
              }
              if (onPress) {
                arr.onPress();
              }
            }
          } else {
            let onDismiss = arg0 === tmp.dismissed && closure_0;
            if (onDismiss) {
              onDismiss = closure_0.onDismiss;
            }
            if (onDismiss) {
              closure_0.onDismiss();
            }
          }
        });
      }
    }
  },
  {
    key: "prompt",
    value: function prompt(arg0) {

    }
  }
];

export default _createClass(Alert, null, items);