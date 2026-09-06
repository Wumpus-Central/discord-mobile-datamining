// === Module 7430: showCheckoutOrderErrorModal ===

// Module 7430 (showCheckoutOrderErrorModal)
import util from "util" /* 1114 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import AlertModal from "AlertModal" /* 4910 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function SyncedLoadingAlertModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  c1 = undefined;
  ({ title, content, confirmText, onCancel } = onConfirm);
  [tmp2, c1] = _slicedToArray(noop.useState(false), 2);
  let obj = { title, content, actions: null };
  obj = { children: null };
  obj = {
    variant: "primary",
    text: confirmText,
    onPress: asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp3;
              v2(true);
              c3 = 1;
              v2 = 2;
              c4 = 1;
              const obj1 = { value: onConfirm(), done: false };
              return obj1;
            }
          } else if (1 === tmp7) {
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
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_1(false);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp22) {
          closure_2 = tmp22;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp22;
          } else {
            v2 = tmp;
          }
        }
      }
    }),
    loading: tmp2
  };
  const items = [hasOwnProperty(AlertModal.AlertActionButton, obj), ];
  let obj1 = { variant: "secondary", text: null, onPress: null, loading: null };
  const intl = util.intl;
  obj1.text = intl.string(util.t["ETE/oC"]);
  obj1.onPress = onCancel;
  obj1.loading = tmp2;
  items[1] = hasOwnProperty(AlertModal.AlertActionButton, obj1);
  obj.children = items;
  obj.actions = React5(timestampProducer, obj);
  return hasOwnProperty(AlertModal.AlertModal, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/showCheckoutOrderErrorModal.tsx");

export const showRetryConfirmModal = function showRetryConfirmModal(dismissable) {
  ({ key, onCloseCallback } = dismissable);
  const merged = Object.assign(dismissable, Object.assign({ key: 0, onCloseCallback: 0, dismissable: 0 }));
  let obj = {};
  const merged1 = Object.assign(merged);
  obj = { dismissable: dismissable.dismissable };
  obj.openAlert(key, hasOwnProperty(SyncedLoadingAlertModal, obj), onCloseCallback, obj);
};
export const showCheckoutOrderErrorModal = function showCheckoutOrderErrorModal(arg0, c6) {
  closure_0 = arg0;
  dependencyMap = c6;
  return new Promise((arg0) => {
    closure_0 = arg0;
    let obj = { key: "checkout-order-error", title: null, content: null, confirmText: null, onConfirm: null, onCancel: null, dismissable: false };
    const intl = closure_0(1114).intl;
    obj.title = intl.string(closure_0(1114).t.zrhHH3);
    const intl2 = closure_0(1114).intl;
    obj.content = intl2.string(closure_0(1114).t.PjfUXe);
    const intl3 = closure_0(1114).intl;
    obj.confirmText = intl3.string(closure_0(1114).t["7NqTJn"]);
    dependencyMap = asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: tmp2(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            closure_129_0(closure_128_0);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    });
    obj.onConfirm = function() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.onCancel = function onCancel() {
      if (closure_1 != null) {
        tmp();
      }
      closure_0(undefined);
    };
    ({ key, onCloseCallback } = obj);
    const merged = Object.assign(obj, Object.assign({ key: 0, onCloseCallback: 0, dismissable: 0 }));
    obj = {};
    const merged1 = Object.assign(merged);
    obj = { dismissable: obj.dismissable };
    closure_0(4906).openAlert(key, closure_1_5(SyncedLoadingAlertModal, obj), onCloseCallback, obj);
  });
};