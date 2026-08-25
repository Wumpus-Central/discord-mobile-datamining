// === Module 7037: SyncedLoadingAlertModal ===

// Module 7037 (SyncedLoadingAlertModal)
import useAlertStore from "useAlertStore" /* 4746 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function SyncedLoadingAlertModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  dependencyMap = undefined;
  ({ title, content, confirmText, onCancel } = onConfirm);
  [tmp2, c1] = callback2(React.useState(false), 2);
  let obj = { title, content, actions: null };
  obj = { children: null };
  obj = {
    variant: "primary",
    text: confirmText,
    onPress: callback(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              v0(true);
              c3 = 1;
              v0 = 2;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0();
              return obj1;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            v0(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            v0(false);
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 0;
            v0(false);
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp22) {
          closure_2 = tmp22;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp22;
          } else {
            v0 = tmp;
          }
        }
      }
    }),
    loading: tmp2
  };
  const items = [callback3(onConfirm(4750).AlertActionButton, obj), ];
  obj1 = { variant: "secondary", text: null, onPress: null, loading: null };
  const intl = onConfirm(1236).intl;
  obj1[1] = intl.string(onConfirm(1236).t["ETE/oC"]);
  obj1[2] = onCancel;
  obj1[3] = tmp2;
  items[1] = callback3(onConfirm(4750).AlertActionButton, obj1);
  obj[0] = items;
  obj[2] = callback4(closure_6, obj);
  return callback3(onConfirm(4750).AlertModal, obj);
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const result = require("set").fileFinishedImporting("modules/checkout/native/showCheckoutOrderErrorModal.tsx");

export const showRetryConfirmModal = function showRetryConfirmModal(dismissable) {
  ({ key, onCloseCallback } = dismissable);
  const merged = Object.assign(dismissable, Object.create(null));
  let obj = useAlertStore;
  obj = {};
  const merged1 = Object.assign(merged);
  obj = { dismissable: dismissable.dismissable };
  obj.openAlert(key, callback3(SyncedLoadingAlertModal, obj), onCloseCallback, obj);
};
export const showCheckoutOrderErrorModal = function showCheckoutOrderErrorModal(arg0, c5) {
  closure_0 = arg0;
  closure_1 = c5;
  return new Promise((arg0) => {
    let callback = arg0;
    let obj = { key: "checkout-order-error", title: null, content: null, confirmText: null, onConfirm: null, onCancel: null, dismissable: false };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.zrhHH3);
    const intl2 = callback(1236).intl;
    obj[2] = intl2.string(callback(1236).t.PjfUXe);
    const intl3 = callback(1236).intl;
    obj[3] = intl3.string(callback(1236).t["7NqTJn"]);
    dependencyMap = closure_1_2(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp5;
              let callback = tmp2;
              callback = undefined;
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0();
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback = arg1;
            callback(callback);
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    });
    obj[4] = function() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj[5] = function onCancel() {
      if (closure_1 != null) {
        tmp();
      }
      callback(undefined);
    };
    ({ key, onCloseCallback } = obj);
    const merged = Object.assign(obj, Object.create(null));
    obj = {};
    const merged1 = Object.assign(merged);
    obj = { dismissable: obj.dismissable };
    callback(4746).openAlert(key, closure_1_5(closure_1_8, obj), onCloseCallback, obj);
  });
};