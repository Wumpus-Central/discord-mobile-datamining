// === Module 12436: useRequiredLinkedLobbyApplicationAuthorization ===

// Module 12436 (useRequiredLinkedLobbyApplicationAuthorization)
import _mod19 from "module_19" /* 19 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 7107 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7163 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7170 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;

const useEffect = _mod19.useEffect;
const FetchState = AuthorizedAppsStore2.FetchState;
const result = size.fileFinishedImporting("modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx");

export default function useRequiredLinkedLobbyApplicationAuthorization(require_application_authorization) {
  let prop;
  if (require_application_authorization != null) {
    prop = require_application_authorization.require_application_authorization;
  }
  let application_id = null;
  if (prop) {
    application_id = require_application_authorization.application_id;
  }
  let obj = application_id(stateFromStores[3]);
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ authorizationsFetchState: AuthorizedAppsStore.getFetchState(), applicationOAuth2Token: AuthorizedAppsStore.getNewestTokenForApplication(application_id) }));
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  const applicationOAuth2Token = stateFromStoresObject.applicationOAuth2Token;
  const items1 = [ApplicationStore];
  stateFromStores = application_id(stateFromStores[3]).useStateFromStores(items1, () => ApplicationStore.getApplication(application_id));
  const obj2 = application_id(stateFromStores[3]);
  const items2 = [ApplicationStore];
  let stateFromStores1 = application_id(stateFromStores[3]).useStateFromStores(items2, () => {
    let parentId;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return ApplicationStore.getApplication(parentId);
  });
  const obj3 = application_id(stateFromStores[3]);
  const items3 = [AuthorizedAppsStore];
  const items4 = [authorizationsFetchState, application_id];
  const stateFromStores2 = application_id(stateFromStores[3]).useStateFromStores(items3, () => {
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
    let tmp2 = null != stateFromStores && null != tmp.parentId;
    if (tmp2) {
      tmp2 = null == stateFromStores1;
    }
    if (tmp2) {
      tmp2 = authorizationsFetchState === FetchState.FETCHED;
    }
    if (tmp2) {
      const items = [tmp.parentId];
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
  obj = { showLinkedLobbyApplicationLoadingIndicator: tmp14, requiredLinkedLobbyApplication: null, shouldRelaunchLinkedLobbyApplication: null };
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
  obj.requiredLinkedLobbyApplication = tmp17;
  obj.shouldRelaunchLinkedLobbyApplication = tmp13;
  return obj;
};