// === Module 9116: UserAffinitiesActionCreators ===

// Module 9116 (UserAffinitiesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import UserAffinitiesTypes from "UserAffinitiesTypes" /* 9117 */;
import ConsentStore from "ConsentStore" /* 6705 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7767 */;

require = fn;
const Constants = fn(1084);
({ Endpoints: hasOwnProperty, Consents: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_affinities/UserAffinitiesActionCreators.tsx");

export const fetchUserAffinitiesV2 = function fetchUserAffinitiesV2() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (UserAffinitiesV2Store.shouldFetch()) {
    if (ConsentStore.hasConsented(constants.PERSONALIZATION)) {
      DispatcherDefault.dispatch({ type: "LOAD_USER_AFFINITIES_V2" });
      const HTTP = HTTPUtils.HTTP;
      let obj2 = { url: USER_AFFINITIES_V2.USER_AFFINITIES_V2, retries: null, oldFormErrors: true, rejectWithError: false };
      let num = 0;
      if (flag) {
        num = 3;
      }
      obj2.retries = num;
      value = HTTP.get(obj2);
      let nextPromise = value.then((body) => {
        const obj2 = { type: "LOAD_USER_AFFINITIES_V2_SUCCESS", affineUsers: null };
        const user_affinities = body.body.user_affinities;
        obj2.affineUsers = user_affinities.map((otherUserId) => {
          const obj = { otherUserId: otherUserId.other_user_id, userSegment: otherUserId.user_segment, otherUserSegment: otherUserId.other_user_segment, isFriend: otherUserId.is_friend, dmProbability: null, dmRank: null, vcProbability: null, vcRank: null, serverMessageProbability: null, serverMessageRank: null, communicationProbability: null, communicationRank: null };
          let num = otherUserId.dm_probability;
          if (num == null) {
            num = 0;
          }
          obj.dmProbability = num;
          let num2 = otherUserId.dm_rank;
          if (num2 == null) {
            num2 = 0;
          }
          obj.dmRank = num2;
          let num3 = otherUserId.vc_probability;
          if (num3 == null) {
            num3 = 0;
          }
          obj.vcProbability = num3;
          let num4 = otherUserId.vc_rank;
          if (num4 == null) {
            num4 = 0;
          }
          obj.vcRank = num4;
          let num5 = otherUserId.server_message_probability;
          if (num5 == null) {
            num5 = 0;
          }
          obj.serverMessageProbability = num5;
          let num6 = otherUserId.server_message_rank;
          if (num6 == null) {
            num6 = 0;
          }
          obj.serverMessageRank = num6;
          let num7 = otherUserId.communication_probability;
          if (num7 == null) {
            num7 = 0;
          }
          obj.communicationProbability = num7;
          let num8 = otherUserId.communication_rank;
          if (num8 == null) {
            num8 = 0;
          }
          obj.communicationRank = num8;
          return obj;
        });
        DispatcherDefault.dispatch(obj2);
      }, () => {
        DispatcherDefault.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
      });
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};
export const setDevToolsUserAffinityOverride = function setDevToolsUserAffinityOverride(userId) {
  let tmp2 = null;
  if (null != userId) {
    const obj3 = { otherUserId: userId.userId, userSegment: UserAffinitiesTypes.AffineUserSegment.HFU_MAU, otherUserSegment: UserAffinitiesTypes.AffineUserSegment.HFU_MAU, isFriend: false, dmProbability: null, dmRank: 1, vcProbability: null, vcRank: 1, serverMessageProbability: 0, serverMessageRank: 1, communicationProbability: null, communicationRank: 1 };
    ({ communicationProbability: obj2.dmProbability, vcProbability: obj2.vcProbability, communicationProbability: obj2.communicationProbability } = userId);
    tmp2 = obj3;
  }
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SET_USER_AFFINITY_OVERRIDE", override: tmp2 });
};