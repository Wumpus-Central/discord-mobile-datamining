// discord_app/modules/instant_invite/resolveInvite.tsx
import fetchFingerprint from "fetchFingerprint";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import InviteSendStates from "InviteSendStates";
import ME from "ME";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ InviteTargetTypes: c5, InviteTypes: closure_6 } = InviteSendStates);
({ Endpoints: error, AnalyticEvents: metroImportAll, LoggingInviteTypes: c9, AbortCodes: c10 } = ME);
const map = new Map();
let result = require("InviteSendStates").fileFinishedImporting("modules/instant_invite/resolveInvite.tsx");

export default function resolveInvite(inviteKey, arg1, inviteInstanceId) {
  let guildScheduledEventId;
  let targetChannelId;
  let targetMessageId;
  const _require = inviteKey;
  const importDefault = arg1;
  const dependencyMap = inviteInstanceId;
  let obj = _require(4271);
  const result = obj.parseExtraDataFromInviteKey(inviteKey);
  const baseCode = result.baseCode;
  ({ targetChannelId, targetMessageId, guildScheduledEventId } = result);
  let obj1 = importDefault(698);
  obj = { invite_code: baseCode, invite_instance_id: null };
  inviteInstanceId = undefined;
  if (inviteInstanceId != null) {
    inviteInstanceId = inviteInstanceId.inviteInstanceId;
  }
  obj[1] = inviteInstanceId;
  obj1.track(constants.INVITE_OPENED, obj);
  if (map.has(inviteKey)) {
    return obj4.get(inviteKey);
  } else {
    let inputValue;
    if (inviteInstanceId != null) {
      inputValue = inviteInstanceId.inputValue;
    }
    obj = { inputValue: null, with_counts: true, with_expiration: true, guild_scheduled_event_id: null, target_channel_id: null, target_message_id: null, with_permissions: true, with_games: null };
    obj[0] = inputValue;
    obj[3] = guildScheduledEventId;
    obj[4] = targetChannelId;
    obj[5] = targetMessageId;
    let withGames;
    if (inviteInstanceId != null) {
      withGames = inviteInstanceId.withGames;
    }
    obj[7] = withGames || undefined;
    obj1 = { url: null, query: null, oldFormErrors: true, trackedActionData: null, rejectWithError: false };
    obj1[0] = closure_7.INVITE(baseCode);
    obj1[1] = obj;
    let obj2 = { event: null, properties: null };
    obj2[0] = tmp(503).NetworkActionNames.INVITE_RESOLVE;
    obj2[1] = function properties(ok) {
      let body = null;
      if (ok.ok) {
        body = ok.body;
      }
      body = ok.body;
      let code;
      if (body != null) {
        code = body.code;
      }
      let obj = inviteKey(inviteInstanceId[9]);
      obj = { resolved: ok.ok, guild_id: null, channel_id: null, channel_type: null, inviter_id: null, code: null, input_value: null, location: null, authenticated: null, size_total: null, size_online: null, destination_user_id: null, invite_type: null, user_banned: null, user_is_member: null };
      let id;
      if (body != null) {
        const guild = body.guild;
        if (guild != null) {
          id = guild.id;
        }
      }
      obj[1] = id;
      let id1;
      if (body != null) {
        const channel = body.channel;
        if (channel != null) {
          id1 = channel.id;
        }
      }
      obj[2] = id1;
      let type;
      if (body != null) {
        const channel2 = body.channel;
        if (channel2 != null) {
          type = channel2.type;
        }
      }
      obj[3] = type;
      let id2;
      if (body != null) {
        const inviter = body.inviter;
        if (inviter != null) {
          id2 = inviter.id;
        }
      }
      obj[4] = id2;
      obj[5] = baseCode;
      let inputValue;
      if (inviteInstanceId != null) {
        inputValue = inviteInstanceId.inputValue;
      }
      obj[6] = inputValue;
      obj[7] = closure_1;
      obj[8] = baseCode.isAuthenticated();
      let prop;
      if (body != null) {
        prop = body.approximate_member_count;
      }
      obj[9] = prop;
      let prop1;
      if (body != null) {
        prop1 = body.approximate_presence_count;
      }
      obj[10] = prop1;
      let id3;
      if (body != null) {
        const target_user = body.target_user;
        if (target_user != null) {
          id3 = target_user.id;
        }
      }
      obj[11] = id3;
      let STREAM = null;
      if (null != body) {
        if (body.target_type === outer1_5.STREAM) {
          STREAM = outer1_9.STREAM;
        } else if (body.target_type === tmp14.EMBEDDED_APPLICATION) {
          STREAM = outer1_9.APPLICATION;
        } else {
          const inviteType = inviteKey(inviteInstanceId[4]).getInviteType(body);
          if (outer1_6.FRIEND === inviteType) {
            STREAM = outer1_9.FRIEND_INVITE;
          } else if (tmp16.GROUP_DM === inviteType) {
            STREAM = outer1_9.GDM_INVITE;
          } else if (tmp16.GUILD === inviteType) {
            STREAM = outer1_9.SERVER_INVITE;
          } else {
            const _String = String;
            STREAM = String(inviteType);
          }
          const tmp3Result = inviteKey(inviteInstanceId[4]);
        }
      }
      obj[12] = STREAM;
      obj[13] = code === outer1_10.USER_BANNED;
      let id4;
      if (body != null) {
        const guild2 = body.guild;
        if (guild2 != null) {
          id4 = guild2.id;
        }
      }
      obj[14] = null != outer1_4.getGuild(id4);
      return obj.exact(obj);
    };
    obj1[3] = obj2;
    const value = tmp4(5094).get(obj1);
    const tmp4Result = tmp4(5094);
    const cleanupPromise = value.then((body) => {
      body = body.body;
      if (null != callback) {
        let id = null;
        if (null != body.guild) {
          id = body.guild.id;
        }
        let obj = { resolved: true, guild_id: null, channel_id: null, channel_type: null, inviter_id: null, code: null, input_value: null, location: null, authenticated: null, size_total: null, size_online: null, destination_user_id: null, invite_type: null, user_is_member: null, invite_instance_id: null };
        obj[1] = id;
        let id1 = null;
        if (null != body.channel) {
          id1 = body.channel.id;
        }
        obj[2] = id1;
        let type = null;
        if (null != body.channel) {
          type = body.channel.type;
        }
        obj[3] = type;
        let id2 = null;
        if (body.inviter) {
          id2 = body.inviter.id;
        }
        obj[4] = id2;
        obj[5] = baseCode;
        let inputValue;
        if (inviteInstanceId != null) {
          inputValue = tmp7.inputValue;
        }
        obj[6] = inputValue;
        obj[7] = tmp;
        obj[8] = baseCode.isAuthenticated();
        ({ approximate_member_count: obj[9], approximate_presence_count: obj[10] } = body);
        let id3 = null;
        if (null != body.target_user) {
          id3 = body.target_user.id;
        }
        obj[11] = id3;
        let STREAM = null;
        if (null != body) {
          if (body.target_type === outer1_5.STREAM) {
            STREAM = outer1_9.STREAM;
          } else if (body.target_type === tmp12.EMBEDDED_APPLICATION) {
            STREAM = outer1_9.APPLICATION;
          } else {
            const inviteType = inviteKey(tmp27[4]).getInviteType(body);
            if (outer1_6.FRIEND === inviteType) {
              STREAM = outer1_9.FRIEND_INVITE;
            } else if (tmp15.GROUP_DM === inviteType) {
              STREAM = outer1_9.GDM_INVITE;
            } else if (tmp15.GUILD === inviteType) {
              STREAM = outer1_9.SERVER_INVITE;
            } else {
              const _String = String;
              STREAM = String(inviteType);
            }
            const obj2 = inviteKey(tmp27[4]);
          }
        }
        obj[12] = STREAM;
        let id4;
        if (body != null) {
          const guild = body.guild;
          if (guild != null) {
            id4 = guild.id;
          }
        }
        obj[13] = null != outer1_4.getGuild(id4);
        inviteInstanceId = undefined;
        if (inviteInstanceId != null) {
          inviteInstanceId = tmp7.inviteInstanceId;
        }
        if (inviteInstanceId == null) {
          inviteInstanceId = null;
        }
        obj[14] = inviteInstanceId;
        callback(inviteInstanceId[6]).track(outer1_8.INVITE_RESOLVED, obj, { flush: true });
        const obj4 = callback(inviteInstanceId[6]);
        tmp27 = inviteInstanceId;
      }
      obj = { invite: body, code: inviteKey };
      return obj;
    }, (body) => {
      let tmp = null != body.body;
      if (tmp) {
        tmp = body.body.code === outer1_10.USER_BANNED;
      }
      if (null != callback) {
        let obj = { resolved: false, code: null, input_value: null, location: null, authenticated: null, user_banned: null, error_code: null, error_message: null };
        obj[1] = baseCode;
        let inputValue;
        if (inviteInstanceId != null) {
          inputValue = inviteInstanceId.inputValue;
        }
        obj[2] = inputValue;
        obj[3] = tmp3;
        obj[4] = baseCode.isAuthenticated();
        obj[5] = tmp;
        body = body.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[6] = code;
        const body2 = body.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[7] = message;
        callback(inviteInstanceId[6]).track(outer1_8.INVITE_RESOLVED, obj, { flush: true });
        const obj2 = callback(inviteInstanceId[6]);
      }
      obj = { invite: null, code: closure_0, banned: tmp };
      return obj;
    }).finally(() => {
      outer1_11.delete(closure_0);
    });
    const result1 = obj4.set(inviteKey, cleanupPromise);
    return cleanupPromise;
  }
  tmp = _require;
  tmp4 = importDefault;
};