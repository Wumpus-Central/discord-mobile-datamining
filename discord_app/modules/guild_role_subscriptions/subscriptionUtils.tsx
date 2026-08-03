// === Module 14317: getRoleSubscriptionPlanId ===

// Module 14317 (getRoleSubscriptionPlanId)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/subscriptionUtils.tsx");

export const getRoleSubscriptionPlanId = function getRoleSubscriptionPlanId(items) {
  items = items.items;
  importDefault(38)(1 === items.length, "more than 1 subscription item for role subscription");
  return items[0].planId;
};
export const getRoleSubscriptionMutationPlanId = function getRoleSubscriptionMutationPlanId(renewalMutations) {
  let items;
  if (renewalMutations != null) {
    renewalMutations = renewalMutations.renewalMutations;
    if (renewalMutations != null) {
      items = renewalMutations.items;
    }
  }
  if (null != items) {
    importDefault(38)(items.length <= 1, "more than 1 renewal mutation for role subscription");
    let planId;
    if (items != null) {
      planId = items[0].planId;
    }
    return planId;
  }
};