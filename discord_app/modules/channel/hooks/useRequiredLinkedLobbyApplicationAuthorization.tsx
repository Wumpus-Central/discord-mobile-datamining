// === Module 12000: useRequiredLinkedLobbyApplicationAuthorization ===

// Module 12000 (useRequiredLinkedLobbyApplicationAuthorization)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import recomputeFromAppTokens from "recomputeFromAppTokens" /* 5475 */;
import closure_4 from "addApplication" /* 4519 */;
import closure_5 from "recomputeFromAppTokens" /* 5475 */;

const useEffect = noop.useEffect;
const FetchState = recomputeFromAppTokens.FetchState;
const result = set.fileFinishedImporting("modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx");

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
  let items = [closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ authorizationsFetchState: closure_1_5.getFetchState(), applicationOAuth2Token: closure_1_5.getNewestTokenForApplication(application_id) }));
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  const applicationOAuth2Token = stateFromStoresObject.applicationOAuth2Token;
  const items1 = [closure_4];
  stateFromStores = application_id(stateFromStores[3]).useStateFromStores(items1, () => closure_1_4.getApplication(application_id));
  const obj2 = application_id(stateFromStores[3]);
  const items2 = [closure_4];
  let stateFromStores1 = application_id(stateFromStores[3]).useStateFromStores(items2, () => {
    let parentId;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return closure_1_4.getApplication(parentId);
  });
  const obj3 = application_id(stateFromStores[3]);
  const items3 = [closure_5];
  const items4 = [authorizationsFetchState, application_id];
  const stateFromStores2 = application_id(stateFromStores[3]).useStateFromStores(items3, () => {
    let parentId;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return closure_1_5.getNewestTokenForApplication(parentId);
  });
  stateFromStores1(() => {
    let tmp = null != application_id;
    if (tmp) {
      tmp = authorizationsFetchState === closure_1_6.NOT_FETCHED;
    }
    if (tmp) {
      const response = authorizationsFetchState(stateFromStores[4]).fetch();
      const obj = authorizationsFetchState(stateFromStores[4]);
    }
  }, items4);
  const items5 = [application_id, applicationOAuth2Token, authorizationsFetchState, stateFromStores];
  stateFromStores1(() => {
    let tmp2 = null != application_id;
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      tmp2 = authorizationsFetchState === closure_1_6.FETCHED;
    }
    if (tmp2) {
      const items = [application_id];
      const applications = authorizationsFetchState(stateFromStores[5]).fetchApplications(items, false);
      const obj = authorizationsFetchState(stateFromStores[5]);
    }
  }, items5);
  const items6 = [stateFromStores, authorizationsFetchState, stateFromStores1];
  stateFromStores1(() => {
    let tmp2 = null != stateFromStores && null != tmp.parentId;
    if (tmp2) {
      tmp2 = null == stateFromStores1;
    }
    if (tmp2) {
      tmp2 = authorizationsFetchState === closure_1_6.FETCHED;
    }
    if (tmp2) {
      const items = [tmp.parentId];
      const applications = authorizationsFetchState(stateFromStores[5]).fetchApplications(items, false);
      const obj = authorizationsFetchState(stateFromStores[5]);
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
  obj[1] = tmp17;
  obj[2] = tmp13;
  return obj;
};