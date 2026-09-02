// === Module 9357: CrunchyrollLinkPreConnect ===

// Module 9357 (CrunchyrollLinkPreConnect)
import registerAssetDefault from "registerAsset" /* 9358 */;
import closure_3 from "noop" /* 19 */;
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkModalScenes" /* 9354 */;
import { PlatformTypes } from "ME" /* 673 */;
import { CRUNCHYROLL_LINK_DEST_ORIGIN as closure_6 } from "CRUNCHYROLL_LINK_DEST_ORIGIN" /* 8624 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let closure_8 = createCacheKey.createStyles({ image: { width: 152, height: 123 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(closure_1_4.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(closure_1_4.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: registerAssetDefault, imgStyle: callback().image, title: null, body: null, redirectDestination: null };
  const intl = navigation(1233).intl;
  obj[5] = intl.string(navigation(1233).t.siPkNp);
  const intl2 = navigation(1233).intl;
  obj[6] = intl2.string(navigation(1233).t.oS4NEH);
  obj[7] = closure_6;
  return jsx(navigation(9323).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: registerAssetDefault, imgStyle: callback().image, title: null, body: null, redirectDestination: null });
};