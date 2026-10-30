// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx
import _modDef14590 from "../../../../../../../discord_assets/assets/connections/ps_discord_link.png.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_4 = fn(14586).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx",
);

export function PlayStationLinkPreConnect(platformType) {
  let navigation;
  const tmp = closure_6();
  navigation = navigation(1498).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = noop.useMemo(() => ({ uri: _modDef14590 }), []);
  const obj2 = {
    platformType: platformType.platformType,
    onError: callback1,
    onNext: callback,
    img: memo,
    imgStyle: tmp.image,
    title: null,
    body: null,
  };
  const intl = navigation(1114).intl;
  obj2.title = intl.string(navigation(1114).t["6n+UPR"]);
  const intl2 = navigation(1114).intl;
  obj2.body = intl2.string(navigation(1114).t.JaaqIf);
  return jsx(navigation(9714).TwoWayLinkPreConnect, {
    platformType: platformType.platformType,
    onError: callback1,
    onNext: callback,
    img: memo,
    imgStyle: tmp.image,
    title: null,
    body: null,
  });
}
