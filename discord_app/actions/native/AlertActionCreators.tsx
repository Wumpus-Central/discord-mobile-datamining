// === Module 4905: actions/AlertActionCreators ===

// Module 4905 (actions/AlertActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = null;
let c7 = 0;
const size = fn(2);
const result = size.fileFinishedImporting("actions/native/AlertActionCreators.tsx");

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
        let obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
      obj = { type: "ALERT_OPEN", alert, isDismissable: flag2 };
      DispatcherDefault.dispatch(obj);
    });
  },
  close() {
    if (null != c6) {
      c6 = null;
      useAlertStore.dismissAlert(tmp);
    }
    DispatcherDefault.dispatch({ type: "ALERT_CLOSE" });
  },
  show(hideActionSheet) {
    let flag = hideActionSheet.hideActionSheet;
    if (flag === undefined) {
      flag = true;
    }
    ({ isDismissable, confirmText } = hideActionSheet);
    if (confirmText === undefined) {
      const intl = confirmText(1114).intl;
      confirmText = intl.string(confirmText(1114).t.BddRzS);
    }
    let merged = Object.assign(hideActionSheet, Object.assign({ hideActionSheet: 0, isDismissable: 0, confirmText: 0 }));
    dependencyMap = undefined;
    c3 = undefined;
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
        let obj3 = merged(4527);
        obj3.hideActionSheet();
      }
      if (null != c6) {
        let obj4 = confirmText(4906);
        obj4.dismissAlert(c6);
      }
      merged(573).dispatch({ type: "ALERT_CLOSE" });
      closure_7 = tmp27 + 1;
      const text = `legacy-alert-${tmp27}`;
      dependencyMap = text;
      c6 = text;
      ({ cancelText, onConfirm: c3, onCancel: c4 } = merged);
      c5 = false;
      ({ title, body: body2, children, confirmColor } = merged);
      const obj7 = confirmText(4906);
      obj = { title, content: body2, extraContent: children, actions: null };
      obj = { variant: null, text: null, onPress: null };
      const obj6 = merged(573);
      const tmp29 = confirmText;
      const tmp31 = c5;
      const tmp32 = c4;
      obj.variant = confirmText(4994).getAlertButtonVariant(confirmColor);
      obj.text = confirmText;
      obj.onPress = function onPress() {
        c5 = true;
        if (c3 != null) {
          tmp();
        }
      };
      const items = [c3(confirmText(4910).AlertActionButton, obj), ];
      let tmp30Result = null;
      if (null != cancelText) {
        let obj1 = {
          variant: "secondary",
          text: cancelText,
          onPress() {
                c5 = true;
                if (c4 != null) {
                  tmp();
                }
              }
        };
        tmp30Result = tmp30(tmp29(4910).AlertActionButton, obj1);
      }
      const obj2 = { children: null };
      items[1] = tmp30Result;
      obj2.children = items;
      obj.actions = tmp31(tmp32, obj2);
      obj3 = { dismissable: true === isDismissable };
      obj7.openAlert(text, c3(confirmText(4910).AlertModal, obj), () => {
        if (!c5) {
          if (c4 != null) {
            tmp();
          }
        }
        if (c6 === c2) {
          c6 = null;
        }
      }, obj3);
      const obj10 = confirmText(4994);
    } else {
      if (null != c6) {
        obj1 = confirmText(4906);
        obj1.dismissAlert(c6);
        c6 = null;
      }
      const self = this;
      obj4 = {
        importer() {
            return asyncRequireImpl(4994, dependencyMap.paths).then((result) => {
              closure_0 = result.default;
              return (arg0) => {
                const obj = {};
                merged = Object.assign(arg0);
                const merged1 = Object.assign(merged);
                obj.confirmText = confirmText;
                return c3(closure_0, obj);
              };
            });
          },
        hideActionSheet: flag,
        isDismissable
      };
      this.openLazy(obj4);
    }
  },
  confirm(arg0) {
    const self = this;
    closure_0 = arg0;
    return new Promise((arg0) => {
      closure_0 = arg0;
      const obj = {
        onConfirm() {
          closure_0(true);
        },
        cancelText: null,
        onCancel: null
      };
      const intl = util.intl;
      obj.cancelText = intl.string(util.t["ETE/oC"]);
      obj.onCancel = function onCancel() {
        closure_0(false);
      };
      const merged = Object.assign(closure_0);
      self.show(obj);
    });
  }
};