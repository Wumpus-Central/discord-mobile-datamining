import { Permissions } from "sum";

function getGuildPermissionSpec(permissionOptions) {
  let obj = {};
  const tmp = Permissions;
  let str = Permissions.VIEW_CHANNEL;
  obj = { title: null, description: null, flag: null };
  const tmp3 = require;
  str = str.toString();
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.uV83yi);
  obj[1] = require(1236) /* getSystemLocale */.t.ybTHLk;
  obj[2] = Permissions.VIEW_CHANNEL;
  obj[str] = obj;
  let str2 = Permissions.MANAGE_CHANNELS;
  obj = { title: null, description: null, flag: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["9qLtWs"]);
  obj[1] = require(1236) /* getSystemLocale */.t.qfJnug;
  obj[2] = Permissions.MANAGE_CHANNELS;
  obj[str2.toString()] = obj;
  let str3 = Permissions.MANAGE_ROLES;
  const obj1 = { title: null, description: null, flag: null };
  str2 = str3.toString();
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl3.string(require(1236) /* getSystemLocale */.t["C8d+oG"]);
  obj1[1] = require(1236) /* getSystemLocale */.t.buo9uw;
  obj1[2] = Permissions.MANAGE_ROLES;
  obj[str2] = obj1;
  let str4 = Permissions.MANAGE_GUILD_EXPRESSIONS;
  const obj2 = { title: null, description: null, flag: null };
  str3 = str4.toString();
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj2[0] = intl4.string(require(1236) /* getSystemLocale */.t.bbuXIn);
  obj2[1] = require(1236) /* getSystemLocale */.t["4vb3/6"];
  obj2[2] = Permissions.MANAGE_GUILD_EXPRESSIONS;
  obj[str3] = obj2;
  let str5 = Permissions.CREATE_GUILD_EXPRESSIONS;
  const obj3 = { title: null, description: null, flag: null };
  str4 = str5.toString();
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj3[0] = intl5.string(require(1236) /* getSystemLocale */.t.HarVuP);
  obj3[1] = require(1236) /* getSystemLocale */.t.gkdHvH;
  obj3[2] = Permissions.CREATE_GUILD_EXPRESSIONS;
  obj[str4] = obj3;
  let str6 = Permissions.VIEW_AUDIT_LOG;
  const obj4 = { title: null, description: null, flag: null };
  str5 = str6.toString();
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl6.string(require(1236) /* getSystemLocale */.t.fZgLpA);
  obj4[1] = require(1236) /* getSystemLocale */.t["0hx75i"];
  obj4[2] = Permissions.VIEW_AUDIT_LOG;
  obj[str5] = obj4;
  let str7 = Permissions.VIEW_GUILD_ANALYTICS;
  const obj5 = { title: null, description: null, flag: null };
  str6 = str7.toString();
  const intl7 = require(1236) /* getSystemLocale */.intl;
  obj5[0] = intl7.string(require(1236) /* getSystemLocale */.t["rQJBE/"]);
  obj5[1] = require(1236) /* getSystemLocale */.t.whVKhX;
  obj5[2] = Permissions.VIEW_GUILD_ANALYTICS;
  obj[str6] = obj5;
  let str8 = Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS;
  const obj6 = { title: null, description: null, flag: null };
  str7 = str8.toString();
  const intl8 = require(1236) /* getSystemLocale */.intl;
  obj6[0] = intl8.string(require(1236) /* getSystemLocale */.t["0lTLTv"]);
  obj6[1] = require(1236) /* getSystemLocale */.t.mut6NV;
  obj6[2] = Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS;
  obj[str7] = obj6;
  let str9 = Permissions.MANAGE_WEBHOOKS;
  const obj7 = { title: null, description: null, flag: null };
  str8 = str9.toString();
  const intl9 = require(1236) /* getSystemLocale */.intl;
  obj7[0] = intl9.string(require(1236) /* getSystemLocale */.t["/ADKmM"]);
  obj7[1] = require(1236) /* getSystemLocale */.t.LczYqC;
  obj7[2] = Permissions.MANAGE_WEBHOOKS;
  obj[str8] = obj7;
  let str10 = Permissions.MANAGE_GUILD;
  const obj8 = { title: null, description: null, flag: null };
  str9 = str10.toString();
  const intl10 = require(1236) /* getSystemLocale */.intl;
  obj8[0] = intl10.string(require(1236) /* getSystemLocale */.t.QZRcfO);
  obj8[1] = require(1236) /* getSystemLocale */.t["KoQe/G"];
  obj8[2] = Permissions.MANAGE_GUILD;
  obj[str9] = obj8;
  let str11 = Permissions.CREATE_INSTANT_INVITE;
  const obj9 = { title: null, description: null, flag: null };
  str10 = str11.toString();
  const intl11 = require(1236) /* getSystemLocale */.intl;
  obj9[0] = intl11.string(require(1236) /* getSystemLocale */.t.zJrgTG);
  obj9[1] = require(1236) /* getSystemLocale */.t.PCFOZa;
  obj9[2] = Permissions.CREATE_INSTANT_INVITE;
  obj[str10] = obj9;
  let str12 = Permissions.CHANGE_NICKNAME;
  const obj10 = { title: null, description: null, flag: null };
  str11 = str12.toString();
  const intl12 = require(1236) /* getSystemLocale */.intl;
  obj10[0] = intl12.string(require(1236) /* getSystemLocale */.t.dilOF6);
  obj10[1] = require(1236) /* getSystemLocale */.t["b8B++j"];
  obj10[2] = Permissions.CHANGE_NICKNAME;
  obj[str11] = obj10;
  let str13 = Permissions.MANAGE_NICKNAMES;
  const obj11 = { title: null, description: null, flag: null };
  str12 = str13.toString();
  const intl13 = require(1236) /* getSystemLocale */.intl;
  obj11[0] = intl13.string(require(1236) /* getSystemLocale */.t["t+Ct5x"]);
  obj11[1] = require(1236) /* getSystemLocale */.t.hTnlMb;
  obj11[2] = Permissions.MANAGE_NICKNAMES;
  obj[str12] = obj11;
  let str14 = Permissions.KICK_MEMBERS;
  str13 = str14.toString();
  const intl14 = require(1236) /* getSystemLocale */.intl;
  const string = intl14.string;
  const t = require(1236) /* getSystemLocale */.t;
  if (permissionOptions.showMembershipManualApprovalPermissions) {
    let stringResult = string(t["9TxXwb"]);
  } else {
    stringResult = string(t.pBNv6i);
  }
  const obj12 = { title: stringResult, description: null, flag: null };
  const t2 = tmp3(1236).t;
  obj12[1] = permissionOptions.showMembershipManualApprovalPermissions ? t2.hGBAnw : t2.rwdPaE;
  obj12[2] = tmp.KICK_MEMBERS;
  obj[str13] = obj12;
  let str15 = tmp.BAN_MEMBERS;
  const obj13 = { title: null, description: null, flag: null };
  str14 = str15.toString();
  const intl15 = tmp3(1236).intl;
  obj13[0] = intl15.string(tmp3(1236).t.oTBA7N);
  obj13[1] = tmp3(1236).t["OqNY0/"];
  obj13[2] = tmp.BAN_MEMBERS;
  obj[str14] = obj13;
  let str16 = tmp.MODERATE_MEMBERS;
  const obj14 = { title: null, description: null, flag: null };
  str15 = str16.toString();
  const intl16 = tmp3(1236).intl;
  obj14[0] = intl16.string(tmp3(1236).t["+RL6pz"]);
  obj14[1] = tmp3(1236).t.T6bZsX;
  obj14[2] = tmp.MODERATE_MEMBERS;
  obj[str15] = obj14;
  let str17 = tmp.SEND_MESSAGES;
  const obj15 = { title: null, description: null, flag: null };
  str16 = str17.toString();
  const intl17 = tmp3(1236).intl;
  obj15[0] = intl17.string(tmp3(1236).t.S1VOwd);
  obj15[1] = tmp3(1236).t.prvWKm;
  obj15[2] = tmp.SEND_MESSAGES;
  obj[str16] = obj15;
  let str18 = tmp.EMBED_LINKS;
  const obj16 = { title: null, description: null, flag: null };
  str17 = str18.toString();
  const intl18 = tmp3(1236).intl;
  obj16[0] = intl18.string(tmp3(1236).t["969dEL"]);
  obj16[1] = tmp3(1236).t.ChoIiy;
  obj16[2] = tmp.EMBED_LINKS;
  obj[str17] = obj16;
  let str19 = tmp.ATTACH_FILES;
  const obj17 = { title: null, description: null, flag: null };
  str18 = str19.toString();
  const intl19 = tmp3(1236).intl;
  obj17[0] = intl19.string(tmp3(1236).t["3AS4UM"]);
  obj17[1] = tmp3(1236).t["/87mYH"];
  obj17[2] = tmp.ATTACH_FILES;
  obj[str18] = obj17;
  let str20 = tmp.ADD_REACTIONS;
  const obj18 = { title: null, description: null, flag: null };
  str19 = str20.toString();
  const intl20 = tmp3(1236).intl;
  obj18[0] = intl20.string(tmp3(1236).t.yEoJAr);
  obj18[1] = tmp3(1236).t.FEYwX7;
  obj18[2] = tmp.ADD_REACTIONS;
  obj[str19] = obj18;
  let str21 = tmp.USE_EXTERNAL_EMOJIS;
  const obj19 = { title: null, description: null, flag: null };
  str20 = str21.toString();
  const intl21 = tmp3(1236).intl;
  obj19[0] = intl21.string(tmp3(1236).t["+bxf3H"]);
  obj19[1] = tmp3(1236).t.POeVIu;
  obj19[2] = tmp.USE_EXTERNAL_EMOJIS;
  obj[str20] = obj19;
  let str22 = tmp.USE_EXTERNAL_STICKERS;
  const obj20 = { title: null, description: null, flag: null };
  str21 = str22.toString();
  const intl22 = tmp3(1236).intl;
  obj20[0] = intl22.string(tmp3(1236).t.ERNhYf);
  obj20[1] = tmp3(1236).t.AdXVhI;
  obj20[2] = tmp.USE_EXTERNAL_STICKERS;
  obj[str21] = obj20;
  let str23 = tmp.MENTION_EVERYONE;
  const obj21 = { title: null, description: null, flag: null };
  str22 = str23.toString();
  const intl23 = tmp3(1236).intl;
  obj21[0] = intl23.string(tmp3(1236).t.Y78KGC);
  const intl24 = tmp3(1236).intl;
  obj21[1] = intl24.string(tmp3(1236).t.ryj6N5);
  obj21[2] = tmp.MENTION_EVERYONE;
  obj[str22] = obj21;
  let str24 = tmp.MANAGE_MESSAGES;
  const obj22 = { title: null, description: null, flag: null };
  str23 = str24.toString();
  const intl25 = tmp3(1236).intl;
  obj22[0] = intl25.string(tmp3(1236).t["6lU9xM"]);
  obj22[1] = tmp3(1236).t["RXMG/+"];
  obj22[2] = tmp.MANAGE_MESSAGES;
  obj[str23] = obj22;
  let str25 = tmp.PIN_MESSAGES;
  const obj23 = { title: null, description: null, flag: null };
  str24 = str25.toString();
  const intl26 = tmp3(1236).intl;
  obj23[0] = intl26.string(tmp3(1236).t.Y5BI39);
  obj23[1] = tmp3(1236).t["LN/K3x"];
  obj23[2] = tmp.PIN_MESSAGES;
  obj[str24] = obj23;
  let str26 = tmp.BYPASS_SLOWMODE;
  const obj24 = { title: null, description: null, flag: null };
  str25 = str26.toString();
  const intl27 = tmp3(1236).intl;
  obj24[0] = intl27.string(tmp3(1236).t.kqcjeV);
  obj24[1] = tmp3(1236).t.S2ZE5c;
  obj24[2] = tmp.BYPASS_SLOWMODE;
  obj[str25] = obj24;
  let str27 = tmp.MANAGE_OFFICIAL_MESSAGES;
  const obj25 = { title: null, description: null, flag: null };
  str26 = str27.toString();
  const intl28 = tmp3(1236).intl;
  obj25[0] = intl28.string(tmp3(1236).t.Aj9ruN);
  obj25[1] = tmp3(1236).t.pfEgBm;
  obj25[2] = tmp.MANAGE_OFFICIAL_MESSAGES;
  obj[str26] = obj25;
  let str28 = tmp.READ_MESSAGE_HISTORY;
  const obj26 = { title: null, description: null, flag: null };
  str27 = str28.toString();
  const intl29 = tmp3(1236).intl;
  obj26[0] = intl29.string(tmp3(1236).t.l9ufaR);
  obj26[1] = tmp3(1236).t.rmHPFR;
  obj26[2] = tmp.READ_MESSAGE_HISTORY;
  obj[str27] = obj26;
  let str29 = tmp.SEND_TTS_MESSAGES;
  const obj27 = { title: null, description: null, flag: null };
  str28 = str29.toString();
  const intl30 = tmp3(1236).intl;
  obj27[0] = intl30.string(tmp3(1236).t.mMbwh7);
  obj27[1] = tmp3(1236).t.D6x8Nr;
  obj27[2] = tmp.SEND_TTS_MESSAGES;
  obj[str28] = obj27;
  let str30 = tmp.USE_APPLICATION_COMMANDS;
  const obj28 = { title: null, description: null, flag: null };
  str29 = str30.toString();
  const intl31 = tmp3(1236).intl;
  obj28[0] = intl31.string(tmp3(1236).t.nkoPOt);
  obj28[1] = tmp3(1236).t.pJrJ35;
  obj28[2] = tmp.USE_APPLICATION_COMMANDS;
  obj[str29] = obj28;
  let str31 = tmp.USE_EXTERNAL_APPS;
  const obj29 = { title: null, description: null, flag: null };
  str30 = str31.toString();
  const intl32 = tmp3(1236).intl;
  obj29[0] = intl32.string(tmp3(1236).t.TtA5rK);
  obj29[1] = tmp3(1236).t.mzLoDY;
  obj29[2] = tmp.USE_EXTERNAL_APPS;
  obj[str30] = obj29;
  let str32 = tmp.SEND_VOICE_MESSAGES;
  const obj30 = { title: null, description: null, flag: null };
  str31 = str32.toString();
  const intl33 = tmp3(1236).intl;
  obj30[0] = intl33.string(tmp3(1236).t.WlWSBT);
  obj30[1] = tmp3(1236).t.pDuyi0;
  obj30[2] = tmp.SEND_VOICE_MESSAGES;
  obj[str31] = obj30;
  let str33 = tmp.SEND_POLLS;
  const obj31 = { title: null, description: null, flag: null };
  str32 = str33.toString();
  const intl34 = tmp3(1236).intl;
  obj31[0] = intl34.string(tmp3(1236).t.UMQ7Ww);
  obj31[1] = tmp3(1236).t["Xl6W+F"];
  obj31[2] = tmp.SEND_POLLS;
  obj[str32] = obj31;
  let str34 = tmp.CONNECT;
  const obj32 = { title: null, description: null, flag: null };
  str33 = str34.toString();
  const intl35 = tmp3(1236).intl;
  obj32[0] = intl35.string(tmp3(1236).t.S0W8Z5);
  obj32[1] = tmp3(1236).t["3GCm/f"];
  obj32[2] = tmp.CONNECT;
  obj[str33] = obj32;
  let str35 = tmp.SPEAK;
  const obj33 = { title: null, description: null, flag: null };
  str34 = str35.toString();
  const intl36 = tmp3(1236).intl;
  obj33[0] = intl36.string(tmp3(1236).t["8w1tIR"]);
  obj33[1] = tmp3(1236).t.y4MncF;
  obj33[2] = tmp.SPEAK;
  obj[str34] = obj33;
  let str36 = tmp.STREAM;
  const obj34 = { title: null, description: null, flag: null };
  str35 = str36.toString();
  const intl37 = tmp3(1236).intl;
  obj34[0] = intl37.string(tmp3(1236).t.FlNoSV);
  obj34[1] = tmp3(1236).t["6Z0j9v"];
  obj34[2] = tmp.STREAM;
  obj[str35] = obj34;
  let str37 = tmp.USE_EMBEDDED_ACTIVITIES;
  const obj35 = { title: null, description: null, flag: null };
  str36 = str37.toString();
  const intl38 = tmp3(1236).intl;
  obj35[0] = intl38.string(tmp3(1236).t.rLSGeh);
  obj35[1] = tmp3(1236).t.BEqU5H;
  obj35[2] = tmp.USE_EMBEDDED_ACTIVITIES;
  obj[str36] = obj35;
  let str38 = tmp.USE_SOUNDBOARD;
  const obj36 = { title: null, description: null, flag: null };
  str37 = str38.toString();
  const intl39 = tmp3(1236).intl;
  obj36[0] = intl39.string(tmp3(1236).t.Bco7NG);
  let prop;
  if (permissionOptions != null) {
    prop = permissionOptions.SOUNDBOARD_DESCRIPTION;
  }
  if (prop == null) {
    prop = tmp3(1236).t["+8p+fc"];
  }
  obj36[1] = prop;
  obj36[2] = tmp.USE_SOUNDBOARD;
  obj[str37] = obj36;
  let str39 = tmp.USE_EXTERNAL_SOUNDS;
  const obj37 = { title: null, description: null, flag: null };
  str38 = str39.toString();
  const intl40 = tmp3(1236).intl;
  obj37[0] = intl40.string(tmp3(1236).t.pwaVJ6);
  obj37[1] = tmp3(1236).t.qDpPtX;
  obj37[2] = tmp.USE_EXTERNAL_SOUNDS;
  obj[str38] = obj37;
  let str40 = tmp.USE_VAD;
  const obj38 = { title: null, description: null, flag: null };
  str39 = str40.toString();
  const intl41 = tmp3(1236).intl;
  obj38[0] = intl41.string(tmp3(1236).t["08zAV7"]);
  obj38[1] = tmp3(1236).t["7CHjmc"];
  obj38[2] = tmp.USE_VAD;
  obj[str39] = obj38;
  let str41 = tmp.PRIORITY_SPEAKER;
  const obj39 = { title: null, description: null, flag: null };
  str40 = str41.toString();
  const intl42 = tmp3(1236).intl;
  obj39[0] = intl42.string(tmp3(1236).t.BVK71i);
  let prop1;
  if (permissionOptions != null) {
    prop1 = permissionOptions.PRIORITY_SPEAKER_DESCRIPTION;
  }
  if (prop1 == null) {
    prop1 = tmp3(1236).t.OJkrro;
  }
  obj39[1] = prop1;
  obj39[2] = tmp.PRIORITY_SPEAKER;
  obj[str40] = obj39;
  let str42 = tmp.MUTE_MEMBERS;
  const obj40 = { title: null, description: null, flag: null };
  str41 = str42.toString();
  const intl43 = tmp3(1236).intl;
  obj40[0] = intl43.string(tmp3(1236).t["8EI30/"]);
  obj40[1] = tmp3(1236).t.PIhGA1;
  obj40[2] = tmp.MUTE_MEMBERS;
  obj[str41] = obj40;
  let str43 = tmp.DEAFEN_MEMBERS;
  const obj41 = { title: null, description: null, flag: null };
  str42 = str43.toString();
  const intl44 = tmp3(1236).intl;
  obj41[0] = intl44.string(tmp3(1236).t["9L47Fr"]);
  obj41[1] = tmp3(1236).t["FQr3+t"];
  obj41[2] = tmp.DEAFEN_MEMBERS;
  obj[str42] = obj41;
  let str44 = tmp.MOVE_MEMBERS;
  const obj42 = { title: null, description: null, flag: null };
  str43 = str44.toString();
  const intl45 = tmp3(1236).intl;
  obj42[0] = intl45.string(tmp3(1236).t.YtjJPQ);
  obj42[1] = tmp3(1236).t.SEe0Gp;
  obj42[2] = tmp.MOVE_MEMBERS;
  obj[str43] = obj42;
  let str45 = tmp.REQUEST_TO_SPEAK;
  const obj43 = { title: null, description: null, flag: null, isExperimental: true };
  str44 = str45.toString();
  const intl46 = tmp3(1236).intl;
  obj43[0] = intl46.string(tmp3(1236).t["5kicT2"]);
  obj43[1] = tmp3(1236).t["yNE+Q5"];
  obj43[2] = tmp.REQUEST_TO_SPEAK;
  obj[str44] = obj43;
  let str46 = tmp.ADMINISTRATOR;
  const obj44 = { title: null, description: null, flag: null };
  str45 = str46.toString();
  const intl47 = tmp3(1236).intl;
  obj44[0] = intl47.string(tmp3(1236).t.PGvZqX);
  if (typeof tmp3(1236).t.UJxMrK === "y") {
    let UJxMrK = tmp3(1236).t.UJxMrK;
  } else {
    const intl55 = tmp3(1236).intl;
    UJxMrK = intl55.format(tmp3(1236).t.UJxMrK, {});
  }
  obj44[1] = UJxMrK;
  obj44[2] = tmp.ADMINISTRATOR;
  obj[str45] = obj44;
  let str47 = tmp.MANAGE_EVENTS;
  const obj45 = { title: null, description: null, flag: null };
  str46 = str47.toString();
  const intl48 = tmp3(1236).intl;
  obj45[0] = intl48.string(tmp3(1236).t.HIgA5a);
  obj45[1] = tmp3(1236).t["SL+qgG"];
  obj45[2] = tmp.MANAGE_EVENTS;
  obj[str46] = obj45;
  let str48 = tmp.CREATE_EVENTS;
  const obj46 = { title: null, description: null, flag: null };
  str47 = str48.toString();
  const intl49 = tmp3(1236).intl;
  obj46[0] = intl49.string(tmp3(1236).t.qyjZua);
  obj46[1] = tmp3(1236).t.bQEFJZ;
  obj46[2] = tmp.CREATE_EVENTS;
  obj[str47] = obj46;
  let str49 = tmp.MANAGE_THREADS;
  const obj47 = { title: null, description: null, flag: null };
  str48 = str49.toString();
  const intl50 = tmp3(1236).intl;
  obj47[0] = intl50.string(tmp3(1236).t.QKe7Q3);
  obj47[1] = tmp3(1236).t.QAxIIt;
  obj47[2] = tmp.MANAGE_THREADS;
  obj[str48] = obj47;
  let str50 = tmp.CREATE_PUBLIC_THREADS;
  const obj48 = { title: null, description: null, flag: null };
  str49 = str50.toString();
  const intl51 = tmp3(1236).intl;
  obj48[0] = intl51.string(tmp3(1236).t["25rKnX"]);
  obj48[1] = tmp3(1236).t.ODCYj8;
  obj48[2] = tmp.CREATE_PUBLIC_THREADS;
  obj[str49] = obj48;
  let str51 = tmp.CREATE_PRIVATE_THREADS;
  const obj49 = { title: null, description: null, flag: null };
  str50 = str51.toString();
  const intl52 = tmp3(1236).intl;
  obj49[0] = intl52.string(tmp3(1236).t.QwbTSa);
  obj49[1] = tmp3(1236).t["G/cc3l"];
  obj49[2] = tmp.CREATE_PRIVATE_THREADS;
  obj[str50] = obj49;
  let str52 = tmp.SEND_MESSAGES_IN_THREADS;
  const obj50 = { title: null, description: null, flag: null };
  str51 = str52.toString();
  const intl53 = tmp3(1236).intl;
  obj50[0] = intl53.string(tmp3(1236).t["5QlVGy"]);
  obj50[1] = tmp3(1236).t.C2ZPE3;
  obj50[2] = tmp.SEND_MESSAGES_IN_THREADS;
  obj[str51] = obj50;
  const obj51 = { title: null, description: null, flag: null };
  str52 = tmp.SET_VOICE_CHANNEL_STATUS.toString();
  const intl54 = tmp3(1236).intl;
  obj51[0] = intl54.string(tmp3(1236).t.VBwkUf);
  const t3 = tmp3(1236).t;
  obj51[1] = permissionOptions.enableHangoutWindow ? t3.CYcJ6H : t3.C6BzXx;
  obj51[2] = tmp.SET_VOICE_CHANNEL_STATUS;
  obj[str52] = obj51;
  return obj;
}
const result = require("isDiscordFrontendDevelopment").fileFinishedImporting("modules/permissions/PermissionUtils.tsx");

export { getGuildPermissionSpec };
export const generateGuildPermissionSpec = function generateGuildPermissionSpec(showCreatorMonetizationAnalyticsPermission) {
  const tmp = getGuildPermissionSpec(showCreatorMonetizationAnalyticsPermission);
  const items = [, , , , , , ];
  ({ VIEW_CHANNEL: arr[0], MANAGE_CHANNELS: arr[1], MANAGE_ROLES: arr[2], CREATE_GUILD_EXPRESSIONS: arr[3], MANAGE_GUILD_EXPRESSIONS: arr[4], VIEW_AUDIT_LOG: arr[5], VIEW_GUILD_ANALYTICS: arr[6] } = Permissions);
  if (showCreatorMonetizationAnalyticsPermission.showCreatorMonetizationAnalyticsPermission) {
    let arr = items.push(tmp2.VIEW_CREATOR_MONETIZATION_ANALYTICS);
  }
  arr = items.push(tmp2.MANAGE_WEBHOOKS);
  items.push(Permissions.MANAGE_GUILD);
  let obj = { title: null, permissions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["mYck+B"]);
  require = tmp;
  obj[1] = items.map((arg0) => table[arg0.toString(arg0)]);
  const permissions = obj.permissions;
  obj.permissions = permissions.filter((isExperimental) => !isExperimental.isExperimental);
  const items1 = [obj, , , , ];
  const items2 = [, , , , , ];
  ({ CREATE_INSTANT_INVITE: arr4[0], CHANGE_NICKNAME: arr4[1], MANAGE_NICKNAMES: arr4[2], KICK_MEMBERS: arr4[3], BAN_MEMBERS: arr4[4], MODERATE_MEMBERS: arr4[5] } = Permissions);
  obj = { title: null, permissions: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.Ny49TN);
  require = tmp;
  obj[1] = items2.map((arg0) => table[arg0.toString(arg0)]);
  const permissions1 = obj.permissions;
  obj.permissions = permissions1.filter((isExperimental) => !isExperimental.isExperimental);
  items1[1] = obj;
  const items3 = [, , , , , , , , , , , , , , , , , , , ];
  ({ SEND_MESSAGES: arr6[0], SEND_MESSAGES_IN_THREADS: arr6[1], CREATE_PUBLIC_THREADS: arr6[2], CREATE_PRIVATE_THREADS: arr6[3], EMBED_LINKS: arr6[4], ATTACH_FILES: arr6[5], ADD_REACTIONS: arr6[6], USE_EXTERNAL_EMOJIS: arr6[7], USE_EXTERNAL_STICKERS: arr6[8], USE_EXTERNAL_SOUNDS: arr6[9], MENTION_EVERYONE: arr6[10], MANAGE_MESSAGES: arr6[11], PIN_MESSAGES: arr6[12], MANAGE_OFFICIAL_MESSAGES: arr6[13], BYPASS_SLOWMODE: arr6[14], MANAGE_THREADS: arr6[15], READ_MESSAGE_HISTORY: arr6[16], SEND_TTS_MESSAGES: arr6[17], SEND_VOICE_MESSAGES: arr6[18], SEND_POLLS: arr6[19] } = Permissions);
  let found = items3;
  if (!showCreatorMonetizationAnalyticsPermission.inSoundmojiExperiment) {
    found = items3.filter((arg0) => arg0 !== constants.USE_EXTERNAL_SOUNDS);
  }
  obj = { title: null, permissions: null };
  const intl3 = tmp6(1236).intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.cKobO5);
  require = tmp;
  obj[1] = found.map((arg0) => table[arg0.toString(arg0)]);
  const permissions2 = obj.permissions;
  obj.permissions = permissions2.filter((isExperimental) => !isExperimental.isExperimental);
  items1[2] = obj;
  const items4 = [, , , , , , , , , , ];
  ({ CONNECT: arr9[0], SPEAK: arr9[1], STREAM: arr9[2], USE_SOUNDBOARD: arr9[3], USE_EXTERNAL_SOUNDS: arr9[4], USE_VAD: arr9[5], PRIORITY_SPEAKER: arr9[6], MUTE_MEMBERS: arr9[7], DEAFEN_MEMBERS: arr9[8], MOVE_MEMBERS: arr9[9], SET_VOICE_CHANNEL_STATUS: arr9[10] } = Permissions);
  const obj1 = { title: null, permissions: null };
  const intl4 = tmp6(1236).intl;
  obj1[0] = intl4.string(require(1236) /* getSystemLocale */.t["46Ra1b"]);
  require = tmp;
  obj1[1] = items4.map((arg0) => table[arg0.toString(arg0)]);
  const permissions3 = obj1.permissions;
  obj1.permissions = permissions3.filter((isExperimental) => !isExperimental.isExperimental);
  items1[3] = obj1;
  const items5 = [, , ];
  ({ USE_APPLICATION_COMMANDS: arr11[0], USE_EMBEDDED_ACTIVITIES: arr11[1], USE_EXTERNAL_APPS: arr11[2] } = Permissions);
  const obj2 = { title: null, permissions: null };
  const intl5 = tmp6(1236).intl;
  obj2[0] = intl5.string(require(1236) /* getSystemLocale */.t["rrh/W6"]);
  require = tmp;
  obj2[1] = items5.map((arg0) => table[arg0.toString(arg0)]);
  const permissions4 = obj2.permissions;
  obj2.permissions = permissions4.filter((isExperimental) => !isExperimental.isExperimental);
  items1[4] = obj2;
  if (showCreatorMonetizationAnalyticsPermission.showStageChannelPermissions) {
    const obj3 = { title: null, permissions: null };
    const intl6 = tmp6(1236).intl;
    obj3[0] = intl6.string(tmp6(1236).t.yniauk);
    const items6 = [tmp2.REQUEST_TO_SPEAK];
    require = tmp;
    obj3[1] = items6.map((arg0) => table[arg0.toString(arg0)]);
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
  const intl7 = tmp6(1236).intl;
  obj4[0] = intl7.string(require(1236) /* getSystemLocale */.t.b8lplT);
  const items7 = [, ];
  ({ CREATE_EVENTS: arr15[0], MANAGE_EVENTS: arr15[1] } = Permissions);
  require = tmp;
  obj4[1] = items7.map((arg0) => table[arg0.toString(arg0)]);
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
  const intl8 = tmp6(1236).intl;
  obj5[0] = intl8.string(require(1236) /* getSystemLocale */.t["3uI5CX"]);
  const items8 = [Permissions.ADMINISTRATOR];
  require = tmp;
  obj5[1] = items8.map((arg0) => table[arg0.toString(arg0)]);
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
    const items = [VIEW_CHANNEL, , , ];
    ({ MANAGE_CHANNELS: arr2[1], MANAGE_ROLES: arr2[2], MANAGE_WEBHOOKS: arr2[3] } = tmp2);
    let items1 = items;
  } else {
    items1 = [VIEW_CHANNEL, , ];
    ({ MANAGE_CHANNELS: arr[1], MANAGE_ROLES: arr[2] } = tmp2);
  }
  let closure_0 = arg0;
  obj[1] = items1.map((arg0) => table[arg0.toString(arg0)]);
  return obj;
};
export const generateChannelMembershipSection = function generateChannelMembershipSection(arg0, intl17) {
  const items = [Permissions.CREATE_INSTANT_INVITE];
  let closure_0 = arg0;
  return { title: intl17, permissions: items.map((arg0) => table[arg0.toString(arg0)]) };
};
export const generateChannelTextSection = function generateChannelTextSection(arg0, intl25, description) {
  const items = [, , , , , , , , , , , , , , , , , , , ];
  ({ SEND_MESSAGES: arr[0], SEND_MESSAGES_IN_THREADS: arr[1], CREATE_PUBLIC_THREADS: arr[2], CREATE_PRIVATE_THREADS: arr[3], EMBED_LINKS: arr[4], ATTACH_FILES: arr[5], ADD_REACTIONS: arr[6], USE_EXTERNAL_EMOJIS: arr[7], USE_EXTERNAL_STICKERS: arr[8], USE_EXTERNAL_SOUNDS: arr[9], MENTION_EVERYONE: arr[10], MANAGE_MESSAGES: arr[11], PIN_MESSAGES: arr[12], MANAGE_OFFICIAL_MESSAGES: arr[13], BYPASS_SLOWMODE: arr[14], MANAGE_THREADS: arr[15], READ_MESSAGE_HISTORY: arr[16], SEND_TTS_MESSAGES: arr[17], SEND_VOICE_MESSAGES: arr[18], SEND_POLLS: arr[19] } = Permissions);
  let found = items;
  if (!description.inSoundmojiExperiment) {
    found = items.filter((arg0) => arg0 !== constants.USE_EXTERNAL_SOUNDS);
  }
  let found1 = found;
  if (!tmp) {
    found1 = found.filter((arg0) => arg0 !== constants.CREATE_PRIVATE_THREADS);
  }
  let found2 = found1;
  if (!description.showCreateThreads) {
    found2 = found1.filter((arg0) => arg0 !== constants.CREATE_PUBLIC_THREADS);
  }
  let closure_0 = arg0;
  return { title: intl25, description: description.sectionDescription, permissions: found2.map((arg0) => table[arg0.toString(arg0)]) };
};
export const generateChannelVoiceSection = function generateChannelVoiceSection(arg0, intl) {
  const items = [, , , , , , , , , , ];
  ({ CONNECT: arr[0], SPEAK: arr[1], STREAM: arr[2], USE_SOUNDBOARD: arr[3], USE_EXTERNAL_SOUNDS: arr[4], USE_VAD: arr[5], PRIORITY_SPEAKER: arr[6], MUTE_MEMBERS: arr[7], DEAFEN_MEMBERS: arr[8], MOVE_MEMBERS: arr[9], SET_VOICE_CHANNEL_STATUS: arr[10] } = Permissions);
  let closure_0 = arg0;
  return { title: intl, permissions: items.map((arg0) => table[arg0.toString(arg0)]) };
};
export const generateChannelVoiceChatSection = function generateChannelVoiceChatSection(arg0, stringResult, description) {
  const items = [, , , , , , , , , , , , , ];
  ({ SEND_MESSAGES: arr[0], EMBED_LINKS: arr[1], ATTACH_FILES: arr[2], ADD_REACTIONS: arr[3], USE_EXTERNAL_EMOJIS: arr[4], USE_EXTERNAL_STICKERS: arr[5], USE_EXTERNAL_SOUNDS: arr[6], MENTION_EVERYONE: arr[7], MANAGE_MESSAGES: arr[8], BYPASS_SLOWMODE: arr[9], READ_MESSAGE_HISTORY: arr[10], SEND_TTS_MESSAGES: arr[11], SEND_VOICE_MESSAGES: arr[12], SEND_POLLS: arr[13] } = Permissions);
  let found = items;
  if (!description.inSoundmojiExperiment) {
    found = items.filter((arg0) => arg0 !== constants.USE_EXTERNAL_SOUNDS);
  }
  let closure_0 = arg0;
  return { title: stringResult, description: description.sectionDescription, permissions: found.map((arg0) => table[arg0.toString(arg0)]) };
};
export const generateChannelAppsSection = function generateChannelAppsSection(arg0, intl15, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { showActivities: true };
  }
  obj = { title: intl15, permissions: null };
  const items = [Permissions.USE_APPLICATION_COMMANDS, , ];
  let prop = null;
  if (obj.showActivities) {
    prop = tmp.USE_EMBEDDED_ACTIVITIES;
  }
  items[1] = prop;
  items[2] = Permissions.USE_EXTERNAL_APPS;
  const found = items.filter(_require(1351).isNotNullish);
  _require = arg0;
  obj[1] = found.map((arg0) => table[arg0.toString(arg0)]);
  return obj;
};
export const generateChannelStageVoiceSection = function generateChannelStageVoiceSection(arg0, intl10, isStageVideoEnabledResult) {
  const obj = { title: intl10, permissions: null };
  const CONNECT = Permissions.CONNECT;
  if (isStageVideoEnabledResult) {
    const items = [CONNECT, , , ];
    ({ STREAM: arr2[1], MUTE_MEMBERS: arr2[2], MOVE_MEMBERS: arr2[3] } = tmp);
    let items1 = items;
  } else {
    items1 = [CONNECT, , ];
    ({ MUTE_MEMBERS: arr[1], MOVE_MEMBERS: arr[2] } = tmp);
  }
  let closure_0 = arg0;
  obj[1] = items1.map((arg0) => table[arg0.toString(arg0)]);
  return obj;
};
export const generateChannelStageSection = function generateChannelStageSection(arg0, intl11) {
  const items = [, ];
  ({ REQUEST_TO_SPEAK: arr[0], MENTION_EVERYONE: arr[1] } = Permissions);
  let closure_0 = arg0;
  return { title: intl11, permissions: items.map((arg0) => table[arg0.toString(arg0)]) };
};
export const generateChannelEventsSection = function generateChannelEventsSection(arg0, intl12) {
  const items = [, ];
  ({ CREATE_EVENTS: arr[0], MANAGE_EVENTS: arr[1] } = Permissions);
  let closure_0 = arg0;
  return { title: intl12, permissions: items.map((arg0) => table[arg0.toString(arg0)]) };
};
export const renderDescription = function renderDescription(str) {
  if (null == str) {
    return str;
  } else if (typeof str === "y") {
    let trimmed = str.trim();
  } else {
    trimmed = str;
    if (typeof str !== "disabledUntil") {
      const intl = require(1236) /* getSystemLocale */.intl;
      trimmed = intl.format(str, {});
    }
  }
};