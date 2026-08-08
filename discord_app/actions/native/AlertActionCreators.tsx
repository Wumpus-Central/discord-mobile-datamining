// discord_app/actions/native/AlertActionCreators.tsx
import "noop";
import jsxProd from "jsxProd";
import { useAlertStore } from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

let c3;
let c4;
let c5;
const require = arg1;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let c6 = null;
let c7 = 0;
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("actions/native/AlertActionCreators.tsx");

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
        let obj = flag2(outer1_2[2]);
        obj.hideActionSheet();
      }
      obj = { type: "ALERT_OPEN", alert, isDismissable: flag2 };
      flag2(outer1_2[3]).dispatch(obj);
    });
  },
  close() {
    if (null != c6) {
      c6 = null;
      useAlertStore.dismissAlert(tmp);
      const obj = useAlertStore;
    }
    dispatcher.dispatch({ type: "ALERT_CLOSE" });
  },
  show(hideActionSheet) {
    let body;
    let body2;
    let c3;
    let c4;
    let cancelText;
    let children;
    let confirmColor;
    let confirmText;
    let confirmText2;
    let isDismissable;
    let title;
    let flag = hideActionSheet.hideActionSheet;
    if (flag === undefined) {
      flag = true;
    }
    ({ isDismissable, confirmText } = hideActionSheet);
    if (confirmText === undefined) {
      const intl = confirmText(1236).intl;
      confirmText = intl.string(confirmText(1236).t.BddRzS);
    }
    let merged = Object.assign(hideActionSheet, Object.create(null));
    let dependencyMap;
    let callback;
    c4 = undefined;
    let c5;
    let obj = confirmText(1348);
    if (obj.isMobileVisualRefreshEnabled("AlertActionCreators")) {
      obj = {};
      let merged1 = Object.assign(merged);
      obj.confirmText = confirmText;
      obj.isDismissable = isDismissable;
      ({ body, confirmText: confirmText2 } = obj);
      let tmp9 = null != body && typeof body !== "string";
      if (tmp9) {
        const _Array = Array;
        tmp9 = !Array.isArray(body);
      }
      let tmp11 = null == obj.title;
      if (!tmp11) {
        tmp11 = "" === obj.title;
      }
      if (!tmp11) {
        tmp11 = null != confirmText2 && typeof confirmText2 !== "string";
        const tmp12 = null != confirmText2 && typeof confirmText2 !== "string";
      }
      if (!tmp11) {
        tmp11 = tmp9;
      }
      if (!tmp11) {
        tmp11 = null != obj.footer;
      }
      if (!tmp11) {
        tmp11 = null != obj.helpText;
      }
      if (!tmp11) {
        tmp11 = null != obj.renderConfirmButton;
      }
      if (!tmp11) {
        tmp11 = null != obj.renderConfirmIcon;
      }
      if (!tmp11) {
        tmp11 = null != obj.renderConfirmRightIcon;
      }
      if (!tmp11) {
        tmp11 = true === obj.noDefaultButtons;
      }
      if (!tmp11) {
        tmp11 = null != obj.secondaryConfirmText;
      }
      if (!tmp11) {
        tmp11 = null != obj.onConfirmSecondary;
      }
      if (!tmp11) {
        tmp11 = true === obj.isConfirmButtonDisabled;
      }
      if (!tmp11) {
        tmp11 = null != obj.confirming;
      }
      if (!tmp11) {
        tmp11 = null != obj.style;
      }
      if (!tmp11) {
        tmp11 = true === obj.fillCancelText;
      }
      if (!tmp11) {
        tmp11 = false === obj.autoCloseOnConfirm;
      }
      if (!tmp11) {
        tmp11 = null != obj.onClose;
      }
      if (!tmp11) {
        if (flag) {
          let obj4 = merged(4271);
          obj4.hideActionSheet();
        }
        if (null != c6) {
          let tmp4Result = tmp4(4644);
          tmp4Result.dismissAlert(c6);
        }
        merged(709).dispatch({ type: "ALERT_CLOSE" });
        let closure_7 = tmp24 + 1;
        const text = `legacy-alert-${tmp24}`;
        dependencyMap = text;
        c6 = text;
        ({ cancelText, onConfirm: c3, onCancel: c4 } = merged);
        c5 = false;
        ({ title, body: body2, children, confirmColor } = merged);
        tmp4Result = tmp4(4644);
        obj = { title: null, content: null, extraContent: null, actions: null };
        obj[0] = title;
        obj[1] = body2;
        obj[2] = children;
        const obj1 = { variant: null, text: null, onPress: null };
        const obj7 = merged(709);
        const tmp27 = c5;
        const tmp28 = c4;
        obj1[0] = tmp4(4732).getAlertButtonVariant(confirmColor);
        obj1[1] = confirmText;
        obj1[2] = function onPress() {
          let c5 = true;
          if (c3 != null) {
            tmp();
          }
        };
        const items = [callback(tmp4(4647).AlertActionButton, obj1), ];
        let tmp26Result = null;
        if (null != cancelText) {
          const obj2 = { variant: "secondary", text: null, onPress: null };
          obj2[1] = cancelText;
          obj2[2] = function onPress() {
            let c5 = true;
            if (c4 != null) {
              tmp();
            }
          };
          tmp26Result = tmp26(tmp4(4647).AlertActionButton, obj2);
        }
        const obj3 = { children: null };
        items[1] = tmp26Result;
        obj3[0] = items;
        obj[3] = tmp27(tmp28, obj3);
        obj4 = { dismissable: null };
        obj4[0] = true === isDismissable;
        tmp4Result.openAlert(text, callback(tmp4(4647).AlertModal, obj), () => {
          if (!c5) {
            if (c4 != null) {
              tmp();
            }
          }
          if (c6 === c2) {
            c6 = null;
          }
        }, obj4);
        const tmp4Result1 = tmp4(4732);
      }
    }
    if (null != c6) {
      tmp4(4644).dismissAlert(c6);
      c6 = null;
      const tmp4Result2 = tmp4(4644);
    }
    this.openLazy({
      importer() {
        return confirmText(_undefined[10])(_undefined[9], _undefined.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(outer1_1);
            obj.confirmText = closure_0;
            return outer2_3(closure_0, obj);
          };
        });
      },
      hideActionSheet: flag,
      isDismissable
    });
  },
  confirm(arg0) {
    const self = this;
    let closure_0 = arg0;
    return new Promise((arg0) => {
      const callback = arg0;
      const obj = {
        onConfirm() {
          callback(true);
        },
        cancelText: null,
        onCancel: null
      };
      const intl = callback(outer1_2[5]).intl;
      obj[1] = intl.string(callback(outer1_2[5]).t["ETE/oC"]);
      obj[2] = function onCancel() {
        callback(false);
      };
      const merged = Object.assign(callback);
      self.show(obj);
    });
  }
};