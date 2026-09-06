// === Module 9258: PlayStationLinkPreConnect ===

// Module 9258 (PlayStationLinkPreConnect)
import _modDef9259 from "module_9259" /* 9259 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(9255).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = function PlayStationLinkPreConnect(platformType) {
  let navigation;
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = noop.useMemo(() => ({ uri: _modDef9259 }), []);
  obj = { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: closure_6().image, title: null, body: null };
  const intl = navigation(1114).intl;
  obj.title = intl.string(navigation(1114).t["6n+UPR"]);
  const intl2 = navigation(1114).intl;
  obj.body = intl2.string(navigation(1114).t.JaaqIf);
  return jsx(navigation(9230).TwoWayLinkPreConnect, { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: closure_6().image, title: null, body: null });
};