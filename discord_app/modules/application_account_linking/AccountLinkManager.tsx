// discord_app/modules/application_account_linking/AccountLinkManager.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthorizedAppsStore from "../oauth2/AuthorizedAppsStore.tsx";
import AccountLinkStore from "AccountLinkStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
let closure_9 = async function _claimIncentivizedAccountLinkingReward(arg0) {
  closure_2 = tmp3;
  closure_1 = tmp5;
  ({ applicationId: closure_129_0, onSuccess: closure_129_1, onError: closure_129_2 } = closure_0);
  await "PX_16";
  const HTTP = closure_130_0(closure_130_1[6]).HTTP;
  const request = {
    url: closure_130_7.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT,
    body: { application_id: closure_129_0 },
    rejectWithError: true,
  };
  await HTTP.post(request);
  if (2 === tmp8) {
    c4 = 0;
    closure_129_3 = closure_3;
    if (closure_129_2 != null) {
      tmp14(closure_129_3);
    }
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    if (closure_129_1 != null) {
      closure_129_1();
    }
    c4 = 0;
  }
  return value;
};
const Constants = fn(1074);
({ AppStates: metroRequire, Endpoints: closure_7 } = Constants);
let closure_8 = 20 * DurationsDefault.Millis.MINUTE;
class AccountLinkManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
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
}
const prototype = AccountLinkManager.prototype;
prototype["evaluatePending"] = function evaluatePending() {
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
};
prototype["handleOAuth2TokenCreate"] = function handleOAuth2TokenCreate(application) {
  const pendingAuthorizations = AccountLinkStore.getPendingAuthorizations();
  if (pendingAuthorizations.has(application.application.id)) {
    const self = this;
    this.evaluatePending();
  }
};
prototype["handleAuthorizedAppsUpdate"] = function handleAuthorizedAppsUpdate() {
  this.evaluatePending();
};
prototype["handleAccountLinkAuthorizationCompleted"] = function handleAccountLinkAuthorizationCompleted(applicationId) {
  const pendingAuthorizations = AccountLinkStore.getPendingAuthorizations();
  if (pendingAuthorizations.has(applicationId.applicationId)) {
    const self = this;
    this.evaluatePending();
  }
};
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  if (state.state === constants.ACTIVE) {
    const self = this;
    this.evaluatePending();
  }
};
AccountLinkManager.displayName = "AccountLinkManager";
const accountLinkManager = new AccountLinkManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_account_linking/AccountLinkManager.tsx");

export default accountLinkManager;
export const claimIncentivizedAccountLinkingReward = function claimIncentivizedAccountLinkingReward() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { AccountLinkManager };
