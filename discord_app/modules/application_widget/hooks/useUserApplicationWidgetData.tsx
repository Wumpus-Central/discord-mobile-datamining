// === Module 16585: useUserApplicationWidgetData ===

// Module 16585 (useUserApplicationWidgetData)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7115 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7858 */;
import UserApplicationIdentityActionCreatorsDefault from "UserApplicationIdentityActionCreators" /* 8692 */;
import useApplicationWidgetConfigsDefault from "useApplicationWidgetConfigs" /* 8693 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import UserApplicationIdentityStore from "UserApplicationIdentityStore" /* 8691 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 8694 */;

const require = globalThis.__r;

require = fn;
fn(8691).FetchState;
const FetchState = fn(8694).FetchState;
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] !== arg0) {
    if (null != arg0) {
      let items = [arg0];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = arg0;
    cResult[1] = items1;
  } else {
    useApplicationWidgetConfigsDefault(cResult[1]);
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ApplicationWidgetConfigStore];
      cResult[2] = items2;
      let tmp9 = items2;
    } else {
      tmp9 = cResult[2];
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
          const items1 = [(fetchState === FetchState.NOT_FETCHED || fetchState === FetchState.FETCHING) && null == config, config];
          return items1;
        }
      };
      const items3 = [arg0];
      cResult[3] = arg0;
      cResult[4] = fn;
      cResult[5] = items3;
      let tmp12 = items3;
      let tmp11 = fn;
    } else {
      tmp11 = cResult[4];
      tmp12 = cResult[5];
    }
    return tmp(504).useStateFromStoresArray(tmp9, tmp11, tmp12);
  }
  const obj = require("c");
  tmp = _require;
}) : ((arg0) => {
  _require = arg0;
  if (null != arg0) {
    let items = [arg0];
    let items1 = items;
  } else {
    items1 = [];
  }
  useApplicationWidgetConfigsDefault(items1);
  const items2 = [ApplicationWidgetConfigStore];
  const items3 = [arg0];
  return require("initialize").useStateFromStoresArray(items2, () => {
    if (null == closure_0) {
      const items = [false, null];
      return items;
    } else {
      let config = ApplicationWidgetConfigStore.getConfig(closure_0);
      if (config == null) {
        config = null;
      }
      const fetchState = ApplicationWidgetConfigStore.getFetchState(closure_0);
      const items1 = [(fetchState === FetchState.NOT_FETCHED || fetchState === FetchState.FETCHING) && null == config, config];
      return items1;
    }
  }, items3);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(7);
  const obj = require("c");
  const tmp = _require;
  const getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let result = null != closure_0;
      if (result) {
        result = ApplicationStore.isFetchingApplication(tmp);
      }
      return result;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj2 = require("useGetOrFetchApplications");
  let stateFromStores = tmp(504).useStateFromStores(first, tmp7, tmp8);
  if (stateFromStores) {
    stateFromStores = null == getOrFetchApplication;
  }
  let tmp11 = getOrFetchApplication;
  if (getOrFetchApplication == null) {
    tmp11 = null;
  }
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp11) {
      let tmp12 = cResult[6];
    }
    return tmp12;
  }
  const items2 = [stateFromStores, tmp11];
  cResult[4] = stateFromStores;
  cResult[5] = tmp11;
  cResult[6] = items2;
  tmp12 = items2;
  const tmpResult = tmp(504);
}) : ((arg0) => {
  _require = arg0;
  let getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(arg0);
  const obj = require("useGetOrFetchApplications");
  const items = [ApplicationStore];
  const items1 = [arg0];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let result = null != closure_0;
    if (result) {
      result = ApplicationStore.isFetchingApplication(tmp);
    }
    return result;
  }, items1);
  if (stateFromStores) {
    stateFromStores = null == getOrFetchApplication;
  }
  const items2 = [stateFromStores, ];
  if (getOrFetchApplication == null) {
    getOrFetchApplication = null;
  }
  items2[1] = getOrFetchApplication;
  return items2;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserApplicationIdentityStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = UserApplicationIdentityStore.getFetchState(tmp) === FetchState.NOT_FETCHED;
      }
      return tmp2;
    };
    let items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === arg0) {
      let tmp9 = cResult[6];
      let tmp10 = cResult[7];
    }
    const effect = noop.useEffect(tmp9, tmp10);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [UserApplicationIdentityStore];
      cResult[8] = items2;
      let tmp13 = items2;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === arg1) {
      if (cResult[10] === arg0) {
        let tmp16 = cResult[12];
        const tmp15 = cResult[11];
      }
      return tmp(tmp2[9]).useStateFromStoresArray(tmp13, tmp15, tmp16);
    }
    class E {
      constructor() {
        tmp = closure_0;
        if (null != closure_0) {
          if (null != closure_1) {
            obj = closure_6;
            userIdentityByApplication = closure_6.getUserIdentityByApplication(tmp, tmp2);
            if (userIdentityByApplication == null) {
              userIdentityByApplication = null;
            }
            isFetchingUserResult = obj.isFetchingUser(tmp);
            if (!isFetchingUserResult) {
              tmp5 = FetchState;
              isFetchingUserResult = obj.getFetchState(tmp) === FetchState.NOT_FETCHED;
            }
            if (isFetchingUserResult) {
              isFetchingUserResult = null == userIdentityByApplication;
            }
            items = [, ];
            items[0] = isFetchingUserResult;
            items[1] = userIdentityByApplication;
            return items;
          }
        }
        items1 = [, ];
        items1[0] = false;
        items1[1] = null;
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
        tmp = closure_2;
        if (closure_2) {
          tmp2 = closure_0;
          tmp3 = null;
          tmp = null != closure_0;
        }
        if (tmp) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj = closure_1(closure_2[11]);
          tmp6 = closure_0;
          userApplicationIdentitiesWithProfiles = obj.fetchUserApplicationIdentitiesWithProfiles(closure_0);
        }
        return;
      }
    }
  }
  class F {
    constructor() {
      tmp = closure_2;
      if (closure_2) {
        tmp2 = closure_0;
        tmp3 = null;
        tmp = null != closure_0;
      }
      if (tmp) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        obj = closure_1(closure_2[11]);
        tmp6 = closure_0;
        userApplicationIdentitiesWithProfiles = obj.fetchUserApplicationIdentitiesWithProfiles(closure_0);
      }
      return;
    }
  }
  const items4 = [stateFromStores, arg0];
  cResult[4] = stateFromStores;
  cResult[5] = arg0;
  cResult[6] = F;
  cResult[7] = items4;
  tmp10 = items4;
  tmp9 = F;
  const tmpResult = require("initialize");
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  let items = [UserApplicationIdentityStore];
  let items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = UserApplicationIdentityStore.getFetchState(tmp) === FetchState.NOT_FETCHED;
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = null != closure_0;
    }
    if (tmp) {
      const userApplicationIdentitiesWithProfiles = UserApplicationIdentityActionCreatorsDefault.fetchUserApplicationIdentitiesWithProfiles(closure_0);
    }
  }, items2);
  let obj = require("initialize");
  const items3 = [UserApplicationIdentityStore];
  const items4 = [arg0, arg1];
  return require("initialize").useStateFromStoresArray(items3, () => {
    if (null != closure_0) {
      if (null != closure_1) {
        let userIdentityByApplication = UserApplicationIdentityStore.getUserIdentityByApplication(closure_0, tmp2);
        if (userIdentityByApplication == null) {
          userIdentityByApplication = null;
        }
        let isFetchingUserResult = UserApplicationIdentityStore.isFetchingUser(closure_0);
        if (!isFetchingUserResult) {
          isFetchingUserResult = UserApplicationIdentityStore.getFetchState(closure_0) === FetchState.NOT_FETCHED;
        }
        if (isFetchingUserResult) {
          isFetchingUserResult = null == userIdentityByApplication;
        }
        const items = [isFetchingUserResult, userIdentityByApplication];
        return items;
      }
    }
    const items1 = [false, null];
    return items1;
  }, items4);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      if (null != closure_0) {
        const items = [UserProfileStore.isFetchingProfile(closure_0), ];
        let userProfile = UserProfileStore.getUserProfile(closure_0);
        if (userProfile == null) {
          userProfile = null;
        }
        items[1] = userProfile;
        let items1 = items;
      } else {
        items1 = [false, null];
      }
      return items1;
    };
    let items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const tmpResult = require("initialize");
  [tmp9, tmp10] = require("initialize").useStateFromStoresArray(first, tmp6, tmp7);
  closure_1 = tmp11;
  if (cResult[4] === (null != arg0 && !tmp9 && null == tmp10)) {
    if (cResult[5] === arg0) {
      let tmp12 = cResult[6];
      let tmp13 = cResult[7];
    }
    const effect = noop.useEffect(tmp12, tmp13);
    if (!tmp9) {
      tmp9 = tmp11;
    }
    if (tmp9) {
      tmp9 = null == tmp10;
    }
    if (cResult[8] === tmp9) {
      if (cResult[9] === tmp10) {
        let tmp16 = cResult[10];
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
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != closure_0;
    }
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
  const tmp8 = _slicedToArray(require("initialize").useStateFromStoresArray(first, tmp6, tmp7), 2);
}) : ((arg0) => {
  _require = arg0;
  let items = [UserProfileStore];
  let items1 = [arg0];
  const obj = require("initialize");
  [tmp2, tmp3] = require("initialize").useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      const items = [UserProfileStore.isFetchingProfile(closure_0), ];
      let userProfile = UserProfileStore.getUserProfile(closure_0);
      if (userProfile == null) {
        userProfile = null;
      }
      items[1] = userProfile;
      let items1 = items;
    } else {
      items1 = [false, null];
    }
    return items1;
  }, items1);
  closure_1 = tmp4;
  const items2 = [null != arg0 && !tmp2 && null == tmp3, arg0];
  const effect = noop.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != closure_0;
    }
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
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_widget/hooks/useUserApplicationWidgetData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg1;
  const cResult = require("c").c(9);
  const obj = require("c");
  [tmp4, tmp5] = closure_11(arg1);
  let tmp7 = null;
  if (null != tmp5) {
    tmp7 = arg1;
  }
  const tmp2Result = _slicedToArray(closure_12(tmp7), 2);
  let tmp10 = null != tmp5;
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
  const tmp2Result3 = _slicedToArray(closure_13(tmp12, tmp13), 2);
  let tmp17 = null;
  if (tmp10) {
    tmp17 = arg0;
  }
  const tmp3 = _slicedToArray(closure_11(arg1), 2);
  [tmp19, tmp20] = closure_14(tmp17);
  if (!first) {
    first = tmp2Result[0];
  }
  if (!first) {
    first = tmp2Result3[0];
  }
  if (!first) {
    first = tmp19;
  }
  if (cResult[0] === arg1) {
    let widgets;
    if (tmp20 != null) {
      widgets = tmp20.widgets;
    }
    if (cResult[1] === widgets) {
      let tmp22 = cResult[2];
    }
    if (cResult[3] === tmp9) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === tmp15) {
          if (cResult[6] === first) {
            if (cResult[7] === tmp22) {
              let tmp25 = cResult[8];
            }
            return tmp25;
          }
        }
      }
    }
    const obj2 = { isLoading: first, application: tmp9, applicationWidgetConfig: tmp5, userApplicationIdentity: tmp15, profileApplicationWidget: tmp22 };
    cResult[3] = tmp9;
    cResult[4] = tmp5;
    cResult[5] = tmp15;
    cResult[6] = first;
    cResult[7] = tmp22;
    cResult[8] = obj2;
    tmp25 = obj2;
  }
  let found;
  if (tmp20 != null) {
    const widgets1 = tmp20.widgets;
    if (widgets1 != null) {
      found = widgets1.find((item) => UserProfileApplicationWidgetTypes.isApplicationWidgetWithId(item, closure_0));
    }
  }
  if (found == null) {
    found = null;
  }
  cResult[0] = arg1;
  let widgets2;
  if (tmp20 != null) {
    widgets2 = tmp20.widgets;
  }
  cResult[1] = widgets2;
  cResult[2] = found;
  tmp22 = found;
  const tmp2Result4 = _slicedToArray(closure_14(tmp17), 2);
}) : ((arg0, arg1) => {
  closure_0 = arg1;
  [tmp3, tmp4] = closure_11(arg1);
  importDefault = tmp4;
  let tmp6 = null;
  if (null != tmp4) {
    tmp6 = arg1;
  }
  const tmpResult = _slicedToArray(closure_12(tmp6), 2);
  const application = tmp8;
  let tmp9 = null != tmp4;
  if (tmp9) {
    tmp9 = null != tmp8;
  }
  let tmp11 = null;
  if (tmp9) {
    tmp11 = arg0;
  }
  let tmp12 = null;
  if (tmp9) {
    tmp12 = arg1;
  }
  const tmpResult3 = _slicedToArray(closure_13(tmp11, tmp12), 2);
  _slicedToArray = tmp14;
  let tmp16 = null;
  if (tmp9) {
    tmp16 = arg0;
  }
  const tmpResult4 = _slicedToArray(closure_14(tmp16), 2);
  noop = tmp18;
  if (!isLoading) {
    isLoading = tmpResult[0];
  }
  if (!isLoading) {
    isLoading = tmpResult3[0];
  }
  if (!isLoading) {
    isLoading = tmpResult4[0];
  }
  const items = [tmpResult[1], arg1, tmp4, tmpResult3[1], isLoading, tmpResult4[1]];
  return noop.useMemo(() => {
    let found;
    if (widgets != null) {
      widgets = widgets.widgets;
      if (widgets != null) {
        found = widgets.find((item) => closure_0(closure_2[13]).isApplicationWidgetWithId(item, closure_1_0));
      }
    }
    if (found == null) {
      found = null;
    }
    return { isLoading, application, applicationWidgetConfig, userApplicationIdentity, profileApplicationWidget: found };
  }, items);
});