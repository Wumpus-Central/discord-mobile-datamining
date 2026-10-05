// discord_app/modules/permissions/PermissionUtils.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import intl56 from "../../intl/index.native.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getGuildPermissionSpec(permissionOptions) {
  let UJxMrK;
  let enableHangoutWindow;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl36;
  let intl37;
  let intl38;
  let intl39;
  let intl4;
  let intl40;
  let intl41;
  let intl42;
  let intl43;
  let intl44;
  let intl45;
  let intl46;
  let intl47;
  let intl48;
  let intl49;
  let intl5;
  let intl50;
  let intl51;
  let intl52;
  let intl53;
  let intl54;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let prop;
  let prop1;
  let showMembershipManualApprovalPermissions2;
  let stringResult;
  let t2;
  let t3;
  const obj = {};
  const obj2 = { title: intl.string(intl56.t.uV83yi), description: intl56.t.ybTHLk, flag: Permissions.VIEW_CHANNEL };
  const str = Permissions.VIEW_CHANNEL;
  const str1 = str.toString();
  intl = intl56.intl;
  obj[str1] = obj2;
  const obj3 = {
    title: intl2.string(intl56.t["9qLtWs"]),
    description: intl56.t.qfJnug,
    flag: Permissions.MANAGE_CHANNELS,
  };
  const str2 = Permissions.MANAGE_CHANNELS;
  const str54 = str2.toString();
  intl2 = intl56.intl;
  obj[str54] = obj3;
  const obj4 = {
    title: intl3.string(intl56.t["C8d+oG"]),
    description: intl56.t.buo9uw,
    flag: Permissions.MANAGE_ROLES,
  };
  const str3 = Permissions.MANAGE_ROLES;
  const str55 = str3.toString();
  intl3 = intl56.intl;
  obj[str55] = obj4;
  const obj5 = {
    title: intl4.string(intl56.t.bbuXIn),
    description: intl56.t["4vb3/6"],
    flag: Permissions.MANAGE_GUILD_EXPRESSIONS,
  };
  const str4 = Permissions.MANAGE_GUILD_EXPRESSIONS;
  const str56 = str4.toString();
  intl4 = intl56.intl;
  obj[str56] = obj5;
  const obj6 = {
    title: intl5.string(intl56.t.HarVuP),
    description: intl56.t.gkdHvH,
    flag: Permissions.CREATE_GUILD_EXPRESSIONS,
  };
  const str5 = Permissions.CREATE_GUILD_EXPRESSIONS;
  const str57 = str5.toString();
  intl5 = intl56.intl;
  obj[str57] = obj6;
  const obj7 = {
    title: intl6.string(intl56.t.fZgLpA),
    description: intl56.t["0hx75i"],
    flag: Permissions.VIEW_AUDIT_LOG,
  };
  const str6 = Permissions.VIEW_AUDIT_LOG;
  const str58 = str6.toString();
  intl6 = intl56.intl;
  obj[str58] = obj7;
  const obj8 = {
    title: intl7.string(intl56.t["rQJBE/"]),
    description: intl56.t.whVKhX,
    flag: Permissions.VIEW_GUILD_ANALYTICS,
  };
  const str7 = Permissions.VIEW_GUILD_ANALYTICS;
  const str59 = str7.toString();
  intl7 = intl56.intl;
  obj[str59] = obj8;
  const obj9 = {
    title: intl8.string(intl56.t["0lTLTv"]),
    description: intl56.t.mut6NV,
    flag: Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS,
  };
  const str8 = Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS;
  const str60 = str8.toString();
  intl8 = intl56.intl;
  obj[str60] = obj9;
  const obj10 = {
    title: intl9.string(intl56.t["/ADKmM"]),
    description: intl56.t.LczYqC,
    flag: Permissions.MANAGE_WEBHOOKS,
  };
  const str9 = Permissions.MANAGE_WEBHOOKS;
  const str61 = str9.toString();
  intl9 = intl56.intl;
  obj[str61] = obj10;
  const obj11 = {
    title: intl10.string(intl56.t.QZRcfO),
    description: intl56.t["KoQe/G"],
    flag: Permissions.MANAGE_GUILD,
  };
  const str10 = Permissions.MANAGE_GUILD;
  const str62 = str10.toString();
  intl10 = intl56.intl;
  obj[str62] = obj11;
  const obj12 = {
    title: intl11.string(intl56.t.zJrgTG),
    description: intl56.t.PCFOZa,
    flag: Permissions.CREATE_INSTANT_INVITE,
  };
  const str11 = Permissions.CREATE_INSTANT_INVITE;
  const str63 = str11.toString();
  intl11 = intl56.intl;
  obj[str63] = obj12;
  const obj13 = {
    title: intl12.string(intl56.t.dilOF6),
    description: intl56.t["b8B++j"],
    flag: Permissions.CHANGE_NICKNAME,
  };
  const str12 = Permissions.CHANGE_NICKNAME;
  const str64 = str12.toString();
  intl12 = intl56.intl;
  obj[str64] = obj13;
  const obj14 = {
    title: intl13.string(intl56.t["t+Ct5x"]),
    description: intl56.t.hTnlMb,
    flag: Permissions.MANAGE_NICKNAMES,
  };
  const str13 = Permissions.MANAGE_NICKNAMES;
  const str65 = str13.toString();
  intl13 = intl56.intl;
  obj[str65] = obj14;
  const showMembershipManualApprovalPermissions = permissionOptions.showMembershipManualApprovalPermissions;
  const str14 = Permissions.KICK_MEMBERS;
  const str66 = str14.toString();
  const intl14 = intl56.intl;
  const string = intl14.string;
  const t = intl56.t;
  if (showMembershipManualApprovalPermissions) {
    stringResult = string(t["9TxXwb"]);
  } else {
    stringResult = string(t.pBNv6i);
  }
  const obj15 = {
    title: stringResult,
    description: showMembershipManualApprovalPermissions2 ? t2.hGBAnw : t2.rwdPaE,
    flag: Permissions.KICK_MEMBERS,
  };
  showMembershipManualApprovalPermissions2 = permissionOptions.showMembershipManualApprovalPermissions;
  t2 = intl56.t;
  obj[str66] = obj15;
  const obj16 = {
    title: intl15.string(intl56.t.oTBA7N),
    description: intl56.t["OqNY0/"],
    flag: Permissions.BAN_MEMBERS,
  };
  const str15 = Permissions.BAN_MEMBERS;
  const str67 = str15.toString();
  intl15 = intl56.intl;
  obj[str67] = obj16;
  const obj17 = {
    title: intl16.string(intl56.t["+RL6pz"]),
    description: intl56.t.T6bZsX,
    flag: Permissions.MODERATE_MEMBERS,
  };
  const str16 = Permissions.MODERATE_MEMBERS;
  const str68 = str16.toString();
  intl16 = intl56.intl;
  obj[str68] = obj17;
  const obj18 = {
    title: intl17.string(intl56.t.S1VOwd),
    description: intl56.t.prvWKm,
    flag: Permissions.SEND_MESSAGES,
  };
  const str17 = Permissions.SEND_MESSAGES;
  const str69 = str17.toString();
  intl17 = intl56.intl;
  obj[str69] = obj18;
  const obj19 = {
    title: intl18.string(intl56.t["969dEL"]),
    description: intl56.t.ChoIiy,
    flag: Permissions.EMBED_LINKS,
  };
  const str18 = Permissions.EMBED_LINKS;
  const str70 = str18.toString();
  intl18 = intl56.intl;
  obj[str70] = obj19;
  const obj20 = {
    title: intl19.string(intl56.t["3AS4UM"]),
    description: intl56.t["/87mYH"],
    flag: Permissions.ATTACH_FILES,
  };
  const str19 = Permissions.ATTACH_FILES;
  const str71 = str19.toString();
  intl19 = intl56.intl;
  obj[str71] = obj20;
  const obj21 = {
    title: intl20.string(intl56.t.yEoJAr),
    description: intl56.t.FEYwX7,
    flag: Permissions.ADD_REACTIONS,
  };
  const str20 = Permissions.ADD_REACTIONS;
  const str72 = str20.toString();
  intl20 = intl56.intl;
  obj[str72] = obj21;
  const obj22 = {
    title: intl21.string(intl56.t["+bxf3H"]),
    description: intl56.t.POeVIu,
    flag: Permissions.USE_EXTERNAL_EMOJIS,
  };
  const str21 = Permissions.USE_EXTERNAL_EMOJIS;
  const str73 = str21.toString();
  intl21 = intl56.intl;
  obj[str73] = obj22;
  const obj23 = {
    title: intl22.string(intl56.t.ERNhYf),
    description: intl56.t.AdXVhI,
    flag: Permissions.USE_EXTERNAL_STICKERS,
  };
  const str22 = Permissions.USE_EXTERNAL_STICKERS;
  const str74 = str22.toString();
  intl22 = intl56.intl;
  obj[str74] = obj23;
  const obj24 = {
    title: intl23.string(intl56.t.Y78KGC),
    description: intl24.string(intl56.t.ryj6N5),
    flag: Permissions.MENTION_EVERYONE,
  };
  const str23 = Permissions.MENTION_EVERYONE;
  const str75 = str23.toString();
  intl23 = intl56.intl;
  intl24 = intl56.intl;
  obj[str75] = obj24;
  const obj25 = {
    title: intl25.string(intl56.t["6lU9xM"]),
    description: intl56.t["RXMG/+"],
    flag: Permissions.MANAGE_MESSAGES,
  };
  const str24 = Permissions.MANAGE_MESSAGES;
  const str76 = str24.toString();
  intl25 = intl56.intl;
  obj[str76] = obj25;
  const obj26 = {
    title: intl26.string(intl56.t.Y5BI39),
    description: intl56.t["LN/K3x"],
    flag: Permissions.PIN_MESSAGES,
  };
  const str25 = Permissions.PIN_MESSAGES;
  const str77 = str25.toString();
  intl26 = intl56.intl;
  obj[str77] = obj26;
  const obj27 = {
    title: intl27.string(intl56.t.kqcjeV),
    description: intl56.t.S2ZE5c,
    flag: Permissions.BYPASS_SLOWMODE,
  };
  const str26 = Permissions.BYPASS_SLOWMODE;
  const str78 = str26.toString();
  intl27 = intl56.intl;
  obj[str78] = obj27;
  const obj28 = {
    title: intl28.string(intl56.t.Aj9ruN),
    description: intl56.t.pfEgBm,
    flag: Permissions.MANAGE_OFFICIAL_MESSAGES,
  };
  const str27 = Permissions.MANAGE_OFFICIAL_MESSAGES;
  const str79 = str27.toString();
  intl28 = intl56.intl;
  obj[str79] = obj28;
  const obj29 = {
    title: intl29.string(intl56.t.l9ufaR),
    description: intl56.t.rmHPFR,
    flag: Permissions.READ_MESSAGE_HISTORY,
  };
  const str28 = Permissions.READ_MESSAGE_HISTORY;
  const str80 = str28.toString();
  intl29 = intl56.intl;
  obj[str80] = obj29;
  const obj30 = {
    title: intl30.string(intl56.t.mMbwh7),
    description: intl56.t.D6x8Nr,
    flag: Permissions.SEND_TTS_MESSAGES,
  };
  const str29 = Permissions.SEND_TTS_MESSAGES;
  const str81 = str29.toString();
  intl30 = intl56.intl;
  obj[str81] = obj30;
  const obj31 = {
    title: intl31.string(intl56.t.nkoPOt),
    description: intl56.t.pJrJ35,
    flag: Permissions.USE_APPLICATION_COMMANDS,
  };
  const str30 = Permissions.USE_APPLICATION_COMMANDS;
  const str82 = str30.toString();
  intl31 = intl56.intl;
  obj[str82] = obj31;
  const obj32 = {
    title: intl32.string(intl56.t.TtA5rK),
    description: intl56.t.mzLoDY,
    flag: Permissions.USE_EXTERNAL_APPS,
  };
  const str31 = Permissions.USE_EXTERNAL_APPS;
  const str83 = str31.toString();
  intl32 = intl56.intl;
  obj[str83] = obj32;
  const obj33 = {
    title: intl33.string(intl56.t.WlWSBT),
    description: intl56.t.pDuyi0,
    flag: Permissions.SEND_VOICE_MESSAGES,
  };
  const str32 = Permissions.SEND_VOICE_MESSAGES;
  const str84 = str32.toString();
  intl33 = intl56.intl;
  obj[str84] = obj33;
  const obj34 = {
    title: intl34.string(intl56.t.UMQ7Ww),
    description: intl56.t["Xl6W+F"],
    flag: Permissions.SEND_POLLS,
  };
  const str33 = Permissions.SEND_POLLS;
  const str85 = str33.toString();
  intl34 = intl56.intl;
  obj[str85] = obj34;
  const obj35 = { title: intl35.string(intl56.t.S0W8Z5), description: intl56.t["3GCm/f"], flag: Permissions.CONNECT };
  const str34 = Permissions.CONNECT;
  const str86 = str34.toString();
  intl35 = intl56.intl;
  obj[str86] = obj35;
  const obj36 = { title: intl36.string(intl56.t["8w1tIR"]), description: intl56.t.y4MncF, flag: Permissions.SPEAK };
  const str35 = Permissions.SPEAK;
  const str87 = str35.toString();
  intl36 = intl56.intl;
  obj[str87] = obj36;
  const obj37 = { title: intl37.string(intl56.t.FlNoSV), description: intl56.t["6Z0j9v"], flag: Permissions.STREAM };
  const str36 = Permissions.STREAM;
  const str88 = str36.toString();
  intl37 = intl56.intl;
  obj[str88] = obj37;
  const obj38 = {
    title: intl38.string(intl56.t.rLSGeh),
    description: intl56.t.BEqU5H,
    flag: Permissions.USE_EMBEDDED_ACTIVITIES,
  };
  const str37 = Permissions.USE_EMBEDDED_ACTIVITIES;
  const str89 = str37.toString();
  intl38 = intl56.intl;
  obj[str89] = obj38;
  const obj39 = { title: intl39.string(intl56.t.Bco7NG), description: prop, flag: Permissions.USE_SOUNDBOARD };
  const str38 = Permissions.USE_SOUNDBOARD;
  const str90 = str38.toString();
  intl39 = intl56.intl;
  prop = undefined;
  if (permissionOptions != null) {
    prop = permissionOptions.SOUNDBOARD_DESCRIPTION;
  }
  if (prop == null) {
    prop = intl56.t["+8p+fc"];
  }
  obj[str90] = obj39;
  const obj40 = {
    title: intl40.string(intl56.t.pwaVJ6),
    description: intl56.t.qDpPtX,
    flag: Permissions.USE_EXTERNAL_SOUNDS,
  };
  const str39 = Permissions.USE_EXTERNAL_SOUNDS;
  const str91 = str39.toString();
  intl40 = intl56.intl;
  obj[str91] = obj40;
  const obj41 = {
    title: intl41.string(intl56.t["08zAV7"]),
    description: intl56.t["7CHjmc"],
    flag: Permissions.USE_VAD,
  };
  const str40 = Permissions.USE_VAD;
  const str92 = str40.toString();
  intl41 = intl56.intl;
  obj[str92] = obj41;
  const obj42 = { title: intl42.string(intl56.t.BVK71i), description: prop1, flag: Permissions.PRIORITY_SPEAKER };
  const str41 = Permissions.PRIORITY_SPEAKER;
  const str93 = str41.toString();
  intl42 = intl56.intl;
  prop1 = undefined;
  if (permissionOptions != null) {
    prop1 = permissionOptions.PRIORITY_SPEAKER_DESCRIPTION;
  }
  if (prop1 == null) {
    prop1 = intl56.t.OJkrro;
  }
  obj[str93] = obj42;
  const obj43 = {
    title: intl43.string(intl56.t["8EI30/"]),
    description: intl56.t.PIhGA1,
    flag: Permissions.MUTE_MEMBERS,
  };
  const str42 = Permissions.MUTE_MEMBERS;
  const str94 = str42.toString();
  intl43 = intl56.intl;
  obj[str94] = obj43;
  const obj44 = {
    title: intl44.string(intl56.t["9L47Fr"]),
    description: intl56.t["FQr3+t"],
    flag: Permissions.DEAFEN_MEMBERS,
  };
  const str43 = Permissions.DEAFEN_MEMBERS;
  const str95 = str43.toString();
  intl44 = intl56.intl;
  obj[str95] = obj44;
  const obj45 = { title: intl45.string(intl56.t.YtjJPQ), description: intl56.t.SEe0Gp, flag: Permissions.MOVE_MEMBERS };
  const str44 = Permissions.MOVE_MEMBERS;
  const str96 = str44.toString();
  intl45 = intl56.intl;
  obj[str96] = obj45;
  const obj46 = {
    title: intl46.string(intl56.t["5kicT2"]),
    description: intl56.t["yNE+Q5"],
    flag: Permissions.REQUEST_TO_SPEAK,
    isExperimental: true,
  };
  const str45 = Permissions.REQUEST_TO_SPEAK;
  const str97 = str45.toString();
  intl46 = intl56.intl;
  obj[str97] = obj46;
  const obj47 = { title: intl47.string(intl56.t.PGvZqX), description: UJxMrK, flag: Permissions.ADMINISTRATOR };
  const str46 = Permissions.ADMINISTRATOR;
  const str98 = str46.toString();
  intl47 = intl56.intl;
  if (typeof intl56.t.UJxMrK === "string") {
    UJxMrK = intl56.t.UJxMrK;
  } else {
    const intl55 = intl56.intl;
    UJxMrK = intl55.format(intl56.t.UJxMrK, {});
  }
  obj[str98] = obj47;
  const obj48 = {
    title: intl48.string(intl56.t.HIgA5a),
    description: intl56.t["SL+qgG"],
    flag: Permissions.MANAGE_EVENTS,
  };
  const str47 = Permissions.MANAGE_EVENTS;
  const str99 = str47.toString();
  intl48 = intl56.intl;
  obj[str99] = obj48;
  const obj49 = {
    title: intl49.string(intl56.t.qyjZua),
    description: intl56.t.bQEFJZ,
    flag: Permissions.CREATE_EVENTS,
  };
  const str48 = Permissions.CREATE_EVENTS;
  const str100 = str48.toString();
  intl49 = intl56.intl;
  obj[str100] = obj49;
  const obj50 = {
    title: intl50.string(intl56.t.QKe7Q3),
    description: intl56.t.QAxIIt,
    flag: Permissions.MANAGE_THREADS,
  };
  const str49 = Permissions.MANAGE_THREADS;
  const str101 = str49.toString();
  intl50 = intl56.intl;
  obj[str101] = obj50;
  const obj51 = {
    title: intl51.string(intl56.t["25rKnX"]),
    description: intl56.t.ODCYj8,
    flag: Permissions.CREATE_PUBLIC_THREADS,
  };
  const str50 = Permissions.CREATE_PUBLIC_THREADS;
  const str102 = str50.toString();
  intl51 = intl56.intl;
  obj[str102] = obj51;
  const obj52 = {
    title: intl52.string(intl56.t.QwbTSa),
    description: intl56.t["G/cc3l"],
    flag: Permissions.CREATE_PRIVATE_THREADS,
  };
  const str51 = Permissions.CREATE_PRIVATE_THREADS;
  const str103 = str51.toString();
  intl52 = intl56.intl;
  obj[str103] = obj52;
  const obj53 = {
    title: intl53.string(intl56.t["5QlVGy"]),
    description: intl56.t.C2ZPE3,
    flag: Permissions.SEND_MESSAGES_IN_THREADS,
  };
  const str52 = Permissions.SEND_MESSAGES_IN_THREADS;
  const str104 = str52.toString();
  intl53 = intl56.intl;
  obj[str104] = obj53;
  const obj54 = {
    title: intl54.string(intl56.t.VBwkUf),
    description: enableHangoutWindow ? t3.CYcJ6H : t3.C6BzXx,
    flag: Permissions.SET_VOICE_CHANNEL_STATUS,
  };
  const str53 = Permissions.SET_VOICE_CHANNEL_STATUS;
  const str105 = str53.toString();
  intl54 = intl56.intl;
  enableHangoutWindow = permissionOptions.enableHangoutWindow;
  t3 = intl56.t;
  obj[str105] = obj54;
  return obj;
}
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/permissions/PermissionUtils.tsx");

export { getGuildPermissionSpec };
export const generateGuildPermissionSpec = function generateGuildPermissionSpec(
  showCreatorMonetizationAnalyticsPermission,
) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items6;
  let items7;
  let permissions;
  let permissions1;
  let permissions2;
  let permissions3;
  let permissions4;
  let permissions7;
  const f128083 = (isExperimental) => !isExperimental.isExperimental;
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
    items.push(Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS);
  }
  items.push(Permissions.MANAGE_WEBHOOKS);
  items.push(Permissions.MANAGE_GUILD);
  const obj = { title: intl.string(intl56.t["mYck+B"]), permissions: permissions.filter(f128083) };
  intl = intl56.intl;
  permissions = obj.permissions;
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
  const obj2 = { title: intl2.string(intl56.t.Ny49TN), permissions: permissions1.filter(f128083) };
  intl2 = intl56.intl;
  let closure_0 = tmp;
  permissions1 = obj2.permissions;
  items1[1] = obj2;
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
  const obj3 = { title: intl3.string(intl56.t.cKobO5), permissions: permissions2.filter(f128083) };
  intl3 = intl56.intl;
  permissions2 = obj3.permissions;
  items1[2] = obj3;
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
  const obj4 = { title: intl4.string(intl56.t["46Ra1b"]), permissions: permissions3.filter(f128083) };
  intl4 = intl56.intl;
  permissions3 = obj4.permissions;
  items1[3] = obj4;
  const items5 = [, ,];
  ({
    USE_APPLICATION_COMMANDS: arr11[0],
    USE_EMBEDDED_ACTIVITIES: arr11[1],
    USE_EXTERNAL_APPS: arr11[2],
  } = Permissions);
  const obj5 = { title: intl5.string(intl56.t["rrh/W6"]), permissions: permissions4.filter(f128083) };
  intl5 = intl56.intl;
  closure_0 = tmp;
  permissions4 = obj5.permissions;
  items1[4] = obj5;
  if (showCreatorMonetizationAnalyticsPermission.showStageChannelPermissions) {
    const obj6 = {
      title: intl6.string(intl56.t.yniauk),
      permissions: items6.map((item) => closure_0[item.toString(item)]),
    };
    const push = items1.push;
    intl6 = intl56.intl;
    items6 = [Permissions.REQUEST_TO_SPEAK];
    closure_0 = tmp;
    let flag = showCreatorMonetizationAnalyticsPermission.showExperimental;
    if (flag === undefined) {
      flag = false;
    }
    if (!flag) {
      const permissions5 = obj6.permissions;
      obj6.permissions = permissions5.filter(f128083);
    }
    push(obj6);
  }
  const obj7 = {
    title: intl7.string(intl56.t.b8lplT),
    permissions: items7.map((item) => closure_0[item.toString(item)]),
  };
  const push2 = items1.push;
  intl7 = intl56.intl;
  items7 = [,];
  ({ CREATE_EVENTS: arr15[0], MANAGE_EVENTS: arr15[1] } = Permissions);
  closure_0 = tmp;
  let flag2 = showCreatorMonetizationAnalyticsPermission.showExperimental;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (!flag2) {
    const permissions6 = obj7.permissions;
    obj7.permissions = permissions6.filter(f128083);
  }
  push2(obj7);
  const obj8 = { title: intl8.string(intl56.t["3uI5CX"]), permissions: permissions7.filter(f128083) };
  const push3 = items1.push;
  intl8 = intl56.intl;
  const items8 = [Permissions.ADMINISTRATOR];
  closure_0 = tmp;
  permissions7 = obj8.permissions;
  push3(obj8);
  return items1;
};
export const generateChannelGeneralSection = function generateChannelGeneralSection(arg0, intl3) {
  let items1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { showManageWebhooks: true };
  }
  let showManageWebhooks;
  const obj2 = { title: intl3, permissions: items1.map((item) => closure_0[item.toString(item)]) };
  if (obj != null) {
    showManageWebhooks = obj.showManageWebhooks;
  }
  const VIEW_CHANNEL = Permissions.VIEW_CHANNEL;
  if (showManageWebhooks) {
    const items = [VIEW_CHANNEL, , ,];
    ({ MANAGE_CHANNELS: arr2[1], MANAGE_ROLES: arr2[2], MANAGE_WEBHOOKS: arr2[3] } = Permissions);
    items1 = items;
  } else {
    items1 = [VIEW_CHANNEL, ,];
    ({ MANAGE_CHANNELS: arr[1], MANAGE_ROLES: arr[2] } = Permissions);
  }
  let closure_0 = arg0;
  return obj2;
};
export const generateChannelMembershipSection = function generateChannelMembershipSection(arg0, intl4) {
  let items;
  const obj = { title: intl4, permissions: items.map((item) => closure_0[item.toString(item)]) };
  items = [Permissions.CREATE_INSTANT_INVITE];
  let closure_0 = arg0;
  return obj;
};
export const generateChannelTextSection = function generateChannelTextSection(arg0, stringResult2, description) {
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
  const tmp = description.showPrivateThreads && description.showCreateThreads;
  if (!tmp) {
    found1 = found.filter((item) => item !== constants.CREATE_PRIVATE_THREADS);
  }
  let found2 = found1;
  if (!description.showCreateThreads) {
    found2 = found1.filter((item) => item !== constants.CREATE_PUBLIC_THREADS);
  }
  let closure_0 = arg0;
  const obj = {
    title: stringResult2,
    description: description.sectionDescription,
    permissions: found2.map((item) => closure_0[item.toString(item)]),
  };
  return obj;
};
export const generateChannelVoiceSection = function generateChannelVoiceSection(arg0, intl) {
  let items;
  const obj = { title: intl, permissions: items.map((item) => closure_0[item.toString(item)]) };
  items = [, , , , , , , , , ,];
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
  let closure_0 = arg0;
  return obj;
};
export const generateChannelVoiceChatSection = function generateChannelVoiceChatSection(
  arg0,
  stringResult1,
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
  let closure_0 = arg0;
  const obj = {
    title: stringResult1,
    description: description.sectionDescription,
    permissions: found.map((item) => closure_0[item.toString(item)]),
  };
  return obj;
};
export const generateChannelAppsSection = function generateChannelAppsSection(arg0, intl6) {
  let found;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { showActivities: true };
  }
  const items = [Permissions.USE_APPLICATION_COMMANDS, ,];
  let prop = null;
  const obj2 = { title: intl6, permissions: found.map((item) => closure_0[item.toString(item)]) };
  if (obj.showActivities) {
    prop = Permissions.USE_EMBEDDED_ACTIVITIES;
  }
  items[1] = prop;
  items[2] = Permissions.USE_EXTERNAL_APPS;
  found = items.filter(GlobalUtils.isNotNullish);
  let closure_0 = arg0;
  return obj2;
};
export const generateChannelStageVoiceSection = function generateChannelStageVoiceSection(
  arg0,
  intl10,
  isStageVideoEnabledResult,
) {
  let items1;
  const CONNECT = Permissions.CONNECT;
  const obj = { title: intl10, permissions: items1.map((item) => closure_0[item.toString(item)]) };
  const tmp2 = isStageVideoEnabledResult;
  if (tmp2) {
    const items = [CONNECT, , ,];
    ({ STREAM: arr2[1], MUTE_MEMBERS: arr2[2], MOVE_MEMBERS: arr2[3] } = Permissions);
    items1 = items;
  } else {
    items1 = [CONNECT, ,];
    ({ MUTE_MEMBERS: arr[1], MOVE_MEMBERS: arr[2] } = Permissions);
  }
  let closure_0 = arg0;
  return obj;
};
export const generateChannelStageSection = function generateChannelStageSection(arg0, intl11) {
  let items;
  const obj = { title: intl11, permissions: items.map((item) => closure_0[item.toString(item)]) };
  items = [,];
  ({ REQUEST_TO_SPEAK: arr[0], MENTION_EVERYONE: arr[1] } = Permissions);
  let closure_0 = arg0;
  return obj;
};
export const generateChannelEventsSection = function generateChannelEventsSection(arg0, intl12) {
  let items;
  const obj = { title: intl12, permissions: items.map((item) => closure_0[item.toString(item)]) };
  items = [,];
  ({ CREATE_EVENTS: arr[0], MANAGE_EVENTS: arr[1] } = Permissions);
  let closure_0 = arg0;
  return obj;
};
export const renderDescription = function renderDescription(str) {
  let tmp = str;
  if (null != str) {
    let trimmed;
    if (typeof str === "string") {
      trimmed = str.trim();
    } else {
      trimmed = str;
      if (typeof str === "function") {
        const intl = intl56.intl;
        trimmed = intl.format(str, {});
      }
    }
    tmp = trimmed;
  }
  return tmp;
};
