// === Module 16941: AccountLinkManager ===

// Module 16941 (AccountLinkManager)
import DurationsDefault from "Durations" /* 1090 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;
import AccountLinkStore from "AccountLinkStore" /* 16942 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

let require = fn;
let closure_9 = async function _claimIncentivizedAccountLinkingReward(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ applicationId: closure_129_0, onSuccess: closure_129_1, onError: closure_129_2 } = closure_0);
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_1[6]).HTTP;
          const request = { url: closure_130_7.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT, body: null, rejectWithError: true };
          const obj2 = { application_id: closure_129_0 };
          request.body = obj2;
          c5 = 3;
          c6 = 1;
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
        }
      } else {
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
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp25) {
      closure_3 = tmp25;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp25;
      } else {
        c5 = tmp;
      }
    }
  }
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
          }
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
      let tmp9 = tmp8;
      if (timestamp - tmp8.startedAt > closure_8) {
        let result = AccountLinkStore.deletePendingAuthorization(tmp7);
        let accountLinkCallbacks2 = tmp9.accountLinkCallbacks;
        if (accountLinkCallbacks2 != null) {
          let onError = accountLinkCallbacks2.onError;
          if (onError != null) {
            let onErrorResult = onError("Account link authorization timed out");
          }
        }
      } else if (null != AuthorizedAppsStore.getNewestTokenForApplication(tmp7)) {
        let accountLinkCallbacks = tmp9.accountLinkCallbacks;
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