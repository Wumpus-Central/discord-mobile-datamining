// === Module 14997: PlayStationTwoWayLinkUpsell ===

// Module 14997 (PlayStationTwoWayLinkUpsell)
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import FastImageDefault from "FastImage" /* 5601 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 9285 */;
import OneWayToTwoWayLinkUpsell from "OneWayToTwoWayLinkUpsell" /* 14995 */;
import _modDef14998 from "module_14998" /* 14998 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_7 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = function PlayStationTwoWayLinkUpsell() {
  let obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(constants.PS_CONNECTION);
  obj = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.v20wwm);
  const intl2 = util.intl;
  obj.body = intl2.format(util.t.lTZBit, { help_article: articleURL });
  obj = { style: closure_7().upsellImage, source: null, resizeMode: "contain" };
  const tmp = closure_7();
  obj.source = _modDef14998;
  obj.img = jsx(FastImageDefault, { style: closure_7().upsellImage, source: null, resizeMode: "contain" });
  obj.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return PlayStationLinkModalActionCreatorsDefault.showModal(items, constants2.PLAYSTATION);
  };
  return jsx(OneWayToTwoWayLinkUpsell.OneWayToTwoWayLinkUpsell, { style: closure_7().upsellImage, source: null, resizeMode: "contain" });
};