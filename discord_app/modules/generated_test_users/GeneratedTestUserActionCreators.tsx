// discord_app/modules/generated_test_users/GeneratedTestUserActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import AuthenticationActionCreatorsDefault from "../../actions/AuthenticationActionCreators.tsx";
import SafetyToastsActionCreatorsDefault from "../safety_common/SafetyToastsActionCreators.native.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserRecord from "../../records/UserRecord.tsx";
import GeneratedTestUsersStore from "GeneratedTestUsersStore.tsx";

require = fn;
let closure_8 = async function _getGeneratedPoolById() {
  closure_0 = closure_1;
  value = TrackedHTTPUtilsDefault.get({
    url: Endpoints.GENERATED_POOL_BY_ID(closure_0),
    trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_LOGIN },
    rejectWithError: false,
  });
  await value
    .then((body) => {
      body = body.body;
      if (body.ok) {
        const users = body.users;
        let obj = { type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS", pool: null, users: null };
        const GeneratedTestPoolRecord = closure_0(15612).GeneratedTestPoolRecord;
        const obj2 = closure_1(573);
        obj.pool = GeneratedTestPoolRecord.fromServer(body.generated_pool).setPassword(closure_0);
        obj.users = users.map((item) => new closure_1_4(item));
        obj2.dispatch(obj);
        const fromServerResult = GeneratedTestPoolRecord.fromServer(body.generated_pool);
      } else {
        obj = closure_1(8404);
        obj.showFailedToast(constants.GENERIC_ERROR);
      }
    })
    .catch(() => {
      closure_1_1(8404).showFailedToast(constants.GENERIC_ERROR);
      return null;
    });
  return value;
};
const Endpoints = fn(1074).Endpoints;
const SafetyToastType = fn(8399).SafetyToastType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/generated_test_users/GeneratedTestUserActionCreators.tsx");

export const loginAsGeneratedUser = function loginAsGeneratedUser(id, arg1) {
  let obj = GeneratedTestUsersStore;
  const user = GeneratedTestUsersStore.getUser(arg1);
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
      obj = { login: user.email, password, isMultiAccount: true, source: "generated_test_user" };
      return AuthenticationActionCreatorsDefault.login(obj).catch(() => {
        SafetyToastsActionCreatorsDefault.showFailedToast(constants.GENERIC_ERROR);
        return null;
      });
    }
  }
};
export const getGeneratedPoolById = function getGeneratedPoolById() {
  const self = this;
  const apply = closure_8.apply;
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
