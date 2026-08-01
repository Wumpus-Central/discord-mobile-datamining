// === Module 8999: CrunchyrollLinkDiscordConsent ===

// Module 8999 (CrunchyrollLinkDiscordConsent)
import noop from "noop";
import { CrunchyrollLinkModalScenes as closure_3 } from "CrunchyrollLinkModalScenes";
import { PlatformTypes } from "ME";
import CRUNCHYROLL_LINK_DEST_ORIGIN from "CRUNCHYROLL_LINK_DEST_ORIGIN";
import { jsx } from "jsxProd";

let c5;
let closure_6;
const require = arg1;
({ CRUNCHYROLL_CLIENT_ID: c5, CRUNCHYROLL_CLIENT_SCOPES: closure_6 } = CRUNCHYROLL_LINK_DEST_ORIGIN);
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx");

export default function CrunchyrollLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(outer1_3.SUCCESS);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_3.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId: closure_5, scopes: closure_6, onNext: callback, onError: callback1 };
  return jsx(navigation(8955).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId: closure_5, scopes: closure_6, onNext: callback, onError: callback1 });
};