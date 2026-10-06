// === Module 16257: ChannelAffinitiesV2ActionCreators ===

// Module 16257 (ChannelAffinitiesV2ActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ConsentStore from "ConsentStore" /* 6091 */;
import ChannelAffinitiesV2Store from "ChannelAffinitiesV2Store" /* 16255 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let body;

let hasOwnProperty;
let metroRequire;
({ Endpoints: hasOwnProperty, Consents: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/channel_affinities_v2/ChannelAffinitiesV2ActionCreators.tsx");

export const fetchChannelAffinitiesV2 = function fetchChannelAffinitiesV2() {
  let num;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (ChannelAffinitiesV2Store.shouldFetch()) {
    let nextPromise;
    if (ConsentStore.hasConsented(metroRequire.PERSONALIZATION)) {
      let obj = DispatcherDefault;
      obj.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" });
      const HTTP = HTTPUtils.HTTP;
      const obj2 = { url: hasOwnProperty.CHANNEL_AFFINITIES_V2, retries: num, oldFormErrors: true, rejectWithError: false };
      num = 0;
      const get = HTTP.get;
      if (flag) {
        num = 3;
      }
      const value = get(obj2);
      nextPromise = value.then((body) => {
        let channel_affinities;
        body = body.body;
        let obj = {
          type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
          affineChannels: channel_affinities.map((channelId) => {
            let num;
            const obj = { channelId: channelId.channel_id, score: num };
            num = channelId.score;
            if (num == null) {
              num = 0;
            }
            return obj;
          })
        };
        channel_affinities = body.channel_affinities;
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        dispatch(obj);
      }, () => {
        const obj = DispatcherDefault;
        obj.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
      });
    }
    return nextPromise;
  }
  nextPromise = Promise.resolve();
};