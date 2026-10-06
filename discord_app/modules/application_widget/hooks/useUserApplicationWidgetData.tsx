// === Module 16623: useUserApplicationWidgetData ===

// Module 16623 (useUserApplicationWidgetData)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7128 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7869 */;
import UserApplicationIdentityStore2 from "UserApplicationIdentityStore" /* 8726 */;
import UserApplicationIdentityActionCreatorsDefault from "UserApplicationIdentityActionCreators" /* 8727 */;
import useApplicationWidgetConfigsDefault from "useApplicationWidgetConfigs" /* 8728 */;
import ApplicationWidgetConfigStore2 from "ApplicationWidgetConfigStore" /* 8729 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import UserProfileStore from "UserProfileStore" /* 7124 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const UserApplicationIdentityStore = UserApplicationIdentityStore2;
const ApplicationWidgetConfigStore = ApplicationWidgetConfigStore2;
let _require, importDefault;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const FetchState = ApplicationWidgetConfigStore2.FetchState;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp10;
  let tmp4;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    let items1;
    if (null != arg0) {
      let items = [arg0];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = arg0;
    cResult[1] = items1;
    tmp4 = items1;
  } else {
    tmp4 = cResult[1];
  }
  useApplicationWidgetConfigsDefault(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ApplicationWidgetConfigStore];
    cResult[2] = items2;
    tmp7 = items2;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn = function u() {
      if (null == closure_0) {
        const items = [false, null];
        return items;
      } else {
        let config = ApplicationWidgetConfigStore.getConfig(closure_0);
        if (config == null) {
          config = null;
        }
        const fetchState = ApplicationWidgetConfigStore.getFetchState(closure_0);
        const items1 = [, ];
        const tmp4 = (fetchState === FetchState.NOT_FETCHED || fetchState === FetchState.FETCHING) && null == config;
        items1[0] = tmp4;
        items1[1] = config;
        return items1;
      }
    };
    const items3 = [arg0];
    cResult[3] = arg0;
    cResult[4] = fn;
    cResult[5] = items3;
    tmp10 = items3;
    tmp9 = fn;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(tmp7, tmp9, tmp10);
}) : ((arg0) => {
  let closure_0;
  let items1;
  _require = arg0;
  const tmp2 = useApplicationWidgetConfigsDefault;
  if (null != arg0) {
    let items = [arg0];
    items1 = items;
  } else {
    items1 = [];
  }
  tmp2(items1);
  const items2 = [ApplicationWidgetConfigStore];
  const items3 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items2, () => {
    if (null == closure_0) {
      const items = [false, null];
      return items;
    } else {
      let config = ApplicationWidgetConfigStore.getConfig(closure_0);
      if (config == null) {
        config = null;
      }
      const fetchState = ApplicationWidgetConfigStore.getFetchState(closure_0);
      const items1 = [, ];
      const tmp4 = (fetchState === FetchState.NOT_FETCHED || fetchState === FetchState.FETCHING) && null == config;
      items1[0] = tmp4;
      items1[1] = config;
      return items1;
    }
  }, items3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(7);
  const obj2 = require("useGetOrFetchApplications");
  const getOrFetchApplication = obj2.useGetOrFetchApplication(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const result = null != closure_0 && ApplicationStore.isFetchingApplication(tmp);
      return result;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8) && null == getOrFetchApplication;
  let tmp11 = getOrFetchApplication;
  if (getOrFetchApplication == null) {
    tmp11 = null;
  }
  if (cResult[4] === stateFromStores) {
    let tmp12;
    if (cResult[5] === tmp11) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const items2 = [stateFromStores, tmp11];
  cResult[4] = stateFromStores;
  cResult[5] = tmp11;
  cResult[6] = items2;
  tmp12 = items2;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const obj = require("useGetOrFetchApplications");
  let getOrFetchApplication = obj.useGetOrFetchApplication(arg0);
  const items = [ApplicationStore];
  const items1 = [arg0];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const result = null != closure_0 && ApplicationStore.isFetchingApplication(tmp);
    return result;
  }, items1) && null == getOrFetchApplication;
  const items2 = [stateFromStores, ];
  if (getOrFetchApplication == null) {
    getOrFetchApplication = null;
  }
  items2[1] = getOrFetchApplication;
  return items2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  let stateFromStores;
  let tmp6;
  let tmp7;
  _require = arg0;
  importDefault = arg1;
  let tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserApplicationIdentityStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const tmp2 = null != closure_0 && UserApplicationIdentityStore.getFetchState(tmp) === FetchState.NOT_FETCHED;
      return tmp2;
    };
    let items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[9]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === stateFromStores) {
    let tmp9;
    let tmp10;
    let tmp13;
    if (cResult[5] === arg0) {
      tmp9 = cResult[6];
      tmp10 = cResult[7];
    }
    const effect = react.useEffect(tmp9, tmp10);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserApplicationIdentityStore];
      cResult[8] = items2;
      tmp13 = items2;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === arg1) {
      let tmp16;
      let tmp15;
      if (cResult[10] === arg0) {
        tmp16 = cResult[12];
        tmp15 = cResult[11];
      }
      const tmpResult2 = tmp(tmp2[9]);
      return tmpResult2.useStateFromStoresArray(tmp13, tmp15, tmp16);
    }
    class E {
      constructor() {
        if (null != closure_0) {
          if (null != closure_1) {
            let userIdentityByApplication = UserApplicationIdentityStore.getUserIdentityByApplication(closure_0, tmp2);
            if (userIdentityByApplication == null) {
              userIdentityByApplication = null;
            }
            const items = [(UserApplicationIdentityStore.isFetchingUser(closure_0) || UserApplicationIdentityStore.getFetchState(closure_0) === FetchState.NOT_FETCHED) && null == userIdentityByApplication, userIdentityByApplication];
            const isFetchingUserResult = (UserApplicationIdentityStore.isFetchingUser(closure_0) || UserApplicationIdentityStore.getFetchState(closure_0) === FetchState.NOT_FETCHED) && null == userIdentityByApplication;
            return items;
          }
        }
        const items1 = [false, null];
        return items1;
      }
    }
    const items3 = [arg0, arg1];
    cResult[9] = arg1;
    cResult[10] = arg0;
    cResult[11] = E;
    cResult[12] = items3;
    tmp16 = items3;
    class F {
      constructor() {
        const tmp = stateFromStores && null != closure_0;
        if (tmp) {
          const obj = UserApplicationIdentityActionCreatorsDefault;
          const userApplicationIdentitiesWithProfiles = obj.fetchUserApplicationIdentitiesWithProfiles(closure_0);
        }
      }
    }
  }
  class F {
    constructor() {
      const tmp = stateFromStores && null != closure_0;
      if (tmp) {
        const obj = UserApplicationIdentityActionCreatorsDefault;
        const userApplicationIdentitiesWithProfiles = obj.fetchUserApplicationIdentitiesWithProfiles(closure_0);
      }
    }
  }
  const items4 = [stateFromStores, arg0];
  cResult[4] = stateFromStores;
  cResult[5] = arg0;
  cResult[6] = F;
  cResult[7] = items4;
  tmp10 = items4;
  tmp9 = F;
}) : ((arg0, arg1) => {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  let items = [UserApplicationIdentityStore];
  let items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != closure_0 && UserApplicationIdentityStore.getFetchState(tmp) === FetchState.NOT_FETCHED;
    return tmp2;
  }, items1);
  const items2 = [stateFromStores, arg0];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && null != closure_0;
    if (tmp) {
      const obj = UserApplicationIdentityActionCreatorsDefault;
      const userApplicationIdentitiesWithProfiles = obj.fetchUserApplicationIdentitiesWithProfiles(closure_0);
    }
  }, items2);
  const items3 = [UserApplicationIdentityStore];
  const items4 = [arg0, arg1];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items3, () => {
    if (null != closure_0) {
      if (null != closure_1) {
        let userIdentityByApplication = UserApplicationIdentityStore.getUserIdentityByApplication(closure_0, tmp2);
        if (userIdentityByApplication == null) {
          userIdentityByApplication = null;
        }
        const items = [(UserApplicationIdentityStore.isFetchingUser(closure_0) || UserApplicationIdentityStore.getFetchState(closure_0) === FetchState.NOT_FETCHED) && null == userIdentityByApplication, userIdentityByApplication];
        const isFetchingUserResult = (UserApplicationIdentityStore.isFetchingUser(closure_0) || UserApplicationIdentityStore.getFetchState(closure_0) === FetchState.NOT_FETCHED) && null == userIdentityByApplication;
        return items;
      }
    }
    const items1 = [false, null];
    return items1;
  }, items4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let items1;
      if (null != closure_0) {
        const items = [UserProfileStore.isFetchingProfile(closure_0), ];
        let userProfile = UserProfileStore.getUserProfile(closure_0);
        if (userProfile == null) {
          userProfile = null;
        }
        items[1] = userProfile;
        items1 = items;
      } else {
        items1 = [false, null];
      }
      return items1;
    };
    let items1 = [arg0];
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
  [tmp9, tmp10] = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
  let closure_1 = tmp11;
  _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp6, tmp7), 2);
  if (cResult[4] === (null != arg0 && !tmp9 && null == tmp10)) {
    let tmp12;
    let tmp13;
    if (cResult[5] === arg0) {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    const effect = react.useEffect(tmp12, tmp13);
    if (!tmp9) {
      tmp9 = tmp11;
    }
    if (tmp9) {
      tmp9 = null == tmp10;
    }
    if (cResult[8] === tmp9) {
      let tmp16;
      if (cResult[9] === tmp10) {
        tmp16 = cResult[10];
      }
      return tmp16;
    }
    const items2 = [tmp9, tmp10];
    cResult[8] = tmp9;
    cResult[9] = tmp10;
    cResult[10] = items2;
    tmp16 = items2;
  }
  const fn2 = function f() {
    const tmp = closure_1 && null != closure_0;
    if (tmp) {
      maybeFetchUserProfileDefault(closure_0);
    }
  };
  const items3 = [null != arg0 && !tmp9 && null == tmp10, arg0];
  cResult[4] = null != arg0 && !tmp9 && null == tmp10;
  cResult[5] = arg0;
  cResult[6] = fn2;
  cResult[7] = items3;
  tmp13 = items3;
  tmp12 = fn2;
}) : ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  let items = [UserProfileStore];
  let items1 = [arg0];
  const obj = require("get initialized");
  let tmp = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    let items1;
    if (null != closure_0) {
      const items = [UserProfileStore.isFetchingProfile(closure_0), ];
      let userProfile = UserProfileStore.getUserProfile(closure_0);
      if (userProfile == null) {
        userProfile = null;
      }
      items[1] = userProfile;
      items1 = items;
    } else {
      items1 = [false, null];
    }
    return items1;
  }, items1), 2);
  [tmp2, tmp3] = tmp;
  let closure_1 = tmp4;
  const items2 = [null != arg0 && !tmp2 && null == tmp3, arg0];
  const effect = react.useEffect(() => {
    const tmp = closure_1 && null != closure_0;
    if (tmp) {
      maybeFetchUserProfileDefault(closure_0);
    }
  }, items2);
  if (!tmp2) {
    tmp2 = tmp4;
  }
  if (tmp2) {
    tmp2 = null == tmp3;
  }
  const items3 = [tmp2, tmp3];
  return items3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let tmp21;
  let tmp22;
  let tmp4;
  let tmp5;
  _require = arg1;
  let obj = require("react");
  const cResult = obj.c(9);
  [tmp4, tmp5] = closure_11(arg1);
  let tmp7 = null;
  _slicedToArray(closure_11(arg1), 2);
  if (null != tmp5) {
    tmp7 = arg1;
  }
  const tmp2Result = _slicedToArray(closure_12(tmp7), 2);
  let tmp11 = null != tmp5;
  const first = tmp2Result[0];
  if (tmp11) {
    tmp11 = null != tmp10;
  }
  let tmp13 = null;
  if (tmp11) {
    tmp13 = arg0;
  }
  let tmp14 = null;
  if (tmp11) {
    tmp14 = arg1;
  }
  const tmp2Result3 = _slicedToArray(closure_13(tmp13, tmp14), 2);
  let tmp19 = null;
  const first1 = tmp2Result3[0];
  if (tmp11) {
    tmp19 = arg0;
  }
  [tmp21, tmp22] = closure_14(tmp19);
  _slicedToArray(closure_14(tmp19), 2);
  if (!tmp4) {
    tmp4 = first;
  }
  if (!tmp4) {
    tmp4 = first1;
  }
  if (!tmp4) {
    tmp4 = tmp21;
  }
  if (cResult[0] === arg1) {
    let tmp25;
    let widgets;
    const tmp23 = cResult[1];
    if (tmp22 != null) {
      widgets = tmp22.widgets;
    }
    if (tmp23 === widgets) {
      tmp25 = cResult[2];
    }
    if (cResult[3] === tmp2Result[1]) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === tmp2Result3[1]) {
          if (cResult[6] === tmp4) {
            let tmp28;
            if (cResult[7] === tmp25) {
              tmp28 = cResult[8];
            }
            return tmp28;
          }
        }
      }
    }
    const obj2 = { isLoading: tmp4, application: tmp2Result[1], applicationWidgetConfig: tmp5, userApplicationIdentity: tmp2Result3[1], profileApplicationWidget: tmp25 };
    cResult[3] = tmp2Result[1];
    cResult[4] = tmp5;
    cResult[5] = tmp2Result3[1];
    cResult[6] = tmp4;
    cResult[7] = tmp25;
    cResult[8] = obj2;
    tmp28 = obj2;
  }
  let found;
  if (tmp22 != null) {
    const widgets1 = tmp22.widgets;
    if (widgets1 != null) {
      found = widgets1.find((item) => {
        const obj = UserProfileApplicationWidgetTypes;
        return obj.isApplicationWidgetWithId(item, closure_0);
      });
    }
  }
  if (found == null) {
    found = null;
  }
  cResult[0] = arg1;
  let widgets2;
  if (tmp22 != null) {
    widgets2 = tmp22.widgets;
  }
  cResult[1] = widgets2;
  cResult[2] = found;
  tmp25 = found;
}) : ((arg0, arg1) => {
  let applicationWidgetConfig;
  let tmp3;
  let tmp4;
  let userApplicationIdentity;
  let closure_0 = arg1;
  [tmp3, tmp4] = closure_11(arg1);
  importDefault = tmp4;
  let tmp6 = null;
  _slicedToArray(closure_11(arg1), 2);
  if (null != tmp4) {
    tmp6 = arg1;
  }
  const tmpResult = _slicedToArray(closure_12(tmp6), 2);
  const application = tmp9;
  let tmp10 = null != tmp4;
  const first = tmpResult[0];
  if (tmp10) {
    tmp10 = null != tmp9;
  }
  let tmp12 = null;
  if (tmp10) {
    tmp12 = arg0;
  }
  let tmp13 = null;
  if (tmp10) {
    tmp13 = arg1;
  }
  const tmpResult3 = _slicedToArray(closure_13(tmp12, tmp13), 2);
  _slicedToArray = tmp16;
  let tmp18 = null;
  const first1 = tmpResult3[0];
  if (tmp10) {
    tmp18 = arg0;
  }
  const tmpResult4 = _slicedToArray(closure_14(tmp18), 2);
  react = tmp21;
  let first2 = tmpResult4[0];
  if (!tmp3) {
    tmp3 = first;
  }
  if (!tmp3) {
    tmp3 = first1;
  }
  if (!tmp3) {
    tmp3 = first2;
  }
  first2 = tmp3;
  const items = [tmpResult[1], arg1, tmp4, tmpResult3[1], tmp3, tmpResult4[1]];
  return react.useMemo(() => {
    let found;
    if (widgets != null) {
      widgets = widgets.widgets;
      if (widgets != null) {
        found = widgets.find((item) => {
          const obj = closure_0(application[13]);
          return obj.isApplicationWidgetWithId(item, closure_1_0);
        });
      }
    }
    if (found == null) {
      found = null;
    }
    let obj = { isLoading: first2, application, applicationWidgetConfig: importDefault, userApplicationIdentity, profileApplicationWidget: found };
    return obj;
  }, items);
});
let result = size.fileFinishedImporting("modules/application_widget/hooks/useUserApplicationWidgetData.tsx");

export default tmp2;