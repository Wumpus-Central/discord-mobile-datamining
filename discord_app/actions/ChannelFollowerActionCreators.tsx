// discord_app/actions/ChannelFollowerActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../_runtime/metro/00002__.js";

let c4, c5, closure_2;

const Endpoints = Constants.Endpoints;
let obj = {
  createChannelFollower(webhook_channel_id, importDefault) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.CHANNEL_FOLLOWERS(importDefault),
      body: obj,
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const post = HTTP.post;
    obj = { webhook_channel_id };
    obj3 = HTTPUtils;
    return post(request);
  },
  fetchChannelFollowerStats(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let closure_1;
      let obj5;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let channel_id;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              channel_id = undefined;
              const obj9 = tmp(closure_2[3]);
              obj9.dispatch({ type: "CHANNEL_FOLLOWER_STATS_FETCH_START" });
              c3 = 1;
              const HTTP = channel_id(closure_2[2]).HTTP;
              const request = {
                url: c4.CHANNEL_FOLLOWER_STATS(channel_id),
                body: obj5,
                oldFormErrors: true,
                rejectWithError: true,
              };
              const get = HTTP.get;
              obj5 = { channel_id };
              c4 = 2;
              c5 = 1;
              const obj6 = { value: get(request), done: false };
              return obj6;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const obj7 = { type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE", channelId: closure_129_0 };
              const obj4 = tmp(closure_2[3]);
              obj4.dispatch(obj7);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              channel_id = value;
              const obj10 = {
                type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
                stats: channel_id.body,
                channelId: closure_129_0,
              };
              const obj = tmp(closure_2[3]);
              obj.dispatch(obj10);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp18) {
          closure_2 = tmp18;
          if (0 === c3) {
            c5 = 3;
            throw tmp18;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  dismissPublishBump(messageId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED", messageId };
    obj.dispatch(obj2);
  },
  permanentlyHidePublishBump(channelId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY", channelId };
    obj.dispatch(obj2);
  },
};
const result = size.fileFinishedImporting("actions/ChannelFollowerActionCreators.tsx");

export default obj;
