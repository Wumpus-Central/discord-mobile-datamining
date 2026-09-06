// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx
import _modDef9276 from "../../../../../../../_runtime/metro/09276__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_4 = fn(9272).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const redirectDestination = fn(8338).CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx",
);

export default function CrunchyrollLinkPreConnect() {
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  obj = {
    platformType: PlatformTypes.CRUNCHYROLL,
    onError: callback1,
    onNext: callback,
    img: _modDef9276,
    imgStyle: closure_8().image,
    title: null,
    body: null,
    redirectDestination: null,
  };
  const intl = navigation(1114).intl;
  obj.title = intl.string(navigation(1114).t.siPkNp);
  const intl2 = navigation(1114).intl;
  obj.body = intl2.string(navigation(1114).t.oS4NEH);
  obj.redirectDestination = redirectDestination;
  return jsx(navigation(9230).TwoWayLinkPreConnect, {
    platformType: PlatformTypes.CRUNCHYROLL,
    onError: callback1,
    onNext: callback,
    img: _modDef9276,
    imgStyle: closure_8().image,
    title: null,
    body: null,
    redirectDestination: null,
  });
}
