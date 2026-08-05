import { useNavigation } from "../../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { getSystemLocale } from "../../../../../../intl/index.native.tsx";
import { TwoWayLinkError } from "../TwoWayLinkError.tsx";
import { useConnectRetry } from "../useConnectRetry.tsx";
// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx
import "noop";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  let obj = useNavigation /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry /* useConnectRetry */.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.INwPCV);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.GyXRRz);
  obj[2] = onClose.onClose;
  obj[3] = connectRetry;
  return jsx(TwoWayLinkError /* TwoWayLinkError */.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};