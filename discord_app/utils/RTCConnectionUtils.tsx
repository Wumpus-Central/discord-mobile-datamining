// discord_app/utils/RTCConnectionUtils.tsx
import intl11 from "../intl/index.native.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let c2;
let c3;
({ RTCConnectionStates: c2, ConnectionStatus: c3 } = Constants);
const obj = {
  getStatus(arg0) {
    let connectionStatus;
    let connectionStatusText;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (constants.CONNECTING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl10 = intl11.intl;
      connectionStatusText = intl10.string(intl11.t.MzW9sN);
    } else if (constants.AUTHENTICATING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl9 = intl11.intl;
      connectionStatusText = intl9.string(intl11.t.GxXwE2);
    } else if (constants.AWAITING_ENDPOINT === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl8 = intl11.intl;
      connectionStatusText = intl8.string(intl11.t.uQle7a);
    } else if (constants.RTC_CONNECTED === arg0) {
      let stringResult1;
      const CONNECTED = constants2.CONNECTED;
      const intl7 = intl11.intl;
      const string = intl7.string;
      const t = intl11.t;
      if (flag) {
        stringResult1 = string(t.HtVOdd);
      } else {
        stringResult1 = string(t.daXg45);
      }
      connectionStatusText = stringResult1;
      connectionStatus = CONNECTED;
    } else if (constants.RTC_CONNECTING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl6 = intl11.intl;
      connectionStatusText = intl6.string(intl11.t.Gp51dl);
    } else if (constants.ICE_CHECKING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl5 = intl11.intl;
      connectionStatusText = intl5.string(intl11.t["rdCyA/"]);
    } else if (constants.DTLS_CONNECTING === arg0) {
      connectionStatus = constants2.CONNECTING;
      const intl4 = intl11.intl;
      connectionStatusText = intl4.string(intl11.t.UvB3gV);
    } else if (constants.NO_ROUTE === arg0) {
      connectionStatus = constants2.ERROR;
      const intl3 = intl11.intl;
      connectionStatusText = intl3.string(intl11.t.mGhOIi);
    } else if (constants.RTC_DISCONNECTED === arg0) {
      connectionStatus = constants2.ERROR;
      const intl2 = intl11.intl;
      connectionStatusText = intl2.string(intl11.t.M7LDmE);
    } else {
      const DISCONNECTED = constants.DISCONNECTED;
      connectionStatus = constants2.ERROR;
      const intl = intl11.intl;
      connectionStatusText = intl.string(intl11.t.NLKQbx);
    }
    return { connectionStatus, connectionStatusText };
  },
  getShortHostname(hostname) {
    let str = "";
    if (null != hostname) {
      str = hostname.split(".")[0];
    }
    return str;
  },
};
const result = size.fileFinishedImporting("utils/RTCConnectionUtils.tsx");

export default obj;
