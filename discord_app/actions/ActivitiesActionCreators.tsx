// discord_app/actions/ActivitiesActionCreators.tsx
import _modDef4491 from "ChannelActionCreators.tsx";
import closure_3 from "../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../stores/ChannelStore.tsx";
import ME from "../Constants.tsx";
import { MessageSendLocation } from "../modules/messages/MessageConstants.tsx";

const require = arg1;
({ Endpoints: c5, ActivityTypes: closure_6, AnalyticEvents: error, LoggingInviteTypes: closure_8 } = ME);
const result = require("set").fileFinishedImporting("actions/ActivitiesActionCreators.tsx");

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
    let obj = distributor(num[4]);
    obj.wait(() => {
      let obj = distributor(num[4]);
      obj = { type: "ACTIVITY_UPDATE_START", applicationId, duration: num, distributor };
      return obj.dispatch(obj);
    });
    const HTTP = applicationId(num[5]).HTTP;
    obj = { url: constants.ACTIVITIES, body: { application_id: applicationId, token, duration: num, share_activity: share_activity.shareActivity, distributor, closed: flag, exePath, voice_channel_id: voiceChannelId, session_id: sessionId, media_session_id: mediaSessionId }, retries: 1, oldFormErrors: true, rejectWithError: true };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      let obj = distributor(num[4]);
      obj = { type: "ACTIVITY_UPDATE_SUCCESS", applicationId, token: body.body.token, duration: num, distributor };
      obj.dispatch(obj);
    }).catch(() => {
      let obj = distributor(num[4]);
      obj = { type: "ACTIVITY_UPDATE_FAIL", applicationId };
      obj.dispatch(obj);
    });
  },
  sendActivityInvite(activity) {
    activity = activity.activity;
    ({ content, location: importDefault } = activity);
    let channel;
    ({ type, targetUserId } = activity);
    channel = channel.getChannel(activity.channelId);
    if (null == channel) {
      return Promise.resolve(null);
    } else {
      if (content == null) {
        content = "";
      }
      const parsed = importDefault(channel[6]).parse(channel, content);
      const tmp7Result = importDefault(channel[7]);
      let obj = { activityAction: null, location: null };
      obj = { type: null, activity: null, targetUserId: null };
      obj[0] = type;
      obj[1] = activity;
      obj[2] = targetUserId;
      obj[0] = obj;
      obj[1] = MessageSendLocation.ACTIVITY_SHARE;
      const obj4 = importDefault(channel[6]);
      const tmp7 = importDefault;
      const tmp8 = channel;
      return tmp7Result.sendMessage(channel.id, parsed, false, obj).then((body) => {
        let obj = closure_1_1(channel[8]);
        obj = { location: closure_1, invite_type: null, application_id: null, guild_id: null, channel_id: null, message_id: null };
        if (activity.type === closure_1_6.LISTENING) {
          let APPLICATION = closure_1_8.SPOTIFY;
        } else {
          APPLICATION = closure_1_8.APPLICATION;
        }
        obj[1] = APPLICATION;
        obj[2] = activity.application_id;
        obj[3] = channel.getGuildId();
        obj[4] = channel.id;
        let id = null;
        if (null != body) {
          id = body.body.id;
        }
        obj[5] = id;
        obj.trackWithMetadata(closure_1_7.INVITE_SENT, obj);
        const activitySessionKey = activity(channel[9]).getActivitySessionKey(tmp2);
        if (null != activitySessionKey) {
          activity(tmp[10]).markChannelInvited(activitySessionKey, tmp5.id);
          const tmp8Result = activity(tmp[10]);
        }
        return Promise.resolve(channel);
      }, (arg0) => Promise.reject(arg0));
    }
  },
  sendActivityInviteUser(userId) {
    const self = this;
    ({ type: importDefault, activity: dependencyMap, content: closure_3, location: require } = userId);
    const obj = _modDef4491;
    return _modDef4491.ensurePrivateChannel(userId.userId).then((channelId) => self.sendActivityInvite({ channelId, type: closure_1, activity: closure_2, content: closure_3, location: closure_0 }));
  },
  getJoinSecret(arg0, arg1, arg2, arg3, arg4) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    const callback = arg3;
    closure_4 = arg4;
    return callback(function*() {
      closure_0 = tmp4;
      obj1 = {};
      if (null != closure_1_3) {
        obj1.channel_id = closure_1_3;
      }
      if (null != closure_1_4) {
        obj1.message_id = closure_1_4;
      }
      const HTTP = closure_1_0(530).HTTP;
      const obj2 = { url: null, retries: 3, query: null, rejectWithError: null };
      obj2[0] = closure_1_5.USER_ACTIVITY_JOIN(closure_1_0, c1, dependencyMap);
      obj2[2] = obj1;
      const obj4 = closure_1_0(530);
      obj2[3] = obj4.rejectWithMigratedError();
      closure_0 = yield HTTP.get(obj2);
      const obj = { secret: null, joinUrl: null };
      obj[0] = closure_0.body.secret;
      obj[1] = closure_0.body.join_url;
      return obj;
    })();
  },
  subscribeActivities(items) {
    closure_0 = items;
    return callback(function*() {
      const mapped = v0.map((userId) => ({ user_id: userId.userId, application_id: userId.applicationId, party_id: userId.partyId, message_id: userId.messageId, channel_id: userId.channelId }));
      const HTTP = v0(closure_1_2[5]).HTTP;
      obj1 = { url: null, body: null, retries: 1, rejectWithError: null };
      obj1[0] = closure_1_5.USER_ACTIVITY_SUBSCRIBE;
      const obj2 = { subscriptions: null };
      obj2[0] = mapped;
      obj1[1] = obj2;
      obj1[3] = v0(closure_1_2[5]).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return arg1.body;
    })();
  }
};