// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx
import _modDef9229 from "../../../../../../../discord_assets/assets/connections/xbox_discord_link.png.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const XboxLinkModalScenes = fn(9219).XboxLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx",
);

export default function XboxLinkPreConnect() {
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(XboxLinkModalScenes.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const memo = noop.useMemo(() => ({ uri: _modDef9229 }), []);
  obj = {
    platformType: PlatformTypes.XBOX,
    onError: callback1,
    onNext: callback,
    img: memo,
    imgStyle: closure_7().image,
    title: null,
    body: null,
  };
  const intl = navigation(1114).intl;
  obj.title = intl.string(navigation(1114).t["e/z3na"]);
  const intl2 = navigation(1114).intl;
  obj.body = intl2.string(navigation(1114).t["7tXu0i"]);
  return jsx(navigation(9230).TwoWayLinkPreConnect, {
    platformType: PlatformTypes.XBOX,
    onError: callback1,
    onNext: callback,
    img: memo,
    imgStyle: closure_7().image,
    title: null,
    body: null,
  });
}
