// === Module 12638: _updateGuildRoleSubscriptionGroupListing ===

// Module 12638 (_updateGuildRoleSubscriptionGroupListing)
import set from "set";
import { Endpoints } from "ME";
import { PriceTierTypes } from "sum";

const require = arg1;
function _updateGuildRoleSubscriptionGroupListing() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let set = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_4 = tmp3;
              let closure_3 = tmp7;
              let c6 = 1;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(callback, dependencyMap);
              obj1[1] = set;
              obj1[2] = callback(530).rejectWithMigratedError();
              c7 = 2;
              c8 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.patch(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            callback = closure_5;
            const aPIError = new callback(4092).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          closure_5 = tmp19;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp19;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _updateGuildRoleSubscriptionGroupListing = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createGuildRoleSubscriptionGroupListing() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_3 = tmp3;
              let set = tmp7;
              let c5 = 1;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(callback);
              obj1[1] = dependencyMap;
              obj1[2] = callback(530).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            callback = closure_4;
            const aPIError = new callback(4092).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          closure_4 = tmp19;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp19;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _createGuildRoleSubscriptionGroupListing = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteGuildRoleSubscriptionGroupListing() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp3;
              let set = tmp7;
              let c5 = 1;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(callback, dependencyMap);
              obj1[1] = callback(530).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            callback = closure_4;
            const aPIError = new callback(4092).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          closure_4 = tmp19;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp19;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _deleteGuildRoleSubscriptionGroupListing = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createGuildRoleSubscriptionListing() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let set = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_4 = tmp3;
              let closure_3 = tmp5;
              let priceTier;
              closure_3 = undefined;
              priceTier = priceTier.priceTier;
              closure_3 = Object.assign(priceTier, Object.create(null));
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              let c6 = 1;
              const HTTP = callback(530).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: null };
              obj3[0] = closure_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(callback, dependencyMap);
              const obj4 = {};
              const merged = Object.assign(closure_3);
              obj4.price_tier = priceTier;
              obj3[1] = obj4;
              obj3[2] = callback(530).rejectWithMigratedError();
              c7 = 3;
              c8 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.post(obj3);
              return obj5;
            }
          } else if (2 === tmp8) {
            c6 = 0;
            closure_4 = closure_5;
            const aPIError = new callback(4092).APIError(closure_4);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp24) {
          closure_5 = tmp24;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp24;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _createGuildRoleSubscriptionListing = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateGuildRoleSubscriptionListing() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let set = arg2;
    let closure_3 = arg3;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    const iter = (function*(arg0, body) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw body;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_5 = tmp3;
              let closure_4 = tmp5;
              let priceTier;
              closure_4 = undefined;
              priceTier = priceTier.priceTier;
              closure_4 = Object.assign(priceTier, Object.create(null));
              c8 = 1;
              c9 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw body;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              let c7 = 1;
              const HTTP = callback(530).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: null };
              obj3[0] = priceTier.GUILD_ROLE_SUBSCRIPTION_LISTINGS(callback, dependencyMap, set);
              const obj4 = {};
              const merged = Object.assign(closure_4);
              obj4.price_tier = priceTier;
              obj3[1] = obj4;
              obj3[2] = callback(530).rejectWithMigratedError();
              c8 = 3;
              c9 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.patch(obj3);
              return obj5;
            }
          } else if (2 === tmp8) {
            c7 = 0;
            closure_5 = closure_6;
            const aPIError = new callback(4092).APIError(closure_5);
            throw aPIError;
          } else if (arg0 === 1) {
            c9 = 3;
            throw body;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            c7 = 0;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp25) {
          closure_6 = tmp25;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp25;
          } else {
            c8 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _updateGuildRoleSubscriptionListing = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGuildRoleSubscriptionGroupListingsForGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_3 = tmp3;
              let obj3 = tmp7;
              let obj1;
              if (obj1 === undefined) {
                obj1 = { includeSoftDeleted: false };
              }
              obj3 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              obj3 = { include_soft_deleted: null, country_code: null };
              obj3[0] = obj1.includeSoftDeleted;
              obj3[1] = obj1.countryCode;
              let c5 = 1;
              const HTTP = callback(obj1[3]).HTTP;
              const obj4 = { url: null, query: null, rejectWithError: null };
              obj4[0] = closure_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(callback);
              obj4[1] = obj3;
              obj4[2] = callback(obj1[3]).rejectWithMigratedError();
              c6 = 3;
              c7 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.get(obj4);
              return obj5;
            }
          } else if (2 === tmp7) {
            c5 = 0;
            closure_3 = closure_4;
            const aPIError = new callback(obj1[4]).APIError(closure_3);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp20) {
          closure_4 = tmp20;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp20;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _getGuildRoleSubscriptionGroupListingsForGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGuildRoleSubscriptionsSettings() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
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
          if (0 === c2) {
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
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(callback);
              let obj3 = callback(530);
              obj1[1] = obj3.rejectWithMigratedError();
              c2 = 1;
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
            obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp9) {
          dependencyMap = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const _getGuildRoleSubscriptionsSettings = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateGuildRoleSubscriptionsSettings() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_3 = tmp3;
              let set = tmp7;
              let c5 = 1;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(callback);
              obj1[1] = dependencyMap;
              obj1[2] = callback(530).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.patch(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            callback = closure_4;
            const aPIError = new callback(4092).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          closure_4 = tmp19;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp19;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _updateGuildRoleSubscriptionsSettings = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getPriceTiers() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let set = tmp3;
              const table = tmp7;
              let constants = 1;
              const HTTP = callback(outer1_1[3]).HTTP;
              const obj1 = { url: null, query: null, rejectWithError: null };
              obj1[0] = outer1_3.PRICE_TIERS;
              const obj2 = { price_tier_type: null, guild_id: null };
              obj2[0] = constants.GUILD_ROLE_SUBSCRIPTIONS;
              obj2[1] = callback;
              obj1[1] = obj2;
              obj1[2] = callback(outer1_1[3]).rejectWithMigratedError();
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            constants = 0;
            callback = closure_3;
            const aPIError = new callback(table[4]).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            constants = 0;
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            constants = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (tmp4 === constants) {
            c6 = tmp2;
            throw tmp19;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _getPriceTiers = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGuildRoleSubscriptionGroupListing() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let set = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_4 = tmp3;
              let closure_3 = tmp5;
              let obj1;
              if (obj1 === undefined) {
                obj1 = {};
              }
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              let c6 = 1;
              const HTTP = callback(530).HTTP;
              const obj3 = { url: null, query: null, rejectWithError: null };
              obj3[0] = closure_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(callback, dependencyMap);
              const obj4 = { include_draft_listings: null, include_archived_listings: null };
              obj4[0] = obj1.includeDraftListings;
              obj4[1] = obj1.includeArchivedListings;
              obj3[1] = obj4;
              obj3[2] = callback(530).rejectWithMigratedError();
              c7 = 3;
              c8 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.get(obj3);
              return obj5;
            }
          } else if (2 === tmp8) {
            c6 = 0;
            closure_3 = closure_5;
            const aPIError = new callback(4092).APIError(closure_3);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp22) {
          closure_5 = tmp22;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp22;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _getGuildRoleSubscriptionGroupListing = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGuildRoleSubscriptionGroupForSubscriptionPlan() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let set = tmp3;
              const table = tmp7;
              let c4 = 1;
              const HTTP = callback(outer1_1[3]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_3.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(callback);
              obj1[1] = callback(outer1_1[3]).rejectWithMigratedError();
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback = closure_3;
            const aPIError = new callback(table[4]).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp19;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _getGuildRoleSubscriptionGroupForSubscriptionPlan = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteGuildRoleSubscriptionListing() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let set = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_4 = tmp3;
              let closure_3 = tmp7;
              let c6 = 1;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(callback, dependencyMap, set);
              obj1[1] = callback(530).rejectWithMigratedError();
              c7 = 2;
              c8 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            callback = closure_5;
            const aPIError = new callback(4092).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          closure_5 = tmp19;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp19;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _deleteGuildRoleSubscriptionListing = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _archiveGuildRoleSubscriptionListing() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let set = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_4 = tmp3;
              let closure_3 = tmp7;
              let c6 = 1;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(callback, dependencyMap, set);
              obj1[1] = callback(530).rejectWithMigratedError();
              c7 = 2;
              c8 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            callback = closure_5;
            const aPIError = new callback(4092).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          closure_5 = tmp19;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp19;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _archiveGuildRoleSubscriptionListing = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGuildRoleSubscriptionTrials() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let set = tmp3;
              const table = tmp7;
              let c4 = 1;
              const HTTP = callback(outer1_1[3]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTION_TRIALS(callback);
              obj1[1] = callback(outer1_1[3]).rejectWithMigratedError();
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback = closure_3;
            const aPIError = new callback(table[4]).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp19;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _getGuildRoleSubscriptionTrials = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateGuildRoleSubscriptionsTrial() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let set = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_4 = tmp3;
              let closure_3 = tmp7;
              let c6 = 1;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(callback, dependencyMap);
              obj1[1] = set;
              obj1[2] = callback(530).rejectWithMigratedError();
              c7 = 2;
              c8 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.patch(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            callback = closure_5;
            const aPIError = new callback(4092).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          closure_5 = tmp19;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp19;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _updateGuildRoleSubscriptionsTrial = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGuildRoleSubscriptionTrialEligibility() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let set = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_4 = tmp3;
              let closure_3 = tmp7;
              let c6 = 1;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(callback, dependencyMap, set);
              obj1[1] = callback(530).rejectWithMigratedError();
              c7 = 2;
              c8 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            callback = closure_5;
            const aPIError = new callback(4092).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          closure_5 = tmp19;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp19;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _getGuildRoleSubscriptionTrialEligibility = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGuildMonetizationRestrictions() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_3 = tmp3;
              let set = tmp5;
              let signal;
              let obj1 = signal;
              if (signal === undefined) {
                obj1 = {};
              }
              signal = obj1.signal;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              let c5 = 1;
              const HTTP = callback(signal[3]).HTTP;
              const obj3 = { url: null, signal: null, rejectWithError: null };
              obj3[0] = closure_3.CREATOR_MONETIZATION_RESTRICTIONS(callback);
              obj3[1] = signal;
              obj3[2] = callback(signal[3]).rejectWithMigratedError();
              c6 = 3;
              c7 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj3);
              return obj4;
            }
          } else if (2 === tmp8) {
            c5 = 0;
            set = closure_4;
            const aPIError = new callback(signal[4]).APIError(set);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp21) {
          closure_4 = tmp21;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp21;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _getGuildMonetizationRestrictions = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchHighlightedCreatorGuildDetails() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp3;
              let set = tmp7;
              let lib;
              let c5 = 1;
              const HTTP = lib(outer1_1[3]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = outer1_3.GUILD_DISCOVERY_SLUG(lib);
              obj1[1] = lib(outer1_1[3]).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            let table = closure_4;
            const aPIError = new lib(table[4]).APIError(table);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            const body = lib.body;
            table = body;
            if (body == null) {
              const _JSON = JSON;
              table = JSON.parse(lib.text);
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = table;
            return obj;
          }
        } catch (tmp23) {
          closure_4 = tmp23;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp23;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _fetchHighlightedCreatorGuildDetails = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sum").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx");

export const updateGuildRoleSubscriptionGroupListing = function updateGuildRoleSubscriptionGroupListing(closure_0, closure_1, set) {
  const self = this;
  const apply = _updateGuildRoleSubscriptionGroupListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createGuildRoleSubscriptionGroupListing = function createGuildRoleSubscriptionGroupListing(closure_0, closure_1) {
  const self = this;
  const apply = _createGuildRoleSubscriptionGroupListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteGuildRoleSubscriptionGroupListing = function deleteGuildRoleSubscriptionGroupListing(closure_0, closure_1) {
  const self = this;
  const apply = _deleteGuildRoleSubscriptionGroupListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createGuildRoleSubscriptionListing = function createGuildRoleSubscriptionListing(c0, c1, c2) {
  const self = this;
  const apply = _createGuildRoleSubscriptionListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildRoleSubscriptionListing = function updateGuildRoleSubscriptionListing(c0, c2, c1, c3) {
  const self = this;
  const apply = _updateGuildRoleSubscriptionListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionGroupListingsForGuild = function getGuildRoleSubscriptionGroupListingsForGuild(closure_0, arg1) {
  const self = this;
  const apply = _getGuildRoleSubscriptionGroupListingsForGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionsSettings = function getGuildRoleSubscriptionsSettings(closure_0) {
  const self = this;
  const apply = _getGuildRoleSubscriptionsSettings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildRoleSubscriptionsSettings = function updateGuildRoleSubscriptionsSettings(closure_0, closure_1) {
  const self = this;
  const apply = _updateGuildRoleSubscriptionsSettings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPriceTiers = function getPriceTiers(outer1_0) {
  const self = this;
  const apply = _getPriceTiers.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionGroupListing = function getGuildRoleSubscriptionGroupListing(closure_0, closure_1, arg2) {
  const self = this;
  const apply = _getGuildRoleSubscriptionGroupListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionGroupForSubscriptionPlan = function getGuildRoleSubscriptionGroupForSubscriptionPlan(closure_0) {
  const self = this;
  const apply = _getGuildRoleSubscriptionGroupForSubscriptionPlan.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteGuildRoleSubscriptionListing = function deleteGuildRoleSubscriptionListing(closure_0, closure_1, set) {
  const self = this;
  const apply = _deleteGuildRoleSubscriptionListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const archiveGuildRoleSubscriptionListing = function archiveGuildRoleSubscriptionListing(closure_0, closure_1, set) {
  const self = this;
  const apply = _archiveGuildRoleSubscriptionListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionTrials = function getGuildRoleSubscriptionTrials(closure_0) {
  const self = this;
  const apply = _getGuildRoleSubscriptionTrials.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildRoleSubscriptionsTrial = function updateGuildRoleSubscriptionsTrial(closure_0, closure_1, set) {
  const self = this;
  const apply = _updateGuildRoleSubscriptionsTrial.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionTrialEligibility = function getGuildRoleSubscriptionTrialEligibility() {
  const self = this;
  const apply = _getGuildRoleSubscriptionTrialEligibility.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildMonetizationRestrictions = function getGuildMonetizationRestrictions(closure_0, arg1) {
  const self = this;
  const apply = _getGuildMonetizationRestrictions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchHighlightedCreatorGuildDetails = function fetchHighlightedCreatorGuildDetails(closure_0) {
  const self = this;
  const apply = _fetchHighlightedCreatorGuildDetails.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};