// discord_app/modules/oauth2/permissions.tsx
import { Permissions } from "ME";

let ADD_REACTIONS;
let ADMINISTRATOR;
let ATTACH_FILES;
let BAN_MEMBERS;
let BYPASS_SLOWMODE;
let CHANGE_NICKNAME;
let CONNECT;
let CREATE_EVENTS;
let CREATE_GUILD_EXPRESSIONS;
let CREATE_INSTANT_INVITE;
let CREATE_PRIVATE_THREADS;
let CREATE_PUBLIC_THREADS;
let DEAFEN_MEMBERS;
let EMBED_LINKS;
let KICK_MEMBERS;
let MANAGE_CHANNELS;
let MANAGE_EVENTS;
let MANAGE_GUILD;
let MANAGE_GUILD_EXPRESSIONS;
let MANAGE_MESSAGES;
let MANAGE_NICKNAMES;
let MANAGE_OFFICIAL_MESSAGES;
let MANAGE_ROLES;
let MANAGE_THREADS;
let MANAGE_WEBHOOKS;
let MENTION_EVERYONE;
let MODERATE_MEMBERS;
let MOVE_MEMBERS;
let MUTE_MEMBERS;
let PIN_MESSAGES;
let PRIORITY_SPEAKER;
let READ_MESSAGE_HISTORY;
let REQUEST_TO_SPEAK;
let SEND_MESSAGES;
let SEND_MESSAGES_IN_THREADS;
let SEND_POLLS;
let SEND_TTS_MESSAGES;
let SEND_VOICE_MESSAGES;
let SET_VOICE_CHANNEL_STATUS;
let SPEAK;
let STREAM;
let USE_APPLICATION_COMMANDS;
let USE_EMBEDDED_ACTIVITIES;
let USE_EXTERNAL_APPS;
let USE_EXTERNAL_EMOJIS;
let USE_EXTERNAL_SOUNDS;
let USE_EXTERNAL_STICKERS;
let USE_SOUNDBOARD;
let USE_VAD;
let VIEW_AUDIT_LOG;
let VIEW_CHANNEL;
let VIEW_CREATOR_MONETIZATION_ANALYTICS;
let VIEW_GUILD_ANALYTICS;
const items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
({ ADMINISTRATOR: arr[0], MANAGE_GUILD: arr[1], MANAGE_ROLES: arr[2], MANAGE_CHANNELS: arr[3], KICK_MEMBERS: arr[4], BAN_MEMBERS: arr[5], CREATE_INSTANT_INVITE: arr[6], MANAGE_NICKNAMES: arr[7], CHANGE_NICKNAME: arr[8], MANAGE_GUILD_EXPRESSIONS: arr[9], CREATE_GUILD_EXPRESSIONS: arr[10], MANAGE_WEBHOOKS: arr[11], VIEW_AUDIT_LOG: arr[12], VIEW_CHANNEL: arr[13], MANAGE_EVENTS: arr[14], CREATE_EVENTS: arr[15], MODERATE_MEMBERS: arr[16], VIEW_GUILD_ANALYTICS: arr[17], VIEW_CREATOR_MONETIZATION_ANALYTICS: arr[18], USE_EXTERNAL_APPS: arr[19], SEND_MESSAGES: arr[20], SEND_MESSAGES_IN_THREADS: arr[21], CREATE_PUBLIC_THREADS: arr[22], CREATE_PRIVATE_THREADS: arr[23], SEND_TTS_MESSAGES: arr[24], MANAGE_MESSAGES: arr[25], MANAGE_THREADS: arr[26], EMBED_LINKS: arr[27], ATTACH_FILES: arr[28], READ_MESSAGE_HISTORY: arr[29], MENTION_EVERYONE: arr[30], ADD_REACTIONS: arr[31], USE_EXTERNAL_EMOJIS: arr[32], USE_EXTERNAL_STICKERS: arr[33], USE_APPLICATION_COMMANDS: arr[34], SEND_VOICE_MESSAGES: arr[35], SEND_POLLS: arr[36], PIN_MESSAGES: arr[37], BYPASS_SLOWMODE: arr[38], MANAGE_OFFICIAL_MESSAGES: arr[39], CONNECT: arr[40], SPEAK: arr[41], MUTE_MEMBERS: arr[42], DEAFEN_MEMBERS: arr[43], MOVE_MEMBERS: arr[44], USE_VAD: arr[45], PRIORITY_SPEAKER: arr[46], REQUEST_TO_SPEAK: arr[47], STREAM: arr[48], USE_EMBEDDED_ACTIVITIES: arr[49], USE_SOUNDBOARD: arr[50], USE_EXTERNAL_SOUNDS: arr[51], SET_VOICE_CHANNEL_STATUS: arr[52] } = Permissions);
const obj = {
  [ADMINISTRATOR.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.PGvZqX);
  },
  [MANAGE_GUILD.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.QZRcfO);
  },
  [MANAGE_ROLES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["C8d+oG"]);
  },
  [MANAGE_CHANNELS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["9qLtWs"]);
  },
  [KICK_MEMBERS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.pBNv6i);
  },
  [BAN_MEMBERS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.oTBA7N);
  },
  [CREATE_INSTANT_INVITE.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.zJrgTG);
  },
  [MANAGE_NICKNAMES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["t+Ct5x"]);
  },
  [CHANGE_NICKNAME.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.dilOF6);
  },
  [MANAGE_GUILD_EXPRESSIONS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.bbuXIn);
  },
  [CREATE_GUILD_EXPRESSIONS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.HarVuP);
  },
  [MANAGE_WEBHOOKS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["/ADKmM"]);
  },
  [VIEW_AUDIT_LOG.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.fZgLpA);
  },
  [VIEW_CHANNEL.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.uV83yi);
  },
  [SEND_MESSAGES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.T32rkC);
  },
  [SEND_TTS_MESSAGES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.Mg7bku);
  },
  [MANAGE_MESSAGES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["6lU9xM"]);
  },
  [EMBED_LINKS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["969dEL"]);
  },
  [ATTACH_FILES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["3AS4UM"]);
  },
  [READ_MESSAGE_HISTORY.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.l9ufaR);
  },
  [MENTION_EVERYONE.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.Y78KGC);
  },
  [ADD_REACTIONS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.yEoJAr);
  },
  [USE_EXTERNAL_EMOJIS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.BpBGZU);
  },
  [USE_EXTERNAL_STICKERS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["UeRs+b"]);
  },
  [USE_APPLICATION_COMMANDS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.shbR1a);
  },
  [SEND_VOICE_MESSAGES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["+8GStU"]);
  },
  [CONNECT.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.S0W8Z5);
  },
  [SPEAK.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["8w1tIR"]);
  },
  [MUTE_MEMBERS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["8EI30/"]);
  },
  [DEAFEN_MEMBERS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["9L47Fr"]);
  },
  [MOVE_MEMBERS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.YtjJPQ);
  },
  [USE_VAD.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["08zAV7"]);
  },
  [PRIORITY_SPEAKER.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.BVK71i);
  },
  [CREATE_PUBLIC_THREADS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["25rKnX"]);
  },
  [CREATE_PRIVATE_THREADS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.QwbTSa);
  },
  [SEND_MESSAGES_IN_THREADS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.fTE74g);
  },
  [MANAGE_THREADS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.kEqgr7);
  },
  [MANAGE_EVENTS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.HIgA5a);
  },
  [CREATE_EVENTS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.qyjZua);
  },
  [MODERATE_MEMBERS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["7DgVBr"]);
  },
  [REQUEST_TO_SPEAK.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["5kicT2"]);
  },
  [VIEW_GUILD_ANALYTICS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["rQJBE/"]);
  },
  [VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["0lTLTv"]);
  },
  [STREAM.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.FlNoSV);
  },
  [USE_EMBEDDED_ACTIVITIES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.rLSGeh);
  },
  [USE_SOUNDBOARD.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.Bco7NG);
  },
  [USE_EXTERNAL_SOUNDS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.pwaVJ6);
  },
  [SET_VOICE_CHANNEL_STATUS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.VBwkUf);
  },
  [SEND_POLLS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.UMQ7Ww);
  },
  [USE_EXTERNAL_APPS.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.TtA5rK);
  },
  [PIN_MESSAGES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.Y5BI39);
  },
  [BYPASS_SLOWMODE.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.kqcjeV);
  },
  [MANAGE_OFFICIAL_MESSAGES.toString()]: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.Aj9ruN);
  }
};
({ ADMINISTRATOR, MANAGE_GUILD, MANAGE_ROLES, MANAGE_CHANNELS, KICK_MEMBERS, BAN_MEMBERS, CREATE_INSTANT_INVITE, MANAGE_NICKNAMES, CHANGE_NICKNAME, MANAGE_GUILD_EXPRESSIONS, CREATE_GUILD_EXPRESSIONS, MANAGE_WEBHOOKS, VIEW_AUDIT_LOG, VIEW_CHANNEL, SEND_MESSAGES, SEND_TTS_MESSAGES, MANAGE_MESSAGES, EMBED_LINKS, ATTACH_FILES, READ_MESSAGE_HISTORY, MENTION_EVERYONE, ADD_REACTIONS, USE_EXTERNAL_EMOJIS, USE_EXTERNAL_STICKERS, USE_APPLICATION_COMMANDS, SEND_VOICE_MESSAGES, CONNECT, SPEAK, MUTE_MEMBERS, DEAFEN_MEMBERS, MOVE_MEMBERS, USE_VAD, PRIORITY_SPEAKER, CREATE_PUBLIC_THREADS, CREATE_PRIVATE_THREADS, SEND_MESSAGES_IN_THREADS, MANAGE_THREADS, MANAGE_EVENTS, CREATE_EVENTS, MODERATE_MEMBERS, REQUEST_TO_SPEAK, VIEW_GUILD_ANALYTICS, VIEW_CREATOR_MONETIZATION_ANALYTICS, STREAM, USE_EMBEDDED_ACTIVITIES, USE_SOUNDBOARD, USE_EXTERNAL_SOUNDS, SET_VOICE_CHANNEL_STATUS, SEND_POLLS, USE_EXTERNAL_APPS, PIN_MESSAGES, BYPASS_SLOWMODE, MANAGE_OFFICIAL_MESSAGES } = Permissions);
const result = require("getSystemLocale").fileFinishedImporting("modules/oauth2/permissions.tsx");

export const OrderedPermissions = items;
export const containsDisallowedPermission = function containsDisallowedPermission(memo4) {
  let closure_0 = memo4;
  const values = Object.values(Permissions);
  return values.some((arg0) => {
    let hasItem = outer1_1(outer1_2[1]).has(closure_0, arg0);
    if (hasItem) {
      hasItem = !outer1_4.includes(arg0);
    }
    return hasItem;
  });
};
export const getPermissionName = function getPermissionName(arg0) {
  const tmp = obj[arg0.toString(arg0)];
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown permission. Did you provide a _single_ bit flag? Perm: " + arg0);
    throw error;
  } else {
    return tmp();
  }
};