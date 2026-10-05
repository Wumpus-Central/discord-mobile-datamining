// === Module 231: ? ===

// Module 231
import _createClassDefault from "_createClass" /* 42 */;
import DialogManagerAndroid from "DialogManagerAndroid" /* 232 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let constants;

class Alert {
  constructor() {
    _classCallCheck(this, Alert);
  }
}
const entry = {
  key: "alert",
  value: function alert(Alert, captureScreenshotError, items, arg3) {
    let closure_0 = arg3;
    const _default = DialogManagerAndroid.default;
    if (_default) {
      let substr;
      let str = Alert;
      constants = _default.getConstants();
      if (!Alert) {
        str = "";
      }
      let str2 = captureScreenshotError;
      const obj = { title: str, message: str2, cancelable: false };
      if (!captureScreenshotError) {
        str2 = "";
      }
      const tmp = arg3 && arg3.cancelable;
      if (tmp) {
        obj.cancelable = arg3.cancelable;
      }
      const tmp2 = items;
      if (tmp2) {
        substr = items.slice(0, 3);
      } else {
        substr = [{ text: "OK" }];
      }
      const arr = substr.pop();
      const arr4 = substr.pop();
      const arr5 = substr.pop();
      if (arr5) {
        obj.buttonNeutral = arr5.text || "";
      }
      if (arr4) {
        obj.buttonNegative = arr4.text || "";
      }
      if (arr) {
        obj.buttonPositive = arr.text || "OK";
      }
      _default.showAlert(obj, (arg0) => console.warn(arg0), (arg0, arg1) => {
        if (arg0 === buttonClicked.buttonClicked) {
          if (arg1 === buttonClicked.buttonNeutral) {
            if (arr5.onPress) {
              arr5.onPress();
            }
          } else if (arg1 === buttonClicked.buttonNegative) {
            if (arr4.onPress) {
              arr4.onPress();
            }
          } else {
            const onPress = arg1 === buttonClicked.buttonPositive && arr.onPress;
            if (onPress) {
              arr.onPress();
            }
          }
        } else {
          const onDismiss = arg0 === buttonClicked.dismissed && closure_0 && closure_0.onDismiss;
          if (onDismiss) {
            closure_0.onDismiss();
          }
        }
      });
    }
  }
};
const items = [
  entry,
  {
    key: "prompt",
    value: function prompt(dependencyMap, arg1, arg2) {

    }
  }
];

export default _createClassDefault(Alert, null, items);