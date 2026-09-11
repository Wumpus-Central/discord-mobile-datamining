// === Module 12510: MultiAccountActionCreators ===

// Module 12510 (MultiAccountActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import TokenManagerAll from "TokenManager" /* 1099 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6664 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MultiAccountStore from "MultiAccountStore" /* 12506 */;

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
    await "PX_16";
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
            let obj2 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: id2 };
            DispatcherDefault.dispatch(obj2);
            c5 = 1;
            const HTTP = closure_0(1272).HTTP;
            const obj3 = { url: constants2.ME, headers: null, retries: 3, rejectWithError: false };
            obj3.headers = { authorization: token };
            c6 = 3;
            c7 = 1;
            let obj5 = { value: HTTP.get(obj3), done: false };
            return obj5;
          }
        }
        let obj13 = DispatcherDefault;
        let obj6 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id2 };
        obj13.dispatch(obj6);
        c7 = 3;
        TokenManagerAll;
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
      let obj10 = DispatcherDefault;
      let str = "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS";
      if (closure_130_3) {
        str = "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE";
      }
      obj10.dispatch({ type: str, userId: id2 });
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
          obj10 = { type: "USER_UPDATE", user: closure_130_2.body };
          DispatcherDefault.dispatch(obj10);
          DispatcherDefault;
        }
        obj2 = DispatcherDefault;
        obj2.dispatch({ type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: id2 });
      }
    }
    closure_130_5 = { expected_user_id: id2, actual_user_id: closure_130_4 };
    logger.log("Found per-user token authentication mismatch", closure_130_5);
    obj5 = AnalyticsUtilsDefault;
    obj5.track(constants.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, closure_130_5);
    obj6 = DispatcherDefault;
    obj13 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id2 };
    obj6.dispatch(obj13);
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
  let obj = { switchSynchronously };
  logger.log("Switching account to " + id, obj);
  const token = TokenManagerAll.getToken(id);
  if (null == token) {
    obj.log("Switching accounts failed because there was no token");
    obj = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id };
    DispatcherDefault.dispatch(obj);
    let resolved = Promise.resolve();
  } else {
    let tmp4 = CHOOSE_ACCOUNT;
    const obj1 = { type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: id, location: null };
    if (CHOOSE_ACCOUNT == null) {
      tmp4 = null;
    }
    obj1.location = tmp4;
    DispatcherDefault.dispatch(obj1);
    resolved = AuthenticationActionCreatorsDefault.switchAccountToken(token, switchSynchronously);
    const tmp5Result = AuthenticationActionCreatorsDefault;
  }
  return resolved;
};
export const moveAccount = function moveAccount(from, to) {
  const obj = { type: "MULTI_ACCOUNT_MOVE_ACCOUNT", from, to };
  obj.dispatch(obj);
};
export const removeAccount = function removeAccount(userId) {
  const obj = { type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId };
  obj.dispatch(obj);
};
export const updatePushSyncToken = function updatePushSyncToken(id, pushSyncToken) {
  const obj = { type: "MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN", userId: id, pushSyncToken };
  obj.dispatch(obj);
};
export const invalidatePushSyncTokens = function invalidatePushSyncTokens(invalid_push_sync_tokens) {
  const obj = { type: "MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS", invalidPushSyncTokens: invalid_push_sync_tokens };
  obj.dispatch(obj);
};
export const reportAccountSwitchTimeout = function reportAccountSwitchTimeout() {
  DispatcherDefault.dispatch({ type: "MULTI_ACCOUNT_SWITCH_TIMEOUT" });
};