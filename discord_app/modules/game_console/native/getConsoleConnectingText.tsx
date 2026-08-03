// === Module 16083: getConsoleConnectingText ===

// Module 16083 (getConsoleConnectingText)
import { PlatformTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/game_console/native/getConsoleConnectingText.tsx");

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
      const intl4 = require(1236) /* getSystemLocale */.intl;
      let str2 = intl4.format(require(1236) /* getSystemLocale */.t["ynEs/Y"], {});
    } else {
      str2 = "Xbox";
      if (tmp4) {
        const intl3 = require(1236) /* getSystemLocale */.intl;
        str2 = intl3.string(require(1236) /* getSystemLocale */.t.UjA4HX);
      }
    }
  } else if (arg2) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    let str = intl2.format(require(1236) /* getSystemLocale */.t.TZ17Bg, {});
  } else {
    str = "PS5";
    if (tmp4) {
      const intl = require(1236) /* getSystemLocale */.intl;
      str = intl.string(require(1236) /* getSystemLocale */.t.QCw1oW);
    }
  }
};