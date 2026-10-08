// discord_app/modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import NotificationCenterItemsTypes from "../../../../notification_center/NotificationCenterItemsTypes.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import NotificationCenterItemsStore from "../../../../notification_center/NotificationCenterItemsStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/notifications/useNotificationsTabBadge.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useNotificationsTabBadge() {
      const cResult = c.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [NotificationCenterItemsStore];
        const fn = function n() {
          return localItems.localItems;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function l(type) {
            let tmp3 = type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
            if (!tmp3) {
              tmp3 =
                type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
            }
            if (!tmp3) {
              tmp3 =
                type.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
            }
            return tmp3;
          };
          cResult[4] = fn2;
          let tmp7 = fn2;
        } else {
          tmp7 = cResult[4];
        }
        const found = stateFromStores.filter(tmp7);
        cResult[2] = stateFromStores;
        cResult[3] = found;
      } else {
        if (cResult[5] === cResult[3].length) {
          if (cResult[6] === tmp10) {
            let tmp11 = cResult[7];
          }
          return tmp11;
        }
        const obj2 = { value: cResult[3].length, showDot: cResult[3].length > 0 };
        cResult[5] = cResult[3].length;
        cResult[6] = cResult[3].length > 0;
        cResult[7] = obj2;
        tmp11 = obj2;
      }
      const tmpResult = initialize;
    }
  : function useNotificationsTabBadge() {
      const items = [NotificationCenterItemsStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => localItems.localItems);
      const items1 = [stateFromStores];
      const memo = noop.useMemo(
        () =>
          stateFromStores.filter((type) => {
            let tmp3 =
              type.type === stateFromStores(dependencyMap[5]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
            if (!tmp3) {
              tmp3 =
                type.type ===
                stateFromStores(dependencyMap[5]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS;
            }
            if (!tmp3) {
              tmp3 =
                type.type ===
                stateFromStores(dependencyMap[5]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
            }
            return tmp3;
          }).length,
        items1,
      );
      return { value: memo, showDot: memo > 0 };
    };
