// === Module 15320: HappeningNowItem ===

// Module 15320 (HappeningNowItem)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import map from "map" /* 4097 */;
import useCutoutBackgroundColor from "useCutoutBackgroundColor" /* 8403 */;
import renderCardDefault from "renderCard" /* 15321 */;
import { View } from "get ActivityIndicator" /* 17 */;
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 14640 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
({ HAPPENING_NOW_CARD_HEIGHT: c4, HappeningNowItem } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const items = [, , , , , , ];
({ LIVE_GUILD_STAGE: arr[0], VOICES: arr[1], EMBEDDED_ACTIVITY: arr[2], STREAMS: arr[3], ACTIVITIES: arr[4], USER_CUSTOM_STATUS: arr[5], USER: arr[6] } = HappeningNowItem);
const set = new Set(items);
let closure_7 = createCacheKey.createStyles((height) => {
  const obj = { height, paddingStart: ThemesDefault.space.PX_8, overflow: "hidden" };
  obj[0] = obj;
  return obj;
});
const memoResult = importAllResult.memo(function MessagesItemHappeningNow(listRef) {
  let obj = { backgroundColor: null, children: null };
  obj = { style: callback(closure_4 + obj.useToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(renderCardDefault, obj1) };
  obj[1] = <View style={callback(closure_4 + obj.useToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container} collapsable={false}>{jsx(renderCardDefault, obj1)}</View>;
  return jsx(useCutoutBackgroundColor.CutoutBackgroundProvider, { style: callback(closure_4 + obj.useToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(renderCardDefault, obj1) });
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx");

export default memoResult;
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight(closure_0) {
  return useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM, closure_0) + closure_4;
};