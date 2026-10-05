// discord_app/modules/user_affinities/UserAffinitiesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ConsentStore from "../../stores/ConsentStore.tsx";
import UserAffinitiesV2Store from "UserAffinitiesV2Store.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let body;

let hasOwnProperty;
let metroRequire;
({ Endpoints: hasOwnProperty, Consents: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/user_affinities/UserAffinitiesActionCreators.tsx");

export const fetchUserAffinitiesV2 = function fetchUserAffinitiesV2() {
  let num;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (UserAffinitiesV2Store.shouldFetch()) {
    let nextPromise;
    if (ConsentStore.hasConsented(metroRequire.PERSONALIZATION)) {
      let obj = DispatcherDefault;
      obj.dispatch({ type: "LOAD_USER_AFFINITIES_V2" });
      const HTTP = HTTPUtils.HTTP;
      const obj2 = {
        url: hasOwnProperty.USER_AFFINITIES_V2,
        retries: num,
        oldFormErrors: true,
        rejectWithError: false,
      };
      num = 0;
      const get = HTTP.get;
      if (flag) {
        num = 3;
      }
      const value = get(obj2);
      nextPromise = value.then(
        (body) => {
          let user_affinities;
          body = body.body;
          let obj = {
            type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
            affineUsers: user_affinities.map((otherUserId) => {
              let num;
              let num2;
              let num3;
              let num4;
              let num5;
              let num6;
              let num7;
              let num8;
              const obj = {
                otherUserId: otherUserId.other_user_id,
                userSegment: otherUserId.user_segment,
                otherUserSegment: otherUserId.other_user_segment,
                isFriend: otherUserId.is_friend,
                dmProbability: num,
                dmRank: num2,
                vcProbability: num3,
                vcRank: num4,
                serverMessageProbability: num5,
                serverMessageRank: num6,
                communicationProbability: num7,
                communicationRank: num8,
              };
              num = otherUserId.dm_probability;
              if (num == null) {
                num = 0;
              }
              num2 = otherUserId.dm_rank;
              if (num2 == null) {
                num2 = 0;
              }
              num3 = otherUserId.vc_probability;
              if (num3 == null) {
                num3 = 0;
              }
              num4 = otherUserId.vc_rank;
              if (num4 == null) {
                num4 = 0;
              }
              num5 = otherUserId.server_message_probability;
              if (num5 == null) {
                num5 = 0;
              }
              num6 = otherUserId.server_message_rank;
              if (num6 == null) {
                num6 = 0;
              }
              num7 = otherUserId.communication_probability;
              if (num7 == null) {
                num7 = 0;
              }
              num8 = otherUserId.communication_rank;
              if (num8 == null) {
                num8 = 0;
              }
              return obj;
            }),
          };
          user_affinities = body.user_affinities;
          const dispatch = DispatcherDefault.dispatch;
          DispatcherDefault;
          dispatch(obj);
        },
        () => {
          const obj = DispatcherDefault;
          obj.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
        },
      );
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};
