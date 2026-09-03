// === Module 4859: ? ===

// Module 4859
import noopAll from "noop" /* 19 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import useAlertStore from "useAlertStore" /* 4860 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let c6 = null;
let c7 = 0;
const result = require("set").fileFinishedImporting("actions/native/AlertActionCreators.tsx");

export default {
  openLazy(hideActionSheet) {
    let flag = hideActionSheet.hideActionSheet;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = hideActionSheet.isDismissable;
    if (flag2 === undefined) {
      flag2 = false;
    }
    return hideActionSheet.importer().then((alert) => {
      if (flag) {
        let obj = flag2(closure_1_2[2]);
        obj.hideActionSheet();
      }
      obj = { type: "ALERT_OPEN", alert, isDismissable: flag2 };
      flag2(closure_1_2[3]).dispatch(obj);
    });
  },
  close() {
    if (null != c6) {
      c6 = null;
      useAlertStore.dismissAlert(tmp);
      const obj = useAlertStore;
    }
    dispatcherDefault.dispatch({ type: "ALERT_CLOSE" });
  },
  show(hideActionSheet) {
    let flag = hideActionSheet.hideActionSheet;
    if (flag === undefined) {
      flag = true;
    }
    ({ isDismissable, confirmText } = hideActionSheet);
    if (confirmText === undefined) {
      const intl = confirmText(1233).intl;
      confirmText = intl.string(confirmText(1233).t.BddRzS);
    }
    let merged = Object.assign(hideActionSheet, Object.create(null));
    dependencyMap = undefined;
    let callback;
    c4 = undefined;
    c5 = undefined;
    let obj = {};
    let merged1 = Object.assign(merged);
    obj.confirmText = confirmText;
    obj.isDismissable = isDismissable;
    ({ body, confirmText: confirmText2 } = obj);
    let tmp5 = null != body && typeof body !== "string";
    if (tmp5) {
      const _Array = Array;
      tmp5 = !Array.isArray(body);
    }
    let tmp7 = null == obj.title;
    if (!tmp7) {
      tmp7 = "" === obj.title;
    }
    if (!tmp7) {
      tmp7 = null != confirmText2 && typeof confirmText2 !== "string";
      const tmp8 = null != confirmText2 && typeof confirmText2 !== "string";
    }
    if (!tmp7) {
      tmp7 = tmp5;
    }
    if (!tmp7) {
      tmp7 = null != obj.footer;
    }
    if (!tmp7) {
      tmp7 = null != obj.helpText;
    }
    if (!tmp7) {
      tmp7 = null != obj.renderConfirmButton;
    }
    if (!tmp7) {
      tmp7 = null != obj.renderConfirmIcon;
    }
    if (!tmp7) {
      tmp7 = null != obj.renderConfirmRightIcon;
    }
    if (!tmp7) {
      tmp7 = true === obj.noDefaultButtons;
    }
    if (!tmp7) {
      tmp7 = null != obj.secondaryConfirmText;
    }
    if (!tmp7) {
      tmp7 = null != obj.onConfirmSecondary;
    }
    if (!tmp7) {
      tmp7 = true === obj.isConfirmButtonDisabled;
    }
    if (!tmp7) {
      tmp7 = null != obj.confirming;
    }
    if (!tmp7) {
      tmp7 = null != obj.style;
    }
    if (!tmp7) {
      tmp7 = true === obj.fillCancelText;
    }
    if (!tmp7) {
      tmp7 = false === obj.autoCloseOnConfirm;
    }
    if (!tmp7) {
      tmp7 = null != obj.onClose;
    }
    if (!tmp7) {
      if (flag) {
        let obj3 = merged(4445);
        obj3.hideActionSheet();
      }
      if (null != c6) {
        let obj4 = confirmText(4860);
        obj4.dismissAlert(c6);
      }
      merged(706).dispatch({ type: "ALERT_CLOSE" });
      closure_7 = tmp27 + 1;
      const text = `legacy-alert-${tmp27}`;
      dependencyMap = text;
      c6 = text;
      ({ cancelText, onConfirm: c3, onCancel: c4 } = merged);
      c5 = false;
      ({ title, body: body2, children, confirmColor } = merged);
      const obj7 = confirmText(4860);
      obj = { title: null, content: null, extraContent: null, actions: null };
      obj[0] = title;
      obj[1] = body2;
      obj[2] = children;
      obj = { variant: null, text: null, onPress: null };
      const obj6 = merged(706);
      const tmp29 = confirmText;
      const tmp31 = c5;
      const tmp32 = c4;
      obj[0] = confirmText(4948).getAlertButtonVariant(confirmColor);
      obj[1] = confirmText;
      obj[2] = function onPress() {
        c5 = true;
        if (c3 != null) {
          tmp();
        }
      };
      const items = [callback(confirmText(4864).AlertActionButton, obj), ];
      let tmp30Result = null;
      if (null != cancelText) {
        obj1 = { variant: "secondary", text: null, onPress: null };
        obj1[1] = cancelText;
        obj1[2] = function onPress() {
          c5 = true;
          if (c4 != null) {
            tmp();
          }
        };
        tmp30Result = tmp30(tmp29(4864).AlertActionButton, obj1);
      }
      const obj2 = { children: null };
      items[1] = tmp30Result;
      obj2[0] = items;
      obj[3] = tmp31(tmp32, obj2);
      obj3 = { dismissable: null };
      obj3[0] = true === isDismissable;
      obj7.openAlert(text, callback(confirmText(4864).AlertModal, obj), () => {
        if (!c5) {
          if (c4 != null) {
            tmp();
          }
        }
        if (c6 === c2) {
          c6 = null;
        }
      }, obj3);
      const obj10 = confirmText(4948);
    } else {
      if (null != c6) {
        obj1 = confirmText(4860);
        obj1.dismissAlert(c6);
        c6 = null;
      }
      const self = this;
      obj4 = { importer: null, hideActionSheet: null, isDismissable: null };
      obj4[0] = function importer() {
        return confirmText(_undefined[9])(_undefined[8], _undefined.paths).then((arg0) => {
          closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            merged = Object.assign(arg0);
            const merged1 = Object.assign(closure_1_1);
            obj.confirmText = closure_0;
            return closure_2_3(closure_0, obj);
          };
        });
      };
      obj4[1] = flag;
      obj4[2] = isDismissable;
      this.openLazy(obj4);
    }
  },
  confirm(arg0) {
    const self = this;
    closure_0 = arg0;
    return new Promise((arg0) => {
      const callback = arg0;
      const obj = {
        onConfirm() {
          callback(true);
        },
        cancelText: null,
        onCancel: null
      };
      const intl = callback(closure_1_2[5]).intl;
      obj[1] = intl.string(callback(closure_1_2[5]).t["ETE/oC"]);
      obj[2] = function onCancel() {
        callback(false);
      };
      const merged = Object.assign(callback);
      self.show(obj);
    });
  }
};