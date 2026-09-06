// === Module 11332: ChannelFollowerActionCreators ===

// Module 11332 (ChannelFollowerActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("actions/ChannelFollowerActionCreators.tsx");

export default {
  createChannelFollower(webhook_channel_id, arg1) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CHANNEL_FOLLOWERS(arg1), body: { webhook_channel_id }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  fetchChannelFollowerStats(arg0) {
    closure_0 = arg0;
    return (async () => {
      tmp3(tmp21[3]).dispatch({ type: "CHANNEL_FOLLOWER_STATS_FETCH_START" });
      const HTTP = channel_id(tmp21[2]).HTTP;
      const request = { url: c4.CHANNEL_FOLLOWER_STATS(channel_id), body: { channel_id }, oldFormErrors: true, rejectWithError: true };
      await HTTP.get(request);
      if (1 === tmp7) {
        c3 = 0;
        tmp3(tmp21[3]);
        const obj3 = { type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE", channelId: closure_129_0 };
        obj3.dispatch(obj3);
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        tmp3(tmp21[3]).dispatch({ type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS", stats: closure_128_0.body, channelId: closure_129_0 });
        c3 = 0;
        tmp3(tmp21[3]);
      }
      return value;
    })();
  },
  dismissPublishBump(messageId) {
    const obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED", messageId };
    obj.dispatch(obj);
  },
  permanentlyHidePublishBump(channelId) {
    const obj = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY", channelId };
    obj.dispatch(obj);
  }
};