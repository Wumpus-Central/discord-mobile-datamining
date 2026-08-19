// === Module 10122: ? ===

// Module 10122
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let c3 = importAllResult;
let obj = { width: 40, height: 40, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.md };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MessageFailedToSendNotification(notification) {
  notification = notification.notification;
  let channelId;
  let obj = { type: "simple", text: null };
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t.Q0x94X);
  channelId = notification.channelId;
  const messageId = notification.messageId;
  const items = [channelId, messageId];
  const callback = importAllResult.useCallback(() => {
    channelId(dependencyMap[6]);
    const obj = { jumpType: channelId(dependencyMap[7]).JumpType.INSTANT };
    obj.transitionToMessage(channelId, messageId, obj);
  }, items);
  obj = { style: callback().iconContainer, children: null };
  const tmp = callback();
  obj[1] = jsx(channelId(10123).RetryIcon, { size: "md", color: messageId(712).colors.ICON_SUBTLE });
  obj[0] = <View style={callback().iconContainer}>{null}</View>;
  const obj2 = { text: null };
  const intl2 = channelId(1236).intl;
  obj2[0] = intl2.string(channelId(1236).t.xxRPOT);
  obj[1] = jsx(channelId(10048).SystemMessageText, { text: null });
  obj[2] = obj;
  obj[3] = callback;
  obj[4] = notification;
  return jsx(channelId(10113).NotificationPressable, { style: callback().iconContainer, children: null });
});
const result = require("obj132").fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default memoResult;