// === Module 4811: useAlertStore ===

// Module 4811 (useAlertStore)
import markAccessibilityFocusDefault from "markAccessibilityFocus" /* 4814 */;
import closure_3 from "_slicedToArray" /* 32 */;
import keys from "keys" /* 644 */;

const require = arg1;
keys = keys.create(() => ({ alerts: [] }));
const result = require("set").fileFinishedImporting("design/components/AlertModal/native/useAlertStore.native.tsx");

export const useAlertStore = keys;
export const dismissAlerts = function dismissAlerts() {
  const alerts = keys.getState().alerts;
  const items = [[], []];
  const tmp = callback(alerts.reduce((arg0, dismissable) => {
    let num = 0;
    if (false === dismissable.dismissable) {
      num = 1;
    }
    let arr = arg0[num];
    arr = arr.push(dismissable);
    return arg0;
  }, items), 2);
  const first = tmp[0];
  const arr4 = tmp[1];
  first(705).batchUpdates(() => {
    closure_1_4.setState({ alerts: arr4 });
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
    arr4(4812)();
  }
};
export const dismissAlert = function dismissAlert(c6) {
  const _require = c6;
  let alerts = keys.getState().alerts;
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
    _require(705).batchUpdates(() => {
      closure_1_4.setState((alerts) => {
        alerts = alerts.alerts;
        return { alerts: alerts.filter((key) => key.key !== closure_0) };
      });
      const onDismiss = found.onDismiss;
      if (onDismiss != null) {
        onDismiss();
      }
    });
    if (tmp2) {
      found(4812)();
    }
    const obj = _require(705);
  }
};
export const openAlert = function openAlert(DeleteEventAlert, arg1, onCloseCallback, arg3) {
  const _require = DeleteEventAlert;
  importDefault = arg1;
  dependencyMap = onCloseCallback;
  closure_3 = arg3;
  if (0 === keys.getState().alerts.length) {
    markAccessibilityFocusDefault();
  }
  _require(705).batchUpdates(() => {
    closure_1_4.setState((alerts) => {
      alerts = [...alerts.alerts];
      const obj = { key: closure_0, node: closure_1, onDismiss: closure_2, dismissable: null };
      let dismissable;
      if (dismissable != null) {
        dismissable = dismissable.dismissable;
      }
      obj[3] = dismissable;
      alerts[tmp] = obj;
      return { alerts };
    });
  });
};