// discord_app/modules/generated_test_users/GeneratedTestUserActionCreators.tsx
import handleLogout from "handleLogout";
import createdAt from "createdAt";
import handleAddUser from "handleAddUser";
import { Endpoints } from "ME";
import { SafetyToastType } from "SafetyToastType";
import { handleLogout } from "../../actions/AuthenticationActionCreators.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
function _getGeneratedPoolById() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, arg1) {
      const callback = callback2;
      const obj1 = { url: null, trackedActionData: null, rejectWithError: false };
      obj1[0] = outer1_6.GENERATED_POOL_BY_ID(callback);
      let obj2 = { event: null };
      obj2[0] = callback(503).NetworkActionNames.USER_LOGIN;
      obj1[1] = obj2;
      const value = callback2(5227).get(obj1);
      const obj6 = callback2(5227);
      yield value.then((body) => {
        body = body.body;
        if (body.ok) {
          const users = body.users;
          let obj = { type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS", pool: null, users: null };
          const GeneratedTestPoolRecord = callback(13986).GeneratedTestPoolRecord;
          const obj2 = outer1_1(709);
          obj[1] = GeneratedTestPoolRecord.fromServer(body.generated_pool).setPassword(callback);
          obj[2] = users.map((arg0) => new createdAt(arg0));
          obj2.dispatch(obj);
          const fromServerResult = GeneratedTestPoolRecord.fromServer(body.generated_pool);
        } else {
          obj = outer1_1(6553);
          obj.showFailedToast(outer1_7.GENERIC_ERROR);
        }
      }).catch(() => {
        callback2(6553).showFailedToast(constants.GENERIC_ERROR);
        return null;
      });
      return arg1;
    })();
  });
  const _getGeneratedPoolById = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("handleAddUser").fileFinishedImporting("modules/generated_test_users/GeneratedTestUserActionCreators.tsx");

export const loginAsGeneratedUser = function loginAsGeneratedUser(id, arg1) {
  let obj = user;
  user = user.getUser(arg1);
  if (null == user) {
    const _Error3 = Error;
    const error = new Error("User not found");
    throw error;
  } else {
    const pool = obj.getPool(id);
    let password;
    if (pool != null) {
      password = pool.password;
    }
    if (null == password) {
      const _Error2 = Error;
      const error1 = new Error("Pool password not found");
      throw error1;
    } else if (null == user.email) {
      const _Error = Error;
      const error2 = new Error("User email not found");
      throw error2;
    } else {
      obj = { login: null, password: null, isMultiAccount: true, source: "generated_test_user" };
      obj[0] = user.email;
      obj[1] = password;
      const obj2 = handleLogout;
      return handleLogout.login(obj).catch(() => {
        callback(table[6]).showFailedToast(constants.GENERIC_ERROR);
        return null;
      });
    }
  }
};
export const getGeneratedPoolById = function getGeneratedPoolById(closure_0, closure_1) {
  const self = this;
  const apply = _getGeneratedPoolById.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeGeneratedPoolFromList = function removeGeneratedPoolFromList(poolId) {
  let obj = dispatcher;
  obj = { type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId };
  obj.dispatch(obj);
};