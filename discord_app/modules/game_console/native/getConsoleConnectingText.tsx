// === Module 17318: getConsoleConnectingText ===

// Module 17318 (getConsoleConnectingText)
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleConnectingText.tsx");

export const getConsoleConnectingText = function getConsoleConnectingText(stateFromStores1, stateFromStores, arg2) {
  let tmp6;
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type == null) {
    let os;
    if (stateFromStores1 != null) {
      os = stateFromStores1.clientInfo.os;
    }
    type = os;
  }
  if (type === PlatformTypes.XBOX) {
    let str2;
    if (arg2) {
      const intl4 = intl5.intl;
      str2 = intl4.format(intl5.t["ynEs/Y"], {});
    } else {
      str2 = "Xbox";
      if (null != stateFromStores) {
        const intl3 = intl5.intl;
        str2 = intl3.string(intl5.t.UjA4HX);
      }
    }
    tmp6 = str2;
  } else if (type === PlatformTypes.PLAYSTATION) {
    let str;
    if (arg2) {
      const intl2 = intl5.intl;
      str = intl2.format(intl5.t.TZ17Bg, {});
    } else {
      str = "PS5";
      if (null != stateFromStores) {
        const intl = intl5.intl;
        str = intl.string(intl5.t.QCw1oW);
      }
    }
    tmp6 = str;
  }
  return tmp6;
};