// === Module 9848: UserAffinitiesActionCreators ===

// Module 9848 (UserAffinitiesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import ConsentStore from "ConsentStore" /* 6595 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7659 */;

require = fn;
const Constants = fn(1074);
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
      let obj = DispatcherDefault;
      obj.dispatch({ type: "LOAD_USER_AFFINITIES_V2" });
      const HTTP = HTTPUtils.HTTP;
      obj = { url: USER_AFFINITIES_V2.USER_AFFINITIES_V2, retries: null, oldFormErrors: true, rejectWithError: false };
      let num = 0;
      if (flag) {
        num = 3;
      }
      obj.retries = num;
      value = HTTP.get(obj);
      let nextPromise = value.then((body) => {
        let obj = { type: "LOAD_USER_AFFINITIES_V2_SUCCESS", affineUsers: null };
        const user_affinities = body.body.user_affinities;
        obj.affineUsers = user_affinities.map((otherUserId) => {
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
        obj.dispatch(obj);
      }, () => {
        DispatcherDefault.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
      });
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};