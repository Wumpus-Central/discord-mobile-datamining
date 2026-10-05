// === Module 8767: PlayStationLinkLanding ===

// Module 8767 (PlayStationLinkLanding)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 8766 */;
import _modDef8768 from "module_8768" /* 8768 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let arr, navigation, platformType;

const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  let first;
  let intl2;
  let intl3;
  let intl4;
  let tmp11;
  let tmp17;
  const obj = navigation(576);
  const cResult = obj.c(11);
  platformType = platformType.platformType;
  const tmp4 = closure_7();
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = HelpdeskUtilsDefault;
    const articleURL = obj3.getArticleURL(HelpdeskArticles.PS_CONNECTION);
    const intl = tmp(1126).intl;
    const obj4 = { helpdeskArticleUrl: articleURL };
    const formatResult = intl.format(navigation(1126).t.kqZQNe, obj4);
    cResult[0] = formatResult;
    first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { label: intl2.string(navigation(1126).t["+eJP7o"]), subLabel: intl3.string(navigation(1126).t["+0VIUh"]), icon: navigation(5885).VoiceNormalIcon };
    intl2 = tmp(1126).intl;
    intl3 = tmp(1126).intl;
    const items = [obj5, ];
    const obj6 = { label: intl4.string(navigation(1126).t.ZH4QFa), icon: navigation(8739).GameControllerIcon };
    intl4 = tmp(1126).intl;
    items[1] = obj6;
    cResult[1] = items;
    tmp11 = items;
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
  const image = tmp4.image;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
    const stringResult = obj7.string(navigation(1126).t.xAWHOy);
    const intl5 = tmp(1126).intl;
    const stringResult1 = intl5.string(navigation(1126).t["ZJ/vBh"]);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    tmp17 = stringResult1;
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
  cResult[7] = N;
  cResult[8] = platformType;
  cResult[9] = tmp4.image;
  cResult[10] = jsx(navigation(8741).TwoWayLinkLanding, { platformType, img: tmp14, imgStyle: image, headerConnect: tmp16, headerReconnect: tmp17, body: first, onNext: N, valueProps: tmp11 });
  jsx(navigation(8741).TwoWayLinkLanding, { platformType, img: tmp14, imgStyle: image, headerConnect: tmp16, headerReconnect: tmp17, body: first, onNext: N, valueProps: tmp11 });
}) : ((platformType) => {
  navigation = undefined;
  platformType = platformType.platformType;
  const tmp = closure_7();
  let obj = navigation(1490);
  navigation = obj.useNavigation();
  let obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1126).intl;
  let items = [navigation];
  const formatResult = intl.format(navigation(1126).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(navigation(dependencyMap[5]).t["+eJP7o"]), subLabel: intl2.string(navigation(dependencyMap[5]).t["+0VIUh"]), icon: navigation(dependencyMap[6]).VoiceNormalIcon };
    intl = navigation(dependencyMap[5]).intl;
    intl2 = navigation(dependencyMap[5]).intl;
    const items = [obj, ];
    const obj2 = { label: intl3.string(navigation(dependencyMap[5]).t.ZH4QFa), icon: navigation(dependencyMap[7]).GameControllerIcon };
    intl3 = navigation(dependencyMap[5]).intl;
    items[1] = obj2;
    return items;
  }, []);
  const callback = react.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = { uri: _modDef8768 };
    return obj;
  }, []);
  const TwoWayLinkLanding = navigation(8741).TwoWayLinkLanding;
  let intl2 = navigation(1126).intl;
  let intl3 = navigation(1126).intl;
  return <TwoWayLinkLanding platformType={platformType} img={memo1} imgStyle={tmp.image} headerConnect={intl2.string(navigation(1126).t.xAWHOy)} headerReconnect={intl3.string(navigation(1126).t["ZJ/vBh"])} body={formatResult} onNext={callback} valueProps={memo} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = tmp2;