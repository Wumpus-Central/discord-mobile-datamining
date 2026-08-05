// discord_app/modules/multi_account/MultiAccountActionCreators.tsx
import setSecondaryToken from "setSecondaryToken";
import fetchFingerprint from "fetchFingerprint";
import initialize from "initialize";
import ME from "ME";

let error;
let metroImportAll;
const require = arg1;
({ AnalyticEvents: error, Endpoints: metroImportAll } = ME);
let c9 = new require("ME")("MultiAccountActionCreators");
const tmp3 = new require("ME")("MultiAccountActionCreators");
const result = require("initialize").fileFinishedImporting("modules/multi_account/MultiAccountActionCreators.tsx");

export const validateMultiAccountTokens = function validateMultiAccountTokens() {
  let id2 = id.getId();
  users = users.getUsers();
  id2 = undefined;
  id2 = callback((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c3 = tmp3;
      id = id.id;
      yield "ct";
      if (1 === tmp7) {
        if (arg0 === 1) {
          let c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          const outer2_1 = outer2_2(outer2_3[5]).getToken(callback);
          if (null != outer2_1) {
            if ("" !== c1) {
              let obj2 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST", userId: null };
              obj2[1] = id;
              outer2_1(outer2_3[6]).dispatch(obj2);
              let obj12 = 1;
              const HTTP = callback(outer2_3[7]).HTTP;
              const obj3 = { url: null, headers: null, retries: 3, rejectWithError: false };
              obj3[0] = outer2_8.ME;
              const obj4 = { authorization: null };
              obj4[0] = c1;
              obj3[1] = obj4;
              let c6 = 3;
              c7 = 1;
              let obj5 = { value: null, done: false };
              obj5[0] = HTTP.get(obj3);
              return obj5;
            }
          }
          let obj13 = outer2_1(outer2_3[6]);
          let obj6 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: null };
          obj6[1] = id;
          obj13.dispatch(obj6);
          c7 = 3;
          const obj24 = outer2_2(outer2_3[5]);
        }
      } else if (2 === tmp7) {
        obj12 = 0;
        const outer2_6 = setSecondaryToken;
        let status;
        if (outer2_6 != null) {
          status = outer2_6.status;
        }
        let tmp48 = 401 === status;
        if (!tmp48) {
          let status1;
          if (outer2_6 != null) {
            status1 = outer2_6.status;
          }
          tmp48 = 403 === status1;
        }
        outer2_3 = tmp48;
        let obj10 = outer2_1(outer2_3[6]);
        let str = "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS";
        if (outer2_3) {
          str = "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE";
        }
        const obj7 = { type: null, userId: null };
        obj7[0] = str;
        obj7[1] = id;
        obj10.dispatch(obj7);
        c7 = 3;
        const obj8 = { value: null, done: true };
        obj8[0] = undefined;
        return obj8;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        obj12 = 0;
        c7 = 3;
        const obj9 = { value: null, done: true };
        obj9[0] = arg1;
        return obj9;
      } else {
        let closure_2 = arg1;
        obj12 = 0;
        const body = closure_2.body;
        id = undefined;
        if (body != null) {
          id = body.id;
        }
        c1 = id;
        if (id == null) {
          c1 = null;
        }
        setSecondaryToken = c1;
        if (null == setSecondaryToken) {
          if (callback !== id) {
            const obj = outer2_1(outer2_3[6]);
            obj10 = { type: "USER_UPDATE", user: null };
            obj10[1] = closure_2.body;
            obj.dispatch(obj10);
          }
          obj2 = outer2_1(outer2_3[6]);
          const obj11 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS", userId: null };
          obj11[1] = id;
          obj2.dispatch(obj11);
        }
      }
      obj12 = { expected_user_id: null, actual_user_id: null };
      obj12[0] = id;
      obj12[1] = setSecondaryToken;
      outer2_9.log("Found per-user token authentication mismatch", obj12);
      obj5 = outer2_1(outer2_3[8]);
      obj5.track(outer2_7.MULTI_ACCOUNT_VALIDATE_TOKEN_USER_MISMATCH, obj12);
      obj6 = outer2_1(outer2_3[6]);
      obj13 = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: null };
      obj13[1] = id;
      obj6.dispatch(obj13);
    })();
    iter.next();
    return iter;
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
  let obj = tmp3;
  obj = { switchSynchronously };
  tmp3.log("Switching account to " + id, obj);
  const token = importAll(707).getToken(id);
  if (null == token) {
    obj.log("Switching accounts failed because there was no token");
    obj = { type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE", userId: null };
    obj[1] = id;
    importDefault(709).dispatch(obj);
    let resolved = Promise.resolve();
    const obj7 = importDefault(709);
  } else {
    let tmp4 = CHOOSE_ACCOUNT;
    const obj1 = { type: "MULTI_ACCOUNT_SWITCH_START", targetUserId: null, location: null };
    obj1[1] = id;
    if (CHOOSE_ACCOUNT == null) {
      tmp4 = null;
    }
    obj1[2] = tmp4;
    importDefault(709).dispatch(obj1);
    const obj4 = importDefault(709);
    const tmp5 = importDefault;
    resolved = importDefault(5736).switchAccountToken(token, switchSynchronously);
    const tmp5Result = importDefault(5736);
  }
  return resolved;
};
export const moveAccount = function moveAccount(arg0, to) {
  let obj = importDefault(709);
  obj = { type: "MULTI_ACCOUNT_MOVE_ACCOUNT", from: arg0, to };
  obj.dispatch(obj);
};
export const removeAccount = function removeAccount(userId) {
  let obj = importDefault(709);
  obj = { type: "MULTI_ACCOUNT_REMOVE_ACCOUNT", userId };
  obj.dispatch(obj);
};
export const updatePushSyncToken = function updatePushSyncToken(id, token) {
  let obj = importDefault(709);
  obj = { type: "MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN", userId: id, pushSyncToken: token };
  obj.dispatch(obj);
};
export const invalidatePushSyncTokens = function invalidatePushSyncTokens(invalid_push_sync_tokens) {
  let obj = importDefault(709);
  obj = { type: "MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS", invalidPushSyncTokens: invalid_push_sync_tokens };
  obj.dispatch(obj);
};
export const reportAccountSwitchTimeout = function reportAccountSwitchTimeout() {
  importDefault(709).dispatch({ type: "MULTI_ACCOUNT_SWITCH_TIMEOUT" });
};