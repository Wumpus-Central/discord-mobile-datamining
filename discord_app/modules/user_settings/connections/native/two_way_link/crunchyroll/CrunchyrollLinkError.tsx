// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx
import util from "../../../../../../intl/index.native.tsx";
import useNavigation from "../../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useConnectRetry from "../useConnectRetry.tsx";
import TwoWayLinkError from "../TwoWayLinkError.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const constants = fn(9272).CrunchyrollLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx",
);

export default function CrunchyrollLinkDiscordError(onClose) {
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["8YK70c"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.moyYLf);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
}
