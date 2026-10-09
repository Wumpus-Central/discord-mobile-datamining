// discord_app/modules/nuf/native/useNotificationPermissionPrompt.tsx
import NotificationUtilsDefault from "../../../utils/native/NotificationUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LoginRequiredActionStore from "../../auth/LoginRequiredActionStore.tsx";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";
import PushNotificationPermissionStore from "../../../stores/native/PushNotificationPermissionStore.tsx";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useNotificationPermissionPrompt() {
      const cResult = stateFromStores(576).c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GatewayConnectionStore];
        const fn = function f() {
          return connected.isConnected();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
        class S {
          constructor() {
            return closure_1(closure_1_2[8])(closure_1_4, closure_1_6);
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        let tmp9 = S;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = stateFromStores(504);
      const stateFromStores1 = stateFromStores(504).useStateFromStores(tmp8, tmp9);
      if (cResult[4] === stateFromStores1) {
        if (cResult[5] === stateFromStores) {
          let tmp13 = cResult[6];
          let tmp14 = cResult[7];
        }
        const effect = noop.useEffect(tmp13, tmp14);
        const guildOpenNudge = tmp(16892).useGuildOpenNudge();
        class S {
          constructor() {
            return closure_1(closure_1_2[8])(closure_1_4, closure_1_6);
          }
        }
        const postCallDisconnectNudge = obj5.usePostCallDisconnectNudge();
        const tmpResult4 = tmp(16892);
      }
      class P {
        constructor() {
          if (closure_0) {
            tmp = closure_1;
            if (!closure_1) {
              tmp2 = closure_7;
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_1(closure_2[9]).shouldRequestNotification && !closure_7.promptSeen;
              if (tmp5) {
                tmp3Result = tmp3(tmp4[9]);
                permission = tmp3Result.requestPermission();
                flag = false;
                tmp3(tmp4[9]).shouldRequestNotification = false;
              }
            }
          }
          return;
        }
      }
      const items2 = [stateFromStores, stateFromStores1];
      cResult[4] = stateFromStores1;
      cResult[5] = stateFromStores;
      cResult[6] = P;
      cResult[7] = items2;
      tmp14 = items2;
      tmp13 = P;
      const tmpResult3 = stateFromStores(504);
    }
  : function useNotificationPermissionPrompt() {
      const items = [GatewayConnectionStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => connected.isConnected());
      const obj = stateFromStores(504);
      const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
      const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () =>
        stateFromStores1(dependencyMap[8])(LoginRequiredActionStore, UserRequiredActionStore),
      );
      const items2 = [stateFromStores, stateFromStores1];
      const effect = noop.useEffect(() => {
        if (stateFromStores) {
          if (!stateFromStores1) {
            if (tmp5) {
              const permission = NotificationUtilsDefault.requestPermission();
              NotificationUtilsDefault.shouldRequestNotification = false;
              const tmp3Result = NotificationUtilsDefault;
            }
            tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
          }
        }
      }, items2);
      const obj2 = stateFromStores(504);
      const guildOpenNudge = stateFromStores(16892).useGuildOpenNudge();
      const obj3 = stateFromStores(16892);
      const postCallDisconnectNudge = stateFromStores(16894).usePostCallDisconnectNudge();
    };
