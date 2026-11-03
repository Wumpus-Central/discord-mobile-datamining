// === Module 9864: XboxLinkPreConnect ===

// Module 9864 (XboxLinkPreConnect)
import _modDef9865 from "module_9865" /* 9865 */;
import noop from "module_19" /* 19 */;

const require = fn;
const XboxLinkModalScenes = fn(9855).XboxLinkModalScenes;
const PlatformTypes = fn(1072).PlatformTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_7 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default function XboxLinkPreConnect() {
  const tmp = closure_7();
  navigation = navigation(1499).useNavigation();
  items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(XboxLinkModalScenes.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const memo = noop.useMemo(() => ({ uri: _modDef9865 }), []);
  const obj2 = { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null };
  const intl = navigation(1113).intl;
  obj2.title = intl.string(navigation(1113).t["e/z3na"]);
  const intl2 = navigation(1113).intl;
  obj2.body = intl2.string(navigation(1113).t["7tXu0i"]);
  return jsx(navigation(9866).TwoWayLinkPreConnect, { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null });
};