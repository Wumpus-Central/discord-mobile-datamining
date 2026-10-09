// === Module 15165: PlayStationTwoWayLinkUpsell ===

// Module 15165 (PlayStationTwoWayLinkUpsell)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import FastImageDefault from "FastImage" /* 6163 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 12869 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 15163 */;
import _modDef15166 from "module_15166" /* 15166 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1085);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = ReactCompilerGating.isReactCompilerEnabled() ? (function PlayStationTwoWayLinkUpsell() {
  const cResult = c.c(8);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.PS_CONNECTION);
    const OneWayToTwoWayLinkUpsell = OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell;
    const intl = util.intl;
    const stringResult = intl.string(util.t.v20wwm);
    const intl2 = util.intl;
    const obj3 = { help_article: articleURL };
    const formatResult = intl2.format(util.t.lTZBit, obj3);
    cResult[0] = OneWayToTwoWayLinkUpsell;
    cResult[1] = stringResult;
    cResult[2] = formatResult;
    tmp6 = stringResult;
    tmp7 = formatResult;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  if (cResult[3] !== tmp4.upsellImage) {
    const obj4 = { style: tmp4.upsellImage, source: _modDef15166, resizeMode: "contain" };
    const tmp17 = jsx(FastImageDefault, { style: tmp4.upsellImage, source: _modDef15166, resizeMode: "contain" });
    cResult[3] = tmp4.upsellImage;
    cResult[4] = tmp17;
    let tmp13 = tmp17;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items, closure_1_5.PLAYSTATION);
      }
    }
    cResult[5] = T;
  } else {
    class T {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items, closure_1_5.PLAYSTATION);
      }
    }
  }
  if (cResult[6] !== tmp13) {
    class T {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items, closure_1_5.PLAYSTATION);
      }
    }
    const obj5 = { title: tmp6, body: tmp7, img: tmp13, newIndicatorDismissibleContent: dismissible_content.DismissibleContent.PS_ONE_WAY_RECONNECT, onPress: T };
    const tmp20 = <tmp5 title={tmp6} body={tmp7} img={tmp13} newIndicatorDismissibleContent={dismissible_content.DismissibleContent.PS_ONE_WAY_RECONNECT} onPress={T} />;
    cResult[6] = tmp13;
    cResult[7] = tmp20;
    const tmp19 = tmp20;
  } else {
    class T {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        items = [];
        items[0] = closure_1_4.RELINK_UPSELL;
        return obj.showModal(items, closure_1_5.PLAYSTATION);
      }
    }
  }
  return tmp19;
}) : (function PlayStationTwoWayLinkUpsell() {
  const tmp = closure_7();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.PS_CONNECTION);
  const obj2 = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.v20wwm);
  const intl2 = util.intl;
  obj2.body = intl2.format(util.t.lTZBit, { help_article: articleURL });
  const obj3 = { style: tmp.upsellImage, source: null, resizeMode: "contain" };
  obj3.source = _modDef15166;
  obj2.img = jsx(FastImageDefault, { style: tmp.upsellImage, source: null, resizeMode: "contain" });
  obj2.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj2.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return PlayStationLinkModalActionCreatorsDefault.showModal(items, constants2.PLAYSTATION);
  };
  return jsx(OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell, { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null });
});