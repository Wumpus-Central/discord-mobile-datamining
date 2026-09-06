// === Module 13489: PremiumGroupStore ===

// Module 13489 (PremiumGroupStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import PremiumGroupActionCreators from "PremiumGroupActionCreators" /* 13490 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

require = fn;
function handleMutationStart() {
  closure_7.membersData.isUpdating = true;
}
function handleMutationSuccess(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  DispatcherDefault.wait(() => {
    const subscriptionGroupMembers = PremiumGroupActionCreators.fetchSubscriptionGroupMembers(subscriptionId);
    return subscriptionGroupMembers.catch(NOOP_NULL);
  });
  closure_7.membersData.isUpdating = false;
}
function handleMutationFailure() {
  closure_7.membersData.isUpdating = false;
}
const PremiumGroupConstants = fn(4232);
({ PremiumGroupAPIErrorCodes: closure_4, TOTAL_PREMIUM_GROUP_MEMBER_SEATS: hasOwnProperty } = PremiumGroupConstants);
const NOOP_NULL = fn(1074).NOOP_NULL;
let closure_7 = { membersData: { data: null, isFetching: false, isUpdating: false }, membershipData: { data: null, isFetching: false, hasFetched: false } };
const Store = initializeDefault.Store;
class PremiumGroupStore extends Store {
}
const prototype = PremiumGroupStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(SubscriptionStore);
};
prototype["getMembers"] = function getMembers() {
  return closure_7.membersData.data;
};
prototype["isFetchingMembers"] = function isFetchingMembers() {
  return closure_7.membersData.isFetching;
};
prototype["isUpdatingMembers"] = function isUpdatingMembers() {
  return closure_7.membersData.isUpdating;
};
prototype["hasFetchedMembers"] = function hasFetchedMembers() {
  return null !== closure_7.membersData.data;
};
prototype["getMembership"] = function getMembership() {
  return closure_7.membershipData.data;
};
prototype["isFetchingMembership"] = function isFetchingMembership() {
  return closure_7.membershipData.isFetching;
};
prototype["hasFetchedMembership"] = function hasFetchedMembership() {
  return null !== closure_7.membershipData.data;
};
prototype["getNumUsedSeats"] = function getNumUsedSeats() {
  let num = 0;
  if (null != closure_7.membersData.data) {
    num = closure_7.membersData.data.members.length;
  }
  return num;
};
prototype["getNumAvailableInvites"] = function getNumAvailableInvites() {
  if (null == closure_7.membersData.data) {
    return hasOwnProperty;
  } else {
    const _Math = Math;
    return Math.max(0, hasOwnProperty - (closure_7.membersData.data.members.length + closure_7.membersData.data.invitedUsers.length));
  }
};
prototype["getNumTotalSeats"] = function getNumTotalSeats() {
  return hasOwnProperty;
};
PremiumGroupStore.displayName = "PremiumGroupStore";
const premiumGroupStore = new PremiumGroupStore(DispatcherDefault, {
  PREMIUM_GROUP_MEMBERS_REQUEST: function handleMembersRequest(subscriptionId) {
    subscriptionId = subscriptionId.subscriptionId;
    const isFetching = closure_7.membersData.isFetching;
    let flag = !isFetching;
    if (!isFetching) {
      DispatcherDefault.wait(() => {
        const subscriptionGroupMembers = PremiumGroupActionCreators.fetchSubscriptionGroupMembers(subscriptionId);
        return subscriptionGroupMembers.catch(NOOP_NULL);
      });
      flag = true;
    }
    return flag;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_START: function handleMembersFetchStart() {
    closure_7.membersData.isFetching = true;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function handleMembersFetchSuccess(members) {
    closure_7.membersData.data = members.members;
    closure_7.membersData.isFetching = false;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function handleMembersFetchFailure() {
    closure_7.membersData.isFetching = false;
  },
  PREMIUM_GROUP_MEMBERSHIP_REQUEST: function handleMembershipRequest() {
    const isFetching = closure_7.membershipData.isFetching;
    let flag = !isFetching;
    if (!isFetching) {
      DispatcherDefault.wait(() => {
        const premiumGroupMembership = PremiumGroupActionCreators.fetchPremiumGroupMembership();
        return premiumGroupMembership.catch(NOOP_NULL);
      });
      flag = true;
    }
    return flag;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function handleMembershipFetchStart() {
    closure_7.membershipData.isFetching = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function handleMembershipFetchSuccess(membership) {
    closure_7.membershipData.data = membership.membership;
    closure_7.membershipData.isFetching = false;
    closure_7.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function handleMembershipNotFound() {
    closure_7.membershipData.isFetching = false;
    closure_7.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function handleMembershipFetchFailure() {
    closure_7.membershipData.isFetching = false;
    closure_7.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_INVITE_USERS_START: handleMutationStart,
  PREMIUM_GROUP_INVITE_USERS_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_INVITE_USERS_FAILURE: handleMutationFailure,
  PREMIUM_GROUP_REMOVE_MEMBER_START: handleMutationStart,
  PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: handleMutationFailure,
  PREMIUM_GROUP_REMOVE_INVITE_START: handleMutationStart,
  PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function handleRemoveInviteFailure(subscriptionId) {
    subscriptionId = subscriptionId.subscriptionId;
    if (subscriptionId.errorCode === constants.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) {
      DispatcherDefault.wait(() => {
        const subscriptionGroupMembers = PremiumGroupActionCreators.fetchSubscriptionGroupMembers(subscriptionId);
        return subscriptionGroupMembers.catch(NOOP_NULL);
      });
      closure_7.membersData.isUpdating = false;
      return true;
    } else {
      closure_7.membersData.isUpdating = false;
    }
  },
  LOGOUT: function reset() {
    closure_7 = { membersData: { data: null, isFetching: false, isUpdating: false }, membershipData: { data: null, isFetching: false, hasFetched: false } };
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupStore.tsx");

export default premiumGroupStore;