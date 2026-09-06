// === Module 9248: permissions ===

// Module 9248 (permissions)
import Constants from "Constants" /* 1074 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
({ ADMINISTRATOR: arr[0], MANAGE_GUILD: arr[1], MANAGE_ROLES: arr[2], MANAGE_CHANNELS: arr[3], KICK_MEMBERS: arr[4], BAN_MEMBERS: arr[5], CREATE_INSTANT_INVITE: arr[6], MANAGE_NICKNAMES: arr[7], CHANGE_NICKNAME: arr[8], MANAGE_GUILD_EXPRESSIONS: arr[9], CREATE_GUILD_EXPRESSIONS: arr[10], MANAGE_WEBHOOKS: arr[11], VIEW_AUDIT_LOG: arr[12], VIEW_CHANNEL: arr[13], MANAGE_EVENTS: arr[14], CREATE_EVENTS: arr[15], MODERATE_MEMBERS: arr[16], VIEW_GUILD_ANALYTICS: arr[17], VIEW_CREATOR_MONETIZATION_ANALYTICS: arr[18], USE_EXTERNAL_APPS: arr[19], SEND_MESSAGES: arr[20], SEND_MESSAGES_IN_THREADS: arr[21], CREATE_PUBLIC_THREADS: arr[22], CREATE_PRIVATE_THREADS: arr[23], SEND_TTS_MESSAGES: arr[24], MANAGE_MESSAGES: arr[25], MANAGE_THREADS: arr[26], EMBED_LINKS: arr[27], ATTACH_FILES: arr[28], READ_MESSAGE_HISTORY: arr[29], MENTION_EVERYONE: arr[30], ADD_REACTIONS: arr[31], USE_EXTERNAL_EMOJIS: arr[32], USE_EXTERNAL_STICKERS: arr[33], USE_APPLICATION_COMMANDS: arr[34], SEND_VOICE_MESSAGES: arr[35], SEND_POLLS: arr[36], PIN_MESSAGES: arr[37], BYPASS_SLOWMODE: arr[38], MANAGE_OFFICIAL_MESSAGES: arr[39], CONNECT: arr[40], SPEAK: arr[41], MUTE_MEMBERS: arr[42], DEAFEN_MEMBERS: arr[43], MOVE_MEMBERS: arr[44], USE_VAD: arr[45], PRIORITY_SPEAKER: arr[46], REQUEST_TO_SPEAK: arr[47], STREAM: arr[48], USE_EMBEDDED_ACTIVITIES: arr[49], USE_SOUNDBOARD: arr[50], USE_EXTERNAL_SOUNDS: arr[51], SET_VOICE_CHANNEL_STATUS: arr[52] } = Permissions);
const obj = {
  [ADMINISTRATOR.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.PGvZqX);
  },
  [MANAGE_GUILD.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.QZRcfO);
  },
  [MANAGE_ROLES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["C8d+oG"]);
  },
  [MANAGE_CHANNELS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["9qLtWs"]);
  },
  [KICK_MEMBERS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.pBNv6i);
  },
  [BAN_MEMBERS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.oTBA7N);
  },
  [CREATE_INSTANT_INVITE.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.zJrgTG);
  },
  [MANAGE_NICKNAMES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["t+Ct5x"]);
  },
  [CHANGE_NICKNAME.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.dilOF6);
  },
  [MANAGE_GUILD_EXPRESSIONS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.bbuXIn);
  },
  [CREATE_GUILD_EXPRESSIONS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.HarVuP);
  },
  [MANAGE_WEBHOOKS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["/ADKmM"]);
  },
  [VIEW_AUDIT_LOG.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.fZgLpA);
  },
  [VIEW_CHANNEL.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.uV83yi);
  },
  [SEND_MESSAGES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.T32rkC);
  },
  [SEND_TTS_MESSAGES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.Mg7bku);
  },
  [MANAGE_MESSAGES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["6lU9xM"]);
  },
  [EMBED_LINKS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["969dEL"]);
  },
  [ATTACH_FILES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["3AS4UM"]);
  },
  [READ_MESSAGE_HISTORY.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.l9ufaR);
  },
  [MENTION_EVERYONE.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.Y78KGC);
  },
  [ADD_REACTIONS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.yEoJAr);
  },
  [USE_EXTERNAL_EMOJIS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.BpBGZU);
  },
  [USE_EXTERNAL_STICKERS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["UeRs+b"]);
  },
  [USE_APPLICATION_COMMANDS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.shbR1a);
  },
  [SEND_VOICE_MESSAGES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["+8GStU"]);
  },
  [CONNECT.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.S0W8Z5);
  },
  [SPEAK.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["8w1tIR"]);
  },
  [MUTE_MEMBERS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["8EI30/"]);
  },
  [DEAFEN_MEMBERS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["9L47Fr"]);
  },
  [MOVE_MEMBERS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.YtjJPQ);
  },
  [USE_VAD.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["08zAV7"]);
  },
  [PRIORITY_SPEAKER.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.BVK71i);
  },
  [CREATE_PUBLIC_THREADS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["25rKnX"]);
  },
  [CREATE_PRIVATE_THREADS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.QwbTSa);
  },
  [SEND_MESSAGES_IN_THREADS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.fTE74g);
  },
  [MANAGE_THREADS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.kEqgr7);
  },
  [MANAGE_EVENTS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.HIgA5a);
  },
  [CREATE_EVENTS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.qyjZua);
  },
  [MODERATE_MEMBERS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["7DgVBr"]);
  },
  [REQUEST_TO_SPEAK.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["5kicT2"]);
  },
  [VIEW_GUILD_ANALYTICS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["rQJBE/"]);
  },
  [VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t["0lTLTv"]);
  },
  [STREAM.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.FlNoSV);
  },
  [USE_EMBEDDED_ACTIVITIES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.rLSGeh);
  },
  [USE_SOUNDBOARD.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.Bco7NG);
  },
  [USE_EXTERNAL_SOUNDS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.pwaVJ6);
  },
  [SET_VOICE_CHANNEL_STATUS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.VBwkUf);
  },
  [SEND_POLLS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.UMQ7Ww);
  },
  [USE_EXTERNAL_APPS.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.TtA5rK);
  },
  [PIN_MESSAGES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.Y5BI39);
  },
  [BYPASS_SLOWMODE.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.kqcjeV);
  },
  [MANAGE_OFFICIAL_MESSAGES.toString()]: () => {
    const intl = util.intl;
    return intl.string(util.t.Aj9ruN);
  }
};
({ ADMINISTRATOR, MANAGE_GUILD, MANAGE_ROLES, MANAGE_CHANNELS, KICK_MEMBERS, BAN_MEMBERS, CREATE_INSTANT_INVITE, MANAGE_NICKNAMES, CHANGE_NICKNAME, MANAGE_GUILD_EXPRESSIONS, CREATE_GUILD_EXPRESSIONS, MANAGE_WEBHOOKS, VIEW_AUDIT_LOG, VIEW_CHANNEL, SEND_MESSAGES, SEND_TTS_MESSAGES, MANAGE_MESSAGES, EMBED_LINKS, ATTACH_FILES, READ_MESSAGE_HISTORY, MENTION_EVERYONE, ADD_REACTIONS, USE_EXTERNAL_EMOJIS, USE_EXTERNAL_STICKERS, USE_APPLICATION_COMMANDS, SEND_VOICE_MESSAGES, CONNECT, SPEAK, MUTE_MEMBERS, DEAFEN_MEMBERS, MOVE_MEMBERS, USE_VAD, PRIORITY_SPEAKER, CREATE_PUBLIC_THREADS, CREATE_PRIVATE_THREADS, SEND_MESSAGES_IN_THREADS, MANAGE_THREADS, MANAGE_EVENTS, CREATE_EVENTS, MODERATE_MEMBERS, REQUEST_TO_SPEAK, VIEW_GUILD_ANALYTICS, VIEW_CREATOR_MONETIZATION_ANALYTICS, STREAM, USE_EMBEDDED_ACTIVITIES, USE_SOUNDBOARD, USE_EXTERNAL_SOUNDS, SET_VOICE_CHANNEL_STATUS, SEND_POLLS, USE_EXTERNAL_APPS, PIN_MESSAGES, BYPASS_SLOWMODE, MANAGE_OFFICIAL_MESSAGES } = Permissions);
const result = size.fileFinishedImporting("modules/oauth2/permissions.tsx");

export const OrderedPermissions = items;
export const containsDisallowedPermission = function containsDisallowedPermission(memo4) {
  closure_0 = memo4;
  const values = Object.values(Permissions);
  return values.some((item) => {
    let hasItem = BigFlagUtilsAll.has(closure_0, item);
    if (hasItem) {
      hasItem = !items.includes(item);
    }
    return hasItem;
  });
};
export const getPermissionName = function getPermissionName(item) {
  const tmp = obj[item.toString(item)];
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown permission. Did you provide a _single_ bit flag? Perm: " + item);
    throw error;
  } else {
    return tmp();
  }
};