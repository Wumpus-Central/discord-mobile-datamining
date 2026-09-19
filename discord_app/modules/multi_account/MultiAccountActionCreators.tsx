// === Module 12669: MultiAccountActionCreators ===

// Module 12669 (MultiAccountActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import TokenManagerAll from "TokenManager" /* 1100 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6829 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MultiAccountStore from "MultiAccountStore" /* 12665 */;

const require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, Endpoints: closure_8 } = Constants);
const logger = new LoggerDefault("MultiAccountActionCreators");
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/MultiAccountActionCreators.tsx");

export const validateMultiAccountTokens = function validateMultiAccountTokens() {
  AuthenticationStore.getId();
  const users = MultiAccountStore.getUsers();
  let id = asyncGeneratorStep(async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            let id2;
            id2 = closure_0.id;
            let token;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "PX_16", done: true };
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              token = TokenManagerAll.getToken(id2);
              if (null != token) {
                if ("" !== token) {
                  const obj8 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: id2 };
                  DispatcherDefault.dispatch(obj8);
                  c5 = 1;
                  const HTTP = closure_0(1271).HTTP;
                  const obj9 = { url: constants2.ME, headers: null, retries: 3, rejectWithError: false };
                  const obj10 = { authorization: token };
                  obj9.headers = obj10;
                  c6 = 3;
                  c7 = 1;
                  const obj12 = { value: HTTP.get(obj9), done: false };
                  return obj12;
                }
              }
              const obj13 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id2 };
              DispatcherDefault.dispatch(obj13);
              c7 = 3;
            }
          } else if (2 === tmp7) {
            c5 = 0;
            closure_130_6 = closure_4;
            let status;
            if (closure_130_6 != null) {
              status = closure_130_6.status;
            }
            let tmp48 = 401 === status;
            if (!tmp48) {
              let status1;
              if (closure_130_6 != null) {
                status1 = closure_130_6.status;
              }
              tmp48 = 403 === status1;
            }
            closure_130_3 = tmp48;
            let str = "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS";
            if (closure_130_3) {
              str = "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE";
            }
            const obj15 = { type: str, userId: id2 };
            DispatcherDefault.dispatch(obj15);
            c7 = 3;
            const obj17 = { value: undefined, done: true };
            return obj17;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj18 = { value, done: true };
            return obj18;
          } else {
            closure_130_2 = value;
            c5 = 0;
            const body = closure_130_2.body;
            let id;
            if (body != null) {
              id = body.id;
            }
            c1 = id;
            if (id == null) {
              c1 = null;
            }
            closure_130_4 = c1;
            if (null == closure_130_4) {
              if (closure_0 !== id2) {
                const obj19 = { type: "USER_UPDATE", user: closure_130_2.body };
                DispatcherDefault.dispatch(obj19);
              }
              const obj20 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: id2 };
              DispatcherDefault.dispatch(obj20);
            }
          }
          const obj21 = { expected_user_id: id2, actual_user_id: closure_130_4 };
          closure_130_5 = obj21;
          logger.log("Found per-user token authentication mismatch", closure_130_5);
          AnalyticsUtilsDefault.track(constants.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, closure_130_5);
          const obj22 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id2 };
          DispatcherDefault.dispatch(obj22);
          c7 = 3;
          const obj23 = { value: undefined, done: true };
          return obj23;
        }
      } catch (tmp79) {
        closure_4 = tmp79;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp79;
        } else {
          c6 = tmp;
        }
      }
    }
  });
  const item = users.forEach(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
};
export const switchAccount = function switchAccount(id, switchSynchronously, CHOOSE_ACCOUNT) {
  logger.log("Switching account to " + id, { switchSynchronously });
  const token = TokenManagerAll.getToken(id);
  if (null == token) {
    logger.log("Switching accounts failed because there was no token");
    const obj5 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id };
    DispatcherDefault.dispatch(obj5);
    let resolved = Promise.resolve();
  } else {
    let tmp4 = CHOOSE_ACCOUNT;
    const obj6 = { type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: id, location: null };
    if (CHOOSE_ACCOUNT == null) {
      tmp4 = null;
    }
    obj6.location = tmp4;
    DispatcherDefault.dispatch(obj6);
    resolved = AuthenticationActionCreatorsDefault.switchAccountToken(token, switchSynchronously);
    const tmp5Result = AuthenticationActionCreatorsDefault;
  }
  return resolved;
};
export const moveAccount = function moveAccount(from, to) {
  DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_MOVE_ACCOUNT", from, to });
};
export const removeAccount = function removeAccount(userId) {
  DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId });
};
export const updatePushSyncToken = function updatePushSyncToken(id, pushSyncToken) {
  DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN", userId: id, pushSyncToken });
};
export const invalidatePushSyncTokens = function invalidatePushSyncTokens(invalid_push_sync_tokens) {
  DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS", invalidPushSyncTokens: invalid_push_sync_tokens });
};
export const reportAccountSwitchTimeout = function reportAccountSwitchTimeout() {
  DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_SWITCH_TIMEOUT" });
};