// === Module 7397: XboxLinkPreConnect ===

// Module 7397 (XboxLinkPreConnect)
import _modDef7398 from "module_7398" /* 7398 */;
import noop from "module_19" /* 19 */;

const require = fn;
const XboxLinkModalScenes = fn(7362).XboxLinkModalScenes;
const PlatformTypes = fn(1072).PlatformTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let closure_7 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default function XboxLinkPreConnect(autoStart) {
  let navigation;
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
  const memo = noop.useMemo(() => ({ uri: _modDef7398 }), []);
  const obj2 = { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null, autoStart: null };
  const intl = navigation(1113).intl;
  obj2.title = intl.string(navigation(1113).t["e/z3na"]);
  const intl2 = navigation(1113).intl;
  obj2.body = intl2.string(navigation(1113).t["7tXu0i"]);
  obj2.autoStart = autoStart.autoStart;
  return jsx(navigation(7399).TwoWayLinkPreConnect, { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null, autoStart: null });
};