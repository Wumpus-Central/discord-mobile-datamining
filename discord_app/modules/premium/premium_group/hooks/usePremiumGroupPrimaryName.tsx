// === Module 13611: usePremiumGroupPrimaryName ===

// Module 13611 (usePremiumGroupPrimaryName)
import c from "c" /* 576 */;
import UserUtils from "UserUtils" /* 4922 */;
import usePremiumGroupMembershipDefault from "usePremiumGroupMembership" /* 13612 */;
import usePremiumGroupMembersDefault from "usePremiumGroupMembers" /* 13616 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumGroupPrimaryName(arg0) {
  const cResult = c.c(10);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ useCachedData, fetch: _fetch } = tmp4);
  if (cResult[2] === (undefined === _fetch || _fetch)) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    const premiumGroupMembership = usePremiumGroupMembershipDefault(tmp7).premiumGroupMembership;
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp5) {
        let tmp9 = cResult[7];
      }
      let subscriptionId;
      if (premiumGroupMembership != null) {
        subscriptionId = premiumGroupMembership.subscriptionId;
      }
      if (subscriptionId == null) {
        subscriptionId = null;
      }
      const premiumGroupMembers = usePremiumGroupMembersDefault(subscriptionId, tmp9).premiumGroupMembers;
      let primary;
      if (premiumGroupMembers != null) {
        primary = premiumGroupMembers.primary;
      }
      if (cResult[8] !== primary) {
        let primary1;
        if (premiumGroupMembers != null) {
          primary1 = premiumGroupMembers.primary;
        }
        let nameFromUserResult = null;
        if (null != primary1) {
          let primary2;
          if (premiumGroupMembers != null) {
            primary2 = premiumGroupMembers.primary;
          }
          nameFromUserResult = UserUtils.nameFromUser(primary2);
          const tmpResult = UserUtils;
        }
        let primary3;
        if (premiumGroupMembers != null) {
          primary3 = premiumGroupMembers.primary;
        }
        cResult[8] = primary3;
        cResult[9] = nameFromUserResult;
        let tmp14 = nameFromUserResult;
      } else {
        tmp14 = cResult[9];
      }
      return tmp14;
    }
    const obj3 = { useCachedData: tmp5, fetch: tmp6 };
    cResult[5] = tmp6;
    cResult[6] = tmp5;
    cResult[7] = obj3;
    tmp9 = obj3;
  }
  const obj4 = { useCachedData: undefined === useCachedData || useCachedData, fetch: undefined === _fetch || _fetch };
  cResult[2] = undefined === _fetch || _fetch;
  cResult[3] = undefined === useCachedData || useCachedData;
  cResult[4] = obj4;
  tmp7 = obj4;
}) : (function usePremiumGroupPrimaryName() {
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
    nameFromUserResult = UserUtils.nameFromUser(primary1);
  }
  return nameFromUserResult;
});