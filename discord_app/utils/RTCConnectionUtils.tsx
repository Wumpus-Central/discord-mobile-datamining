// === Module 10040: RTCConnectionUtils ===

// Module 10040 (RTCConnectionUtils)
import util from "util" /* 1114 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ RTCConnectionStates: c2, ConnectionStatus: c3 } = Constants);
const result = size.fileFinishedImporting("utils/RTCConnectionUtils.tsx");

export default {
  getStatus(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (constants.CONNECTING === arg0) {
      let connectionStatus = constants2.CONNECTING;
      const intl10 = util.intl;
      let connectionStatusText = intl10.string(util.t.MzW9sN);
    } else if (tmp.AUTHENTICATING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl9 = util.intl;
      connectionStatusText = intl9.string(util.t.GxXwE2);
    } else if (tmp.AWAITING_ENDPOINT === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl8 = util.intl;
      connectionStatusText = intl8.string(util.t.uQle7a);
    } else if (tmp.RTC_CONNECTED === arg0) {
      const intl7 = util.intl;
      const string = intl7.string;
      const t = util.t;
      if (flag) {
        let stringResult1 = string(t.HtVOdd);
      } else {
        stringResult1 = string(t.daXg45);
      }
      connectionStatusText = stringResult1;
      connectionStatus = constants2.CONNECTED;
    } else if (tmp.RTC_CONNECTING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl6 = util.intl;
      connectionStatusText = intl6.string(util.t.Gp51dl);
    } else if (tmp.ICE_CHECKING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl5 = util.intl;
      connectionStatusText = intl5.string(util.t["rdCyA/"]);
    } else if (tmp.DTLS_CONNECTING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl4 = util.intl;
      connectionStatusText = intl4.string(util.t.UvB3gV);
    } else if (tmp.NO_ROUTE === arg0) {
      connectionStatus = constants2.ERROR;
      const intl3 = util.intl;
      connectionStatusText = intl3.string(util.t.mGhOIi);
    } else if (tmp.RTC_DISCONNECTED === arg0) {
      connectionStatus = constants2.ERROR;
      const intl2 = util.intl;
      connectionStatusText = intl2.string(util.t.M7LDmE);
    } else {
      const DISCONNECTED = tmp.DISCONNECTED;
      connectionStatus = constants2.ERROR;
      const intl = util.intl;
      connectionStatusText = intl.string(util.t.NLKQbx);
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