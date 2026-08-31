// === Module 16485: _claimIncentivizedAccountLinkingReward ===

// Module 16485 (_claimIncentivizedAccountLinkingReward)
import setDefault from "set" /* 687 */;
import initializeDefault from "initialize" /* 5454 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "recomputeFromAppTokens" /* 5443 */;
import closure_5 from "map" /* 16486 */;
import ME from "ME" /* 676 */;

let require = arg1;
function _claimIncentivizedAccountLinkingReward() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp3;
              dependencyMap = tmp5;
              let callback;
              dependencyMap = undefined;
              c2 = undefined;
              ({ applicationId: c0, onSuccess: c1, onError: c2 } = callback);
              c5 = 1;
              c6 = 1;
              return { value: "Object", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = 1;
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: true };
              obj2[0] = obj.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT;
              const obj3 = { application_id: null };
              obj3[0] = callback;
              obj2[1] = obj3;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else {
            if (2 === tmp8) {
              c4 = 0;
              if (c2 != null) {
                tmp14(closure_3);
              }
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (dependencyMap != null) {
                dependencyMap();
              }
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
    iter.next();
    return iter;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AppStates: closure_6, Endpoints: error } = ME);
let closure_8 = 20 * setDefault.Millis.MINUTE;
initializeDefault;
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
  const pendingAuthorizations = authStore.getPendingAuthorizations();
  if (0 !== pendingAuthorizations.size) {
    const _Date = Date;
    const timestamp = Date.now();
    const tmp26 = pendingAuthorizations[Symbol.iterator]();
    while (tmp26 !== undefined) {
      let tmp5 = callback;
      let tmp6 = callback(tmp3, 2);
      [tmp7, tmp8] = tmp6;
      let tmp9 = tmp8;
      let tmp10 = closure_8;
      if (timestamp - tmp8.startedAt > closure_8) {
        let tmp18 = authStore;
        let tmp19 = tmp7;
        let result = authStore.deletePendingAuthorization(tmp7);
        let tmp21 = tmp8;
        let accountLinkCallbacks2 = tmp9.accountLinkCallbacks;
        if (accountLinkCallbacks2 != null) {
          let onError = accountLinkCallbacks2.onError;
          if (onError != null) {
            let onErrorResult = onError("Account link authorization timed out");
          }
        }
      } else {
        let tmp11 = newestTokenForApplication;
        let tmp12 = tmp7;
        if (null != newestTokenForApplication.getNewestTokenForApplication(tmp7)) {
          let tmp13 = tmp8;
          let accountLinkCallbacks = tmp9.accountLinkCallbacks;
          if (accountLinkCallbacks != null) {
            let onSuccess = accountLinkCallbacks.onSuccess;
            if (onSuccess != null) {
              let onSuccessResult = onSuccess();
            }
          }
          let tmp15 = authStore;
          let tmp16 = tmp7;
          let result1 = authStore.deletePendingAuthorization(tmp7);
        }
      }
      continue;
    }
  }
};
prototype["handleOAuth2TokenCreate"] = function handleOAuth2TokenCreate(application) {
  const pendingAuthorizations = authStore.getPendingAuthorizations();
  if (pendingAuthorizations.has(application.application.id)) {
    const self = this;
    this.evaluatePending();
  }
};
prototype["handleAuthorizedAppsUpdate"] = function handleAuthorizedAppsUpdate() {
  this.evaluatePending();
};
prototype["handleAccountLinkAuthorizationCompleted"] = function handleAccountLinkAuthorizationCompleted(applicationId) {
  const pendingAuthorizations = authStore.getPendingAuthorizations();
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
let result = require("set").fileFinishedImporting("modules/application_account_linking/AccountLinkManager.tsx");

export default accountLinkManager;
export const claimIncentivizedAccountLinkingReward = function claimIncentivizedAccountLinkingReward(arg0) {
  const self = this;
  const apply = _claimIncentivizedAccountLinkingReward.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { AccountLinkManager };