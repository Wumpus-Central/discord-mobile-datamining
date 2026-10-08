// === Module 9114: XboxLinkLanding ===

// Module 9114 (XboxLinkLanding)
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import GroupIcon from "GroupIcon" /* 8192 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8204 */;
import ScreenStreamIcon from "ScreenStreamIcon" /* 9115 */;
import GameControllerIcon from "GameControllerIcon" /* 9117 */;
import _modDef9118 from "module_9118" /* 9118 */;
import noop from "module_19" /* 19 */;

require = fn;
function getXboxValueProps() {
  const obj = { label: null, icon: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.ihQXsb);
  obj.icon = VoiceNormalIcon.VoiceNormalIcon;
  const items = [obj, , , ];
  const obj2 = { label: null, icon: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.Xt1n4P);
  obj2.icon = ScreenStreamIcon.ScreenStreamIcon;
  items[1] = obj2;
  const obj3 = { label: null, icon: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.xqVY3p);
  obj3.icon = GroupIcon.GroupIcon;
  items[2] = obj3;
  const obj4 = { label: null, icon: null };
  const intl4 = util.intl;
  obj4.label = intl4.string(util.t.iQsKVW);
  obj4.icon = GameControllerIcon.GameControllerIcon;
  items[3] = obj4;
  return items;
}
const XboxLinkModalScenes = fn(9113).XboxLinkModalScenes;
const Constants = fn(1085);
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function XboxLinkLanding() {
  const cResult = navigation(576).c(10);
  const tmp4 = closure_8();
  const obj = navigation(576);
  navigation = navigation(1502).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
    const intl = tmp(1126).intl;
    const obj4 = { helpdeskArticleUrl: articleURL };
    const formatResult = intl.format(tmp(1126).t.CIc3IN, obj4);
    cResult[0] = formatResult;
    let first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = getXboxValueProps();
    cResult[1] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    class N {
      constructor() {
        arr = closure_0.push(XboxLinkModalScenes.PRE_CONNECT);
        return;
      }
    }
    cResult[2] = navigation;
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(XboxLinkModalScenes.PRE_CONNECT);
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        arr = closure_0.push(XboxLinkModalScenes.PRE_CONNECT);
        return;
      }
    }
    tmp16[0] = _modDef9118;
    cResult[4] = tmp16;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(XboxLinkModalScenes.PRE_CONNECT);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        arr = closure_0.push(XboxLinkModalScenes.PRE_CONNECT);
        return;
      }
    }
    const stringResult = obj5.string(tmp(1126).t.m8aahn);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.z3rAhq);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    let tmp19 = stringResult1;
    const tmp18 = stringResult;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(XboxLinkModalScenes.PRE_CONNECT);
        return;
      }
    }
    tmp19 = cResult[6];
  }
  if (cResult[7] === N) {
    class N {
      constructor() {
        arr = closure_0.push(XboxLinkModalScenes.PRE_CONNECT);
        return;
      }
    }
    return tmp22;
  }
  tmp22 = jsx(navigation(9119).TwoWayLinkLanding, { platformType: constants2.XBOX, img: tmp16, imgStyle: tmp4.image, headerConnect: tmp18, headerReconnect: tmp19, body: first, onNext: N, valueProps: tmp11 });
  cResult[7] = N;
  cResult[8] = tmp4.image;
  cResult[9] = tmp22;
  const obj2 = navigation(1502);
  const obj6 = { platformType: constants2.XBOX, img: tmp16, imgStyle: tmp4.image, headerConnect: tmp18, headerReconnect: tmp19, body: first, onNext: N, valueProps: tmp11 };
}) : (function XboxLinkLanding() {
  const tmp = closure_8();
  navigation = navigation(1502).useNavigation();
  const obj = navigation(1502);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
  const intl = navigation(1126).intl;
  const items = [navigation];
  const memo = noop.useMemo(() => getXboxValueProps(), []);
  const callback = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.PRE_CONNECT);
  }, items);
  const memo1 = noop.useMemo(() => ({ uri: _modDef9118 }), []);
  const obj3 = { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  const intl2 = navigation(1126).intl;
  obj3.headerConnect = intl2.string(navigation(1126).t.m8aahn);
  const intl3 = navigation(1126).intl;
  obj3.headerReconnect = intl3.string(navigation(1126).t.z3rAhq);
  obj3.body = intl.format(navigation(1126).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  obj3.onNext = callback;
  obj3.valueProps = memo;
  return jsx(navigation(9119).TwoWayLinkLanding, { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
});