// === Module 10840: useCustomStatusActivityForUser ===

// Module 10840 (useCustomStatusActivityForUser)
import Constants from "Constants" /* 1085 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ActivityTypes = Constants.ActivityTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    cResult[0] = items;
    first = items;
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
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, S);
  const tmpResult3 = require("userSettingToActivity");
  const customStatusActivity = tmpResult3.useCustomStatusActivity();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_2.getId() === closure_0;
      }
    }
    const items1 = [PresenceStore];
    cResult[3] = items1;
    tmp9 = items1;
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
  const tmpResult4 = require("get initialized");
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp11);
  if (stateFromStores) {
    class S {
      constructor() {
        return closure_2.getId() === closure_0;
      }
    }
  }
  return stateFromStores1;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === closure_0);
  const obj2 = require("userSettingToActivity");
  const customStatusActivity = obj2.useCustomStatusActivity();
  const items1 = [PresenceStore];
  const obj3 = require("get initialized");
  let stateFromStores1 = obj3.useStateFromStores(items1, () => PresenceStore.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
});
const result = size.fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default tmp2;