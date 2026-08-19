// === Module 231: Alert ===

// Module 231 (Alert)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let Alert = arg1;
class Alert {
  constructor() {
    tmp = closure_2(this, Alert);
    return;
  }
}
const items = [
  {
    key: "alert",
    value: function alert(Alert, captureScreenshotError, items) {
      Alert = arg3;
      const _default = Alert(232).default;
      if (_default) {
        let str = Alert;
        dependencyMap = _default.getConstants();
        if (!Alert) {
          str = "";
        }
        let str2 = captureScreenshotError;
        const obj = { title: null, message: null, cancelable: false };
        obj[0] = str;
        if (!captureScreenshotError) {
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
        substr.pop();
        const arr = substr.pop();
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
            if (arg1 === buttonClicked.buttonNeutral) {
              if (arr1.onPress) {
                arr1.onPress();
              }
            } else if (arg1 === buttonClicked.buttonNegative) {
              if (arr.onPress) {
                arr.onPress();
              }
            } else {
              let onPress = arg1 === buttonClicked.buttonPositive;
              if (onPress) {
                onPress = arr.onPress;
              }
              if (onPress) {
                arr.onPress();
              }
            }
          } else {
            let onDismiss = arg0 === buttonClicked.dismissed && closure_0;
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
    value: function prompt(dependencyMap) {

    }
  }
];

export default _createClassDefault(Alert, null, items);