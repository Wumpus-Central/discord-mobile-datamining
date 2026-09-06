// === Module 9538: ApplicationSubscriptionsHttpApi ===

// Module 9538 (ApplicationSubscriptionsHttpApi)
import DispatcherDefault from "Dispatcher" /* 573 */;
import APIErrorDefault from "APIError" /* 4462 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _getApplicationSubscriptionGroupListingsForApplication() {
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: Endpoints.APPLICATION_SUBSCRIPTION_GROUP_LISTING(closure_0, closure_1), rejectWithError: require("HTTPUtils").rejectWithMigratedError() });
  return value.body;
};
let closure_6 = async function _getEntitlementsForGuild() {
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.GUILD_ENTITLEMENTS(closure_0), query: { with_sku: true, with_application: true }, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
  await HTTP.get(request);
  return value.body;
};
let closure_7 = async function _getSubscriptionGroupForSubscriptionPlan() {
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: Endpoints.SUBSCRIPTION_PLAN_GROUP_LISTING(closure_0), rejectWithError: require("HTTPUtils").rejectWithMigratedError() });
  return value.body;
};
let closure_8 = async function _fetchEligibleApplicationSubscriptionGuilds() {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: constants.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS, query: { application_id, sku_id }, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    await HTTP.get(request);
    return value.body;
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsHttpApi.tsx");

export const getApplicationSubscriptionGroupListingsForApplication = function getApplicationSubscriptionGroupListingsForApplication() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getEntitlementsForGuild = function getEntitlementsForGuild() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getSubscriptionGroupForSubscriptionPlan = function getSubscriptionGroupForSubscriptionPlan() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchApplication = function fetchApplication(applicationId, signal) {
  _require = applicationId;
  let obj = { type: "APPLICATION_FETCH", applicationId };
  obj.dispatch(obj);
  const HTTP = require("HTTPUtils").HTTP;
  obj = { url: Endpoints.APPLICATION_PUBLIC(applicationId), signal, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
  value = HTTP.get(obj);
  const obj4 = require("HTTPUtils");
  return value.then((application) => {
    const obj = { type: "APPLICATION_FETCH_SUCCESS", application: application.body, isHydrated: true };
    obj.dispatch(obj);
    return application.body;
  }).catch((error) => {
    const obj = { type: "APPLICATION_FETCH_FAIL", applicationId };
    obj.dispatch(obj);
    return Promise.reject(new APIErrorDefault(error));
  });
};
export const fetchEligibleApplicationSubscriptionGuilds = function fetchEligibleApplicationSubscriptionGuilds() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};