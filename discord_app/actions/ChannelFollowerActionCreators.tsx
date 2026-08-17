// discord_app/actions/ChannelFollowerActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import closure_3 from "../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("actions/ChannelFollowerActionCreators.tsx");

export default {
  createChannelFollower(webhook_channel_id, closure_1) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.CHANNEL_FOLLOWERS(closure_1), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { webhook_channel_id };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  fetchChannelFollowerStats(closure_0) {
    return callback(function*() {
      closure_1 = tmp3;
      closure_1_1(closure_1_2[3]).dispatch({ type: "CHANNEL_FOLLOWER_STATS_FETCH_START" });
      c3 = 1;
      const HTTP = closure_1_0(closure_1_2[2]).HTTP;
      obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = c4.CHANNEL_FOLLOWER_STATS(closure_1_0);
      const obj2 = { channel_id: null };
      obj2[0] = closure_1_0;
      obj1[1] = obj2;
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c3 = 0;
        const obj3 = closure_1_1(closure_1_2[3]);
        const obj4 = { type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE", channelId: null };
        obj4[1] = body;
        obj3.dispatch(obj4);
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        body = arg1;
        const obj = closure_1_1(closure_1_2[3]);
        const obj5 = { type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS", stats: null, channelId: null };
        obj5[1] = body.body;
        obj5[2] = body;
        obj.dispatch(obj5);
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    })();
  },
  dismissPublishBump(messageId) {
    let obj = dispatcherDefault;
    obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED", messageId };
    obj.dispatch(obj);
  },
  permanentlyHidePublishBump(channelId) {
    let obj = dispatcherDefault;
    obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY", channelId };
    obj.dispatch(obj);
  }
};