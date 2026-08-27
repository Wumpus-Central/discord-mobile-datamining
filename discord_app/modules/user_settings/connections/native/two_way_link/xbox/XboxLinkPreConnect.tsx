// === Module 9229: XboxLinkPreConnect ===

// Module 9229 (XboxLinkPreConnect)
import closure_3 from "noop" /* 19 */;
import { XboxLinkModalScenes } from "XboxLinkModalScenes" /* 9223 */;
import { PlatformTypes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
let closure_7 = createCacheKey.createStyles({ image: { width: 231, height: 160 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default function XboxLinkPreConnect() {
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
  const memo = React.useMemo(() => ({ uri: callback(table[6]) }), []);
  obj = { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image, title: null, body: null };
  const intl = navigation(1236).intl;
  obj[5] = intl.string(navigation(1236).t["e/z3na"]);
  const intl2 = navigation(1236).intl;
  obj[6] = intl2.string(navigation(1236).t["7tXu0i"]);
  return jsx(navigation(9231).TwoWayLinkPreConnect, { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image, title: null, body: null });
};