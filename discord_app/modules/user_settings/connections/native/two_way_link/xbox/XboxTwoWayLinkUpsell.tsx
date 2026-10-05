// === Module 14773: XboxTwoWayLinkUpsell ===

// Module 14773 (XboxTwoWayLinkUpsell)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import FastImageDefault from "FastImage" /* 5974 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 8733 */;
import OneWayToTwoWayLinkUpsell2 from "OneWayToTwoWayLinkUpsell" /* 14774 */;
import AssetRegistryDefault from "AssetRegistry" /* 14775 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4 } = Constants);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp13;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(8);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = HelpdeskUtilsDefault;
    const articleURL = obj2.getArticleURL(constants.XBOX_CONNECTION);
    const OneWayToTwoWayLinkUpsell = OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell;
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t["2okkZV"]);
    const intl2 = intl3.intl;
    const obj3 = { help_article: articleURL };
    const formatResult = intl2.format(intl3.t.OnERSS, obj3);
    cResult[0] = OneWayToTwoWayLinkUpsell;
    cResult[1] = stringResult;
    cResult[2] = formatResult;
    tmp6 = stringResult;
    tmp7 = formatResult;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  if (cResult[3] !== tmp4.upsellImage) {
    FastImageDefault;
    const tmp17 = <tmp16 style={tmp4.upsellImage} source={AssetRegistryDefault} resizeMode="contain" />;
    cResult[3] = tmp4.upsellImage;
    cResult[4] = tmp17;
    tmp13 = tmp17;
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
    const tmp20 = <tmp5 title={tmp6} body={tmp7} img={tmp13} newIndicatorDismissibleContent={dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT} onPress={O} />;
    cResult[6] = tmp13;
    cResult[7] = tmp20;
    tmp19 = tmp20;
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
  let obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
  const OneWayToTwoWayLinkUpsell = OneWayToTwoWayLinkUpsell2.OneWayToTwoWayLinkUpsell;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  ({ style: tmp.upsellImage, source: AssetRegistryDefault, resizeMode: "contain" });
  FastImageDefault;
  return <OneWayToTwoWayLinkUpsell title={intl.string(intl3.t["2okkZV"])} body={intl2.format(intl3.t.OnERSS, { help_article: articleURL })} img={null} newIndicatorDismissibleContent={dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT} onPress={function onPress() {
    const items = [constants.RELINK_UPSELL];
    const obj = XboxLinkModalActionCreatorsDefault;
    return obj.showModal(items);
  }} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

export const XboxTwoWayLinkUpsell = tmp4;