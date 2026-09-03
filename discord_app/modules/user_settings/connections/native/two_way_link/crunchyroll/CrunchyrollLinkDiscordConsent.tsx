// === Module 9363: CrunchyrollLinkDiscordConsent ===

// Module 9363 (CrunchyrollLinkDiscordConsent)
import closure_2 from "noop" /* 19 */;
import { CrunchyrollLinkModalScenes as closure_3 } from "CrunchyrollLinkModalScenes" /* 9358 */;
import { PlatformTypes } from "ME" /* 673 */;
import CRUNCHYROLL_LINK_DEST_ORIGIN from "CRUNCHYROLL_LINK_DEST_ORIGIN" /* 8628 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ CRUNCHYROLL_CLIENT_ID: c5, CRUNCHYROLL_CLIENT_SCOPES: closure_6 } = CRUNCHYROLL_LINK_DEST_ORIGIN);
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx");

export default function CrunchyrollLinkDiscordConsent(arg0) {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(closure_1_3.SUCCESS);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(closure_1_3.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId: closure_5, scopes: closure_6, onNext: callback, onError: callback1 };
  return jsx(navigation(9331).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId: closure_5, scopes: closure_6, onNext: callback, onError: callback1 });
};