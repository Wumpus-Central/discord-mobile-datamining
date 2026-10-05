// discord_app/modules/nuf/native/useNotificationPermissionPrompt.tsx
import NotificationUtilsDefault from "../../../utils/native/NotificationUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import LoginRequiredActionStore from "../../auth/LoginRequiredActionStore.tsx";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";
import PushNotificationPermissionStore from "../../../stores/native/PushNotificationPermissionStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let connected;
      let stateFromStores;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = stateFromStores(576);
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GatewayConnectionStore];
        const fn = function l() {
          return connected.isConnected();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
        const fn2 = function p() {
          return stateFromStores1(dependencyMap[8])(LoginRequiredActionStore, UserRequiredActionStore);
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult4 = stateFromStores(504);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === stateFromStores1) {
        let tmp13;
        let tmp14;
        if (cResult[5] === stateFromStores) {
          tmp13 = cResult[6];
          tmp14 = cResult[7];
        }
        const effect = react.useEffect(tmp13, tmp14);
        const tmpResult5 = stateFromStores(16466);
        const guildOpenNudge = tmpResult5.useGuildOpenNudge();
        const tmpResult6 = stateFromStores(16470);
        const postCallDisconnectNudge = tmpResult6.usePostCallDisconnectNudge();
      }
      class N {
        constructor() {
          if (stateFromStores) {
            if (!stateFromStores1) {
              const tmp6 =
                NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
              if (tmp6) {
                const tmp4Result = NotificationUtilsDefault;
                const permission = tmp4Result.requestPermission();
                NotificationUtilsDefault.shouldRequestNotification = false;
              }
            }
          }
        }
      }
      const items2 = [stateFromStores, stateFromStores1];
      cResult[4] = stateFromStores1;
      cResult[5] = stateFromStores;
      cResult[6] = N;
      cResult[7] = items2;
      tmp14 = items2;
      tmp13 = N;
    }
  : () => {
      let connected;
      let stateFromStores;
      const items = [GatewayConnectionStore];
      const obj = stateFromStores(504);
      stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
      const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
      const obj2 = stateFromStores(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () =>
        stateFromStores1(dependencyMap[8])(LoginRequiredActionStore, UserRequiredActionStore),
      );
      const items2 = [stateFromStores, stateFromStores1];
      const effect = react.useEffect(() => {
        if (stateFromStores) {
          if (!stateFromStores1) {
            const tmp6 =
              NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
            if (tmp6) {
              const tmp4Result = NotificationUtilsDefault;
              const permission = tmp4Result.requestPermission();
              NotificationUtilsDefault.shouldRequestNotification = false;
            }
          }
        }
      }, items2);
      const obj3 = stateFromStores(16466);
      const guildOpenNudge = obj3.useGuildOpenNudge();
      const obj4 = stateFromStores(16470);
      const postCallDisconnectNudge = obj4.usePostCallDisconnectNudge();
    };
const result = size.fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default tmp2;
