// discord_app/modules/channel_affinities_v2/ChannelAffinitiesV2ActionCreators.tsx
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import hasConsented from "../../stores/ConsentStore.tsx";
import map from "ChannelAffinitiesV2Store.tsx";
import ME from "../../Constants.tsx";

require = fn;
({ Endpoints: c5, Consents: closure_6 } = ME);
const result = require("obj132").fileFinishedImporting("modules/channel_affinities_v2/ChannelAffinitiesV2ActionCreators.tsx");

export const fetchChannelAffinitiesV2 = function fetchChannelAffinitiesV2() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (closure_4.shouldFetch()) {
    if (closure_3.hasConsented(constants.PERSONALIZATION)) {
      let obj = dispatcherDefault;
      obj.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" });
      const HTTP = sendRequest.HTTP;
      obj = { url: null, retries: null, oldFormErrors: true, rejectWithError: false };
      obj[0] = obj.CHANNEL_AFFINITIES_V2;
      let num = 0;
      if (flag) {
        num = 3;
      }
      obj[1] = num;
      const value = HTTP.get(obj);
      let nextPromise = value.then((result) => {
        callback(709);
        let obj = {
          type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
          affineChannels: channel_affinities.map((item, index) => {
            const obj = { channelId: item.channel_id, score: null };
            let num = item.score;
            if (num == null) {
              num = 0;
            }
            obj[1] = num;
            return obj;
          })
        };
        channel_affinities = result.body.channel_affinities;
        obj.dispatch(obj);
      }, () => {
        callback(709).dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
      });
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};