// === Module 14682: RequestYourDataSetting ===

// Module 14682 (RequestYourDataSetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import react_native2 from "react-native" /* 1259 */;
import _modDef4467 from "module_4467" /* 4467 */;
import _slicedToArray from "_slicedToArray" /* 4498 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6484 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import HarvesterUtils from "HarvesterUtils" /* 14683 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import module_1254 from "module_1254" /* 1254 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let UserSettingsSections;
let hasOwnProperty;
const ActivityIndicator = react_native.ActivityIndicator;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ REQUEST_DATA_LIMIT_DAYS: hasOwnProperty, UserSettingsSections } = Constants);
const jsx = Fragment.jsx;
let closure_7 = module_1254.createWithEqualityFn(() => ({ isRequesting: false, harvestRequest: null }));
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(harvestRequest) {
      return harvestRequest.harvestRequest;
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  const tmp10 = closure_7(tmp8, _slicedToArray.shallow);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function c(isRequesting) {
      return isRequesting.isRequesting;
    };
    cResult[3] = fn3;
    tmp11 = fn3;
  } else {
    tmp11 = cResult[3];
  }
  const tmp9Result = closure_7(tmp11, _slicedToArray.shallow);
  let tmp13 = null == stateFromStores;
  if (!tmp13) {
    if (cResult[4] === tmp10) {
      if (cResult[5] === tmp9Result) {
        let tmp14;
        if (cResult[6] === stateFromStores) {
          tmp14 = cResult[7];
        }
        tmp13 = tmp14;
      }
    }
    let harvestDisabledResult = tmp9Result;
    if (!harvestDisabledResult) {
      const tmpResult2 = HarvesterUtils;
      harvestDisabledResult = tmpResult2.harvestDisabled(tmp10, stateFromStores);
    }
    cResult[4] = tmp10;
    cResult[5] = tmp9Result;
    cResult[6] = stateFromStores;
    cResult[7] = harvestDisabledResult;
    tmp14 = harvestDisabledResult;
  }
  return tmp13;
}) : (() => {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = closure_7((harvestRequest) => harvestRequest.harvestRequest, _slicedToArray.shallow);
  let harvestDisabledResult = closure_7((isRequesting) => isRequesting.isRequesting, _slicedToArray.shallow);
  let tmp6 = null == stateFromStores;
  if (!tmp6) {
    if (!harvestDisabledResult) {
      const tmpResult = HarvesterUtils;
      harvestDisabledResult = tmpResult.harvestDisabled(tmp4, stateFromStores);
    }
    tmp6 = harvestDisabledResult;
  }
  return tmp6;
});
let closure_8 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(harvestRequest) {
      return harvestRequest.harvestRequest;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_7(first, _slicedToArray.shallow);
}) : (() => closure_7((harvestRequest) => harvestRequest.harvestRequest, _slicedToArray.shallow));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isRequesting) {
      return isRequesting.isRequesting;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_7(first, _slicedToArray.shallow);
}) : (() => closure_7((isRequesting) => isRequesting.isRequesting, _slicedToArray.shallow));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react;
  const cResult = obj.c(2);
  const tmp2 = closure_10();
  if (cResult[0] !== tmp2) {
    let tmp4 = null;
    if (tmp2) {
      tmp4 = <ActivityIndicator />;
    }
    cResult[0] = tmp2;
    cResult[1] = tmp4;
    tmp3 = tmp4;
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react;
  const cResult = obj.c(4);
  const tmp4 = closure_9();
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return null;
  } else if (currentUser.isStaff()) {
    let first;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl3.intl;
      const stringResult = intl2.string(intl3.t.ZPQLH2);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    return first;
  } else if (null == tmp4) {
    return null;
  } else {
    let tmp6;
    let tmp5;
    if (cResult[1] !== tmp4.created_at) {
      const _Symbol = Symbol;
      const forResult = Symbol.for("react.early_return_sentinel");
      const obj3 = _modDef4467(tmp4.created_at);
      const addResult = obj3.add(hasOwnProperty, "days");
      let tmp11 = null;
      let formatToPlainStringResult;
      if (!addResult.isBefore(_modDef4467())) {
        const intl = intl3.intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj2 = { date: addResult.format("MMMM Do YYYY") };
        const RNDlV9 = intl3.t.RNDlV9;
        formatToPlainStringResult = formatToPlainString(RNDlV9, obj2);
        tmp11 = forResult;
      }
      cResult[1] = tmp4.created_at;
      cResult[2] = formatToPlainStringResult;
      cResult[3] = tmp11;
      tmp6 = tmp11;
      tmp5 = formatToPlainStringResult;
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
    const intl2 = intl3.intl;
    return intl2.string(intl3.t.ZPQLH2);
  } else if (null == tmp) {
    return null;
  } else {
    const obj3 = _modDef4467(tmp.created_at);
    const addResult = obj3.add(hasOwnProperty, "days");
    let formatToPlainStringResult = null;
    if (!addResult.isBefore(_modDef4467())) {
      const intl = intl3.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { date: addResult.format("MMMM Do YYYY") };
      const RNDlV9 = intl3.t.RNDlV9;
      formatToPlainStringResult = formatToPlainString(RNDlV9, obj);
    }
    return formatToPlainStringResult;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react;
  const cResult = obj.c(2);
  const tmp2 = closure_8();
  let closure_0 = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function t(fn) {
      let flag = !closure_0;
      if (flag) {
        fn();
        flag = true;
      }
      return flag;
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let closure_0 = closure_8();
  return (fn) => {
    let flag = !closure_0;
    if (flag) {
      fn();
      flag = true;
    }
    return flag;
  };
});
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.XAHCgJ);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useTrailing: tmp4,
  useDescription: tmp5,
  useIsDisabled: tmp3,
  usePreNavigationAction: tmp6,
  screen: {
    route: UserSettingsSections.REQUEST_DATA,
    getComponent() {
      return require("RequestDataScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  let state;
  let obj = UserSettingsAccountActionCreators;
  const harvestStatus = obj.getHarvestStatus();
  harvestStatus.then((result) => {
    const body = result;
    let obj = body(closure_2[7]);
    obj.batchUpdates(() => {
      const obj = { isRequesting: false, harvestRequest: body.body };
      state.setState(obj);
    });
  }, () => {
    const obj = react_native2;
    obj.batchUpdates(() => state.setState({ isRequesting: false }));
  });
};
export const useIsHarvestRequestDisabled = tmp3;