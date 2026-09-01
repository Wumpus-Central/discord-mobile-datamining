// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx
import combinedDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import closure_3 from "../../../../../../../_runtime/00019_noop.js";
import { PlayStationLinkModalScenes as closure_4 } from "PlayStationLinkConstants.tsx";
import { HelpdeskArticles } from "../../../../../../Constants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ image: { width: 230, height: 160 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = function PlayStationLinkLanding(platformType) {
  let navigation;
  let obj = navigation(1499);
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
    obj[2] = navigation(5050).VoiceNormalIcon;
    const items = [obj, ];
    obj = { label: null, icon: null };
    const intl3 = navigation(1236).intl;
    obj[0] = intl3.string(navigation(1236).t.ZH4QFa);
    obj[1] = navigation(9199).GameControllerIcon;
    items[1] = obj;
    return items;
  }, []);
  callback = React.useCallback(() => {
    navigation.push(closure_1_4.PRE_CONNECT);
  }, items);
  const memo1 = React.useMemo(() => ({ uri: callback(9332) }), []);
  obj = { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1236).intl;
  obj[3] = intl2.string(navigation(1236).t.xAWHOy);
  let intl3 = navigation(1236).intl;
  obj[4] = intl3.string(navigation(1236).t["ZJ/vBh"]);
  obj[5] = intl.format(navigation(1236).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj[6] = callback;
  obj[7] = memo;
  return jsx(navigation(9305).TwoWayLinkLanding, { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
};