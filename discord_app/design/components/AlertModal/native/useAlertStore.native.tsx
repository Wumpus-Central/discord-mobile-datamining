// discord_app/design/components/AlertModal/native/useAlertStore.native.tsx
import react_nativeDefault from "../../../../modules/a11y/native/markAccessibilityFocus.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import 00570__ from "../../../../../_runtime/metro/00570__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const useAlertStore = module_570.create(() => ({ alerts: [] }));
const result = size.fileFinishedImporting("design/components/AlertModal/native/useAlertStore.native.tsx");

export { useAlertStore };
export const dismissAlerts = function dismissAlerts() {
  let arr4;
  let first;
  let obj;
  const alerts = obj.getState().alerts;
  const items = [[], []];
  [first, arr4] = alerts.reduce((acc, dismissable) => {
    let num = 0;
    if (false === dismissable.dismissable) {
      num = 1;
    }
    const arr = acc[num];
    arr.push(dismissable);
    return acc;
  }, items);
  obj = first(1259);
  obj.batchUpdates(() => {
    const obj = { alerts: arr4 };
    obj.setState(obj);
    const item = first.forEach((onDismiss) => {
      onDismiss = onDismiss.onDismiss;
      let onDismissResult;
      if (onDismiss != null) {
        onDismissResult = onDismiss();
      }
      return onDismissResult;
    });
  });
  const tmp4 = 0 === arr4.length && first.length > 0;
  if (tmp4) {
    arr4(5710)();
  }
};
export const dismissAlert = function dismissAlert(key) {
  let obj;
  _require = key;
  let alerts = obj.getState().alerts;
  const found = alerts.find((key) => key.key === key);
  if (null != found) {
    let tmp2 = 1 === alerts.length;
    if (tmp2) {
      const first = alerts[0];
      key = undefined;
      if (first != null) {
        key = first.key;
      }
      tmp2 = key === key;
    }
    obj = require("react-native");
    obj.batchUpdates(() => {
      let obj;
      obj.setState((alerts) => {
        const obj = { alerts: alerts.filter((key) => key.key !== closure_1_0) };
        alerts = alerts.alerts;
        return obj;
      });
      const onDismiss = found.onDismiss;
      if (onDismiss != null) {
        onDismiss();
      }
    });
    if (tmp2) {
      found(5710)();
    }
  }
};
export const openAlert = function openAlert(DeleteEventAlert, arg1, onCloseCallback, arg3) {
  let closure_1;
  let obj;
  _require = DeleteEventAlert;
  importDefault = arg1;
  dependencyMap = onCloseCallback;
  let closure_3 = arg3;
  if (0 === obj.getState().alerts.length) {
    const tmp = importDefault;
    react_nativeDefault();
  }
  obj = require("react-native");
  obj.batchUpdates(() => {
    let key;
    let node;
    let obj;
    let onDismiss;
    obj.setState((alerts) => {
      alerts = [...alerts.alerts];
      const obj = { key, node, onDismiss, dismissable };
      dismissable = undefined;
      if (dismissable != null) {
        dismissable = dismissable.dismissable;
      }
      alerts[tmp] = obj;
      return { alerts };
    });
  });
};