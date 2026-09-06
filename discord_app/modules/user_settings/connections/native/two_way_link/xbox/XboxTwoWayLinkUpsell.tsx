// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx
import util from "../../../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import HelpdeskUtilsDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators.tsx";
import OneWayToTwoWayLinkUpsell from "../OneWayToTwoWayLinkUpsell.tsx";
import _modDef14967 from "../../../../../../../_runtime/metro/14967__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: c3, AnalyticsLocations: closure_4 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx",
);

export const XboxTwoWayLinkUpsell = function XboxTwoWayLinkUpsell() {
  let obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
  obj = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["2okkZV"]);
  const intl2 = util.intl;
  obj.body = intl2.format(util.t.OnERSS, { help_article: articleURL });
  obj = { style: closure_6().upsellImage, source: null, resizeMode: "contain" };
  const tmp = closure_6();
  obj.source = _modDef14967;
  obj.img = jsx(FastImageDefault, { style: closure_6().upsellImage, source: null, resizeMode: "contain" });
  obj.newIndicatorDismissibleContent = dismissible_content.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj.onPress = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return XboxLinkModalActionCreatorsDefault.showModal(items);
  };
  return jsx(OneWayToTwoWayLinkUpsell.OneWayToTwoWayLinkUpsell, {
    style: closure_6().upsellImage,
    source: null,
    resizeMode: "contain",
  });
};
