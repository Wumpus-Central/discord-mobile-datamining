// discord_app/modules/notifications/settings/native/useIsNotifSettingDisabled.tsx
import _modDef2847 from "../../NotificationSettings.messages.js";
import DeclarativeSystemNotifPermissionHelpersDefault from "../DeclarativeSystemNotifPermissionHelpers.android.tsx";
import DeclarativeSystemNotifPermissionAnalytics from "../DeclarativeSystemNotifPermissionAnalytics.tsx";
import DeclarativeSystemNotifPermissionStore from "../DeclarativeSystemNotifPermissionStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp4;
      let tmp5;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(8);
      const tmp = _require;
      if (cResult[0] !== arg0) {
        const fn = function s() {
          const obj = DeclarativeSystemNotifPermissionAnalytics;
          const result = obj.trackSystemNotifSettingsOpened(closure_0);
          const openSystemNotifSettings = DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
          DeclarativeSystemNotifPermissionHelpersDefault;
          if (openSystemNotifSettings != null) {
            const result1 = openSystemNotifSettings(closure_0);
          }
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DeclarativeSystemNotifPermissionStore];
        cResult[2] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] !== arg0) {
        class S {
          constructor() {
            return DeclarativeSystemNotifPermissionStore.isDisabled(closure_0);
          }
        }
        cResult[3] = arg0;
        cResult[4] = S;
      } else {
        class S {
          constructor() {
            return DeclarativeSystemNotifPermissionStore.isDisabled(closure_0);
          }
        }
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, S);
      let tmp9 = !stateFromStores;
      if (stateFromStores) {
        class S {
          constructor() {
            return DeclarativeSystemNotifPermissionStore.isDisabled(closure_0);
          }
        }
        tmp9 = null == DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
      }
      let tmp11 = !tmp9;
      if (tmp11) {
        let tmp12;
        class S {
          constructor() {
            return DeclarativeSystemNotifPermissionStore.isDisabled(closure_0);
          }
        }
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              return DeclarativeSystemNotifPermissionStore.isDisabled(closure_0);
            }
          }
          const stringResult = obj3.string(_modDef2847.TVZ0Fm);
          cResult[5] = stringResult;
          tmp12 = stringResult;
        } else {
          class S {
            constructor() {
              return DeclarativeSystemNotifPermissionStore.isDisabled(closure_0);
            }
          }
        }
        if (cResult[6] !== tmp4) {
          class S {
            constructor() {
              return DeclarativeSystemNotifPermissionStore.isDisabled(closure_0);
            }
          }
          tmp16[0] = tmp12;
          tmp16[1] = tmp4;
          cResult[6] = tmp4;
          cResult[7] = tmp16;
        } else {
          class S {
            constructor() {
              return DeclarativeSystemNotifPermissionStore.isDisabled(closure_0);
            }
          }
        }
        tmp11 = tmp16;
      }
      return tmp11;
    }
  : (arg0) => {
      let closure_0;
      let intl;
      _require = arg0;
      let obj = require("get initialized");
      const items = [DeclarativeSystemNotifPermissionStore];
      const stateFromStores = obj.useStateFromStores(items, () =>
        DeclarativeSystemNotifPermissionStore.isDisabled(closure_0),
      );
      let tmp4 = !stateFromStores;
      const tmp = _require;
      if (stateFromStores) {
        tmp4 = null == DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
      }
      let tmp7 = !tmp4;
      if (tmp7) {
        const obj2 = {
          label: intl.string(_modDef2847.TVZ0Fm),
          onPress: function handleOpenSystem() {
            const obj = DeclarativeSystemNotifPermissionAnalytics;
            const result = obj.trackSystemNotifSettingsOpened(closure_0);
            const openSystemNotifSettings = DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
            DeclarativeSystemNotifPermissionHelpersDefault;
            if (openSystemNotifSettings != null) {
              const result1 = openSystemNotifSettings(closure_0);
            }
          },
        };
        intl = tmp(1126).intl;
        tmp7 = obj2;
      }
      return tmp7;
    };
let result = size.fileFinishedImporting("modules/notifications/settings/native/useIsNotifSettingDisabled.tsx");

export default tmp2;
