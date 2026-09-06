// === Module 15214: subscriptionUtils ===

// Module 15214 (subscriptionUtils)
import _modDef38 from "module_38" /* 38 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/subscriptionUtils.tsx");

export const getRoleSubscriptionPlanId = function getRoleSubscriptionPlanId(items) {
  items = items.items;
  _modDef38(1 === items.length, "more than 1 subscription item for role subscription");
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
    _modDef38(items.length <= 1, "more than 1 renewal mutation for role subscription");
    let planId;
    if (items != null) {
      planId = items[0].planId;
    }
    return planId;
  }
};