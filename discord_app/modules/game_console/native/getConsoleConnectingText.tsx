// discord_app/modules/game_console/native/getConsoleConnectingText.tsx
import Constants from "../../../Constants.tsx";
import util from "../../../intl/index.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleConnectingText.tsx");

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
      const intl4 = util.intl;
      let str2 = intl4.format(util.t["ynEs/Y"], {});
    } else {
      str2 = "Xbox";
      if (tmp4) {
        const intl3 = util.intl;
        str2 = intl3.string(util.t.UjA4HX);
      }
    }
  } else if (arg2) {
    const intl2 = util.intl;
    let str = intl2.format(util.t.TZ17Bg, {});
  } else {
    str = "PS5";
    if (tmp4) {
      const intl = util.intl;
      str = intl.string(util.t.QCw1oW);
    }
  }
};
