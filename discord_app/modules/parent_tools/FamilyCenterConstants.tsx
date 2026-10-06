// === Module 7062: FamilyCenterConstants ===

// Module 7062 (FamilyCenterConstants)
import DurationsDefault from "Durations" /* 1102 */;
import intl3 from "intl" /* 1126 */;
import _modDef2521 from "module_2521" /* 2521 */;
import PathUtils from "utils/PathUtils" /* 1094 */;
import size from "module_2" /* 2 */;

const result = 30 * DurationsDefault.Millis.SECOND;
const result1 = 5 * DurationsDefault.Millis.MINUTE;
const result2 = 5 * DurationsDefault.Millis.MINUTE;
let obj = { USER_ADD: 1, [1]: "USER_ADD", GUILD_ADD: 2, [2]: "GUILD_ADD", USER_INTERACTION: 3, [3]: "USER_INTERACTION", GUILD_INTERACTION: 4, [4]: "GUILD_INTERACTION", USER_CALLED: 5, [5]: "USER_CALLED", TOTAL_VOICE_MINUTES: 6, [6]: "TOTAL_VOICE_MINUTES", PURCHASES: 7, [7]: "PURCHASES", GIFTS: 8, [8]: "GIFTS" };
const items = [
  obj.USER_INTERACTION,
  {
    priority: 100,
    tooltipHeader() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.kvTgWP);
    },
    tooltipDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.w4wmnb);
      } else {
        stringResult = string(tmp.foTzbd);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = intl3.intl;
      const obj = { count };
      return intl.formatToPlainString(_modDef2521["4T3zWT"], obj);
    },
    sectionDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.w4wmnb);
      } else {
        stringResult = string(tmp.foTzbd);
      }
      return stringResult;
    },
    timestampFormatter() {
      let intl;
      let intl2;
      const obj = { today: intl.string(_modDef2521.fLBUx7), yesterday: intl2.string(_modDef2521.cHHgxI), days: _modDef2521.qvKjp8 };
      intl = intl3.intl;
      intl2 = intl3.intl;
      return obj;
    }
  }
];
const items1 = [items, , , , , , , ];
const items2 = [
  obj.USER_CALLED,
  {
    priority: 200,
    tooltipHeader() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.D7Sngz);
    },
    tooltipDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.aiAhnQ);
      } else {
        stringResult = string(tmp["4ufgdz"]);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = intl3.intl;
      const obj = { count };
      return intl.formatToPlainString(_modDef2521["0GE4Ni"], obj);
    },
    sectionDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.aiAhnQ);
      } else {
        stringResult = string(tmp["4ufgdz"]);
      }
      return stringResult;
    },
    timestampFormatter() {
      let intl;
      let intl2;
      const obj = { today: intl.string(_modDef2521.IHd5cZ), yesterday: intl2.string(_modDef2521.wOsfxv), days: _modDef2521.oCk8c4 };
      intl = intl3.intl;
      intl2 = intl3.intl;
      return obj;
    }
  }
];
items1[1] = items2;
const items3 = [
  obj.USER_ADD,
  {
    priority: 300,
    tooltipHeader() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.kIcKAj);
    },
    tooltipDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.BkVb1X);
      } else {
        stringResult = string(tmp.mpHHfa);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = intl3.intl;
      const obj = { count };
      return intl.formatToPlainString(_modDef2521["TEvo+H"], obj);
    },
    sectionDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.BkVb1X);
      } else {
        stringResult = string(tmp.mpHHfa);
      }
      return stringResult;
    },
    timestampFormatter() {
      let intl;
      let intl2;
      const obj = { today: intl.string(_modDef2521.JUHIYZ), yesterday: intl2.string(_modDef2521.GiswUW), days: _modDef2521["fwQgE/"] };
      intl = intl3.intl;
      intl2 = intl3.intl;
      return obj;
    }
  }
];
items1[2] = items3;
const items4 = [
  obj.GUILD_ADD,
  {
    priority: 400,
    tooltipHeader() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.uav9Bh);
    },
    tooltipDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.LVNgTD);
      } else {
        stringResult = string(tmp.TA8GFt);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = intl3.intl;
      const obj = { count };
      return intl.formatToPlainString(_modDef2521["7feG7T"], obj);
    },
    sectionDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.LVNgTD);
      } else {
        stringResult = string(tmp.TA8GFt);
      }
      return stringResult;
    }
  }
];
items1[3] = items4;
const items5 = [
  obj.GUILD_INTERACTION,
  {
    priority: 500,
    tooltipHeader() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.CcrbCw);
    },
    tooltipDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.BLgIrk);
      } else {
        stringResult = string(tmp.sSJauZ);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = intl3.intl;
      const obj = { count };
      return intl.formatToPlainString(_modDef2521.rcPInc, obj);
    },
    sectionDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.BLgIrk);
      } else {
        stringResult = string(tmp.sSJauZ);
      }
      return stringResult;
    }
  }
];
items1[4] = items5;
const items6 = [
  obj.TOTAL_VOICE_MINUTES,
  {
    priority: 175,
    tooltipHeader() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.eo4Fxh);
    },
    tooltipDescription() {
      const intl = intl3.intl;
      return intl.string(_modDef2521["O/AElu"]);
    },
    sectionHeader(count) {
      const intl = intl3.intl;
      const obj = { count };
      return intl.formatToPlainString(_modDef2521.eGFWUd, obj);
    },
    sectionDescription() {
      const intl = intl3.intl;
      return intl.string(_modDef2521["O/AElu"]);
    }
  }
];
items1[5] = items6;
const items7 = [
  obj.PURCHASES,
  {
    priority: 150,
    tooltipHeader() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.NMYKsh);
    },
    tooltipDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.cqIdqZ);
      } else {
        stringResult = string(tmp["85PtWu"]);
      }
      return stringResult;
    },
    sectionHeader(amount) {
      const intl = intl3.intl;
      const obj = { amount };
      return intl.formatToPlainString(_modDef2521.FPViWL, obj);
    },
    sectionDescription(arg0) {
      let stringResult;
      const intl = intl3.intl;
      const string = intl.string;
      const tmp = _modDef2521;
      const tmp2 = arg0;
      if (tmp2) {
        stringResult = string(tmp.cqIdqZ);
      } else {
        stringResult = string(tmp["85PtWu"]);
      }
      return stringResult;
    }
  }
];
items1[6] = items7;
const items8 = [
  obj.GIFTS,
  {
    priority: 600,
    tooltipHeader() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.ULUspo);
    },
    tooltipDescription() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.nH8vlc);
    },
    sectionHeader(amount) {
      const intl = intl3.intl;
      const obj = { amount };
      return intl.formatToPlainString(_modDef2521["0R6I/b"], obj);
    },
    sectionDescription() {
      const intl = intl3.intl;
      return intl.string(_modDef2521.nH8vlc);
    }
  }
];
items1[7] = items8;
const obj2 = { CHECK: 0, [0]: "CHECK", X: 1, [1]: "X" };
const obj3 = { GENERIC_ERROR: 0, [0]: "GENERIC_ERROR", INELIGIBLE_FOR_FAMILY_CENTER: 1, [1]: "INELIGIBLE_FOR_FAMILY_CENTER", PENDING_REQUEST_EXISTS: 2, [2]: "PENDING_REQUEST_EXISTS", MAX_CONNECTIONS_REACHED: 3, [3]: "MAX_CONNECTIONS_REACHED" };
const obj4 = { 290000: null, 290002: null, 290005: null };
({ INELIGIBLE_FOR_FAMILY_CENTER: obj5[290000], MAX_CONNECTIONS_REACHED: obj5[290002], PENDING_REQUEST_EXISTS: obj5[290005] } = obj3);
const wrapPathsResult = PathUtils.wrapPaths(Object.freeze({ FAMILY_CENTER_SETTINGS: "/family-center/settings", FAMILY_CENTER_MY_FAMILY: "/family-center/my-family" }), [":", "?", "@"]);
const map = new Map(items1);
const obj6 = {
  header() {
    const intl = intl3.intl;
    return intl.string(_modDef2521.nGX8Co);
  },
  description() {
    const intl = intl3.intl;
    return intl.string(_modDef2521.Uss2dn);
  },
  icon: obj2.X
};
const obj7 = {
  header() {
    const intl = intl3.intl;
    return intl.string(_modDef2521.tu0MRv);
  },
  description(email) {
    let formatToPlainStringResult;
    email = email.email;
    if (null != email) {
      const intl2 = intl3.intl;
      const obj = { email };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef2521.xNEkdx, obj);
    } else {
      const intl = intl3.intl;
      formatToPlainStringResult = intl.string(_modDef2521.Xyjnwn);
    }
    return formatToPlainStringResult;
  },
  icon: obj2.CHECK
};
const obj8 = {
  header(isAdult) {
    let stringResult;
    isAdult = isAdult.isAdult;
    const intl = intl3.intl;
    const string = intl.string;
    const tmp = _modDef2521;
    if (isAdult) {
      stringResult = string(tmp.bS5x94);
    } else {
      stringResult = string(tmp.MzX4RP);
    }
    return stringResult;
  },
  description(isAdult) {
    let formatResult;
    isAdult = isAdult.isAdult;
    const intl = intl3.intl;
    const format = intl.format;
    const tmp = _modDef2521;
    if (isAdult) {
      formatResult = format(tmp.GKzqWi, { link: "https://support.discord.com/hc/articles/14155043715735" });
    } else {
      formatResult = format(tmp["69F+eS"], { link: "https://support.discord.com/hc/articles/14155060633623" });
    }
    return formatResult;
  },
  icon: obj2.X
};
const obj9 = {
  header() {
    const intl = intl3.intl;
    return intl.string(_modDef2521.W9JLJh);
  },
  description() {
    const intl = intl3.intl;
    return intl.format(_modDef2521.On5iRI, { link: "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731" });
  },
  icon: obj2.X
};
const result3 = size.fileFinishedImporting("modules/parent_tools/FamilyCenterConstants.tsx");

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
export const TeenActionDisplayType = obj;
export const FamilyCenterSubPages = { ACTIVITY: "ACTIVITY", REQUESTS: "REQUESTS", SETTINGS: "SETTINGS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY", SCREEN_TIME_CONTROLS: "SCREEN_TIME_CONTROLS" };
export const FamilyCenterSubPageAnalyticsIds = { ACTIVITY: 0, [0]: "ACTIVITY", REQUESTS: 1, [1]: "REQUESTS", SETTINGS: 2, [2]: "SETTINGS", CONTENT_AND_SOCIAL: 3, [3]: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: 4, [4]: "DATA_AND_PRIVACY", SCREEN_TIME_CONTROLS: 5, [5]: "SCREEN_TIME_CONTROLS" };
export const FamilyCenterPageLocation = { SIDENAV: "SIDENAV", SETTINGS: "SETTINGS" };
export const FamilyCenterPageLocationAnalyticsIds = { SIDENAV: 0, [0]: "SIDENAV", SETTINGS: 1, [1]: "SETTINGS" };
export const FamilyCenterAction = { TabChange: 0, [0]: "TabChange", ShowQRCodeModal: 1, [1]: "ShowQRCodeModal", RevealQRCode: 2, [2]: "RevealQRCode", ScanQRCodeButton: 3, [3]: "ScanQRCodeButton", ScanQRCode: 4, [4]: "ScanQRCode", LoadMore: 5, [5]: "LoadMore", SelectTeen: 6, [6]: "SelectTeen", HideQRCode: 7, [7]: "HideQRCode", NufConsentGateLinkCodeError: 8, [8]: "NufConsentGateLinkCodeError", ShareLink: 9, [9]: "ShareLink", CopyLink: 10, [10]: "CopyLink" };
export const ACTION_TO_TEXT = map;
export const FamilyCenterIconType = obj2;
export const FamilyCenterFailureCode = obj3;
export const FAMILY_CENTER_ERROR_CODE_TO_FAILURE = obj4;
export const FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES = { [obj3.GENERIC_ERROR]: obj6, [obj3.PENDING_REQUEST_EXISTS]: obj7, [obj3.MAX_CONNECTIONS_REACHED]: obj8, [obj3.INELIGIBLE_FOR_FAMILY_CENTER]: obj9 };
export const CONNECT_GUARDIAN_BOTTOM_SHEET_KEY = "ConnectGuardianBottomSheet";
export const PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER = () => {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2521.CJdoee), minutes: _modDef2521.InzMn3, hours: _modDef2521.ErkYCI, yesterday: intl2.string(_modDef2521.GvfssA), days: _modDef2521.pWig18, date: _modDef2521.MP3khg };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
};
export const ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER = () => {
  let intl;
  let intl2;
  const time = { seconds: intl.string(_modDef2521.Bqsamd), minutes: _modDef2521.kX3wJg, hours: _modDef2521.J18GbG, yesterday: intl2.string(_modDef2521.Ln9zMn), days: _modDef2521.WRtySz, date: _modDef2521.Y3ZYtM };
  intl = intl3.intl;
  intl2 = intl3.intl;
  return time;
};