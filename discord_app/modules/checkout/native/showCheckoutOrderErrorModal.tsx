// === Module 7540: showCheckoutOrderErrorModal ===

// Module 7540 (showCheckoutOrderErrorModal)
import util from "util" /* 1115 */;
import useAlertStore from "useAlertStore" /* 4984 */;
import AlertModal from "AlertModal" /* 4988 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function SyncedLoadingAlertModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  c1 = undefined;
  ({ title, content, confirmText, onCancel } = onConfirm);
  [tmp2, c1] = noop.useState(false);
  let obj = { title, content, actions: null };
  let obj2 = { children: null };
  const tmp = _slicedToArray(noop.useState(false), 2);
  const items = [
    hasOwnProperty(AlertModal.AlertActionButton, {
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
            const obj2 = { value, done: true };
            return obj2;
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
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_0 = tmp3;
                v2(true);
                c3 = 1;
                v2 = 2;
                c4 = 1;
                const obj4 = { value: onConfirm(), done: false };
                return obj4;
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
              const obj = { value, done: true };
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
    }),

  ];
  let obj4 = { variant: "secondary", text: null, onPress: null, loading: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t["ETE/oC"]);
  obj4.onPress = onCancel;
  obj4.loading = tmp2;
  items[1] = hasOwnProperty(AlertModal.AlertActionButton, obj4);
  obj2.children = items;
  obj.actions = React5(timestampProducer, obj2);
  return hasOwnProperty(AlertModal.AlertModal, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/showCheckoutOrderErrorModal.tsx");

export const showRetryConfirmModal = function showRetryConfirmModal(dismissable) {
  ({ key, onCloseCallback } = dismissable);
  const merged = Object.assign(dismissable, Object.assign({ key: 0, onCloseCallback: 0, dismissable: 0 }));
  const merged1 = Object.assign(merged);
  useAlertStore.openAlert(key, hasOwnProperty(SyncedLoadingAlertModal, {}), onCloseCallback, { dismissable: dismissable.dismissable });
};
export const showCheckoutOrderErrorModal = function showCheckoutOrderErrorModal(arg0, c6) {
  closure_0 = arg0;
  dependencyMap = c6;
  return new Promise((arg0) => {
    closure_0 = arg0;
    let obj = { key: "checkout-order-error", title: null, content: null, confirmText: null, onConfirm: null, onCancel: null, dismissable: false };
    const intl = closure_0(1115).intl;
    obj.title = intl.string(closure_0(1115).t.zrhHH3);
    const intl2 = closure_0(1115).intl;
    obj.content = intl2.string(closure_0(1115).t.PjfUXe);
    const intl3 = closure_0(1115).intl;
    obj.confirmText = intl3.string(closure_0(1115).t["7NqTJn"]);
    dependencyMap = asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: tmp2(), done: false };
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
    const merged1 = Object.assign(merged);
    closure_0(4984).openAlert(key, closure_1_5(SyncedLoadingAlertModal, {}), onCloseCallback, { dismissable: obj.dismissable });
  });
};