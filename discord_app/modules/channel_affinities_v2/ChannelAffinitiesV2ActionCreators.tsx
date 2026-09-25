// === Module 15887: ChannelAffinitiesV2ActionCreators ===

// Module 15887 (ChannelAffinitiesV2ActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import ConsentStore from "ConsentStore" /* 6007 */;
import ChannelAffinitiesV2Store from "ChannelAffinitiesV2Store" /* 15885 */;

require = fn;
const Constants = fn(1074);
({ Endpoints: hasOwnProperty, Consents: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_affinities_v2/ChannelAffinitiesV2ActionCreators.tsx");

export const fetchChannelAffinitiesV2 = function fetchChannelAffinitiesV2() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (ChannelAffinitiesV2Store.shouldFetch()) {
    if (ConsentStore.hasConsented(constants.PERSONALIZATION)) {
      DispatcherDefault.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" });
      const HTTP = HTTPUtils.HTTP;
      let obj2 = { url: hasOwnProperty.CHANNEL_AFFINITIES_V2, retries: null, oldFormErrors: true, rejectWithError: false };
      let num = 0;
      if (flag) {
        num = 3;
      }
      obj2.retries = num;
      value = HTTP.get(obj2);
      let nextPromise = value.then((body) => {
        const obj2 = { type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS", affineChannels: null };
        const channel_affinities = body.body.channel_affinities;
        obj2.affineChannels = channel_affinities.map((channelId) => {
          const obj = { channelId: channelId.channel_id, score: null };
          let num = channelId.score;
          if (num == null) {
            num = 0;
          }
          obj.score = num;
          return obj;
        });
        DispatcherDefault.dispatch(obj2);
      }, () => {
        DispatcherDefault.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
      });
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};