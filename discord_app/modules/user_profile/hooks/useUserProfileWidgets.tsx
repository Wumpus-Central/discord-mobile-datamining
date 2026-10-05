// === Module 12705: useUserProfileWidgets ===

// Module 12705 (useUserProfileWidgets)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import WidgetStore from "WidgetStore" /* 8588 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let pendingWidgets;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const tmp = null != closure_0 && AuthenticationStore.getId() === closure_0;
      return tmp;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [WidgetStore];
    const fn2 = function v() {
      return pendingWidgets.getPendingWidgets();
    };
    cResult[4] = items2;
    cResult[5] = fn2;
    tmp10 = fn2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserProfileStore];
    cResult[6] = items3;
    tmp13 = items3;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== arg0) {
    const fn3 = function y() {
      if (null == closure_0) {
        return [];
      } else {
        const userProfile = UserProfileStore.getUserProfile(tmp);
        let widgets;
        if (userProfile != null) {
          widgets = userProfile.widgets;
        }
        if (widgets == null) {
          widgets = [];
        }
        return widgets;
      }
    };
    const items4 = [arg0];
    cResult[7] = arg0;
    cResult[8] = fn3;
    cResult[9] = items4;
    tmp16 = items4;
    tmp15 = fn3;
  } else {
    tmp15 = cResult[8];
    tmp16 = cResult[9];
  }
  const tmpResult4 = tmp(504);
  const stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp13, tmp15, tmp16);
  let tmp18 = stateFromStoresArray;
  if (stateFromStores) {
    tmp18 = stateFromStoresArray;
    if (null !== stateFromStores1) {
      tmp18 = stateFromStores1;
    }
  }
  return tmp18;
}) : ((arg0) => {
  let closure_0;
  let pendingWidgets;
  _require = arg0;
  const items = [AuthenticationStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = null != closure_0 && AuthenticationStore.getId() === closure_0;
    return tmp;
  }, items1);
  const items2 = [WidgetStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => pendingWidgets.getPendingWidgets());
  const items3 = [UserProfileStore];
  const items4 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStoresArray = obj3.useStateFromStoresArray(items3, () => {
    if (null == closure_0) {
      return [];
    } else {
      const userProfile = UserProfileStore.getUserProfile(tmp);
      let widgets;
      if (userProfile != null) {
        widgets = userProfile.widgets;
      }
      if (widgets == null) {
        widgets = [];
      }
      return widgets;
    }
  }, items4);
  let tmp4 = stateFromStoresArray;
  if (stateFromStores) {
    tmp4 = stateFromStoresArray;
    if (null !== stateFromStores1) {
      tmp4 = stateFromStores1;
    }
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileWidgets.tsx");

export default tmp2;