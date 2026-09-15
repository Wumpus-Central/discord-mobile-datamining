// === Module 9407: CrunchyrollLinkPreConnect ===

// Module 9407 (CrunchyrollLinkPreConnect)
import _modDef9408 from "module_9408" /* 9408 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(9404).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const redirectDestination = fn(8459).CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  const tmp = closure_8();
  navigation = navigation(1484).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const obj2 = { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: _modDef9408, imgStyle: tmp.image, title: null, body: null, redirectDestination: null };
  const intl = navigation(1115).intl;
  obj2.title = intl.string(navigation(1115).t.siPkNp);
  const intl2 = navigation(1115).intl;
  obj2.body = intl2.string(navigation(1115).t.oS4NEH);
  obj2.redirectDestination = redirectDestination;
  return jsx(navigation(9362).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: _modDef9408, imgStyle: tmp.image, title: null, body: null, redirectDestination: null });
};