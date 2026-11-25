// === Module 7754: PlayStationLinkPreConnect ===

// Module 7754 (PlayStationLinkPreConnect)
import _modDef7755 from "module_7755" /* 7755 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(7751).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const createStyles = fn(5012);
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export function PlayStationLinkPreConnect(arg0) {
  let navigation;
  ({ platformType, autoStart } = arg0);
  const tmp = closure_6();
  navigation = navigation(1500).useNavigation();
  items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = noop.useMemo(() => ({ uri: _modDef7755 }), []);
  const obj2 = { platformType, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null, autoStart: null };
  const intl = navigation(1112).intl;
  obj2.title = intl.string(navigation(1112).t["6n+UPR"]);
  const intl2 = navigation(1112).intl;
  obj2.body = intl2.string(navigation(1112).t.JaaqIf);
  obj2.autoStart = autoStart;
  return jsx(navigation(7730).TwoWayLinkPreConnect, { platformType, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null, autoStart: null });
}