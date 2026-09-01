// === Module 14574: PlayStationTwoWayLinkUpsell ===

// Module 14574 (PlayStationTwoWayLinkUpsell)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import DismissibleContent from "DismissibleContent" /* 1373 */;
import combinedDefault from "combined" /* 1995 */;
import preloadDefault from "preload" /* 5493 */;
import OneWayToTwoWayNewTag from "OneWayToTwoWayNewTag" /* 14572 */;
import registerAssetDefault from "registerAsset" /* 14575 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ HelpdeskArticles: c3, AnalyticsLocations: c4, PlatformTypes: c5 } = ME);
let closure_7 = createCacheKey.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = function PlayStationTwoWayLinkUpsell() {
  let obj = combinedDefault;
  const articleURL = obj.getArticleURL(constants.PS_CONNECTION);
  obj = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.v20wwm);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.format(getSystemLocale.t.lTZBit, { help_article: articleURL });
  obj = { style: callback().upsellImage, source: null, resizeMode: "contain" };
  const tmp = callback();
  obj[1] = registerAssetDefault;
  obj[2] = jsx(preloadDefault, { style: callback().upsellImage, source: null, resizeMode: "contain" });
  obj[3] = DismissibleContent.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj[4] = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return callback(table[10]).showModal(items, constants2.PLAYSTATION);
  };
  return jsx(OneWayToTwoWayNewTag.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage, source: null, resizeMode: "contain" });
};