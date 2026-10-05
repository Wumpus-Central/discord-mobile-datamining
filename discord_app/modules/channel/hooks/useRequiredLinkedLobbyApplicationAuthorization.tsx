// === Module 12079: useRequiredLinkedLobbyApplicationAuthorization ===

// Module 12079 (useRequiredLinkedLobbyApplicationAuthorization)
import react from "react" /* 19 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6602 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6658 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6665 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;

const useEffect = react.useEffect;
const FetchState = AuthorizedAppsStore2.FetchState;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((require_application_authorization) => {
  let application_id;
  let first;
  let stateFromStores;
  let tmp10;
  let tmp14;
  let tmp8;
  let tmp = application_id;
  let tmp2 = stateFromStores;
  let obj = application_id(stateFromStores[4]);
  const cResult = obj.c(34);
  let prop;
  if (require_application_authorization != null) {
    prop = require_application_authorization.require_application_authorization;
  }
  application_id = null;
  if (prop) {
    application_id = require_application_authorization.application_id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthorizedAppsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== application_id) {
    const fn = function c() {
      const obj = { authorizationsFetchState: AuthorizedAppsStore.getFetchState(), applicationOAuth2Token: AuthorizedAppsStore.getNewestTokenForApplication(application_id) };
      return obj;
    };
    cResult[1] = application_id;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(tmp2[5]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== application_id) {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
    cResult[4] = application_id;
    cResult[5] = S;
  } else {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
  }
  const tmpResult4 = tmp(tmp2[5]);
  stateFromStores = tmpResult4.useStateFromStores(tmp10, S);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
    const items2 = [ApplicationStore];
    cResult[6] = items2;
    tmp14 = items2;
  } else {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
  }
  const tmp15 = cResult[7];
  if (stateFromStores != null) {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
  }
  if (tmp15 !== undefined) {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
    if (stateFromStores != null) {
      class S {
        constructor() {
          return ApplicationStore.getApplication(application_id);
        }
      }
    }
    class E {
      constructor() {
        let parentId;
        const getApplication = ApplicationStore.getApplication;
        if (stateFromStores != null) {
          parentId = stateFromStores.parentId;
        }
        return getApplication(parentId);
      }
    }
    cResult[7] = tmp17;
    cResult[8] = E;
  } else {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
  }
  const tmpResult5 = tmp(tmp2[5]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp14, E);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
    const items3 = [];
    class E {
      constructor() {
        let parentId;
        const getApplication = ApplicationStore.getApplication;
        if (stateFromStores != null) {
          parentId = stateFromStores.parentId;
        }
        return getApplication(parentId);
      }
    }
    cResult[9] = items3;
  } else {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
  }
  const tmp20 = cResult[10];
  if (stateFromStores != null) {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
  }
  if (tmp20 !== undefined) {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
    if (stateFromStores != null) {
      class S {
        constructor() {
          return ApplicationStore.getApplication(application_id);
        }
      }
    }
    class E {
      constructor() {
        let parentId;
        const getApplication = ApplicationStore.getApplication;
        if (stateFromStores != null) {
          parentId = stateFromStores.parentId;
        }
        return getApplication(parentId);
      }
    }
    cResult[10] = tmp22;
    cResult[11] = tmp23;
  } else {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
  }
  tmp(tmp2[5]);
  if (cResult[12] === authorizationsFetchState) {
    class S {
      constructor() {
        return ApplicationStore.getApplication(application_id);
      }
    }
    class E {
      constructor() {
        let parentId;
        const getApplication = ApplicationStore.getApplication;
        if (stateFromStores != null) {
          parentId = stateFromStores.parentId;
        }
        return getApplication(parentId);
      }
    }
    if (cResult[16] === stateFromStores) {
      class S {
        constructor() {
          return ApplicationStore.getApplication(application_id);
        }
      }
    }
    class C {
      constructor() {
        const tmp2 = null != application_id && null == stateFromStores && authorizationsFetchState === FetchState.FETCHED;
        if (tmp2) {
          const items = [application_id];
          const obj = ApplicationActionCreatorsDefault;
          const applications = obj.fetchApplications(items, false);
        }
      }
    }
    cResult[16] = stateFromStores;
    cResult[17] = authorizationsFetchState;
    cResult[18] = application_id;
    cResult[19] = C;
  }
  const fn2 = function y() {
    const tmp = null != application_id && authorizationsFetchState === FetchState.NOT_FETCHED;
    if (tmp) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch();
    }
  };
  const items4 = [authorizationsFetchState, application_id];
  cResult[12] = authorizationsFetchState;
  cResult[13] = application_id;
  cResult[14] = fn2;
  cResult[15] = items4;
}) : ((require_application_authorization) => {
  let stateFromStores;
  let tmp17;
  let prop;
  if (require_application_authorization != null) {
    prop = require_application_authorization.require_application_authorization;
  }
  let application_id = null;
  if (prop) {
    application_id = require_application_authorization.application_id;
  }
  let obj = application_id(stateFromStores[5]);
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { authorizationsFetchState: AuthorizedAppsStore.getFetchState(), applicationOAuth2Token: AuthorizedAppsStore.getNewestTokenForApplication(application_id) };
    return obj;
  });
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  const applicationOAuth2Token = stateFromStoresObject.applicationOAuth2Token;
  const items1 = [ApplicationStore];
  const obj2 = application_id(stateFromStores[5]);
  stateFromStores = obj2.useStateFromStores(items1, () => ApplicationStore.getApplication(application_id));
  const items2 = [ApplicationStore];
  const obj3 = application_id(stateFromStores[5]);
  let stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let parentId;
    const getApplication = ApplicationStore.getApplication;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return getApplication(parentId);
  });
  const items3 = [AuthorizedAppsStore];
  const items4 = [authorizationsFetchState, application_id];
  const obj4 = application_id(stateFromStores[5]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => {
    let parentId;
    const getNewestTokenForApplication = AuthorizedAppsStore.getNewestTokenForApplication;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return getNewestTokenForApplication(parentId);
  });
  stateFromStores1(() => {
    const tmp = null != application_id && authorizationsFetchState === FetchState.NOT_FETCHED;
    if (tmp) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch();
    }
  }, items4);
  const items5 = [application_id, applicationOAuth2Token, authorizationsFetchState, stateFromStores];
  stateFromStores1(() => {
    const tmp2 = null != application_id && null == stateFromStores && authorizationsFetchState === FetchState.FETCHED;
    if (tmp2) {
      const items = [application_id];
      const obj = ApplicationActionCreatorsDefault;
      const applications = obj.fetchApplications(items, false);
    }
  }, items5);
  const items6 = [stateFromStores, authorizationsFetchState, stateFromStores1];
  stateFromStores1(() => {
    const tmp2 = null != stateFromStores && null != stateFromStores.parentId && null == stateFromStores1 && authorizationsFetchState === FetchState.FETCHED;
    if (tmp2) {
      const items = [stateFromStores.parentId];
      const obj = ApplicationActionCreatorsDefault;
      const applications = obj.fetchApplications(items, false);
    }
  }, items6);
  let tmp10 = null != stateFromStores;
  if (tmp10) {
    tmp10 = null == stateFromStores.parentId || null != stateFromStores1;
  }
  const tmp13 = null == applicationOAuth2Token && null != stateFromStores && tmp10 && null != stateFromStores1 && null != stateFromStores2;
  let tmp14 = null != application_id;
  if (tmp14) {
    tmp14 = authorizationsFetchState !== FetchState.FETCHED || null == stateFromStores || !tmp10;
  }
  const obj5 = { showLinkedLobbyApplicationLoadingIndicator: tmp14, requiredLinkedLobbyApplication: tmp17, shouldRelaunchLinkedLobbyApplication: tmp13 };
  tmp17 = null;
  if (null == applicationOAuth2Token && null != stateFromStores && tmp10) {
    let tmp18 = stateFromStores;
    if (!tmp13) {
      if (stateFromStores1 == null) {
        stateFromStores1 = stateFromStores;
      }
      tmp18 = stateFromStores1;
    }
    tmp17 = tmp18;
  }
  return obj5;
});
const result = size.fileFinishedImporting("modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx");

export default tmp2;