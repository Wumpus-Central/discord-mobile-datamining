// === Module 8672: RowType ===

// Module 8672 (RowType)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1995 */;
import getSystemLocaleDefault from "getSystemLocale" /* 8673 */;
import getSystemLocaleDefault2 from "getSystemLocale" /* 8674 */;
import ME from "ME" /* 676 */;

({ ChannelTypes: c3, ChannelTypesSets: c4, HelpdeskArticles: c5, Permissions: closure_6 } = ME);
const result = set.fileFinishedImporting("modules/channel_permissions/ChannelPermissionsConstants.tsx");

export const RowType = { EMPTY_STATE: 0, [0]: "EMPTY_STATE", ADMINISTRATOR: 1, [1]: "ADMINISTRATOR", ROLE: 2, [2]: "ROLE", OWNER: 3, [3]: "OWNER", MEMBER: 4, [4]: "MEMBER", USER: 5, [5]: "USER", GUILD: 6, [6]: "GUILD" };
export const AudienceSelectorSections = { ROLES: 0, [0]: "ROLES", MEMBERS: 1, [1]: "MEMBERS", USERS: 2, [2]: "USERS", GUILDS: 3, [3]: "GUILDS" };
export const MEMBER_REQUEST_COUNT = 20;
export const ADVANCED_MODE_ON_KEY = "channelPermissionSettingsAdvancedModeOn";
export const TrackExposureLocations = { SETTINGS_PAGE: "settings-page", MEMBERS_LIST: "members-list", EMPTY_STATE: "empty-state", CREATE_CHANNEL: "create-channel" };
export const SettingMode = { BASIC: "basic", ADVANCED: "advanced" };
export const getChannelPermissionSpecMap = function getChannelPermissionSpecMap(type, arg1, createPostsDisabled) {
  type = type.type;
  const tmp = constants4;
  let str = constants4.VIEW_CHANNEL;
  const tmp3 = constants;
  str = str.toString();
  if (type === constants.GUILD_CATEGORY) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t.uV83yi);
    let tmp8 = require;
    let tmp10 = require;
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["W/A4Qp"]);
    tmp8 = require;
    tmp10 = require;
  }
  let obj = { title: stringResult, description: null, flag: null };
  const GUILD_CATEGORY = tmp3.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY === type) {
      let M2iEy3 = tmp8(1236).t["o/vBzj"];
    } else {
      if (tmp3.GUILD_VOICE !== type) {
        if (tmp3.GUILD_STAGE_VOICE !== type) {
          M2iEy3 = tmp8(1236).t["3jG0Bo"];
        }
      }
      M2iEy3 = tmp8(1236).t.ejL1Wo;
    }
  } else if (type === GUILD_CATEGORY) {
    M2iEy3 = tmp8(1236).t.SzosGs;
  } else {
    M2iEy3 = tmp8(1236).t.M2iEy3;
  }
  obj = { [str]: obj };
  obj[1] = M2iEy3;
  ({ VIEW_CHANNEL: obj[2], MANAGE_CHANNELS } = tmp);
  if (type === tmp3.GUILD_CATEGORY) {
    const intl4 = tmp10(1236).intl;
    let stringResult1 = intl4.string(tmp10(1236).t["9qLtWs"]);
  } else {
    const intl3 = tmp10(1236).intl;
    stringResult1 = intl3.string(tmp10(1236).t.nAw15L);
  }
  obj = { title: stringResult1, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    let ydL28i = tmp8(1236).t.KJ2JnG;
  } else if (tmp3.GUILD_VOICE === type) {
    ydL28i = tmp8(1236).t["+gl2ne"];
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    ydL28i = tmp8(1236).t.SDX669;
  } else {
    ydL28i = tmp8(1236).t.ydL28i;
  }
  obj[1] = ydL28i;
  obj[2] = tmp.MANAGE_CHANNELS;
  obj[MANAGE_CHANNELS.toString()] = obj;
  let str2 = tmp.MANAGE_ROLES;
  obj1 = { title: null, description: null, flag: null };
  str2 = str2.toString();
  const intl5 = tmp10(1236).intl;
  obj1[0] = intl5.string(tmp10(1236).t.ICb6am);
  if (tmp3.GUILD_CATEGORY === type) {
    let hOMXOv = tmp8(1236).t.TyyCMD;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    hOMXOv = tmp8(1236).t.hcw4mx;
  } else {
    hOMXOv = tmp8(1236).t.hOMXOv;
  }
  obj1[1] = hOMXOv;
  obj1[2] = tmp.MANAGE_ROLES;
  obj[str2] = obj1;
  let str3 = tmp.MANAGE_WEBHOOKS;
  const obj2 = { title: null, description: null, flag: null };
  str3 = str3.toString();
  const intl6 = tmp10(1236).intl;
  obj2[0] = intl6.string(tmp10(1236).t["/ADKmM"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let CYBZry = tmp10(1236).t["K5+ZZ7"];
  } else {
    CYBZry = tmp10(1236).t.CYBZry;
  }
  obj2[1] = CYBZry;
  obj2[2] = tmp.MANAGE_WEBHOOKS;
  obj[str3] = obj2;
  let str4 = tmp.CREATE_INSTANT_INVITE;
  const obj3 = { title: null, description: null, flag: null };
  str4 = str4.toString();
  const intl7 = tmp10(1236).intl;
  obj3[0] = intl7.string(tmp10(1236).t.zJrgTG);
  if (tmp3.GUILD_CATEGORY === type) {
    let lUCs1n = tmp8(1236).t["3YFAAX"];
  } else {
    if (tmp3.GUILD_VOICE !== type) {
      if (tmp3.GUILD_STAGE_VOICE !== type) {
        lUCs1n = tmp8(1236).t.q4g2aI;
      }
    }
    lUCs1n = tmp8(1236).t.lUCs1n;
  }
  obj3[1] = lUCs1n;
  obj3[2] = tmp.CREATE_INSTANT_INVITE;
  obj[str4] = obj3;
  let str5 = tmp.SEND_MESSAGES;
  const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
  str5 = str5.toString();
  if (GUILD_THREADS_ONLY.has(type)) {
    const intl10 = tmp10(1236).intl;
    let stringResult2 = intl10.string(tmp10(1236).t.nJwAHX);
  } else if (type === tmp3.GUILD_CATEGORY) {
    const intl9 = tmp10(1236).intl;
    stringResult2 = intl9.string(tmp10(1236).t.S1VOwd);
  } else {
    const intl8 = tmp10(1236).intl;
    stringResult2 = intl8.string(tmp10(1236).t.T32rkC);
  }
  const obj4 = { title: stringResult2, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    let WQ6zpT = tmp8(1236).t.IjeLuu;
  } else if (tmp3.GUILD_FORUM === type) {
    createPostsDisabled = undefined;
    if (createPostsDisabled != null) {
      createPostsDisabled = createPostsDisabled.createPostsDisabled;
    }
    if (createPostsDisabled) {
      if (!type.isMediaChannel()) {
        let obj10 = getSystemLocaleDefault;
        let LG9VAi = obj10.getForumChannelPermissionText();
      }
      WQ6zpT = LG9VAi;
    }
    LG9VAi = tmp8(1236).t.LG9VAi;
  } else if (tmp3.GUILD_MEDIA === type) {
    WQ6zpT = tmp8(1236).t.LG9VAi;
  } else if (tmp3.GUILD_ANNOUNCEMENT === type) {
    const intl11 = tmp8(1236).intl;
    const obj5 = { articleURL: null };
    let obj9 = combinedDefault;
    obj5[0] = obj9.getArticleURL(constants3.ANNOUNCEMENT_CHANNELS);
    WQ6zpT = intl11.format(tmp8(1236).t.WFwfSD, obj5);
  } else if (tmp3.GUILD_VOICE === type) {
    let obj7 = getSystemLocaleDefault2;
    let sendMessagesDisabled;
    if (createPostsDisabled != null) {
      sendMessagesDisabled = createPostsDisabled.sendMessagesDisabled;
    }
    WQ6zpT = obj7.getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled);
  } else {
    WQ6zpT = tmp8(1236).t.WQ6zpT;
  }
  obj4[1] = WQ6zpT;
  obj4[2] = tmp.SEND_MESSAGES;
  obj[str5] = obj4;
  let str6 = tmp.EMBED_LINKS;
  const obj6 = { title: null, description: null, flag: null };
  str6 = str6.toString();
  const intl12 = tmp10(1236).intl;
  obj6[0] = intl12.string(tmp10(1236).t["969dEL"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let XFFhA0 = tmp10(1236).t["7zlUay"];
  } else {
    XFFhA0 = tmp10(1236).t.XFFhA0;
  }
  obj6[1] = XFFhA0;
  obj6[2] = tmp.EMBED_LINKS;
  obj[str6] = obj6;
  let str7 = tmp.ATTACH_FILES;
  obj7 = { title: null, description: null, flag: null };
  str7 = str7.toString();
  const intl13 = tmp10(1236).intl;
  obj7[0] = intl13.string(tmp10(1236).t["3AS4UM"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let WK9r7F = tmp10(1236).t.XREf9l;
  } else {
    WK9r7F = tmp10(1236).t.WK9r7F;
  }
  obj7[1] = WK9r7F;
  obj7[2] = tmp.ATTACH_FILES;
  obj[str7] = obj7;
  let str8 = tmp.ADD_REACTIONS;
  const obj8 = { title: null, description: null, flag: null };
  str8 = str8.toString();
  const intl14 = tmp10(1236).intl;
  obj8[0] = intl14.string(tmp10(1236).t.yEoJAr);
  if (tmp3.GUILD_CATEGORY === type) {
    let PVjR1Y = tmp8(1236).t.pZT2Zh;
  } else if (tmp3.GUILD_VOICE === type) {
    PVjR1Y = tmp8(1236).t.xSSbIs;
  } else {
    PVjR1Y = tmp8(1236).t.PVjR1Y;
  }
  obj8[1] = PVjR1Y;
  obj8[2] = tmp.ADD_REACTIONS;
  obj[str8] = obj8;
  let str9 = tmp.USE_EXTERNAL_EMOJIS;
  obj9 = { title: null, description: null, flag: null };
  str9 = str9.toString();
  const intl15 = tmp10(1236).intl;
  obj9[0] = intl15.string(tmp10(1236).t["+bxf3H"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let Qc5vOr = tmp10(1236).t.mWAbK4;
  } else {
    Qc5vOr = tmp10(1236).t.Qc5vOr;
  }
  obj9[1] = Qc5vOr;
  obj9[2] = tmp.USE_EXTERNAL_EMOJIS;
  obj[str9] = obj9;
  let str10 = tmp.USE_EXTERNAL_STICKERS;
  obj10 = { title: null, description: null, flag: null };
  str10 = str10.toString();
  const intl16 = tmp10(1236).intl;
  obj10[0] = intl16.string(tmp10(1236).t.ERNhYf);
  if (type === tmp3.GUILD_CATEGORY) {
    let VF4fZZ = tmp10(1236).t["39whJ4"];
  } else {
    VF4fZZ = tmp10(1236).t.VF4fZZ;
  }
  obj10[1] = VF4fZZ;
  obj10[2] = tmp.USE_EXTERNAL_STICKERS;
  obj[str10] = obj10;
  let str11 = tmp.MENTION_EVERYONE;
  str11 = str11.toString();
  if (type === tmp3.GUILD_STAGE_VOICE) {
    const intl18 = tmp10(1236).intl;
    let stringResult3 = intl18.string(tmp10(1236).t.VDUAHO);
  } else {
    const intl17 = tmp10(1236).intl;
    stringResult3 = intl17.string(tmp10(1236).t.Y78KGC);
  }
  const obj11 = { title: stringResult3, description: null, flag: null };
  if (type === tmp3.GUILD_CATEGORY) {
  } else if (type === tmp3.GUILD_STAGE_VOICE) {
  } else {
  }
  obj11[1] = _6IUSdt;
  obj11[2] = tmp.MENTION_EVERYONE;
  obj[str11] = obj11;
  let str12 = tmp.MANAGE_MESSAGES;
  const obj12 = { title: null, description: null, flag: null };
  str12 = str12.toString();
  const intl19 = tmp10(1236).intl;
  obj12[0] = intl19.string(tmp10(1236).t["6lU9xM"]);
  if (tmp3.GUILD_CATEGORY === type) {
    SeA_G9 = tmp8(1236).t["5R9nYh"];
  } else if (tmp3.GUILD_ANNOUNCEMENT === type) {
    const intl20 = tmp8(1236).intl;
    const obj13 = { articleURL: null };
    let obj19 = combinedDefault;
    obj13[0] = obj19.getArticleURL(constants3.ANNOUNCEMENT_CHANNELS);
    SeA_G9 = intl20.format(tmp8(1236).t.XRxOo0, obj13);
  } else {
    SeA_G9 = tmp8(1236).t["SeA+G9"];
  }
  obj12[1] = SeA_G9;
  obj12[2] = tmp.MANAGE_MESSAGES;
  obj[str12] = obj12;
  let str13 = tmp.PIN_MESSAGES;
  const obj14 = { title: null, description: null, flag: null };
  str13 = str13.toString();
  const intl21 = tmp10(1236).intl;
  obj14[0] = intl21.string(tmp10(1236).t.Y5BI39);
  if (type === tmp3.GUILD_CATEGORY) {
  } else {
  }
  obj14[1] = _0l2EjL;
  obj14[2] = tmp.PIN_MESSAGES;
  obj[str13] = obj14;
  let str14 = tmp.BYPASS_SLOWMODE;
  const obj15 = { title: null, description: null, flag: null };
  str14 = str14.toString();
  const intl22 = tmp10(1236).intl;
  obj15[0] = intl22.string(tmp10(1236).t.kqcjeV);
  if (type === tmp3.GUILD_CATEGORY) {
    let Ha1xbw = tmp10(1236).t.C4t1Xu;
  } else {
    Ha1xbw = tmp10(1236).t.Ha1xbw;
  }
  obj15[1] = Ha1xbw;
  obj15[2] = tmp.BYPASS_SLOWMODE;
  obj[str14] = obj15;
  let str15 = tmp.MANAGE_OFFICIAL_MESSAGES;
  const obj16 = { title: null, description: null, flag: null };
  str15 = str15.toString();
  const intl23 = tmp10(1236).intl;
  obj16[0] = intl23.string(tmp10(1236).t.Aj9ruN);
  if (type === tmp3.GUILD_CATEGORY) {
    let qEbw4W = tmp10(1236).t["Pf0e/Q"];
  } else {
    qEbw4W = tmp10(1236).t.qEbw4W;
  }
  obj16[1] = qEbw4W;
  obj16[2] = tmp.MANAGE_OFFICIAL_MESSAGES;
  obj[str15] = obj16;
  let str16 = tmp.READ_MESSAGE_HISTORY;
  const GUILD_THREADS_ONLY2 = tmp19.GUILD_THREADS_ONLY;
  str16 = str16.toString();
  const hasItem = GUILD_THREADS_ONLY2.has(type);
  const intl24 = tmp10(1236).intl;
  const string = intl24.string;
  const t = tmp10(1236).t;
  if (hasItem) {
    let stringResult4 = string(t["0RQwtn"]);
  } else {
    stringResult4 = string(t.l9ufaR);
  }
  const obj17 = { title: stringResult4, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    let RqCc7i = tmp8(1236).t["cJRv/g"];
  } else if (tmp3.GUILD_VOICE === type) {
    let obj24 = getSystemLocaleDefault2;
    let prop;
    if (createPostsDisabled != null) {
      prop = createPostsDisabled.readMessageHistoryDisabled;
    }
    RqCc7i = obj24.getTextInVoiceReadMessageHistoryChannelPermissionText(prop);
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        RqCc7i = tmp8(1236).t.cuMfH0;
      }
    }
    RqCc7i = tmp8(1236).t.RqCc7i;
  }
  obj17[1] = RqCc7i;
  obj17[2] = tmp.READ_MESSAGE_HISTORY;
  obj[str16] = obj17;
  let str17 = tmp.SEND_TTS_MESSAGES;
  const obj18 = { title: null, description: null, flag: null };
  str17 = str17.toString();
  const intl25 = tmp10(1236).intl;
  obj18[0] = intl25.string(tmp10(1236).t.mMbwh7);
  if (type === tmp3.GUILD_CATEGORY) {
    let CpakGz = tmp10(1236).t.b7pc9U;
  } else {
    CpakGz = tmp10(1236).t.CpakGz;
  }
  obj18[1] = CpakGz;
  obj18[2] = tmp.SEND_TTS_MESSAGES;
  obj[str17] = obj18;
  let str18 = tmp.USE_APPLICATION_COMMANDS;
  obj19 = { title: null, description: null, flag: null };
  str18 = str18.toString();
  const intl26 = tmp10(1236).intl;
  obj19[0] = intl26.string(tmp10(1236).t.nkoPOt);
  if (type === tmp3.GUILD_CATEGORY) {
    let ReG3gG = tmp10(1236).t["D+qW0J"];
  } else {
    ReG3gG = tmp10(1236).t.ReG3gG;
  }
  obj19[1] = ReG3gG;
  obj19[2] = tmp.USE_APPLICATION_COMMANDS;
  obj[str18] = obj19;
  let str19 = tmp.SEND_VOICE_MESSAGES;
  const obj20 = { title: null, description: null, flag: null };
  str19 = str19.toString();
  const intl27 = tmp10(1236).intl;
  obj20[0] = intl27.string(tmp10(1236).t.WlWSBT);
  if (type === tmp3.GUILD_CATEGORY) {
    let BhEo9V = tmp10(1236).t.gavGfv;
  } else {
    BhEo9V = tmp10(1236).t.BhEo9V;
  }
  obj20[1] = BhEo9V;
  obj20[2] = tmp.SEND_VOICE_MESSAGES;
  obj[str19] = obj20;
  let str20 = tmp.SEND_POLLS;
  const obj21 = { title: null, description: null, flag: null };
  str20 = str20.toString();
  const intl28 = tmp10(1236).intl;
  obj21[0] = intl28.string(tmp10(1236).t.UMQ7Ww);
  if (type === tmp3.GUILD_CATEGORY) {
    let ckKKIO = tmp10(1236).t["18Ya7L"];
  } else {
    ckKKIO = tmp10(1236).t.ckKKIO;
  }
  obj21[1] = ckKKIO;
  obj21[2] = tmp.SEND_POLLS;
  obj[str20] = obj21;
  let str21 = tmp.CONNECT;
  const obj22 = { title: null, description: null, flag: null };
  str21 = str21.toString();
  const intl29 = tmp10(1236).intl;
  obj22[0] = intl29.string(tmp10(1236).t.S0W8Z5);
  const GUILD_CATEGORY2 = tmp3.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY2 === type) {
      QU_Rw8 = tmp8(1236).t.XcrieN;
    } else if (tmp3.GUILD_STAGE_VOICE === type) {
      QU_Rw8 = tmp8(1236).t.SOFNhP;
    } else {
      if (tmp3.GUILD_TEXT !== type) {
        if (tmp3.GUILD_FORUM !== type) {
          if (tmp3.GUILD_MEDIA !== type) {
            QU_Rw8 = tmp8(1236).t.j4AyO8;
          }
        }
      }
      QU_Rw8 = tmp8(1236).t.LsS8xT;
    }
  } else if (GUILD_CATEGORY2 === type) {
    QU_Rw8 = tmp8(1236).t.stA0Hl;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    QU_Rw8 = tmp8(1236).t["G9+Qie"];
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          QU_Rw8 = tmp8(1236).t.HvG8uR;
        }
      }
    }
    QU_Rw8 = tmp8(1236).t["QU/Rw8"];
  }
  obj22[1] = QU_Rw8;
  obj22[2] = tmp.CONNECT;
  obj[str21] = obj22;
  let str22 = tmp.SPEAK;
  const obj23 = { title: null, description: null, flag: null };
  str22 = str22.toString();
  const intl30 = tmp10(1236).intl;
  obj23[0] = intl30.string(tmp10(1236).t["8w1tIR"]);
  if (tmp3.GUILD_CATEGORY === type) {
    _VXsJI = tmp8(1236).t.iXhS6R;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    _VXsJI = tmp8(1236).t.a8n741;
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          _VXsJI = tmp8(1236).t["568E6d"];
        }
      }
    }
    _VXsJI = tmp8(1236).t["+VXsJI"];
  }
  obj23[1] = _VXsJI;
  obj23[2] = tmp.SPEAK;
  obj[str22] = obj23;
  let str23 = tmp.STREAM;
  obj24 = { title: null, description: null, flag: null };
  str23 = str23.toString();
  const intl31 = tmp10(1236).intl;
  obj24[0] = intl31.string(tmp10(1236).t.FlNoSV);
  if (tmp3.GUILD_CATEGORY === type) {
    let AuEQEC = tmp8(1236).t["ryG0/J"];
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          if (tmp3.GUILD_STAGE_VOICE === type) {
            AuEQEC = tmp8(1236).t.swJcN6;
          } else {
            AuEQEC = tmp8(1236).t.RY8rIc;
          }
        }
      }
    }
    AuEQEC = tmp8(1236).t.AuEQEC;
  }
  obj24[1] = AuEQEC;
  obj24[2] = tmp.STREAM;
  obj[str23] = obj24;
  let str24 = tmp.USE_EMBEDDED_ACTIVITIES;
  const obj25 = { title: null, description: null, flag: null };
  str24 = str24.toString();
  const intl32 = tmp10(1236).intl;
  obj25[0] = intl32.string(tmp10(1236).t.rLSGeh);
  if (tmp3.GUILD_CATEGORY === type) {
    let RyEwla = tmp8(1236).t.maNzCO;
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        RyEwla = tmp8(1236).t.qinvMU;
      }
    }
    RyEwla = tmp8(1236).t.RyEwla;
  }
  obj25[1] = RyEwla;
  obj25[2] = tmp.USE_EMBEDDED_ACTIVITIES;
  obj[str24] = obj25;
  let str25 = tmp.USE_EXTERNAL_APPS;
  const obj26 = { title: null, description: null, flag: null };
  str25 = str25.toString();
  const intl33 = tmp10(1236).intl;
  obj26[0] = intl33.string(tmp10(1236).t["3TzAk0"]);
  if (tmp3.GUILD_CATEGORY === type) {
    let qPUPip = tmp8(1236).t.bgIY3H;
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        qPUPip = tmp8(1236).t.czqMLp;
      }
    }
    qPUPip = tmp8(1236).t.qPUPip;
  }
  obj26[1] = qPUPip;
  obj26[2] = tmp.USE_EXTERNAL_APPS;
  obj[str25] = obj26;
  let str26 = tmp.USE_SOUNDBOARD;
  const obj27 = { title: null, description: null, flag: null };
  str26 = str26.toString();
  const intl34 = tmp10(1236).intl;
  obj27[0] = intl34.string(tmp10(1236).t.Bco7NG);
  if (tmp3.GUILD_CATEGORY === type) {
    const intl37 = tmp8(1236).intl;
    const obj28 = { helpCenterArticle: null };
    let obj40 = combinedDefault;
    obj28[0] = obj40.getArticleURL(constants3.SOUNDBOARD);
    let formatResult = intl37.format(tmp8(1236).t["0kBp/0"], obj28);
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          const intl35 = tmp8(1236).intl;
          const obj29 = { helpCenterArticle: null };
          let obj36 = combinedDefault;
          obj29[0] = obj36.getArticleURL(constants3.SOUNDBOARD);
          formatResult = intl35.format(tmp8(1236).t.GEi6Ym, obj29);
        }
      }
    }
    const intl36 = tmp8(1236).intl;
    const obj30 = { helpCenterArticle: null };
    let obj38 = combinedDefault;
    obj30[0] = obj38.getArticleURL(constants3.SOUNDBOARD);
    formatResult = intl36.format(tmp8(1236).t["6eYqU1"], obj30);
  }
  obj27[1] = formatResult;
  obj27[2] = tmp.USE_SOUNDBOARD;
  obj[str26] = obj27;
  let str27 = tmp.USE_EXTERNAL_SOUNDS;
  const obj31 = { title: null, description: null, flag: null };
  str27 = str27.toString();
  const intl38 = tmp10(1236).intl;
  obj31[0] = intl38.string(tmp10(1236).t.pwaVJ6);
  obj31[1] = tmp10(1236).t.qDpPtX;
  obj31[2] = tmp.USE_EXTERNAL_SOUNDS;
  obj[str27] = obj31;
  let str28 = tmp.USE_VAD;
  const obj32 = { title: null, description: null, flag: null };
  str28 = str28.toString();
  const intl39 = tmp10(1236).intl;
  obj32[0] = intl39.string(tmp10(1236).t["08zAV7"]);
  if (tmp3.GUILD_CATEGORY === type) {
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
        }
      }
    }
  }
  obj32[1] = _3GJwsc;
  obj32[2] = tmp.USE_VAD;
  obj[str28] = obj32;
  let str29 = tmp.PRIORITY_SPEAKER;
  const obj33 = { title: null, description: null, flag: null };
  str29 = str29.toString();
  const intl40 = tmp10(1236).intl;
  obj33[0] = intl40.string(tmp10(1236).t.BVK71i);
  if (tmp3.GUILD_CATEGORY === type) {
    const intl45 = tmp8(1236).intl;
    const obj34 = { keybind: null };
    const intl46 = tmp8(1236).intl;
    obj34[0] = intl46.string(tmp8(1236).t.DkSwJ2);
    let formatResult1 = intl45.format(tmp8(1236).t.g5MzON, obj34);
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          const intl41 = tmp8(1236).intl;
          const obj35 = { keybind: null };
          const intl42 = tmp8(1236).intl;
          obj35[0] = intl42.string(tmp8(1236).t.DkSwJ2);
          formatResult1 = intl41.format(tmp8(1236).t.Ij0yKX, obj35);
        }
      }
    }
    const intl43 = tmp8(1236).intl;
    obj36 = { keybind: null };
    const intl44 = tmp8(1236).intl;
    obj36[0] = intl44.string(tmp8(1236).t.DkSwJ2);
    formatResult1 = intl43.format(tmp8(1236).t["4nbjL0"], obj36);
  }
  obj33[1] = formatResult1;
  obj33[2] = tmp.PRIORITY_SPEAKER;
  obj[str29] = obj33;
  let str30 = tmp.MUTE_MEMBERS;
  const obj37 = { title: null, description: null, flag: null };
  str30 = str30.toString();
  const intl47 = tmp10(1236).intl;
  obj37[0] = intl47.string(tmp10(1236).t["8EI30/"]);
  if (tmp3.GUILD_CATEGORY === type) {
    let KYDG2K = tmp8(1236).t.bcuobK;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    KYDG2K = tmp8(1236).t.EbvdH9;
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          KYDG2K = tmp8(1236).t.LW5C9P;
        }
      }
    }
    KYDG2K = tmp8(1236).t.KYDG2K;
  }
  obj37[1] = KYDG2K;
  obj37[2] = tmp.MUTE_MEMBERS;
  obj[str30] = obj37;
  let str31 = tmp.DEAFEN_MEMBERS;
  obj38 = { title: null, description: null, flag: null };
  str31 = str31.toString();
  const intl48 = tmp10(1236).intl;
  obj38[0] = intl48.string(tmp10(1236).t["9L47Fr"]);
  if (tmp3.GUILD_CATEGORY === type) {
    d_i1nX = tmp8(1236).t.amZ5vn;
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          d_i1nX = tmp8(1236).t.UAdIxo;
        }
      }
    }
    d_i1nX = tmp8(1236).t["d+i1nX"];
  }
  obj38[1] = d_i1nX;
  obj38[2] = tmp.DEAFEN_MEMBERS;
  obj[str31] = obj38;
  let str32 = tmp.MOVE_MEMBERS;
  const obj39 = { title: null, description: null, flag: null };
  str32 = str32.toString();
  const intl49 = tmp10(1236).intl;
  obj39[0] = intl49.string(tmp10(1236).t.YtjJPQ);
  if (tmp3.GUILD_CATEGORY === type) {
    let cbdQy2 = tmp8(1236).t.XmoyRD;
  } else if (tmp3.GUILD_STAGE_VOICE === type) {
    cbdQy2 = tmp8(1236).t.bizKz6;
  } else {
    if (tmp3.GUILD_TEXT !== type) {
      if (tmp3.GUILD_FORUM !== type) {
        if (tmp3.GUILD_MEDIA !== type) {
          cbdQy2 = tmp8(1236).t.nSD1ah;
        }
      }
    }
    cbdQy2 = tmp8(1236).t.cbdQy2;
  }
  obj39[1] = cbdQy2;
  obj39[2] = tmp.MOVE_MEMBERS;
  obj[str32] = obj39;
  let str33 = tmp.REQUEST_TO_SPEAK;
  obj40 = { title: null, description: null, flag: null };
  str33 = str33.toString();
  const intl50 = tmp10(1236).intl;
  obj40[0] = intl50.string(tmp10(1236).t["5kicT2"]);
  if (type === tmp3.GUILD_CATEGORY) {
    let uzlYFE = tmp10(1236).t.T1lMSl;
  } else {
    uzlYFE = tmp10(1236).t.uzlYFE;
  }
  obj40[1] = uzlYFE;
  obj40[2] = tmp.REQUEST_TO_SPEAK;
  obj[str33] = obj40;
  let str34 = tmp.MANAGE_THREADS;
  const GUILD_THREADS_ONLY3 = tmp19.GUILD_THREADS_ONLY;
  str34 = str34.toString();
  if (GUILD_THREADS_ONLY3.has(type)) {
    const intl53 = tmp10(1236).intl;
    let stringResult5 = intl53.string(tmp10(1236).t.ossiZD);
  } else if (type === tmp3.GUILD_CATEGORY) {
    const intl52 = tmp10(1236).intl;
    stringResult5 = intl52.string(tmp10(1236).t.QKe7Q3);
  } else {
    const intl51 = tmp10(1236).intl;
    stringResult5 = intl51.string(tmp10(1236).t.kEqgr7);
  }
  const obj41 = { title: stringResult5, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    XLi_jG = tmp8(1236).t.S31soU;
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        XLi_jG = tmp8(1236).t.yvan0j;
      }
    }
    XLi_jG = tmp8(1236).t["XLi/jG"];
  }
  obj41[1] = XLi_jG;
  obj41[2] = tmp.MANAGE_THREADS;
  obj[str34] = obj41;
  let str35 = tmp.CREATE_PUBLIC_THREADS;
  const obj42 = { title: null, description: null, flag: null };
  str35 = str35.toString();
  const intl54 = tmp10(1236).intl;
  obj42[0] = intl54.string(tmp10(1236).t["25rKnX"]);
  if (type === tmp3.GUILD_CATEGORY) {
  } else {
  }
  obj42[1] = _5SDtGB;
  obj42[2] = tmp.CREATE_PUBLIC_THREADS;
  obj[str35] = obj42;
  let str36 = tmp.CREATE_PRIVATE_THREADS;
  const obj43 = { title: null, description: null, flag: null };
  str36 = str36.toString();
  const intl55 = tmp10(1236).intl;
  obj43[0] = intl55.string(tmp10(1236).t.QwbTSa);
  if (type === tmp3.GUILD_CATEGORY) {
    let Chg2zd = tmp10(1236).t["hBS/zn"];
  } else {
    Chg2zd = tmp10(1236).t.Chg2zd;
  }
  obj43[1] = Chg2zd;
  obj43[2] = tmp.CREATE_PRIVATE_THREADS;
  obj[str36] = obj43;
  let str37 = tmp.SEND_MESSAGES_IN_THREADS;
  const GUILD_THREADS_ONLY4 = tmp19.GUILD_THREADS_ONLY;
  str37 = str37.toString();
  if (GUILD_THREADS_ONLY4.has(type)) {
    const intl58 = tmp10(1236).intl;
    let stringResult6 = intl58.string(tmp10(1236).t.fqhqWm);
  } else if (type === tmp3.GUILD_CATEGORY) {
    const intl57 = tmp10(1236).intl;
    stringResult6 = intl57.string(tmp10(1236).t["5QlVGy"]);
  } else {
    const intl56 = tmp10(1236).intl;
    stringResult6 = intl56.string(tmp10(1236).t.fTE74g);
  }
  const obj44 = { title: stringResult6, description: null, flag: null };
  if (tmp3.GUILD_CATEGORY === type) {
    let XTnrPH = tmp8(1236).t.DlIVcN;
  } else {
    if (tmp3.GUILD_FORUM !== type) {
      if (tmp3.GUILD_MEDIA !== type) {
        XTnrPH = tmp8(1236).t.xHO6Me;
      }
    }
    XTnrPH = tmp8(1236).t.XTnrPH;
  }
  obj44[1] = XTnrPH;
  obj44[2] = tmp.SEND_MESSAGES_IN_THREADS;
  obj[str37] = obj44;
  let str38 = tmp.MANAGE_EVENTS;
  const obj45 = { title: null, description: null, flag: null };
  str38 = str38.toString();
  const intl59 = tmp10(1236).intl;
  obj45[0] = intl59.string(tmp10(1236).t.HIgA5a);
  if (type === tmp3.GUILD_CATEGORY) {
  } else {
  }
  obj45[1] = _4pO_TY;
  obj45[2] = tmp.MANAGE_EVENTS;
  obj[str38] = obj45;
  let str39 = tmp.CREATE_EVENTS;
  const obj46 = { title: null, description: null, flag: null };
  str39 = str39.toString();
  const intl60 = tmp10(1236).intl;
  obj46[0] = intl60.string(tmp10(1236).t.qyjZua);
  if (type === tmp3.GUILD_CATEGORY) {
    let sPoBLa = tmp10(1236).t.XpibmC;
  } else {
    sPoBLa = tmp10(1236).t.sPoBLa;
  }
  obj46[1] = sPoBLa;
  obj46[2] = tmp.CREATE_EVENTS;
  obj[str39] = obj46;
  let str40 = tmp.SET_VOICE_CHANNEL_STATUS;
  const obj47 = { title: null, description: null, flag: null };
  str40 = str40.toString();
  const intl61 = tmp10(1236).intl;
  obj47[0] = intl61.string(tmp10(1236).t.VBwkUf);
  let enableHangoutWindow;
  if (createPostsDisabled != null) {
    enableHangoutWindow = createPostsDisabled.enableHangoutWindow;
  }
  const t2 = tmp10(1236).t;
  obj47[1] = enableHangoutWindow ? t2.CYcJ6H : t2.C6BzXx;
  obj47[2] = tmp.SET_VOICE_CHANNEL_STATUS;
  obj[str40] = obj47;
  return obj;
};