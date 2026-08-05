// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx
import "noop";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  let obj = require("../../../../../../design/components/Navigator/native/useNavigation.native.tsx") /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require("../useConnectRetry.tsx") /* useConnectRetry */.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.INwPCV);
  const intl2 = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.GyXRRz);
  obj[2] = onClose.onClose;
  obj[3] = connectRetry;
  return jsx(require("../TwoWayLinkError.tsx") /* TwoWayLinkError */.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};