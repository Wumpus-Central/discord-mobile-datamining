// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx
import closure_4 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { AnalyticEvents } from "../../Constants.tsx";

const require = arg1;
function _fetchSubscriptionsSettings() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              const callback = tmp2;
              closure_0 = undefined;
              let obj3 = closure_1_2(6049);
              dependencyMap = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.getGuildRoleSubscriptionsSettings(closure_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            obj = callback(709);
            obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: null };
            obj3[1] = closure_0;
            obj.dispatch(obj3);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          c4 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateSubscriptionsSettings() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp5;
              closure_2 = tmp2;
              closure_0 = undefined;
              let obj3 = closure_1_2(closure_1_3[3]);
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.updateGuildRoleSubscriptionsSettings(closure_0, callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            obj = callback(table[4]);
            obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: null };
            obj3[1] = closure_0;
            obj.dispatch(obj3);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c5 = tmp;
          throw tmp16;
        }
      }
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
function _fetchAllSubscriptionListingsDataForGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c11 = 0;
    c12 = 0;
    c10 = 0;
    const iter = (function*(arg0) {
      if (c12 === 2) {
        c12 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
        while (true) {
          let num = 2;
          c12 = 2;
          let tmp4 = c11;
          if (0 === c11) {
            if (arg0 === 1) {
              let num9 = 3;
              c12 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num8 = 3;
              c12 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj = tmp;
              closure_7 = tmp4;
              let flag;
              let lib;
              let tmp80 = callback;
              obj1 = flag;
              if (flag === undefined) {
                obj1 = {};
              }
              flag = obj1.includeSoftDeleted;
              if (flag === undefined) {
                flag = true;
              }
              lib = obj1.countryCode;
              dependencyMap = undefined;
              let dependencyMap2;
              let lib2;
              closure_6 = undefined;
              closure_7 = undefined;
              obj = undefined;
              c9 = undefined;
              c10 = undefined;
              c11 = 1;
              let num7 = 1;
              c12 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              let num6 = 3;
              c12 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num5 = 3;
              c12 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              let tmp61 = closure_7;
              let tmp62 = obj;
              let tmp63 = flag;
              let tmp64 = dependencyMap;
              let obj13 = flag(709);
              let obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS", guildId: null };
              let tmp65 = callback;
              obj3[1] = callback;
              let dispatchResult = obj13.dispatch(obj3);
              let tmp67 = closure_7;
              let tmp68 = obj;
              c10 = 1;
              let _Promise = Promise;
              let tmp69 = lib;
              let tmp70 = dependencyMap;
              let obj15 = lib(6049);
              let tmp71 = callback;
              let obj4 = { includeSoftDeleted: null, countryCode: null };
              let tmp72 = flag;
              obj4[0] = flag;
              let tmp73 = lib;
              obj4[1] = lib;
              let items = [obj15.getGuildRoleSubscriptionGroupListingsForGuild(callback, obj4), , , ];
              let tmp74 = dependencyMap;
              let obj17 = lib(6049);
              let tmp75 = callback;
              items[1] = obj17.getGuildRoleSubscriptionsSettings(callback);
              let tmp76 = dependencyMap;
              let obj18 = lib(6049);
              let tmp77 = callback;
              items[2] = obj18.getGuildRoleSubscriptionTrials(callback);
              let tmp78 = callback;
              let tmp79 = dependencyMap;
              let obj19 = callback(4789);
              items[3] = obj19.fetchSubscriptions();
              c11 = 3;
              let num17 = 1;
              c12 = 1;
              let obj5 = { value: null, done: false };
              obj5[0] = Promise.all(items);
              return obj5;
            }
          } else {
            if (2 === tmp4) {
              let tmp37 = closure_7;
              let tmp38 = obj;
              let tmp39 = c9;
              c10 = 0;
              let tmp40 = flag;
              let tmp41 = dependencyMap;
              obj5 = flag(709);
              let obj6 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", guildId: null };
              let tmp42 = callback;
              obj6[1] = callback;
              let dispatchResult1 = obj5.dispatch(obj6);
              let num4 = 3;
              c12 = 3;
            } else if (3 === tmp4) {
              if (arg0 === 1) {
                let num3 = 3;
                c12 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                let tmp50 = closure_7;
                let tmp51 = obj;
                dependencyMap = arg1;
                let tmp52 = dependencyMap2;
                let tmp53 = dependencyMap;
                dependencyMap2 = dependencyMap2(dependencyMap, 3);
                let tmp54 = dependencyMap2;
                lib2 = 32;
                let tmp55 = dependencyMap2;
                closure_6 = 5;
                let tmp56 = dependencyMap2;
                closure_7 = 676;
                let tmp57 = lib2;
                dependencyMap = lib2;
                let tmp58 = lib2;
                dependencyMap = lib2;
                lib = lib2[Symbol.iterator]();
                let tmp11 = dependencyMap;
                let tmp12 = lib;
                while (lib !== undefined) {
                  let tmp59 = closure_7;
                  c10 = 2;
                  obj = tmp13;
                  let tmp60 = obj;
                  let subscription_listings = obj.subscription_listings;
                  dependencyMap2 = subscription_listings;
                  if (subscription_listings == null) {
                    dependencyMap2 = [];
                  }
                  let tmp14 = dependencyMap2;
                  closure_6 = dependencyMap2;
                  let tmp15 = dependencyMap2;
                  closure_6 = dependencyMap2;
                  lib2 = dependencyMap2[Symbol.iterator]();
                  let tmp16 = closure_6;
                  let tmp17 = lib2;
                  while (lib2 !== undefined) {
                    let tmp19 = closure_7;
                    let tmp20 = obj;
                    c10 = 3;
                    c9 = tmp18;
                    let tmp21 = flag;
                    let tmp22 = dependencyMap;
                    obj = flag(709);
                    let obj7 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: null, subscriptionPlans: null };
                    let tmp23 = c9;
                    obj7[1] = c9.id;
                    let tmp24 = c9;
                    obj7[2] = c9.subscription_plans;
                    let dispatchResult2 = obj.dispatch(obj7);
                    c10 = 2;
                    continue;
                  }
                  c10 = 1;
                  continue;
                }
                let tmp26 = closure_7;
                let tmp27 = obj;
                let tmp28 = lib2;
                c10 = lib2.flatMap((benefit_channels) => {
                  benefit_channels = benefit_channels.benefit_channels;
                  if (benefit_channels == null) {
                    benefit_channels = [];
                  }
                  return benefit_channels;
                });
                let tmp29 = flag;
                let tmp30 = dependencyMap;
                obj2 = flag(709);
                let obj8 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS", guildId: null, groupListings: null, benefitChannels: null, settings: null, subscriptionTrials: null };
                let tmp31 = callback;
                obj8[1] = callback;
                let tmp32 = lib2;
                obj8[2] = lib2;
                let tmp33 = c10;
                obj8[3] = c10;
                let tmp34 = closure_6;
                obj8[4] = closure_6;
                let tmp35 = closure_7;
                obj8[5] = closure_7;
                let dispatchResult3 = obj2.dispatch(obj8);
                c10 = 0;
              }
            } else if (4 === tmp4) {
              let tmp8 = c9;
              let tmp9 = c9;
              c10 = 1;
              let tmp10 = lib;
              lib.return();
              throw c9;
            } else {
              let tmp5 = c9;
              let tmp6 = c9;
              c10 = 2;
              let tmp7 = lib2;
              lib2.return();
              throw c9;
            }
            c10 = 0;
            let num2 = 3;
            c12 = 3;
            let obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createSubscriptionGroupListing() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      const table = tmp5;
      closure_2 = tmp2;
      const obj4 = closure_1_2(closure_1_3[3]);
      closure_0 = yield obj4.createGuildRoleSubscriptionGroupListing(closure_0, callback);
      const obj = callback(table[4]);
      const obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: null };
      obj3[1] = closure_0;
      obj.dispatch(obj3);
      return closure_0;
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateSubscriptionGroupListing() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      closure_4 = tmp5;
      const table = tmp2;
      const obj4 = callback2(closure_1_3[3]);
      closure_0 = yield obj4.updateGuildRoleSubscriptionGroupListing(closure_0, callback, callback2);
      const obj = callback(table[4]);
      const obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: null };
      obj3[1] = closure_0;
      obj.dispatch(obj3);
      return closure_0;
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteSubscriptionGroupListing() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      const table = tmp5;
      closure_2 = tmp2;
      closure_0 = callback;
      let obj3 = closure_1_2(closure_1_3[3]);
      yield obj3.deleteGuildRoleSubscriptionGroupListing(closure_0, callback);
      const obj = callback(table[4]);
      obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING", groupListingId: null };
      obj3[1] = closure_0;
      obj.dispatch(obj3);
      return true;
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSubscriptionListingForPlan() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
        while (true) {
          let num = 2;
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              let num8 = 3;
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num7 = 3;
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              let tmp37 = closure_0;
              let lib;
              let lib2;
              closure_3 = undefined;
              let tmp38 = closure_1_1;
              let tmp39 = closure_1_3;
              let obj10 = closure_1_1(closure_1_3[4]);
              obj1 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: null };
              obj1[1] = closure_0;
              let dispatchResult = obj10.dispatch(obj1);
              let tmp41 = closure_1_2;
              let tmp42 = closure_1_3;
              let obj12 = closure_1_2(closure_1_3[3]);
              c8 = 1;
              let num15 = 1;
              c9 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = obj12.getGuildRoleSubscriptionGroupForSubscriptionPlan(closure_0);
              return obj2;
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                let num6 = 3;
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                let num5 = 3;
                c9 = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                let tmp27 = closure_4;
                let tmp28 = closure_5;
                lib = arg1;
                let tmp29 = lib;
                let tmp30 = closure_3;
                let obj8 = lib(closure_3[4]);
                let obj4 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: null };
                let tmp31 = lib;
                obj4[1] = lib;
                let dispatchResult1 = obj8.dispatch(obj4);
                let tmp33 = lib;
                let subscription_listings = lib.subscription_listings;
                lib = subscription_listings;
                if (subscription_listings == null) {
                  lib = [];
                }
                let tmp8 = closure_4;
                let tmp9 = lib;
                lib2 = lib;
                let tmp10 = lib2;
                closure_3 = lib2;
                let tmp11 = lib2;
                closure_3 = lib2;
                lib2 = lib2[Symbol.iterator]();
                let tmp12 = closure_3;
                let tmp13 = lib2;
                if (lib2 === undefined) {
                  let num4 = 3;
                  c9 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  let tmp34 = closure_4;
                  c7 = 1;
                  closure_3 = tmp14;
                  let tmp35 = closure_3;
                  let tmp36 = closure_0;
                  if (closure_3.subscription_plans[0].id === closure_0) {
                    let tmp15 = closure_4;
                    let tmp16 = closure_5;
                    let tmp17 = lib2;
                    let tmp18 = closure_3;
                    obj1 = lib2(closure_3[6]);
                    let tmp19 = closure_3;
                    let tmp20 = obj1;
                    let flag = true;
                    c8 = 3;
                    let num3 = 1;
                    c9 = 1;
                    let obj5 = { value: null, done: false };
                    obj5[0] = obj1.fetchSubscriptionPlansForSKU(closure_3.id, undefined, undefined, true);
                    return obj5;
                  }
                }
              }
            } else if (2 === tmp4) {
              let tmp5 = closure_6;
              let tmp6 = closure_6;
              c7 = 0;
              let tmp7 = lib2;
              lib2.return();
              throw closure_6;
            } else if (arg0 === 1) {
              let num2 = 3;
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 0;
              let tmp26 = lib2;
              lib2.return();
              let num14 = 3;
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c7 = 0;
          }
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteSubscriptionListing() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              const table = tmp2;
              closure_0 = callback2;
              let obj3 = callback2(closure_1_3[3]);
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.deleteGuildRoleSubscriptionListing(closure_0, callback, callback2);
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = callback(table[4]);
            obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING", listingId: null };
            obj3[1] = closure_0;
            obj.dispatch(obj3);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _archiveSubscriptionListing() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              const table = tmp2;
              closure_0 = undefined;
              let obj3 = callback2(closure_1_3[3]);
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.archiveGuildRoleSubscriptionListing(closure_0, callback, callback2);
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            obj = callback(table[4]);
            obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: null };
            obj3[1] = closure_0;
            obj.dispatch(obj3);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateSubscriptionTrial() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              const table = tmp2;
              closure_0 = undefined;
              let obj3 = callback2(closure_1_3[3]);
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.updateGuildRoleSubscriptionsTrial(closure_0, callback, callback2);
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            obj = callback(table[4]);
            obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL", subscriptionTrial: null };
            obj3[1] = closure_0;
            obj.dispatch(obj3);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchGuildRoleSubscriptionGroupListing() {
  const self = this;
  const apply = _fetchGuildRoleSubscriptionGroupListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchGuildRoleSubscriptionGroupListing() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              dependencyMap = tmp2;
              obj1 = undefined;
              if (obj1 === undefined) {
                obj1 = {};
              }
              dependencyMap = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              let obj4 = obj1(6049);
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj4.getGuildRoleSubscriptionGroupListing(closure_0, callback, obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            dependencyMap = arg1;
            obj = callback(709);
            const obj5 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: null };
            obj5[1] = dependencyMap;
            obj.dispatch(obj5);
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = dependencyMap;
            return obj6;
          }
        } catch (tmp21) {
          c6 = tmp;
          throw tmp21;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createSubscriptionListing() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback3 = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              callback3 = undefined;
              c3 = undefined;
              c4 = undefined;
              ({ guildId: c0, groupListingId: c1, data: c2, analyticsContext: c3, onBeforeDispatchNewListing: c4 } = callback);
              let id;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj6 = callback3(c3[3]);
              c3 = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj6.createGuildRoleSubscriptionListing(callback, callback2, callback3);
              return obj2;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              id = arg1;
              const obj4 = { role_subscription_listing_id: null, role_subscription_group_listing_id: null, template_name: null, has_change_from_template: null };
              obj4[0] = id.id;
              obj4[1] = callback2;
              obj4[2] = c3.templateCategory;
              obj4[3] = c3.hasChangeFromTemplate;
              const obj12 = callback2(c3[7]);
              const merged = Object.assign(callback(c3[8]).collectGuildAnalyticsMetadata(callback));
              obj12.track(constants.ROLE_SUBSCRIPTION_LISTING_CREATED, obj4);
              c3 = 3;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = callback4(callback, callback2, { includeArchivedListings: true });
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            if (c4 != null) {
              tmp7(id);
            }
            obj = callback2(c3[4]);
            const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: null };
            obj7[1] = id;
            obj.dispatch(obj7);
            c4 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = id;
            return obj8;
          }
        } catch (tmp26) {
          c4 = tmp;
          throw tmp26;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateSubscriptionListing() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback2 = tmp5;
              let callback = tmp2;
              c0 = undefined;
              callback = undefined;
              callback2 = undefined;
              dependencyMap = undefined;
              ({ guildId: c0, listingId: c1, groupListingId: c2, data: c3 } = c0);
              c4 = undefined;
              dependencyMap = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj6 = callback2(6049);
              dependencyMap = 2;
              c4 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = obj6.updateGuildRoleSubscriptionListing(c0, callback2, callback, dependencyMap);
              return obj2;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              c4 = arg1;
              obj2 = callback(709);
              const obj4 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: null };
              obj4[1] = c4;
              obj2.dispatch(obj4);
              dependencyMap = 3;
              c4 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = callback3(c0, callback2, { includeArchivedListings: true });
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = c4;
            return obj;
          }
        } catch (tmp26) {
          c4 = tmp;
          throw tmp26;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchMonetizationRestrictions() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0, restrictions) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw restrictions;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = restrictions;
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
              throw restrictions;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = restrictions;
              return obj;
            } else {
              restrictions = tmp3;
              dependencyMap = tmp7;
              let signal;
              obj1 = signal;
              if (signal === undefined) {
                obj1 = {};
              }
              signal = obj1.signal;
              let callback2;
              dependencyMap = undefined;
              restrictions = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw restrictions;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = restrictions;
                return obj2;
              } else {
                callback2 = false;
                dependencyMap = 0;
                if (dependencyMap >= 3) {
                  if (!callback2) {
                    let obj6 = signal(709);
                    const obj3 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE", guildId: null };
                    obj3[1] = callback;
                    obj6.dispatch(obj3);
                  }
                  c8 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            } else if (2 === tmp7) {
              c6 = 0;
              let obj4 = callback(4522);
              c7 = 3;
              c8 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = obj4.sleep((dependencyMap + 1) * signal(687).Millis.SECOND);
              return obj4;
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw restrictions;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = restrictions;
                return obj5;
              } else {
                dependencyMap = dependencyMap + 1;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw restrictions;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              obj6 = { value: null, done: true };
              obj6[0] = restrictions;
              return obj6;
            } else {
              restrictions = restrictions.restrictions;
              obj = signal(709);
              const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS", guildId: null, restrictions: null };
              obj7[1] = callback;
              callback2 = restrictions;
              if (restrictions == null) {
                callback2 = [];
              }
              obj7[2] = callback2;
              obj.dispatch(obj7);
              callback2 = true;
              c6 = 0;
            }
            c6 = 1;
            let aborted;
            if (signal != null) {
              aborted = signal.aborted;
            }
            const dispatch = signal(709).dispatch;
            if (aborted) {
              const obj8 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED", guildId: null };
              obj8[1] = callback;
              dispatch(obj8);
              c6 = 0;
              c8 = 3;
              let obj9 = { value: null, done: true };
              obj9[0] = undefined;
              return obj9;
            } else {
              const obj10 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS", guildId: null };
              obj10[1] = callback;
              dispatch(obj10);
              obj9 = callback2(6049);
              const obj11 = { signal: null };
              obj11[0] = signal;
              c7 = 4;
              c8 = 1;
              const obj12 = { value: null, done: false };
              obj12[0] = obj9.getGuildMonetizationRestrictions(callback, obj11);
              return obj12;
            }
            const tmp40 = signal(709);
          }
        } catch (tmp50) {
          closure_5 = tmp50;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp50;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx");

export const fetchSubscriptionsSettings = function fetchSubscriptionsSettings(closure_0) {
  const self = this;
  const apply = _fetchSubscriptionsSettings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSubscriptionsSettings = function updateSubscriptionsSettings(closure_0, closure_1) {
  const self = this;
  const apply = _updateSubscriptionsSettings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAllSubscriptionListingsDataForGuild = function fetchAllSubscriptionListingsDataForGuild(arg0, arg1) {
  const self = this;
  const apply = _fetchAllSubscriptionListingsDataForGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createSubscriptionGroupListing = function createSubscriptionGroupListing() {
  const self = this;
  const apply = _createSubscriptionGroupListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSubscriptionGroupListing = function updateSubscriptionGroupListing(closure_0, closure_1, closure_2) {
  const self = this;
  const apply = _updateSubscriptionGroupListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteSubscriptionGroupListing = function deleteSubscriptionGroupListing() {
  const self = this;
  const apply = _deleteSubscriptionGroupListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSubscriptionListingForPlan = function fetchSubscriptionListingForPlan() {
  const self = this;
  const apply = _fetchSubscriptionListingForPlan.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteSubscriptionListing = function deleteSubscriptionListing() {
  const self = this;
  const apply = _deleteSubscriptionListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const archiveSubscriptionListing = function archiveSubscriptionListing() {
  const self = this;
  const apply = _archiveSubscriptionListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSubscriptionTrial = function updateSubscriptionTrial(c0, closure_1, closure_2) {
  const self = this;
  const apply = _updateSubscriptionTrial.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchGuildRoleSubscriptionGroupListing };
export const createSubscriptionListing = function createSubscriptionListing(arg0) {
  const self = this;
  const apply = _createSubscriptionListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSubscriptionListing = function updateSubscriptionListing(arg0) {
  const self = this;
  const apply = _updateSubscriptionListing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchMonetizationRestrictions = function fetchMonetizationRestrictions(id, arg1) {
  const self = this;
  const apply = _fetchMonetizationRestrictions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};