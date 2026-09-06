// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx
import util from "../../../../../../intl/index.native.tsx";
import useNavigation from "../../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useConnectRetry from "../useConnectRetry.tsx";
import TwoWayLinkError from "../TwoWayLinkError.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const constants = fn(9255).PlayStationLinkModalScenes;
const AbortCodes = fn(1074).AbortCodes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx",
);

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  ({ onClose, errorCode } = arg0);
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["3dIn2A"]);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.qE9nqE);
  }
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl3 = util.intl;
  obj.title = intl3.string(util.t.eY3qHd);
  obj.body = stringResult;
  obj.onClose = onClose;
  obj.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};
