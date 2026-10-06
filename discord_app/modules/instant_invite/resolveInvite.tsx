// discord_app/modules/instant_invite/resolveInvite.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import TypeUtils from "../../../discord_common/js/packages/type-utils/TypeUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import InviteTypeUtils from "InviteTypeUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import Constants_mod from "Constants.tsx";
import Constants_mod2 from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, code, dependencyMap, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let Constants = Constants_mod2;
({ InviteTargetTypes: hasOwnProperty, InviteTypes: metroRequire } = Constants);
Constants = Constants_mod2;
({
  Endpoints: metroImportDefault,
  AnalyticEvents: metroImportAll,
  LoggingInviteTypes: c9,
  AbortCodes: c10,
} = Constants);
const map = new Map();
let result = size.fileFinishedImporting("modules/instant_invite/resolveInvite.tsx");

export default function resolveInvite(inviteKey, _location, inviteInstanceId) {
  let guildScheduledEventId;
  let obj5;
  let targetChannelId;
  let targetMessageId;
  let withGames;
  let withGuildExperiments;
  _require = inviteKey;
  importDefault = _location;
  dependencyMap = inviteInstanceId;
  const tmp = _require;
  let obj = require("InviteCodeUtils");
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  const baseCode = result.baseCode;
  ({ targetChannelId, targetMessageId, guildScheduledEventId } = result);
  const tmp5 = AnalyticsUtilsDefault;
  let obj2 = { invite_code: baseCode, invite_instance_id: inviteInstanceId };
  inviteInstanceId = undefined;
  let track = tmp5.track;
  const INVITE_OPENED = constants3.INVITE_OPENED;
  if (inviteInstanceId != null) {
    inviteInstanceId = inviteInstanceId.inviteInstanceId;
  }
  track(INVITE_OPENED, obj2);
  if (map.has(inviteKey)) {
    return map.get(inviteKey);
  } else {
    let inputValue;
    if (inviteInstanceId != null) {
      inputValue = inviteInstanceId.inputValue;
    }
    const obj4 = {
      inputValue,
      with_counts: true,
      with_expiration: true,
      guild_scheduled_event_id: guildScheduledEventId,
      target_channel_id: targetChannelId,
      target_message_id: targetMessageId,
      with_permissions: true,
      with_games: withGames || undefined,
      with_guild_experiments: withGuildExperiments || undefined,
    };
    withGames = undefined;
    if (inviteInstanceId != null) {
      withGames = inviteInstanceId.withGames;
    }
    withGuildExperiments = undefined;
    if (inviteInstanceId != null) {
      withGuildExperiments = inviteInstanceId.withGuildExperiments;
    }
    const request = {
      url: closure_7.INVITE(baseCode),
      query: obj4,
      oldFormErrors: true,
      trackedActionData: obj5,
      rejectWithError: false,
    };
    const get = tmp4(5089).get;
    TrackedHTTPUtilsDefault;
    obj5 = {
      event: tmp(1260).NetworkActionNames.INVITE_RESOLVE,
      properties(ok) {
        let STREAM;
        let getGuild;
        let id;
        let id1;
        let id2;
        let id3;
        let id4;
        let inputValue;
        let prop;
        let prop1;
        let type;
        let body1 = null;
        if (ok.ok) {
          body1 = ok.body;
        }
        const body = ok.body;
        code = undefined;
        if (body != null) {
          code = body.code;
        }
        const USER_BANNED = constants2.USER_BANNED;
        const obj = {
          resolved: ok.ok,
          guild_id: id,
          channel_id: id1,
          channel_type: type,
          inviter_id: id2,
          code: baseCode,
          input_value: inputValue,
          location: _location,
          authenticated: AuthenticationStore.isAuthenticated(),
          size_total: prop,
          size_online: prop1,
          destination_user_id: id3,
          invite_type: STREAM,
          user_banned: code === USER_BANNED,
          user_is_member: null != getGuild(id4),
        };
        id = undefined;
        const exact = TypeUtils.exact;
        TypeUtils;
        if (body1 != null) {
          const guild = body1.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        id1 = undefined;
        if (body1 != null) {
          const channel = body1.channel;
          if (channel != null) {
            id1 = channel.id;
          }
        }
        type = undefined;
        if (body1 != null) {
          const channel2 = body1.channel;
          if (channel2 != null) {
            type = channel2.type;
          }
        }
        id2 = undefined;
        if (body1 != null) {
          const inviter = body1.inviter;
          if (inviter != null) {
            id2 = inviter.id;
          }
        }
        inputValue = undefined;
        if (inviteInstanceId != null) {
          inputValue = inviteInstanceId.inputValue;
        }
        prop = undefined;
        if (body1 != null) {
          prop = body1.approximate_member_count;
        }
        prop1 = undefined;
        if (body1 != null) {
          prop1 = body1.approximate_presence_count;
        }
        id3 = undefined;
        if (body1 != null) {
          const target_user = body1.target_user;
          if (target_user != null) {
            id3 = target_user.id;
          }
        }
        STREAM = null;
        if (null != body1) {
          if (body1.target_type === hasOwnProperty.STREAM) {
            STREAM = constants.STREAM;
          } else if (body1.target_type === tmp15.EMBEDDED_APPLICATION) {
            STREAM = constants.APPLICATION;
          } else {
            const tmp3Result = InviteTypeUtils;
            const inviteType = tmp3Result.getInviteType(body1);
            if (metroRequire.FRIEND === inviteType) {
              STREAM = constants.FRIEND_INVITE;
            } else if (metroRequire.GROUP_DM === inviteType) {
              STREAM = constants.GDM_INVITE;
            } else if (metroRequire.GUILD === inviteType) {
              STREAM = constants.SERVER_INVITE;
            } else {
              const _String = String;
              STREAM = String(inviteType);
            }
          }
        }
        id4 = undefined;
        getGuild = GuildStore.getGuild;
        if (body1 != null) {
          const guild2 = body1.guild;
          if (guild2 != null) {
            id4 = guild2.id;
          }
        }
        return exact(obj);
      },
    };
    const value = get(request);
    const nextPromise = value.then(
      (body) => {
        let STREAM;
        let getGuild;
        let id1;
        let id2;
        let id3;
        let id4;
        let inputValue;
        let type;
        body = body.body;
        if (null != _location) {
          let id = null;
          const track = AnalyticsUtilsDefault.track;
          const INVITE_RESOLVED = metroImportAll.INVITE_RESOLVED;
          AnalyticsUtilsDefault;
          if (null != body.guild) {
            id = body.guild.id;
          }
          const obj = {
            resolved: true,
            guild_id: id,
            channel_id: id1,
            channel_type: type,
            inviter_id: id2,
            code: baseCode,
            input_value: inputValue,
            location: tmp,
            authenticated: AuthenticationStore.isAuthenticated(),
            size_total: null,
            size_online: null,
            destination_user_id: id3,
            invite_type: STREAM,
            user_is_member: null != getGuild(id4),
            invite_instance_id: inviteInstanceId,
          };
          id1 = null;
          if (null != body.channel) {
            id1 = body.channel.id;
          }
          type = null;
          if (null != body.channel) {
            type = body.channel.type;
          }
          id2 = null;
          if (body.inviter) {
            id2 = body.inviter.id;
          }
          inputValue = undefined;
          if (inviteInstanceId != null) {
            inputValue = inviteInstanceId.inputValue;
          }
          ({ approximate_member_count: obj.size_total, approximate_presence_count: obj.size_online } = body);
          id3 = null;
          if (null != body.target_user) {
            id3 = body.target_user.id;
          }
          STREAM = null;
          if (null != body) {
            if (body.target_type === hasOwnProperty.STREAM) {
              STREAM = constants.STREAM;
            } else if (body.target_type === tmp12.EMBEDDED_APPLICATION) {
              STREAM = constants.APPLICATION;
            } else {
              const obj2 = InviteTypeUtils;
              const inviteType = obj2.getInviteType(body);
              if (metroRequire.FRIEND === inviteType) {
                STREAM = constants.FRIEND_INVITE;
              } else if (metroRequire.GROUP_DM === inviteType) {
                STREAM = constants.GDM_INVITE;
              } else if (metroRequire.GUILD === inviteType) {
                STREAM = constants.SERVER_INVITE;
              } else {
                const _String = String;
                STREAM = String(inviteType);
              }
            }
          }
          id4 = undefined;
          getGuild = GuildStore.getGuild;
          if (body != null) {
            const guild = body.guild;
            if (guild != null) {
              id4 = guild.id;
            }
          }
          inviteInstanceId = undefined;
          if (inviteInstanceId != null) {
            inviteInstanceId = inviteInstanceId.inviteInstanceId;
          }
          if (inviteInstanceId == null) {
            inviteInstanceId = null;
          }
          track(INVITE_RESOLVED, obj, { flush: true });
        }
        return { invite: body, code };
      },
      (body) => {
        let inputValue;
        let message;
        if (null != _location) {
          const obj2 = {
            resolved: false,
            code: baseCode,
            input_value: inputValue,
            location: tmp3,
            authenticated: AuthenticationStore.isAuthenticated(),
            user_banned: null != body.body && body.body.code === constants2.USER_BANNED,
            error_code: code,
            error_message: message,
          };
          inputValue = undefined;
          const track = AnalyticsUtilsDefault.track;
          const INVITE_RESOLVED = metroImportAll.INVITE_RESOLVED;
          AnalyticsUtilsDefault;
          if (inviteInstanceId != null) {
            inputValue = inviteInstanceId.inputValue;
          }
          body = body.body;
          code = undefined;
          if (body != null) {
            code = body.code;
          }
          const body2 = body.body;
          message = undefined;
          if (body2 != null) {
            message = body2.message;
          }
          track(INVITE_RESOLVED, obj2, { flush: true });
        }
        return { invite: null, code, banned: null != body.body && body.body.code === constants2.USER_BANNED };
      },
    );
    const cleanupPromise = nextPromise.finally(() => {
      map.delete(code);
    });
    const result1 = map.set(inviteKey, cleanupPromise);
    return cleanupPromise;
  }
}
