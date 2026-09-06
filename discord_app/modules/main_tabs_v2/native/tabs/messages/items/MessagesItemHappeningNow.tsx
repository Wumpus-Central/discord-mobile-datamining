// === Module 16057: MessagesItemHappeningNow ===

// Module 16057 (MessagesItemHappeningNow)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import CutoutBackgroundContext from "CutoutBackgroundContext" /* 8814 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12187 */;
import HappeningNowDefault from "HappeningNow" /* 16058 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(15294);
({ HAPPENING_NOW_CARD_HEIGHT: closure_4, HappeningNowItem } = HappeningNowConstants);
const jsx = fn(21).jsx;
const items = [, , , , , , ];
({ LIVE_GUILD_STAGE: arr[0], VOICES: arr[1], EMBEDDED_ACTIVITY: arr[2], STREAMS: arr[3], ACTIVITIES: arr[4], USER_CUSTOM_STATUS: arr[5], USER: arr[6] } = HappeningNowItem);
const set = new Set(items);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((height) => {
  let obj = { container: null };
  obj = { height, paddingStart: nativeDefault.space.PX_8, overflow: "hidden" };
  obj.container = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx");

export default noop.memo(function MessagesItemHappeningNow(listRef) {
  let obj = { backgroundColor: null, children: null };
  obj = { style: closure_7(React4 + obj.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(HappeningNowDefault, { cards: set, listRef: listRef.listRef }) };
  obj.children = <View style={closure_7(React4 + obj.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container} collapsable={false}>{jsx(HappeningNowDefault, { cards: set, listRef: listRef.listRef })}</View>;
  return jsx(CutoutBackgroundContext.CutoutBackgroundProvider, { style: closure_7(React4 + obj.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(HappeningNowDefault, { cards: set, listRef: listRef.listRef }) });
});
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight() {
  return MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM) + React4;
};