// discord_app/modules/instant_invite/resolveInvite.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import TypeUtils from "../../../discord_common/js/packages/type-utils/TypeUtils.tsx";
import InviteTypeUtils from "InviteTypeUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = globalThis.__r;

const TrackedHTTPUtilsDefault = tmp4(4949);
require = fn;
let Constants = fn(7976);
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
  const result = require("InviteCodeUtils").parseExtraDataFromInviteKey(inviteKey);
  const baseCode = result.baseCode;
  ({ targetChannelId, targetMessageId, guildScheduledEventId } = result);
  let obj = require("InviteCodeUtils");
  let tmp = _require;
  let obj3 = { invite_code: baseCode, invite_instance_id: null };
  inviteInstanceId = undefined;
  if (inviteInstanceId != null) {
    inviteInstanceId = inviteInstanceId.inviteInstanceId;
  }
  obj3.invite_instance_id = inviteInstanceId;
  AnalyticsUtilsDefault.track(constants3.INVITE_OPENED, obj3);
  if (map.has(inviteKey)) {
    return map.get(inviteKey);
  } else {
    let inputValue;
    if (inviteInstanceId != null) {
      inputValue = inviteInstanceId.inputValue;
    }
    const obj5 = {
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
    obj5.with_games = withGames || undefined;
    let withGuildExperiments;
    if (inviteInstanceId != null) {
      withGuildExperiments = inviteInstanceId.withGuildExperiments;
    }
    obj5.with_guild_experiments = withGuildExperiments || undefined;
    const request = {
      url: closure_7.INVITE(baseCode),
      query: obj5,
      oldFormErrors: true,
      trackedActionData: null,
      rejectWithError: false,
    };
    const obj6 = {
      event: tmp(1249).NetworkActionNames.INVITE_RESOLVE,
      properties(ok) {
        let body1 = null;
        if (ok.ok) {
          body1 = ok.body;
        }
        const body = ok.body;
        code = undefined;
        if (body != null) {
          code = body.code;
        }
        const obj2 = {
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
        if (body1 != null) {
          const guild = body1.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        obj2.guild_id = id;
        let id1;
        if (body1 != null) {
          const channel = body1.channel;
          if (channel != null) {
            id1 = channel.id;
          }
        }
        obj2.channel_id = id1;
        let type;
        if (body1 != null) {
          const channel2 = body1.channel;
          if (channel2 != null) {
            type = channel2.type;
          }
        }
        obj2.channel_type = type;
        let id2;
        if (body1 != null) {
          const inviter = body1.inviter;
          if (inviter != null) {
            id2 = inviter.id;
          }
        }
        obj2.inviter_id = id2;
        obj2.code = baseCode;
        let inputValue;
        if (inviteInstanceId != null) {
          inputValue = inviteInstanceId.inputValue;
        }
        obj2.input_value = inputValue;
        obj2.location = _location;
        obj2.authenticated = AuthenticationStore.isAuthenticated();
        let prop;
        if (body1 != null) {
          prop = body1.approximate_member_count;
        }
        obj2.size_total = prop;
        let prop1;
        if (body1 != null) {
          prop1 = body1.approximate_presence_count;
        }
        obj2.size_online = prop1;
        let id3;
        if (body1 != null) {
          const target_user = body1.target_user;
          if (target_user != null) {
            id3 = target_user.id;
          }
        }
        obj2.destination_user_id = id3;
        let STREAM = null;
        if (null != body1) {
          if (body1.target_type === constants.STREAM) {
            STREAM = constants4.STREAM;
          } else if (body1.target_type === tmp14.EMBEDDED_APPLICATION) {
            STREAM = constants4.APPLICATION;
          } else {
            const inviteType = InviteTypeUtils.getInviteType(body1);
            if (constants2.FRIEND === inviteType) {
              STREAM = constants4.FRIEND_INVITE;
            } else if (constants2.GROUP_DM === inviteType) {
              STREAM = constants4.GDM_INVITE;
            } else if (constants2.GUILD === inviteType) {
              STREAM = constants4.SERVER_INVITE;
            } else {
              const _String = String;
              STREAM = String(inviteType);
            }
            const tmp3Result = InviteTypeUtils;
          }
        }
        obj2.invite_type = STREAM;
        obj2.user_banned = code === constants5.USER_BANNED;
        let id4;
        if (body1 != null) {
          const guild2 = body1.guild;
          if (guild2 != null) {
            id4 = guild2.id;
          }
        }
        obj2.user_is_member = null != GuildStore.getGuild(id4);
        return TypeUtils.exact(obj2);
      },
    };
    request.trackedActionData = obj6;
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
            const obj = {
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
            if (inviteInstanceId != null) {
              inputValue = inviteInstanceId.inputValue;
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
                } else if (constants2.GROUP_DM === inviteType) {
                  STREAM = constants4.GDM_INVITE;
                } else if (constants2.GUILD === inviteType) {
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
            if (inviteInstanceId != null) {
              inviteInstanceId = inviteInstanceId.inviteInstanceId;
            }
            if (inviteInstanceId == null) {
              inviteInstanceId = null;
            }
            obj.invite_instance_id = inviteInstanceId;
            AnalyticsUtilsDefault.track(constants3.INVITE_RESOLVED, obj, { flush: true });
          }
          return { invite: body, code };
        },
        (body) => {
          let tmp = null != body.body;
          if (tmp) {
            tmp = body.body.code === constants5.USER_BANNED;
          }
          if (null != closure_1) {
            const obj3 = {
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
            obj3.input_value = inputValue;
            obj3.location = tmp3;
            obj3.authenticated = AuthenticationStore.isAuthenticated();
            obj3.user_banned = tmp;
            body = body.body;
            code = undefined;
            if (body != null) {
              code = body.code;
            }
            obj3.error_code = code;
            const body2 = body.body;
            let message;
            if (body2 != null) {
              message = body2.message;
            }
            obj3.error_message = message;
            AnalyticsUtilsDefault.track(constants3.INVITE_RESOLVED, obj3, { flush: true });
          }
          return { invite: null, code, banned: tmp };
        },
      )
      .finally(() => {
        map.delete(closure_0);
      });
    const result1 = map.set(inviteKey, cleanupPromise);
    return cleanupPromise;
  }
}
