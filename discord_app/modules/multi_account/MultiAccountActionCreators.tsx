// === Module 12123: MultiAccountActionCreators ===

// Module 12123 (MultiAccountActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import TokenManagerAll from "TokenManager" /* 1100 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6196 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MultiAccountStore from "MultiAccountStore" /* 12120 */;

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
    closure_3 = tmp3;
    const id2 = closure_0.id;
    await "flex";
    if (1 === tmp7) {
      if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        return { value, done: true };
      } else {
        const token = TokenManagerAll.getToken(id2);
        if (null != token) {
          if ("" !== token) {
            DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: id2 });
            c5 = 1;
            const HTTP = closure_0(1271).HTTP;
            const obj9 = { url: constants2.ME, headers: null, retries: 3, rejectWithError: false };
            obj9.headers = { authorization: token };
            c6 = 3;
            c7 = 1;
            return { value: HTTP.get(obj9), done: false };
          }
        }
        TokenManagerAll;
        DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id2 });
        c7 = 3;
        DispatcherDefault;
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
      DispatcherDefault.dispatch({ type: str, userId: id2 });
      c7 = 3;
      return { value: undefined, done: true };
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 0;
      c7 = 3;
      return { value, done: true };
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
          DispatcherDefault.dispatch({ type: "USER_UPDATE", user: closure_130_2.body });
          DispatcherDefault;
        }
        DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: id2 });
        DispatcherDefault;
      }
    }
    closure_130_5 = { expected_user_id: id2, actual_user_id: closure_130_4 };
    logger.log("Found per-user token authentication mismatch", closure_130_5);
    AnalyticsUtilsDefault.track(constants.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, closure_130_5);
    DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id2 });
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