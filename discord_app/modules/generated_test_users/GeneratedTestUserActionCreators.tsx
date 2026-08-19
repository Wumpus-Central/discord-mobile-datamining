// discord_app/modules/generated_test_users/GeneratedTestUserActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import handleLogoutDefault from "../../actions/AuthenticationActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import createdAt from "../../records/UserRecord.tsx";
import handleAddUser from "GeneratedTestUsersStore.tsx";
import { Endpoints } from "../../Constants.tsx";
import { SafetyToastType } from "../safety_common/Constants.tsx";

const require = fn;
function _getGeneratedPoolById() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      const callback = callback2;
      obj1 = { url: null, trackedActionData: null, rejectWithError: false };
      obj1[0] = closure_1_6.GENERATED_POOL_BY_ID(callback);
      let obj2 = { event: null };
      obj2[0] = callback(503).NetworkActionNames.USER_LOGIN;
      obj1[1] = obj2;
      const value = callback2(5227).get(obj1);
      const obj6 = callback2(5227);
      yield value.then((result) => {
        const body = result.body;
        if (result.ok) {
          const users = body.users;
          let obj = { type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS", pool: null, users: null };
          const GeneratedTestPoolRecord = callback(13986).GeneratedTestPoolRecord;
          const obj2 = closure_1_1(709);
          obj[1] = GeneratedTestPoolRecord.fromServer(body.generated_pool).setPassword(callback);
          obj[2] = users.map((item, index) => new closure_4(item));
          obj2.dispatch(obj);
          const fromServerResult = GeneratedTestPoolRecord.fromServer(body.generated_pool);
        } else {
          obj = closure_1_1(6553);
          obj.showFailedToast(closure_1_7.GENERIC_ERROR);
        }
      }).catch((error) => {
        callback2(6553).showFailedToast(constants.GENERIC_ERROR);
        return null;
      });
      return arg1;
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("obj132").fileFinishedImporting("modules/generated_test_users/GeneratedTestUserActionCreators.tsx");

export const loginAsGeneratedUser = function loginAsGeneratedUser(id, arg1) {
  let obj = user;
  user = user.getUser(arg1);
  if (null == user) {
    const _Error3 = Error;
    error = new Error("User not found");
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
      return handleLogoutDefault.login(obj).catch((error) => {
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
  const obj = { type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId };
  obj.dispatch(obj);
};