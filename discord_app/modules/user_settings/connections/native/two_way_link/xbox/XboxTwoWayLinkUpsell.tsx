// === Module 14789: XboxTwoWayLinkUpsell ===

// Module 14789 (XboxTwoWayLinkUpsell)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import FastImageDefault from "FastImage" /* 5981 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 8765 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 14790 */;
import _modDef14791 from "module_14791" /* 14791 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1085);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

export const XboxTwoWayLinkUpsell = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(8);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
    const OneWayToTwoWayLinkUpsell = OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell;
    const intl = util.intl;
    const stringResult = intl.string(util.t["2okkZV"]);
    const intl2 = util.intl;
    const obj3 = { help_article: articleURL };
    const formatResult = intl2.format(util.t.OnERSS, obj3);
    cResult[0] = OneWayToTwoWayLinkUpsell;
    cResult[1] = stringResult;
    cResult[2] = formatResult;
    tmp6 = stringResult;
    tmp7 = formatResult;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  if (cResult[3] !== tmp4.upsellImage) {
    const obj4 = { style: tmp4.upsellImage, source: _modDef14791, resizeMode: "contain" };
    const tmp17 = jsx(FastImageDefault, { style: tmp4.upsellImage, source: _modDef14791, resizeMode: "contain" });
    cResult[3] = tmp4.upsellImage;
    cResult[4] = tmp17;
    let tmp13 = tmp17;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items);
      }
    }
    cResult[5] = O;
  } else {
    class O {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items);
      }
    }
  }
  if (cResult[6] !== tmp13) {
    class O {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items);
      }
    }
    const obj5 = { title: tmp6, body: tmp7, img: tmp13, newIndicatorDismissibleContent: dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT, onPress: O };
    const tmp20 = <tmp5 title={tmp6} body={tmp7} img={tmp13} newIndicatorDismissibleContent={dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT} onPress={O} />;
    cResult[6] = tmp13;
    cResult[7] = tmp20;
    const tmp19 = tmp20;
  } else {
    class O {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items);
      }
    }
  }
  return tmp19;
}) : (() => {
  const tmp = closure_6();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
  const obj2 = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["2okkZV"]);
  const intl2 = util.intl;
  obj2.body = intl2.format(util.t.OnERSS, { help_article: articleURL });
  const obj3 = { style: tmp.upsellImage, source: null, resizeMode: "contain" };
  obj3.source = _modDef14791;
  obj2.img = jsx(FastImageDefault, { style: tmp.upsellImage, source: null, resizeMode: "contain" });
  obj2.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj2.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return XboxLinkModalActionCreatorsDefault.showModal(items);
  };
  return jsx(OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell, { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null });
});