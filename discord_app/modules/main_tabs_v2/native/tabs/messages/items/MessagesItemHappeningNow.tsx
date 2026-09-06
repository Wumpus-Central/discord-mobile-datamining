// === Module 16057: HappeningNowItem ===

// Module 16057 (HappeningNowItem)
import ThemesDefault from "Themes" /* 576 */;
import map from "map" /* 4262 */;
import useCutoutBackgroundColor from "useCutoutBackgroundColor" /* 8814 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 12187 */;
import renderCardDefault from "renderCard" /* 16058 */;
import { View } from "get ActivityIndicator" /* 17 */;
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 15294 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importAllResult from "noop" /* 19 */;
import set from "set" /* 2 */;

require = arg1;
({ HAPPENING_NOW_CARD_HEIGHT: c4, HappeningNowItem } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const items = [, , , , , , ];
({ LIVE_GUILD_STAGE: arr[0], VOICES: arr[1], EMBEDDED_ACTIVITY: arr[2], STREAMS: arr[3], ACTIVITIES: arr[4], USER_CUSTOM_STATUS: arr[5], USER: arr[6] } = HappeningNowItem);
let set = new Set(items);
let closure_7 = createCacheKey.createStyles((height) => {
  let obj = { container: null };
  obj = { height, paddingStart: ThemesDefault.space.PX_8, overflow: "hidden" };
  obj[0] = obj;
  return obj;
});
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx");

export default importAllResult.memo(function MessagesItemHappeningNow(listRef) {
  let obj = map;
  obj = { backgroundColor: null, children: null };
  obj = { style: callback(closure_4 + obj.useToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(renderCardDefault, obj1) };
  obj[1] = <View style={callback(closure_4 + obj.useToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container} collapsable={false}>{jsx(renderCardDefault, obj1)}</View>;
  return jsx(useCutoutBackgroundColor.CutoutBackgroundProvider, { style: callback(closure_4 + obj.useToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(renderCardDefault, obj1) });
});
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight() {
  return useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM) + closure_4;
};