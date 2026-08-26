// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx
import registerAssetDefault from "../../../../../../../_runtime/10716_registerAsset.js";
import closure_3 from "../../../../../../../_runtime/00019_noop.js";
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkConstants.tsx";
import { PlatformTypes } from "../../../../../../Constants.tsx";
import { CRUNCHYROLL_LINK_DEST_ORIGIN as closure_6 } from "../../../../../connections/CrunchyrollConnectionConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_8 = createCacheKey.createStyles({ image: { width: 152, height: 123 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  let obj = navigation(1500);
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
  const intl = navigation(1236).intl;
  obj[5] = intl.string(navigation(1236).t.siPkNp);
  const intl2 = navigation(1236).intl;
  obj[6] = intl2.string(navigation(1236).t.oS4NEH);
  obj[7] = closure_6;
  return jsx(navigation(10644).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: registerAssetDefault, imgStyle: callback().image, title: null, body: null, redirectDestination: null });
};