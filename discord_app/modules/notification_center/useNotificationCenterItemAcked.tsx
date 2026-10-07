// discord_app/modules/notification_center/useNotificationCenterItemAcked.tsx
import NotificationCenterStore from "NotificationCenterStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useNotificationCenterItemAcked.tsx");

export const useNotificationCenterItemAcked = ReactCompilerGating.isReactCompilerEnabled()
  ? (forceUnacked, setting) => {
      _require = forceUnacked;
      let tmp = _require;
      let isRemoteAcked = dependencyMap;
      const cResult = require("c").c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [NotificationCenterStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== forceUnacked) {
        const fn = function s() {
          return NotificationCenterStore.isLocalItemAcked(closure_0);
        };
        cResult[1] = forceUnacked;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = tmp(504).useStateFromStores(first, tmp5);
      forceUnacked = forceUnacked.forceUnacked;
      if (forceUnacked) {
        return !forceUnacked;
      } else {
        if (cResult[3] === setting) {
          if (cResult[4] === stateFromStores) {
          }
        }
        let isRemoteAckedResult = stateFromStores;
        if (!stateFromStores) {
          tmp = tmp(7139);
          isRemoteAcked = tmp.isRemoteAcked;
          isRemoteAckedResult = isRemoteAcked(forceUnacked, setting);
        }
        cResult[3] = setting;
        cResult[4] = stateFromStores;
        cResult[5] = forceUnacked;
        cResult[6] = isRemoteAckedResult;
      }
      const tmpResult = tmp(504);
    }
  : (forceUnacked, setting) => {
      _require = forceUnacked;
      const items = [NotificationCenterStore];
      let stateFromStores = require("initialize").useStateFromStores(items, () =>
        NotificationCenterStore.isLocalItemAcked(closure_0),
      );
      forceUnacked = forceUnacked.forceUnacked;
      let tmp4 = !forceUnacked;
      if (!forceUnacked) {
        if (!stateFromStores) {
          stateFromStores = require("NotificationCenterUtils").isRemoteAcked(forceUnacked, setting);
          const tmpResult = require("NotificationCenterUtils");
        }
        tmp4 = stateFromStores;
      }
      return tmp4;
    };
