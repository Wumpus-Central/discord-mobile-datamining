// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx
import util from "../../../../../../intl/index.native.tsx";
import useNavigation from "../../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useConnectRetry from "../useConnectRetry.tsx";
import TwoWayLinkError from "../TwoWayLinkError.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const XboxLinkModalScenes = fn(9219).XboxLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx",
);

export default function XboxLinkDiscordError(onClose) {
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.INwPCV);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.GyXRRz);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
}
