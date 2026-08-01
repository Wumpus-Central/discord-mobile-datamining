// === Module 11536: useRequiredLinkedLobbyApplicationAuthorization ===

// Module 11536 (useRequiredLinkedLobbyApplicationAuthorization)
import { useEffect } from "noop";
import addApplication from "addApplication";
import recomputeFromAppTokens from "recomputeFromAppTokens";
import { FetchState } from "recomputeFromAppTokens";

const result = require("recomputeFromAppTokens").fileFinishedImporting("modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx");

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
  let items = [recomputeFromAppTokens];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ authorizationsFetchState: outer1_5.getFetchState(), applicationOAuth2Token: outer1_5.getNewestTokenForApplication(application_id) }));
  const authorizationsFetchState = stateFromStoresObject.authorizationsFetchState;
  const applicationOAuth2Token = stateFromStoresObject.applicationOAuth2Token;
  const items1 = [addApplication];
  stateFromStores = application_id(stateFromStores[3]).useStateFromStores(items1, () => outer1_4.getApplication(application_id));
  const obj2 = application_id(stateFromStores[3]);
  const items2 = [addApplication];
  let stateFromStores1 = application_id(stateFromStores[3]).useStateFromStores(items2, () => {
    let parentId;
    if (stateFromStores != null) {
      parentId = stateFromStores.parentId;
    }
    return outer1_4.getApplication(parentId);
  });
  const items3 = [authorizationsFetchState, application_id];
  stateFromStores1(() => {
    let tmp = null != application_id;
    if (tmp) {
      tmp = authorizationsFetchState === outer1_6.NOT_FETCHED;
    }
    if (tmp) {
      const response = authorizationsFetchState(stateFromStores[4]).fetch();
      const obj = authorizationsFetchState(stateFromStores[4]);
    }
  }, items3);
  const items4 = [application_id, applicationOAuth2Token, authorizationsFetchState, stateFromStores];
  stateFromStores1(() => {
    let tmp2 = null != application_id;
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      tmp2 = authorizationsFetchState === outer1_6.FETCHED;
    }
    if (tmp2) {
      const items = [application_id];
      const applications = authorizationsFetchState(stateFromStores[5]).fetchApplications(items, false);
      const obj = authorizationsFetchState(stateFromStores[5]);
    }
  }, items4);
  const items5 = [stateFromStores, authorizationsFetchState, stateFromStores1];
  stateFromStores1(() => {
    let tmp2 = null != stateFromStores && null != tmp.parentId;
    if (tmp2) {
      tmp2 = null == stateFromStores1;
    }
    if (tmp2) {
      tmp2 = authorizationsFetchState === outer1_6.FETCHED;
    }
    if (tmp2) {
      const items = [tmp.parentId];
      const applications = authorizationsFetchState(stateFromStores[5]).fetchApplications(items, false);
      const obj = authorizationsFetchState(stateFromStores[5]);
    }
  }, items5);
  let tmp9 = null != stateFromStores;
  if (tmp9) {
    tmp9 = null == stateFromStores.parentId || null != stateFromStores1;
    const tmp10 = null == stateFromStores.parentId || null != stateFromStores1;
  }
  let tmp11 = null != application_id;
  if (tmp11) {
    tmp11 = authorizationsFetchState !== FetchState.FETCHED || null == stateFromStores || !tmp9;
    const tmp13 = authorizationsFetchState !== FetchState.FETCHED || null == stateFromStores || !tmp9;
  }
  obj = { showLinkedLobbyApplicationLoadingIndicator: tmp11, requiredLinkedLobbyApplication: null };
  let tmp14 = null;
  if (null == applicationOAuth2Token) {
    tmp14 = null;
    if (null != stateFromStores) {
      tmp14 = null;
      if (tmp9) {
        if (stateFromStores1 == null) {
          stateFromStores1 = stateFromStores;
        }
        tmp14 = stateFromStores1;
      }
    }
  }
  obj[1] = tmp14;
  return obj;
};