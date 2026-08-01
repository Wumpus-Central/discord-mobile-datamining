// === Module 8995: CrunchyrollLinkLanding ===

// Module 8995 (CrunchyrollLinkLanding)
import noop from "noop";
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkModalScenes";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ HelpdeskArticles: c5, PlatformTypes: closure_6 } = ME);
let closure_8 = createCacheKey.createStyles({ image: { width: 234, height: 147 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx");

export default function CrunchyrollLinkLanding() {
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  let items = [navigation];
  const memo = React.useMemo(() => {
    const obj = { label: null, icon: null };
    const intl = navigation(1236).intl;
    obj[0] = intl.string(navigation(1236).t["2TXHQd"]);
    obj[1] = navigation(8131).PlayIcon;
    const items = [obj];
    return items;
  }, []);
  const callback = React.useCallback(() => {
    navigation.push(outer1_4.PRE_CONNECT);
  }, items);
  obj = { platformType: constants2.CRUNCHYROLL, img: null, imgStyle: null, headerConnect: null, body: null, learnMoreLink: null, onNext: null, valueProps: null };
  obj[1] = importDefault(8996);
  obj[2] = callback().image;
  let intl = navigation(1236).intl;
  obj[3] = intl.string(navigation(1236).t["Da+3NJ"]);
  const intl2 = navigation(1236).intl;
  obj[4] = intl2.string(navigation(1236).t.MaPpPL);
  const tmp = callback();
  obj[5] = importDefault(1945).getArticleURL(constants.CRUNCHYROLL_CONNECTION);
  obj[6] = callback;
  obj[7] = memo;
  return jsx(navigation(8946).TwoWayLinkLanding, { platformType: constants2.CRUNCHYROLL, img: null, imgStyle: null, headerConnect: null, body: null, learnMoreLink: null, onNext: null, valueProps: null });
};