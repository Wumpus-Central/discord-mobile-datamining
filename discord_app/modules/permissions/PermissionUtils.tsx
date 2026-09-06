// discord_app/modules/permissions/PermissionUtils.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import util from "../../intl/index.native.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getGuildPermissionSpec(permissionOptions) {
  let obj = {};
  const tmp = Permissions;
  let str = Permissions.VIEW_CHANNEL;
  obj = { title: null, description: null, flag: null };
  str = str.toString();
  const intl = util.intl;
  obj.title = intl.string(util.t.uV83yi);
  obj.description = util.t.ybTHLk;
  obj.flag = Permissions.VIEW_CHANNEL;
  obj[str] = obj;
  let str2 = Permissions.MANAGE_CHANNELS;
  obj = { title: null, description: null, flag: null };
  const intl2 = util.intl;
  obj.title = intl2.string(util.t["9qLtWs"]);
  obj.description = util.t.qfJnug;
  obj.flag = Permissions.MANAGE_CHANNELS;
  obj[str2.toString()] = obj;
  let str3 = Permissions.MANAGE_ROLES;
  const obj1 = { title: null, description: null, flag: null };
  str2 = str3.toString();
  const intl3 = util.intl;
  obj1.title = intl3.string(util.t["C8d+oG"]);
  obj1.description = util.t.buo9uw;
  obj1.flag = Permissions.MANAGE_ROLES;
  obj[str2] = obj1;
  let str4 = Permissions.MANAGE_GUILD_EXPRESSIONS;
  const obj2 = { title: null, description: null, flag: null };
  str3 = str4.toString();
  const intl4 = util.intl;
  obj2.title = intl4.string(util.t.bbuXIn);
  obj2.description = util.t["4vb3/6"];
  obj2.flag = Permissions.MANAGE_GUILD_EXPRESSIONS;
  obj[str3] = obj2;
  let str5 = Permissions.CREATE_GUILD_EXPRESSIONS;
  const obj3 = { title: null, description: null, flag: null };
  str4 = str5.toString();
  const intl5 = util.intl;
  obj3.title = intl5.string(util.t.HarVuP);
  obj3.description = util.t.gkdHvH;
  obj3.flag = Permissions.CREATE_GUILD_EXPRESSIONS;
  obj[str4] = obj3;
  let str6 = Permissions.VIEW_AUDIT_LOG;
  const obj4 = { title: null, description: null, flag: null };
  str5 = str6.toString();
  const intl6 = util.intl;
  obj4.title = intl6.string(util.t.fZgLpA);
  obj4.description = util.t["0hx75i"];
  obj4.flag = Permissions.VIEW_AUDIT_LOG;
  obj[str5] = obj4;
  let str7 = Permissions.VIEW_GUILD_ANALYTICS;
  const obj5 = { title: null, description: null, flag: null };
  str6 = str7.toString();
  const intl7 = util.intl;
  obj5.title = intl7.string(util.t["rQJBE/"]);
  obj5.description = util.t.whVKhX;
  obj5.flag = Permissions.VIEW_GUILD_ANALYTICS;
  obj[str6] = obj5;
  let str8 = Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS;
  const obj6 = { title: null, description: null, flag: null };
  str7 = str8.toString();
  const intl8 = util.intl;
  obj6.title = intl8.string(util.t["0lTLTv"]);
  obj6.description = util.t.mut6NV;
  obj6.flag = Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS;
  obj[str7] = obj6;
  let str9 = Permissions.MANAGE_WEBHOOKS;
  const obj7 = { title: null, description: null, flag: null };
  str8 = str9.toString();
  const intl9 = util.intl;
  obj7.title = intl9.string(util.t["/ADKmM"]);
  obj7.description = util.t.LczYqC;
  obj7.flag = Permissions.MANAGE_WEBHOOKS;
  obj[str8] = obj7;
  let str10 = Permissions.MANAGE_GUILD;
  const obj8 = { title: null, description: null, flag: null };
  str9 = str10.toString();
  const intl10 = util.intl;
  obj8.title = intl10.string(util.t.QZRcfO);
  obj8.description = util.t["KoQe/G"];
  obj8.flag = Permissions.MANAGE_GUILD;
  obj[str9] = obj8;
  let str11 = Permissions.CREATE_INSTANT_INVITE;
  const obj9 = { title: null, description: null, flag: null };
  str10 = str11.toString();
  const intl11 = util.intl;
  obj9.title = intl11.string(util.t.zJrgTG);
  obj9.description = util.t.PCFOZa;
  obj9.flag = Permissions.CREATE_INSTANT_INVITE;
  obj[str10] = obj9;
  let str12 = Permissions.CHANGE_NICKNAME;
  const obj10 = { title: null, description: null, flag: null };
  str11 = str12.toString();
  const intl12 = util.intl;
  obj10.title = intl12.string(util.t.dilOF6);
  obj10.description = util.t["b8B++j"];
  obj10.flag = Permissions.CHANGE_NICKNAME;
  obj[str11] = obj10;
  let str13 = Permissions.MANAGE_NICKNAMES;
  const obj11 = { title: null, description: null, flag: null };
  str12 = str13.toString();
  const intl13 = util.intl;
  obj11.title = intl13.string(util.t["t+Ct5x"]);
  obj11.description = util.t.hTnlMb;
  obj11.flag = Permissions.MANAGE_NICKNAMES;
  obj[str12] = obj11;
  let str14 = Permissions.KICK_MEMBERS;
  str13 = str14.toString();
  const intl14 = util.intl;
  const string = intl14.string;
  const t = util.t;
  if (permissionOptions.showMembershipManualApprovalPermissions) {
    let stringResult = string(t["9TxXwb"]);
  } else {
    stringResult = string(t.pBNv6i);
  }
  const obj12 = { title: stringResult, description: null, flag: null };
  const t2 = util.t;
  obj12.description = permissionOptions.showMembershipManualApprovalPermissions ? t2.hGBAnw : t2.rwdPaE;
  obj12.flag = tmp.KICK_MEMBERS;
  obj[str13] = obj12;
  let str15 = tmp.BAN_MEMBERS;
  const obj13 = { title: null, description: null, flag: null };
  str14 = str15.toString();
  const intl15 = util.intl;
  obj13.title = intl15.string(util.t.oTBA7N);
  obj13.description = util.t["OqNY0/"];
  obj13.flag = tmp.BAN_MEMBERS;
  obj[str14] = obj13;
  let str16 = tmp.MODERATE_MEMBERS;
  const obj14 = { title: null, description: null, flag: null };
  str15 = str16.toString();
  const intl16 = util.intl;
  obj14.title = intl16.string(util.t["+RL6pz"]);
  obj14.description = util.t.T6bZsX;
  obj14.flag = tmp.MODERATE_MEMBERS;
  obj[str15] = obj14;
  let str17 = tmp.SEND_MESSAGES;
  const obj15 = { title: null, description: null, flag: null };
  str16 = str17.toString();
  const intl17 = util.intl;
  obj15.title = intl17.string(util.t.S1VOwd);
  obj15.description = util.t.prvWKm;
  obj15.flag = tmp.SEND_MESSAGES;
  obj[str16] = obj15;
  let str18 = tmp.EMBED_LINKS;
  const obj16 = { title: null, description: null, flag: null };
  str17 = str18.toString();
  const intl18 = util.intl;
  obj16.title = intl18.string(util.t["969dEL"]);
  obj16.description = util.t.ChoIiy;
  obj16.flag = tmp.EMBED_LINKS;
  obj[str17] = obj16;
  let str19 = tmp.ATTACH_FILES;
  const obj17 = { title: null, description: null, flag: null };
  str18 = str19.toString();
  const intl19 = util.intl;
  obj17.title = intl19.string(util.t["3AS4UM"]);
  obj17.description = util.t["/87mYH"];
  obj17.flag = tmp.ATTACH_FILES;
  obj[str18] = obj17;
  let str20 = tmp.ADD_REACTIONS;
  const obj18 = { title: null, description: null, flag: null };
  str19 = str20.toString();
  const intl20 = util.intl;
  obj18.title = intl20.string(util.t.yEoJAr);
  obj18.description = util.t.FEYwX7;
  obj18.flag = tmp.ADD_REACTIONS;
  obj[str19] = obj18;
  let str21 = tmp.USE_EXTERNAL_EMOJIS;
  const obj19 = { title: null, description: null, flag: null };
  str20 = str21.toString();
  const intl21 = util.intl;
  obj19.title = intl21.string(util.t["+bxf3H"]);
  obj19.description = util.t.POeVIu;
  obj19.flag = tmp.USE_EXTERNAL_EMOJIS;
  obj[str20] = obj19;
  let str22 = tmp.USE_EXTERNAL_STICKERS;
  const obj20 = { title: null, description: null, flag: null };
  str21 = str22.toString();
  const intl22 = util.intl;
  obj20.title = intl22.string(util.t.ERNhYf);
  obj20.description = util.t.AdXVhI;
  obj20.flag = tmp.USE_EXTERNAL_STICKERS;
  obj[str21] = obj20;
  let str23 = tmp.MENTION_EVERYONE;
  const obj21 = { title: null, description: null, flag: null };
  str22 = str23.toString();
  const intl23 = util.intl;
  obj21.title = intl23.string(util.t.Y78KGC);
  const intl24 = util.intl;
  obj21.description = intl24.string(util.t.ryj6N5);
  obj21.flag = tmp.MENTION_EVERYONE;
  obj[str22] = obj21;
  let str24 = tmp.MANAGE_MESSAGES;
  const obj22 = { title: null, description: null, flag: null };
  str23 = str24.toString();
  const intl25 = util.intl;
  obj22.title = intl25.string(util.t["6lU9xM"]);
  obj22.description = util.t["RXMG/+"];
  obj22.flag = tmp.MANAGE_MESSAGES;
  obj[str23] = obj22;
  let str25 = tmp.PIN_MESSAGES;
  const obj23 = { title: null, description: null, flag: null };
  str24 = str25.toString();
  const intl26 = util.intl;
  obj23.title = intl26.string(util.t.Y5BI39);
  obj23.description = util.t["LN/K3x"];
  obj23.flag = tmp.PIN_MESSAGES;
  obj[str24] = obj23;
  let str26 = tmp.BYPASS_SLOWMODE;
  const obj24 = { title: null, description: null, flag: null };
  str25 = str26.toString();
  const intl27 = util.intl;
  obj24.title = intl27.string(util.t.kqcjeV);
  obj24.description = util.t.S2ZE5c;
  obj24.flag = tmp.BYPASS_SLOWMODE;
  obj[str25] = obj24;
  let str27 = tmp.MANAGE_OFFICIAL_MESSAGES;
  const obj25 = { title: null, description: null, flag: null };
  str26 = str27.toString();
  const intl28 = util.intl;
  obj25.title = intl28.string(util.t.Aj9ruN);
  obj25.description = util.t.pfEgBm;
  obj25.flag = tmp.MANAGE_OFFICIAL_MESSAGES;
  obj[str26] = obj25;
  let str28 = tmp.READ_MESSAGE_HISTORY;
  const obj26 = { title: null, description: null, flag: null };
  str27 = str28.toString();
  const intl29 = util.intl;
  obj26.title = intl29.string(util.t.l9ufaR);
  obj26.description = util.t.rmHPFR;
  obj26.flag = tmp.READ_MESSAGE_HISTORY;
  obj[str27] = obj26;
  let str29 = tmp.SEND_TTS_MESSAGES;
  const obj27 = { title: null, description: null, flag: null };
  str28 = str29.toString();
  const intl30 = util.intl;
  obj27.title = intl30.string(util.t.mMbwh7);
  obj27.description = util.t.D6x8Nr;
  obj27.flag = tmp.SEND_TTS_MESSAGES;
  obj[str28] = obj27;
  let str30 = tmp.USE_APPLICATION_COMMANDS;
  const obj28 = { title: null, description: null, flag: null };
  str29 = str30.toString();
  const intl31 = util.intl;
  obj28.title = intl31.string(util.t.nkoPOt);
  obj28.description = util.t.pJrJ35;
  obj28.flag = tmp.USE_APPLICATION_COMMANDS;
  obj[str29] = obj28;
  let str31 = tmp.USE_EXTERNAL_APPS;
  const obj29 = { title: null, description: null, flag: null };
  str30 = str31.toString();
  const intl32 = util.intl;
  obj29.title = intl32.string(util.t.TtA5rK);
  obj29.description = util.t.mzLoDY;
  obj29.flag = tmp.USE_EXTERNAL_APPS;
  obj[str30] = obj29;
  let str32 = tmp.SEND_VOICE_MESSAGES;
  const obj30 = { title: null, description: null, flag: null };
  str31 = str32.toString();
  const intl33 = util.intl;
  obj30.title = intl33.string(util.t.WlWSBT);
  obj30.description = util.t.pDuyi0;
  obj30.flag = tmp.SEND_VOICE_MESSAGES;
  obj[str31] = obj30;
  let str33 = tmp.SEND_POLLS;
  const obj31 = { title: null, description: null, flag: null };
  str32 = str33.toString();
  const intl34 = util.intl;
  obj31.title = intl34.string(util.t.UMQ7Ww);
  obj31.description = util.t["Xl6W+F"];
  obj31.flag = tmp.SEND_POLLS;
  obj[str32] = obj31;
  let str34 = tmp.CONNECT;
  const obj32 = { title: null, description: null, flag: null };
  str33 = str34.toString();
  const intl35 = util.intl;
  obj32.title = intl35.string(util.t.S0W8Z5);
  obj32.description = util.t["3GCm/f"];
  obj32.flag = tmp.CONNECT;
  obj[str33] = obj32;
  let str35 = tmp.SPEAK;
  const obj33 = { title: null, description: null, flag: null };
  str34 = str35.toString();
  const intl36 = util.intl;
  obj33.title = intl36.string(util.t["8w1tIR"]);
  obj33.description = util.t.y4MncF;
  obj33.flag = tmp.SPEAK;
  obj[str34] = obj33;
  let str36 = tmp.STREAM;
  const obj34 = { title: null, description: null, flag: null };
  str35 = str36.toString();
  const intl37 = util.intl;
  obj34.title = intl37.string(util.t.FlNoSV);
  obj34.description = util.t["6Z0j9v"];
  obj34.flag = tmp.STREAM;
  obj[str35] = obj34;
  let str37 = tmp.USE_EMBEDDED_ACTIVITIES;
  const obj35 = { title: null, description: null, flag: null };
  str36 = str37.toString();
  const intl38 = util.intl;
  obj35.title = intl38.string(util.t.rLSGeh);
  obj35.description = util.t.BEqU5H;
  obj35.flag = tmp.USE_EMBEDDED_ACTIVITIES;
  obj[str36] = obj35;
  let str38 = tmp.USE_SOUNDBOARD;
  const obj36 = { title: null, description: null, flag: null };
  str37 = str38.toString();
  const intl39 = util.intl;
  obj36.title = intl39.string(util.t.Bco7NG);
  let prop;
  if (permissionOptions != null) {
    prop = permissionOptions.SOUNDBOARD_DESCRIPTION;
  }
  if (prop == null) {
    prop = util.t["+8p+fc"];
  }
  obj36.description = prop;
  obj36.flag = tmp.USE_SOUNDBOARD;
  obj[str37] = obj36;
  let str39 = tmp.USE_EXTERNAL_SOUNDS;
  const obj37 = { title: null, description: null, flag: null };
  str38 = str39.toString();
  const intl40 = util.intl;
  obj37.title = intl40.string(util.t.pwaVJ6);
  obj37.description = util.t.qDpPtX;
  obj37.flag = tmp.USE_EXTERNAL_SOUNDS;
  obj[str38] = obj37;
  let str40 = tmp.USE_VAD;
  const obj38 = { title: null, description: null, flag: null };
  str39 = str40.toString();
  const intl41 = util.intl;
  obj38.title = intl41.string(util.t["08zAV7"]);
  obj38.description = util.t["7CHjmc"];
  obj38.flag = tmp.USE_VAD;
  obj[str39] = obj38;
  let str41 = tmp.PRIORITY_SPEAKER;
  const obj39 = { title: null, description: null, flag: null };
  str40 = str41.toString();
  const intl42 = util.intl;
  obj39.title = intl42.string(util.t.BVK71i);
  let prop1;
  if (permissionOptions != null) {
    prop1 = permissionOptions.PRIORITY_SPEAKER_DESCRIPTION;
  }
  if (prop1 == null) {
    prop1 = util.t.OJkrro;
  }
  obj39.description = prop1;
  obj39.flag = tmp.PRIORITY_SPEAKER;
  obj[str40] = obj39;
  let str42 = tmp.MUTE_MEMBERS;
  const obj40 = { title: null, description: null, flag: null };
  str41 = str42.toString();
  const intl43 = util.intl;
  obj40.title = intl43.string(util.t["8EI30/"]);
  obj40.description = util.t.PIhGA1;
  obj40.flag = tmp.MUTE_MEMBERS;
  obj[str41] = obj40;
  let str43 = tmp.DEAFEN_MEMBERS;
  const obj41 = { title: null, description: null, flag: null };
  str42 = str43.toString();
  const intl44 = util.intl;
  obj41.title = intl44.string(util.t["9L47Fr"]);
  obj41.description = util.t["FQr3+t"];
  obj41.flag = tmp.DEAFEN_MEMBERS;
  obj[str42] = obj41;
  let str44 = tmp.MOVE_MEMBERS;
  const obj42 = { title: null, description: null, flag: null };
  str43 = str44.toString();
  const intl45 = util.intl;
  obj42.title = intl45.string(util.t.YtjJPQ);
  obj42.description = util.t.SEe0Gp;
  obj42.flag = tmp.MOVE_MEMBERS;
  obj[str43] = obj42;
  let str45 = tmp.REQUEST_TO_SPEAK;
  const obj43 = { title: null, description: null, flag: null, isExperimental: true };
  str44 = str45.toString();
  const intl46 = util.intl;
  obj43.title = intl46.string(util.t["5kicT2"]);
  obj43.description = util.t["yNE+Q5"];
  obj43.flag = tmp.REQUEST_TO_SPEAK;
  obj[str44] = obj43;
  let str46 = tmp.ADMINISTRATOR;
  const obj44 = { title: null, description: null, flag: null };
  str45 = str46.toString();
  const intl47 = util.intl;
  obj44.title = intl47.string(util.t.PGvZqX);
  if (typeof util.t.UJxMrK === "string") {
    let UJxMrK = util.t.UJxMrK;
  } else {
    const intl55 = util.intl;
    UJxMrK = intl55.format(util.t.UJxMrK, {});
  }
  obj44.description = UJxMrK;
  obj44.flag = tmp.ADMINISTRATOR;
  obj[str45] = obj44;
  let str47 = tmp.MANAGE_EVENTS;
  const obj45 = { title: null, description: null, flag: null };
  str46 = str47.toString();
  const intl48 = util.intl;
  obj45.title = intl48.string(util.t.HIgA5a);
  obj45.description = util.t["SL+qgG"];
  obj45.flag = tmp.MANAGE_EVENTS;
  obj[str46] = obj45;
  let str48 = tmp.CREATE_EVENTS;
  const obj46 = { title: null, description: null, flag: null };
  str47 = str48.toString();
  const intl49 = util.intl;
  obj46.title = intl49.string(util.t.qyjZua);
  obj46.description = util.t.bQEFJZ;
  obj46.flag = tmp.CREATE_EVENTS;
  obj[str47] = obj46;
  let str49 = tmp.MANAGE_THREADS;
  const obj47 = { title: null, description: null, flag: null };
  str48 = str49.toString();
  const intl50 = util.intl;
  obj47.title = intl50.string(util.t.QKe7Q3);
  obj47.description = util.t.QAxIIt;
  obj47.flag = tmp.MANAGE_THREADS;
  obj[str48] = obj47;
  let str50 = tmp.CREATE_PUBLIC_THREADS;
  const obj48 = { title: null, description: null, flag: null };
  str49 = str50.toString();
  const intl51 = util.intl;
  obj48.title = intl51.string(util.t["25rKnX"]);
  obj48.description = util.t.ODCYj8;
  obj48.flag = tmp.CREATE_PUBLIC_THREADS;
  obj[str49] = obj48;
  let str51 = tmp.CREATE_PRIVATE_THREADS;
  const obj49 = { title: null, description: null, flag: null };
  str50 = str51.toString();
  const intl52 = util.intl;
  obj49.title = intl52.string(util.t.QwbTSa);
  obj49.description = util.t["G/cc3l"];
  obj49.flag = tmp.CREATE_PRIVATE_THREADS;
  obj[str50] = obj49;
  let str52 = tmp.SEND_MESSAGES_IN_THREADS;
  const obj50 = { title: null, description: null, flag: null };
  str51 = str52.toString();
  const intl53 = util.intl;
  obj50.title = intl53.string(util.t["5QlVGy"]);
  obj50.description = util.t.C2ZPE3;
  obj50.flag = tmp.SEND_MESSAGES_IN_THREADS;
  obj[str51] = obj50;
  const obj51 = { title: null, description: null, flag: null };
  str52 = tmp.SET_VOICE_CHANNEL_STATUS.toString();
  const intl54 = util.intl;
  obj51.title = intl54.string(util.t.VBwkUf);
  const t3 = util.t;
  obj51.description = permissionOptions.enableHangoutWindow ? t3.CYcJ6H : t3.C6BzXx;
  obj51.flag = tmp.SET_VOICE_CHANNEL_STATUS;
  obj[str52] = obj51;
  return obj;
}
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/permissions/PermissionUtils.tsx");

export { getGuildPermissionSpec };
export const generateGuildPermissionSpec = function generateGuildPermissionSpec(
  showCreatorMonetizationAnalyticsPermission,
) {
  const tmp = getGuildPermissionSpec(showCreatorMonetizationAnalyticsPermission);
  const items = [, , , , , ,];
  ({
    VIEW_CHANNEL: arr[0],
    MANAGE_CHANNELS: arr[1],
    MANAGE_ROLES: arr[2],
    CREATE_GUILD_EXPRESSIONS: arr[3],
    MANAGE_GUILD_EXPRESSIONS: arr[4],
    VIEW_AUDIT_LOG: arr[5],
    VIEW_GUILD_ANALYTICS: arr[6],
  } = Permissions);
  if (showCreatorMonetizationAnalyticsPermission.showCreatorMonetizationAnalyticsPermission) {
    let arr = items.push(tmp2.VIEW_CREATOR_MONETIZATION_ANALYTICS);
  }
  arr = items.push(tmp2.MANAGE_WEBHOOKS);
  items.push(Permissions.MANAGE_GUILD);
  let obj = { title: null, permissions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["mYck+B"]);
  obj.permissions = items.map((item) => closure_0[item.toString(item)]);
  const permissions = obj.permissions;
  obj.permissions = permissions.filter((isExperimental) => !isExperimental.isExperimental);
  const items1 = [obj, , , ,];
  const items2 = [, , , , ,];
  ({
    CREATE_INSTANT_INVITE: arr4[0],
    CHANGE_NICKNAME: arr4[1],
    MANAGE_NICKNAMES: arr4[2],
    KICK_MEMBERS: arr4[3],
    BAN_MEMBERS: arr4[4],
    MODERATE_MEMBERS: arr4[5],
  } = Permissions);
  obj = { title: null, permissions: null };
  const intl2 = util.intl;
  obj.title = intl2.string(util.t.Ny49TN);
  closure_0 = tmp;
  obj.permissions = items2.map((item) => closure_0[item.toString(item)]);
  const permissions1 = obj.permissions;
  obj.permissions = permissions1.filter((isExperimental) => !isExperimental.isExperimental);
  items1[1] = obj;
  const items3 = [, , , , , , , , , , , , , , , , , , ,];
  ({
    SEND_MESSAGES: arr6[0],
    SEND_MESSAGES_IN_THREADS: arr6[1],
    CREATE_PUBLIC_THREADS: arr6[2],
    CREATE_PRIVATE_THREADS: arr6[3],
    EMBED_LINKS: arr6[4],
    ATTACH_FILES: arr6[5],
    ADD_REACTIONS: arr6[6],
    USE_EXTERNAL_EMOJIS: arr6[7],
    USE_EXTERNAL_STICKERS: arr6[8],
    USE_EXTERNAL_SOUNDS: arr6[9],
    MENTION_EVERYONE: arr6[10],
    MANAGE_MESSAGES: arr6[11],
    PIN_MESSAGES: arr6[12],
    MANAGE_OFFICIAL_MESSAGES: arr6[13],
    BYPASS_SLOWMODE: arr6[14],
    MANAGE_THREADS: arr6[15],
    READ_MESSAGE_HISTORY: arr6[16],
    SEND_TTS_MESSAGES: arr6[17],
    SEND_VOICE_MESSAGES: arr6[18],
    SEND_POLLS: arr6[19],
  } = Permissions);
  let found = items3;
  if (!showCreatorMonetizationAnalyticsPermission.inSoundmojiExperiment) {
    found = items3.filter((item) => item !== constants.USE_EXTERNAL_SOUNDS);
  }
  obj = { title: null, permissions: null };
  const intl3 = tmp6(1114).intl;
  obj.title = intl3.string(util.t.cKobO5);
  obj.permissions = found.map((item) => closure_0[item.toString(item)]);
  const permissions2 = obj.permissions;
  obj.permissions = permissions2.filter((isExperimental) => !isExperimental.isExperimental);
  items1[2] = obj;
  const items4 = [, , , , , , , , , ,];
  ({
    CONNECT: arr9[0],
    SPEAK: arr9[1],
    STREAM: arr9[2],
    USE_SOUNDBOARD: arr9[3],
    USE_EXTERNAL_SOUNDS: arr9[4],
    USE_VAD: arr9[5],
    PRIORITY_SPEAKER: arr9[6],
    MUTE_MEMBERS: arr9[7],
    DEAFEN_MEMBERS: arr9[8],
    MOVE_MEMBERS: arr9[9],
    SET_VOICE_CHANNEL_STATUS: arr9[10],
  } = Permissions);
  const obj1 = { title: null, permissions: null };
  const intl4 = tmp6(1114).intl;
  obj1.title = intl4.string(util.t["46Ra1b"]);
  obj1.permissions = items4.map((item) => closure_0[item.toString(item)]);
  const permissions3 = obj1.permissions;
  obj1.permissions = permissions3.filter((isExperimental) => !isExperimental.isExperimental);
  items1[3] = obj1;
  const items5 = [, ,];
  ({
    USE_APPLICATION_COMMANDS: arr11[0],
    USE_EMBEDDED_ACTIVITIES: arr11[1],
    USE_EXTERNAL_APPS: arr11[2],
  } = Permissions);
  const obj2 = { title: null, permissions: null };
  const intl5 = tmp6(1114).intl;
  obj2.title = intl5.string(util.t["rrh/W6"]);
  closure_0 = tmp;
  obj2.permissions = items5.map((item) => closure_0[item.toString(item)]);
  const permissions4 = obj2.permissions;
  obj2.permissions = permissions4.filter((isExperimental) => !isExperimental.isExperimental);
  items1[4] = obj2;
  if (showCreatorMonetizationAnalyticsPermission.showStageChannelPermissions) {
    const obj3 = { title: null, permissions: null };
    const intl6 = tmp6(1114).intl;
    obj3.title = intl6.string(tmp6(1114).t.yniauk);
    const items6 = [tmp2.REQUEST_TO_SPEAK];
    closure_0 = tmp;
    obj3.permissions = items6.map((item) => closure_0[item.toString(item)]);
    let flag = showCreatorMonetizationAnalyticsPermission.showExperimental;
    if (flag === undefined) {
      flag = false;
    }
    if (!flag) {
      const permissions5 = obj3.permissions;
      obj3.permissions = permissions5.filter((isExperimental) => !isExperimental.isExperimental);
    }
    items1.push(obj3);
  }
  const obj4 = { title: null, permissions: null };
  const intl7 = tmp6(1114).intl;
  obj4.title = intl7.string(util.t.b8lplT);
  const items7 = [,];
  ({ CREATE_EVENTS: arr15[0], MANAGE_EVENTS: arr15[1] } = Permissions);
  closure_0 = tmp;
  obj4.permissions = items7.map((item) => closure_0[item.toString(item)]);
  let flag2 = showCreatorMonetizationAnalyticsPermission.showExperimental;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (!flag2) {
    const permissions6 = obj4.permissions;
    obj4.permissions = permissions6.filter((isExperimental) => !isExperimental.isExperimental);
  }
  items1.push(obj4);
  const obj5 = { title: null, permissions: null };
  const intl8 = tmp6(1114).intl;
  obj5.title = intl8.string(util.t["3uI5CX"]);
  const items8 = [Permissions.ADMINISTRATOR];
  closure_0 = tmp;
  obj5.permissions = items8.map((item) => closure_0[item.toString(item)]);
  const permissions7 = obj5.permissions;
  obj5.permissions = permissions7.filter((isExperimental) => !isExperimental.isExperimental);
  const arr4 = items1.push(obj5);
  return items1;
};
export const generateChannelGeneralSection = function generateChannelGeneralSection(arg0, intl16, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { showManageWebhooks: true };
  }
  obj = { title: intl16, permissions: null };
  let showManageWebhooks;
  if (obj != null) {
    showManageWebhooks = obj.showManageWebhooks;
  }
  const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
  if (showManageWebhooks) {
    const items = [VIEW_CHANNEL, , ,];
    ({ MANAGE_CHANNELS: arr2[1], MANAGE_ROLES: arr2[2], MANAGE_WEBHOOKS: arr2[3] } = tmp2);
    let items1 = items;
  } else {
    items1 = [VIEW_CHANNEL, ,];
    ({ MANAGE_CHANNELS: arr[1], MANAGE_ROLES: arr[2] } = tmp2);
  }
  closure_0 = arg0;
  obj.permissions = items1.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelMembershipSection = function generateChannelMembershipSection(arg0, intl17) {
  const obj = { title: intl17, permissions: null };
  const items = [Permissions.CREATE_INSTANT_INVITE];
  closure_0 = arg0;
  obj.permissions = items.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelTextSection = function generateChannelTextSection(arg0, intl25, description) {
  const items = [, , , , , , , , , , , , , , , , , , ,];
  ({
    SEND_MESSAGES: arr[0],
    SEND_MESSAGES_IN_THREADS: arr[1],
    CREATE_PUBLIC_THREADS: arr[2],
    CREATE_PRIVATE_THREADS: arr[3],
    EMBED_LINKS: arr[4],
    ATTACH_FILES: arr[5],
    ADD_REACTIONS: arr[6],
    USE_EXTERNAL_EMOJIS: arr[7],
    USE_EXTERNAL_STICKERS: arr[8],
    USE_EXTERNAL_SOUNDS: arr[9],
    MENTION_EVERYONE: arr[10],
    MANAGE_MESSAGES: arr[11],
    PIN_MESSAGES: arr[12],
    MANAGE_OFFICIAL_MESSAGES: arr[13],
    BYPASS_SLOWMODE: arr[14],
    MANAGE_THREADS: arr[15],
    READ_MESSAGE_HISTORY: arr[16],
    SEND_TTS_MESSAGES: arr[17],
    SEND_VOICE_MESSAGES: arr[18],
    SEND_POLLS: arr[19],
  } = Permissions);
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
  return {
    title: intl25,
    description: description.sectionDescription,
    permissions: found2.map((item) => closure_0[item.toString(item)]),
  };
};
export const generateChannelVoiceSection = function generateChannelVoiceSection(arg0, intl) {
  const obj = { title: intl, permissions: null };
  const items = [, , , , , , , , , ,];
  ({
    CONNECT: arr[0],
    SPEAK: arr[1],
    STREAM: arr[2],
    USE_SOUNDBOARD: arr[3],
    USE_EXTERNAL_SOUNDS: arr[4],
    USE_VAD: arr[5],
    PRIORITY_SPEAKER: arr[6],
    MUTE_MEMBERS: arr[7],
    DEAFEN_MEMBERS: arr[8],
    MOVE_MEMBERS: arr[9],
    SET_VOICE_CHANNEL_STATUS: arr[10],
  } = Permissions);
  closure_0 = arg0;
  obj.permissions = items.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelVoiceChatSection = function generateChannelVoiceChatSection(
  arg0,
  stringResult,
  description,
) {
  const items = [, , , , , , , , , , , , ,];
  ({
    SEND_MESSAGES: arr[0],
    EMBED_LINKS: arr[1],
    ATTACH_FILES: arr[2],
    ADD_REACTIONS: arr[3],
    USE_EXTERNAL_EMOJIS: arr[4],
    USE_EXTERNAL_STICKERS: arr[5],
    USE_EXTERNAL_SOUNDS: arr[6],
    MENTION_EVERYONE: arr[7],
    MANAGE_MESSAGES: arr[8],
    BYPASS_SLOWMODE: arr[9],
    READ_MESSAGE_HISTORY: arr[10],
    SEND_TTS_MESSAGES: arr[11],
    SEND_VOICE_MESSAGES: arr[12],
    SEND_POLLS: arr[13],
  } = Permissions);
  let found = items;
  if (!description.inSoundmojiExperiment) {
    found = items.filter((item) => item !== constants.USE_EXTERNAL_SOUNDS);
  }
  closure_0 = arg0;
  return {
    title: stringResult,
    description: description.sectionDescription,
    permissions: found.map((item) => closure_0[item.toString(item)]),
  };
};
export const generateChannelAppsSection = function generateChannelAppsSection(arg0, intl15, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { showActivities: true };
  }
  obj = { title: intl15, permissions: null };
  const items = [Permissions.USE_APPLICATION_COMMANDS, ,];
  let prop = null;
  if (obj.showActivities) {
    prop = tmp.USE_EMBEDDED_ACTIVITIES;
  }
  items[1] = prop;
  items[2] = Permissions.USE_EXTERNAL_APPS;
  const found = items.filter(GlobalUtils.isNotNullish);
  closure_0 = arg0;
  obj.permissions = found.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelStageVoiceSection = function generateChannelStageVoiceSection(
  arg0,
  intl10,
  isStageVideoEnabledResult,
) {
  const obj = { title: intl10, permissions: null };
  const CONNECT = Permissions.CONNECT;
  if (isStageVideoEnabledResult) {
    const items = [CONNECT, , ,];
    ({ STREAM: arr2[1], MUTE_MEMBERS: arr2[2], MOVE_MEMBERS: arr2[3] } = tmp);
    let items1 = items;
  } else {
    items1 = [CONNECT, ,];
    ({ MUTE_MEMBERS: arr[1], MOVE_MEMBERS: arr[2] } = tmp);
  }
  closure_0 = arg0;
  obj.permissions = items1.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelStageSection = function generateChannelStageSection(arg0, intl11) {
  const obj = { title: intl11, permissions: null };
  const items = [,];
  ({ REQUEST_TO_SPEAK: arr[0], MENTION_EVERYONE: arr[1] } = Permissions);
  closure_0 = arg0;
  obj.permissions = items.map((item) => closure_0[item.toString(item)]);
  return obj;
};
export const generateChannelEventsSection = function generateChannelEventsSection(arg0, intl12) {
  const obj = { title: intl12, permissions: null };
  const items = [,];
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
