// === Module 12110: useRequiredLinkedLobbyApplicationAuthorization ===

// Module 12110 (useRequiredLinkedLobbyApplicationAuthorization)
import _mod19 from "module_19" /* 19 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6793 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6849 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6856 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;

const useEffect = _mod19.useEffect;
const FetchState = AuthorizedAppsStore2.FetchState;
const result = size.fileFinishedImporting("modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useRequiredLinkedLobbyApplicationAuthorization(require_application_authorization) {
  const cResult = application_id(stateFromStores[4]).c(34);
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
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== application_id) {
    const fn = function c() {
      return { authorizationsFetchState: AuthorizedAppsStore.getFetchState(), applicationOAuth2Token: AuthorizedAppsStore.getNewestTokenForApplication(application_id) };
    };
    cResult[1] = application_id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = application_id(stateFromStores[4]);
  const stateFromStoresObject = application_id(stateFromStores[5]).useStateFromStoresObject(first, tmp8);
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== application_id) {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
    cResult[4] = application_id;
    cResult[5] = F;
  } else {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
  }
  const tmpResult = application_id(stateFromStores[5]);
  stateFromStores = application_id(stateFromStores[5]).useStateFromStores(tmp10, F);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
    const items2 = [ApplicationStore];
    cResult[6] = items2;
    const tmp14 = items2;
  } else {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
  }
  if (stateFromStores != null) {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
  }
  if (cResult[7] !== undefined) {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
    if (stateFromStores != null) {
      class F {
        constructor() {
          return closure_4.getApplication(application_id);
        }
      }
    }
    const fn2 = function f() {
      let parentId;
      if (stateFromStores != null) {
        parentId = stateFromStores.parentId;
      }
      return ApplicationStore.getApplication(parentId);
    };
    cResult[7] = tmp16;
    cResult[8] = fn2;
    const tmp15 = fn2;
  } else {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
  }
  const tmpResult4 = application_id(stateFromStores[5]);
  const stateFromStores1 = application_id(stateFromStores[5]).useStateFromStores(tmp14, tmp15);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
    const items3 = [AuthorizedAppsStore];
    cResult[9] = items3;
  } else {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
  }
  if (stateFromStores != null) {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
  }
  if (cResult[10] !== undefined) {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
    if (stateFromStores != null) {
      class F {
        constructor() {
          return closure_4.getApplication(application_id);
        }
      }
    }
    class T {
      constructor() {
        parentId = undefined;
        tmp = closure_5;
        if (closure_2 != null) {
          parentId = closure_2.parentId;
        }
        return closure_5.getNewestTokenForApplication(parentId);
      }
    }
    cResult[10] = tmp20;
    cResult[11] = T;
  } else {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
  }
  application_id(stateFromStores[5]);
  if (cResult[12] === authorizationsFetchState) {
    class F {
      constructor() {
        return closure_4.getApplication(application_id);
      }
    }
    class T {
      constructor() {
        parentId = undefined;
        tmp = closure_5;
        if (closure_2 != null) {
          parentId = closure_2.parentId;
        }
        return closure_5.getNewestTokenForApplication(parentId);
      }
    }
    if (cResult[16] === stateFromStores) {
      class F {
        constructor() {
          return closure_4.getApplication(application_id);
        }
      }
    }
    const fn4 = function z() {
      let tmp2 = null != application_id;
      if (tmp2) {
        tmp2 = null == stateFromStores;
      }
      if (tmp2) {
        tmp2 = authorizationsFetchState === FetchState.FETCHED;
      }
      if (tmp2) {
        const items = [application_id];
        const applications = ApplicationActionCreatorsDefault.fetchApplications(items, false);
      }
    };
    cResult[16] = stateFromStores;
    cResult[17] = authorizationsFetchState;
    cResult[18] = application_id;
    cResult[19] = fn4;
  }
  const fn3 = function y() {
    let tmp = null != application_id;
    if (tmp) {
      tmp = authorizationsFetchState === FetchState.NOT_FETCHED;
    }
    if (tmp) {
      const response = AuthorizedAppsActionCreatorsDefault.fetch();
    }
  };
  const items4 = [authorizationsFetchState, application_id];
  cResult[12] = authorizationsFetchState;
  cResult[13] = application_id;
  cResult[14] = fn3;
  cResult[15] = items4;
  const tmpResult5 = application_id(stateFromStores[5]);
}) : (function useRequiredLinkedLobbyApplicationAuthorization(require_application_authorization) {
  let prop;
  if (require_application_authorization != null) {
    prop = require_application_authorization.require_application_authorization;
  }
  let application_id = null;
  if (prop) {
    application_id = require_application_authorization.application_id;
  }
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = application_id(stateFromStores[5]).useStateFromStoresObject(items, () => ({ authorizationsFetchState: AuthorizedAppsStore.getFetchState(), applicationOAuth2Token: AuthorizedAppsStore.getNewestTokenForApplication(application_id) }));
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  const applicationOAuth2Token = stateFromStoresObject.applicationOAuth2Token;
  let obj = application_id(stateFromStores[5]);
  const items1 = [ApplicationStore];
  stateFromStores = application_id(stateFromStores[5]).useStateFromStores(items1, () => ApplicationStore.getApplication(application_id));
  const obj2 = application_id(stateFromStores[5]);
  const items2 = [ApplicationStore];
  let stateFromStores1 = application_id(stateFromStores[5]).useStateFromStores(items2, () => {
    let parentId;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return ApplicationStore.getApplication(parentId);
  });
  const obj3 = application_id(stateFromStores[5]);
  const items3 = [AuthorizedAppsStore];
  const items4 = [authorizationsFetchState, application_id];
  const stateFromStores2 = application_id(stateFromStores[5]).useStateFromStores(items3, () => {
    let parentId;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return AuthorizedAppsStore.getNewestTokenForApplication(parentId);
  });
  stateFromStores1(() => {
    let tmp = null != application_id;
    if (tmp) {
      tmp = authorizationsFetchState === FetchState.NOT_FETCHED;
    }
    if (tmp) {
      const response = AuthorizedAppsActionCreatorsDefault.fetch();
    }
  }, items4);
  const items5 = [application_id, applicationOAuth2Token, authorizationsFetchState, stateFromStores];
  stateFromStores1(() => {
    let tmp2 = null != application_id;
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      tmp2 = authorizationsFetchState === FetchState.FETCHED;
    }
    if (tmp2) {
      const items = [application_id];
      const applications = ApplicationActionCreatorsDefault.fetchApplications(items, false);
    }
  }, items5);
  const items6 = [stateFromStores, authorizationsFetchState, stateFromStores1];
  stateFromStores1(() => {
    let tmp2 = null != stateFromStores && null != stateFromStores.parentId;
    if (tmp2) {
      tmp2 = null == stateFromStores1;
    }
    if (tmp2) {
      tmp2 = authorizationsFetchState === FetchState.FETCHED;
    }
    if (tmp2) {
      const items = [stateFromStores.parentId];
      const applications = ApplicationActionCreatorsDefault.fetchApplications(items, false);
    }
  }, items6);
  let tmp10 = null != stateFromStores;
  if (tmp10) {
    tmp10 = null == stateFromStores.parentId || null != stateFromStores1;
    const tmp11 = null == stateFromStores.parentId || null != stateFromStores1;
  }
  let tmp13 = tmp12;
  if (null == applicationOAuth2Token && null != stateFromStores && tmp10) {
    tmp13 = null != stateFromStores1;
  }
  if (tmp13) {
    tmp13 = null != stateFromStores2;
  }
  let tmp14 = null != application_id;
  if (tmp14) {
    tmp14 = authorizationsFetchState !== FetchState.FETCHED || null == stateFromStores || !tmp10;
    const tmp16 = authorizationsFetchState !== FetchState.FETCHED || null == stateFromStores || !tmp10;
  }
  const obj5 = { showLinkedLobbyApplicationLoadingIndicator: tmp14, requiredLinkedLobbyApplication: null, shouldRelaunchLinkedLobbyApplication: null };
  let tmp17 = null;
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
  obj5.requiredLinkedLobbyApplication = tmp17;
  obj5.shouldRelaunchLinkedLobbyApplication = tmp13;
  return obj5;
});