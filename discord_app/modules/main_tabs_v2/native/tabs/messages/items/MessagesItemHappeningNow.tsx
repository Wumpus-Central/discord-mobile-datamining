// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx
import { View } from "get ActivityIndicator";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import set from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";

let HappeningNowItem;
let c4;
const require = arg1;
({ HAPPENING_NOW_CARD_HEIGHT: c4, HappeningNowItem } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const items = [, , , , , , ];
({ LIVE_GUILD_STAGE: arr[0], VOICES: arr[1], EMBEDDED_ACTIVITY: arr[2], STREAMS: arr[3], ACTIVITIES: arr[4], USER_CUSTOM_STATUS: arr[5], USER: arr[6] } = HappeningNowItem);
let set = new Set(items);
let closure_7 = createCacheKey.createStyles((height) => {
  let obj = { container: null };
  obj = { height, paddingStart: require("../../../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_8, overflow: "hidden" };
  obj[0] = obj;
  return obj;
});
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx");

export default require("noop").memo(function MessagesItemHappeningNow(listRef) {
  let obj = require("../../../../../../design/tokens/native/useToken.tsx") /* map */;
  obj = { backgroundColor: null, children: null };
  obj = { style: callback(closure_4 + obj.useToken(require("../../../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: null };
  obj[2] = jsx(require("../../../shared_components/happening_now/HappeningNow.tsx"), { cards: set, listRef: listRef.listRef });
  obj[1] = <View style={callback(closure_4 + obj.useToken(require("../../../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container} collapsable={false}>{null}</View>;
  return jsx(require("../../../../../../design/components/Icon/native/CutoutBackgroundContext.tsx") /* useCutoutBackgroundColor */.CutoutBackgroundProvider, { style: callback(closure_4 + obj.useToken(require("../../../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: null });
});
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight(closure_0) {
  return require("../../../../../themes/experiments/MobileVisualRefreshExperiment.tsx") /* useIsMobileVisualRefreshExperimentEnabled */.resolveRefreshToken(require("../../../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM, closure_0) + closure_4;
};