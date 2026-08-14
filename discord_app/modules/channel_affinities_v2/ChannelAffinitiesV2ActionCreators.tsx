// discord_app/modules/channel_affinities_v2/ChannelAffinitiesV2ActionCreators.tsx
import hasConsented from "hasConsented";
import map from "map";
import ME from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

let c5;
let closure_6;
const require = arg1;
({ Endpoints: c5, Consents: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/channel_affinities_v2/ChannelAffinitiesV2ActionCreators.tsx");

export const fetchChannelAffinitiesV2 = function fetchChannelAffinitiesV2() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (map.shouldFetch()) {
    if (hasConsented.hasConsented(constants.PERSONALIZATION)) {
      let obj = dispatcher;
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
      let nextPromise = value.then((body) => {
        let obj = callback(709);
        obj = {
          type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
          affineChannels: channel_affinities.map((channelId) => {
            const obj = { channelId: channelId.channel_id, score: null };
            let num = channelId.score;
            if (num == null) {
              num = 0;
            }
            obj[1] = num;
            return obj;
          })
        };
        channel_affinities = body.body.channel_affinities;
        obj.dispatch(obj);
      }, () => {
        callback(709).dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
      });
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};