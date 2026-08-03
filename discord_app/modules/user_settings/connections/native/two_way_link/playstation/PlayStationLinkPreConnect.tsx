import noop from "noop";
import { PlayStationLinkModalScenes as closure_4 } from "PlayStationLinkModalScenes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles({ image: { width: 231, height: 160 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = function PlayStationLinkPreConnect(platformType) {
  let navigation;
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(outer1_4.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_4.ERROR, {});
  }, items1);
  const memo = React.useMemo(() => ({ uri: callback(table[5]) }), []);
  obj = { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image, title: null, body: null };
  const intl = navigation(1236).intl;
  obj[5] = intl.string(navigation(1236).t["6n+UPR"]);
  const intl2 = navigation(1236).intl;
  obj[6] = intl2.string(navigation(1236).t.JaaqIf);
  return jsx(navigation(8951).TwoWayLinkPreConnect, { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image, title: null, body: null });
};