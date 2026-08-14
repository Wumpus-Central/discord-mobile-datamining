// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx
import noop from "noop";
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkModalScenes";
import { PlatformTypes } from "ME";
import { CRUNCHYROLL_LINK_DEST_ORIGIN as closure_6 } from "CRUNCHYROLL_LINK_DEST_ORIGIN";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../../_runtime/10553_registerAsset.js";

const require = arg1;
let closure_8 = createCacheKey.createStyles({ image: { width: 152, height: 123 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  let obj = navigation(1499);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(outer1_4.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_4.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: null, imgStyle: null, title: null, body: null, redirectDestination: null };
  obj[3] = registerAsset;
  obj[4] = callback().image;
  const intl = navigation(1236).intl;
  obj[5] = intl.string(navigation(1236).t.siPkNp);
  const intl2 = navigation(1236).intl;
  obj[6] = intl2.string(navigation(1236).t.oS4NEH);
  obj[7] = closure_6;
  return jsx(navigation(10481).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: null, imgStyle: null, title: null, body: null, redirectDestination: null });
};