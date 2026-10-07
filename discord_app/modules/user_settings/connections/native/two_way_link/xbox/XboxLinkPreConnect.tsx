// === Module 8776: XboxLinkPreConnect ===

// Module 8776 (XboxLinkPreConnect)
import _modDef8777 from "module_8777" /* 8777 */;
import noop from "module_19" /* 19 */;

const require = fn;
const XboxLinkModalScenes = fn(8767).XboxLinkModalScenes;
const PlatformTypes = fn(1085).PlatformTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(576).c(11);
  const tmp4 = closure_7();
  const obj = navigation(576);
  navigation = navigation(1490).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t(arg0) {
      navigation.push(XboxLinkModalScenes.DISCORD_CONSENT, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    const fn2 = function _() {
      navigation.push(XboxLinkModalScenes.ERROR);
    };
    cResult[2] = navigation;
    cResult[3] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { uri: _modDef8777 };
    cResult[4] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["e/z3na"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t["7tXu0i"]);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    let tmp11 = stringResult1;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[5];
    tmp11 = cResult[6];
  }
  if (cResult[7] === tmp7) {
    if (cResult[8] === tmp6) {
      if (cResult[9] === tmp4.image) {
        let tmp14 = cResult[10];
      }
      return tmp14;
    }
  }
  const tmp15 = jsx(navigation(8778).TwoWayLinkPreConnect, { platformType: PlatformTypes.XBOX, onError: tmp7, onNext: tmp6, img: tmp8, imgStyle: tmp4.image, title: tmp10, body: tmp11 });
  cResult[7] = tmp7;
  cResult[8] = tmp6;
  cResult[9] = tmp4.image;
  cResult[10] = tmp15;
  tmp14 = tmp15;
  const obj2 = navigation(1490);
  const obj4 = { platformType: PlatformTypes.XBOX, onError: tmp7, onNext: tmp6, img: tmp8, imgStyle: tmp4.image, title: tmp10, body: tmp11 };
}) : (() => {
  const tmp = closure_7();
  navigation = navigation(1490).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(XboxLinkModalScenes.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const memo = noop.useMemo(() => ({ uri: _modDef8777 }), []);
  const obj2 = { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null };
  const intl = navigation(1126).intl;
  obj2.title = intl.string(navigation(1126).t["e/z3na"]);
  const intl2 = navigation(1126).intl;
  obj2.body = intl2.string(navigation(1126).t["7tXu0i"]);
  return jsx(navigation(8778).TwoWayLinkPreConnect, { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null });
});