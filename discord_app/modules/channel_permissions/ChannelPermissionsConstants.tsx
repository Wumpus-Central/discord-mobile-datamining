// === Module 8110: ChannelPermissionsConstants ===

// Module 8110 (ChannelPermissionsConstants)
import intl62 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import ForumPlatformUtilsDefault from "ForumPlatformUtils" /* 8111 */;
import GuildTiVPlatformUtilsDefault from "GuildTiVPlatformUtils" /* 8112 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ ChannelTypes: c3, ChannelTypesSets: closure_4, HelpdeskArticles: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionsConstants.tsx");

export const RowType = { EMPTY_STATE: 0, [0]: "EMPTY_STATE", ADMINISTRATOR: 1, [1]: "ADMINISTRATOR", ROLE: 2, [2]: "ROLE", OWNER: 3, [3]: "OWNER", MEMBER: 4, [4]: "MEMBER", USER: 5, [5]: "USER", GUILD: 6, [6]: "GUILD", APP_CHANNEL_APP: 7, [7]: "APP_CHANNEL_APP" };
export const AudienceSelectorSections = { ROLES: 0, [0]: "ROLES", MEMBERS: 1, [1]: "MEMBERS", USERS: 2, [2]: "USERS", GUILDS: 3, [3]: "GUILDS" };
export const MEMBER_REQUEST_COUNT = 20;
export const ADVANCED_MODE_ON_KEY = "channelPermissionSettingsAdvancedModeOn";
export const TrackExposureLocations = { SETTINGS_PAGE: "settings-page", MEMBERS_LIST: "members-list", EMPTY_STATE: "empty-state", CREATE_CHANNEL: "create-channel" };
export const SettingMode = { BASIC: "basic", ADVANCED: "advanced" };
export const getChannelPermissionSpecMap = function getChannelPermissionSpecMap(type, arg1, createPostsDisabled) {
  let AuEQEC;
  let BhEo9V;
  let CP2sz4;
  let CYBZry;
  let Chg2zd;
  let CpakGz;
  let Ha1xbw;
  let KYDG2K;
  let M2iEy3;
  let MANAGE_CHANNELS;
  let PVjR1Y;
  let Qc5vOr;
  let ReG3gG;
  let RqCc7i;
  let RyEwla;
  let S31soU;
  let VF4fZZ;
  let WK9r7F;
  let WQ6zpT;
  let XFFhA0;
  let XTnrPH;
  let XcrieN;
  let amZ5vn;
  let cbdQy2;
  let ckKKIO;
  let enableHangoutWindow;
  let fUYPly;
  let format5Result;
  let format8Result;
  let gmbD87;
  let hOMXOv;
  let iXhS6R;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl19;
  let intl21;
  let intl22;
  let intl23;
  let intl25;
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl38;
  let intl39;
  let intl40;
  let intl42;
  let intl44;
  let intl46;
  let intl47;
  let intl48;
  let intl49;
  let intl5;
  let intl50;
  let intl54;
  let intl55;
  let intl59;
  let intl6;
  let intl60;
  let intl61;
  let intl7;
  let lUCs1n;
  let obj19;
  let obj35;
  let obj37;
  let obj39;
  let obj9;
  let prop;
  let prop3;
  let qEbw4W;
  let qPUPip;
  let sPoBLa;
  let stringResult;
  let stringResult1;
  let stringResult2;
  let stringResult3;
  let stringResult4;
  let stringResult5;
  let stringResult6;
  let t2;
  let tmp10;
  let tmp8;
  let uzlYFE;
  let v5R9nYh;
  let ydL28i;
  type = type.type;
  const str = metroRequire.VIEW_CHANNEL;
  const str1 = str.toString();
  if (type === constants.GUILD_CATEGORY) {
    const intl2 = intl62.intl;
    stringResult = intl2.string(intl62.t.uV83yi);
    tmp8 = require;
    tmp10 = require;
  } else {
    const intl = intl62.intl;
    stringResult = intl.string(intl62.t["W/A4Qp"]);
    tmp8 = require;
    tmp10 = require;
  }
  const obj = { title: stringResult, description: M2iEy3, flag: null };
  const GUILD_CATEGORY = constants.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY === type) {
      M2iEy3 = tmp8(1126).t["o/vBzj"];
    } else {
      if (constants.GUILD_VOICE !== type) {
        if (constants.GUILD_STAGE_VOICE !== type) {
          M2iEy3 = tmp8(1126).t["3jG0Bo"];
        }
      }
      M2iEy3 = tmp8(1126).t.ejL1Wo;
    }
  } else if (type === GUILD_CATEGORY) {
    M2iEy3 = tmp8(1126).t.SzosGs;
  } else {
    M2iEy3 = tmp8(1126).t.M2iEy3;
  }
  const obj2 = { [str1]: obj };
  ({ VIEW_CHANNEL: obj.flag, MANAGE_CHANNELS } = metroRequire);
  const str41 = MANAGE_CHANNELS.toString();
  if (type === constants.GUILD_CATEGORY) {
    const intl4 = tmp10(1126).intl;
    stringResult1 = intl4.string(tmp10(1126).t["9qLtWs"]);
  } else {
    const intl3 = tmp10(1126).intl;
    stringResult1 = intl3.string(tmp10(1126).t.nAw15L);
  }
  const obj3 = { title: stringResult1, description: ydL28i, flag: metroRequire.MANAGE_CHANNELS };
  if (constants.GUILD_CATEGORY === type) {
    ydL28i = tmp8(1126).t.KJ2JnG;
  } else if (constants.GUILD_VOICE === type) {
    ydL28i = tmp8(1126).t["+gl2ne"];
  } else if (constants.GUILD_STAGE_VOICE === type) {
    ydL28i = tmp8(1126).t.SDX669;
  } else {
    ydL28i = tmp8(1126).t.ydL28i;
  }
  obj2[str41] = obj3;
  const obj4 = { title: intl5.string(tmp10(1126).t.ICb6am), description: hOMXOv, flag: metroRequire.MANAGE_ROLES };
  const str2 = metroRequire.MANAGE_ROLES;
  const str42 = str2.toString();
  intl5 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    hOMXOv = tmp8(1126).t.TyyCMD;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    hOMXOv = tmp8(1126).t.hcw4mx;
  } else {
    hOMXOv = tmp8(1126).t.hOMXOv;
  }
  obj2[str42] = obj4;
  const obj5 = { title: intl6.string(tmp10(1126).t["/ADKmM"]), description: CYBZry, flag: metroRequire.MANAGE_WEBHOOKS };
  const str3 = metroRequire.MANAGE_WEBHOOKS;
  const str43 = str3.toString();
  intl6 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    CYBZry = tmp10(1126).t["K5+ZZ7"];
  } else {
    CYBZry = tmp10(1126).t.CYBZry;
  }
  obj2[str43] = obj5;
  const obj6 = { title: intl7.string(tmp10(1126).t.zJrgTG), description: lUCs1n, flag: metroRequire.CREATE_INSTANT_INVITE };
  const str4 = metroRequire.CREATE_INSTANT_INVITE;
  const str44 = str4.toString();
  intl7 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    lUCs1n = tmp8(1126).t["3YFAAX"];
  } else {
    if (constants.GUILD_VOICE !== type) {
      if (constants.GUILD_STAGE_VOICE !== type) {
        lUCs1n = tmp8(1126).t.q4g2aI;
      }
    }
    lUCs1n = tmp8(1126).t.lUCs1n;
  }
  obj2[str44] = obj6;
  const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
  const str5 = metroRequire.SEND_MESSAGES;
  const str45 = str5.toString();
  if (GUILD_THREADS_ONLY.has(type)) {
    const intl10 = tmp10(1126).intl;
    stringResult2 = intl10.string(tmp10(1126).t.nJwAHX);
  } else if (type === constants.GUILD_CATEGORY) {
    const intl9 = tmp10(1126).intl;
    stringResult2 = intl9.string(tmp10(1126).t.S1VOwd);
  } else {
    const intl8 = tmp10(1126).intl;
    stringResult2 = intl8.string(tmp10(1126).t.T32rkC);
  }
  const obj7 = { title: stringResult2, description: WQ6zpT, flag: metroRequire.SEND_MESSAGES };
  if (constants.GUILD_CATEGORY === type) {
    WQ6zpT = tmp8(1126).t.IjeLuu;
  } else if (constants.GUILD_FORUM === type) {
    createPostsDisabled = undefined;
    if (createPostsDisabled != null) {
      createPostsDisabled = createPostsDisabled.createPostsDisabled;
    }
    if (createPostsDisabled) {
      let LG9VAi;
      if (!type.isMediaChannel()) {
        const obj10 = ForumPlatformUtilsDefault;
        LG9VAi = obj10.getForumChannelPermissionText();
      }
      WQ6zpT = LG9VAi;
    }
    LG9VAi = tmp8(1126).t.LG9VAi;
  } else if (constants.GUILD_MEDIA === type) {
    WQ6zpT = tmp8(1126).t.LG9VAi;
  } else if (constants.GUILD_ANNOUNCEMENT === type) {
    const intl11 = tmp8(1126).intl;
    const format = intl11.format;
    const obj8 = { articleURL: obj9.getArticleURL(hasOwnProperty.ANNOUNCEMENT_CHANNELS) };
    const WFwfSD = tmp8(1126).t.WFwfSD;
    obj9 = HelpdeskUtilsDefault;
    WQ6zpT = format(WFwfSD, obj8);
  } else if (constants.GUILD_VOICE === type) {
    let sendMessagesDisabled;
    const getTextInVoiceSendMessageChannelPermissionText = GuildTiVPlatformUtilsDefault.getTextInVoiceSendMessageChannelPermissionText;
    GuildTiVPlatformUtilsDefault;
    if (createPostsDisabled != null) {
      sendMessagesDisabled = createPostsDisabled.sendMessagesDisabled;
    }
    WQ6zpT = getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled);
  } else {
    WQ6zpT = tmp8(1126).t.WQ6zpT;
  }
  obj2[str45] = obj7;
  const obj11 = { title: intl12.string(tmp10(1126).t["969dEL"]), description: XFFhA0, flag: metroRequire.EMBED_LINKS };
  const str6 = metroRequire.EMBED_LINKS;
  const str46 = str6.toString();
  intl12 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    XFFhA0 = tmp10(1126).t["7zlUay"];
  } else {
    XFFhA0 = tmp10(1126).t.XFFhA0;
  }
  obj2[str46] = obj11;
  const obj12 = { title: intl13.string(tmp10(1126).t["3AS4UM"]), description: WK9r7F, flag: metroRequire.ATTACH_FILES };
  const str7 = metroRequire.ATTACH_FILES;
  const str47 = str7.toString();
  intl13 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    WK9r7F = tmp10(1126).t.XREf9l;
  } else {
    WK9r7F = tmp10(1126).t.WK9r7F;
  }
  obj2[str47] = obj12;
  const obj13 = { title: intl14.string(tmp10(1126).t.yEoJAr), description: PVjR1Y, flag: metroRequire.ADD_REACTIONS };
  const str8 = metroRequire.ADD_REACTIONS;
  const str48 = str8.toString();
  intl14 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    PVjR1Y = tmp8(1126).t.pZT2Zh;
  } else if (constants.GUILD_VOICE === type) {
    PVjR1Y = tmp8(1126).t.xSSbIs;
  } else {
    PVjR1Y = tmp8(1126).t.PVjR1Y;
  }
  obj2[str48] = obj13;
  const obj14 = { title: intl15.string(tmp10(1126).t["+bxf3H"]), description: Qc5vOr, flag: metroRequire.USE_EXTERNAL_EMOJIS };
  const str9 = metroRequire.USE_EXTERNAL_EMOJIS;
  const str49 = str9.toString();
  intl15 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    Qc5vOr = tmp10(1126).t.mWAbK4;
  } else {
    Qc5vOr = tmp10(1126).t.Qc5vOr;
  }
  obj2[str49] = obj14;
  const obj15 = { title: intl16.string(tmp10(1126).t.ERNhYf), description: VF4fZZ, flag: metroRequire.USE_EXTERNAL_STICKERS };
  const str10 = metroRequire.USE_EXTERNAL_STICKERS;
  const str50 = str10.toString();
  intl16 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    VF4fZZ = tmp10(1126).t["39whJ4"];
  } else {
    VF4fZZ = tmp10(1126).t.VF4fZZ;
  }
  obj2[str50] = obj15;
  const str11 = metroRequire.MENTION_EVERYONE;
  const str51 = str11.toString();
  if (type === constants.GUILD_STAGE_VOICE) {
    const intl18 = tmp10(1126).intl;
    stringResult3 = intl18.string(tmp10(1126).t.VDUAHO);
  } else {
    const intl17 = tmp10(1126).intl;
    stringResult3 = intl17.string(tmp10(1126).t.Y78KGC);
  }
  const obj16 = { title: stringResult3, description: prop, flag: metroRequire.MENTION_EVERYONE };
  if (type === constants.GUILD_CATEGORY) {
    prop = tmp10(1126).t["HOhg/B"];
  } else if (type === constants.GUILD_STAGE_VOICE) {
    prop = tmp10(1126).t.rZn1oO;
  } else {
    prop = tmp10(1126).t["6IUSdt"];
  }
  obj2[str51] = obj16;
  const obj17 = { title: intl19.string(tmp10(1126).t["6lU9xM"]), description: v5R9nYh, flag: metroRequire.MANAGE_MESSAGES };
  const str12 = metroRequire.MANAGE_MESSAGES;
  const str52 = str12.toString();
  intl19 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    v5R9nYh = tmp8(1126).t["5R9nYh"];
  } else if (constants.GUILD_ANNOUNCEMENT === type) {
    const intl20 = tmp8(1126).intl;
    const format2 = intl20.format;
    const obj18 = { articleURL: obj19.getArticleURL(hasOwnProperty.ANNOUNCEMENT_CHANNELS) };
    const XRxOo0 = tmp8(1126).t.XRxOo0;
    obj19 = HelpdeskUtilsDefault;
    v5R9nYh = format2(XRxOo0, obj18);
  } else {
    v5R9nYh = tmp8(1126).t["SeA+G9"];
  }
  obj2[str52] = obj17;
  const obj20 = { title: intl21.string(tmp10(1126).t.Y5BI39), description: gmbD87, flag: metroRequire.PIN_MESSAGES };
  const str13 = metroRequire.PIN_MESSAGES;
  const str53 = str13.toString();
  intl21 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    gmbD87 = tmp10(1126).t.gmbD87;
  } else {
    gmbD87 = tmp10(1126).t["0l2EjL"];
  }
  obj2[str53] = obj20;
  const obj21 = { title: intl22.string(tmp10(1126).t.kqcjeV), description: Ha1xbw, flag: metroRequire.BYPASS_SLOWMODE };
  const str14 = metroRequire.BYPASS_SLOWMODE;
  const str54 = str14.toString();
  intl22 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    Ha1xbw = tmp10(1126).t.C4t1Xu;
  } else {
    Ha1xbw = tmp10(1126).t.Ha1xbw;
  }
  obj2[str54] = obj21;
  const obj22 = { title: intl23.string(tmp10(1126).t.Aj9ruN), description: qEbw4W, flag: metroRequire.MANAGE_OFFICIAL_MESSAGES };
  const str15 = metroRequire.MANAGE_OFFICIAL_MESSAGES;
  const str55 = str15.toString();
  intl23 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    qEbw4W = tmp10(1126).t["Pf0e/Q"];
  } else {
    qEbw4W = tmp10(1126).t.qEbw4W;
  }
  obj2[str55] = obj22;
  const GUILD_THREADS_ONLY2 = constants2.GUILD_THREADS_ONLY;
  const str16 = metroRequire.READ_MESSAGE_HISTORY;
  const str56 = str16.toString();
  const hasItem = GUILD_THREADS_ONLY2.has(type);
  const intl24 = tmp10(1126).intl;
  const string = intl24.string;
  const t = tmp10(1126).t;
  if (hasItem) {
    stringResult4 = string(t["0RQwtn"]);
  } else {
    stringResult4 = string(t.l9ufaR);
  }
  const obj23 = { title: stringResult4, description: RqCc7i, flag: metroRequire.READ_MESSAGE_HISTORY };
  if (constants.GUILD_CATEGORY === type) {
    RqCc7i = tmp8(1126).t["cJRv/g"];
  } else if (constants.GUILD_VOICE === type) {
    let prop1;
    const getTextInVoiceReadMessageHistoryChannelPermissionText = GuildTiVPlatformUtilsDefault.getTextInVoiceReadMessageHistoryChannelPermissionText;
    GuildTiVPlatformUtilsDefault;
    if (createPostsDisabled != null) {
      prop1 = createPostsDisabled.readMessageHistoryDisabled;
    }
    RqCc7i = getTextInVoiceReadMessageHistoryChannelPermissionText(prop1);
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        RqCc7i = tmp8(1126).t.cuMfH0;
      }
    }
    RqCc7i = tmp8(1126).t.RqCc7i;
  }
  obj2[str56] = obj23;
  const obj24 = { title: intl25.string(tmp10(1126).t.mMbwh7), description: CpakGz, flag: metroRequire.SEND_TTS_MESSAGES };
  const str17 = metroRequire.SEND_TTS_MESSAGES;
  const str57 = str17.toString();
  intl25 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    CpakGz = tmp10(1126).t.b7pc9U;
  } else {
    CpakGz = tmp10(1126).t.CpakGz;
  }
  obj2[str57] = obj24;
  const obj25 = { title: intl26.string(tmp10(1126).t.nkoPOt), description: ReG3gG, flag: metroRequire.USE_APPLICATION_COMMANDS };
  const str18 = metroRequire.USE_APPLICATION_COMMANDS;
  const str58 = str18.toString();
  intl26 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    ReG3gG = tmp10(1126).t["D+qW0J"];
  } else {
    ReG3gG = tmp10(1126).t.ReG3gG;
  }
  obj2[str58] = obj25;
  const obj26 = { title: intl27.string(tmp10(1126).t.WlWSBT), description: BhEo9V, flag: metroRequire.SEND_VOICE_MESSAGES };
  const str19 = metroRequire.SEND_VOICE_MESSAGES;
  const str59 = str19.toString();
  intl27 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    BhEo9V = tmp10(1126).t.gavGfv;
  } else {
    BhEo9V = tmp10(1126).t.BhEo9V;
  }
  obj2[str59] = obj26;
  const obj27 = { title: intl28.string(tmp10(1126).t.UMQ7Ww), description: ckKKIO, flag: metroRequire.SEND_POLLS };
  const str20 = metroRequire.SEND_POLLS;
  const str60 = str20.toString();
  intl28 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    ckKKIO = tmp10(1126).t["18Ya7L"];
  } else {
    ckKKIO = tmp10(1126).t.ckKKIO;
  }
  obj2[str60] = obj27;
  const obj28 = { title: intl29.string(tmp10(1126).t.S0W8Z5), description: XcrieN, flag: metroRequire.CONNECT };
  const str21 = metroRequire.CONNECT;
  const str61 = str21.toString();
  intl29 = tmp10(1126).intl;
  const GUILD_CATEGORY2 = constants.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY2 === type) {
      XcrieN = tmp8(1126).t.XcrieN;
    } else if (constants.GUILD_STAGE_VOICE === type) {
      XcrieN = tmp8(1126).t.SOFNhP;
    } else {
      if (constants.GUILD_TEXT !== type) {
        if (constants.GUILD_FORUM !== type) {
          if (constants.GUILD_MEDIA !== type) {
            XcrieN = tmp8(1126).t.j4AyO8;
          }
        }
      }
      XcrieN = tmp8(1126).t.LsS8xT;
    }
  } else if (GUILD_CATEGORY2 === type) {
    XcrieN = tmp8(1126).t.stA0Hl;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    XcrieN = tmp8(1126).t["G9+Qie"];
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          XcrieN = tmp8(1126).t.HvG8uR;
        }
      }
    }
    XcrieN = tmp8(1126).t["QU/Rw8"];
  }
  obj2[str61] = obj28;
  const obj29 = { title: intl30.string(tmp10(1126).t["8w1tIR"]), description: iXhS6R, flag: metroRequire.SPEAK };
  const str22 = metroRequire.SPEAK;
  const str62 = str22.toString();
  intl30 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    iXhS6R = tmp8(1126).t.iXhS6R;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    iXhS6R = tmp8(1126).t.a8n741;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          iXhS6R = tmp8(1126).t["568E6d"];
        }
      }
    }
    iXhS6R = tmp8(1126).t["+VXsJI"];
  }
  obj2[str62] = obj29;
  const obj30 = { title: intl31.string(tmp10(1126).t.FlNoSV), description: AuEQEC, flag: metroRequire.STREAM };
  const str23 = metroRequire.STREAM;
  const str63 = str23.toString();
  intl31 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    AuEQEC = tmp8(1126).t["ryG0/J"];
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (constants.GUILD_STAGE_VOICE === type) {
            AuEQEC = tmp8(1126).t.swJcN6;
          } else {
            AuEQEC = tmp8(1126).t.RY8rIc;
          }
        }
      }
    }
    AuEQEC = tmp8(1126).t.AuEQEC;
  }
  obj2[str63] = obj30;
  const obj31 = { title: intl32.string(tmp10(1126).t.rLSGeh), description: RyEwla, flag: metroRequire.USE_EMBEDDED_ACTIVITIES };
  const str24 = metroRequire.USE_EMBEDDED_ACTIVITIES;
  const str64 = str24.toString();
  intl32 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    RyEwla = tmp8(1126).t.maNzCO;
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        RyEwla = tmp8(1126).t.qinvMU;
      }
    }
    RyEwla = tmp8(1126).t.RyEwla;
  }
  obj2[str64] = obj31;
  const obj32 = { title: intl33.string(tmp10(1126).t["3TzAk0"]), description: qPUPip, flag: metroRequire.USE_EXTERNAL_APPS };
  const str25 = metroRequire.USE_EXTERNAL_APPS;
  const str65 = str25.toString();
  intl33 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    qPUPip = tmp8(1126).t.bgIY3H;
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        qPUPip = tmp8(1126).t.czqMLp;
      }
    }
    qPUPip = tmp8(1126).t.qPUPip;
  }
  obj2[str65] = obj32;
  const obj33 = { title: intl34.string(tmp10(1126).t.Bco7NG), description: format5Result, flag: metroRequire.USE_SOUNDBOARD };
  const str26 = metroRequire.USE_SOUNDBOARD;
  const str66 = str26.toString();
  intl34 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    const intl37 = tmp8(1126).intl;
    const format5 = intl37.format;
    const obj34 = { helpCenterArticle: obj39.getArticleURL(hasOwnProperty.SOUNDBOARD) };
    const prop2 = tmp8(1126).t["0kBp/0"];
    obj39 = HelpdeskUtilsDefault;
    format5Result = format5(prop2, obj34);
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          const intl35 = tmp8(1126).intl;
          const format3 = intl35.format;
          const obj36 = { helpCenterArticle: obj35.getArticleURL(hasOwnProperty.SOUNDBOARD) };
          const GEi6Ym = tmp8(1126).t.GEi6Ym;
          obj35 = HelpdeskUtilsDefault;
          format5Result = format3(GEi6Ym, obj36);
        }
      }
    }
    const intl36 = tmp8(1126).intl;
    const format4 = intl36.format;
    const obj38 = { helpCenterArticle: obj37.getArticleURL(hasOwnProperty.SOUNDBOARD) };
    const v6eYqU1 = tmp8(1126).t["6eYqU1"];
    obj37 = HelpdeskUtilsDefault;
    format5Result = format4(v6eYqU1, obj38);
  }
  obj2[str66] = obj33;
  const obj40 = { title: intl38.string(tmp10(1126).t.pwaVJ6), description: tmp10(1126).t.qDpPtX, flag: metroRequire.USE_EXTERNAL_SOUNDS };
  const str27 = metroRequire.USE_EXTERNAL_SOUNDS;
  const str67 = str27.toString();
  intl38 = tmp10(1126).intl;
  obj2[str67] = obj40;
  const obj41 = { title: intl39.string(tmp10(1126).t["08zAV7"]), description: fUYPly, flag: metroRequire.USE_VAD };
  const str28 = metroRequire.USE_VAD;
  const str68 = str28.toString();
  intl39 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    fUYPly = tmp8(1126).t.fUYPly;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    fUYPly = tmp8(1126).t.BJKqsW;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          fUYPly = tmp8(1126).t.s2eihY;
        }
      }
    }
    fUYPly = tmp8(1126).t["3GJwsc"];
  }
  obj2[str68] = obj41;
  const obj42 = { title: intl40.string(tmp10(1126).t.BVK71i), description: format8Result, flag: metroRequire.PRIORITY_SPEAKER };
  const str29 = metroRequire.PRIORITY_SPEAKER;
  const str69 = str29.toString();
  intl40 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    const intl45 = tmp8(1126).intl;
    const format8 = intl45.format;
    const obj43 = { keybind: intl46.string(tmp8(1126).t.DkSwJ2) };
    const g5MzON = tmp8(1126).t.g5MzON;
    intl46 = tmp8(1126).intl;
    format8Result = format8(g5MzON, obj43);
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          const intl41 = tmp8(1126).intl;
          const format6 = intl41.format;
          const obj44 = { keybind: intl42.string(tmp8(1126).t.DkSwJ2) };
          const Ij0yKX = tmp8(1126).t.Ij0yKX;
          intl42 = tmp8(1126).intl;
          format8Result = format6(Ij0yKX, obj44);
        }
      }
    }
    const intl43 = tmp8(1126).intl;
    const format7 = intl43.format;
    const obj45 = { keybind: intl44.string(tmp8(1126).t.DkSwJ2) };
    const v4nbjL0 = tmp8(1126).t["4nbjL0"];
    intl44 = tmp8(1126).intl;
    format8Result = format7(v4nbjL0, obj45);
  }
  obj2[str69] = obj42;
  const obj46 = { title: intl47.string(tmp10(1126).t["8EI30/"]), description: KYDG2K, flag: metroRequire.MUTE_MEMBERS };
  const str30 = metroRequire.MUTE_MEMBERS;
  const str70 = str30.toString();
  intl47 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    KYDG2K = tmp8(1126).t.bcuobK;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    KYDG2K = tmp8(1126).t.EbvdH9;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          KYDG2K = tmp8(1126).t.LW5C9P;
        }
      }
    }
    KYDG2K = tmp8(1126).t.KYDG2K;
  }
  obj2[str70] = obj46;
  const obj47 = { title: intl48.string(tmp10(1126).t["9L47Fr"]), description: amZ5vn, flag: metroRequire.DEAFEN_MEMBERS };
  const str31 = metroRequire.DEAFEN_MEMBERS;
  const str71 = str31.toString();
  intl48 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    amZ5vn = tmp8(1126).t.amZ5vn;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          amZ5vn = tmp8(1126).t.UAdIxo;
        }
      }
    }
    amZ5vn = tmp8(1126).t["d+i1nX"];
  }
  obj2[str71] = obj47;
  const obj48 = { title: intl49.string(tmp10(1126).t.YtjJPQ), description: cbdQy2, flag: metroRequire.MOVE_MEMBERS };
  const str32 = metroRequire.MOVE_MEMBERS;
  const str72 = str32.toString();
  intl49 = tmp10(1126).intl;
  if (constants.GUILD_CATEGORY === type) {
    cbdQy2 = tmp8(1126).t.XmoyRD;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    cbdQy2 = tmp8(1126).t.bizKz6;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          cbdQy2 = tmp8(1126).t.nSD1ah;
        }
      }
    }
    cbdQy2 = tmp8(1126).t.cbdQy2;
  }
  obj2[str72] = obj48;
  const obj49 = { title: intl50.string(tmp10(1126).t["5kicT2"]), description: uzlYFE, flag: metroRequire.REQUEST_TO_SPEAK };
  const str33 = metroRequire.REQUEST_TO_SPEAK;
  const str73 = str33.toString();
  intl50 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    uzlYFE = tmp10(1126).t.T1lMSl;
  } else {
    uzlYFE = tmp10(1126).t.uzlYFE;
  }
  obj2[str73] = obj49;
  const GUILD_THREADS_ONLY3 = constants2.GUILD_THREADS_ONLY;
  const str34 = metroRequire.MANAGE_THREADS;
  const str74 = str34.toString();
  if (GUILD_THREADS_ONLY3.has(type)) {
    const intl53 = tmp10(1126).intl;
    stringResult5 = intl53.string(tmp10(1126).t.ossiZD);
  } else if (type === constants.GUILD_CATEGORY) {
    const intl52 = tmp10(1126).intl;
    stringResult5 = intl52.string(tmp10(1126).t.QKe7Q3);
  } else {
    const intl51 = tmp10(1126).intl;
    stringResult5 = intl51.string(tmp10(1126).t.kEqgr7);
  }
  const obj50 = { title: stringResult5, description: S31soU, flag: metroRequire.MANAGE_THREADS };
  if (constants.GUILD_CATEGORY === type) {
    S31soU = tmp8(1126).t.S31soU;
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        S31soU = tmp8(1126).t.yvan0j;
      }
    }
    S31soU = tmp8(1126).t["XLi/jG"];
  }
  obj2[str74] = obj50;
  const obj51 = { title: intl54.string(tmp10(1126).t["25rKnX"]), description: prop3, flag: metroRequire.CREATE_PUBLIC_THREADS };
  const str35 = metroRequire.CREATE_PUBLIC_THREADS;
  const str75 = str35.toString();
  intl54 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    prop3 = tmp10(1126).t["+M1yLj"];
  } else {
    prop3 = tmp10(1126).t["5SDtGB"];
  }
  obj2[str75] = obj51;
  const obj52 = { title: intl55.string(tmp10(1126).t.QwbTSa), description: Chg2zd, flag: metroRequire.CREATE_PRIVATE_THREADS };
  const str36 = metroRequire.CREATE_PRIVATE_THREADS;
  const str76 = str36.toString();
  intl55 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    Chg2zd = tmp10(1126).t["hBS/zn"];
  } else {
    Chg2zd = tmp10(1126).t.Chg2zd;
  }
  obj2[str76] = obj52;
  const GUILD_THREADS_ONLY4 = constants2.GUILD_THREADS_ONLY;
  const str37 = metroRequire.SEND_MESSAGES_IN_THREADS;
  const str77 = str37.toString();
  if (GUILD_THREADS_ONLY4.has(type)) {
    const intl58 = tmp10(1126).intl;
    stringResult6 = intl58.string(tmp10(1126).t.fqhqWm);
  } else if (type === constants.GUILD_CATEGORY) {
    const intl57 = tmp10(1126).intl;
    stringResult6 = intl57.string(tmp10(1126).t["5QlVGy"]);
  } else {
    const intl56 = tmp10(1126).intl;
    stringResult6 = intl56.string(tmp10(1126).t.fTE74g);
  }
  const obj53 = { title: stringResult6, description: XTnrPH, flag: metroRequire.SEND_MESSAGES_IN_THREADS };
  if (constants.GUILD_CATEGORY === type) {
    XTnrPH = tmp8(1126).t.DlIVcN;
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        XTnrPH = tmp8(1126).t.xHO6Me;
      }
    }
    XTnrPH = tmp8(1126).t.XTnrPH;
  }
  obj2[str77] = obj53;
  const obj54 = { title: intl59.string(tmp10(1126).t.HIgA5a), description: CP2sz4, flag: metroRequire.MANAGE_EVENTS };
  const str38 = metroRequire.MANAGE_EVENTS;
  const str78 = str38.toString();
  intl59 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    CP2sz4 = tmp10(1126).t.CP2sz4;
  } else {
    CP2sz4 = tmp10(1126).t["4pO/TY"];
  }
  obj2[str78] = obj54;
  const obj55 = { title: intl60.string(tmp10(1126).t.qyjZua), description: sPoBLa, flag: metroRequire.CREATE_EVENTS };
  const str39 = metroRequire.CREATE_EVENTS;
  const str79 = str39.toString();
  intl60 = tmp10(1126).intl;
  if (type === constants.GUILD_CATEGORY) {
    sPoBLa = tmp10(1126).t.XpibmC;
  } else {
    sPoBLa = tmp10(1126).t.sPoBLa;
  }
  obj2[str79] = obj55;
  const obj56 = { title: intl61.string(tmp10(1126).t.VBwkUf), description: enableHangoutWindow ? t2.CYcJ6H : t2.C6BzXx, flag: metroRequire.SET_VOICE_CHANNEL_STATUS };
  const str40 = metroRequire.SET_VOICE_CHANNEL_STATUS;
  const str80 = str40.toString();
  intl61 = tmp10(1126).intl;
  enableHangoutWindow = undefined;
  if (createPostsDisabled != null) {
    enableHangoutWindow = createPostsDisabled.enableHangoutWindow;
  }
  t2 = tmp10(1126).t;
  obj2[str80] = obj56;
  return obj2;
};