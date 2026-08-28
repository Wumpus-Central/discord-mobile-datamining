// === Module 16687: getConsoleConnectingText ===

// Module 16687 (getConsoleConnectingText)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const PlatformTypes = ME.PlatformTypes;
const result = set.fileFinishedImporting("modules/game_console/native/getConsoleConnectingText.tsx");

export const getConsoleConnectingText = function getConsoleConnectingText(stateFromStores1, stateFromStores, arg2) {
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
    if (arg2) {
      const intl4 = getSystemLocale.intl;
      let str2 = intl4.format(getSystemLocale.t["ynEs/Y"], {});
    } else {
      str2 = "Xbox";
      if (tmp4) {
        const intl3 = getSystemLocale.intl;
        str2 = intl3.string(getSystemLocale.t.UjA4HX);
      }
    }
  } else if (arg2) {
    const intl2 = getSystemLocale.intl;
    let str = intl2.format(getSystemLocale.t.TZ17Bg, {});
  } else {
    str = "PS5";
    if (tmp4) {
      const intl = getSystemLocale.intl;
      str = intl.string(getSystemLocale.t.QCw1oW);
    }
  }
};