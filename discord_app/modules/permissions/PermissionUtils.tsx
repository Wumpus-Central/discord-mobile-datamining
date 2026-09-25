// === Module 16623: permissions/PermissionUtils ===

// Module 16623 (permissions/PermissionUtils)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import size from "module_2" /* 2 */;

function getGuildPermissionSpec(permissionOptions) {
  const obj = {};
  const obj2 = { title: null, description: null, flag: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.uV83yi);
  obj2.description = util.t.ybTHLk;
  obj2.flag = Permissions.VIEW_CHANNEL;
  obj[Permissions.VIEW_CHANNEL.toString()] = obj2;
  const obj3 = { title: null, description: null, flag: null };
  const str1 = Permissions.VIEW_CHANNEL.toString();
  const intl2 = util.intl;
  obj3.title = intl2.string(util.t["9qLtWs"]);
  obj3.description = util.t.qfJnug;
  obj3.flag = Permissions.MANAGE_CHANNELS;
  obj[Permissions.MANAGE_CHANNELS.toString()] = obj3;
  const obj4 = { title: null, description: null, flag: null };
  const str54 = Permissions.MANAGE_CHANNELS.toString();
  const intl3 = util.intl;
  obj4.title = intl3.string(util.t["C8d+oG"]);
  obj4.description = util.t.buo9uw;
  obj4.flag = Permissions.MANAGE_ROLES;
  obj[Permissions.MANAGE_ROLES.toString()] = obj4;
  const obj5 = { title: null, description: null, flag: null };
  const str55 = Permissions.MANAGE_ROLES.toString();
  const intl4 = util.intl;
  obj5.title = intl4.string(util.t.bbuXIn);
  obj5.description = util.t["4vb3/6"];
  obj5.flag = Permissions.MANAGE_GUILD_EXPRESSIONS;
  obj[Permissions.MANAGE_GUILD_EXPRESSIONS.toString()] = obj5;
  const obj6 = { title: null, description: null, flag: null };
  const str56 = Permissions.MANAGE_GUILD_EXPRESSIONS.toString();
  const intl5 = util.intl;
  obj6.title = intl5.string(util.t.HarVuP);
  obj6.description = util.t.gkdHvH;
  obj6.flag = Permissions.CREATE_GUILD_EXPRESSIONS;
  obj[Permissions.CREATE_GUILD_EXPRESSIONS.toString()] = obj6;
  const obj7 = { title: null, description: null, flag: null };
  const str57 = Permissions.CREATE_GUILD_EXPRESSIONS.toString();
  const intl6 = util.intl;
  obj7.title = intl6.string(util.t.fZgLpA);
  obj7.description = util.t["0hx75i"];
  obj7.flag = Permissions.VIEW_AUDIT_LOG;
  obj[Permissions.VIEW_AUDIT_LOG.toString()] = obj7;
  const obj8 = { title: null, description: null, flag: null };
  const str58 = Permissions.VIEW_AUDIT_LOG.toString();
  const intl7 = util.intl;
  obj8.title = intl7.string(util.t["rQJBE/"]);
  obj8.description = util.t.whVKhX;
  obj8.flag = Permissions.VIEW_GUILD_ANALYTICS;
  obj[Permissions.VIEW_GUILD_ANALYTICS.toString()] = obj8;
  const obj9 = { title: null, description: null, flag: null };
  const str59 = Permissions.VIEW_GUILD_ANALYTICS.toString();
  const intl8 = util.intl;
  obj9.title = intl8.string(util.t["0lTLTv"]);
  obj9.description = util.t.mut6NV;
  obj9.flag = Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS;
  obj[Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()] = obj9;
  const obj10 = { title: null, description: null, flag: null };
  const str60 = Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString();
  const intl9 = util.intl;
  obj10.title = intl9.string(util.t["/ADKmM"]);
  obj10.description = util.t.LczYqC;
  obj10.flag = Permissions.MANAGE_WEBHOOKS;
  obj[Permissions.MANAGE_WEBHOOKS.toString()] = obj10;
  const obj11 = { title: null, description: null, flag: null };
  const str61 = Permissions.MANAGE_WEBHOOKS.toString();
  const intl10 = util.intl;
  obj11.title = intl10.string(util.t.QZRcfO);
  obj11.description = util.t["KoQe/G"];
  obj11.flag = Permissions.MANAGE_GUILD;
  obj[Permissions.MANAGE_GUILD.toString()] = obj11;
  const obj12 = { title: null, description: null, flag: null };
  const str62 = Permissions.MANAGE_GUILD.toString();
  const intl11 = util.intl;
  obj12.title = intl11.string(util.t.zJrgTG);
  obj12.description = util.t.PCFOZa;
  obj12.flag = Permissions.CREATE_INSTANT_INVITE;
  obj[Permissions.CREATE_INSTANT_INVITE.toString()] = obj12;
  const obj13 = { title: null, description: null, flag: null };
  const str63 = Permissions.CREATE_INSTANT_INVITE.toString();
  const intl12 = util.intl;
  obj13.title = intl12.string(util.t.dilOF6);
  obj13.description = util.t["b8B++j"];
  obj13.flag = Permissions.CHANGE_NICKNAME;
  obj[Permissions.CHANGE_NICKNAME.toString()] = obj13;
  const obj14 = { title: null, description: null, flag: null };
  const str64 = Permissions.CHANGE_NICKNAME.toString();
  const intl13 = util.intl;
  obj14.title = intl13.string(util.t["t+Ct5x"]);
  obj14.description = util.t.hTnlMb;
  obj14.flag = Permissions.MANAGE_NICKNAMES;
  obj[Permissions.MANAGE_NICKNAMES.toString()] = obj14;
  const str65 = Permissions.MANAGE_NICKNAMES.toString();
  const intl14 = util.intl;
  const string = intl14.string;
  const t = util.t;
  if (permissionOptions.showMembershipManualApprovalPermissions) {
    let stringResult = string(t["9TxXwb"]);
  } else {
    stringResult = string(t.pBNv6i);
  }
  const obj15 = { title: stringResult, description: null, flag: null };
  const t2 = util.t;
  obj15.description = permissionOptions.showMembershipManualApprovalPermissions ? t2.hGBAnw : t2.rwdPaE;
  obj15.flag = Permissions.KICK_MEMBERS;
  obj[Permissions.KICK_MEMBERS.toString()] = obj15;
  const obj16 = { title: null, description: null, flag: null };
  const str66 = Permissions.KICK_MEMBERS.toString();
  const intl15 = util.intl;
  obj16.title = intl15.string(util.t.oTBA7N);
  obj16.description = util.t["OqNY0/"];
  obj16.flag = Permissions.BAN_MEMBERS;
  obj[Permissions.BAN_MEMBERS.toString()] = obj16;
  const obj17 = { title: null, description: null, flag: null };
  const str67 = Permissions.BAN_MEMBERS.toString();
  const intl16 = util.intl;
  obj17.title = intl16.string(util.t["+RL6pz"]);
  obj17.description = util.t.T6bZsX;
  obj17.flag = Permissions.MODERATE_MEMBERS;
  obj[Permissions.MODERATE_MEMBERS.toString()] = obj17;
  const obj18 = { title: null, description: null, flag: null };
  const str68 = Permissions.MODERATE_MEMBERS.toString();
  const intl17 = util.intl;
  obj18.title = intl17.string(util.t.S1VOwd);
  obj18.description = util.t.prvWKm;
  obj18.flag = Permissions.SEND_MESSAGES;
  obj[Permissions.SEND_MESSAGES.toString()] = obj18;
  const obj19 = { title: null, description: null, flag: null };
  const str69 = Permissions.SEND_MESSAGES.toString();
  const intl18 = util.intl;
  obj19.title = intl18.string(util.t["969dEL"]);
  obj19.description = util.t.ChoIiy;
  obj19.flag = Permissions.EMBED_LINKS;
  obj[Permissions.EMBED_LINKS.toString()] = obj19;
  const obj20 = { title: null, description: null, flag: null };
  const str70 = Permissions.EMBED_LINKS.toString();
  const intl19 = util.intl;
  obj20.title = intl19.string(util.t["3AS4UM"]);
  obj20.description = util.t["/87mYH"];
  obj20.flag = Permissions.ATTACH_FILES;
  obj[Permissions.ATTACH_FILES.toString()] = obj20;
  const obj21 = { title: null, description: null, flag: null };
  const str71 = Permissions.ATTACH_FILES.toString();
  const intl20 = util.intl;
  obj21.title = intl20.string(util.t.yEoJAr);
  obj21.description = util.t.FEYwX7;
  obj21.flag = Permissions.ADD_REACTIONS;
  obj[Permissions.ADD_REACTIONS.toString()] = obj21;
  const obj22 = { title: null, description: null, flag: null };
  const str72 = Permissions.ADD_REACTIONS.toString();
  const intl21 = util.intl;
  obj22.title = intl21.string(util.t["+bxf3H"]);
  obj22.description = util.t.POeVIu;
  obj22.flag = Permissions.USE_EXTERNAL_EMOJIS;
  obj[Permissions.USE_EXTERNAL_EMOJIS.toString()] = obj22;
  const obj23 = { title: null, description: null, flag: null };
  const str73 = Permissions.USE_EXTERNAL_EMOJIS.toString();
  const intl22 = util.intl;
  obj23.title = intl22.string(util.t.ERNhYf);
  obj23.description = util.t.AdXVhI;
  obj23.flag = Permissions.USE_EXTERNAL_STICKERS;
  obj[Permissions.USE_EXTERNAL_STICKERS.toString()] = obj23;
  const obj24 = { title: null, description: null, flag: null };
  const str74 = Permissions.USE_EXTERNAL_STICKERS.toString();
  const intl23 = util.intl;
  obj24.title = intl23.string(util.t.Y78KGC);
  const intl24 = util.intl;
  obj24.description = intl24.string(util.t.ryj6N5);
  obj24.flag = Permissions.MENTION_EVERYONE;
  obj[Permissions.MENTION_EVERYONE.toString()] = obj24;
  const obj25 = { title: null, description: null, flag: null };
  const str75 = Permissions.MENTION_EVERYONE.toString();
  const intl25 = util.intl;
  obj25.title = intl25.string(util.t["6lU9xM"]);
  obj25.description = util.t["RXMG/+"];
  obj25.flag = Permissions.MANAGE_MESSAGES;
  obj[Permissions.MANAGE_MESSAGES.toString()] = obj25;
  const obj26 = { title: null, description: null, flag: null };
  const str76 = Permissions.MANAGE_MESSAGES.toString();
  const intl26 = util.intl;
  obj26.title = intl26.string(util.t.Y5BI39);
  obj26.description = util.t["LN/K3x"];
  obj26.flag = Permissions.PIN_MESSAGES;
  obj[Permissions.PIN_MESSAGES.toString()] = obj26;
  const obj27 = { title: null, description: null, flag: null };
  const str77 = Permissions.PIN_MESSAGES.toString();
  const intl27 = util.intl;
  obj27.title = intl27.string(util.t.kqcjeV);
  obj27.description = util.t.S2ZE5c;
  obj27.flag = Permissions.BYPASS_SLOWMODE;
  obj[Permissions.BYPASS_SLOWMODE.toString()] = obj27;
  const obj28 = { title: null, description: null, flag: null };
  const str78 = Permissions.BYPASS_SLOWMODE.toString();
  const intl28 = util.intl;
  obj28.title = intl28.string(util.t.Aj9ruN);
  obj28.description = util.t.pfEgBm;
  obj28.flag = Permissions.MANAGE_OFFICIAL_MESSAGES;
  obj[Permissions.MANAGE_OFFICIAL_MESSAGES.toString()] = obj28;
  const obj29 = { title: null, description: null, flag: null };
  const str79 = Permissions.MANAGE_OFFICIAL_MESSAGES.toString();
  const intl29 = util.intl;
  obj29.title = intl29.string(util.t.l9ufaR);
  obj29.description = util.t.rmHPFR;
  obj29.flag = Permissions.READ_MESSAGE_HISTORY;
  obj[Permissions.READ_MESSAGE_HISTORY.toString()] = obj29;
  const obj30 = { title: null, description: null, flag: null };
  const str80 = Permissions.READ_MESSAGE_HISTORY.toString();
  const intl30 = util.intl;
  obj30.title = intl30.string(util.t.mMbwh7);
  obj30.description = util.t.D6x8Nr;
  obj30.flag = Permissions.SEND_TTS_MESSAGES;
  obj[Permissions.SEND_TTS_MESSAGES.toString()] = obj30;
  const obj31 = { title: null, description: null, flag: null };
  const str81 = Permissions.SEND_TTS_MESSAGES.toString();
  const intl31 = util.intl;
  obj31.title = intl31.string(util.t.nkoPOt);
  obj31.description = util.t.pJrJ35;
  obj31.flag = Permissions.USE_APPLICATION_COMMANDS;
  obj[Permissions.USE_APPLICATION_COMMANDS.toString()] = obj31;
  const obj32 = { title: null, description: null, flag: null };
  const str82 = Permissions.USE_APPLICATION_COMMANDS.toString();
  const intl32 = util.intl;
  obj32.title = intl32.string(util.t.TtA5rK);
  obj32.description = util.t.mzLoDY;
  obj32.flag = Permissions.USE_EXTERNAL_APPS;
  obj[Permissions.USE_EXTERNAL_APPS.toString()] = obj32;
  const obj33 = { title: null, description: null, flag: null };
  const str83 = Permissions.USE_EXTERNAL_APPS.toString();
  const intl33 = util.intl;
  obj33.title = intl33.string(util.t.WlWSBT);
  obj33.description = util.t.pDuyi0;
  obj33.flag = Permissions.SEND_VOICE_MESSAGES;
  obj[Permissions.SEND_VOICE_MESSAGES.toString()] = obj33;
  const obj34 = { title: null, description: null, flag: null };
  const str84 = Permissions.SEND_VOICE_MESSAGES.toString();
  const intl34 = util.intl;
  obj34.title = intl34.string(util.t.UMQ7Ww);
  obj34.description = util.t["Xl6W+F"];
  obj34.flag = Permissions.SEND_POLLS;
  obj[Permissions.SEND_POLLS.toString()] = obj34;
  const obj35 = { title: null, description: null, flag: null };
  const str85 = Permissions.SEND_POLLS.toString();
  const intl35 = util.intl;
  obj35.title = intl35.string(util.t.S0W8Z5);
  obj35.description = util.t["3GCm/f"];
  obj35.flag = Permissions.CONNECT;
  obj[Permissions.CONNECT.toString()] = obj35;
  const obj36 = { title: null, description: null, flag: null };
  const str86 = Permissions.CONNECT.toString();
  const intl36 = util.intl;
  obj36.title = intl36.string(util.t["8w1tIR"]);
  obj36.description = util.t.y4MncF;
  obj36.flag = Permissions.SPEAK;
  obj[Permissions.SPEAK.toString()] = obj36;
  const obj37 = { title: null, description: null, flag: null };
  const str87 = Permissions.SPEAK.toString();
  const intl37 = util.intl;
  obj37.title = intl37.string(util.t.FlNoSV);
  obj37.description = util.t["6Z0j9v"];
  obj37.flag = Permissions.STREAM;
  obj[Permissions.STREAM.toString()] = obj37;
  const obj38 = { title: null, description: null, flag: null };
  const str88 = Permissions.STREAM.toString();
  const intl38 = util.intl;
  obj38.title = intl38.string(util.t.rLSGeh);
  obj38.description = util.t.BEqU5H;
  obj38.flag = Permissions.USE_EMBEDDED_ACTIVITIES;
  obj[Permissions.USE_EMBEDDED_ACTIVITIES.toString()] = obj38;
  const obj39 = { title: null, description: null, flag: null };
  const str89 = Permissions.USE_EMBEDDED_ACTIVITIES.toString();
  const intl39 = util.intl;
  obj39.title = intl39.string(util.t.Bco7NG);
  let prop;
  if (permissionOptions != null) {
    prop = permissionOptions.SOUNDBOARD_DESCRIPTION;
  }
  if (prop == null) {
    prop = util.t["+8p+fc"];
  }
  obj39.description = prop;
  obj39.flag = Permissions.USE_SOUNDBOARD;
  obj[Permissions.USE_SOUNDBOARD.toString()] = obj39;
  const obj40 = { title: null, description: null, flag: null };
  const str90 = Permissions.USE_SOUNDBOARD.toString();
  const intl40 = util.intl;
  obj40.title = intl40.string(util.t.pwaVJ6);
  obj40.description = util.t.qDpPtX;
  obj40.flag = Permissions.USE_EXTERNAL_SOUNDS;
  obj[Permissions.USE_EXTERNAL_SOUNDS.toString()] = obj40;
  const obj41 = { title: null, description: null, flag: null };
  const str91 = Permissions.USE_EXTERNAL_SOUNDS.toString();
  const intl41 = util.intl;
  obj41.title = intl41.string(util.t["08zAV7"]);
  obj41.description = util.t["7CHjmc"];
  obj41.flag = Permissions.USE_VAD;
  obj[Permissions.USE_VAD.toString()] = obj41;
  const obj42 = { title: null, description: null, flag: null };
  const str92 = Permissions.USE_VAD.toString();
  const intl42 = util.intl;
  obj42.title = intl42.string(util.t.BVK71i);
  let prop1;
  if (permissionOptions != null) {
    prop1 = permissionOptions.PRIORITY_SPEAKER_DESCRIPTION;
  }
  if (prop1 == null) {
    prop1 = util.t.OJkrro;
  }
  obj42.description = prop1;
  obj42.flag = Permissions.PRIORITY_SPEAKER;
  obj[Permissions.PRIORITY_SPEAKER.toString()] = obj42;
  const obj43 = { title: null, description: null, flag: null };
  const str93 = Permissions.PRIORITY_SPEAKER.toString();
  const intl43 = util.intl;
  obj43.title = intl43.string(util.t["8EI30/"]);
  obj43.description = util.t.PIhGA1;
  obj43.flag = Permissions.MUTE_MEMBERS;
  obj[Permissions.MUTE_MEMBERS.toString()] = obj43;
  const obj44 = { title: null, description: null, flag: null };
  const str94 = Permissions.MUTE_MEMBERS.toString();
  const intl44 = util.intl;
  obj44.title = intl44.string(util.t["9L47Fr"]);
  obj44.description = util.t["FQr3+t"];
  obj44.flag = Permissions.DEAFEN_MEMBERS;
  obj[Permissions.DEAFEN_MEMBERS.toString()] = obj44;
  const obj45 = { title: null, description: null, flag: null };
  const str95 = Permissions.DEAFEN_MEMBERS.toString();
  const intl45 = util.intl;
  obj45.title = intl45.string(util.t.YtjJPQ);
  obj45.description = util.t.SEe0Gp;
  obj45.flag = Permissions.MOVE_MEMBERS;
  obj[Permissions.MOVE_MEMBERS.toString()] = obj45;
  const obj46 = { title: null, description: null, flag: null, isExperimental: true };
  const str96 = Permissions.MOVE_MEMBERS.toString();
  const intl46 = util.intl;
  obj46.title = intl46.string(util.t["5kicT2"]);
  obj46.description = util.t["yNE+Q5"];
  obj46.flag = Permissions.REQUEST_TO_SPEAK;
  obj[Permissions.REQUEST_TO_SPEAK.toString()] = obj46;
  const obj47 = { title: null, description: null, flag: null };
  const str97 = Permissions.REQUEST_TO_SPEAK.toString();
  const intl47 = util.intl;
  obj47.title = intl47.string(util.t.PGvZqX);
  if (typeof util.t.UJxMrK === "string") {
    let UJxMrK = util.t.UJxMrK;
  } else {
    const intl55 = util.intl;
    UJxMrK = intl55.format(util.t.UJxMrK, {});
  }
  obj47.description = UJxMrK;
  obj47.flag = Permissions.ADMINISTRATOR;
  obj[Permissions.ADMINISTRATOR.toString()] = obj47;
  const obj48 = { title: null, description: null, flag: null };
  const str98 = Permissions.ADMINISTRATOR.toString();
  const intl48 = util.intl;
  obj48.title = intl48.string(util.t.HIgA5a);
  obj48.description = util.t["SL+qgG"];
  obj48.flag = Permissions.MANAGE_EVENTS;
  obj[Permissions.MANAGE_EVENTS.toString()] = obj48;
  const obj49 = { title: null, description: null, flag: null };
  const str99 = Permissions.MANAGE_EVENTS.toString();
  const intl49 = util.intl;
  obj49.title = intl49.string(util.t.qyjZua);
  obj49.description = util.t.bQEFJZ;
  obj49.flag = Permissions.CREATE_EVENTS;
  obj[Permissions.CREATE_EVENTS.toString()] = obj49;
  const obj50 = { title: null, description: null, flag: null };
  const str100 = Permissions.CREATE_EVENTS.toString();
  const intl50 = util.intl;
  obj50.title = intl50.string(util.t.QKe7Q3);
  obj50.description = util.t.QAxIIt;
  obj50.flag = Permissions.MANAGE_THREADS;
  obj[Permissions.MANAGE_THREADS.toString()] = obj50;
  const obj51 = { title: null, description: null, flag: null };
  const str101 = Permissions.MANAGE_THREADS.toString();
  const intl51 = util.intl;
  obj51.title = intl51.string(util.t["25rKnX"]);
  obj51.description = util.t.ODCYj8;
  obj51.flag = Permissions.CREATE_PUBLIC_THREADS;
  obj[Permissions.CREATE_PUBLIC_THREADS.toString()] = obj51;
  const obj52 = { title: null, description: null, flag: null };
  const str102 = Permissions.CREATE_PUBLIC_THREADS.toString();
  const intl52 = util.intl;
  obj52.title = intl52.string(util.t.QwbTSa);
  obj52.description = util.t["G/cc3l"];
  obj52.flag = Permissions.CREATE_PRIVATE_THREADS;
  obj[Permissions.CREATE_PRIVATE_THREADS.toString()] = obj52;
  const obj53 = { title: null, description: null, flag: null };
  const str103 = Permissions.CREATE_PRIVATE_THREADS.toString();
  const intl53 = util.intl;
  obj53.title = intl53.string(util.t["5QlVGy"]);
  obj53.description = util.t.C2ZPE3;
  obj53.flag = Permissions.SEND_MESSAGES_IN_THREADS;
  obj[Permissions.SEND_MESSAGES_IN_THREADS.toString()] = obj53;
  const obj54 = { title: null, description: null, flag: null };
  const str104 = Permissions.SEND_MESSAGES_IN_THREADS.toString();
  const intl54 = util.intl;
  obj54.title = intl54.string(util.t.VBwkUf);
  const t3 = util.t;
  obj54.description = permissionOptions.enableHangoutWindow ? t3.CYcJ6H : t3.C6BzXx;
  obj54.flag = Permissions.SET_VOICE_CHANNEL_STATUS;
  obj[Permissions.SET_VOICE_CHANNEL_STATUS.toString()] = obj54;
  return obj;
}
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/permissions/PermissionUtils.tsx");

export { getGuildPermissionSpec };
export const generateGuildPermissionSpec = function generateGuildPermissionSpec(showCreatorMonetizationAnalyticsPermission) {
  const tmp = getGuildPermissionSpec(showCreatorMonetizationAnalyticsPermission);
  const items = [, , , , , , ];
  ({ VIEW_CHANNEL: arr[0], MANAGE_CHANNELS: arr[1], MANAGE_ROLES: arr[2], CREATE_GUILD_EXPRESSIONS: arr[3], MANAGE_GUILD_EXPRESSIONS: arr[4], VIEW_AUDIT_LOG: arr[5], VIEW_GUILD_ANALYTICS: arr[6] } = Permissions);
  if (showCreatorMonetizationAnalyticsPermission.showCreatorMonetizationAnalyticsPermission) {
    items.push(Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS);
  }
  items.push(Permissions.MANAGE_WEBHOOKS);
  items.push(Permissions.MANAGE_GUILD);
  const obj = { title: null, permissions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["mYck+B"]);
  obj.permissions = items.map((item) => closure_0[item.toString(item)]);
  const permissions = obj.permissions;
  obj.permissions = permissions.filter((isExperimental) => !isExperimental.isExperimental);
  const items1 = [obj, , , , ];
  const items2 = [, , , , , ];
  ({ CREATE_INSTANT_INVITE: arr4[0], CHANGE_NICKNAME: arr4[1], MANAGE_NICKNAMES: arr4[2], KICK_MEMBERS: arr4[3], BAN_MEMBERS: arr4[4], MODERATE_MEMBERS: arr4[5] } = Permissions);
  const obj2 = { title: null, permissions: null };
  const intl2 = util.intl;
  obj2.title = intl2.string(util.t.Ny49TN);
  closure_0 = tmp;
  obj2.permissions = items2.map((item) => closure_0[item.toString(item)]);
  const permissions1 = obj2.permissions;
  obj2.permissions = permissions1.filter((isExperimental) => !isExperimental.isExperimental);
  items1[1] = obj2;
  const items3 = [, , , , , , , , , , , , , , , , , , , ];
  ({ SEND_MESSAGES: arr6[0], SEND_MESSAGES_IN_THREADS: arr6[1], CREATE_PUBLIC_THREADS: arr6[2], CREATE_PRIVATE_THREADS: arr6[3], EMBED_LINKS: arr6[4], ATTACH_FILES: arr6[5], ADD_REACTIONS: arr6[6], USE_EXTERNAL_EMOJIS: arr6[7], USE_EXTERNAL_STICKERS: arr6[8], USE_EXTERNAL_SOUNDS: arr6[9], MENTION_EVERYONE: arr6[10], MANAGE_MESSAGES: arr6[11], PIN_MESSAGES: arr6[12], MANAGE_OFFICIAL_MESSAGES: arr6[13], BYPASS_SLOWMODE: arr6[14], MANAGE_THREADS: arr6[15], READ_MESSAGE_HISTORY: arr6[16], SEND_TTS_MESSAGES: arr6[17], SEND_VOICE_MESSAGES: arr6[18], SEND_POLLS: arr6[19] } = Permissions);
  let found = items3;
  if (!showCreatorMonetizationAnalyticsPermission.inSoundmojiExperiment) {
    found = items3.filter((item) => item !== constants.USE_EXTERNAL_SOUNDS);
  }
  const obj3 = { title: null, permissions: null };
  const intl3 = util.intl;
  obj3.title = intl3.string(util.t.cKobO5);
  obj3.permissions = found.map((item) => closure_0[item.toString(item)]);
  const permissions2 = obj3.permissions;
  obj3.permissions = permissions2.filter((isExperimental) => !isExperimental.isExperimental);
  items1[2] = obj3;
  const items4 = [, , , , , , , , , , ];
  ({ CONNECT: arr9[0], SPEAK: arr9[1], STREAM: arr9[2], USE_SOUNDBOARD: arr9[3], USE_EXTERNAL_SOUNDS: arr9[4], USE_VAD: arr9[5], PRIORITY_SPEAKER: arr9[6], MUTE_MEMBERS: arr9[7], DEAFEN_MEMBERS: arr9[8], MOVE_MEMBERS: arr9[9], SET_VOICE_CHANNEL_STATUS: arr9[10] } = Permissions);
  const obj4 = { title: null, permissions: null };
  const intl4 = util.intl;
  obj4.title = intl4.string(util.t["46Ra1b"]);
  obj4.permissions = items4.map((item) => closure_0[item.toString(item)]);
  const permissions3 = obj4.permissions;
  obj4.permissions = permissions3.filter((isExperimental) => !isExperimental.isExperimental);
  items1[3] = obj4;
  const items5 = [, , ];
  ({ USE_APPLICATION_COMMANDS: arr11[0], USE_EMBEDDED_ACTIVITIES: arr11[1], USE_EXTERNAL_APPS: arr11[2] } = Permissions);
  const obj5 = { title: null, permissions: null };
  const intl5 = util.intl;
  obj5.title = intl5.string(util.t["rrh/W6"]);
  closure_0 = tmp;
  obj5.permissions = items5.map((item) => closure_0[item.toString(item)]);
  const permissions4 = obj5.permissions;
  obj5.permissions = permissions4.filter((isExperimental) => !isExperimental.isExperimental);
  items1[4] = obj5;
  if (showCreatorMonetizationAnalyticsPermission.showStageChannelPermissions) {
    const obj6 = { title: null, permissions: null };
    const intl6 = util.intl;
    obj6.title = intl6.string(util.t.yniauk);
    const items6 = [Permissions.REQUEST_TO_SPEAK];
    closure_0 = tmp;
    obj6.permissions = items6.map((item) => closure_0[item.toString(item)]);
    let flag = showCreatorMonetizationAnalyticsPermission.showExperimental;
    if (flag === undefined) {
      flag = false;
    }
    if (!flag) {
      const permissions5 = obj6.permissions;
      obj6.permissions = permissions5.filter((isExperimental) => !isExperimental.isExperimental);
    }
    items1.push(obj6);
  }
  const obj7 = { title: null, permissions: null };
  const intl7 = util.intl;
  obj7.title = intl7.string(util.t.b8lplT);
  const items7 = [, ];
  ({ CREATE_EVENTS: arr15[0], MANAGE_EVENTS: arr15[1] } = Permissions);
  closure_0 = tmp;
  obj7.permissions = items7.map((item) => closure_0[item.toString(item)]);
  let flag2 = showCreatorMonetizationAnalyticsPermission.showExperimental;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (!flag2) {
    const permissions6 = obj7.permissions;
    obj7.permissions = permissions6.filter((isExperimental) => !isExperimental.isExperimental);
  }
  items1.push(obj7);
  const obj8 = { title: null, permissions: null };
  const intl8 = util.intl;
  obj8.title = intl8.string(util.t["3uI5CX"]);
  const items8 = [Permissions.ADMINISTRATOR];
  closure_0 = tmp;
  obj8.permissions = items8.map((item) => closure_0[item.toString(item)]);
  const permissions7 = obj8.permissions;
  obj8.permissions = permissions7.filter((isExperimental) => !isExperimental.isExperimental);
  items1.push(obj8);
  return items1;
};
export const generateChannelGeneralSection = function generateChannelGeneralSection(arg0, intl16, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { showManageWebhooks: true };
  }
  const obj2 = { title: intl16, permissions: null };
  let showManageWebhooks;
  if (obj != null) {
    showManageWebhooks = obj.showManageWebhooks;
  }
  const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
  if (showManageWebhooks) {
    const items = [VIEW_CHANNEL, , , ];
    ({ MANAGE_CHANNELS: arr2[1], MANAGE_ROLES: arr2[2], MANAGE_WEBHOOKS: arr2[3] } = Permissions);
    let items1 = items;
  } else {
    items1 = [VIEW_CHANNEL, , ];
    ({ MANAGE_CHANNELS: arr[1], MANAGE_ROLES: arr[2] } = Permissions);
  }
  closure_0 = arg0;
  obj2.permissions = items1.map((item) => closure_0[item.toString(item)]);
  return obj2;
};
export const generateChannelMembershipSection = function generateChannelMembershipSection(arg0, intl17) {
  const obj = { title: intl17, permissions: null };
  const items = [Permissions.CREATE_INSTANT_INVITE];
  closure_0 = arg0;
  obj.permissions = items.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelTextSection = function generateChannelTextSection(arg0, intl25, description) {
  const items = [, , , , , , , , , , , , , , , , , , , ];
  ({ SEND_MESSAGES: arr[0], SEND_MESSAGES_IN_THREADS: arr[1], CREATE_PUBLIC_THREADS: arr[2], CREATE_PRIVATE_THREADS: arr[3], EMBED_LINKS: arr[4], ATTACH_FILES: arr[5], ADD_REACTIONS: arr[6], USE_EXTERNAL_EMOJIS: arr[7], USE_EXTERNAL_STICKERS: arr[8], USE_EXTERNAL_SOUNDS: arr[9], MENTION_EVERYONE: arr[10], MANAGE_MESSAGES: arr[11], PIN_MESSAGES: arr[12], MANAGE_OFFICIAL_MESSAGES: arr[13], BYPASS_SLOWMODE: arr[14], MANAGE_THREADS: arr[15], READ_MESSAGE_HISTORY: arr[16], SEND_TTS_MESSAGES: arr[17], SEND_VOICE_MESSAGES: arr[18], SEND_POLLS: arr[19] } = Permissions);
  let found = items;
  if (!description.inSoundmojiExperiment) {
    found = items.filter((item) => item !== constants.USE_EXTERNAL_SOUNDS);
  }
  let found1 = found;
  if (!tmp) {
    found1 = found.filter((item) => item !== constants.CREATE_PRIVATE_THREADS);
  }
  let found2 = found1;
  if (!description.showCreateThreads) {
    found2 = found1.filter((item) => item !== constants.CREATE_PUBLIC_THREADS);
  }
  closure_0 = arg0;
  return { title: intl25, description: description.sectionDescription, permissions: found2.map((item) => closure_0[item.toString(item)]) };
};
export const generateChannelVoiceSection = function generateChannelVoiceSection(arg0, intl) {
  const obj = { title: intl, permissions: null };
  const items = [, , , , , , , , , , ];
  ({ CONNECT: arr[0], SPEAK: arr[1], STREAM: arr[2], USE_SOUNDBOARD: arr[3], USE_EXTERNAL_SOUNDS: arr[4], USE_VAD: arr[5], PRIORITY_SPEAKER: arr[6], MUTE_MEMBERS: arr[7], DEAFEN_MEMBERS: arr[8], MOVE_MEMBERS: arr[9], SET_VOICE_CHANNEL_STATUS: arr[10] } = Permissions);
  closure_0 = arg0;
  obj.permissions = items.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelVoiceChatSection = function generateChannelVoiceChatSection(arg0, stringResult, description) {
  const items = [, , , , , , , , , , , , , ];
  ({ SEND_MESSAGES: arr[0], EMBED_LINKS: arr[1], ATTACH_FILES: arr[2], ADD_REACTIONS: arr[3], USE_EXTERNAL_EMOJIS: arr[4], USE_EXTERNAL_STICKERS: arr[5], USE_EXTERNAL_SOUNDS: arr[6], MENTION_EVERYONE: arr[7], MANAGE_MESSAGES: arr[8], BYPASS_SLOWMODE: arr[9], READ_MESSAGE_HISTORY: arr[10], SEND_TTS_MESSAGES: arr[11], SEND_VOICE_MESSAGES: arr[12], SEND_POLLS: arr[13] } = Permissions);
  let found = items;
  if (!description.inSoundmojiExperiment) {
    found = items.filter((item) => item !== constants.USE_EXTERNAL_SOUNDS);
  }
  closure_0 = arg0;
  return { title: stringResult, description: description.sectionDescription, permissions: found.map((item) => closure_0[item.toString(item)]) };
};
export const generateChannelAppsSection = function generateChannelAppsSection(arg0, intl15, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { showActivities: true };
  }
  const obj2 = { title: intl15, permissions: null };
  const items = [Permissions.USE_APPLICATION_COMMANDS, , ];
  let prop = null;
  if (obj.showActivities) {
    prop = Permissions.USE_EMBEDDED_ACTIVITIES;
  }
  items[1] = prop;
  items[2] = Permissions.USE_EXTERNAL_APPS;
  const found = items.filter(GlobalUtils.isNotNullish);
  closure_0 = arg0;
  obj2.permissions = found.map((item) => closure_0[item.toString(item)]);
  return obj2;
};
export const generateChannelStageVoiceSection = function generateChannelStageVoiceSection(arg0, intl10, isStageVideoEnabledResult) {
  const obj = { title: intl10, permissions: null };
  const CONNECT = Permissions.CONNECT;
  if (isStageVideoEnabledResult) {
    const items = [CONNECT, , , ];
    ({ STREAM: arr2[1], MUTE_MEMBERS: arr2[2], MOVE_MEMBERS: arr2[3] } = Permissions);
    let items1 = items;
  } else {
    items1 = [CONNECT, , ];
    ({ MUTE_MEMBERS: arr[1], MOVE_MEMBERS: arr[2] } = Permissions);
  }
  closure_0 = arg0;
  obj.permissions = items1.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelStageSection = function generateChannelStageSection(arg0, intl11) {
  const obj = { title: intl11, permissions: null };
  const items = [, ];
  ({ REQUEST_TO_SPEAK: arr[0], MENTION_EVERYONE: arr[1] } = Permissions);
  closure_0 = arg0;
  obj.permissions = items.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelEventsSection = function generateChannelEventsSection(arg0, intl12) {
  const obj = { title: intl12, permissions: null };
  const items = [, ];
  ({ CREATE_EVENTS: arr[0], MANAGE_EVENTS: arr[1] } = Permissions);
  closure_0 = arg0;
  obj.permissions = items.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const renderDescription = function renderDescription(str) {
  if (null == str) {
    return str;
  } else if (typeof str === "string") {
    let trimmed = str.trim();
  } else {
    trimmed = str;
    if (typeof str === "function") {
      const intl = util.intl;
      trimmed = intl.format(str, {});
    }
  }
};