// === Module 8767: PlayStationLinkLanding ===

// Module 8767 (PlayStationLinkLanding)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef8768 from "module_8768" /* 8768 */;
import noop from "module_19" /* 19 */;

const require = fn;
const constants = fn(8766).PlayStationLinkModalScenes;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  const cResult = navigation(576).c(11);
  platformType = platformType.platformType;
  const tmp4 = closure_7();
  const obj = navigation(576);
  navigation = navigation(1490).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
    const intl = tmp(1126).intl;
    const obj4 = { helpdeskArticleUrl: articleURL };
    const formatResult = intl.format(tmp(1126).t.kqZQNe, obj4);
    cResult[0] = formatResult;
    let first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { label: null, subLabel: null, icon: null };
    const intl2 = tmp(1126).intl;
    obj5.label = intl2.string(tmp(1126).t["+eJP7o"]);
    const intl3 = tmp(1126).intl;
    obj5.subLabel = intl3.string(tmp(1126).t["+0VIUh"]);
    obj5.icon = tmp(5885).VoiceNormalIcon;
    const items = [obj5, ];
    const obj6 = { label: null, icon: null };
    const intl4 = tmp(1126).intl;
    obj6.label = intl4.string(tmp(1126).t.ZH4QFa);
    obj6.icon = tmp(8739).GameControllerIcon;
    items[1] = obj6;
    cResult[1] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
    cResult[2] = navigation;
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
    tmp14[0] = _modDef8768;
    cResult[4] = tmp14;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
    const stringResult = obj7.string(tmp(1126).t.xAWHOy);
    const intl5 = tmp(1126).intl;
    const stringResult1 = intl5.string(tmp(1126).t["ZJ/vBh"]);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    let tmp17 = stringResult1;
    const tmp16 = stringResult;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
    tmp17 = cResult[6];
  }
  if (cResult[7] === N) {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
  }
  const obj2 = navigation(1490);
  cResult[7] = N;
  cResult[8] = platformType;
  cResult[9] = tmp4.image;
  cResult[10] = jsx(navigation(8741).TwoWayLinkLanding, { platformType, img: tmp14, imgStyle: tmp4.image, headerConnect: tmp16, headerReconnect: tmp17, body: first, onNext: N, valueProps: tmp11 });
  const tmp20 = jsx(navigation(8741).TwoWayLinkLanding, { platformType, img: tmp14, imgStyle: tmp4.image, headerConnect: tmp16, headerReconnect: tmp17, body: first, onNext: N, valueProps: tmp11 });
}) : ((platformType) => {
  let navigation;
  const tmp = closure_7();
  navigation = navigation(1490).useNavigation();
  let obj = navigation(1490);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1126).intl;
  let items = [navigation];
  const memo = noop.useMemo(() => {
    const obj = { label: null, subLabel: null, icon: null };
    const intl = navigation(1126).intl;
    obj.label = intl.string(navigation(1126).t["+eJP7o"]);
    const intl2 = navigation(1126).intl;
    obj.subLabel = intl2.string(navigation(1126).t["+0VIUh"]);
    obj.icon = navigation(5885).VoiceNormalIcon;
    const items = [obj, ];
    const obj2 = { label: null, icon: null };
    const intl3 = navigation(1126).intl;
    obj2.label = intl3.string(navigation(1126).t.ZH4QFa);
    obj2.icon = navigation(8739).GameControllerIcon;
    items[1] = obj2;
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const memo1 = noop.useMemo(() => ({ uri: _modDef8768 }), []);
  const obj3 = { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1126).intl;
  obj3.headerConnect = intl2.string(navigation(1126).t.xAWHOy);
  let intl3 = navigation(1126).intl;
  obj3.headerReconnect = intl3.string(navigation(1126).t["ZJ/vBh"]);
  obj3.body = intl.format(navigation(1126).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj3.onNext = callback;
  obj3.valueProps = memo;
  return jsx(navigation(8741).TwoWayLinkLanding, { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
});