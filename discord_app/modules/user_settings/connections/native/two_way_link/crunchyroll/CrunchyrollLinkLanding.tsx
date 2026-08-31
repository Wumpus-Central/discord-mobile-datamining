// === Module 9303: CrunchyrollLinkLanding ===

// Module 9303 (CrunchyrollLinkLanding)
import combinedDefault from "combined" /* 1995 */;
import registerAssetDefault from "registerAsset" /* 9304 */;
import closure_3 from "noop" /* 19 */;
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkModalScenes" /* 9302 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ HelpdeskArticles: c5, PlatformTypes: closure_6 } = ME);
let closure_8 = createCacheKey.createStyles({ image: { width: 234, height: 147 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx");

export default function CrunchyrollLinkLanding() {
  let obj = navigation(1499);
  navigation = obj.useNavigation();
  let items = [navigation];
  const memo = React.useMemo(() => {
    const obj = { label: null, icon: null };
    const intl = navigation(1236).intl;
    obj[0] = intl.string(navigation(1236).t["2TXHQd"]);
    obj[1] = navigation(8546).PlayIcon;
    const items = [obj];
    return items;
  }, []);
  const callback = React.useCallback(() => {
    navigation.push(closure_1_4.PRE_CONNECT);
  }, items);
  obj = { platformType: constants2.CRUNCHYROLL, img: registerAssetDefault, imgStyle: callback().image, headerConnect: null, body: null, learnMoreLink: null, onNext: null, valueProps: null };
  let intl = navigation(1236).intl;
  obj[3] = intl.string(navigation(1236).t["Da+3NJ"]);
  const intl2 = navigation(1236).intl;
  obj[4] = intl2.string(navigation(1236).t.MaPpPL);
  const tmp = callback();
  obj[5] = combinedDefault.getArticleURL(constants.CRUNCHYROLL_CONNECTION);
  obj[6] = callback;
  obj[7] = memo;
  return jsx(navigation(9266).TwoWayLinkLanding, { platformType: constants2.CRUNCHYROLL, img: registerAssetDefault, imgStyle: callback().image, headerConnect: null, body: null, learnMoreLink: null, onNext: null, valueProps: null });
};