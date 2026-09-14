// discord_app/actions/ActivitiesActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import ChannelActionCreatorsDefault from "ChannelActionCreators.tsx";
import AppAnalyticsUtilsDefault from "../modules/app_analytics/AppAnalyticsUtils.tsx";
import getActivitySessionKey from "../modules/activities/utils/getActivitySessionKey.tsx";
import RichPresenceInviteBarActionCreators from "../modules/activities/stores/RichPresenceInviteBarActionCreators.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({
  Endpoints: hasOwnProperty,
  ActivityTypes: metroRequire,
  AnalyticEvents: closure_7,
  LoggingInviteTypes: closure_8,
} = Constants);
const MessageSendLocation = fn(4629).MessageSendLocation;
const size = fn(2);
const result = size.fileFinishedImporting("actions/ActivitiesActionCreators.tsx");

export default {
  updateActivity(share_activity) {
    const applicationId = share_activity.applicationId;
    const distributor = share_activity.distributor;
    let token = share_activity.token;
    if (token === undefined) {
      token = null;
    }
    let num = share_activity.duration;
    if (num === undefined) {
      num = 0;
    }
    let flag = share_activity.closed;
    if (flag === undefined) {
      flag = false;
    }
    let exePath = share_activity.exePath;
    if (exePath === undefined) {
      exePath = null;
    }
    let voiceChannelId = share_activity.voiceChannelId;
    if (voiceChannelId === undefined) {
      voiceChannelId = null;
    }
    let sessionId = share_activity.sessionId;
    if (sessionId === undefined) {
      sessionId = null;
    }
    let mediaSessionId = share_activity.mediaSessionId;
    if (mediaSessionId === undefined) {
      mediaSessionId = null;
    }
    distributor(num[4]).wait(() =>
      DispatcherDefault.dispatch({ type: "ACTIVITY_UPDATE_START", applicationId, duration: num, distributor }),
    );
    const HTTP = applicationId(num[5]).HTTP;
    const request = {
      url: constants.ACTIVITIES,
      body: {
        application_id: applicationId,
        token,
        duration: num,
        share_activity: share_activity.shareActivity,
        distributor,
        closed: flag,
        exePath,
        voice_channel_id: voiceChannelId,
        session_id: sessionId,
        media_session_id: mediaSessionId,
      },
      retries: 1,
      oldFormErrors: true,
      rejectWithError: true,
    };
    const obj = distributor(num[4]);
    const postResult = HTTP.post(request);
    HTTP.post(request)
      .then((body) => {
        DispatcherDefault.dispatch({
          type: "ACTIVITY_UPDATE_SUCCESS",
          applicationId,
          token: body.body.token,
          duration: num,
          distributor,
        });
      })
      .catch(() => {
        DispatcherDefault.dispatch({ type: "ACTIVITY_UPDATE_FAIL", applicationId });
      });
  },
  sendActivityInvite(activity) {
    activity = activity.activity;
    ({ content, location: importDefault } = activity);
    ({ type, targetUserId } = activity);
    const channel = ChannelStore.getChannel(activity.channelId);
    if (null == channel) {
      return Promise.resolve(null);
    } else {
      if (content == null) {
        content = "";
      }
      const parsed = require("MessageParser").parse(channel, content);
      const tmp7Result = require("MessageActionCreators");
      let obj = { activityAction: null, location: null };
      let obj2 = { type, activity, targetUserId };
      obj.activityAction = obj2;
      obj.location = MessageSendLocation.ACTIVITY_SHARE;
      const obj4 = require("MessageParser");
      return tmp7Result.sendMessage(channel.id, parsed, false, obj).then(
        (body) => {
          const obj2 = {
            location: _location,
            invite_type: null,
            application_id: null,
            guild_id: null,
            channel_id: null,
            message_id: null,
          };
          if (activity.type === constants2.LISTENING) {
            let APPLICATION = constants4.SPOTIFY;
          } else {
            APPLICATION = constants4.APPLICATION;
          }
          obj2.invite_type = APPLICATION;
          obj2.application_id = activity.application_id;
          obj2.guild_id = channel.getGuildId();
          obj2.channel_id = channel.id;
          let id = null;
          if (null != body) {
            id = body.body.id;
          }
          obj2.message_id = id;
          AppAnalyticsUtilsDefault.trackWithMetadata(constants3.INVITE_SENT, obj2);
          const activitySessionKey = getActivitySessionKey.getActivitySessionKey(activity);
          if (null != activitySessionKey) {
            RichPresenceInviteBarActionCreators.markChannelInvited(activitySessionKey, channel.id);
            const tmp8Result = RichPresenceInviteBarActionCreators;
          }
          return Promise.resolve(channel);
        },
        (arg0) => Promise.reject(arg0),
      );
    }
  },
  sendActivityInviteUser(userId) {
    const self = this;
    ({ type: importDefault, activity: dependencyMap, content: asyncGeneratorStep, location: require } = userId);
    return ChannelActionCreatorsDefault.ensurePrivateChannel(userId.userId).then((channelId) =>
      self.sendActivityInvite({ channelId, type, activity, content, location: _location }),
    );
  },
  getJoinSecret(arg0, arg1, arg2, arg3, arg4) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    asyncGeneratorStep = arg3;
    closure_4 = arg4;
    return (async () => {
      const obj4 = {};
      if (null != channel_id) {
        obj4.channel_id = channel_id;
      }
      if (null != message_id) {
        obj4.message_id = message_id;
      }
      const HTTP = tmp4(1270).HTTP;
      const request = {
        url: constants.USER_ACTIVITY_JOIN(tmp4, closure_1, closure_2),
        retries: 3,
        query: obj4,
        rejectWithError: tmp4(1270).rejectWithMigratedError(),
      };
      await HTTP.get(request);
      closure_128_0 = value;
      return { secret: closure_128_0.body.secret, joinUrl: closure_128_0.body.join_url };
    })();
  },
  subscribeActivities(items) {
    closure_0 = items;
    return (async () => {
      const mapped = v3.map((userId) => ({
        user_id: userId.userId,
        application_id: userId.applicationId,
        party_id: userId.partyId,
        message_id: userId.messageId,
        channel_id: userId.channelId,
      }));
      const HTTP = v3(1270).HTTP;
      const request = {
        url: constants.USER_ACTIVITY_SUBSCRIBE,
        body: { subscriptions: mapped },
        retries: 1,
        rejectWithError: v3(1270).rejectWithMigratedError(),
      };
      await HTTP.post(request);
      return value.body;
    })();
  },
};
