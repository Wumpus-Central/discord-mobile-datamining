// === Module 12918: usePremiumGroupPrimaryName ===

// Module 12918 (usePremiumGroupPrimaryName)
import set from "set" /* 2 */;
import nameFromUser from "nameFromUser" /* 4219 */;
import usePremiumGroupMembershipDefault from "usePremiumGroupMembership" /* 12919 */;
import usePremiumGroupMembersDefault from "usePremiumGroupMembers" /* 12923 */;

const result = set.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx");

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
  const premiumGroupMembership = usePremiumGroupMembershipDefault({ useCachedData: flag, fetch: flag2 }).premiumGroupMembership;
  let subscriptionId;
  if (premiumGroupMembership != null) {
    subscriptionId = premiumGroupMembership.subscriptionId;
  }
  if (subscriptionId == null) {
    subscriptionId = null;
  }
  const premiumGroupMembers = usePremiumGroupMembersDefault(subscriptionId, { useCachedData: flag, fetch: flag2 }).premiumGroupMembers;
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
    nameFromUserResult = nameFromUser.nameFromUser(primary1);
    const obj2 = nameFromUser;
  }
  return nameFromUserResult;
};