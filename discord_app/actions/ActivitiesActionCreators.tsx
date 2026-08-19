// === Module 10673: ? ===

// Module 10673
import _modDef4770 from "module_4770" /* 4770 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4663 */;

const require = fn;
({ Endpoints: c5, ActivityTypes: closure_6, AnalyticEvents: error, LoggingInviteTypes: closure_8 } = ME);
const result = require("obj132").fileFinishedImporting("actions/ActivitiesActionCreators.tsx");

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
      distributor(num[4]);
      const obj = { type: "ACTIVITY_UPDATE_START", applicationId, duration: num, distributor };
      return obj.dispatch(obj);
    });
    const HTTP = applicationId(num[5]).HTTP;
    obj = { url: constants.ACTIVITIES, body: { application_id: applicationId, token, duration: num, share_activity: share_activity.shareActivity, distributor, closed: flag, exePath, voice_channel_id: voiceChannelId, session_id: sessionId, media_session_id: mediaSessionId }, retries: 1, oldFormErrors: true, rejectWithError: true };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((result) => {
      distributor(num[4]);
      const obj = { type: "ACTIVITY_UPDATE_SUCCESS", applicationId, token: result.body.token, duration: num, distributor };
      obj.dispatch(obj);
    }).catch((error) => {
      distributor(num[4]);
      const obj = { type: "ACTIVITY_UPDATE_FAIL", applicationId };
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
      let obj = { type: null, activity: null, targetUserId: null };
      obj[0] = type;
      obj[1] = activity;
      obj[2] = targetUserId;
      obj[0] = obj;
      obj[1] = MessageSendLocation.ACTIVITY_SHARE;
      const obj4 = importDefault(channel[6]);
      return tmp7Result.sendMessage(channel.id, parsed, false, obj).then((result) => {
        importDefault(channel[8]);
        const obj = { location: closure_1, invite_type: null, application_id: null, guild_id: null, channel_id: null, message_id: null };
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
        if (null != result) {
          id = result.body.id;
        }
        obj[5] = id;
        obj.trackWithMetadata(closure_1_7.INVITE_SENT, obj);
        const activitySessionKey = activity(channel[9]).getActivitySessionKey(activity);
        if (null != activitySessionKey) {
          activity(channel[10]).markChannelInvited(activitySessionKey, channel.id);
          const tmp8Result = activity(channel[10]);
        }
        return Promise.resolve(channel);
      }, (arg0) => Promise.reject(arg0));
    }
  },
  sendActivityInviteUser(userId) {
    const self = this;
    ({ type: importDefault, activity: dependencyMap, content: closure_3, location: require } = userId);
    return _modDef4770.ensurePrivateChannel(userId.userId).then((result) => self.sendActivityInvite({ channelId: result, type: closure_1, activity: closure_2, content: closure_3, location: closure_0 }));
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
      const mapped = v0.map((item, index) => ({ user_id: item.userId, application_id: item.applicationId, party_id: item.partyId, message_id: item.messageId, channel_id: item.channelId }));
      const HTTP = v0(closure_1_2[5]).HTTP;
      obj1 = { url: null, body: null, retries: 1, rejectWithError: null };
      obj1[0] = closure_1_5.USER_ACTIVITY_SUBSCRIBE;
      const obj2 = { subscriptions: null };
      obj2[0] = mapped;
      obj1[1] = obj2;
      obj1[3] = v0(closure_1_2[5]).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return body.body;
    })();
  }
};