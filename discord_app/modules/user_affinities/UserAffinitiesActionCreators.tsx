// discord_app/modules/user_affinities/UserAffinitiesActionCreators.tsx
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import hasConsented from "../../stores/ConsentStore.tsx";
import recomputeAffinities from "UserAffinitiesV2Store.tsx";
import ME from "../../Constants.tsx";

require = fn;
({ Endpoints: c5, Consents: closure_6 } = ME);
const result = require("obj132").fileFinishedImporting("modules/user_affinities/UserAffinitiesActionCreators.tsx");

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
      let nextPromise = value.then((result) => {
        callback(709);
        let obj = {
          type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
          affineUsers: user_affinities.map((item, index) => {
            const obj = { otherUserId: item.other_user_id, userSegment: item.user_segment, otherUserSegment: item.other_user_segment, isFriend: item.is_friend, dmProbability: null, dmRank: null, vcProbability: null, vcRank: null, serverMessageProbability: null, serverMessageRank: null, communicationProbability: null, communicationRank: null };
            let num = item.dm_probability;
            if (num == null) {
              num = 0;
            }
            obj[4] = num;
            let num2 = item.dm_rank;
            if (num2 == null) {
              num2 = 0;
            }
            obj[5] = num2;
            let num3 = item.vc_probability;
            if (num3 == null) {
              num3 = 0;
            }
            obj[6] = num3;
            let num4 = item.vc_rank;
            if (num4 == null) {
              num4 = 0;
            }
            obj[7] = num4;
            let num5 = item.server_message_probability;
            if (num5 == null) {
              num5 = 0;
            }
            obj[8] = num5;
            let num6 = item.server_message_rank;
            if (num6 == null) {
              num6 = 0;
            }
            obj[9] = num6;
            let num7 = item.communication_probability;
            if (num7 == null) {
              num7 = 0;
            }
            obj[10] = num7;
            let num8 = item.communication_rank;
            if (num8 == null) {
              num8 = 0;
            }
            obj[11] = num8;
            return obj;
          })
        };
        user_affinities = result.body.user_affinities;
        obj.dispatch(obj);
      }, () => {
        callback(709).dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
      });
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};