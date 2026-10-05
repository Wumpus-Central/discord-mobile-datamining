// === Module 14336: ApplicationSubscriptionsActionCreators ===

// Module 14336 (ApplicationSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ApplicationSubscriptionsHttpApiAll from "ApplicationSubscriptionsHttpApi" /* 9005 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_2, closure_5, entitlements;

let closure_4;
let hasOwnProperty;
function transformSubscriptionListingToSku(id) {
  return { id: id.id, type: hasOwnProperty.SUBSCRIPTION, application_id: id.application_id, product_line: constants.APPLICATION, name: id.name, summary: "", description: id.description, flags: id.sku_flags, manifests: [], available_regions: [], legal_notice: "", deleted: id.soft_deleted, price_tier: 0, show_age_gate: false, restricted: false };
}
function transformSubscriptionListingToStoreListing(id) {
  let obj2;
  let prop;
  obj = { id: id.id, sku: obj2, summary: id.description, description: id.description, benefits: prop, thumbnail: null, published: null };
  prop = id.store_listing_benefits;
  obj2 = { id: id.id, type: hasOwnProperty.SUBSCRIPTION, application_id: id.application_id, product_line: constants.APPLICATION, name: id.name, summary: "", description: id.description, flags: id.sku_flags, manifests: [], available_regions: [], legal_notice: "", deleted: id.soft_deleted, price_tier: 0, show_age_gate: false, restricted: false };
  if (prop == null) {
    prop = [];
  }
  ({ image_asset: obj.thumbnail, published: obj.published } = id);
  return obj;
}
function dispatchCompat(arr) {
  obj = DispatcherDefault;
  const obj2 = { type: "SKUS_FETCH_SUCCESS", skus: arr.map(transformSubscriptionListingToSku) };
  obj.dispatch(obj2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: arr.map(transformSubscriptionListingToStoreListing) };
  obj3.dispatch(obj4);
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj5 = DispatcherDefault;
    let obj9 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: null, subscriptionPlans: null };
    ({ id: obj6.skuId, subscription_plans: obj6.subscriptionPlans } = nextResult);
    let dispatchResult2 = obj5.dispatch(obj9);
    continue;
  }
}
let obj = function _fetchAllSubscriptionListingsDataForApplication() {
  obj = _asyncToGenerator(async (applicationId, arg1) => {
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj12;
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              value = undefined;
              const obj5 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId, groupListingId: value };
              const obj10 = DispatcherDefault;
              obj10.dispatch(obj5);
              c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj6 = { value: obj12.getApplicationSubscriptionGroupListingsForApplication(applicationId, value), done: false };
              obj12 = ApplicationSubscriptionsHttpApiAll;
              return obj6;
            }
          } else if (1 === c7) {
            c6 = 0;
            const obj7 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE", applicationId };
            const obj3 = closure_132_0(closure_132_2[2]);
            obj3.dispatch(obj7);
            c8 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            const obj11 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS", applicationId, groupListing: value };
            const obj8 = closure_132_0(closure_132_2[2]);
            obj8.dispatch(obj11);
            const subscription_listings = value.subscription_listings;
            closure_2 = subscription_listings;
            if (subscription_listings == null) {
              closure_2 = [];
            }
            closure_132_8(closure_2);
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          }
        } catch (tmp15) {
          closure_5 = tmp15;
          if (0 === c6) {
            c8 = 3;
            throw tmp15;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchEntitlementsForGuild() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj11;
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
              closure_2 = tmp;
              entitlements = undefined;
              const obj5 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: obj11.getEntitlementsForGuild(guildId), done: false };
              obj11 = ApplicationSubscriptionsHttpApiAll;
              return obj6;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj7 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId };
              const obj4 = closure_130_0(closure_130_2[2]);
              obj4.dispatch(obj7);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              entitlements = value;
              const obj10 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS", guildId, entitlements };
              obj = closure_130_0(closure_130_2[2]);
              obj.dispatch(obj10);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (0 === c4) {
            c6 = 3;
            throw tmp19;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchSubscriptionListingForPlan() {
  return obj(...arguments);
}
obj = function _fetchSubscriptionListingForPlan() {
  obj = _asyncToGenerator(async (planId) => {
    let obj14;
    let closure_1 = arg1;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (planId === 1) {
        throw value;
      } else if (planId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let status;
        let closure_3;
        let num13;
        let groupListing;
        c8 = 2;
        if (0 === c7) {
          if (planId === 1) {
            c8 = 3;
            throw value;
          } else if (planId === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            status = tmp;
            closure_3 = tmp4;
            num13 = closure_1;
            if (closure_1 === undefined) {
              num13 = 0;
            }
            groupListing = undefined;
            closure_3 = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
          if (planId === 1) {
            c8 = 3;
            throw value;
          } else if (planId === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj5 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId };
            const obj12 = closure_132_0(closure_132_2[2]);
            obj12.dispatch(obj5);
            c6 = 1;
            c7 = 3;
            c8 = 1;
            const obj6 = { value: obj14.getSubscriptionGroupForSubscriptionPlan(planId), done: false };
            obj14 = closure_132_1(closure_132_2[3]);
            return obj6;
          }
        } else if (2 === c7) {
          c6 = 0;
          status = closure_5;
          if ("status" in status) {
            if (429 === status.status) {
              if (num13 < 10) {
                const sum = num13 + 1;
                num13 = sum;
                c7 = 5;
                c8 = 1;
                const obj7 = { value: closure_132_11(planId, sum), done: false };
                return obj7;
              }
            }
          }
          throw status;
        } else if (3 === c7) {
          if (planId === 1) {
            c8 = 3;
            throw value;
          } else if (planId === 2) {
            c6 = 0;
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            groupListing = value;
            const obj9 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS", groupListing };
            const obj10 = closure_132_0(closure_132_2[2]);
            obj10.dispatch(obj9);
            const subscription_listings = groupListing.subscription_listings;
            groupListing = subscription_listings;
            if (subscription_listings == null) {
              groupListing = [];
            }
            closure_3 = groupListing;
            c7 = 4;
            c8 = 1;
            const obj11 = {
              value: Promise.all(closure_3.map((id) => {
                        if (id.subscription_plans[0].id === planId) {
                          obj = closure_1(groupListing[4]);
                          return obj.fetchSubscriptionPlansForSKU(id.id, undefined, undefined, true);
                        }
                      })),
              done: false
            };
            return obj11;
          }
        } else {
          if (4 === c7) {
            if (planId === 1) {
              c8 = 3;
              throw value;
            } else if (planId === 2) {
              c6 = 0;
              c8 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              closure_132_8(closure_3);
              c6 = 0;
            }
          } else if (planId === 1) {
            c8 = 3;
            throw value;
          } else if (planId === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp30) {
        closure_5 = tmp30;
        if (0 === c6) {
          c8 = 3;
          throw tmp30;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
({ SKUProductLines: closure_4, SKUTypes: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx");

export const fetchAllSubscriptionListingsDataForApplication = function fetchAllSubscriptionListingsDataForApplication() {
  return obj(...arguments);
};
export const fetchEntitlementsForGuild = function fetchEntitlementsForGuild() {
  return obj(...arguments);
};
export const dismissApplicationSubscriptionExpirationNotice = function dismissApplicationSubscriptionExpirationNotice(guildId) {
  obj = DispatcherDefault;
  const obj2 = { type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId };
  obj.dispatch(obj2);
};
export { fetchSubscriptionListingForPlan };