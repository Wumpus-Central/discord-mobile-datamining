// === Module 4382: UserGuildJoinRequestStore ===

// Module 4382 (UserGuildJoinRequestStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import GuildJoinRequestUtils from "GuildJoinRequestUtils" /* 4383 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function handleGatewayJoinRequestUpdate(arg0) {
  ({ guildId, request } = arg0);
  if (null != request) {
    let obj = { joinRequestId: null, guildId: null, userId: null, user: null, createdAt: null, formResponses: null, rejectionReason: null, applicationStatus: null, actionedAt: null, actionedByUser: null, lastSeen: null, interviewChannelId: null };
    ({ join_request_id: obj2.joinRequestId, guild_id: obj2.guildId, user_id: obj2.userId, user: obj2.user, created_at: obj2.createdAt, form_responses: obj2.formResponses, rejection_reason: obj2.rejectionReason, application_status: obj2.applicationStatus, actioned_at: obj2.actionedAt, actioned_by_user: obj2.actionedByUser, last_seen: obj2.lastSeen, interview_channel_id: obj2.interviewChannelId } = request);
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      if (obj.userId !== currentUser.id) {
        return false;
      }
    }
    obj = GuildJoinRequestUtils;
    if (obj.isApprovedAndAcked(obj)) {
      delete tmp[tmp2];
      if (c3 === guildId) {
        c3 = null;
      }
    } else {
      tmp5[guildId] = obj;
    }
  }
}
let c3 = null;
let closure_4 = {};
let c5 = false;
const dependencyMap = {};
const Store = initializeDefault.Store;
class UserGuildJoinRequestStore extends Store {
}
const prototype = UserGuildJoinRequestStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getRequest"] = function getRequest(arg0) {
  return closure_4[arg0];
};
prototype["computeGuildIds"] = function computeGuildIds() {
  const values = Object.values(closure_4);
  const mapped = values.map((guildId) => {
    guildId = undefined;
    if (guildId != null) {
      guildId = guildId.guildId;
    }
    return guildId;
  });
  return mapped.filter((item) => null != item);
};
prototype["getJoinRequestGuild"] = function getJoinRequestGuild(guildId) {
  let fromGuildBasicResult = null;
  if (null != dependencyMap[guildId]) {
    fromGuildBasicResult = GuildRecordUtils.fromGuildBasic(dependencyMap[guildId]);
  }
  return fromGuildBasicResult;
};
Object.defineProperty(prototype, "hasFetchedRequestToJoinGuilds", {
  get: function hasFetchedRequestToJoinGuilds() {
    return c5;
  },
  set: undefined
});
prototype["hasJoinRequestCoackmark"] = function hasJoinRequestCoackmark() {
  return null != c3;
};
UserGuildJoinRequestStore.displayName = "UserGuildJoinRequestStore";
const userGuildJoinRequestStore = new UserGuildJoinRequestStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guildJoinRequests) {
    guildJoinRequests = guildJoinRequests.guildJoinRequests;
    c5 = false;
    closure_6 = {};
    closure_4 = {};
    const item = guildJoinRequests.forEach((guild_id) => {
      guild_id = guild_id.guild_id;
      if (null != guild_id) {
        const obj = { joinRequestId: null, guildId: null, userId: null, user: null, createdAt: null, formResponses: null, rejectionReason: null, applicationStatus: null, actionedAt: null, actionedByUser: null, lastSeen: null, interviewChannelId: null };
        ({ join_request_id: obj.joinRequestId, guild_id: obj.guildId, user_id: obj.userId, user: obj.user, created_at: obj.createdAt, form_responses: obj.formResponses, rejection_reason: obj.rejectionReason, application_status: obj.applicationStatus, actioned_at: obj.actionedAt, actioned_by_user: obj.actionedByUser, last_seen: obj.lastSeen, interview_channel_id: obj.interviewChannelId } = guild_id);
        closure_1_4[guild_id] = obj;
      }
    });
  },
  GUILD_JOIN_REQUEST_UPDATE: handleGatewayJoinRequestUpdate,
  GUILD_JOIN_REQUEST_CREATE: handleGatewayJoinRequestUpdate,
  GUILD_JOIN_REQUEST_DELETE: function handleRemoveJoinRequest(guildId) {
    delete tmp[tmp2];
    if (c3 === guildId.guildId) {
      c3 = null;
    }
  },
  USER_GUILD_JOIN_REQUEST_UPDATE: function handleJoinRequestUpdate(arg0) {
    ({ request, guildId } = arg0);
    if (null != request) {
      const obj = { joinRequestId: null, guildId: null, userId: null, user: null, createdAt: null, formResponses: null, rejectionReason: null, applicationStatus: null, actionedAt: null, actionedByUser: null, lastSeen: null, interviewChannelId: null };
      ({ join_request_id: obj.joinRequestId, guild_id: obj.guildId, user_id: obj.userId, user: obj.user, created_at: obj.createdAt, form_responses: obj.formResponses, rejection_reason: obj.rejectionReason, application_status: obj.applicationStatus, actioned_at: obj.actionedAt, actioned_by_user: obj.actionedByUser, last_seen: obj.lastSeen, interview_channel_id: obj.interviewChannelId } = request);
      if (obj2.isApprovedAndAcked(obj)) {
        delete tmp[tmp2];
        if (c3 === guildId) {
          c3 = null;
        }
      } else {
        tmp8[guildId] = obj;
      }
      obj2 = GuildJoinRequestUtils;
    } else {
      delete tmp3[tmp2];
      if (c3 === guildId) {
        c3 = null;
      }
    }
  },
  GUILD_DELETE: function handleGuildLeave(guild) {
    delete tmp[tmp2];
    if (c3 === guild.guild.id) {
      c3 = null;
    }
  },
  USER_JOIN_REQUEST_GUILDS_FETCH: function handleJoinRequestGuildsFetch(guilds) {
    guilds = guilds.guilds;
    c5 = true;
    const item = guilds.forEach((id) => {
      id = id.id;
      dependencyMap[id] = { id, name: id.name, features: id.features, icon: id.icon, splash: id.splash };
    });
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function handleVerificationFormUpdate(form) {
    form = form.form;
    let guild;
    if (form != null) {
      guild = form.guild;
    }
    if (null != guild) {
      guild = form.guild;
      let features = guild.features;
      const obj = { id: null, name: null, icon: null, features: null, splash: null };
      ({ id: obj.id, name: obj.name, icon: obj.icon, splash } = guild);
      if (features == null) {
        features = [];
      }
      obj.features = features;
      obj.splash = splash;
      closure_6[form.guildId] = obj;
    }
  },
  INVITE_ACCEPT_SUCCESS: function handleInviteSuccess(invite) {
    ({ guild, join_request } = invite.invite);
    if (null != guild) {
      if (null != join_request) {
        let obj = { joinRequestId: null, guildId: null, userId: null, user: null, createdAt: null, formResponses: null, rejectionReason: null, applicationStatus: null, actionedAt: null, actionedByUser: null, lastSeen: null, interviewChannelId: null };
        ({ join_request_id: obj.joinRequestId, guild_id: obj.guildId, user_id: obj.userId, user: obj.user, created_at: obj.createdAt, form_responses: obj.formResponses, rejection_reason: obj.rejectionReason, application_status: obj.applicationStatus, actioned_at: obj.actionedAt, actioned_by_user: obj.actionedByUser, last_seen: obj.lastSeen, interview_channel_id: obj.interviewChannelId } = join_request);
        closure_4[join_request.guild_id] = obj;
        ({ id, features } = guild);
        obj = { id, name: null, icon: null, features: null, splash: null };
        ({ name: obj2.name, icon: obj2.icon, splash } = guild);
        if (features == null) {
          features = [];
        }
        obj.features = features;
        obj.splash = splash;
        closure_6[id] = obj;
      }
    }
  },
  ACK_APPROVED_GUILD_JOIN_REQUEST: function handleAckApprovedGuildJoinRequest(guildId) {
    delete tmp[tmp2];
    if (c3 === guildId.guildId) {
      c3 = null;
    }
  },
  USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: function handleShowCoachmark(guildId) {
    guildId = guildId.guildId;
  },
  USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: function handleClearCoachmark() {
    c3 = null;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/UserGuildJoinRequestStore.tsx");

export default userGuildJoinRequestStore;
export const joinRequestFromServer = function joinRequestFromServer(request) {
  return { joinRequestId: request.join_request_id, guildId: request.guild_id, userId: request.user_id, user: request.user, createdAt: request.created_at, formResponses: request.form_responses, rejectionReason: request.rejection_reason, applicationStatus: request.application_status, actionedAt: request.actioned_at, actionedByUser: request.actioned_by_user, lastSeen: request.last_seen, interviewChannelId: request.interview_channel_id };
};