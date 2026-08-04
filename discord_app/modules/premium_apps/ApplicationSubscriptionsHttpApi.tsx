import set from "set";
import { Endpoints } from "ME";

const require = arg1;
function _getApplicationSubscriptionGroupListingsForApplication() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, rejectWithError: null };
      obj1[0] = outer1_4.APPLICATION_SUBSCRIPTION_GROUP_LISTING(callback, closure_1);
      obj1[1] = callback(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      return body.body;
    })();
  });
  const _getApplicationSubscriptionGroupListingsForApplication = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getEntitlementsForGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, query: null, rejectWithError: null };
      obj1[0] = outer1_4.GUILD_ENTITLEMENTS(callback);
      obj1[1] = { with_sku: true, with_application: true };
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      return body.body;
    })();
  });
  const _getEntitlementsForGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getSubscriptionGroupForSubscriptionPlan() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, rejectWithError: null };
      obj1[0] = outer1_4.SUBSCRIPTION_PLAN_GROUP_LISTING(callback);
      const obj3 = callback(530);
      obj1[1] = obj3.rejectWithMigratedError();
      yield HTTP.get(obj1);
      return body.body;
    })();
  });
  const _getSubscriptionGroupForSubscriptionPlan = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchEligibleApplicationSubscriptionGuilds() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(530).HTTP;
      const obj1 = { url: null, query: null, rejectWithError: null };
      obj1[0] = outer1_4.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS;
      const obj2 = { application_id: null, sku_id: null };
      obj2[0] = callback;
      obj2[1] = closure_1;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      return body.body;
    })();
  });
  const _fetchEligibleApplicationSubscriptionGuilds = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx");

export const getApplicationSubscriptionGroupListingsForApplication = function getApplicationSubscriptionGroupListingsForApplication(closure_0, closure_1) {
  const self = this;
  const apply = _getApplicationSubscriptionGroupListingsForApplication.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getEntitlementsForGuild = function getEntitlementsForGuild(closure_0) {
  const self = this;
  const apply = _getEntitlementsForGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getSubscriptionGroupForSubscriptionPlan = function getSubscriptionGroupForSubscriptionPlan(closure_0) {
  const self = this;
  const apply = _getSubscriptionGroupForSubscriptionPlan.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchApplication = function fetchApplication(applicationId, signal) {
  const _require = applicationId;
  let obj = importDefault(709);
  obj = { type: "APPLICATION_FETCH", applicationId };
  obj.dispatch(obj);
  const HTTP = _require(530).HTTP;
  obj = { url: Endpoints.APPLICATION_PUBLIC(applicationId), signal, rejectWithError: null };
  obj[2] = _require(530).rejectWithMigratedError();
  const value = HTTP.get(obj);
  const obj4 = _require(530);
  return value.then((application) => {
    let obj = callback(table[3]);
    obj = { type: "APPLICATION_FETCH_SUCCESS", application: application.body, isHydrated: true };
    obj.dispatch(obj);
    return application.body;
  }).catch((arg0) => {
    let obj = outer1_1(outer1_2[3]);
    obj = { type: "APPLICATION_FETCH_FAIL", applicationId: closure_0 };
    obj.dispatch(obj);
    return Promise.reject(new outer1_1(outer1_2[4])(arg0));
  });
};
export const fetchEligibleApplicationSubscriptionGuilds = function fetchEligibleApplicationSubscriptionGuilds() {
  const self = this;
  const apply = _fetchEligibleApplicationSubscriptionGuilds.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};