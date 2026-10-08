// discord_app/modules/custom_status/utils/useCustomStatusActivityForUser.tsx
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";

const require = globalThis.__r;

const require = fn;
const ActivityTypes = fn(1085).ActivityTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCustomStatusActivityForUser(arg0) {
      _require = arg0;
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class S {
          constructor() {
            return closure_2.getId() === closure_0;
          }
        }
        cResult[1] = arg0;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return closure_2.getId() === closure_0;
          }
        }
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, S);
      const tmpResult = require("initialize");
      const customStatusActivity = require("userSettingToActivity").useCustomStatusActivity();
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_2.getId() === closure_0;
          }
        }
        const items1 = [PresenceStore];
        cResult[3] = items1;
        const tmp9 = items1;
      } else {
        class S {
          constructor() {
            return closure_2.getId() === closure_0;
          }
        }
      }
      if (cResult[4] !== arg0) {
        class S {
          constructor() {
            return closure_2.getId() === closure_0;
          }
        }
        cResult[4] = arg0;
        cResult[5] = tmp11;
      } else {
        class S {
          constructor() {
            return closure_2.getId() === closure_0;
          }
        }
      }
      const tmpResult3 = require("userSettingToActivity");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp11);
      if (stateFromStores) {
        class S {
          constructor() {
            return closure_2.getId() === closure_0;
          }
        }
      }
      return stateFromStores1;
    }
  : function useCustomStatusActivityForUser(arg0) {
      _require = arg0;
      const items = [AuthenticationStore];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => AuthenticationStore.getId() === closure_0,
      );
      const obj = require("initialize");
      const customStatusActivity = require("userSettingToActivity").useCustomStatusActivity();
      const obj2 = require("userSettingToActivity");
      const items1 = [PresenceStore];
      let stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
        PresenceStore.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS),
      );
      if (stateFromStores) {
        stateFromStores1 = customStatusActivity;
      }
      return stateFromStores1;
    };
