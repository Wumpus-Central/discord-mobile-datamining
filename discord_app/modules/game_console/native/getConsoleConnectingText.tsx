// discord_app/modules/game_console/native/getConsoleConnectingText.tsx
import { PlatformTypes } from "ME";
import { getSystemLocale } from "../../../intl/index.native.tsx";

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
      const intl4 = getSystemLocale /* getSystemLocale */.intl;
      let str2 = intl4.format(getSystemLocale /* getSystemLocale */.t["ynEs/Y"], {});
    } else {
      str2 = "Xbox";
      if (tmp4) {
        const intl3 = getSystemLocale /* getSystemLocale */.intl;
        str2 = intl3.string(getSystemLocale /* getSystemLocale */.t.UjA4HX);
      }
    }
  } else if (arg2) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    let str = intl2.format(getSystemLocale /* getSystemLocale */.t.TZ17Bg, {});
  } else {
    str = "PS5";
    if (tmp4) {
      const intl = getSystemLocale /* getSystemLocale */.intl;
      str = intl.string(getSystemLocale /* getSystemLocale */.t.QCw1oW);
    }
  }
};