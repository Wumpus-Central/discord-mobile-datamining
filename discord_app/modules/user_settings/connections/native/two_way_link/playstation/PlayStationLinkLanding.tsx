// === Module 10634: PlayStationLinkLanding ===

// Module 10634 (PlayStationLinkLanding)
import combinedDefault from "combined" /* 1995 */;
import closure_3 from "noop" /* 19 */;
import { PlayStationLinkModalScenes as closure_4 } from "PlayStationLinkModalScenes" /* 10633 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
let closure_7 = createCacheKey.createStyles({ image: { width: 230, height: 160 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = function PlayStationLinkLanding(platformType) {
  let navigation;
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const tmp = callback();
  const articleURL = combinedDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1236).intl;
  const obj2 = combinedDefault;
  let items = [navigation];
  const memo = React.useMemo(() => {
    let obj = { label: null, subLabel: null, icon: null };
    const intl = navigation(1236).intl;
    obj[0] = intl.string(navigation(1236).t["+eJP7o"]);
    const intl2 = navigation(1236).intl;
    obj[1] = intl2.string(navigation(1236).t["+0VIUh"]);
    obj[2] = navigation(4931).VoiceNormalIcon;
    const items = [obj, ];
    obj = { label: null, icon: null };
    const intl3 = navigation(1236).intl;
    obj[0] = intl3.string(navigation(1236).t.ZH4QFa);
    obj[1] = navigation(8909).GameControllerIcon;
    items[1] = obj;
    return items;
  }, []);
  callback = React.useCallback(() => {
    navigation.push(closure_1_4.PRE_CONNECT);
  }, items);
  const memo1 = React.useMemo(() => ({ uri: callback(10635) }), []);
  obj = { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1236).intl;
  obj[3] = intl2.string(navigation(1236).t.xAWHOy);
  let intl3 = navigation(1236).intl;
  obj[4] = intl3.string(navigation(1236).t["ZJ/vBh"]);
  obj[5] = intl.format(navigation(1236).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj[6] = callback;
  obj[7] = memo;
  return jsx(navigation(10571).TwoWayLinkLanding, { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
};