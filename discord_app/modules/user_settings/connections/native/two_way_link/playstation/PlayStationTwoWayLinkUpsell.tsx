// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx
import "noop";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../../_runtime/14130_registerAsset.js";
import { DismissibleContent } from "../../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { preload } from "../../../../../../components_native/common/FastImage.tsx";
import { getSystemLocale } from "../../../../../../intl/index.native.tsx";
import { combined } from "../../../../../../utils/HelpdeskUtils.tsx";
import { OneWayToTwoWayNewTag } from "../OneWayToTwoWayLinkUpsell.tsx";

let c3;
let c4;
let c5;
const require = arg1;
({ HelpdeskArticles: c3, AnalyticsLocations: c4, PlatformTypes: c5 } = ME);
let closure_7 = createCacheKey.createStyles({ upsellImage: { alignSelf: "center", width: 84, marginLeft: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationTwoWayLinkUpsell.tsx");

export const PlayStationTwoWayLinkUpsell = function PlayStationTwoWayLinkUpsell() {
  let obj = combined;
  const articleURL = obj.getArticleURL(constants.PS_CONNECTION);
  obj = { title: null, body: null, img: null, newIndicatorDismissibleContent: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.v20wwm);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.format(getSystemLocale.t.lTZBit, { help_article: articleURL });
  obj = { style: callback().upsellImage, source: null, resizeMode: "contain" };
  const tmp = callback();
  obj[1] = registerAsset;
  obj[2] = jsx(preload, { style: callback().upsellImage, source: null, resizeMode: "contain" });
  obj[3] = DismissibleContent.DismissibleContent.PS_ONE_WAY_RECONNECT;
  obj[4] = function onPress() {
    const items = [constants.RELINK_UPSELL];
    return callback(table[10]).showModal(items, constants2.PLAYSTATION);
  };
  return jsx(OneWayToTwoWayNewTag.OneWayToTwoWayLinkUpsell, { style: callback().upsellImage, source: null, resizeMode: "contain" });
};