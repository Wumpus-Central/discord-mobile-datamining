// === Module 9153: PlayStationLinkPreConnect ===

// Module 9153 (PlayStationLinkPreConnect)
import _modDef9154 from "module_9154" /* 9154 */;
import noop from "module_19" /* 19 */;

const require = fn;
const constants = fn(9150).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = ReactCompilerGating.isReactCompilerEnabled() ? (function PlayStationLinkPreConnect(platformType) {
  const cResult = navigation(576).c(12);
  platformType = platformType.platformType;
  const tmp4 = closure_6();
  const obj = navigation(576);
  navigation = navigation(1502).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function s(arg0) {
      navigation.push(constants.DISCORD_CONSENT, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    class S {
      constructor() {
        arr = closure_0.push(closure_4.ERROR, {});
        return;
      }
    }
    cResult[2] = navigation;
    cResult[3] = S;
  } else {
    class S {
      constructor() {
        arr = closure_0.push(closure_4.ERROR, {});
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        arr = closure_0.push(closure_4.ERROR, {});
        return;
      }
    }
    tmp9[0] = _modDef9154;
    cResult[4] = tmp9;
  } else {
    class S {
      constructor() {
        arr = closure_0.push(closure_4.ERROR, {});
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        arr = closure_0.push(closure_4.ERROR, {});
        return;
      }
    }
    const stringResult = obj3.string(tmp(1126).t["6n+UPR"]);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp(1126).t.JaaqIf);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    let tmp12 = stringResult1;
    const tmp11 = stringResult;
  } else {
    class S {
      constructor() {
        arr = closure_0.push(closure_4.ERROR, {});
        return;
      }
    }
    tmp12 = cResult[6];
  }
  if (cResult[7] === S) {
    class S {
      constructor() {
        arr = closure_0.push(closure_4.ERROR, {});
        return;
      }
    }
  }
  const obj2 = navigation(1502);
  cResult[7] = S;
  cResult[8] = tmp6;
  cResult[9] = platformType;
  cResult[10] = tmp4.image;
  cResult[11] = jsx(navigation(9124).TwoWayLinkPreConnect, { platformType, onError: S, onNext: tmp6, img: tmp9, imgStyle: tmp4.image, title: tmp11, body: tmp12 });
  const tmp15 = jsx(navigation(9124).TwoWayLinkPreConnect, { platformType, onError: S, onNext: tmp6, img: tmp9, imgStyle: tmp4.image, title: tmp11, body: tmp12 });
}) : (function PlayStationLinkPreConnect(platformType) {
  let navigation;
  const tmp = closure_6();
  navigation = navigation(1502).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = noop.useMemo(() => ({ uri: _modDef9154 }), []);
  const obj2 = { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null };
  const intl = navigation(1126).intl;
  obj2.title = intl.string(navigation(1126).t["6n+UPR"]);
  const intl2 = navigation(1126).intl;
  obj2.body = intl2.string(navigation(1126).t.JaaqIf);
  return jsx(navigation(9124).TwoWayLinkPreConnect, { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null });
});