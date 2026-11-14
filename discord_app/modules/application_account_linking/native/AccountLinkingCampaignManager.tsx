// === Module 20891: AccountLinkingCampaignManager ===

// Module 20891 (AccountLinkingCampaignManager)
import BackoffDefault from "Backoff" /* 559 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 16216 */;
import ConsentStore from "ConsentStore" /* 6846 */;
import UserStore from "UserStore" /* 1388 */;
import AccountLinkingCampaignStore from "AccountLinkingCampaignStore" /* 19831 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;

let require = fn;
const Consents = fn(1072).Consents;
class AccountLinkingCampaignManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    tmp3 = new closure_1(closure_2[7])(60000, 3600000, false);
    applyArgumentsResult.backoff = tmp3;
    applyArgumentsResult.retryAt = 0;
    applyArgumentsResult.sessionKey = null;
    applyArgumentsResult.pendingSession = null;
    applyArgumentsResult.actions = {
      LOGOUT() {
            applyArgumentsResult.resetRetryState();
            applyArgumentsResult.sessionKey = null;
            applyArgumentsResult.pendingSession = null;
          },
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult.handlePostConnectionOpen();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = AccountLinkingCampaignManager.prototype;
prototype["resetRetryState"] = function resetRetryState() {
  const backoff = this.backoff;
  backoff.succeed();
  this.retryAt = 0;
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const self = this;
  return (async () => {
    if (sessionGeneration === 2) {
      sessionGeneration = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp10 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        sessionGeneration = 2;
        if (0 === currentUser) {
          if (arg0 === 1) {
            sessionGeneration = 3;
            throw value;
          } else if (arg0 === 2) {
            sessionGeneration = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp4;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            closure_130_6 = undefined;
            closure_130_7 = undefined;
            closure_130_8 = undefined;
            closure_130_9 = undefined;
            closure_130_10 = undefined;
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            closure_130_0 = id;
            if (null != id) {
              sessionGeneration = sessionGeneration.getSessionGeneration();
              closure_130_1 = sessionGeneration;
              const _HermesInternal = HermesInternal;
              const combined = "" + id + ":" + sessionGeneration;
              closure_130_2 = combined;
              if (self.sessionKey !== combined) {
                self.resetRetryState();
                self.sessionKey = combined;
              }
              if (!obj12.hasFetched()) {
                let _Date = Date;
                if (Date.now() >= self.retryAt) {
                  if (self.pendingSession !== combined) {
                    self.pendingSession = combined;
                    closure_130_3 = function isCurrent() {
                      let tmp = closure_0.sessionKey === closure_1_2;
                      if (tmp) {
                        currentUser = authStore.getCurrentUser();
                        let id;
                        if (currentUser != null) {
                          id = currentUser.id;
                        }
                        tmp = id === closure_1_0;
                      }
                      if (tmp) {
                        tmp = AccountLinkingCampaignStore.getSessionGeneration() === closure_1_1;
                      }
                      return tmp;
                    };
                    closure_130_4 = 0;
                    function onFailure(arg0) {
                      closure_4 = Math.max(closure_4, arg0);
                    }
                    closure_130_5 = onFailure;
                    closure_130_6 = function fail() {
                      if (typeof closure_1_3 === "function") {
                        let tmp3 = closure_0.sessionKey === closure_1_2;
                        if (tmp3) {
                          currentUser = authStore.getCurrentUser();
                          let id;
                          if (currentUser != null) {
                            id = currentUser.id;
                          }
                          tmp3 = id === closure_1_0;
                        }
                        if (tmp3) {
                          tmp3 = AccountLinkingCampaignStore.getSessionGeneration() === closure_1_1;
                        }
                        if (tmp3) {
                          const _Date = Date;
                          const _Math = Math;
                          const _Math2 = Math;
                          const timestamp = Date.now();
                          const backoff = closure_0.backoff;
                          const random = Math.random();
                          closure_0.retryAt = timestamp + Math.max(1000, random * backoff.fail(), closure_4);
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    };
                    c5 = 2;
                    closure_130_7 = {};
                    if (obj13.isAndroid()) {
                      if (c5.hasConsented(constants.PERSONALIZATION)) {
                        currentUser = 3;
                        sessionGeneration = 1;
                        const obj5 = { value: _self(tmp8[9]).fetchAccountLinkingCampaignDetectableApps(onFailure), done: false };
                        return obj5;
                      }
                    }
                    if (closure_130_3()) {
                      if (!c5.hasConsented(constants.PERSONALIZATION)) {
                        closure_130_7 = {};
                      }
                      currentUser = 7;
                      sessionGeneration = 1;
                      const obj7 = { value: _self(tmp8[9]).fetchAccountLinkingCampaigns(closure_130_7, closure_130_5), done: false };
                      return obj7;
                    } else {
                      c5 = 0;
                      if (closure_131_0.pendingSession === closure_130_2) {
                        closure_131_0.pendingSession = null;
                      }
                      sessionGeneration = 3;
                      return { value: "HermesInternal", done: null };
                    }
                    obj13 = _self(tmp8[8]);
                  }
                }
              }
              obj12 = sessionGeneration;
            }
            sessionGeneration = 3;
          }
        } else if (1 !== tmp11) {
          if (2 === tmp11) {
            c5 = 1;
            closure_130_6();
          } else if (3 === tmp11) {
            if (arg0 === 1) {
              sessionGeneration = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              if (closure_131_0.pendingSession === closure_130_2) {
                closure_131_0.pendingSession = null;
              }
              sessionGeneration = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_130_8 = value;
              if (closure_130_3()) {
                if (null == closure_130_8) {
                  closure_130_6();
                  c5 = 0;
                  if (closure_131_0.pendingSession === closure_130_2) {
                    closure_131_0.pendingSession = null;
                  }
                  sessionGeneration = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  c5 = 3;
                  currentUser = 5;
                  sessionGeneration = 1;
                  const obj10 = { value: _self(tmp8[10]).detectLocalApps(closure_130_8), done: false };
                  return obj10;
                }
              } else {
                c5 = 0;
                if (closure_131_0.pendingSession === closure_130_2) {
                  closure_131_0.pendingSession = null;
                }
                sessionGeneration = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (4 === tmp11) {
            c5 = 2;
            closure_130_7 = {};
          } else if (5 === tmp11) {
            if (arg0 === 1) {
              sessionGeneration = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              if (closure_131_0.pendingSession === closure_130_2) {
                closure_131_0.pendingSession = null;
              }
              sessionGeneration = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else if (closure_130_3()) {
              closure_1 = closure_130_8;
              closure_1 = closure_130_8;
              _self = closure_130_8[Symbol.iterator]();
              while (_self !== undefined) {
                c5 = 4;
                closure_130_9 = tmp46;
                closure_130_7[closure_130_9] = tmp130.isAppInstalled(closure_130_9);
                c5 = 3;
                continue;
              }
              c5 = 2;
            } else {
              c5 = 0;
              if (closure_131_0.pendingSession === closure_130_2) {
                closure_131_0.pendingSession = null;
              }
              sessionGeneration = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (6 === tmp11) {
            c5 = 3;
            _self.return();
            throw tmp130;
          } else if (arg0 === 1) {
            sessionGeneration = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            if (closure_131_0.pendingSession === closure_130_2) {
              closure_131_0.pendingSession = null;
            }
            sessionGeneration = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_130_10 = value;
            if (closure_130_3()) {
              if (null == closure_130_10) {
                closure_130_6();
              } else {
                closure_131_0.resetRetryState();
              }
              c5 = 1;
            } else {
              c5 = 0;
              if (closure_131_0.pendingSession === closure_130_2) {
                closure_131_0.pendingSession = null;
              }
              sessionGeneration = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          c5 = 0;
          if (closure_131_0.pendingSession === closure_130_2) {
            closure_131_0.pendingSession = null;
          }
        }
        c5 = 0;
        if (closure_131_0.pendingSession === closure_130_2) {
          closure_131_0.pendingSession = null;
        }
        throw tmp130;
      } catch (tmp130) {
        if (tmp5 === c5) {
          sessionGeneration = tmp3;
          throw tmp130;
        } else if (tmp2 === tmp132) {
          currentUser = tmp2;
        } else if (tmp === tmp132) {
          currentUser = tmp;
        } else if (tmp3 === tmp132) {
          currentUser = tmp7;
        } else {
          currentUser = tmp6;
        }
      }
    }
  })();
};
AccountLinkingCampaignManager.displayName = "AccountLinkingCampaignManager";
const accountLinkingCampaignManager = new AccountLinkingCampaignManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkingCampaignManager.tsx");

export default accountLinkingCampaignManager;