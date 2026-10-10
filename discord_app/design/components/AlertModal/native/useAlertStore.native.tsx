// discord_app/design/components/AlertModal/native/useAlertStore.native.tsx
import markAccessibilityFocusDefault from "../../../../modules/a11y/native/markAccessibilityFocus.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";

const require = globalThis.__r;

const require = fn;
const module_570 = fn(570);
const obj3 = module_570.create(() => ({ alerts: [] }));
const size = fn(2);
const result = size.fileFinishedImporting("design/components/AlertModal/native/useAlertStore.native.tsx");

export const useAlertStore = obj3;
export const dismissAlerts = function dismissAlerts() {
  const alerts = obj3.getState().alerts;
  const items = [[], []];
  const tmp = _slicedToArray(
    alerts.reduce((acc, dismissable) => {
      let num = 0;
      if (false === dismissable.dismissable) {
        num = 1;
      }
      acc[num].push(dismissable);
      return acc;
    }, items),
    2,
  );
  const first = tmp[0];
  first(1272).batchUpdates(() => {
    obj3.setState({ alerts: arr4 });
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
    arr4(5302)();
  }
  const obj = first(1272);
  tmp4 = 0 === tmp[1].length && first.length > 0;
};
export const dismissAlert = function dismissAlert(key) {
  _require = key;
  let alerts = obj3.getState().alerts;
  const found = alerts.find((key) => key.key === closure_0);
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
    require("ReactBatchUpdates").batchUpdates(() => {
      obj3.setState((alerts) => {
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
      found(5302)();
    }
    let obj = require("ReactBatchUpdates");
  }
};
export const openAlert = function openAlert(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, arg1, onCloseCallback, arg3) {
  _require = VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
  importDefault = arg1;
  dependencyMap = onCloseCallback;
  closure_3 = arg3;
  if (0 === obj3.getState().alerts.length) {
    markAccessibilityFocusDefault();
  }
  require("ReactBatchUpdates").batchUpdates(() => {
    obj3.setState((alerts) => {
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
