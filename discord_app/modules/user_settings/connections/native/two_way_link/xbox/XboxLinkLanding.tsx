// === Module 8768: XboxLinkLanding ===

// Module 8768 (XboxLinkLanding)
import Fragment from "Fragment" /* 21 */;
import intl5 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import GroupIcon from "GroupIcon" /* 5880 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5892 */;
import XboxLinkConstants from "XboxLinkConstants" /* 8767 */;
import ScreenStreamIcon from "ScreenStreamIcon" /* 8769 */;
import GameControllerIcon from "GameControllerIcon" /* 8771 */;
import _modDef8772 from "module_8772" /* 8772 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let arr, navigation;

let hasOwnProperty;
let metroRequire;
function getXboxValueProps() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  const obj = { label: intl.string(intl5.t.ihQXsb), icon: VoiceNormalIcon.VoiceNormalIcon };
  intl = intl5.intl;
  const items = [obj, , , ];
  const obj2 = { label: intl2.string(intl5.t.Xt1n4P), icon: ScreenStreamIcon.ScreenStreamIcon };
  intl2 = intl5.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl5.t.xqVY3p), icon: GroupIcon.GroupIcon };
  intl3 = intl5.intl;
  items[2] = obj3;
  const obj4 = { label: intl4.string(intl5.t.iQsKVW), icon: GameControllerIcon.GameControllerIcon };
  intl4 = intl5.intl;
  items[3] = obj4;
  return items;
}
const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp11;
  let tmp18;
  let tmp19;
  let tmp22;
  const obj = navigation(576);
  const cResult = obj.c(10);
  const tmp4 = closure_8();
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = HelpdeskUtilsDefault;
    const articleURL = obj3.getArticleURL(constants.XBOX_CONNECTION);
    const intl = tmp(1126).intl;
    const obj4 = { helpdeskArticleUrl: articleURL };
    const formatResult = intl.format(navigation(1126).t.CIc3IN, obj4);
    cResult[0] = formatResult;
    first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = getXboxValueProps();
    cResult[1] = tmp13;
    tmp11 = tmp13;
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
    tmp16[0] = _modDef8772;
    cResult[4] = tmp16;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(XboxLinkModalScenes.PRE_CONNECT);
        return;
      }
    }
  }
  const image = tmp4.image;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        arr = closure_0.push(XboxLinkModalScenes.PRE_CONNECT);
        return;
      }
    }
    const stringResult = obj5.string(navigation(1126).t.m8aahn);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(navigation(1126).t.z3rAhq);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    tmp19 = stringResult1;
    tmp18 = stringResult;
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
  tmp22 = jsx(navigation(8773).TwoWayLinkLanding, { platformType: constants2.XBOX, img: tmp16, imgStyle: image, headerConnect: tmp18, headerReconnect: tmp19, body: first, onNext: N, valueProps: tmp11 });
  cResult[7] = N;
  cResult[8] = tmp4.image;
  cResult[9] = tmp22;
}) : (() => {
  const tmp = closure_8();
  let obj = navigation(1490);
  navigation = obj.useNavigation();
  const obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(constants.XBOX_CONNECTION);
  const intl = navigation(1126).intl;
  const items = [navigation];
  const formatResult = intl.format(navigation(1126).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  const memo = react.useMemo(() => getXboxValueProps(), []);
  const callback = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.PRE_CONNECT);
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = { uri: _modDef8772 };
    return obj;
  }, []);
  const TwoWayLinkLanding = navigation(8773).TwoWayLinkLanding;
  const intl2 = navigation(1126).intl;
  const intl3 = navigation(1126).intl;
  return <TwoWayLinkLanding platformType={constants2.XBOX} img={memo1} imgStyle={tmp.image} headerConnect={intl2.string(navigation(1126).t.m8aahn)} headerReconnect={intl3.string(navigation(1126).t.z3rAhq)} body={formatResult} onNext={callback} valueProps={memo} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx");

export default tmp3;