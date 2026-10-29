// discord_app/modules/conjure/device_permissions/useConjureDevicePermissionSettings.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import conjureDevicePermissions from "conjureDevicePermissions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/useConjureDevicePermissionSettings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureDevicePermissionSettings(applicationId) {
      _require = applicationId;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureDevicePermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== applicationId) {
        const fn = function n() {
          const obj = {};
          for (const item10010 of tmp) {
            obj[item10010] = ConjureDevicePermissionStore.getDecision(closure_0, item10010);
            continue;
          }
          return obj;
        };
        const items1 = [applicationId];
        cResult[1] = applicationId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = require("c");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp6, tmp7);
      if (cResult[4] !== stateFromStoresObject) {
        const prop = tmp(10911).CONJURE_DEVICE_PERMISSION_NAMES;
        const found = prop.filter(tmp(10911).isConjureDevicePermissionSupported);
        const mapped = found.map((permission) => {
          const obj = { permission, decision: null };
          let tmp = stateFromStoresObject[permission];
          if (tmp == null) {
            tmp = null;
          }
          obj.decision = tmp;
          return obj;
        });
        cResult[4] = stateFromStoresObject;
        cResult[5] = mapped;
        let tmp9 = mapped;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== applicationId) {
        function setAllowed(arg0, allowed) {
          const obj2 = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId, permissions: null, allowed };
          const items = [arg0];
          obj2.permissions = items;
          DispatcherDefault.dispatch(obj2);
        }
        cResult[6] = applicationId;
        cResult[7] = setAllowed;
        let tmp11 = setAllowed;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp11) {
        if (cResult[9] === tmp9) {
          let tmp12 = cResult[10];
        }
        return tmp12;
      }
      let obj2 = { settings: tmp9, setAllowed: tmp11 };
      cResult[8] = tmp11;
      cResult[9] = tmp9;
      cResult[10] = obj2;
      tmp12 = obj2;
      const tmpResult = require("initialize");
    }
  : function useConjureDevicePermissionSettings(applicationId) {
      _require = applicationId;
      let items = [ConjureDevicePermissionStore];
      const items1 = [applicationId];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(
        items,
        () => {
          const obj = {};
          for (const item10010 of tmp) {
            obj[item10010] = ConjureDevicePermissionStore.getDecision(closure_0, item10010);
            continue;
          }
          return obj;
        },
        items1,
      );
      let obj2 = {
        settings: null,
        setAllowed(arg0, allowed) {
          const obj2 = { type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId, permissions: null, allowed };
          const items = [arg0];
          obj2.permissions = items;
          DispatcherDefault.dispatch(obj2);
        },
      };
      const items2 = [stateFromStoresObject];
      obj2.settings = noop.useMemo(() => {
        const prop = conjureDevicePermissions.CONJURE_DEVICE_PERMISSION_NAMES;
        const found = prop.filter(conjureDevicePermissions.isConjureDevicePermissionSupported);
        return found.map((permission) => {
          const obj = { permission, decision: null };
          let tmp = stateFromStoresObject[permission];
          if (tmp == null) {
            tmp = null;
          }
          obj.decision = tmp;
          return obj;
        });
      }, items2);
      return obj2;
    };
