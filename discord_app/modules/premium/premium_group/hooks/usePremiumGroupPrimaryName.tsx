// discord_app/modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx
import UserUtils from "../../../../utils/UserUtils.tsx";
import usePremiumGroupMembershipDefault from "usePremiumGroupMembership.tsx";
import usePremiumGroupMembersDefault from "usePremiumGroupMembers.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx");

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
  const premiumGroupMembership = usePremiumGroupMembershipDefault({
    useCachedData: flag,
    fetch: flag2,
  }).premiumGroupMembership;
  let subscriptionId;
  if (premiumGroupMembership != null) {
    subscriptionId = premiumGroupMembership.subscriptionId;
  }
  if (subscriptionId == null) {
    subscriptionId = null;
  }
  const premiumGroupMembers = usePremiumGroupMembersDefault(subscriptionId, {
    useCachedData: flag,
    fetch: flag2,
  }).premiumGroupMembers;
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
    nameFromUserResult = UserUtils.nameFromUser(primary1);
  }
  return nameFromUserResult;
}
