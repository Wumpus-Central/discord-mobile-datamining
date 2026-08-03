import ME from "ME";

let c3;
let obj1;
({ RTCConnectionStates: obj1, ConnectionStatus: c3 } = ME);
const result = require("set").fileFinishedImporting("utils/RTCConnectionUtils.tsx");

export default {
  getStatus(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (constants.CONNECTING === arg0) {
      let connectionStatus = constants2.CONNECTING;
      const intl10 = require(1236) /* getSystemLocale */.intl;
      let connectionStatusText = intl10.string(require(1236) /* getSystemLocale */.t.MzW9sN);
    } else if (tmp.AUTHENTICATING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl9 = require(1236) /* getSystemLocale */.intl;
      connectionStatusText = intl9.string(require(1236) /* getSystemLocale */.t.GxXwE2);
    } else if (tmp.AWAITING_ENDPOINT === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl8 = require(1236) /* getSystemLocale */.intl;
      connectionStatusText = intl8.string(require(1236) /* getSystemLocale */.t.uQle7a);
    } else if (tmp.RTC_CONNECTED === arg0) {
      const intl7 = require(1236) /* getSystemLocale */.intl;
      const string = intl7.string;
      const t = require(1236) /* getSystemLocale */.t;
      if (flag) {
        let stringResult1 = string(t.HtVOdd);
      } else {
        stringResult1 = string(t.daXg45);
      }
      connectionStatusText = stringResult1;
      connectionStatus = constants2.CONNECTED;
    } else if (tmp.RTC_CONNECTING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl6 = require(1236) /* getSystemLocale */.intl;
      connectionStatusText = intl6.string(require(1236) /* getSystemLocale */.t.Gp51dl);
    } else if (tmp.ICE_CHECKING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl5 = require(1236) /* getSystemLocale */.intl;
      connectionStatusText = intl5.string(require(1236) /* getSystemLocale */.t["rdCyA/"]);
    } else if (tmp.DTLS_CONNECTING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl4 = require(1236) /* getSystemLocale */.intl;
      connectionStatusText = intl4.string(require(1236) /* getSystemLocale */.t.UvB3gV);
    } else if (tmp.NO_ROUTE === arg0) {
      connectionStatus = constants2.ERROR;
      const intl3 = require(1236) /* getSystemLocale */.intl;
      connectionStatusText = intl3.string(require(1236) /* getSystemLocale */.t.mGhOIi);
    } else if (tmp.RTC_DISCONNECTED === arg0) {
      connectionStatus = constants2.ERROR;
      const intl2 = require(1236) /* getSystemLocale */.intl;
      connectionStatusText = intl2.string(require(1236) /* getSystemLocale */.t.M7LDmE);
    } else {
      const DISCONNECTED = tmp.DISCONNECTED;
      connectionStatus = constants2.ERROR;
      const intl = require(1236) /* getSystemLocale */.intl;
      connectionStatusText = intl.string(require(1236) /* getSystemLocale */.t.NLKQbx);
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