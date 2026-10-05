// discord_app/actions/native/AlertActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import intl2 from "../../intl/index.native.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import useAlertStore from "../../design/components/AlertModal/native/useAlertStore.native.tsx";
import react from "../../../_runtime/00019_react.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import size from "../../../_runtime/metro/00002__.js";

let dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = null;
let c7 = 0;
let obj = {
  openLazy(hideActionSheet) {
    let flag = hideActionSheet.hideActionSheet;
    const importer = hideActionSheet.importer;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = hideActionSheet.isDismissable;
    if (flag2 === undefined) {
      flag2 = true;
    }
    const importerResult = importer();
    return importerResult.then((alert) => {
      if (flag) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
      const obj2 = DispatcherDefault;
      const obj3 = { type: "ALERT_OPEN", alert, isDismissable: flag2 };
      obj2.dispatch(obj3);
    });
  },
  close() {
    if (null != c6) {
      c6 = null;
      const obj = useAlertStore;
      obj.dismissAlert(tmp);
    }
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "ALERT_CLOSE" });
  },
  show(hideActionSheet) {
    let body;
    let body2;
    let c2;
    let c3;
    let c4;
    let cancelText;
    let children;
    let confirmColor;
    let confirmText2;
    let obj10;
    let obj9;
    let title;
    let tmp32;
    let tmp33;
    let flag = hideActionSheet.hideActionSheet;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = hideActionSheet.isDismissable;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let confirmText = hideActionSheet.confirmText;
    if (confirmText === undefined) {
      const tmp = confirmText;
      const tmp2 = dependencyMap;
      const intl = confirmText(1126).intl;
      confirmText = intl.string(confirmText(1126).t.BddRzS);
    }
    let merged = Object.assign(
      hideActionSheet,
      Object.assign({ hideActionSheet: 0, isDismissable: 0, confirmText: 0 }),
    );
    dependencyMap = undefined;
    c3 = undefined;
    c4 = undefined;
    let c5;
    let obj = { confirmText, isDismissable: flag2 };
    let merged1 = Object.assign(merged);
    ({ body, confirmText: confirmText2 } = obj);
    let tmp5 = null != body && typeof body !== "string";
    if (tmp5) {
      const _Array = Array;
      tmp5 = !Array.isArray(body);
    }
    let tmp7 = null == obj.title || "" === obj.title;
    if (!tmp7) {
      tmp7 = null != confirmText2 && typeof confirmText2 !== "string";
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
        const obj4 = merged(4854);
        obj4.hideActionSheet();
      }
      if (null != c6) {
        const obj5 = confirmText(5709);
        obj5.dismissAlert(c6);
      }
      const obj6 = merged(584);
      obj6.dispatch({ type: "ALERT_CLOSE" });
      let closure_7 = tmp27 + 1;
      const text = `legacy-alert-${tmp27}`;
      dependencyMap = text;
      c6 = text;
      ({ cancelText, onConfirm: c3, onCancel: c4 } = merged);
      c5 = false;
      ({ title, body: body2, children, confirmColor } = merged);
      const openAlert = confirmText(5709).openAlert;
      const tmp30 = confirmText(5709);
      const obj3 = { title, content: body2, extraContent: children, actions: tmp32(tmp33, obj10) };
      const AlertModal = confirmText(5713).AlertModal;
      const obj7 = {
        variant: obj9.getAlertButtonVariant(confirmColor),
        text: confirmText,
        onPress() {
          c5 = true;
          if (c3 != null) {
            tmp();
          }
        },
      };
      const AlertActionButton = confirmText(5713).AlertActionButton;
      obj9 = confirmText(5783);
      const items = [c3(AlertActionButton, obj7)];
      let tmp31Result = null;
      const tmp29 = confirmText;
      tmp32 = c5;
      tmp33 = c4;
      if (null != cancelText) {
        const obj8 = {
          variant: "secondary",
          text: cancelText,
          onPress() {
            c5 = true;
            if (c4 != null) {
              tmp();
            }
          },
        };
        tmp31Result = tmp31(tmp29(5713).AlertActionButton, obj8);
      }
      obj10 = { children: items };
      items[1] = tmp31Result;
      const obj11 = { dismissable: flag2 };
      openAlert(
        text,
        c3(AlertModal, obj3),
        () => {
          if (!c5) {
            if (c4 != null) {
              tmp2();
            }
          }
          if (c6 === c2) {
            c6 = null;
          }
        },
        obj11,
      );
    } else {
      if (null != c6) {
        const obj2 = confirmText(5709);
        obj2.dismissAlert(c6);
        c6 = null;
      }
      const self = this;
      const obj12 = {
        importer() {
          const promise = asyncRequire(5783, dependencyMap.paths);
          return promise.then((result) => {
            let closure_0 = result.default;
            return (arg0) => {
              const obj = { confirmText };
              merged = Object.assign(arg0);
              const merged1 = Object.assign(merged);
              return c3(closure_0, obj);
            };
          });
        },
        hideActionSheet: flag,
        isDismissable: flag2,
      };
      this.openLazy(obj12);
    }
  },
  confirm(arg0) {
    const self = this;
    let closure_0 = arg0;
    const promise = new Promise((arg0) => {
      let intl;
      closure_0 = arg0;
      const show = self.show;
      const obj = {
        onConfirm() {
          closure_0(true);
        },
        cancelText: intl.string(intl2.t["ETE/oC"]),
        onCancel() {
          closure_0(false);
        },
      };
      intl = intl2.intl;
      const merged = Object.assign(closure_0);
      show(obj);
    });
    return promise;
  },
};
const result = size.fileFinishedImporting("actions/native/AlertActionCreators.tsx");

export default obj;
