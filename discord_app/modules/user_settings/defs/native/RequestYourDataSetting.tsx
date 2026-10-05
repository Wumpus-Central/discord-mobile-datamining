// === Module 14666: RequestYourDataSetting ===

// Module 14666 (RequestYourDataSetting)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import _modDef4461 from "module_4461" /* 4461 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6477 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import identity from "module_1254" /* 1254 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const initialize = tmp(504);
const _mod4492 = tmp(4492);
const HarvesterUtils = tmp(14667);
const ActivityIndicator = _mod17.ActivityIndicator;
({ REQUEST_DATA_LIMIT_DAYS: hasOwnProperty, UserSettingsSections } = Constants);
const jsx = jsxProd.jsx;
let closure_7 = identity.createWithEqualityFn(() => ({ isRequesting: false, harvestRequest: null }));
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp = require;
  let harvestDisabled = dependencyMap;
  const cResult = c.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(harvestRequest) {
      return harvestRequest.harvestRequest;
    };
    cResult[2] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[2];
  }
  const tmp9 = closure_7(tmp7, _mod4492.shallow);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function c(isRequesting) {
      return isRequesting.isRequesting;
    };
    cResult[3] = fn3;
    let tmp10 = fn3;
  } else {
    tmp10 = cResult[3];
  }
  const tmp8Result = closure_7(tmp10, _mod4492.shallow);
  if (null == stateFromStores) {
    return tmp12;
  } else {
    if (cResult[4] === tmp9) {
      if (cResult[5] === tmp8Result) {
      }
    }
    let harvestDisabledResult = tmp8Result;
    if (!tmp8Result) {
      tmp = HarvesterUtils;
      harvestDisabled = tmp.harvestDisabled;
      harvestDisabledResult = harvestDisabled(tmp9, stateFromStores);
    }
    cResult[4] = tmp9;
    cResult[5] = tmp8Result;
    cResult[6] = stateFromStores;
    cResult[7] = harvestDisabledResult;
  }
  const tmpResult = initialize;
}) : (() => {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let harvestDisabledResult = closure_7((isRequesting) => isRequesting.isRequesting, _mod4492.shallow);
  let tmp6 = null == stateFromStores;
  if (!tmp6) {
    if (!harvestDisabledResult) {
      harvestDisabledResult = HarvesterUtils.harvestDisabled(tmp4, stateFromStores);
      const tmpResult = HarvesterUtils;
    }
    tmp6 = harvestDisabledResult;
  }
  return tmp6;
});
let closure_8 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(harvestRequest) {
      return harvestRequest.harvestRequest;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_7(first, _mod4492.shallow);
}) : (() => closure_7((harvestRequest) => harvestRequest.harvestRequest, _mod4492.shallow));
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isRequesting) {
      return isRequesting.isRequesting;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_7(first, _mod4492.shallow);
}) : (() => closure_7((isRequesting) => isRequesting.isRequesting, _mod4492.shallow));
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_10();
  if (cResult[0] !== tmp2) {
    let tmp4 = null;
    if (tmp2) {
      tmp4 = <ActivityIndicator />;
    }
    cResult[0] = tmp2;
    cResult[1] = tmp4;
    let tmp3 = tmp4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let tmp = null;
  if (closure_10()) {
    tmp = <ActivityIndicator />;
  }
  return tmp;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp4 = closure_9();
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return null;
  } else if (currentUser.isStaff()) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult = intl2.string(util.t.ZPQLH2);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    return first;
  } else if (null == tmp4) {
    return null;
  } else {
    if (cResult[1] !== tmp4.created_at) {
      const _Symbol = Symbol;
      const forResult = Symbol.for("react.early_return_sentinel");
      const addResult = _modDef4461(tmp4.created_at).add(hasOwnProperty, "days");
      let tmp11 = null;
      let formatToPlainStringResult;
      if (!addResult.isBefore(_modDef4461())) {
        const intl = util.intl;
        const obj2 = { date: addResult.format("MMMM Do YYYY") };
        formatToPlainStringResult = intl.formatToPlainString(util.t.RNDlV9, obj2);
        tmp11 = forResult;
      }
      cResult[1] = tmp4.created_at;
      cResult[2] = formatToPlainStringResult;
      cResult[3] = tmp11;
      let tmp6 = tmp11;
      let tmp5 = formatToPlainStringResult;
      const obj3 = _modDef4461(tmp4.created_at);
    } else {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (tmp6 !== Symbol.for("react.early_return_sentinel")) {
      tmp5 = tmp6;
    }
    return tmp5;
  }
}) : (() => {
  const tmp = closure_9();
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return null;
  } else if (currentUser.isStaff()) {
    const intl2 = util.intl;
    return intl2.string(util.t.ZPQLH2);
  } else if (null == tmp) {
    return null;
  } else {
    const addResult = _modDef4461(tmp.created_at).add(hasOwnProperty, "days");
    let formatToPlainStringResult = null;
    if (!addResult.isBefore(_modDef4461())) {
      const intl = util.intl;
      const obj = { date: addResult.format("MMMM Do YYYY") };
      formatToPlainStringResult = intl.formatToPlainString(util.t.RNDlV9, obj);
    }
    return formatToPlainStringResult;
  }
});
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_8();
  closure_0 = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function t(fn) {
      let flag = !closure_0;
      if (!closure_0) {
        fn();
        flag = true;
      }
      return flag;
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  closure_0 = closure_8();
  return (fn) => {
    let flag = !closure_0;
    if (!closure_0) {
      fn();
      flag = true;
    }
    return flag;
  };
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XAHCgJ);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useTrailing: tmp4,
  useDescription: tmp5,
  useIsDisabled: tmp3,
  usePreNavigationAction: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    const tmp2 = closure_8();
    closure_0 = tmp2;
    if (cResult[0] !== tmp2) {
      const fn = function t(fn) {
        let flag = !closure_0;
        if (!closure_0) {
          fn();
          flag = true;
        }
        return flag;
      };
      cResult[0] = tmp2;
      cResult[1] = fn;
      let tmp3 = fn;
    } else {
      tmp3 = cResult[1];
    }
    return tmp3;
  }) : (() => {
    closure_0 = closure_8();
    return (fn) => {
      let flag = !closure_0;
      if (!closure_0) {
        fn();
        flag = true;
      }
      return flag;
    };
  }),
  screen: {
    route: UserSettingsSections.REQUEST_DATA,
    getComponent() {
      return require("RequestDataScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = UserSettingsAccountActionCreators.getHarvestStatus();
  harvestStatus.then((result) => {
    const body = result;
    body(1259).batchUpdates(() => {
      state.setState({ isRequesting: false, harvestRequest: body.body });
    });
  }, () => {
    ReactBatchUpdates.batchUpdates(() => state.setState({ isRequesting: false }));
  });
};
export const useIsHarvestRequestDisabled = tmp3;