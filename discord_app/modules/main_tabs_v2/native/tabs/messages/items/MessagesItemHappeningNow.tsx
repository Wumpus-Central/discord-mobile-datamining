// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabled from "../../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import map from "../../../../../../design/tokens/native/useToken.tsx";
import useCutoutBackgroundColor from "../../../../../../design/components/Icon/native/CutoutBackgroundContext.tsx";
import renderCardDefault from "../../../shared_components/happening_now/HappeningNow.tsx";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "../../../shared_components/happening_now/HappeningNowConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import set from "../../../../../../../_runtime/00002_set.js";

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
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight(closure_0) {
  return useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(ThemesDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM, closure_0) + closure_4;
};