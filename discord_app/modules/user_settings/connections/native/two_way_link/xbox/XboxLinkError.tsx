// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import useNavigation from "../../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useConnectRetry from "../useConnectRetry.tsx";
import TwoWayLinkError from "../TwoWayLinkError.tsx";
import { XboxLinkModalScenes } from "XboxLinkConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx",
);

export default function XboxLinkDiscordError(onClose) {
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.INwPCV);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.GyXRRz);
  obj[2] = onClose.onClose;
  obj[3] = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
}
