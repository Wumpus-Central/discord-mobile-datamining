// discord_app/modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import ApplicationSubscriptionsHttpApiAll from "ApplicationSubscriptionsHttpApi.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

function transformSubscriptionListingToSku(id) {
  return {
    id: id.id,
    type: constants2.SUBSCRIPTION,
    application_id: id.application_id,
    product_line: constants.APPLICATION,
    name: id.name,
    summary: "",
    description: id.description,
    flags: id.sku_flags,
    manifests: [],
    available_regions: [],
    legal_notice: "",
    deleted: id.soft_deleted,
    price_tier: 0,
    show_age_gate: false,
    restricted: false,
  };
}
function transformSubscriptionListingToStoreListing(id) {
  let obj = {
    id: id.id,
    sku: null,
    summary: id.description,
    description: id.description,
    benefits: null,
    thumbnail: null,
    published: null,
  };
  obj = {
    id: id.id,
    type: constants2.SUBSCRIPTION,
    application_id: id.application_id,
    product_line: constants.APPLICATION,
    name: id.name,
    summary: "",
    description: id.description,
    flags: id.sku_flags,
    manifests: [],
    available_regions: [],
    legal_notice: "",
    deleted: id.soft_deleted,
    price_tier: 0,
    show_age_gate: false,
    restricted: false,
  };
  obj.sku = obj;
  let prop = id.store_listing_benefits;
  if (prop == null) {
    prop = [];
  }
  obj.benefits = prop;
  ({ image_asset: obj.thumbnail, published: obj.published } = id);
  return obj;
}
function dispatchCompat(arr) {
  let obj = { type: "SKUS_FETCH_SUCCESS", skus: arr.map(transformSubscriptionListingToSku) };
  obj.dispatch(obj);
  obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: arr.map(transformSubscriptionListingToStoreListing) };
  DispatcherDefault.dispatch(obj);
  const iter = arr[Symbol.iterator]();
  while (iter !== undefined) {
    let obj5 = DispatcherDefault;
    let obj1 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: null, subscriptionPlans: null };
    ({ id: obj6.skuId, subscription_plans: obj6.subscriptionPlans } = nextResult);
    let dispatchResult2 = obj5.dispatch(obj1);
    continue;
  }
}
let closure_9 = async function _fetchAllSubscriptionListingsDataForApplication(applicationId, groupListingId) {
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    closure_4 = tmp3;
    closure_131_0 = applicationId;
    DispatcherDefault.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS", applicationId, groupListingId });
    await ApplicationSubscriptionsHttpApiAll.getApplicationSubscriptionGroupListingsForApplication(
      applicationId,
      groupListingId,
    );
    closure_132_0(closure_132_2[2]).dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
      applicationId: closure_131_0,
    });
    closure_131_1 = await "HermesInternal";
    closure_132_0(closure_132_2[2]).dispatch({
      type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
      applicationId: closure_131_0,
      groupListing: closure_131_1,
    });
    const subscription_listings = closure_131_1.subscription_listings;
    closure_2 = subscription_listings;
    if (subscription_listings == null) {
      closure_2 = [];
    }
    closure_132_8(closure_2);
    return closure_131_1;
  })();
};
let closure_10 = async function _fetchEntitlementsForGuild(guildId) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp3;
    closure_129_0 = guildId;
    DispatcherDefault.dispatch({ type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS", guildId });
    await ApplicationSubscriptionsHttpApiAll.getEntitlementsForGuild(guildId);
    if (1 === tmp7) {
      c4 = 0;
      closure_130_0(closure_130_2[2]);
      const obj3 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE", guildId: closure_129_0 };
      obj3.dispatch(obj3);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_1 = value;
      closure_130_0(closure_130_2[2]).dispatch({
        type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
        guildId: closure_129_0,
        entitlements: closure_129_1,
      });
      c4 = 0;
      closure_130_0(closure_130_2[2]);
    }
    return value;
  })();
};
function fetchSubscriptionListingForPlan() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _fetchSubscriptionListingForPlan(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_0 = closure_0;
          let num13 = closure_1;
          if (closure_1 === undefined) {
            num13 = 0;
          }
          closure_131_1 = num13;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const obj2 = { type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN", planId: closure_131_0 };
          closure_132_0(closure_132_2[2]).dispatch(obj2);
          c6 = 1;
          const obj12 = closure_132_0(closure_132_2[2]);
          c7 = 3;
          c8 = 1;
          const obj3 = {
            value: closure_132_1(closure_132_2[3]).getSubscriptionGroupForSubscriptionPlan(closure_131_0),
            done: false,
          };
          return obj3;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_4 = closure_5;
        if ("status" in closure_131_4) {
          if (429 === closure_131_4.status) {
            if (closure_131_1 < 10) {
              const sum = closure_131_1 + 1;
              closure_131_1 = sum;
              c7 = 5;
              c8 = 1;
              const obj4 = { value: closure_132_11(closure_131_0, sum), done: false };
              return obj4;
            }
          }
        }
        throw closure_131_4;
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_131_2 = value;
          const obj6 = {
            type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
            groupListing: closure_131_2,
          };
          closure_132_0(closure_132_2[2]).dispatch(obj6);
          const subscription_listings = closure_131_2.subscription_listings;
          closure_2 = subscription_listings;
          if (subscription_listings == null) {
            closure_2 = [];
          }
          closure_131_3 = closure_2;
          c7 = 4;
          c8 = 1;
          const obj7 = {
            value: Promise.all(
              closure_131_3.map((id) => {
                if (id.subscription_plans[0].id === closure_1_0) {
                  const obj = closure_1(closure_2[4]);
                  return obj.fetchSubscriptionPlansForSKU(id.id, undefined, undefined, true);
                }
              }),
            ),
            done: false,
          };
          return obj7;
        }
      } else {
        if (4 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_132_8(closure_131_3);
            c6 = 0;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp33) {
      closure_5 = tmp33;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp33;
      } else {
        c7 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ SKUProductLines: closure_4, SKUTypes: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx");

export const fetchAllSubscriptionListingsDataForApplication =
  function fetchAllSubscriptionListingsDataForApplication() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
export const fetchEntitlementsForGuild = function fetchEntitlementsForGuild() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dismissApplicationSubscriptionExpirationNotice = function dismissApplicationSubscriptionExpirationNotice(
  guildId,
) {
  const obj = { type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED", guildId };
  obj.dispatch(obj);
};
export { fetchSubscriptionListingForPlan };
