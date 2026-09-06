// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import DismissibleContent from "../../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import combinedDefault from "../../../../../../utils/HelpdeskUtils.tsx";
import preloadDefault from "../../../../../../components_native/common/FastImage.tsx";
import OneWayToTwoWayNewTag from "../OneWayToTwoWayLinkUpsell.tsx";
import registerAssetDefault from "../../../../../../../_runtime/14967_registerAsset.js";
import ME from "../../../../../../Constants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ HelpdeskArticles: c3, AnalyticsLocations: c4 } = ME);
let closure_6 = createCacheKey.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("set").fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx",
);

export const XboxTwoWayLinkUpsell = function XboxTwoWayLinkUpsell() {
  let obj = combinedDefault;
  const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
  obj = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["2okkZV"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.format(getSystemLocale.t.OnERSS, { help_article: articleURL });
  obj = { style: callback().upsellImage, source: null, resizeMode: "contain" };
  const tmp = callback();
  obj[1] = registerAssetDefault;
  obj[2] = jsx(preloadDefault, { style: callback().upsellImage, source: null, resizeMode: "contain" });
  obj[3] = DismissibleContent.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj[4] = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return callback(table[10]).showModal(items);
  };
  return jsx(OneWayToTwoWayNewTag.OneWayToTwoWayLinkUpsell, {
    style: callback().upsellImage,
    source: null,
    resizeMode: "contain",
  });
};
