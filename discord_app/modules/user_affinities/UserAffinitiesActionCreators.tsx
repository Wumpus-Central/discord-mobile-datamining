// === Module 9297: fetchUserAffinitiesV2 ===

// Module 9297 (fetchUserAffinitiesV2)
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "hasConsented" /* 6001 */;
import closure_4 from "recomputeAffinities" /* 7331 */;
import ME from "ME" /* 676 */;

require = arg1;
({ Endpoints: c5, Consents: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/user_affinities/UserAffinitiesActionCreators.tsx");

export const fetchUserAffinitiesV2 = function fetchUserAffinitiesV2() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (closure_4.shouldFetch()) {
    if (closure_3.hasConsented(constants.PERSONALIZATION)) {
      let obj = dispatcherDefault;
      obj.dispatch({ type: "LOAD_USER_AFFINITIES_V2" });
      const HTTP = sendRequest.HTTP;
      obj = { url: null, retries: null, oldFormErrors: true, rejectWithError: false };
      obj[0] = USER_AFFINITIES_V2.USER_AFFINITIES_V2;
      let num = 0;
      if (flag) {
        num = 3;
      }
      obj[1] = num;
      const value = HTTP.get(obj);
      let nextPromise = value.then((body) => {
        let obj = callback(709);
        obj = {
          type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
          affineUsers: user_affinities.map((otherUserId) => {
            const obj = { otherUserId: otherUserId.other_user_id, userSegment: otherUserId.user_segment, otherUserSegment: otherUserId.other_user_segment, isFriend: otherUserId.is_friend, dmProbability: null, dmRank: null, vcProbability: null, vcRank: null, serverMessageProbability: null, serverMessageRank: null, communicationProbability: null, communicationRank: null };
            let num = otherUserId.dm_probability;
            if (num == null) {
              num = 0;
            }
            obj[4] = num;
            let num2 = otherUserId.dm_rank;
            if (num2 == null) {
              num2 = 0;
            }
            obj[5] = num2;
            let num3 = otherUserId.vc_probability;
            if (num3 == null) {
              num3 = 0;
            }
            obj[6] = num3;
            let num4 = otherUserId.vc_rank;
            if (num4 == null) {
              num4 = 0;
            }
            obj[7] = num4;
            let num5 = otherUserId.server_message_probability;
            if (num5 == null) {
              num5 = 0;
            }
            obj[8] = num5;
            let num6 = otherUserId.server_message_rank;
            if (num6 == null) {
              num6 = 0;
            }
            obj[9] = num6;
            let num7 = otherUserId.communication_probability;
            if (num7 == null) {
              num7 = 0;
            }
            obj[10] = num7;
            let num8 = otherUserId.communication_rank;
            if (num8 == null) {
              num8 = 0;
            }
            obj[11] = num8;
            return obj;
          })
        };
        user_affinities = body.body.user_affinities;
        obj.dispatch(obj);
      }, () => {
        callback(709).dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
      });
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};