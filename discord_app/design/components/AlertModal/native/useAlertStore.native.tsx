// discord_app/design/components/AlertModal/native/useAlertStore.native.tsx
import markAccessibilityFocusDefault from "../../../../modules/a11y/native/markAccessibilityFocus.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import keys from "../../../../../_runtime/00644_keys.js";
import { batchUpdates } from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

const require = fn;
keys = keys.create(() => ({ alerts: [] }));
const result = require("obj132").fileFinishedImporting("design/components/AlertModal/native/useAlertStore.native.tsx");

export const useAlertStore = keys;
export const dismissAlerts = function dismissAlerts() {
  const alerts = keys.getState().alerts;
  const items = [[], []];
  const tmp = callback(alerts.reduce((acc, item, index) => {
    let num = 0;
    if (false === item.dismissable) {
      num = 1;
    }
    let arr = acc[num];
    arr = arr.push(item);
    return acc;
  }, items), 2);
  const first = tmp[0];
  first(705).batchUpdates(() => {
    keys.setState({ alerts: arr4 });
    const item = first.forEach((item, index) => {
      const onDismiss = item.onDismiss;
      let onDismissResult;
      if (onDismiss != null) {
        onDismissResult = onDismiss();
      }
      return onDismissResult;
    });
  });
  if (tmp4) {
    arr4(4658)();
  }
  const obj = first(705);
  tmp4 = 0 === tmp[1].length && first.length > 0;
};
export const dismissAlert = function dismissAlert(c6) {
  const _require = c6;
  let alerts = keys.getState().alerts;
  const found = alerts.find((item, index) => item.key === closure_0);
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
    require("../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
      keys.setState((alerts) => {
        alerts = alerts.alerts;
        return { alerts: alerts.filter((item, index) => item.key !== closure_0) };
      });
      const onDismiss = found.onDismiss;
      if (onDismiss != null) {
        onDismiss();
      }
    });
    if (tmp2) {
      found(4658)();
    }
    const obj = batchUpdates;
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
  require("../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    keys.setState((alerts) => {
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