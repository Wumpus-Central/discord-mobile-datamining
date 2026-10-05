// discord_app/components_native/common/Notifications.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import InAppNotificationContainerDefault from "../../modules/in_app_notifications/native/InAppNotificationContainer.tsx";
import react from "../../../_runtime/00019_react.js";
import InAppNotificationStore from "../../stores/native/InAppNotificationStore.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentNotification;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [InAppNotificationStore];
        const fn = function c() {
          return currentNotification.getCurrentNotification();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let tmp8 = null;
      if (null != stateFromStores) {
        let tmp9;
        if (cResult[2] !== stateFromStores) {
          const tmp12 = jsx(InAppNotificationContainerDefault, { notification: stateFromStores }, stateFromStores.key);
          cResult[2] = stateFromStores;
          cResult[3] = tmp12;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[3];
        }
        tmp8 = tmp9;
      }
      return tmp8;
    }
  : () => {
      let currentNotification;
      const items = [InAppNotificationStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
      let tmp3 = null;
      if (null != stateFromStores) {
        tmp3 = jsx(InAppNotificationContainerDefault, { notification: stateFromStores }, stateFromStores.key);
      }
      return tmp3;
    };
const result = size.fileFinishedImporting("components_native/common/Notifications.tsx");

export default tmp3;
