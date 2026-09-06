// === Module 8401: ChannelPermissionsConstants ===

// Module 8401 (ChannelPermissionsConstants)
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import ForumPlatformUtilsDefault from "ForumPlatformUtils" /* 8402 */;
import GuildTiVPlatformUtilsDefault from "GuildTiVPlatformUtils" /* 8403 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ChannelTypes: c3, ChannelTypesSets: closure_4, HelpdeskArticles: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionsConstants.tsx");

export const RowType = { EMPTY_STATE: 0, [0]: "EMPTY_STATE", ADMINISTRATOR: 1, [1]: "ADMINISTRATOR", ROLE: 2, [2]: "ROLE", OWNER: 3, [3]: "OWNER", MEMBER: 4, [4]: "MEMBER", USER: 5, [5]: "USER", GUILD: 6, [6]: "GUILD", APP_CHANNEL_APP: 7, [7]: "APP_CHANNEL_APP" };
export const AudienceSelectorSections = { ROLES: 0, [0]: "ROLES", MEMBERS: 1, [1]: "MEMBERS", USERS: 2, [2]: "USERS", GUILDS: 3, [3]: "GUILDS" };
export const MEMBER_REQUEST_COUNT = 20;
export const ADVANCED_MODE_ON_KEY = "channelPermissionSettingsAdvancedModeOn";
export const TrackExposureLocations = { SETTINGS_PAGE: "settings-page", MEMBERS_LIST: "members-list", EMPTY_STATE: "empty-state", CREATE_CHANNEL: "create-channel" };
export const SettingMode = { BASIC: "basic", ADVANCED: "advanced" };
export const getChannelPermissionSpecMap = function getChannelPermissionSpecMap(type, arg1, createPostsDisabled) {
  type = type.type;
  let str = constants4.VIEW_CHANNEL;
  str = str.toString();
  if (type === constants.GUILD_CATEGORY) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.uV83yi);
    let tmp8 = require;
    let tmp10 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["W/A4Qp"]);
    tmp8 = require;
    tmp10 = require;
  }
  let obj = { title: stringResult, description: null, flag: null };
  const GUILD_CATEGORY = constants.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY === type) {
      let M2iEy3 = tmp8(1114).t["o/vBzj"];
    } else {
      if (constants.GUILD_VOICE !== type) {
        if (constants.GUILD_STAGE_VOICE !== type) {
          M2iEy3 = tmp8(1114).t["3jG0Bo"];
        }
      }
      M2iEy3 = tmp8(1114).t.ejL1Wo;
    }
  } else if (type === GUILD_CATEGORY) {
    M2iEy3 = tmp8(1114).t.SzosGs;
  } else {
    M2iEy3 = tmp8(1114).t.M2iEy3;
  }
  obj = { [str]: obj, description: M2iEy3 };
  ({ VIEW_CHANNEL: obj.flag, MANAGE_CHANNELS } = constants4);
  if (type === constants.GUILD_CATEGORY) {
    const intl4 = tmp10(1114).intl;
    let stringResult1 = intl4.string(tmp10(1114).t["9qLtWs"]);
  } else {
    const intl3 = tmp10(1114).intl;
    stringResult1 = intl3.string(tmp10(1114).t.nAw15L);
  }
  obj = { title: stringResult1, description: null, flag: null };
  if (constants.GUILD_CATEGORY === type) {
    let ydL28i = tmp8(1114).t.KJ2JnG;
  } else if (constants.GUILD_VOICE === type) {
    ydL28i = tmp8(1114).t["+gl2ne"];
  } else if (constants.GUILD_STAGE_VOICE === type) {
    ydL28i = tmp8(1114).t.SDX669;
  } else {
    ydL28i = tmp8(1114).t.ydL28i;
  }
  obj.description = ydL28i;
  obj.flag = constants4.MANAGE_CHANNELS;
  obj[MANAGE_CHANNELS.toString()] = obj;
  let str2 = constants4.MANAGE_ROLES;
  const obj1 = { title: null, description: null, flag: null };
  str2 = str2.toString();
  const intl5 = tmp10(1114).intl;
  obj1.title = intl5.string(tmp10(1114).t.ICb6am);
  if (constants.GUILD_CATEGORY === type) {
    let hOMXOv = tmp8(1114).t.TyyCMD;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    hOMXOv = tmp8(1114).t.hcw4mx;
  } else {
    hOMXOv = tmp8(1114).t.hOMXOv;
  }
  obj1.description = hOMXOv;
  obj1.flag = constants4.MANAGE_ROLES;
  obj[str2] = obj1;
  let str3 = constants4.MANAGE_WEBHOOKS;
  const obj2 = { title: null, description: null, flag: null };
  str3 = str3.toString();
  const intl6 = tmp10(1114).intl;
  obj2.title = intl6.string(tmp10(1114).t["/ADKmM"]);
  if (type === constants.GUILD_CATEGORY) {
    let CYBZry = tmp10(1114).t["K5+ZZ7"];
  } else {
    CYBZry = tmp10(1114).t.CYBZry;
  }
  obj2.description = CYBZry;
  obj2.flag = constants4.MANAGE_WEBHOOKS;
  obj[str3] = obj2;
  let str4 = constants4.CREATE_INSTANT_INVITE;
  const obj3 = { title: null, description: null, flag: null };
  str4 = str4.toString();
  const intl7 = tmp10(1114).intl;
  obj3.title = intl7.string(tmp10(1114).t.zJrgTG);
  if (constants.GUILD_CATEGORY === type) {
    let lUCs1n = tmp8(1114).t["3YFAAX"];
  } else {
    if (constants.GUILD_VOICE !== type) {
      if (constants.GUILD_STAGE_VOICE !== type) {
        lUCs1n = tmp8(1114).t.q4g2aI;
      }
    }
    lUCs1n = tmp8(1114).t.lUCs1n;
  }
  obj3.description = lUCs1n;
  obj3.flag = constants4.CREATE_INSTANT_INVITE;
  obj[str4] = obj3;
  let str5 = constants4.SEND_MESSAGES;
  const GUILD_THREADS_ONLY = constants2.GUILD_THREADS_ONLY;
  str5 = str5.toString();
  if (GUILD_THREADS_ONLY.has(type)) {
    const intl10 = tmp10(1114).intl;
    let stringResult2 = intl10.string(tmp10(1114).t.nJwAHX);
  } else if (type === constants.GUILD_CATEGORY) {
    const intl9 = tmp10(1114).intl;
    stringResult2 = intl9.string(tmp10(1114).t.S1VOwd);
  } else {
    const intl8 = tmp10(1114).intl;
    stringResult2 = intl8.string(tmp10(1114).t.T32rkC);
  }
  const obj4 = { title: stringResult2, description: null, flag: null };
  if (constants.GUILD_CATEGORY === type) {
    let WQ6zpT = tmp8(1114).t.IjeLuu;
  } else if (constants.GUILD_FORUM === type) {
    createPostsDisabled = undefined;
    if (createPostsDisabled != null) {
      createPostsDisabled = createPostsDisabled.createPostsDisabled;
    }
    if (createPostsDisabled) {
      if (!type.isMediaChannel()) {
        let obj10 = ForumPlatformUtilsDefault;
        let LG9VAi = obj10.getForumChannelPermissionText();
      }
      WQ6zpT = LG9VAi;
    }
    LG9VAi = tmp8(1114).t.LG9VAi;
  } else if (constants.GUILD_MEDIA === type) {
    WQ6zpT = tmp8(1114).t.LG9VAi;
  } else if (constants.GUILD_ANNOUNCEMENT === type) {
    const intl11 = tmp8(1114).intl;
    const obj5 = { articleURL: null };
    let obj9 = HelpdeskUtilsDefault;
    obj5.articleURL = obj9.getArticleURL(constants3.ANNOUNCEMENT_CHANNELS);
    WQ6zpT = intl11.format(tmp8(1114).t.WFwfSD, obj5);
  } else if (constants.GUILD_VOICE === type) {
    let obj7 = GuildTiVPlatformUtilsDefault;
    let sendMessagesDisabled;
    if (createPostsDisabled != null) {
      sendMessagesDisabled = createPostsDisabled.sendMessagesDisabled;
    }
    WQ6zpT = obj7.getTextInVoiceSendMessageChannelPermissionText(sendMessagesDisabled);
  } else {
    WQ6zpT = tmp8(1114).t.WQ6zpT;
  }
  obj4.description = WQ6zpT;
  obj4.flag = constants4.SEND_MESSAGES;
  obj[str5] = obj4;
  let str6 = constants4.EMBED_LINKS;
  const obj6 = { title: null, description: null, flag: null };
  str6 = str6.toString();
  const intl12 = tmp10(1114).intl;
  obj6.title = intl12.string(tmp10(1114).t["969dEL"]);
  if (type === constants.GUILD_CATEGORY) {
    let XFFhA0 = tmp10(1114).t["7zlUay"];
  } else {
    XFFhA0 = tmp10(1114).t.XFFhA0;
  }
  obj6.description = XFFhA0;
  obj6.flag = constants4.EMBED_LINKS;
  obj[str6] = obj6;
  let str7 = constants4.ATTACH_FILES;
  obj7 = { title: null, description: null, flag: null };
  str7 = str7.toString();
  const intl13 = tmp10(1114).intl;
  obj7.title = intl13.string(tmp10(1114).t["3AS4UM"]);
  if (type === constants.GUILD_CATEGORY) {
    let WK9r7F = tmp10(1114).t.XREf9l;
  } else {
    WK9r7F = tmp10(1114).t.WK9r7F;
  }
  obj7.description = WK9r7F;
  obj7.flag = constants4.ATTACH_FILES;
  obj[str7] = obj7;
  let str8 = constants4.ADD_REACTIONS;
  const obj8 = { title: null, description: null, flag: null };
  str8 = str8.toString();
  const intl14 = tmp10(1114).intl;
  obj8.title = intl14.string(tmp10(1114).t.yEoJAr);
  if (constants.GUILD_CATEGORY === type) {
    let PVjR1Y = tmp8(1114).t.pZT2Zh;
  } else if (constants.GUILD_VOICE === type) {
    PVjR1Y = tmp8(1114).t.xSSbIs;
  } else {
    PVjR1Y = tmp8(1114).t.PVjR1Y;
  }
  obj8.description = PVjR1Y;
  obj8.flag = constants4.ADD_REACTIONS;
  obj[str8] = obj8;
  let str9 = constants4.USE_EXTERNAL_EMOJIS;
  obj9 = { title: null, description: null, flag: null };
  str9 = str9.toString();
  const intl15 = tmp10(1114).intl;
  obj9.title = intl15.string(tmp10(1114).t["+bxf3H"]);
  if (type === constants.GUILD_CATEGORY) {
    let Qc5vOr = tmp10(1114).t.mWAbK4;
  } else {
    Qc5vOr = tmp10(1114).t.Qc5vOr;
  }
  obj9.description = Qc5vOr;
  obj9.flag = constants4.USE_EXTERNAL_EMOJIS;
  obj[str9] = obj9;
  let str10 = constants4.USE_EXTERNAL_STICKERS;
  obj10 = { title: null, description: null, flag: null };
  str10 = str10.toString();
  const intl16 = tmp10(1114).intl;
  obj10.title = intl16.string(tmp10(1114).t.ERNhYf);
  if (type === constants.GUILD_CATEGORY) {
    let VF4fZZ = tmp10(1114).t["39whJ4"];
  } else {
    VF4fZZ = tmp10(1114).t.VF4fZZ;
  }
  obj10.description = VF4fZZ;
  obj10.flag = constants4.USE_EXTERNAL_STICKERS;
  obj[str10] = obj10;
  let str11 = constants4.MENTION_EVERYONE;
  str11 = str11.toString();
  if (type === constants.GUILD_STAGE_VOICE) {
    const intl18 = tmp10(1114).intl;
    let stringResult3 = intl18.string(tmp10(1114).t.VDUAHO);
  } else {
    const intl17 = tmp10(1114).intl;
    stringResult3 = intl17.string(tmp10(1114).t.Y78KGC);
  }
  const obj11 = { title: stringResult3, description: null, flag: null };
  if (type === constants.GUILD_CATEGORY) {
    let prop = tmp10(1114).t["HOhg/B"];
  } else if (type === constants.GUILD_STAGE_VOICE) {
    prop = tmp10(1114).t.rZn1oO;
  } else {
    prop = tmp10(1114).t["6IUSdt"];
  }
  obj11.description = prop;
  obj11.flag = constants4.MENTION_EVERYONE;
  obj[str11] = obj11;
  let str12 = constants4.MANAGE_MESSAGES;
  const obj12 = { title: null, description: null, flag: null };
  str12 = str12.toString();
  const intl19 = tmp10(1114).intl;
  obj12.title = intl19.string(tmp10(1114).t["6lU9xM"]);
  if (constants.GUILD_CATEGORY === type) {
    let v5R9nYh = tmp8(1114).t["5R9nYh"];
  } else if (constants.GUILD_ANNOUNCEMENT === type) {
    const intl20 = tmp8(1114).intl;
    const obj13 = { articleURL: null };
    let obj19 = HelpdeskUtilsDefault;
    obj13.articleURL = obj19.getArticleURL(constants3.ANNOUNCEMENT_CHANNELS);
    v5R9nYh = intl20.format(tmp8(1114).t.XRxOo0, obj13);
  } else {
    v5R9nYh = tmp8(1114).t["SeA+G9"];
  }
  obj12.description = v5R9nYh;
  obj12.flag = constants4.MANAGE_MESSAGES;
  obj[str12] = obj12;
  let str13 = constants4.PIN_MESSAGES;
  const obj14 = { title: null, description: null, flag: null };
  str13 = str13.toString();
  const intl21 = tmp10(1114).intl;
  obj14.title = intl21.string(tmp10(1114).t.Y5BI39);
  if (type === constants.GUILD_CATEGORY) {
    let gmbD87 = tmp10(1114).t.gmbD87;
  } else {
    gmbD87 = tmp10(1114).t["0l2EjL"];
  }
  obj14.description = gmbD87;
  obj14.flag = constants4.PIN_MESSAGES;
  obj[str13] = obj14;
  let str14 = constants4.BYPASS_SLOWMODE;
  const obj15 = { title: null, description: null, flag: null };
  str14 = str14.toString();
  const intl22 = tmp10(1114).intl;
  obj15.title = intl22.string(tmp10(1114).t.kqcjeV);
  if (type === constants.GUILD_CATEGORY) {
    let Ha1xbw = tmp10(1114).t.C4t1Xu;
  } else {
    Ha1xbw = tmp10(1114).t.Ha1xbw;
  }
  obj15.description = Ha1xbw;
  obj15.flag = constants4.BYPASS_SLOWMODE;
  obj[str14] = obj15;
  let str15 = constants4.MANAGE_OFFICIAL_MESSAGES;
  const obj16 = { title: null, description: null, flag: null };
  str15 = str15.toString();
  const intl23 = tmp10(1114).intl;
  obj16.title = intl23.string(tmp10(1114).t.Aj9ruN);
  if (type === constants.GUILD_CATEGORY) {
    let qEbw4W = tmp10(1114).t["Pf0e/Q"];
  } else {
    qEbw4W = tmp10(1114).t.qEbw4W;
  }
  obj16.description = qEbw4W;
  obj16.flag = constants4.MANAGE_OFFICIAL_MESSAGES;
  obj[str15] = obj16;
  let str16 = constants4.READ_MESSAGE_HISTORY;
  const GUILD_THREADS_ONLY2 = constants2.GUILD_THREADS_ONLY;
  str16 = str16.toString();
  const hasItem = GUILD_THREADS_ONLY2.has(type);
  const intl24 = tmp10(1114).intl;
  const string = intl24.string;
  const t = tmp10(1114).t;
  if (hasItem) {
    let stringResult4 = string(t["0RQwtn"]);
  } else {
    stringResult4 = string(t.l9ufaR);
  }
  const obj17 = { title: stringResult4, description: null, flag: null };
  if (constants.GUILD_CATEGORY === type) {
    let RqCc7i = tmp8(1114).t["cJRv/g"];
  } else if (constants.GUILD_VOICE === type) {
    let obj24 = GuildTiVPlatformUtilsDefault;
    let prop1;
    if (createPostsDisabled != null) {
      prop1 = createPostsDisabled.readMessageHistoryDisabled;
    }
    RqCc7i = obj24.getTextInVoiceReadMessageHistoryChannelPermissionText(prop1);
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        RqCc7i = tmp8(1114).t.cuMfH0;
      }
    }
    RqCc7i = tmp8(1114).t.RqCc7i;
  }
  obj17.description = RqCc7i;
  obj17.flag = constants4.READ_MESSAGE_HISTORY;
  obj[str16] = obj17;
  let str17 = constants4.SEND_TTS_MESSAGES;
  const obj18 = { title: null, description: null, flag: null };
  str17 = str17.toString();
  const intl25 = tmp10(1114).intl;
  obj18.title = intl25.string(tmp10(1114).t.mMbwh7);
  if (type === constants.GUILD_CATEGORY) {
    let CpakGz = tmp10(1114).t.b7pc9U;
  } else {
    CpakGz = tmp10(1114).t.CpakGz;
  }
  obj18.description = CpakGz;
  obj18.flag = constants4.SEND_TTS_MESSAGES;
  obj[str17] = obj18;
  let str18 = constants4.USE_APPLICATION_COMMANDS;
  obj19 = { title: null, description: null, flag: null };
  str18 = str18.toString();
  const intl26 = tmp10(1114).intl;
  obj19.title = intl26.string(tmp10(1114).t.nkoPOt);
  if (type === constants.GUILD_CATEGORY) {
    let ReG3gG = tmp10(1114).t["D+qW0J"];
  } else {
    ReG3gG = tmp10(1114).t.ReG3gG;
  }
  obj19.description = ReG3gG;
  obj19.flag = constants4.USE_APPLICATION_COMMANDS;
  obj[str18] = obj19;
  let str19 = constants4.SEND_VOICE_MESSAGES;
  const obj20 = { title: null, description: null, flag: null };
  str19 = str19.toString();
  const intl27 = tmp10(1114).intl;
  obj20.title = intl27.string(tmp10(1114).t.WlWSBT);
  if (type === constants.GUILD_CATEGORY) {
    let BhEo9V = tmp10(1114).t.gavGfv;
  } else {
    BhEo9V = tmp10(1114).t.BhEo9V;
  }
  obj20.description = BhEo9V;
  obj20.flag = constants4.SEND_VOICE_MESSAGES;
  obj[str19] = obj20;
  let str20 = constants4.SEND_POLLS;
  const obj21 = { title: null, description: null, flag: null };
  str20 = str20.toString();
  const intl28 = tmp10(1114).intl;
  obj21.title = intl28.string(tmp10(1114).t.UMQ7Ww);
  if (type === constants.GUILD_CATEGORY) {
    let ckKKIO = tmp10(1114).t["18Ya7L"];
  } else {
    ckKKIO = tmp10(1114).t.ckKKIO;
  }
  obj21.description = ckKKIO;
  obj21.flag = constants4.SEND_POLLS;
  obj[str20] = obj21;
  let str21 = constants4.CONNECT;
  const obj22 = { title: null, description: null, flag: null };
  str21 = str21.toString();
  const intl29 = tmp10(1114).intl;
  obj22.title = intl29.string(tmp10(1114).t.S0W8Z5);
  const GUILD_CATEGORY2 = constants.GUILD_CATEGORY;
  if (arg1) {
    if (GUILD_CATEGORY2 === type) {
      let XcrieN = tmp8(1114).t.XcrieN;
    } else if (constants.GUILD_STAGE_VOICE === type) {
      XcrieN = tmp8(1114).t.SOFNhP;
    } else {
      if (constants.GUILD_TEXT !== type) {
        if (constants.GUILD_FORUM !== type) {
          if (constants.GUILD_MEDIA !== type) {
            XcrieN = tmp8(1114).t.j4AyO8;
          }
        }
      }
      XcrieN = tmp8(1114).t.LsS8xT;
    }
  } else if (GUILD_CATEGORY2 === type) {
    XcrieN = tmp8(1114).t.stA0Hl;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    XcrieN = tmp8(1114).t["G9+Qie"];
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          XcrieN = tmp8(1114).t.HvG8uR;
        }
      }
    }
    XcrieN = tmp8(1114).t["QU/Rw8"];
  }
  obj22.description = XcrieN;
  obj22.flag = constants4.CONNECT;
  obj[str21] = obj22;
  let str22 = constants4.SPEAK;
  const obj23 = { title: null, description: null, flag: null };
  str22 = str22.toString();
  const intl30 = tmp10(1114).intl;
  obj23.title = intl30.string(tmp10(1114).t["8w1tIR"]);
  if (constants.GUILD_CATEGORY === type) {
    let iXhS6R = tmp8(1114).t.iXhS6R;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    iXhS6R = tmp8(1114).t.a8n741;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          iXhS6R = tmp8(1114).t["568E6d"];
        }
      }
    }
    iXhS6R = tmp8(1114).t["+VXsJI"];
  }
  obj23.description = iXhS6R;
  obj23.flag = constants4.SPEAK;
  obj[str22] = obj23;
  let str23 = constants4.STREAM;
  obj24 = { title: null, description: null, flag: null };
  str23 = str23.toString();
  const intl31 = tmp10(1114).intl;
  obj24.title = intl31.string(tmp10(1114).t.FlNoSV);
  if (constants.GUILD_CATEGORY === type) {
    let AuEQEC = tmp8(1114).t["ryG0/J"];
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          if (constants.GUILD_STAGE_VOICE === type) {
            AuEQEC = tmp8(1114).t.swJcN6;
          } else {
            AuEQEC = tmp8(1114).t.RY8rIc;
          }
        }
      }
    }
    AuEQEC = tmp8(1114).t.AuEQEC;
  }
  obj24.description = AuEQEC;
  obj24.flag = constants4.STREAM;
  obj[str23] = obj24;
  let str24 = constants4.USE_EMBEDDED_ACTIVITIES;
  const obj25 = { title: null, description: null, flag: null };
  str24 = str24.toString();
  const intl32 = tmp10(1114).intl;
  obj25.title = intl32.string(tmp10(1114).t.rLSGeh);
  if (constants.GUILD_CATEGORY === type) {
    let RyEwla = tmp8(1114).t.maNzCO;
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        RyEwla = tmp8(1114).t.qinvMU;
      }
    }
    RyEwla = tmp8(1114).t.RyEwla;
  }
  obj25.description = RyEwla;
  obj25.flag = constants4.USE_EMBEDDED_ACTIVITIES;
  obj[str24] = obj25;
  let str25 = constants4.USE_EXTERNAL_APPS;
  const obj26 = { title: null, description: null, flag: null };
  str25 = str25.toString();
  const intl33 = tmp10(1114).intl;
  obj26.title = intl33.string(tmp10(1114).t["3TzAk0"]);
  if (constants.GUILD_CATEGORY === type) {
    let qPUPip = tmp8(1114).t.bgIY3H;
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        qPUPip = tmp8(1114).t.czqMLp;
      }
    }
    qPUPip = tmp8(1114).t.qPUPip;
  }
  obj26.description = qPUPip;
  obj26.flag = constants4.USE_EXTERNAL_APPS;
  obj[str25] = obj26;
  let str26 = constants4.USE_SOUNDBOARD;
  const obj27 = { title: null, description: null, flag: null };
  str26 = str26.toString();
  const intl34 = tmp10(1114).intl;
  obj27.title = intl34.string(tmp10(1114).t.Bco7NG);
  if (constants.GUILD_CATEGORY === type) {
    const intl37 = tmp8(1114).intl;
    const obj28 = { helpCenterArticle: null };
    let obj40 = HelpdeskUtilsDefault;
    obj28.helpCenterArticle = obj40.getArticleURL(constants3.SOUNDBOARD);
    let formatResult = intl37.format(tmp8(1114).t["0kBp/0"], obj28);
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          const intl35 = tmp8(1114).intl;
          const obj29 = { helpCenterArticle: null };
          let obj36 = HelpdeskUtilsDefault;
          obj29.helpCenterArticle = obj36.getArticleURL(constants3.SOUNDBOARD);
          formatResult = intl35.format(tmp8(1114).t.GEi6Ym, obj29);
        }
      }
    }
    const intl36 = tmp8(1114).intl;
    const obj30 = { helpCenterArticle: null };
    let obj38 = HelpdeskUtilsDefault;
    obj30.helpCenterArticle = obj38.getArticleURL(constants3.SOUNDBOARD);
    formatResult = intl36.format(tmp8(1114).t["6eYqU1"], obj30);
  }
  obj27.description = formatResult;
  obj27.flag = constants4.USE_SOUNDBOARD;
  obj[str26] = obj27;
  let str27 = constants4.USE_EXTERNAL_SOUNDS;
  const obj31 = { title: null, description: null, flag: null };
  str27 = str27.toString();
  const intl38 = tmp10(1114).intl;
  obj31.title = intl38.string(tmp10(1114).t.pwaVJ6);
  obj31.description = tmp10(1114).t.qDpPtX;
  obj31.flag = constants4.USE_EXTERNAL_SOUNDS;
  obj[str27] = obj31;
  let str28 = constants4.USE_VAD;
  const obj32 = { title: null, description: null, flag: null };
  str28 = str28.toString();
  const intl39 = tmp10(1114).intl;
  obj32.title = intl39.string(tmp10(1114).t["08zAV7"]);
  if (constants.GUILD_CATEGORY === type) {
    let fUYPly = tmp8(1114).t.fUYPly;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    fUYPly = tmp8(1114).t.BJKqsW;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          fUYPly = tmp8(1114).t.s2eihY;
        }
      }
    }
    fUYPly = tmp8(1114).t["3GJwsc"];
  }
  obj32.description = fUYPly;
  obj32.flag = constants4.USE_VAD;
  obj[str28] = obj32;
  let str29 = constants4.PRIORITY_SPEAKER;
  const obj33 = { title: null, description: null, flag: null };
  str29 = str29.toString();
  const intl40 = tmp10(1114).intl;
  obj33.title = intl40.string(tmp10(1114).t.BVK71i);
  if (constants.GUILD_CATEGORY === type) {
    const intl45 = tmp8(1114).intl;
    const obj34 = { keybind: null };
    const intl46 = tmp8(1114).intl;
    obj34.keybind = intl46.string(tmp8(1114).t.DkSwJ2);
    let formatResult1 = intl45.format(tmp8(1114).t.g5MzON, obj34);
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          const intl41 = tmp8(1114).intl;
          const obj35 = { keybind: null };
          const intl42 = tmp8(1114).intl;
          obj35.keybind = intl42.string(tmp8(1114).t.DkSwJ2);
          formatResult1 = intl41.format(tmp8(1114).t.Ij0yKX, obj35);
        }
      }
    }
    const intl43 = tmp8(1114).intl;
    obj36 = { keybind: null };
    const intl44 = tmp8(1114).intl;
    obj36.keybind = intl44.string(tmp8(1114).t.DkSwJ2);
    formatResult1 = intl43.format(tmp8(1114).t["4nbjL0"], obj36);
  }
  obj33.description = formatResult1;
  obj33.flag = constants4.PRIORITY_SPEAKER;
  obj[str29] = obj33;
  let str30 = constants4.MUTE_MEMBERS;
  const obj37 = { title: null, description: null, flag: null };
  str30 = str30.toString();
  const intl47 = tmp10(1114).intl;
  obj37.title = intl47.string(tmp10(1114).t["8EI30/"]);
  if (constants.GUILD_CATEGORY === type) {
    let KYDG2K = tmp8(1114).t.bcuobK;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    KYDG2K = tmp8(1114).t.EbvdH9;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          KYDG2K = tmp8(1114).t.LW5C9P;
        }
      }
    }
    KYDG2K = tmp8(1114).t.KYDG2K;
  }
  obj37.description = KYDG2K;
  obj37.flag = constants4.MUTE_MEMBERS;
  obj[str30] = obj37;
  let str31 = constants4.DEAFEN_MEMBERS;
  obj38 = { title: null, description: null, flag: null };
  str31 = str31.toString();
  const intl48 = tmp10(1114).intl;
  obj38.title = intl48.string(tmp10(1114).t["9L47Fr"]);
  if (constants.GUILD_CATEGORY === type) {
    let amZ5vn = tmp8(1114).t.amZ5vn;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          amZ5vn = tmp8(1114).t.UAdIxo;
        }
      }
    }
    amZ5vn = tmp8(1114).t["d+i1nX"];
  }
  obj38.description = amZ5vn;
  obj38.flag = constants4.DEAFEN_MEMBERS;
  obj[str31] = obj38;
  let str32 = constants4.MOVE_MEMBERS;
  const obj39 = { title: null, description: null, flag: null };
  str32 = str32.toString();
  const intl49 = tmp10(1114).intl;
  obj39.title = intl49.string(tmp10(1114).t.YtjJPQ);
  if (constants.GUILD_CATEGORY === type) {
    let cbdQy2 = tmp8(1114).t.XmoyRD;
  } else if (constants.GUILD_STAGE_VOICE === type) {
    cbdQy2 = tmp8(1114).t.bizKz6;
  } else {
    if (constants.GUILD_TEXT !== type) {
      if (constants.GUILD_FORUM !== type) {
        if (constants.GUILD_MEDIA !== type) {
          cbdQy2 = tmp8(1114).t.nSD1ah;
        }
      }
    }
    cbdQy2 = tmp8(1114).t.cbdQy2;
  }
  obj39.description = cbdQy2;
  obj39.flag = constants4.MOVE_MEMBERS;
  obj[str32] = obj39;
  let str33 = constants4.REQUEST_TO_SPEAK;
  obj40 = { title: null, description: null, flag: null };
  str33 = str33.toString();
  const intl50 = tmp10(1114).intl;
  obj40.title = intl50.string(tmp10(1114).t["5kicT2"]);
  if (type === constants.GUILD_CATEGORY) {
    let uzlYFE = tmp10(1114).t.T1lMSl;
  } else {
    uzlYFE = tmp10(1114).t.uzlYFE;
  }
  obj40.description = uzlYFE;
  obj40.flag = constants4.REQUEST_TO_SPEAK;
  obj[str33] = obj40;
  let str34 = constants4.MANAGE_THREADS;
  const GUILD_THREADS_ONLY3 = constants2.GUILD_THREADS_ONLY;
  str34 = str34.toString();
  if (GUILD_THREADS_ONLY3.has(type)) {
    const intl53 = tmp10(1114).intl;
    let stringResult5 = intl53.string(tmp10(1114).t.ossiZD);
  } else if (type === constants.GUILD_CATEGORY) {
    const intl52 = tmp10(1114).intl;
    stringResult5 = intl52.string(tmp10(1114).t.QKe7Q3);
  } else {
    const intl51 = tmp10(1114).intl;
    stringResult5 = intl51.string(tmp10(1114).t.kEqgr7);
  }
  const obj41 = { title: stringResult5, description: null, flag: null };
  if (constants.GUILD_CATEGORY === type) {
    let S31soU = tmp8(1114).t.S31soU;
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        S31soU = tmp8(1114).t.yvan0j;
      }
    }
    S31soU = tmp8(1114).t["XLi/jG"];
  }
  obj41.description = S31soU;
  obj41.flag = constants4.MANAGE_THREADS;
  obj[str34] = obj41;
  let str35 = constants4.CREATE_PUBLIC_THREADS;
  const obj42 = { title: null, description: null, flag: null };
  str35 = str35.toString();
  const intl54 = tmp10(1114).intl;
  obj42.title = intl54.string(tmp10(1114).t["25rKnX"]);
  if (type === constants.GUILD_CATEGORY) {
    let prop2 = tmp10(1114).t["+M1yLj"];
  } else {
    prop2 = tmp10(1114).t["5SDtGB"];
  }
  obj42.description = prop2;
  obj42.flag = constants4.CREATE_PUBLIC_THREADS;
  obj[str35] = obj42;
  let str36 = constants4.CREATE_PRIVATE_THREADS;
  const obj43 = { title: null, description: null, flag: null };
  str36 = str36.toString();
  const intl55 = tmp10(1114).intl;
  obj43.title = intl55.string(tmp10(1114).t.QwbTSa);
  if (type === constants.GUILD_CATEGORY) {
    let Chg2zd = tmp10(1114).t["hBS/zn"];
  } else {
    Chg2zd = tmp10(1114).t.Chg2zd;
  }
  obj43.description = Chg2zd;
  obj43.flag = constants4.CREATE_PRIVATE_THREADS;
  obj[str36] = obj43;
  let str37 = constants4.SEND_MESSAGES_IN_THREADS;
  const GUILD_THREADS_ONLY4 = constants2.GUILD_THREADS_ONLY;
  str37 = str37.toString();
  if (GUILD_THREADS_ONLY4.has(type)) {
    const intl58 = tmp10(1114).intl;
    let stringResult6 = intl58.string(tmp10(1114).t.fqhqWm);
  } else if (type === constants.GUILD_CATEGORY) {
    const intl57 = tmp10(1114).intl;
    stringResult6 = intl57.string(tmp10(1114).t["5QlVGy"]);
  } else {
    const intl56 = tmp10(1114).intl;
    stringResult6 = intl56.string(tmp10(1114).t.fTE74g);
  }
  const obj44 = { title: stringResult6, description: null, flag: null };
  if (constants.GUILD_CATEGORY === type) {
    let XTnrPH = tmp8(1114).t.DlIVcN;
  } else {
    if (constants.GUILD_FORUM !== type) {
      if (constants.GUILD_MEDIA !== type) {
        XTnrPH = tmp8(1114).t.xHO6Me;
      }
    }
    XTnrPH = tmp8(1114).t.XTnrPH;
  }
  obj44.description = XTnrPH;
  obj44.flag = constants4.SEND_MESSAGES_IN_THREADS;
  obj[str37] = obj44;
  let str38 = constants4.MANAGE_EVENTS;
  const obj45 = { title: null, description: null, flag: null };
  str38 = str38.toString();
  const intl59 = tmp10(1114).intl;
  obj45.title = intl59.string(tmp10(1114).t.HIgA5a);
  if (type === constants.GUILD_CATEGORY) {
    let CP2sz4 = tmp10(1114).t.CP2sz4;
  } else {
    CP2sz4 = tmp10(1114).t["4pO/TY"];
  }
  obj45.description = CP2sz4;
  obj45.flag = constants4.MANAGE_EVENTS;
  obj[str38] = obj45;
  let str39 = constants4.CREATE_EVENTS;
  const obj46 = { title: null, description: null, flag: null };
  str39 = str39.toString();
  const intl60 = tmp10(1114).intl;
  obj46.title = intl60.string(tmp10(1114).t.qyjZua);
  if (type === constants.GUILD_CATEGORY) {
    let sPoBLa = tmp10(1114).t.XpibmC;
  } else {
    sPoBLa = tmp10(1114).t.sPoBLa;
  }
  obj46.description = sPoBLa;
  obj46.flag = constants4.CREATE_EVENTS;
  obj[str39] = obj46;
  let str40 = constants4.SET_VOICE_CHANNEL_STATUS;
  const obj47 = { title: null, description: null, flag: null };
  str40 = str40.toString();
  const intl61 = tmp10(1114).intl;
  obj47.title = intl61.string(tmp10(1114).t.VBwkUf);
  let enableHangoutWindow;
  if (createPostsDisabled != null) {
    enableHangoutWindow = createPostsDisabled.enableHangoutWindow;
  }
  const t2 = tmp10(1114).t;
  obj47.description = enableHangoutWindow ? t2.CYcJ6H : t2.C6BzXx;
  obj47.flag = constants4.SET_VOICE_CHANNEL_STATUS;
  obj[str40] = obj47;
  return obj;
};