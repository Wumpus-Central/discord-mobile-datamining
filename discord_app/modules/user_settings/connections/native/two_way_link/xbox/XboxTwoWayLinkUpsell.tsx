// === Module 15081: XboxTwoWayLinkUpsell ===

// Module 15081 (XboxTwoWayLinkUpsell)
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import FastImageDefault from "FastImage" /* 5673 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9360 */;
import OneWayToTwoWayLinkUpsell from "OneWayToTwoWayLinkUpsell" /* 15082 */;
import _modDef15083 from "module_15083" /* 15083 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_6 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

export const XboxTwoWayLinkUpsell = function XboxTwoWayLinkUpsell() {
  const tmp = closure_6();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.XBOX_CONNECTION);
  const obj2 = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["2okkZV"]);
  const intl2 = util.intl;
  obj2.body = intl2.format(util.t.OnERSS, { help_article: articleURL });
  const obj3 = { style: tmp.upsellImage, source: null, resizeMode: "contain" };
  obj3.source = _modDef15083;
  obj2.img = jsx(FastImageDefault, { style: tmp.upsellImage, source: null, resizeMode: "contain" });
  obj2.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj2.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return XboxLinkModalActionCreatorsDefault.showModal(items);
  };
  return jsx(OneWayToTwoWayLinkUpsell.OneWayToTwoWayLinkUpsell, { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null });
};