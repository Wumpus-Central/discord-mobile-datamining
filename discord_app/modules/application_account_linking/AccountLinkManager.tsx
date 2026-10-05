// discord_app/modules/application_account_linking/AccountLinkManager.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthorizedAppsStore from "../oauth2/AuthorizedAppsStore.tsx";
import AccountLinkStore from "AccountLinkStore.tsx";
import Constants from "../../Constants.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj = function _claimIncentivizedAccountLinkingReward() {
  obj = _asyncToGenerator(async (application_id) => {
    let c0;
    let c1;
    let c2;
    let closure_2;
    let obj5;
    const HTTP = closure_130_0(closure_130_1[6]).HTTP;
    const request = { url: closure_130_7.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT, body: obj5, rejectWithError: true };
    obj5 = { application_id };
    let postResult = HTTP.post(request);
    await postResult;
    if (2 === c5) {
      let c4 = 0;
      postResult = c2;
      if (c2 != null) {
        postResult(closure_3);
      }
    } else if (application_id === 1) {
      let c6 = 3;
      throw value;
    } else if (application_id === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      if (postResult != null) {
        postResult();
      }
      c4 = 0;
    }
    await "IconComponent";
    ({ applicationId: c0, onSuccess: c1, onError: c2 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
({ AppStates: metroRequire, Endpoints: metroImportDefault } = Constants);
let closure_8 = 20 * DurationsDefault.Millis.MINUTE;
class AccountLinkManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      OAUTH2_TOKEN_CREATE(arg0) {
        return applyArgumentsResult.handleOAuth2TokenCreate(arg0);
      },
      USER_AUTHORIZED_APPS_UPDATE() {
        return applyArgumentsResult.handleAuthorizedAppsUpdate();
      },
      APP_STATE_UPDATE(arg0) {
        return applyArgumentsResult.handleAppStateUpdate(arg0);
      },
      ACCOUNT_LINK_AUTHORIZATION_COMPLETED(applicationId) {
        return applyArgumentsResult.handleAccountLinkAuthorizationCompleted(applicationId);
      },
    };
    return applyArgumentsResult;
  }
  evaluatePending() {
    let tmp7;
    let tmp8;
    const pendingAuthorizations = AccountLinkStore.getPendingAuthorizations();
    if (0 !== pendingAuthorizations.size) {
      const _Date = Date;
      const timestamp = Date.now();
      const tmp26 = pendingAuthorizations[Symbol.iterator]();
      while (tmp26 !== undefined) {
        let tmp6 = _slicedToArray(tmp3, 2);
        [tmp7, tmp8] = tmp6;
        if (timestamp - tmp8.startedAt > closure_8) {
          let result = AccountLinkStore.deletePendingAuthorization(tmp7);
          let accountLinkCallbacks2 = tmp8.accountLinkCallbacks;
          if (accountLinkCallbacks2 != null) {
            let onError = accountLinkCallbacks2.onError;
            if (onError != null) {
              let onErrorResult = onError("Account link authorization timed out");
            }
          }
        } else if (null != AuthorizedAppsStore.getNewestTokenForApplication(tmp7)) {
          let accountLinkCallbacks = tmp8.accountLinkCallbacks;
          if (accountLinkCallbacks != null) {
            let onSuccess = accountLinkCallbacks.onSuccess;
            if (onSuccess != null) {
              let onSuccessResult = onSuccess();
            }
          }
          let result1 = AccountLinkStore.deletePendingAuthorization(tmp7);
        }
        continue;
      }
    }
  }
  handleOAuth2TokenCreate(application) {
    const pendingAuthorizations = AccountLinkStore.getPendingAuthorizations();
    if (pendingAuthorizations.has(application.application.id)) {
      const self = this;
      this.evaluatePending();
    }
  }
  handleAuthorizedAppsUpdate() {
    this.evaluatePending();
  }
  handleAccountLinkAuthorizationCompleted(applicationId) {
    const pendingAuthorizations = AccountLinkStore.getPendingAuthorizations();
    if (pendingAuthorizations.has(applicationId.applicationId)) {
      const self = this;
      this.evaluatePending();
    }
  }
  handleAppStateUpdate(state) {
    if (state.state === metroRequire.ACTIVE) {
      const self = this;
      this.evaluatePending();
    }
  }
}
const prototype = AccountLinkManager.prototype;
AccountLinkManager.displayName = "AccountLinkManager";
const accountLinkManager = new AccountLinkManager();
let result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkManager.tsx");

export default accountLinkManager;
export const claimIncentivizedAccountLinkingReward = function claimIncentivizedAccountLinkingReward() {
  return obj(...arguments);
};
export { AccountLinkManager };
