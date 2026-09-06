// discord_app/modules/instant_invite/resolveInvite.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import TypeUtils from "../../../discord_common/js/packages/type-utils/TypeUtils.tsx";
import InviteTypeUtils from "InviteTypeUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const TrackedHTTPUtilsDefault = tmp4(4753);
require = fn;
let Constants = fn(7736);
({ InviteTargetTypes: hasOwnProperty, InviteTypes: metroRequire } = Constants);
Constants = fn(1074);
({ Endpoints: closure_7, AnalyticEvents: closure_8, LoggingInviteTypes: closure_9, AbortCodes: c10 } = Constants);
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/instant_invite/resolveInvite.tsx");

export default function resolveInvite(inviteKey, _location, inviteInstanceId) {
  _require = inviteKey;
  importDefault = _location;
  dependencyMap = inviteInstanceId;
  let obj = require("InviteCodeUtils");
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  const baseCode = result.baseCode;
  ({ targetChannelId, targetMessageId, guildScheduledEventId } = result);
  let obj1 = AnalyticsUtilsDefault;
  obj = { invite_code: baseCode, invite_instance_id: null };
  inviteInstanceId = undefined;
  if (inviteInstanceId != null) {
    inviteInstanceId = inviteInstanceId.inviteInstanceId;
  }
  obj.invite_instance_id = inviteInstanceId;
  obj1.track(constants3.INVITE_OPENED, obj);
  if (map.has(inviteKey)) {
    return obj4.get(inviteKey);
  } else {
    let inputValue;
    if (inviteInstanceId != null) {
      inputValue = inviteInstanceId.inputValue;
    }
    obj = {
      inputValue,
      with_counts: true,
      with_expiration: true,
      guild_scheduled_event_id: guildScheduledEventId,
      target_channel_id: targetChannelId,
      target_message_id: targetMessageId,
      with_permissions: true,
      with_games: null,
      with_guild_experiments: null,
    };
    let withGames;
    if (inviteInstanceId != null) {
      withGames = inviteInstanceId.withGames;
    }
    obj.with_games = withGames || undefined;
    let withGuildExperiments;
    if (inviteInstanceId != null) {
      withGuildExperiments = inviteInstanceId.withGuildExperiments;
    }
    obj.with_guild_experiments = withGuildExperiments || undefined;
    const request = {
      url: closure_7.INVITE(baseCode),
      query: obj,
      oldFormErrors: true,
      trackedActionData: null,
      rejectWithError: false,
    };
    obj1 = {
      event: tmp(1250).NetworkActionNames.INVITE_RESOLVE,
      properties(ok) {
        let body = null;
        if (ok.ok) {
          body = ok.body;
        }
        body = ok.body;
        code = undefined;
        if (body != null) {
          code = body.code;
        }
        const obj = {
          resolved: ok.ok,
          guild_id: null,
          channel_id: null,
          channel_type: null,
          inviter_id: null,
          code: null,
          input_value: null,
          location: null,
          authenticated: null,
          size_total: null,
          size_online: null,
          destination_user_id: null,
          invite_type: null,
          user_banned: null,
          user_is_member: null,
        };
        let id;
        if (body != null) {
          const guild = body.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        obj.guild_id = id;
        let id1;
        if (body != null) {
          const channel = body.channel;
          if (channel != null) {
            id1 = channel.id;
          }
        }
        obj.channel_id = id1;
        let type;
        if (body != null) {
          const channel2 = body.channel;
          if (channel2 != null) {
            type = channel2.type;
          }
        }
        obj.channel_type = type;
        let id2;
        if (body != null) {
          const inviter = body.inviter;
          if (inviter != null) {
            id2 = inviter.id;
          }
        }
        obj.inviter_id = id2;
        obj.code = baseCode;
        let inputValue;
        if (inviteInstanceId != null) {
          inputValue = inviteInstanceId.inputValue;
        }
        obj.input_value = inputValue;
        obj.location = _location;
        obj.authenticated = AuthenticationStore.isAuthenticated();
        let prop;
        if (body != null) {
          prop = body.approximate_member_count;
        }
        obj.size_total = prop;
        let prop1;
        if (body != null) {
          prop1 = body.approximate_presence_count;
        }
        obj.size_online = prop1;
        let id3;
        if (body != null) {
          const target_user = body.target_user;
          if (target_user != null) {
            id3 = target_user.id;
          }
        }
        obj.destination_user_id = id3;
        let STREAM = null;
        if (null != body) {
          if (body.target_type === constants.STREAM) {
            STREAM = constants4.STREAM;
          } else if (body.target_type === tmp14.EMBEDDED_APPLICATION) {
            STREAM = constants4.APPLICATION;
          } else {
            const inviteType = InviteTypeUtils.getInviteType(body);
            if (constants2.FRIEND === inviteType) {
              STREAM = constants4.FRIEND_INVITE;
            } else if (tmp16.GROUP_DM === inviteType) {
              STREAM = constants4.GDM_INVITE;
            } else if (tmp16.GUILD === inviteType) {
              STREAM = constants4.SERVER_INVITE;
            } else {
              const _String = String;
              STREAM = String(inviteType);
            }
            const tmp3Result = InviteTypeUtils;
          }
        }
        obj.invite_type = STREAM;
        obj.user_banned = code === constants5.USER_BANNED;
        let id4;
        if (body != null) {
          const guild2 = body.guild;
          if (guild2 != null) {
            id4 = guild2.id;
          }
        }
        obj.user_is_member = null != GuildStore.getGuild(id4);
        return obj.exact(obj);
      },
    };
    request.trackedActionData = obj1;
    value = TrackedHTTPUtilsDefault.get(request);
    const tmp4Result = TrackedHTTPUtilsDefault;
    const cleanupPromise = value
      .then(
        (body) => {
          body = body.body;
          if (null != closure_1) {
            let id = null;
            if (null != body.guild) {
              id = body.guild.id;
            }
            let obj = {
              resolved: true,
              guild_id: id,
              channel_id: null,
              channel_type: null,
              inviter_id: null,
              code: null,
              input_value: null,
              location: null,
              authenticated: null,
              size_total: null,
              size_online: null,
              destination_user_id: null,
              invite_type: null,
              user_is_member: null,
              invite_instance_id: null,
            };
            let id1 = null;
            if (null != body.channel) {
              id1 = body.channel.id;
            }
            obj.channel_id = id1;
            let type = null;
            if (null != body.channel) {
              type = body.channel.type;
            }
            obj.channel_type = type;
            let id2 = null;
            if (body.inviter) {
              id2 = body.inviter.id;
            }
            obj.inviter_id = id2;
            obj.code = baseCode;
            let inputValue;
            if (closure_2 != null) {
              inputValue = tmp7.inputValue;
            }
            obj.input_value = inputValue;
            obj.location = tmp;
            obj.authenticated = AuthenticationStore.isAuthenticated();
            ({ approximate_member_count: obj.size_total, approximate_presence_count: obj.size_online } = body);
            let id3 = null;
            if (null != body.target_user) {
              id3 = body.target_user.id;
            }
            obj.destination_user_id = id3;
            let STREAM = null;
            if (null != body) {
              if (body.target_type === constants.STREAM) {
                STREAM = constants4.STREAM;
              } else if (body.target_type === tmp12.EMBEDDED_APPLICATION) {
                STREAM = constants4.APPLICATION;
              } else {
                const inviteType = InviteTypeUtils.getInviteType(body);
                if (constants2.FRIEND === inviteType) {
                  STREAM = constants4.FRIEND_INVITE;
                } else if (tmp15.GROUP_DM === inviteType) {
                  STREAM = constants4.GDM_INVITE;
                } else if (tmp15.GUILD === inviteType) {
                  STREAM = constants4.SERVER_INVITE;
                } else {
                  const _String = String;
                  STREAM = String(inviteType);
                }
              }
            }
            obj.invite_type = STREAM;
            let id4;
            if (body != null) {
              const guild = body.guild;
              if (guild != null) {
                id4 = guild.id;
              }
            }
            obj.user_is_member = null != GuildStore.getGuild(id4);
            inviteInstanceId = undefined;
            if (closure_2 != null) {
              inviteInstanceId = tmp7.inviteInstanceId;
            }
            if (inviteInstanceId == null) {
              inviteInstanceId = null;
            }
            obj.invite_instance_id = inviteInstanceId;
            AnalyticsUtilsDefault.track(constants3.INVITE_RESOLVED, obj, { flush: true });
          }
          obj = { invite: body, code };
          return obj;
        },
        (body) => {
          let tmp = null != body.body;
          if (tmp) {
            tmp = body.body.code === constants5.USER_BANNED;
          }
          if (null != closure_1) {
            let obj = {
              resolved: false,
              code: baseCode,
              input_value: null,
              location: null,
              authenticated: null,
              user_banned: null,
              error_code: null,
              error_message: null,
            };
            let inputValue;
            if (inviteInstanceId != null) {
              inputValue = inviteInstanceId.inputValue;
            }
            obj.input_value = inputValue;
            obj.location = tmp3;
            obj.authenticated = AuthenticationStore.isAuthenticated();
            obj.user_banned = tmp;
            body = body.body;
            code = undefined;
            if (body != null) {
              code = body.code;
            }
            obj.error_code = code;
            const body2 = body.body;
            let message;
            if (body2 != null) {
              message = body2.message;
            }
            obj.error_message = message;
            AnalyticsUtilsDefault.track(constants3.INVITE_RESOLVED, obj, { flush: true });
          }
          obj = { invite: null, code, banned: tmp };
          return obj;
        },
      )
      .finally(() => {
        map.delete(closure_0);
      });
    const result1 = obj4.set(inviteKey, cleanupPromise);
    return cleanupPromise;
  }
  tmp = _require;
}
