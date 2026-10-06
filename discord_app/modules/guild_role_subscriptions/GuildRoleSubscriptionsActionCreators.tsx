// === Module 6768: GuildRoleSubscriptionsActionCreators ===

// Module 6768 (GuildRoleSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import GuildRoleSubscriptionsHttpApiAll from "GuildRoleSubscriptionsHttpApi" /* 6769 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let benefit_channels, c11, c12, groupListing, groupListingId, listing, listingId, subscriptionTrial;

let obj = function _fetchSubscriptionsSettings() {
  obj = _asyncToGenerator(async (settings) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj4;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              closure_1 = tmp;
              settings = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj4.getGuildRoleSubscriptionsSettings(settings), done: false };
              obj4 = GuildRoleSubscriptionsHttpApiAll;
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            settings = value;
            const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings };
            obj = closure_130_1(closure_130_3[4]);
            obj.dispatch(obj7);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _updateSubscriptionsSettings() {
  obj = _asyncToGenerator(async (settings, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              settings = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj4.updateGuildRoleSubscriptionsSettings(settings, closure_1), done: false };
              obj4 = GuildRoleSubscriptionsHttpApiAll;
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            settings = value;
            const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS", settings };
            obj = closure_131_1(closure_131_3[4]);
            obj.dispatch(obj7);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          c5 = 3;
          throw tmp15;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchAllSubscriptionListingsDataForGuild() {
  obj = _asyncToGenerator(async (guildId) => {
    let closure_1 = arg1;
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let subscriptionTrials;
        let flag;
        let countryCode;
        let closure_3;
        let closure_4;
        let groupListings;
        let settings;
        let c8;
        let c9;
        let benefitChannels;
        c12 = 2;
        let tmp4 = c11;
        if (0 === c11) {
          if (guildId === 1) {
            c12 = 3;
            throw value;
          } else if (guildId === 2) {
            c12 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_8 = tmp;
            subscriptionTrials = tmp4;
            flag = undefined;
            countryCode = undefined;
            let obj5 = closure_1;
            if (closure_1 === undefined) {
              obj5 = {};
            }
            flag = obj5.includeSoftDeleted;
            if (flag === undefined) {
              flag = true;
            }
            countryCode = obj5.countryCode;
            closure_3 = undefined;
            closure_4 = undefined;
            groupListings = undefined;
            settings = undefined;
            subscriptionTrials = undefined;
            c8 = undefined;
            c9 = undefined;
            benefitChannels = undefined;
            c11 = 1;
            c12 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp4) {
          if (guildId === 1) {
            c12 = 3;
            throw value;
          } else if (guildId === 2) {
            c12 = 3;
            let obj7 = { value, done: true };
            return obj7;
          } else {
            let obj13 = closure_136_1(closure_136_3[4]);
            let obj8 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS", guildId };
            let dispatchResult = obj13.dispatch(obj8);
            let c10 = 1;
            let _Promise = Promise;
            let obj15 = closure_136_2(closure_136_3[3]);
            let obj9 = { includeSoftDeleted: flag, countryCode };
            let items = [obj15.getGuildRoleSubscriptionGroupListingsForGuild(guildId, obj9), , , ];
            let obj17 = closure_136_2(closure_136_3[3]);
            items[1] = obj17.getGuildRoleSubscriptionsSettings(guildId);
            let obj18 = closure_136_2(closure_136_3[3]);
            items[2] = obj18.getGuildRoleSubscriptionTrials(guildId);
            let obj19 = closure_136_0(closure_136_3[5]);
            items[3] = obj19.fetchSubscriptions();
            c11 = 3;
            c12 = 1;
            let obj10 = { value: all(items), done: false };
            return obj10;
          }
        } else {
          if (2 === tmp4) {
            c10 = 0;
            let obj6 = closure_136_1(closure_136_3[4]);
            let obj11 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", guildId };
            let dispatchResult1 = obj6.dispatch(obj11);
          } else {
            let closure_2;
            if (3 === tmp4) {
              if (guildId === 1) {
                c12 = 3;
                throw value;
              } else if (guildId === 2) {
                c10 = 0;
                c12 = 3;
                let obj12 = { value, done: true };
                return obj12;
              } else {
                closure_3 = value;
                closure_4 = closure_136_4(closure_3, 3);
                groupListings = closure_4[0];
                settings = closure_4[1];
                subscriptionTrials = closure_4[2];
                closure_3 = groupListings;
                closure_2 = groupListings[Symbol.iterator]();
                while (closure_2 !== undefined) {
                  c10 = 2;
                  c8 = tmp13;
                  let subscription_listings = c8.subscription_listings;
                  closure_4 = subscription_listings;
                  if (subscription_listings == null) {
                    closure_4 = [];
                  }
                  settings = closure_4;
                  groupListings = closure_4[Symbol.iterator]();
                  while (groupListings !== undefined) {
                    c9 = tmp18;
                    obj = closure_136_1(closure_136_3[4]);
                    let obj14 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: c9.id, subscriptionPlans: c9.subscription_plans };
                    let dispatchResult2 = obj.dispatch(obj14);
                    c10 = 2;
                    continue;
                  }
                  c10 = 1;
                  continue;
                }
                benefitChannels = groupListings.flatMap((benefit_channels) => {
                  benefit_channels = benefit_channels.benefit_channels;
                  if (benefit_channels == null) {
                    benefit_channels = [];
                  }
                  return benefit_channels;
                });
                let obj3 = closure_136_1(closure_136_3[4]);
                let obj16 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS", guildId, groupListings, benefitChannels, settings, subscriptionTrials };
                let dispatchResult3 = obj3.dispatch(obj16);
                c10 = 0;
              }
            } else if (4 === tmp4) {
              c10 = 1;
              closure_2.return();
              throw closure_1_9;
            } else {
              c10 = 2;
              groupListings.return();
              throw closure_1_9;
            }
          }
          c12 = 3;
          return { value: "IconComponent", done: null };
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _createSubscriptionGroupListing() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0;
    let obj5;
    let value;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            let closure_3 = tmp4;
            let closure_2 = tmp;
            value = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj5.createGuildRoleSubscriptionGroupListing(value, closure_1), done: false };
            obj5 = GuildRoleSubscriptionsHttpApiAll;
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: value };
          obj = closure_131_1(closure_131_3[4]);
          obj.dispatch(obj7);
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        }
      } catch (tmp15) {
        c5 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
obj = function _updateSubscriptionGroupListing() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0;
    let obj5;
    let value;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            let closure_4 = tmp4;
            let closure_3 = tmp;
            value = undefined;
            c5 = 1;
            c6 = 1;
            const obj4 = { value: obj5.updateGuildRoleSubscriptionGroupListing(value, closure_1, closure_2), done: false };
            obj5 = GuildRoleSubscriptionsHttpApiAll;
            return obj4;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: value };
          obj = closure_132_1(closure_132_3[4]);
          obj.dispatch(obj7);
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        }
      } catch (tmp16) {
        c6 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _deleteSubscriptionGroupListing() {
  obj = _asyncToGenerator(async (groupListingId, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              groupListingId = closure_1;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj4.deleteGuildRoleSubscriptionGroupListing(groupListingId, closure_1), done: false };
              obj4 = GuildRoleSubscriptionsHttpApiAll;
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING", groupListingId };
            obj = closure_131_1(closure_131_3[4]);
            obj.dispatch(obj7);
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp15) {
          c5 = 3;
          throw tmp15;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchSubscriptionListingForPlan() {
  obj = _asyncToGenerator(async (planId) => {
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0) => {
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let c3;
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
              groupListing = undefined;
              closure_2 = undefined;
              c3 = undefined;
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
                groupListing = value;
                let obj8 = closure_133_1(closure_133_3[4]);
                let obj9 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing };
                let dispatchResult1 = obj8.dispatch(obj9);
                let subscription_listings = groupListing.subscription_listings;
                groupListing = subscription_listings;
                if (subscription_listings == null) {
                  groupListing = [];
                }
                closure_2 = groupListing;
                closure_3 = closure_2;
                closure_2 = closure_2[Symbol.iterator]();
                if (closure_2 === undefined) {
                  c9 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  c7 = 1;
                  c3 = tmp14;
                  if (c3.subscription_plans[0].id === planId) {
                    let obj2 = closure_133_2(closure_133_3[6]);
                    let flag = true;
                    c8 = 3;
                    c9 = 1;
                    let obj11 = { value: obj2.fetchSubscriptionPlansForSKU(c3.id, undefined, undefined, true), done: false };
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
              obj = { value, done: true };
              return obj;
            }
            c7 = 0;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _deleteSubscriptionListing() {
  obj = _asyncToGenerator(async (listingId, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              listingId = closure_2;
              c5 = 1;
              c6 = 1;
              const obj5 = { value: obj4.deleteGuildRoleSubscriptionListing(listingId, closure_1, closure_2), done: false };
              obj4 = GuildRoleSubscriptionsHttpApiAll;
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING", listingId };
            obj = closure_132_1(closure_132_3[4]);
            obj.dispatch(obj7);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c6 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _archiveSubscriptionListing() {
  obj = _asyncToGenerator(async (listing, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              listing = undefined;
              c5 = 1;
              c6 = 1;
              const obj5 = { value: obj4.archiveGuildRoleSubscriptionListing(listing, closure_1, closure_2), done: false };
              obj4 = GuildRoleSubscriptionsHttpApiAll;
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            listing = value;
            const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing };
            obj = closure_132_1(closure_132_3[4]);
            obj.dispatch(obj7);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c6 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _updateSubscriptionTrial() {
  obj = _asyncToGenerator(async (subscriptionTrial, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              subscriptionTrial = undefined;
              c5 = 1;
              c6 = 1;
              const obj5 = { value: obj4.updateGuildRoleSubscriptionsTrial(subscriptionTrial, closure_1, closure_2), done: false };
              obj4 = GuildRoleSubscriptionsHttpApiAll;
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            subscriptionTrial = value;
            const obj7 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL", subscriptionTrial };
            obj = closure_132_1(closure_132_3[4]);
            obj.dispatch(obj7);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          c6 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchGuildRoleSubscriptionGroupListing() {
  return obj(...arguments);
}
obj = function _fetchGuildRoleSubscriptionGroupListing() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_3;
    let obj5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let obj4;
        let tmp;
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
            let closure_4 = tmp4;
            obj4 = closure_2;
            if (closure_2 === undefined) {
              obj4 = {};
            }
            tmp = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
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
            const obj7 = { value: obj5.getGuildRoleSubscriptionGroupListing(closure_0, closure_1, obj4), done: false };
            obj5 = closure_132_2(closure_132_3[3]);
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
          tmp = value;
          const obj9 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING", listing: tmp };
          obj = closure_132_1(closure_132_3[4]);
          obj.dispatch(obj9);
          c6 = 3;
          const obj10 = { value: tmp, done: true };
          return obj10;
        }
      } catch (tmp20) {
        c6 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
obj = function _createSubscriptionListing() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let obj7;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let role_subscription_group_listing_id;
        let id;
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
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            role_subscription_group_listing_id = undefined;
            c2 = undefined;
            ({ guildId: c0, groupListingId: c1, data: c2, analyticsContext: c3, onBeforeDispatchNewListing: c4 } = closure_0);
            id = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
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
            const obj5 = { value: obj7.createGuildRoleSubscriptionListing(c0, role_subscription_group_listing_id, c2), done: false };
            obj7 = closure_130_2(closure_130_3[3]);
            return obj5;
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            id = value;
            const obj8 = { role_subscription_listing_id: id.id, role_subscription_group_listing_id, template_name: c3.templateCategory, has_change_from_template: c3.hasChangeFromTemplate };
            const track = closure_130_1(closure_130_3[7]).track;
            const ROLE_SUBSCRIPTION_LISTING_CREATED = closure_130_6.ROLE_SUBSCRIPTION_LISTING_CREATED;
            const tmp33 = closure_130_1(closure_130_3[7]);
            const obj13 = closure_130_0(closure_130_3[8]);
            const merged = Object.assign(obj13.collectGuildAnalyticsMetadata(c0));
            track(ROLE_SUBSCRIPTION_LISTING_CREATED, obj8);
            c3 = 3;
            c4 = 1;
            const obj9 = { value: closure_130_17(c0, role_subscription_group_listing_id, { includeArchivedListings: true }), done: false };
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
          if (c4 != null) {
            tmp6(id);
          }
          const obj11 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: id };
          obj = closure_130_1(closure_130_3[4]);
          obj.dispatch(obj11);
          c4 = 3;
          const obj12 = { value: id, done: true };
          return obj12;
        }
      } catch (tmp25) {
        c4 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
obj = function _updateSubscriptionListing() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let value;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            ({ guildId: c0, listingId: c1, groupListingId: c2, data: c3 } = closure_0);
            value = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
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
            const obj6 = { value: obj7.updateGuildRoleSubscriptionListing(c0, c2, c1, c3), done: false };
            return obj6;
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj9 = { type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING", listing: value };
            const obj3 = closure_130_1(closure_130_3[4]);
            obj3.dispatch(obj9);
            c3 = 3;
            c4 = 1;
            const obj10 = { value: closure_130_17(c0, c2, { includeArchivedListings: true }), done: false };
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
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp25) {
        c4 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchMonetizationRestrictions() {
  obj = _asyncToGenerator(async (guildId) => {
    let obj4;
    let obj9;
    let closure_1 = arg1;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let closure_3;
        let signal;
        let c2;
        let restrictions;
        c8 = 2;
        if (0 === c7) {
          if (guildId === 1) {
            c8 = 3;
            throw value;
          } else if (guildId === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            closure_3 = tmp4;
            signal = undefined;
            let obj5 = closure_1;
            if (closure_1 === undefined) {
              obj5 = {};
            }
            signal = obj5.signal;
            c2 = undefined;
            closure_3 = undefined;
            restrictions = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === c7) {
            if (guildId === 1) {
              c8 = 3;
              throw value;
            } else if (guildId === 2) {
              c8 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              c2 = false;
              closure_3 = 0;
              if (closure_3 >= 3) {
                const tmp27 = c2;
                if (!tmp27) {
                  const obj8 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE", guildId };
                  const obj6 = closure_132_1(closure_132_3[4]);
                  obj6.dispatch(obj8);
                }
                c8 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } else if (2 === c7) {
            c6 = 0;
            c7 = 3;
            c8 = 1;
            const obj10 = { value: obj4.sleep((closure_3 + 1) * closure_132_1(closure_132_3[10]).Millis.SECOND), done: false };
            obj4 = closure_132_0(closure_132_3[9]);
            return obj10;
          } else if (3 === c7) {
            if (guildId === 1) {
              c8 = 3;
              throw value;
            } else if (guildId === 2) {
              c8 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              closure_3 = closure_3 + 1;
            }
          } else if (guildId === 1) {
            c8 = 3;
            throw value;
          } else if (guildId === 2) {
            c6 = 0;
            c8 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            restrictions = value.restrictions;
            obj = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS", guildId, restrictions };
            const dispatch = closure_132_1(closure_132_3[4]).dispatch;
            const tmp9 = closure_132_1(closure_132_3[4]);
            if (restrictions == null) {
              restrictions = [];
            }
            dispatch(obj);
            c2 = true;
            c6 = 0;
          }
          c6 = 1;
          let aborted;
          if (signal != null) {
            aborted = signal.aborted;
          }
          const dispatch2 = closure_132_1(closure_132_3[4]).dispatch;
          const tmp38 = closure_132_1(closure_132_3[4]);
          if (aborted) {
            const obj13 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED", guildId };
            dispatch2(obj13);
            c6 = 0;
            c8 = 3;
            const obj14 = { value: undefined, done: true };
            return obj14;
          } else {
            const obj15 = { type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS", guildId };
            dispatch2(obj15);
            const obj16 = { signal };
            c7 = 4;
            c8 = 1;
            const obj17 = { value: obj9.getGuildMonetizationRestrictions(guildId, obj16), done: false };
            obj9 = closure_132_2(closure_132_3[3]);
            return obj17;
          }
        }
      } catch (tmp48) {
        let closure_5 = tmp48;
        if (0 === c6) {
          c8 = 3;
          throw tmp48;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx");

export const fetchSubscriptionsSettings = function fetchSubscriptionsSettings() {
  return obj(...arguments);
};
export const updateSubscriptionsSettings = function updateSubscriptionsSettings() {
  return obj(...arguments);
};
export const fetchAllSubscriptionListingsDataForGuild = function fetchAllSubscriptionListingsDataForGuild() {
  return obj(...arguments);
};
export const createSubscriptionGroupListing = function createSubscriptionGroupListing() {
  return obj(...arguments);
};
export const updateSubscriptionGroupListing = function updateSubscriptionGroupListing() {
  return obj(...arguments);
};
export const deleteSubscriptionGroupListing = function deleteSubscriptionGroupListing() {
  return obj(...arguments);
};
export const fetchSubscriptionListingForPlan = function fetchSubscriptionListingForPlan() {
  return obj(...arguments);
};
export const deleteSubscriptionListing = function deleteSubscriptionListing() {
  return obj(...arguments);
};
export const archiveSubscriptionListing = function archiveSubscriptionListing() {
  return obj(...arguments);
};
export const updateSubscriptionTrial = function updateSubscriptionTrial() {
  return obj(...arguments);
};
export { fetchGuildRoleSubscriptionGroupListing };
export const createSubscriptionListing = function createSubscriptionListing() {
  return obj(...arguments);
};
export const updateSubscriptionListing = function updateSubscriptionListing() {
  return obj(...arguments);
};
export const fetchMonetizationRestrictions = function fetchMonetizationRestrictions() {
  return obj(...arguments);
};