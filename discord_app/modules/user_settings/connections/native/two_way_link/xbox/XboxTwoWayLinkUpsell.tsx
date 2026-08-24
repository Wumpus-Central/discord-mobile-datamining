// === Module 14322: XboxTwoWayLinkUpsell ===

// Module 14322 (XboxTwoWayLinkUpsell)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import combinedDefault from "combined" /* 1993 */;
import preloadDefault from "preload" /* 5449 */;
import OneWayToTwoWayNewTag from "OneWayToTwoWayNewTag" /* 14323 */;
import registerAssetDefault from "registerAsset" /* 14324 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ HelpdeskArticles: c3, AnalyticsLocations: c4 } = ME);
let closure_6 = createCacheKey.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxTwoWayLinkUpsell.tsx");

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
  return jsx(OneWayToTwoWayNewTag.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage, source: null, resizeMode: "contain" });
};