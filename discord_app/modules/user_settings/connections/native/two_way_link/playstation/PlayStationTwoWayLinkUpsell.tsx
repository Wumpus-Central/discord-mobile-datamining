// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx
import "noop";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
const require = arg1;
({ HelpdeskArticles: c3, AnalyticsLocations: c4, PlatformTypes: c5 } = ME);
let closure_7 = createCacheKey.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = function PlayStationTwoWayLinkUpsell() {
  let obj = require("../../../../../../utils/HelpdeskUtils.tsx");
  const articleURL = obj.getArticleURL(constants.PS_CONNECTION);
  obj = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.v20wwm);
  const intl2 = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.format(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.lTZBit, { help_article: articleURL });
  obj = { style: callback().upsellImage, source: null, resizeMode: "contain" };
  const tmp = callback();
  obj[1] = require("../../../../../../../_runtime/14119_registerAsset.js");
  obj[2] = jsx(require("../../../../../../components_native/common/FastImage.tsx"), { style: callback().upsellImage, source: null, resizeMode: "contain" });
  obj[3] = require("../../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj[4] = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return callback(table[10]).showModal(items, constants2.PLAYSTATION);
  };
  return jsx(require("../OneWayToTwoWayLinkUpsell.tsx") /* OneWayToTwoWayNewTag */.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage, source: null, resizeMode: "contain" });
};