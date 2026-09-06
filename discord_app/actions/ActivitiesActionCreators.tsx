// === Module 11472: ActivitiesActionCreators ===

// Module 11472 (ActivitiesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import getActivitySessionKey from "getActivitySessionKey" /* 11473 */;
import RichPresenceInviteBarActionCreators from "RichPresenceInviteBarActionCreators" /* 11474 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const Constants = fn(1074);
({ Endpoints: hasOwnProperty, ActivityTypes: metroRequire, AnalyticEvents: closure_7, LoggingInviteTypes: closure_8 } = Constants);
const MessageSendLocation = fn(4553).MessageSendLocation;
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
    distributor(num[4]).wait(() => {
      const obj = { type: "ACTIVITY_UPDATE_START", applicationId, duration: num, distributor };
      return obj.dispatch(obj);
    });
    const HTTP = applicationId(num[5]).HTTP;
    const request = { url: constants.ACTIVITIES, body: { application_id: applicationId, token, duration: num, share_activity: share_activity.shareActivity, distributor, closed: flag, exePath, voice_channel_id: voiceChannelId, session_id: sessionId, media_session_id: mediaSessionId }, retries: 1, oldFormErrors: true, rejectWithError: true };
    let obj = distributor(num[4]);
    const postResult = HTTP.post(request);
    HTTP.post(request).then((body) => {
      const obj = { type: "ACTIVITY_UPDATE_SUCCESS", applicationId, token: body.body.token, duration: num, distributor };
      obj.dispatch(obj);
    }).catch(() => {
      const obj = { type: "ACTIVITY_UPDATE_FAIL", applicationId };
      obj.dispatch(obj);
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
      obj = { type, activity, targetUserId };
      obj.activityAction = obj;
      obj.location = MessageSendLocation.ACTIVITY_SHARE;
      const obj4 = require("MessageParser");
      return tmp7Result.sendMessage(channel.id, parsed, false, obj).then((body) => {
        const obj = { location: _location, invite_type: null, application_id: null, guild_id: null, channel_id: null, message_id: null };
        if (activity.type === constants2.LISTENING) {
          let APPLICATION = constants4.SPOTIFY;
        } else {
          APPLICATION = constants4.APPLICATION;
        }
        obj.invite_type = APPLICATION;
        obj.application_id = activity.application_id;
        obj.guild_id = channel.getGuildId();
        obj.channel_id = channel.id;
        let id = null;
        if (null != body) {
          id = body.body.id;
        }
        obj.message_id = id;
        obj.trackWithMetadata(constants3.INVITE_SENT, obj);
        const activitySessionKey = getActivitySessionKey.getActivitySessionKey(tmp2);
        if (null != activitySessionKey) {
          RichPresenceInviteBarActionCreators.markChannelInvited(activitySessionKey, tmp5.id);
          const tmp8Result = RichPresenceInviteBarActionCreators;
        }
        return Promise.resolve(channel);
      }, (arg0) => Promise.reject(arg0));
    }
  },
  sendActivityInviteUser(userId) {
    const self = this;
    ({ type: importDefault, activity: dependencyMap, content: asyncGeneratorStep, location: require } = userId);
    return ChannelActionCreatorsDefault.ensurePrivateChannel(userId.userId).then((channelId) => self.sendActivityInvite({ channelId, type, activity, content, location: _location }));
  },
  getJoinSecret(arg0, arg1, arg2, arg3, arg4) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    asyncGeneratorStep = arg3;
    closure_4 = arg4;
    return (async () => {
      const obj1 = {};
      if (null != channel_id) {
        obj1.channel_id = channel_id;
      }
      if (null != message_id) {
        obj1.message_id = message_id;
      }
      const HTTP = tmp4(1272).HTTP;
      const request = { url: constants.USER_ACTIVITY_JOIN(tmp4, closure_1, closure_2), retries: 3, query: obj1, rejectWithError: tmp4(1272).rejectWithMigratedError() };
      closure_128_0 = await HTTP.get(request);
      return { secret: closure_128_0.body.secret, joinUrl: closure_128_0.body.join_url };
    })();
  },
  subscribeActivities(items) {
    closure_0 = items;
    return (async () => {
      const mapped = v3.map((userId) => ({ user_id: userId.userId, application_id: userId.applicationId, party_id: userId.partyId, message_id: userId.messageId, channel_id: userId.channelId }));
      const HTTP = v3(1272).HTTP;
      const request = { url: constants.USER_ACTIVITY_SUBSCRIBE, body: { subscriptions: mapped }, retries: 1, rejectWithError: v3(1272).rejectWithMigratedError() };
      await HTTP.post(request);
      return arg1.body;
    })();
  }
};