// === Module 13292: usePremiumGroupPrimaryName ===

// Module 13292 (usePremiumGroupPrimaryName)
import react from "react" /* 576 */;
import UserUtils from "UserUtils" /* 4722 */;
import usePremiumGroupMembershipDefault from "usePremiumGroupMembership" /* 13293 */;
import usePremiumGroupMembersDefault from "usePremiumGroupMembers" /* 13297 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _fetch;
  let tmp4;
  let useCachedData;
  const obj = react;
  const cResult = obj.c(10);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ useCachedData, fetch: _fetch } = tmp4);
  if (cResult[2] === (undefined === _fetch || _fetch)) {
    let tmp7;
    if (cResult[3] === (undefined === useCachedData || useCachedData)) {
      tmp7 = cResult[4];
    }
    const premiumGroupMembership = usePremiumGroupMembershipDefault(tmp7).premiumGroupMembership;
    if (cResult[5] === (undefined === _fetch || _fetch)) {
      let tmp9;
      let tmp15;
      if (cResult[6] === (undefined === useCachedData || useCachedData)) {
        tmp9 = cResult[7];
      }
      let subscriptionId;
      const tmp8Result = usePremiumGroupMembersDefault;
      if (premiumGroupMembership != null) {
        subscriptionId = premiumGroupMembership.subscriptionId;
      }
      if (subscriptionId == null) {
        subscriptionId = null;
      }
      const premiumGroupMembers = tmp8Result(subscriptionId, tmp9).premiumGroupMembers;
      let primary;
      const tmp13 = cResult[8];
      if (premiumGroupMembers != null) {
        primary = premiumGroupMembers.primary;
      }
      if (tmp13 !== primary) {
        let primary1;
        if (premiumGroupMembers != null) {
          primary1 = premiumGroupMembers.primary;
        }
        let nameFromUserResult = null;
        if (null != primary1) {
          let primary2;
          const nameFromUser = UserUtils.nameFromUser;
          UserUtils;
          if (premiumGroupMembers != null) {
            primary2 = premiumGroupMembers.primary;
          }
          nameFromUserResult = nameFromUser(primary2);
        }
        let primary3;
        if (premiumGroupMembers != null) {
          primary3 = premiumGroupMembers.primary;
        }
        cResult[8] = primary3;
        cResult[9] = nameFromUserResult;
        tmp15 = nameFromUserResult;
      } else {
        tmp15 = cResult[9];
      }
      return tmp15;
    }
    const obj3 = { useCachedData: undefined === useCachedData || useCachedData, fetch: undefined === _fetch || _fetch };
    cResult[5] = undefined === _fetch || _fetch;
    cResult[6] = undefined === useCachedData || useCachedData;
    cResult[7] = obj3;
    tmp9 = obj3;
  }
  const obj4 = { useCachedData: undefined === useCachedData || useCachedData, fetch: undefined === _fetch || _fetch };
  cResult[2] = undefined === _fetch || _fetch;
  cResult[3] = undefined === useCachedData || useCachedData;
  cResult[4] = obj4;
  tmp7 = obj4;
}) : (() => {
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
  const tmp2 = usePremiumGroupMembersDefault;
  if (premiumGroupMembership != null) {
    subscriptionId = premiumGroupMembership.subscriptionId;
  }
  if (subscriptionId == null) {
    subscriptionId = null;
  }
  const premiumGroupMembers = tmp2(subscriptionId, { useCachedData: flag, fetch: flag2 }).premiumGroupMembers;
  let primary;
  if (premiumGroupMembers != null) {
    primary = premiumGroupMembers.primary;
  }
  let nameFromUserResult = null;
  if (null != primary) {
    let primary1;
    const nameFromUser = UserUtils.nameFromUser;
    UserUtils;
    if (premiumGroupMembers != null) {
      primary1 = premiumGroupMembers.primary;
    }
    nameFromUserResult = nameFromUser(primary1);
  }
  return nameFromUserResult;
});
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupPrimaryName.tsx");

export default tmp2;