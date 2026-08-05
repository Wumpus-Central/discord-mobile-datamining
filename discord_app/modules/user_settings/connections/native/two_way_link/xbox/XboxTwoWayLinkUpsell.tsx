// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx
import "noop";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ HelpdeskArticles: c3, AnalyticsLocations: c4 } = ME);
let closure_6 = createCacheKey.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

export const XboxTwoWayLinkUpsell = function XboxTwoWayLinkUpsell() {
  let obj = require("../../../../../../utils/HelpdeskUtils.tsx");
  const articleURL = obj.getArticleURL(constants.XBOX_CONNECTION);
  obj = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t["2okkZV"]);
  const intl2 = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.format(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.OnERSS, { help_article: articleURL });
  obj = { style: callback().upsellImage, source: null, resizeMode: "contain" };
  const tmp = callback();
  obj[1] = require("../../../../../../../_runtime/14117_registerAsset.js");
  obj[2] = jsx(require("../../../../../../components_native/common/FastImage.tsx"), { style: callback().upsellImage, source: null, resizeMode: "contain" });
  obj[3] = require("../../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.XBOX_ONE_WAY_RECONNECT;
  obj[4] = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return callback(table[10]).showModal(items);
  };
  return jsx(require("../OneWayToTwoWayLinkUpsell.tsx") /* OneWayToTwoWayNewTag */.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage, source: null, resizeMode: "contain" });
};