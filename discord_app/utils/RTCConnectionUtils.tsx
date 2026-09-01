// === Module 10123: ? ===

// Module 10123
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ME from "ME" /* 676 */;

({ RTCConnectionStates: obj1, ConnectionStatus: c3 } = ME);
const result = set.fileFinishedImporting("utils/RTCConnectionUtils.tsx");

export default {
  getStatus(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (constants.CONNECTING === arg0) {
      let connectionStatus = constants2.CONNECTING;
      const intl10 = getSystemLocale.intl;
      let connectionStatusText = intl10.string(getSystemLocale.t.MzW9sN);
    } else if (tmp.AUTHENTICATING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl9 = getSystemLocale.intl;
      connectionStatusText = intl9.string(getSystemLocale.t.GxXwE2);
    } else if (tmp.AWAITING_ENDPOINT === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl8 = getSystemLocale.intl;
      connectionStatusText = intl8.string(getSystemLocale.t.uQle7a);
    } else if (tmp.RTC_CONNECTED === arg0) {
      const intl7 = getSystemLocale.intl;
      const string = intl7.string;
      const t = getSystemLocale.t;
      if (flag) {
        let stringResult1 = string(t.HtVOdd);
      } else {
        stringResult1 = string(t.daXg45);
      }
      connectionStatusText = stringResult1;
      connectionStatus = constants2.CONNECTED;
    } else if (tmp.RTC_CONNECTING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl6 = getSystemLocale.intl;
      connectionStatusText = intl6.string(getSystemLocale.t.Gp51dl);
    } else if (tmp.ICE_CHECKING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl5 = getSystemLocale.intl;
      connectionStatusText = intl5.string(getSystemLocale.t["rdCyA/"]);
    } else if (tmp.DTLS_CONNECTING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl4 = getSystemLocale.intl;
      connectionStatusText = intl4.string(getSystemLocale.t.UvB3gV);
    } else if (tmp.NO_ROUTE === arg0) {
      connectionStatus = constants2.ERROR;
      const intl3 = getSystemLocale.intl;
      connectionStatusText = intl3.string(getSystemLocale.t.mGhOIi);
    } else if (tmp.RTC_DISCONNECTED === arg0) {
      connectionStatus = constants2.ERROR;
      const intl2 = getSystemLocale.intl;
      connectionStatusText = intl2.string(getSystemLocale.t.M7LDmE);
    } else {
      const DISCONNECTED = tmp.DISCONNECTED;
      connectionStatus = constants2.ERROR;
      const intl = getSystemLocale.intl;
      connectionStatusText = intl.string(getSystemLocale.t.NLKQbx);
    }
    return { connectionStatus, connectionStatusText };
  },
  getShortHostname(hostname) {
    let str = "";
    if (null != hostname) {
      str = hostname.split(".")[0];
    }
    return str;
  }
};