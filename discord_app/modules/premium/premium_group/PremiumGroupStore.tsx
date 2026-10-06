// === Module 13313: PremiumGroupStore ===

// Module 13313 (PremiumGroupStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import PremiumGroupActionCreators from "PremiumGroupActionCreators" /* 13314 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4548 */;
import size from "module_2" /* 2 */;

let closure_7;

let closure_4;
let hasOwnProperty;
function handleMutationStart() {
  closure_7.membersData.isUpdating = true;
}
function handleMutationSuccess(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = PremiumGroupActionCreators;
    const subscriptionGroupMembers = obj.fetchSubscriptionGroupMembers(subscriptionId);
    return subscriptionGroupMembers.catch(NOOP_NULL);
  });
  closure_7.membersData.isUpdating = false;
}
function handleMutationFailure() {
  closure_7.membersData.isUpdating = false;
}
({ PremiumGroupAPIErrorCodes: closure_4, TOTAL_PREMIUM_GROUP_MEMBER_SEATS: hasOwnProperty } = PremiumGroupConstants);
const NOOP_NULL = Constants.NOOP_NULL;
const metroImportDefault = { membersData: { data: null, isFetching: false, isUpdating: false }, membershipData: { data: null, isFetching: false, hasFetched: false } };
const Store = get_initializedDefault.Store;
class PremiumGroupStore extends Store {
  initialize() {
    this.waitFor(SubscriptionStore);
  }
  getMembers() {
    return closure_7.membersData.data;
  }
  isFetchingMembers() {
    return closure_7.membersData.isFetching;
  }
  isUpdatingMembers() {
    return closure_7.membersData.isUpdating;
  }
  hasFetchedMembers() {
    return null !== closure_7.membersData.data;
  }
  getMembership() {
    return closure_7.membershipData.data;
  }
  isFetchingMembership() {
    return closure_7.membershipData.isFetching;
  }
  hasFetchedMembership() {
    return null !== closure_7.membershipData.data;
  }
  getNumUsedSeats() {
    let num = 0;
    if (null != closure_7.membersData.data) {
      num = closure_7.membersData.data.members.length;
    }
    return num;
  }
  getNumAvailableInvites() {
    if (null == closure_7.membersData.data) {
      return hasOwnProperty;
    } else {
      const _Math = Math;
      return Math.max(0, hasOwnProperty - (closure_7.membersData.data.members.length + closure_7.membersData.data.invitedUsers.length));
    }
  }
  getNumTotalSeats() {
    return hasOwnProperty;
  }
}
const prototype = PremiumGroupStore.prototype;
PremiumGroupStore.displayName = "PremiumGroupStore";
let obj = {
  PREMIUM_GROUP_MEMBERS_REQUEST: function handleMembersRequest(subscriptionId) {
    subscriptionId = subscriptionId.subscriptionId;
    let flag = !closure_7.membersData.isFetching;
    if (flag) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = PremiumGroupActionCreators;
        const subscriptionGroupMembers = obj.fetchSubscriptionGroupMembers(subscriptionId);
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
    let flag = !closure_7.membershipData.isFetching;
    if (flag) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = PremiumGroupActionCreators;
        const premiumGroupMembership = obj.fetchPremiumGroupMembership();
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
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = PremiumGroupActionCreators;
        const subscriptionGroupMembers = obj.fetchSubscriptionGroupMembers(subscriptionId);
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
};
const premiumGroupStore = new PremiumGroupStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupStore.tsx");

export default premiumGroupStore;