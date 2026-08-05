// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx
import "noop";
import { CrunchyrollLinkModalScenes as closure_2 } from "CrunchyrollLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default function CrunchyrollLinkDiscordError(onClose) {
  let obj = require("../../../../../../design/components/Navigator/native/useNavigation.native.tsx") /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require("../useConnectRetry.tsx") /* useConnectRetry */.useConnectRetry(navigation, constants.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t["8YK70c"]);
  const intl2 = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.moyYLf);
  obj[2] = onClose.onClose;
  obj[3] = connectRetry;
  return jsx(require("../TwoWayLinkError.tsx") /* TwoWayLinkError */.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};