// === Module 7499: GuildRoleSubscriptionsActionCreators ===

// Module 7499 (GuildRoleSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildRoleSubscriptionsHttpApiAll from "GuildRoleSubscriptionsHttpApi" /* 7500 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_7 = async function _fetchSubscriptionsSettings(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: GuildRoleSubscriptionsHttpApiAll.getGuildRoleSubscriptionsSettings(closure_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_0 = value;
        const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: closure_129_0 };
        closure_130_1(closure_130_3[4]).dispatch(obj7);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp15) {
      c4 = tmp;
      throw tmp15;
    }
  }
};
let closure_8 = async function _updateSubscriptionsSettings(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          c4 = 1;
          c5 = 1;
          const obj5 = { value: GuildRoleSubscriptionsHttpApiAll.updateGuildRoleSubscriptionsSettings(closure_0, closure_1), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_130_0 = value;
        const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings: closure_130_0 };
        closure_131_1(closure_131_3[4]).dispatch(obj7);
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp16) {
      c5 = tmp;
      throw tmp16;
    }
  }
};
let closure_9 = async function _fetchAllSubscriptionListingsDataForGuild(arg0) {
  if (c12 === 2) {
    c12 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c12 = 2;
      let tmp4 = c11;
      if (0 === c11) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_8 = tmp;
          closure_7 = tmp4;
          closure_135_1 = undefined;
          let countryCode;
          closure_135_0 = closure_0;
          let obj5 = closure_1;
          if (closure_1 === undefined) {
            obj5 = {};
          }
          let flag = obj5.includeSoftDeleted;
          if (flag === undefined) {
            flag = true;
          }
          closure_135_1 = flag;
          countryCode = obj5.countryCode;
          closure_135_3 = undefined;
          closure_135_4 = undefined;
          closure_135_5 = undefined;
          closure_135_6 = undefined;
          closure_135_7 = undefined;
          closure_135_8 = undefined;
          closure_135_9 = undefined;
          closure_135_10 = undefined;
          c11 = 1;
          c12 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          let obj7 = { value, done: true };
          return obj7;
        } else {
          let obj13 = closure_136_1(closure_136_3[4]);
          let obj8 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS", guildId: null };
          obj8.guildId = closure_135_0;
          let dispatchResult = obj13.dispatch(obj8);
          c10 = 1;
          let _Promise = Promise;
          let obj15 = closure_136_2(closure_136_3[3]);
          let obj9 = { includeSoftDeleted: null, countryCode: null };
          obj9.includeSoftDeleted = closure_135_1;
          obj9.countryCode = countryCode;
          let items = [obj15.getGuildRoleSubscriptionGroupListingsForGuild(closure_135_0, obj9), , , ];
          let obj17 = closure_136_2(closure_136_3[3]);
          items[1] = obj17.getGuildRoleSubscriptionsSettings(closure_135_0);
          let obj18 = closure_136_2(closure_136_3[3]);
          items[2] = obj18.getGuildRoleSubscriptionTrials(closure_135_0);
          let obj19 = closure_136_0(closure_136_3[5]);
          items[3] = obj19.fetchSubscriptions();
          c11 = 3;
          c12 = 1;
          let obj10 = { value: Promise.all(items), done: false };
          return obj10;
        }
      } else {
        if (2 === tmp4) {
          c10 = 0;
          let obj6 = closure_136_1(closure_136_3[4]);
          let obj11 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", guildId: null };
          obj11.guildId = closure_135_0;
          let dispatchResult1 = obj6.dispatch(obj11);
          c12 = 3;
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_135_3 = value;
            closure_135_4 = closure_136_4(closure_135_3, 3);
            closure_135_5 = closure_135_4[0];
            closure_135_6 = closure_135_4[1];
            closure_135_7 = closure_135_4[2];
            closure_3 = closure_135_5;
            importAll = closure_135_5[Symbol.iterator]();
            while (importAll !== undefined) {
              c10 = 2;
              closure_135_8 = tmp13;
              let subscription_listings = closure_135_8.subscription_listings;
              dependencyMap = subscription_listings;
              if (subscription_listings == null) {
                dependencyMap = [];
              }
              closure_6 = dependencyMap;
              asyncGeneratorStep = dependencyMap[Symbol.iterator]();
              while (asyncGeneratorStep !== undefined) {
                closure_135_9 = tmp18;
                let obj = closure_136_1(closure_136_3[4]);
                let obj12 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: null, subscriptionPlans: null };
                obj12.skuId = closure_135_9.id;
                obj12.subscriptionPlans = closure_135_9.subscription_plans;
                let dispatchResult2 = obj.dispatch(obj12);
                c10 = 2;
                continue;
              }
              c10 = 1;
              continue;
            }
            closure_135_10 = closure_135_5.flatMap((benefit_channels) => {
              benefit_channels = benefit_channels.benefit_channels;
              if (benefit_channels == null) {
                benefit_channels = [];
              }
              return benefit_channels;
            });
            let obj3 = closure_136_1(closure_136_3[4]);
            let obj14 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS", guildId: null, groupListings: null, benefitChannels: null, settings: null, subscriptionTrials: null };
            obj14.guildId = closure_135_0;
            obj14.groupListings = closure_135_5;
            obj14.benefitChannels = closure_135_10;
            obj14.settings = closure_135_6;
            obj14.subscriptionTrials = closure_135_7;
            let dispatchResult3 = obj3.dispatch(obj14);
            c10 = 0;
          }
        } else if (4 === tmp4) {
          c10 = 1;
          importAll.return();
          throw closure_1_9;
        } else {
          c10 = 2;
          asyncGeneratorStep.return();
          throw closure_1_9;
        }
        c10 = 0;
        c12 = 3;
        let obj16 = { value, done: true };
        return obj16;
      }
    }
  }
};
let closure_10 = async function _createSubscriptionGroupListing() {
  closure_3 = tmp5;
  closure_2 = tmp2;
  await GuildRoleSubscriptionsHttpApiAll.createGuildRoleSubscriptionGroupListing(closure_0, closure_1);
  closure_130_0 = value;
  closure_131_1(closure_131_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: closure_130_0 });
  return closure_130_0;
};
let closure_11 = async function _updateSubscriptionGroupListing() {
  closure_4 = tmp5;
  closure_3 = tmp2;
  await GuildRoleSubscriptionsHttpApiAll.updateGuildRoleSubscriptionGroupListing(closure_0, closure_1, closure_2);
  closure_131_0 = value;
  closure_132_1(closure_132_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: closure_131_0 });
  return closure_131_0;
};
let closure_12 = async function _deleteSubscriptionGroupListing() {
  closure_3 = tmp5;
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await GuildRoleSubscriptionsHttpApiAll.deleteGuildRoleSubscriptionGroupListing(closure_0, closure_1);
  closure_131_1(closure_131_3[4]).dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING", groupListingId: closure_130_0 });
  return true;
};
let closure_13 = async function _fetchSubscriptionListingForPlan() {
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c9 = 2;
        let tmp4 = c8;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = tmp;
            closure_4 = tmp4;
            closure_132_0 = planId;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            let obj10 = DispatcherDefault;
            let obj5 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId };
            let dispatchResult = obj10.dispatch(obj5);
            let obj12 = GuildRoleSubscriptionsHttpApiAll;
            c8 = 1;
            c9 = 1;
            let obj6 = { value: obj12.getGuildRoleSubscriptionGroupForSubscriptionPlan(planId), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              let obj7 = { value, done: true };
              return obj7;
            } else {
              closure_132_1 = value;
              let obj8 = closure_133_1(closure_133_3[4]);
              let obj9 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing: null };
              obj9.groupListing = closure_132_1;
              let dispatchResult1 = obj8.dispatch(obj9);
              let subscription_listings = closure_132_1.subscription_listings;
              closure_1 = subscription_listings;
              if (subscription_listings == null) {
                closure_1 = [];
              }
              closure_132_2 = closure_1;
              closure_3 = closure_132_2;
              closure_2 = closure_132_2[Symbol.iterator]();
              if (closure_2 === undefined) {
                c9 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                c7 = 1;
                closure_132_3 = tmp14;
                if (closure_132_3.subscription_plans[0].id === closure_132_0) {
                  let obj2 = closure_133_2(closure_133_3[6]);
                  let flag = true;
                  c8 = 3;
                  c9 = 1;
                  let obj11 = { value: obj2.fetchSubscriptionPlansForSKU(closure_132_3.id, undefined, undefined, true), done: false };
                  return obj11;
                }
              }
            }
          } else if (2 === tmp4) {
            c7 = 0;
            closure_2.return();
            throw closure_1_6;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            closure_2.return();
            c9 = 3;
            let obj = { value, done: true };
            return obj;
          }
          c7 = 0;
        }
      }
    }
  })();
};
let closure_14 = async function _deleteSubscriptionListing(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_2;
          c5 = 1;
          c6 = 1;
          const obj5 = { value: GuildRoleSubscriptionsHttpApiAll.deleteGuildRoleSubscriptionListing(closure_0, closure_1, closure_2), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING", listingId: closure_131_0 };
        closure_132_1(closure_132_3[4]).dispatch(obj7);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp17) {
      c6 = tmp;
      throw tmp17;
    }
  }
};
let closure_15 = async function _archiveSubscriptionListing(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          c5 = 1;
          c6 = 1;
          const obj5 = { value: GuildRoleSubscriptionsHttpApiAll.archiveGuildRoleSubscriptionListing(closure_0, closure_1, closure_2), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_131_0 = value;
        const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: closure_131_0 };
        closure_132_1(closure_132_3[4]).dispatch(obj7);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp17) {
      c6 = tmp;
      throw tmp17;
    }
  }
};
let closure_16 = async function _updateSubscriptionTrial(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          c5 = 1;
          c6 = 1;
          const obj5 = { value: GuildRoleSubscriptionsHttpApiAll.updateGuildRoleSubscriptionsTrial(closure_0, closure_1, closure_2), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_131_0 = value;
        const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL", subscriptionTrial: closure_131_0 };
        closure_132_1(closure_132_3[4]).dispatch(obj7);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp17) {
      c6 = tmp;
      throw tmp17;
    }
  }
};
function fetchGuildRoleSubscriptionGroupListing() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _fetchGuildRoleSubscriptionGroupListing(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let obj4 = closure_2;
          if (closure_2 === undefined) {
            obj4 = {};
          }
          closure_131_2 = obj4;
          closure_131_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 2;
          c6 = 1;
          const obj7 = { value: closure_132_2(closure_132_3[3]).getGuildRoleSubscriptionGroupListing(closure_131_0, closure_131_1, closure_131_2), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_131_3 = value;
        const obj9 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: closure_131_3 };
        closure_132_1(closure_132_3[4]).dispatch(obj9);
        c6 = 3;
        const obj10 = { value: closure_131_3, done: true };
        return obj10;
      }
    } catch (tmp21) {
      c6 = tmp;
      throw tmp21;
    }
  }
};
let closure_19 = async function _createSubscriptionListing(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({ guildId: closure_129_0, groupListingId: closure_129_1, data: closure_129_2, analyticsContext: closure_129_3, onBeforeDispatchNewListing: closure_129_4 } = closure_0);
          closure_129_5 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c3 = 2;
          c4 = 1;
          const obj5 = { value: closure_130_2(closure_130_3[3]).createGuildRoleSubscriptionListing(closure_129_0, closure_129_1, closure_129_2), done: false };
          return obj5;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_5 = value;
          const obj8 = { role_subscription_listing_id: closure_129_5.id, role_subscription_group_listing_id: closure_129_1, template_name: closure_129_3.templateCategory, has_change_from_template: closure_129_3.hasChangeFromTemplate };
          const obj12 = closure_130_1(closure_130_3[7]);
          const merged = Object.assign(closure_130_0(closure_130_3[8]).collectGuildAnalyticsMetadata(closure_129_0));
          obj12.track(closure_130_6.ROLE_SUBSCRIPTION_LISTING_CREATED, obj8);
          c3 = 3;
          c4 = 1;
          const obj9 = { value: closure_130_17(closure_129_0, closure_129_1, { includeArchivedListings: true }), done: false };
          return obj9;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        if (closure_129_4 != null) {
          tmp7(closure_129_5);
        }
        const obj11 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: closure_129_5 };
        closure_130_1(closure_130_3[4]).dispatch(obj11);
        c4 = 3;
        const obj13 = { value: closure_129_5, done: true };
        return obj13;
      }
    } catch (tmp26) {
      c4 = tmp;
      throw tmp26;
    }
  }
};
let closure_20 = async function _updateSubscriptionListing(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ guildId: closure_129_0, listingId: closure_129_1, groupListingId: closure_129_2, data: closure_129_3 } = closure_0);
          closure_129_4 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const obj7 = closure_130_2(closure_130_3[3]);
          c3 = 2;
          c4 = 1;
          const obj6 = { value: obj7.updateGuildRoleSubscriptionListing(closure_129_0, closure_129_2, closure_129_1, closure_129_3), done: false };
          return obj6;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_129_4 = value;
          const obj9 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: closure_129_4 };
          closure_130_1(closure_130_3[4]).dispatch(obj9);
          c3 = 3;
          c4 = 1;
          const obj10 = { value: closure_130_17(closure_129_0, closure_129_2, { includeArchivedListings: true }), done: false };
          return obj10;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        c4 = 3;
        const obj = { value: closure_129_4, done: true };
        return obj;
      }
    } catch (tmp26) {
      c4 = tmp;
      throw tmp26;
    }
  }
};
let closure_21 = async function _fetchMonetizationRestrictions(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          let signal;
          closure_131_0 = closure_0;
          let obj4 = closure_1;
          if (closure_1 === undefined) {
            obj4 = {};
          }
          signal = obj4.signal;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          let restrictions2;
          c7 = 1;
          c8 = 1;
          return { value: "flex", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_131_2 = false;
            closure_131_3 = 0;
            if (closure_131_3 >= 3) {
              if (!closure_131_2) {
                const obj8 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE", guildId: closure_131_0 };
                closure_132_1(closure_132_3[4]).dispatch(obj8);
                const obj7 = closure_132_1(closure_132_3[4]);
              }
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } else if (2 === tmp7) {
          c6 = 0;
          c7 = 3;
          c8 = 1;
          const obj9 = { value: closure_132_0(closure_132_3[9]).sleep((closure_131_3 + 1) * closure_132_1(closure_132_3[10]).Millis.SECOND), done: false };
          return obj9;
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_131_3 = closure_131_3 + 1;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          restrictions2 = value.restrictions;
          const obj13 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS", guildId: closure_131_0, restrictions: null };
          let restrictions = restrictions2;
          if (restrictions2 == null) {
            restrictions = [];
          }
          obj13.restrictions = restrictions;
          closure_132_1(closure_132_3[4]).dispatch(obj13);
          closure_131_2 = true;
          c6 = 0;
          const obj = closure_132_1(closure_132_3[4]);
        }
        c6 = 1;
        let aborted;
        if (signal != null) {
          aborted = signal.aborted;
        }
        const dispatch = closure_132_1(closure_132_3[4]).dispatch;
        if (aborted) {
          const obj14 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED", guildId: closure_131_0 };
          dispatch(obj14);
          c6 = 0;
          c8 = 3;
          const obj15 = { value: undefined, done: true };
          return obj15;
        } else {
          const obj16 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS", guildId: closure_131_0 };
          dispatch(obj16);
          const obj17 = { signal };
          c7 = 4;
          c8 = 1;
          const obj18 = { value: closure_132_2(closure_132_3[3]).getGuildMonetizationRestrictions(closure_131_0, obj17), done: false };
          return obj18;
        }
        const tmp40 = closure_132_1(closure_132_3[4]);
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
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx");

export const fetchSubscriptionsSettings = function fetchSubscriptionsSettings() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSubscriptionsSettings = function updateSubscriptionsSettings() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAllSubscriptionListingsDataForGuild = function fetchAllSubscriptionListingsDataForGuild() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createSubscriptionGroupListing = function createSubscriptionGroupListing() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSubscriptionGroupListing = function updateSubscriptionGroupListing() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteSubscriptionGroupListing = function deleteSubscriptionGroupListing() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSubscriptionListingForPlan = function fetchSubscriptionListingForPlan() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteSubscriptionListing = function deleteSubscriptionListing() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const archiveSubscriptionListing = function archiveSubscriptionListing() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSubscriptionTrial = function updateSubscriptionTrial() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchGuildRoleSubscriptionGroupListing };
export const createSubscriptionListing = function createSubscriptionListing() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateSubscriptionListing = function updateSubscriptionListing() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchMonetizationRestrictions = function fetchMonetizationRestrictions() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};