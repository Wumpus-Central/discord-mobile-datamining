// discord_app/modules/notifications/settings/native/useIsNotifSettingDisabled.tsx
import _modDef2847 from "../../NotificationSettings.messages.js";
import DeclarativeSystemNotifPermissionHelpersDefault from "../DeclarativeSystemNotifPermissionHelpers.android.tsx";
import DeclarativeSystemNotifPermissionAnalytics from "../DeclarativeSystemNotifPermissionAnalytics.tsx";
import DeclarativeSystemNotifPermissionStore from "../DeclarativeSystemNotifPermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/useIsNotifSettingDisabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(8);
      if (cResult[0] !== arg0) {
        const fn = function s() {
          const result = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsOpened(closure_0);
          const openSystemNotifSettings = DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
          if (openSystemNotifSettings != null) {
            const result1 = openSystemNotifSettings(closure_0);
          }
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeclarativeSystemNotifPermissionStore];
        cResult[2] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] !== arg0) {
        class S {
          constructor() {
            return closure_3.isDisabled(closure_0);
          }
        }
        cResult[3] = arg0;
        cResult[4] = S;
      } else {
        class S {
          constructor() {
            return closure_3.isDisabled(closure_0);
          }
        }
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, S);
      let tmp9 = !stateFromStores;
      if (stateFromStores) {
        class S {
          constructor() {
            return closure_3.isDisabled(closure_0);
          }
        }
        tmp9 = null == DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
      }
      if (tmp9) {
        class S {
          constructor() {
            return closure_3.isDisabled(closure_0);
          }
        }
      } else {
        class S {
          constructor() {
            return closure_3.isDisabled(closure_0);
          }
        }
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              return closure_3.isDisabled(closure_0);
            }
          }
          const stringResult = obj3.string(_modDef2847.TVZ0Fm);
          cResult[5] = stringResult;
          const tmp11 = stringResult;
        } else {
          class S {
            constructor() {
              return closure_3.isDisabled(closure_0);
            }
          }
        }
        if (cResult[6] !== tmp4) {
          class S {
            constructor() {
              return closure_3.isDisabled(closure_0);
            }
          }
          tmp15[0] = tmp11;
          tmp15[1] = tmp4;
          cResult[6] = tmp4;
          cResult[7] = tmp15;
        } else {
          class S {
            constructor() {
              return closure_3.isDisabled(closure_0);
            }
          }
        }
      }
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      _require = arg0;
      const items = [DeclarativeSystemNotifPermissionStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        DeclarativeSystemNotifPermissionStore.isDisabled(closure_0),
      );
      let tmp4 = !stateFromStores;
      if (stateFromStores) {
        tmp4 = null == DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
      }
      let tmp7 = !tmp4;
      if (!tmp4) {
        const obj2 = { label: null, onPress: null };
        const intl = require("util").intl;
        obj2.label = intl.string(_modDef2847.TVZ0Fm);
        obj2.onPress = function handleOpenSystem() {
          const result = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsOpened(closure_0);
          const openSystemNotifSettings = DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
          if (openSystemNotifSettings != null) {
            const result1 = openSystemNotifSettings(closure_0);
          }
        };
        tmp7 = obj2;
      }
      return tmp7;
    };
