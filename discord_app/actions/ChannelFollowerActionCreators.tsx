// discord_app/actions/ChannelFollowerActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
const result = require("sendRequest").fileFinishedImporting("actions/ChannelFollowerActionCreators.tsx");

export default {
  createChannelFollower(webhook_channel_id, closure_1) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.CHANNEL_FOLLOWERS(closure_1), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { webhook_channel_id };
    obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  fetchChannelFollowerStats(closure_0) {
    return callback(function*() {
      let closure_1 = tmp3;
      outer1_1(outer1_2[3]).dispatch({ type: "CHANNEL_FOLLOWER_STATS_FETCH_START" });
      let c3 = 1;
      const HTTP = outer1_0(outer1_2[2]).HTTP;
      const obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = c4.CHANNEL_FOLLOWER_STATS(outer1_0);
      const obj2 = { channel_id: null };
      obj2[0] = outer1_0;
      obj1[1] = obj2;
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c3 = 0;
        const obj3 = outer1_1(outer1_2[3]);
        const obj4 = { type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE", channelId: null };
        obj4[1] = body;
        obj3.dispatch(obj4);
        let c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        body = arg1;
        const obj = outer1_1(outer1_2[3]);
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
    let obj = importDefault(709);
    obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED", messageId };
    obj.dispatch(obj);
  },
  permanentlyHidePublishBump(channelId) {
    let obj = importDefault(709);
    obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY", channelId };
    obj.dispatch(obj);
  }
};