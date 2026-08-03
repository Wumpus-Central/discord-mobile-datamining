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
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw body;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_4.APPLICATION_SUBSCRIPTION_GROUP_LISTING(callback, closure_1);
              obj1[1] = callback(530).rejectWithMigratedError();
              c3 = 1;
              dependencyMap = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw body;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp5) {
          dependencyMap = tmp;
          throw tmp5;
        }
      }
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
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c1 = 3;
              throw body;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, query: null, rejectWithError: null };
              obj1[0] = outer1_4.GUILD_ENTITLEMENTS(callback);
              obj1[1] = { with_sku: true, with_application: true };
              obj1[2] = callback(530).rejectWithMigratedError();
              dependencyMap = 1;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw body;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
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
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c1 = 3;
              throw body;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_4.SUBSCRIPTION_PLAN_GROUP_LISTING(callback);
              let obj3 = callback(530);
              obj1[1] = obj3.rejectWithMigratedError();
              dependencyMap = 1;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw body;
          } else if (arg0 === 2) {
            c1 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp9) {
          c1 = tmp;
          throw tmp9;
        }
      }
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
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw body;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, query: null, rejectWithError: null };
              obj1[0] = outer1_4.ELIGIBLE_APPLICATION_SUBSCRIPTION_GUILDS;
              const obj2 = { application_id: null, sku_id: null };
              obj2[0] = callback;
              obj2[1] = closure_1;
              obj1[1] = obj2;
              obj1[2] = callback(530).rejectWithMigratedError();
              c3 = 1;
              dependencyMap = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw body;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp5) {
          dependencyMap = tmp;
          throw tmp5;
        }
      }
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