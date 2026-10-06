// discord_app/modules/multi_account/MultiAccountActionCreators.tsx
import LoggerDefault from "../debug/Logger.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import TokenManagerAll from "../../../discord_common/js/shared/lib/TokenManager.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AuthenticationActionCreatorsDefault from "../../actions/AuthenticationActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MultiAccountStore from "MultiAccountStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c6, closure_0;

let metroImportAll;
let metroImportDefault;
({ AnalyticEvents: metroImportDefault, Endpoints: metroImportAll } = Constants);
const tmp3 = new LoggerDefault("MultiAccountActionCreators");
const logger = tmp3;
const result = size.fileFinishedImporting("modules/multi_account/MultiAccountActionCreators.tsx");

export const validateMultiAccountTokens = function validateMultiAccountTokens() {
  AuthenticationStore.getId();
  const users = MultiAccountStore.getUsers();
  const forEach = users.forEach;
  let id = _asyncToGenerator(async (arg0) => {
    let actual_user_id;
    let id;
    let obj10;
    closure_0 = arg0;
    if (1 === c6) {
      if (arg0 === 1) {
        let c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const obj23 = TokenManagerAll;
        const authorization = obj23.getToken(id);
        if (null != authorization) {
          if ("" !== authorization) {
            const obj8 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: id };
            const obj15 = DispatcherDefault;
            obj15.dispatch(obj8);
            let c5 = 1;
            const HTTP = closure_0(dependencyMap[7]).HTTP;
            const obj9 = { url: constants2.ME, headers: obj10, retries: 3, rejectWithError: false };
            obj10 = { authorization };
            c6 = 3;
            c7 = 1;
            const obj11 = { value: HTTP.get(obj9), done: false };
            return obj11;
          }
        }
        const obj12 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id };
        const obj13 = DispatcherDefault;
        obj13.dispatch(obj12);
      }
    } else if (2 === c6) {
      c5 = 0;
      let closure_6 = actual_user_id;
      let status;
      if (closure_6 != null) {
        status = closure_6.status;
      }
      let tmp45 = 401 === status;
      if (!tmp45) {
        let status1;
        if (closure_6 != null) {
          status1 = closure_6.status;
        }
        tmp45 = 403 === status1;
      }
      let closure_3 = tmp45;
      let str = "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS";
      const dispatch = DispatcherDefault.dispatch;
      if (closure_3) {
        str = "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE";
      }
      const obj14 = { type: str, userId: id };
      dispatch(obj14);
      c7 = 3;
      const obj16 = { value: undefined, done: true };
      return obj16;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 0;
      c7 = 3;
      const obj17 = { value, done: true };
      return obj17;
    } else {
      let closure_2 = value;
      c5 = 0;
      const body = closure_2.body;
      id = undefined;
      if (body != null) {
        id = body.id;
      }
      let c1 = id;
      if (id == null) {
        c1 = null;
      }
      actual_user_id = c1;
      if (null != actual_user_id) {
        if (actual_user_id !== id) {
          const obj18 = { expected_user_id: id, actual_user_id };
          logger.log("Found per-user token authentication mismatch", obj18);
          const obj6 = AnalyticsUtilsDefault;
          obj6.track(constants.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, obj18);
          const obj19 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id };
          const obj7 = DispatcherDefault;
          obj7.dispatch(obj19);
          c7 = 3;
          const obj20 = { value: undefined, done: true };
          return obj20;
        }
      }
      if (closure_0 !== id) {
        const obj21 = { type: "USER_UPDATE", user: closure_2.body };
        const obj = DispatcherDefault;
        obj.dispatch(obj21);
      }
      const obj22 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: id };
      const obj3 = DispatcherDefault;
      obj3.dispatch(obj22);
    }
    await "IconComponent";
    closure_3 = tmp;
    closure_2 = tmp4;
    id = closure_0.id;
    return "Reflect";
  });
  const item = forEach(function () {
    return closure_0(...arguments);
  });
};
export const switchAccount = function switchAccount(id, switchSynchronously, CHOOSE_ACCOUNT) {
  let resolved;
  const obj2 = { switchSynchronously };
  logger.log("Switching account to " + id, obj2);
  const obj3 = TokenManagerAll;
  const token = obj3.getToken(id);
  if (null == token) {
    logger.log("Switching accounts failed because there was no token");
    const obj4 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: id };
    const obj6 = DispatcherDefault;
    obj6.dispatch(obj4);
    resolved = Promise.resolve();
  } else {
    let tmp4 = CHOOSE_ACCOUNT;
    const obj5 = { type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: id, location: tmp4 };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (CHOOSE_ACCOUNT == null) {
      tmp4 = null;
    }
    dispatch(obj5);
    const tmp5Result = AuthenticationActionCreatorsDefault;
    resolved = tmp5Result.switchAccountToken(token, switchSynchronously);
  }
  return resolved;
};
export const moveAccount = function moveAccount(from, to) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MULTI_ACCOUNT_MOVE_ACCOUNT", from, to };
  obj.dispatch(obj2);
};
export const removeAccount = function removeAccount(userId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId };
  obj.dispatch(obj2);
};
export const updatePushSyncToken = function updatePushSyncToken(id, token) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN", userId: id, pushSyncToken: token };
  obj.dispatch(obj2);
};
export const invalidatePushSyncTokens = function invalidatePushSyncTokens(invalid_push_sync_tokens) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS", invalidPushSyncTokens: invalid_push_sync_tokens };
  obj.dispatch(obj2);
};
export const reportAccountSwitchTimeout = function reportAccountSwitchTimeout() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "MULTI_ACCOUNT_SWITCH_TIMEOUT" });
};
