// discord_app/modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx
const result = require("nameFromUser").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx");

export default function usePremiumGroupPrimaryName() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.useCachedData;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.fetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const premiumGroupMembership = require("usePremiumGroupMembership.tsx")({ useCachedData: flag, fetch: flag2 }).premiumGroupMembership;
  let subscriptionId;
  if (premiumGroupMembership != null) {
    subscriptionId = premiumGroupMembership.subscriptionId;
  }
  if (subscriptionId == null) {
    subscriptionId = null;
  }
  const premiumGroupMembers = require("usePremiumGroupMembers.tsx")(subscriptionId, { useCachedData: flag, fetch: flag2 }).premiumGroupMembers;
  let primary;
  if (premiumGroupMembers != null) {
    primary = premiumGroupMembers.primary;
  }
  let nameFromUserResult = null;
  if (null != primary) {
    let primary1;
    if (premiumGroupMembers != null) {
      primary1 = premiumGroupMembers.primary;
    }
    nameFromUserResult = require("../../../../utils/UserUtils.tsx") /* nameFromUser */.nameFromUser(primary1);
    const obj2 = require("../../../../utils/UserUtils.tsx") /* nameFromUser */;
  }
  return nameFromUserResult;
};