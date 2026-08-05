// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx
import "noop";
import { PlayStationLinkModalScenes as closure_2 } from "PlayStationLinkModalScenes";
import { AbortCodes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  let errorCode;
  let onClose;
  ({ onClose, errorCode } = arg0);
  let obj = require("../../../../../../design/components/Navigator/native/useNavigation.native.tsx") /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require("../useConnectRetry.tsx") /* useConnectRetry */.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = tmp(1236).intl;
    let stringResult = intl2.string(tmp(1236).t["3dIn2A"]);
  } else {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.qE9nqE);
  }
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl3 = tmp(1236).intl;
  obj[0] = intl3.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.eY3qHd);
  obj[1] = stringResult;
  obj[2] = onClose;
  obj[3] = connectRetry;
  return jsx(require("../TwoWayLinkError.tsx") /* TwoWayLinkError */.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};