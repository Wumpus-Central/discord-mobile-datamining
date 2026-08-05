// discord_app/modules/game_console/native/getConsoleConnectingText.tsx
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
      const intl4 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      let str2 = intl4.format(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["ynEs/Y"], {});
    } else {
      str2 = "Xbox";
      if (tmp4) {
        const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        str2 = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.UjA4HX);
      }
    }
  } else if (arg2) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let str = intl2.format(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.TZ17Bg, {});
  } else {
    str = "PS5";
    if (tmp4) {
      const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      str = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.QCw1oW);
    }
  }
};