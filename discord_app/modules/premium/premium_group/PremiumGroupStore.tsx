// discord_app/modules/premium/premium_group/PremiumGroupStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import PremiumGroupActionCreators from "PremiumGroupActionCreators.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";

require = fn;
function handleMutationStart() {
  closure_6.membersData.isUpdating = true;
}
function handleMutationSuccess(subscriptionId) {
  const subscriptionGroupMembers = PremiumGroupActionCreators.fetchSubscriptionGroupMembers(
    subscriptionId.subscriptionId,
  );
  subscriptionGroupMembers.catch(NOOP_NULL);
  closure_6.membersData.isUpdating = false;
}
function handleMutationFailure() {
  closure_6.membersData.isUpdating = false;
}
const PremiumGroupConstants = fn(4783);
({ PremiumGroupAPIErrorCodes: c3, TOTAL_PREMIUM_GROUP_MEMBER_SEATS: closure_4 } = PremiumGroupConstants);
const NOOP_NULL = fn(1085).NOOP_NULL;
let closure_6 = {
  membersData: { data: null, isFetching: false, isUpdating: false },
  membershipData: { data: null, isFetching: false, hasFetched: false },
};
const Store = initializeDefault.Store;
class PremiumGroupStore extends Store {}
const prototype = PremiumGroupStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(SubscriptionStore);
};
prototype["getMembers"] = function getMembers() {
  return closure_6.membersData.data;
};
prototype["isFetchingMembers"] = function isFetchingMembers() {
  return closure_6.membersData.isFetching;
};
prototype["isUpdatingMembers"] = function isUpdatingMembers() {
  return closure_6.membersData.isUpdating;
};
prototype["hasFetchedMembers"] = function hasFetchedMembers() {
  return null !== closure_6.membersData.data;
};
prototype["getMembership"] = function getMembership() {
  return closure_6.membershipData.data;
};
prototype["isFetchingMembership"] = function isFetchingMembership() {
  return closure_6.membershipData.isFetching;
};
prototype["hasFetchedMembership"] = function hasFetchedMembership() {
  return null !== closure_6.membershipData.data;
};
prototype["getNumUsedSeats"] = function getNumUsedSeats() {
  let num = 0;
  if (null != closure_6.membersData.data) {
    num = closure_6.membersData.data.members.length;
  }
  return num;
};
prototype["getNumAvailableInvites"] = function getNumAvailableInvites() {
  if (null == closure_6.membersData.data) {
    return React4;
  } else {
    const _Math = Math;
    return Math.max(
      0,
      React4 - (closure_6.membersData.data.members.length + closure_6.membersData.data.invitedUsers.length),
    );
  }
};
prototype["getNumTotalSeats"] = function getNumTotalSeats() {
  return React4;
};
PremiumGroupStore.displayName = "PremiumGroupStore";
const premiumGroupStore = new PremiumGroupStore(DispatcherDefault, {
  PREMIUM_GROUP_MEMBERS_REQUEST: function handleMembersRequest(arg0) {
    const isFetching = closure_6.membersData.isFetching;
    let flag = !isFetching;
    if (!isFetching) {
      const subscriptionGroupMembers = PremiumGroupActionCreators.fetchSubscriptionGroupMembers(tmp);
      subscriptionGroupMembers.catch(NOOP_NULL);
      flag = true;
    }
    return flag;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_START: function handleMembersFetchStart() {
    closure_6.membersData.isFetching = true;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function handleMembersFetchSuccess(members) {
    closure_6.membersData.data = members.members;
    closure_6.membersData.isFetching = false;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function handleMembersFetchFailure() {
    closure_6.membersData.isFetching = false;
  },
  PREMIUM_GROUP_MEMBERSHIP_REQUEST: function handleMembershipRequest() {
    const isFetching = closure_6.membershipData.isFetching;
    let flag = !isFetching;
    if (!isFetching) {
      const premiumGroupMembership = PremiumGroupActionCreators.fetchPremiumGroupMembership();
      premiumGroupMembership.catch(NOOP_NULL);
      flag = true;
    }
    return flag;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function handleMembershipFetchStart() {
    closure_6.membershipData.isFetching = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function handleMembershipFetchSuccess(membership) {
    closure_6.membershipData.data = membership.membership;
    closure_6.membershipData.isFetching = false;
    closure_6.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function handleMembershipNotFound() {
    closure_6.membershipData.isFetching = false;
    closure_6.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function handleMembershipFetchFailure() {
    closure_6.membershipData.isFetching = false;
    closure_6.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_INVITE_USERS_START: handleMutationStart,
  PREMIUM_GROUP_INVITE_USERS_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_INVITE_USERS_FAILURE: handleMutationFailure,
  PREMIUM_GROUP_REMOVE_MEMBER_START: handleMutationStart,
  PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: handleMutationFailure,
  PREMIUM_GROUP_REMOVE_INVITE_START: handleMutationStart,
  PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function handleRemoveInviteFailure(errorCode) {
    if (errorCode.errorCode === constants.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) {
      const subscriptionGroupMembers = PremiumGroupActionCreators.fetchSubscriptionGroupMembers(tmp);
      subscriptionGroupMembers.catch(NOOP_NULL);
      closure_6.membersData.isUpdating = false;
      return true;
    } else {
      closure_6.membersData.isUpdating = false;
    }
  },
  LOGOUT: function reset() {
    closure_6 = {
      membersData: { data: null, isFetching: false, isUpdating: false },
      membershipData: { data: null, isFetching: false, hasFetched: false },
    };
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupStore.tsx");

export default premiumGroupStore;
