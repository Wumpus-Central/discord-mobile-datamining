// === Module 15246: PlayStationTwoWayLinkUpsell ===

// Module 15246 (PlayStationTwoWayLinkUpsell)
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import FastImageDefault from "FastImage" /* 5804 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 9373 */;
import OneWayToTwoWayLinkUpsell from "OneWayToTwoWayLinkUpsell" /* 15244 */;
import _modDef15247 from "module_15247" /* 15247 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = function PlayStationTwoWayLinkUpsell() {
  const tmp = closure_7();
  const articleURL = HelpdeskUtilsDefault.getArticleURL(constants.PS_CONNECTION);
  const obj2 = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.v20wwm);
  const intl2 = util.intl;
  obj2.body = intl2.format(util.t.lTZBit, { help_article: articleURL });
  const obj3 = { style: tmp.upsellImage, source: null, resizeMode: "contain" };
  obj3.source = _modDef15247;
  obj2.img = jsx(FastImageDefault, { style: tmp.upsellImage, source: null, resizeMode: "contain" });
  obj2.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj2.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return PlayStationLinkModalActionCreatorsDefault.showModal(items, constants2.PLAYSTATION);
  };
  return jsx(OneWayToTwoWayLinkUpsell.OneWayToTwoWayLinkUpsell, { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null });
};