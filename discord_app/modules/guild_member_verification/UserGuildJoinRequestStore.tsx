// discord_app/modules/guild_member_verification/UserGuildJoinRequestStore.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";
import { fromGuildPropertiesWithAdditionalFields } from "../../utils/GuildRecordUtils.tsx";
import { isActionedApplicationStatus } from "GuildJoinRequestUtils.tsx";

const require = arg1;
function handleGatewayJoinRequestUpdate(arg0) {
  let guildId;
  let request;
  ({ guildId, request } = arg0);
  if (null != request) {
    let obj = { joinRequestId: null, guildId: null, userId: null, user: null, createdAt: null, formResponses: null, rejectionReason: null, applicationStatus: null, actionedAt: null, actionedByUser: null, lastSeen: null, interviewChannelId: null };
    ({ join_request_id: obj2[0], guild_id: obj2[1], user_id: obj2[2], user: obj2[3], created_at: obj2[4], form_responses: obj2[5], rejection_reason: obj2[6], application_status: obj2[7], actioned_at: obj2[8], actioned_by_user: obj2[9], last_seen: obj2[10], interview_channel_id: obj2[11] } = request);
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (obj.userId !== currentUser.id) {
        return false;
      }
    }
    obj = isActionedApplicationStatus /* isActionedApplicationStatus */;
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
let closure_6 = {};
class UserGuildJoinRequestStore extends Store {
}
const prototype = UserGuildJoinRequestStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(mergeGuildAvatar);
};
prototype["getRequest"] = function getRequest(arg0) {
  return table[arg0];
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
  return mapped.filter((arg0) => null != arg0);
};
prototype["getJoinRequestGuild"] = function getJoinRequestGuild(guildId) {
  let fromGuildBasicResult = null;
  if (null != dependencyMap[guildId]) {
    fromGuildBasicResult = fromGuildPropertiesWithAdditionalFields /* fromGuildPropertiesWithAdditionalFields */.fromGuildBasic(dependencyMap[guildId]);
    const obj = fromGuildPropertiesWithAdditionalFields /* fromGuildPropertiesWithAdditionalFields */;
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
const userGuildJoinRequestStore = new UserGuildJoinRequestStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guildJoinRequests) {
    guildJoinRequests = guildJoinRequests.guildJoinRequests;
    let c5 = false;
    let closure_6 = {};
    let closure_4 = {};
    const item = guildJoinRequests.forEach((guild_id) => {
      guild_id = guild_id.guild_id;
      if (null != guild_id) {
        const obj = { joinRequestId: null, guildId: null, userId: null, user: null, createdAt: null, formResponses: null, rejectionReason: null, applicationStatus: null, actionedAt: null, actionedByUser: null, lastSeen: null, interviewChannelId: null };
        ({ join_request_id: obj[0], guild_id: obj[1], user_id: obj[2], user: obj[3], created_at: obj[4], form_responses: obj[5], rejection_reason: obj[6], application_status: obj[7], actioned_at: obj[8], actioned_by_user: obj[9], last_seen: obj[10], interview_channel_id: obj[11] } = guild_id);
        closure_4[guild_id] = obj;
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
    let guildId;
    let request;
    ({ request, guildId } = arg0);
    if (null != request) {
      const obj = { joinRequestId: null, guildId: null, userId: null, user: null, createdAt: null, formResponses: null, rejectionReason: null, applicationStatus: null, actionedAt: null, actionedByUser: null, lastSeen: null, interviewChannelId: null };
      ({ join_request_id: obj[0], guild_id: obj[1], user_id: obj[2], user: obj[3], created_at: obj[4], form_responses: obj[5], rejection_reason: obj[6], application_status: obj[7], actioned_at: obj[8], actioned_by_user: obj[9], last_seen: obj[10], interview_channel_id: obj[11] } = request);
      if (obj2.isApprovedAndAcked(obj)) {
        delete tmp[tmp2];
        if (c3 === guildId) {
          c3 = null;
        }
      } else {
        tmp8[guildId] = obj;
      }
      obj2 = isActionedApplicationStatus /* isActionedApplicationStatus */;
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
    let c5 = true;
    const item = guilds.forEach((id) => {
      id = id.id;
      closure_6[id] = { id, name: id.name, features: id.features, icon: id.icon, splash: id.splash };
    });
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function handleVerificationFormUpdate(form) {
    let splash;
    form = form.form;
    let guild;
    if (form != null) {
      guild = form.guild;
    }
    if (null != guild) {
      guild = form.guild;
      let features = guild.features;
      const obj = { id: null, name: null, icon: null, features: null, splash: null };
      ({ id: obj[0], name: obj[1], icon: obj[2], splash } = guild);
      if (features == null) {
        features = [];
      }
      obj[3] = features;
      obj[4] = splash;
      closure_6[form.guildId] = obj;
      const tmp2 = closure_6;
    }
  },
  INVITE_ACCEPT_SUCCESS: function handleInviteSuccess(invite) {
    let features;
    let guild;
    let id;
    let join_request;
    let splash;
    ({ guild, join_request } = invite.invite);
    if (null != guild) {
      if (null != join_request) {
        let obj = { joinRequestId: null, guildId: null, userId: null, user: null, createdAt: null, formResponses: null, rejectionReason: null, applicationStatus: null, actionedAt: null, actionedByUser: null, lastSeen: null, interviewChannelId: null };
        ({ join_request_id: obj[0], guild_id: obj[1], user_id: obj[2], user: obj[3], created_at: obj[4], form_responses: obj[5], rejection_reason: obj[6], application_status: obj[7], actioned_at: obj[8], actioned_by_user: obj[9], last_seen: obj[10], interview_channel_id: obj[11] } = join_request);
        closure_4[join_request.guild_id] = obj;
        ({ id, features } = guild);
        obj = { id: null, name: null, icon: null, features: null, splash: null };
        obj[0] = id;
        ({ name: obj2[1], icon: obj2[2], splash } = guild);
        if (features == null) {
          features = [];
        }
        obj[3] = features;
        obj[4] = splash;
        closure_6[id] = obj;
        const tmp2 = closure_6;
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
    let c3 = null;
  }
});
const result = require("initialize").fileFinishedImporting("modules/guild_member_verification/UserGuildJoinRequestStore.tsx");

export default userGuildJoinRequestStore;
export const joinRequestFromServer = function joinRequestFromServer(request) {
  return { joinRequestId: request.join_request_id, guildId: request.guild_id, userId: request.user_id, user: request.user, createdAt: request.created_at, formResponses: request.form_responses, rejectionReason: request.rejection_reason, applicationStatus: request.application_status, actionedAt: request.actioned_at, actionedByUser: request.actioned_by_user, lastSeen: request.last_seen, interviewChannelId: request.interview_channel_id };
};