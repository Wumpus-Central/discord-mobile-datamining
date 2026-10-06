// === Module 6949: showCheckoutOrderErrorModal ===

// Module 6949 (showCheckoutOrderErrorModal)
import intl4 from "intl" /* 1126 */;
import useAlertStore from "useAlertStore" /* 5716 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2, c4, closure_2;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function SyncedLoadingAlertModal(onConfirm) {
  let c1;
  let confirmText;
  let content;
  let intl;
  let items;
  let obj2;
  let onCancel;
  let title;
  let tmp2;
  onConfirm = onConfirm.onConfirm;
  c1 = undefined;
  ({ title, content, confirmText, onCancel } = onConfirm);
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c1] = tmp;
  let obj = { title, content, actions: metroImportDefault(metroRequire, obj2) };
  obj2 = { children: items };
  const AlertModal = AlertModal2.AlertModal;
  let obj3 = {
    variant: "primary",
    text: confirmText,
    onPress: _asyncToGenerator(async () => {
      let v1;
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp;
              v1(true);
              c3 = 1;
              v1 = 2;
              c4 = 1;
              const obj4 = { value: onConfirm(), done: false };
              return obj4;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_128_1(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_1(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_1(false);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          closure_2 = tmp19;
          if (0 === c3) {
            c4 = 3;
            throw tmp19;
          } else {
            v1 = 1;
          }
        }
      }
    }),
    loading: tmp2
  };
  const AlertActionButton = AlertModal2.AlertActionButton;
  items = [hasOwnProperty(AlertActionButton, obj3), ];
  let obj4 = { variant: "secondary", text: intl.string(intl4.t["ETE/oC"]), onPress: onCancel, loading: tmp2 };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl = intl4.intl;
  items[1] = hasOwnProperty(AlertActionButton2, obj4);
  return hasOwnProperty(AlertModal, obj);
}
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/checkout/native/showCheckoutOrderErrorModal.tsx");

export const showRetryConfirmModal = function showRetryConfirmModal(dismissable) {
  let key;
  let onCloseCallback;
  ({ key, onCloseCallback } = dismissable);
  dismissable = dismissable.dismissable;
  const merged = Object.assign(dismissable, Object.assign({ key: 0, onCloseCallback: 0, dismissable: 0 }));
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged1 = Object.assign(merged);
  const obj2 = { dismissable };
  openAlert(key, hasOwnProperty(SyncedLoadingAlertModal, obj), onCloseCallback, obj2);
};
export const showCheckoutOrderErrorModal = function showCheckoutOrderErrorModal(arg0, c6) {
  let closure_0 = arg0;
  let closure_1 = c6;
  const promise = new Promise((arg0) => {
    let intl;
    let intl2;
    let intl3;
    let key;
    let onCloseCallback;
    closure_0 = arg0;
    let obj = {
      key: "checkout-order-error",
      title: intl.string(closure_0(closure_1[5]).t.zrhHH3),
      content: intl2.string(closure_0(closure_1[5]).t.PjfUXe),
      confirmText: intl3.string(closure_0(closure_1[5]).t["7NqTJn"]),
      onConfirm: function() {
        return closure_1(...arguments);
      },
      onCancel() {
        if (closure_1 != null) {
          tmp();
        }
        closure_0(undefined);
      },
      dismissable: false
    };
    intl = closure_0(closure_1[5]).intl;
    intl2 = closure_0(closure_1[5]).intl;
    intl3 = closure_0(closure_1[5]).intl;
    closure_1 = _asyncToGenerator(async () => {
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              tmp = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: tmp(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp = value;
            closure_129_0(tmp);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    });
    ({ key, onCloseCallback } = obj);
    const dismissable = obj.dismissable;
    const merged = Object.assign(obj, Object.assign({ key: 0, onCloseCallback: 0, dismissable: 0 }));
    let obj2 = {};
    const openAlert = closure_0(closure_1[6]).openAlert;
    closure_0(closure_1[6]);
    const merged1 = Object.assign(merged);
    let obj3 = { dismissable };
    openAlert(key, closure_1_5(SyncedLoadingAlertModal, obj2), onCloseCallback, obj3);
  });
  return promise;
};