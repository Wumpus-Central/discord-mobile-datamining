// === Module 4906: useAlertStore ===

// Module 4906 (useAlertStore)
import markAccessibilityFocusDefault from "markAccessibilityFocus" /* 4909 */;
import _slicedToArray from "module_32" /* 32 */;

const require = fn;
let module_560 = fn(560);
module_560 = module_560.create(() => ({ alerts: [] }));
const size = fn(2);
const result = size.fileFinishedImporting("design/components/AlertModal/native/useAlertStore.native.tsx");

export const useAlertStore = module_560;
export const dismissAlerts = function dismissAlerts() {
  const alerts = module_560.getState().alerts;
  const items = [[], []];
  const tmp = _slicedToArray(alerts.reduce((acc, dismissable) => {
    let num = 0;
    if (false === dismissable.dismissable) {
      num = 1;
    }
    let arr = acc[num];
    arr = arr.push(dismissable);
    return acc;
  }, items), 2);
  const first = tmp[0];
  const arr4 = tmp[1];
  first(1249).batchUpdates(() => {
    module_560.setState({ alerts: arr4 });
    const item = first.forEach((onDismiss) => {
      onDismiss = onDismiss.onDismiss;
      let onDismissResult;
      if (onDismiss != null) {
        onDismissResult = onDismiss();
      }
      return onDismissResult;
    });
  });
  if (tmp4) {
    arr4(4907)();
  }
};
export const dismissAlert = function dismissAlert(c6) {
  _require = c6;
  let alerts = module_560.getState().alerts;
  const found = alerts.find((key) => key.key === closure_0);
  if (null != found) {
    let tmp2 = 1 === alerts.length;
    if (tmp2) {
      const first = alerts[0];
      let key;
      if (first != null) {
        key = first.key;
      }
      tmp2 = key === c6;
    }
    require("ReactBatchUpdates").batchUpdates(() => {
      module_560.setState((alerts) => {
        const obj = { alerts: null };
        alerts = alerts.alerts;
        obj.alerts = alerts.filter((key) => key.key !== closure_1_0);
        return obj;
      });
      const onDismiss = found.onDismiss;
      if (onDismiss != null) {
        onDismiss();
      }
    });
    if (tmp2) {
      found(4907)();
    }
    let obj = require("ReactBatchUpdates");
  }
};
export const openAlert = function openAlert(DeleteEventAlert, arg1, onCloseCallback, arg3) {
  _require = DeleteEventAlert;
  importDefault = arg1;
  dependencyMap = onCloseCallback;
  closure_3 = arg3;
  if (0 === module_560.getState().alerts.length) {
    markAccessibilityFocusDefault();
  }
  require("ReactBatchUpdates").batchUpdates(() => {
    module_560.setState((alerts) => {
      alerts = [...alerts.alerts];
      const obj = { key, node, onDismiss, dismissable: null };
      dismissable = undefined;
      if (dismissable != null) {
        dismissable = dismissable.dismissable;
      }
      obj.dismissable = dismissable;
      alerts[tmp] = obj;
      return { alerts };
    });
  });
};