// discord_app/modules/guild_member_verification/UserGuildJoinRequestStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildRecordUtils from "../../utils/GuildRecordUtils.tsx";
import GuildJoinRequestUtils from "GuildJoinRequestUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4, closure_6, guild_id;

function handleGatewayJoinRequestUpdate(arg0) {
  let guildId;
  let request;
  ({ guildId, request } = arg0);
  if (null != request) {
    const obj3 = {
      joinRequestId: null,
      guildId: null,
      userId: null,
      user: null,
      createdAt: null,
      formResponses: null,
      rejectionReason: null,
      applicationStatus: null,
      actionedAt: null,
      actionedByUser: null,
      lastSeen: null,
      interviewChannelId: null,
    };
    ({
      join_request_id: obj2.joinRequestId,
      guild_id: obj2.guildId,
      user_id: obj2.userId,
      user: obj2.user,
      created_at: obj2.createdAt,
      form_responses: obj2.formResponses,
      rejection_reason: obj2.rejectionReason,
      application_status: obj2.applicationStatus,
      actioned_at: obj2.actionedAt,
      actioned_by_user: obj2.actionedByUser,
      last_seen: obj2.lastSeen,
      interview_channel_id: obj2.interviewChannelId,
    } = request);
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      if (obj3.userId !== currentUser.id) {
        return false;
      }
    }
    const obj = GuildJoinRequestUtils;
    if (obj.isApprovedAndAcked(obj3)) {
      delete closure_4[guildId];
      if (c3 === guildId) {
        c3 = null;
      }
    } else {
      closure_4[guildId] = obj3;
    }
  }
}
let c3 = null;
const React3 = {};
let c5 = false;
const metroRequire = {};
const Store = get_initializedDefault.Store;
class UserGuildJoinRequestStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getRequest(arg0) {
    return closure_4[arg0];
  }
  computeGuildIds() {
    const values = Object.values(closure_4);
    const mapped = values.map((guildId) => {
      guildId = undefined;
      if (guildId != null) {
        guildId = guildId.guildId;
      }
      return guildId;
    });
    return mapped.filter((item) => null != item);
  }
  getJoinRequestGuild(guildId) {
    let fromGuildBasicResult = null;
    if (null != closure_6[guildId]) {
      const obj = GuildRecordUtils;
      fromGuildBasicResult = obj.fromGuildBasic(closure_6[guildId]);
    }
    return fromGuildBasicResult;
  }
  hasJoinRequestCoackmark() {
    return null != c3;
  }
}
Object.defineProperty(UserGuildJoinRequestStore.prototype, "hasFetchedRequestToJoinGuilds", {
  get: function hasFetchedRequestToJoinGuilds() {
    return c5;
  },
  set: undefined,
});
UserGuildJoinRequestStore.displayName = "UserGuildJoinRequestStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guildJoinRequests) {
    guildJoinRequests = guildJoinRequests.guildJoinRequests;
    c5 = false;
    closure_6 = {};
    closure_4 = {};
    const item = guildJoinRequests.forEach((guild_id) => {
      guild_id = guild_id.guild_id;
      if (null != guild_id) {
        const obj = {
          joinRequestId: null,
          guildId: null,
          userId: null,
          user: null,
          createdAt: null,
          formResponses: null,
          rejectionReason: null,
          applicationStatus: null,
          actionedAt: null,
          actionedByUser: null,
          lastSeen: null,
          interviewChannelId: null,
        };
        ({
          join_request_id: obj.joinRequestId,
          guild_id: obj.guildId,
          user_id: obj.userId,
          user: obj.user,
          created_at: obj.createdAt,
          form_responses: obj.formResponses,
          rejection_reason: obj.rejectionReason,
          application_status: obj.applicationStatus,
          actioned_at: obj.actionedAt,
          actioned_by_user: obj.actionedByUser,
          last_seen: obj.lastSeen,
          interview_channel_id: obj.interviewChannelId,
        } = guild_id);
        closure_1_4[guild_id] = obj;
      }
    });
  },
  GUILD_JOIN_REQUEST_UPDATE: handleGatewayJoinRequestUpdate,
  GUILD_JOIN_REQUEST_CREATE: handleGatewayJoinRequestUpdate,
  GUILD_JOIN_REQUEST_DELETE: function handleRemoveJoinRequest(guildId) {
    guildId = guildId.guildId;
    delete closure_4[guildId];
    if (c3 === guildId) {
      c3 = null;
    }
  },
  USER_GUILD_JOIN_REQUEST_UPDATE: function handleJoinRequestUpdate(arg0) {
    let guildId;
    let request;
    ({ request, guildId } = arg0);
    if (null != request) {
      const obj = {
        joinRequestId: null,
        guildId: null,
        userId: null,
        user: null,
        createdAt: null,
        formResponses: null,
        rejectionReason: null,
        applicationStatus: null,
        actionedAt: null,
        actionedByUser: null,
        lastSeen: null,
        interviewChannelId: null,
      };
      ({
        join_request_id: obj.joinRequestId,
        guild_id: obj.guildId,
        user_id: obj.userId,
        user: obj.user,
        created_at: obj.createdAt,
        form_responses: obj.formResponses,
        rejection_reason: obj.rejectionReason,
        application_status: obj.applicationStatus,
        actioned_at: obj.actionedAt,
        actioned_by_user: obj.actionedByUser,
        last_seen: obj.lastSeen,
        interview_channel_id: obj.interviewChannelId,
      } = request);
      const obj2 = GuildJoinRequestUtils;
      if (obj2.isApprovedAndAcked(obj)) {
        delete closure_4[guildId];
        if (c3 === guildId) {
          c3 = null;
        }
      } else {
        closure_4[guildId] = obj;
      }
    } else {
      delete closure_4[guildId];
      if (c3 === guildId) {
        c3 = null;
      }
    }
  },
  GUILD_DELETE: function handleGuildLeave(guild) {
    const id = guild.guild.id;
    delete closure_4[id];
    if (c3 === id) {
      c3 = null;
    }
  },
  USER_JOIN_REQUEST_GUILDS_FETCH: function handleJoinRequestGuildsFetch(guilds) {
    guilds = guilds.guilds;
    c5 = true;
    const item = guilds.forEach((id) => {
      id = id.id;
      closure_1_6[id] = { id, name: id.name, features: id.features, icon: id.icon, splash: id.splash };
    });
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function handleVerificationFormUpdate(form) {
    let splash;
    form = form.form;
    let guild1;
    const guildId = form.guildId;
    if (form != null) {
      guild1 = form.guild;
    }
    if (null != guild1) {
      const guild = form.guild;
      let features = guild.features;
      const obj = { id: null, name: null, icon: null, features, splash };
      ({ id: obj.id, name: obj.name, icon: obj.icon, splash } = guild);
      if (features == null) {
        features = [];
      }
      closure_6[guildId] = obj;
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
        const obj = {
          joinRequestId: null,
          guildId: null,
          userId: null,
          user: null,
          createdAt: null,
          formResponses: null,
          rejectionReason: null,
          applicationStatus: null,
          actionedAt: null,
          actionedByUser: null,
          lastSeen: null,
          interviewChannelId: null,
        };
        ({
          join_request_id: obj.joinRequestId,
          guild_id: obj.guildId,
          user_id: obj.userId,
          user: obj.user,
          created_at: obj.createdAt,
          form_responses: obj.formResponses,
          rejection_reason: obj.rejectionReason,
          application_status: obj.applicationStatus,
          actioned_at: obj.actionedAt,
          actioned_by_user: obj.actionedByUser,
          last_seen: obj.lastSeen,
          interview_channel_id: obj.interviewChannelId,
        } = join_request);
        closure_4[join_request.guild_id] = obj;
        ({ id, features } = guild);
        const obj3 = { id, name: null, icon: null, features, splash };
        ({ name: obj2.name, icon: obj2.icon, splash } = guild);
        if (features == null) {
          features = [];
        }
        closure_6[id] = obj3;
      }
    }
  },
  ACK_APPROVED_GUILD_JOIN_REQUEST: function handleAckApprovedGuildJoinRequest(guildId) {
    guildId = guildId.guildId;
    delete closure_4[guildId];
    if (c3 === guildId) {
      c3 = null;
    }
  },
  USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: function handleShowCoachmark(guildId) {
    guildId = guildId.guildId;
  },
  USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: function handleClearCoachmark() {
    c3 = null;
  },
};
const userGuildJoinRequestStore = new UserGuildJoinRequestStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/guild_member_verification/UserGuildJoinRequestStore.tsx");

export default userGuildJoinRequestStore;
export const joinRequestFromServer = function joinRequestFromServer(request) {
  return {
    joinRequestId: request.join_request_id,
    guildId: request.guild_id,
    userId: request.user_id,
    user: request.user,
    createdAt: request.created_at,
    formResponses: request.form_responses,
    rejectionReason: request.rejection_reason,
    applicationStatus: request.application_status,
    actionedAt: request.actioned_at,
    actionedByUser: request.actioned_by_user,
    lastSeen: request.last_seen,
    interviewChannelId: request.interview_channel_id,
  };
};
