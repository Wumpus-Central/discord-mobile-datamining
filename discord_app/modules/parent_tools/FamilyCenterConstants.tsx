// === Module 7283: items ===

// Module 7283 (items)
import setDefault from "set" /* 687 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2369 */;
import getAuthenticationPath from "getAuthenticationPath" /* 507 */;

require = arg1;
const result = 30 * setDefault.Millis.SECOND;
const result1 = 5 * setDefault.Millis.MINUTE;
const result2 = 5 * setDefault.Millis.MINUTE;
getAuthenticationPath = { USER_ADD: 1, [1]: "USER_ADD", GUILD_ADD: 2, [2]: "GUILD_ADD", USER_INTERACTION: 3, [3]: "USER_INTERACTION", GUILD_INTERACTION: 4, [4]: "GUILD_INTERACTION", USER_CALLED: 5, [5]: "USER_CALLED", TOTAL_VOICE_MINUTES: 6, [6]: "TOTAL_VOICE_MINUTES", PURCHASES: 7, [7]: "PURCHASES", GIFTS: 8, [8]: "GIFTS" };
const items = [
  getAuthenticationPath.USER_INTERACTION,
  {
    priority: 100,
    tooltipHeader() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.kvTgWP);
    },
    tooltipDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.w4wmnb);
      } else {
        stringResult = string(tmp.foTzbd);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(messagesProxyDefault["4T3zWT"], { count });
    },
    sectionDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.w4wmnb);
      } else {
        stringResult = string(tmp.foTzbd);
      }
      return stringResult;
    },
    timestampFormatter() {
      const obj = { today: null, yesterday: null, days: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(messagesProxyDefault.fLBUx7);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(messagesProxyDefault.cHHgxI);
      obj[2] = messagesProxyDefault.qvKjp8;
      return obj;
    }
  }
];
const items1 = [items, , , , , , , ];
const items2 = [
  getAuthenticationPath.USER_CALLED,
  {
    priority: 200,
    tooltipHeader() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.D7Sngz);
    },
    tooltipDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.aiAhnQ);
      } else {
        stringResult = string(tmp["4ufgdz"]);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(messagesProxyDefault["0GE4Ni"], { count });
    },
    sectionDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.aiAhnQ);
      } else {
        stringResult = string(tmp["4ufgdz"]);
      }
      return stringResult;
    },
    timestampFormatter() {
      const obj = { today: null, yesterday: null, days: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(messagesProxyDefault.IHd5cZ);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(messagesProxyDefault.wOsfxv);
      obj[2] = messagesProxyDefault.oCk8c4;
      return obj;
    }
  }
];
items1[1] = items2;
const items3 = [
  getAuthenticationPath.USER_ADD,
  {
    priority: 300,
    tooltipHeader() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.kIcKAj);
    },
    tooltipDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.BkVb1X);
      } else {
        stringResult = string(tmp.mpHHfa);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(messagesProxyDefault["TEvo+H"], { count });
    },
    sectionDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.BkVb1X);
      } else {
        stringResult = string(tmp.mpHHfa);
      }
      return stringResult;
    },
    timestampFormatter() {
      const obj = { today: null, yesterday: null, days: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(messagesProxyDefault.JUHIYZ);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(messagesProxyDefault.GiswUW);
      obj[2] = messagesProxyDefault["fwQgE/"];
      return obj;
    }
  }
];
items1[2] = items3;
const items4 = [
  getAuthenticationPath.GUILD_ADD,
  {
    priority: 400,
    tooltipHeader() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.uav9Bh);
    },
    tooltipDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.LVNgTD);
      } else {
        stringResult = string(tmp.TA8GFt);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(messagesProxyDefault["7feG7T"], { count });
    },
    sectionDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.LVNgTD);
      } else {
        stringResult = string(tmp.TA8GFt);
      }
      return stringResult;
    }
  }
];
items1[3] = items4;
const items5 = [
  getAuthenticationPath.GUILD_INTERACTION,
  {
    priority: 500,
    tooltipHeader() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.CcrbCw);
    },
    tooltipDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.BLgIrk);
      } else {
        stringResult = string(tmp.sSJauZ);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(messagesProxyDefault.rcPInc, { count });
    },
    sectionDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.BLgIrk);
      } else {
        stringResult = string(tmp.sSJauZ);
      }
      return stringResult;
    }
  }
];
items1[4] = items5;
const items6 = [
  getAuthenticationPath.TOTAL_VOICE_MINUTES,
  {
    priority: 175,
    tooltipHeader() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.eo4Fxh);
    },
    tooltipDescription() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault["O/AElu"]);
    },
    sectionHeader(count) {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(messagesProxyDefault.eGFWUd, { count });
    },
    sectionDescription() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault["O/AElu"]);
    }
  }
];
items1[5] = items6;
const items7 = [
  getAuthenticationPath.PURCHASES,
  {
    priority: 150,
    tooltipHeader() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.NMYKsh);
    },
    tooltipDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.cqIdqZ);
      } else {
        stringResult = string(tmp["85PtWu"]);
      }
      return stringResult;
    },
    sectionHeader(amount) {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(messagesProxyDefault.FPViWL, { amount });
    },
    sectionDescription(arg0) {
      const intl = getSystemLocale.intl;
      const string = intl.string;
      const tmp = messagesProxyDefault;
      if (arg0) {
        let stringResult = string(tmp.cqIdqZ);
      } else {
        stringResult = string(tmp["85PtWu"]);
      }
      return stringResult;
    }
  }
];
items1[6] = items7;
const items8 = [
  getAuthenticationPath.GIFTS,
  {
    priority: 600,
    tooltipHeader() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.ULUspo);
    },
    tooltipDescription() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.nH8vlc);
    },
    sectionHeader(amount) {
      const intl = getSystemLocale.intl;
      return intl.formatToPlainString(messagesProxyDefault["0R6I/b"], { amount });
    },
    sectionDescription() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.nH8vlc);
    }
  }
];
items1[7] = items8;
const wrapPathsResult = getAuthenticationPath.wrapPaths(Object.freeze({ FAMILY_CENTER_SETTINGS: "/family-center/settings", FAMILY_CENTER_MY_FAMILY: "/family-center/my-family" }), [":", "?", "@"]);
getAuthenticationPath = { CHECK: 0, [0]: "CHECK", X: 1, [1]: "X" };
const obj1 = { GENERIC_ERROR: 0, [0]: "GENERIC_ERROR", INELIGIBLE_FOR_FAMILY_CENTER: 1, [1]: "INELIGIBLE_FOR_FAMILY_CENTER", PENDING_REQUEST_EXISTS: 2, [2]: "PENDING_REQUEST_EXISTS", MAX_CONNECTIONS_REACHED: 3, [3]: "MAX_CONNECTIONS_REACHED" };
({ INELIGIBLE_FOR_FAMILY_CENTER: obj5[290000], MAX_CONNECTIONS_REACHED: obj5[290002], PENDING_REQUEST_EXISTS: obj5[290005] } = obj1);
const obj5 = {
  header(isAdult) {
    const intl = getSystemLocale.intl;
    const string = intl.string;
    const tmp = messagesProxyDefault;
    if (isAdult.isAdult) {
      let stringResult = string(tmp.bS5x94);
    } else {
      stringResult = string(tmp.MzX4RP);
    }
    return stringResult;
  },
  description(isAdult) {
    const intl = getSystemLocale.intl;
    const format = intl.format;
    const tmp = messagesProxyDefault;
    if (isAdult.isAdult) {
      let formatResult = format(tmp.GKzqWi, { link: "https://support.discord.com/hc/articles/14155043715735" });
    } else {
      formatResult = format(tmp["69F+eS"], { link: "https://support.discord.com/hc/articles/14155060633623" });
    }
    return formatResult;
  },
  icon: getAuthenticationPath.X
};
const map = new Map(items1);
const obj2 = { 290000: null, 290002: null, 290005: null };
const obj3 = {
  header() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.nGX8Co);
  },
  description() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Uss2dn);
  },
  icon: getAuthenticationPath.X
};
const obj4 = {
  header() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.tu0MRv);
  },
  description(email) {
    email = email.email;
    if (null != email) {
      const intl2 = getSystemLocale.intl;
      const obj = { email: null };
      obj[0] = email;
      let formatToPlainStringResult = intl2.formatToPlainString(messagesProxyDefault.xNEkdx, obj);
    } else {
      const intl = getSystemLocale.intl;
      formatToPlainStringResult = intl.string(messagesProxyDefault.Xyjnwn);
    }
    return formatToPlainStringResult;
  },
  icon: getAuthenticationPath.CHECK
};
const obj6 = {
  header() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.W9JLJh);
  },
  description() {
    const intl = getSystemLocale.intl;
    return intl.format(messagesProxyDefault.On5iRI, { link: "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731" });
  },
  icon: getAuthenticationPath.X
};
const result3 = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterConstants.tsx");

export const RESTRICTED_HOURS_LAYER_KEY = "RESTRICTED_HOURS_LAYER";
export const FAMILY_CENTER_REFETCH_COOLDOWN = result;
export const FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT = result1;
export const MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS = 8;
export const MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS = 3;
export const FAMILY_CENTER_REQUEST_SECTION_HEIGHT = 26;
export const FAMILY_CENTER_REQUEST_ROW_HEIGHT = 64;
export const FAMILY_CENTER_LINK_REQUEST_REGEX = /\/feature\/family-center\/my-family\/(\w+)\/(\w+)/;
export const FAMILY_CENTER_REQUEST_QR_CODE_URL = (arg0, arg1) => "https://discord.com/feature/family-center/my-family/" + arg0 + "/" + arg1;
export const FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS = 4;
export const QR_CODE_AUTO_HIDE_TIMEOUT = result2;
export const PLACEHOLDER_QR_CODE_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
export const FAMILY_CENTER_SUB_ROUTES = wrapPathsResult;
export const TeenActionType = { DM_MESSAGE_SEND: 1, [1]: "DM_MESSAGE_SEND", GDM_MESSAGE_SEND: 2, [2]: "GDM_MESSAGE_SEND", MESSAGE_REACT: 3, [3]: "MESSAGE_REACT", ADD_FRIEND: 4, [4]: "ADD_FRIEND", SEND_CALL: 5, [5]: "SEND_CALL", CALL_JOIN: 6, [6]: "CALL_JOIN", GUILD_JOIN: 7, [7]: "GUILD_JOIN", GUILD_MESSAGE_SEND: 8, [8]: "GUILD_MESSAGE_SEND", GUILD_VC_JOIN: 9, [9]: "GUILD_VC_JOIN", GUILD_VOICE_CHANNEL_LEAVE: 10, [10]: "GUILD_VOICE_CHANNEL_LEAVE", CALL_LEAVE: 11, [11]: "CALL_LEAVE", CALL_START: 12, [12]: "CALL_START", INVOICE_COMPLETE: 13, [13]: "INVOICE_COMPLETE" };
export const UserLinkType = { PARENT: 1, [1]: "PARENT", CHILD: 2, [2]: "CHILD" };
export const UserLinkStatus = { PENDING: 1, [1]: "PENDING", ACTIVE: 2, [2]: "ACTIVE", INACTIVE: 3, [3]: "INACTIVE", DECLINED: 4, [4]: "DECLINED", EXPIRED: 5, [5]: "EXPIRED" };
export const TeenActionDisplayType = getAuthenticationPath;
export const FamilyCenterSubPages = { ACTIVITY: "ACTIVITY", REQUESTS: "REQUESTS", SETTINGS: "SETTINGS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY", SCREEN_TIME_CONTROLS: "SCREEN_TIME_CONTROLS" };
export const FamilyCenterSubPageAnalyticsIds = { ACTIVITY: 0, [0]: "ACTIVITY", REQUESTS: 1, [1]: "REQUESTS", SETTINGS: 2, [2]: "SETTINGS", CONTENT_AND_SOCIAL: 3, [3]: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: 4, [4]: "DATA_AND_PRIVACY", SCREEN_TIME_CONTROLS: 5, [5]: "SCREEN_TIME_CONTROLS" };
export const FamilyCenterPageLocation = { SIDENAV: "SIDENAV", SETTINGS: "SETTINGS" };
export const FamilyCenterPageLocationAnalyticsIds = { SIDENAV: 0, [0]: "SIDENAV", SETTINGS: 1, [1]: "SETTINGS" };
export const FamilyCenterAction = { TabChange: 0, [0]: "TabChange", ShowQRCodeModal: 1, [1]: "ShowQRCodeModal", RevealQRCode: 2, [2]: "RevealQRCode", ScanQRCodeButton: 3, [3]: "ScanQRCodeButton", ScanQRCode: 4, [4]: "ScanQRCode", LoadMore: 5, [5]: "LoadMore", SelectTeen: 6, [6]: "SelectTeen", HideQRCode: 7, [7]: "HideQRCode", NufConsentGateLinkCodeError: 8, [8]: "NufConsentGateLinkCodeError", ShareLink: 9, [9]: "ShareLink", CopyLink: 10, [10]: "CopyLink" };
export const ACTION_TO_TEXT = map;
export const FamilyCenterIconType = getAuthenticationPath;
export const FamilyCenterFailureCode = obj1;
export const FAMILY_CENTER_ERROR_CODE_TO_FAILURE = obj2;
export const FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES = { [obj1.GENERIC_ERROR]: obj3, [obj1.PENDING_REQUEST_EXISTS]: obj4, [obj1.MAX_CONNECTIONS_REACHED]: obj5, [obj1.INELIGIBLE_FOR_FAMILY_CENTER]: obj6 };
export const CONNECT_GUARDIAN_BOTTOM_SHEET_KEY = "ConnectGuardianBottomSheet";
export const PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER = () => {
  const obj = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.CJdoee);
  obj[1] = messagesProxyDefault.InzMn3;
  obj[2] = messagesProxyDefault.ErkYCI;
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(messagesProxyDefault.GvfssA);
  obj[4] = messagesProxyDefault.pWig18;
  obj[5] = messagesProxyDefault.MP3khg;
  return obj;
};
export const ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER = () => {
  const obj = { seconds: null, minutes: null, hours: null, yesterday: null, days: null, date: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.Bqsamd);
  obj[1] = messagesProxyDefault.kX3wJg;
  obj[2] = messagesProxyDefault.J18GbG;
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(messagesProxyDefault.Ln9zMn);
  obj[4] = messagesProxyDefault.WRtySz;
  obj[5] = messagesProxyDefault.Y3ZYtM;
  return obj;
};