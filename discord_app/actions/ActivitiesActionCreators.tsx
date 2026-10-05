// === Module 11133: ActivitiesActionCreators ===

// Module 11133 (ActivitiesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageConstants from "MessageConstants" /* 4883 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let _asyncToGenerator = _asyncToGenerator_mod;
({ Endpoints: hasOwnProperty, ActivityTypes: metroRequire, AnalyticEvents: metroImportDefault, LoggingInviteTypes: metroImportAll } = Constants);
const MessageSendLocation = MessageConstants.MessageSendLocation;
let obj = {
  updateActivity(applicationId) {
    applicationId = applicationId.applicationId;
    const distributor = applicationId.distributor;
    let token = applicationId.token;
    const shareActivity = applicationId.shareActivity;
    if (token === undefined) {
      token = null;
    }
    let num = applicationId.duration;
    if (num === undefined) {
      num = 0;
    }
    let flag = applicationId.closed;
    if (flag === undefined) {
      flag = false;
    }
    let exePath = applicationId.exePath;
    if (exePath === undefined) {
      exePath = null;
    }
    let voiceChannelId = applicationId.voiceChannelId;
    if (voiceChannelId === undefined) {
      voiceChannelId = null;
    }
    let sessionId = applicationId.sessionId;
    if (sessionId === undefined) {
      sessionId = null;
    }
    let mediaSessionId = applicationId.mediaSessionId;
    if (mediaSessionId === undefined) {
      mediaSessionId = null;
    }
    let obj = distributor(num[4]);
    obj.wait(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "ACTIVITY_UPDATE_START", applicationId, duration: num, distributor };
      return obj.dispatch(obj2);
    });
    const HTTP = applicationId(num[5]).HTTP;
    const request = { url: constants.ACTIVITIES, body: { application_id: applicationId, token, duration: num, share_activity: shareActivity, distributor, closed: flag, exePath, voice_channel_id: voiceChannelId, session_id: sessionId, media_session_id: mediaSessionId }, retries: 1, oldFormErrors: true, rejectWithError: true };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then((body) => {
      const token = body.body.token;
      const obj = DispatcherDefault;
      const obj2 = { type: "ACTIVITY_UPDATE_SUCCESS", applicationId, token, duration: num, distributor };
      obj.dispatch(obj2);
    });
    nextPromise.catch(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "ACTIVITY_UPDATE_FAIL", applicationId };
      obj.dispatch(obj2);
    });
  },
  sendActivityInvite(activity) {
    let _location;
    let content;
    let obj2;
    let targetUserId;
    let type;
    activity = activity.activity;
    ({ content, location: importDefault } = activity);
    ({ type, targetUserId } = activity);
    const channel = ChannelStore.getChannel(activity.channelId);
    if (null == channel) {
      return Promise.resolve(null);
    } else {
      const parse = require("MessageParser").parse;
      require("MessageParser");
      const tmp8 = channel;
      if (content == null) {
        content = "";
      }
      const parsed = parse(channel, content);
      let obj = { activityAction: obj2, location: MessageSendLocation.ACTIVITY_SHARE };
      obj2 = { type, activity, targetUserId };
      const tmp7Result = require("MessageActionCreators");
      const sendMessageResult = tmp7Result.sendMessage(channel.id, parsed, false, obj);
      return sendMessageResult.then((body) => {
        let APPLICATION;
        let id;
        const obj = { location: importDefault, invite_type: APPLICATION, application_id: activity.application_id, guild_id: channel.getGuildId(), channel_id: channel.id, message_id: id };
        const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
        const INVITE_SENT = metroImportDefault.INVITE_SENT;
        AppAnalyticsUtilsDefault;
        if (activity.type === metroRequire.LISTENING) {
          APPLICATION = metroImportAll.SPOTIFY;
        } else {
          APPLICATION = metroImportAll.APPLICATION;
        }
        id = null;
        if (null != body) {
          id = body.body.id;
        }
        trackWithMetadata(INVITE_SENT, obj);
        return Promise.resolve(channel);
      }, (arg0) => Promise.reject(arg0));
    }
  },
  sendActivityInviteUser(userId) {
    let closure_129_0;
    let closure_129_1;
    let closure_129_2;
    let closure_129_3;
    const self = this;
    ({ type: closure_129_1, activity: closure_129_2, content: closure_129_3, location: closure_129_0 } = userId);
    userId = userId.userId;
    let obj = ChannelActionCreatorsDefault;
    const ensurePrivateChannelResult = obj.ensurePrivateChannel(userId);
    return ensurePrivateChannelResult.then((channelId) => {
      const obj = { channelId, type, activity, content, location: _location };
      return self.sendActivityInvite(obj);
    });
  },
  getJoinSecret(arg0, arg1, arg2, arg3, arg4) {
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    _asyncToGenerator = arg3;
    let closure_4 = arg4;
    return (async () => {
      let c1;
      let obj5;
      let tmp3;
      const obj4 = {};
      if (null != channel_id) {
        obj4.channel_id = channel_id;
      }
      if (null != message_id) {
        obj4.message_id = message_id;
      }
      const HTTP = tmp3(c2[5]).HTTP;
      const request = { url: constants.USER_ACTIVITY_JOIN(tmp3, closure_1, closure_2), retries: 3, query: obj4, rejectWithError: obj5.rejectWithMigratedError() };
      const get = HTTP.get;
      obj5 = tmp3(c2[5]);
      await get(request);
      tmp3 = value;
      const obj = { secret: tmp3.body.secret, joinUrl: tmp3.body.join_url };
      return obj;
    })();
  },
  subscribeActivities(items) {
    let closure_0 = items;
    return (async () => {
      let c1;
      let obj4;
      let obj8;
      const mapped = v3.map((userId) => ({ user_id: userId.userId, application_id: userId.applicationId, party_id: userId.partyId, message_id: userId.messageId, channel_id: userId.channelId }));
      const HTTP = v3(dependencyMap[5]).HTTP;
      const request = { url: constants.USER_ACTIVITY_SUBSCRIBE, body: obj4, retries: 1, rejectWithError: obj8.rejectWithMigratedError() };
      obj4 = { subscriptions: mapped };
      const post = HTTP.post;
      obj8 = v3(dependencyMap[5]);
      await post(request);
      return value.body;
    })();
  }
};
const result = size.fileFinishedImporting("actions/ActivitiesActionCreators.tsx");

export default obj;