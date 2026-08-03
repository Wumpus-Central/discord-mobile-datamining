// === Module 10494: ? ===

// Module 10494
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let obj = { iconContainer: null };
obj = { width: 40, height: 40, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.md };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MessageFailedToSendNotification(notification) {
  notification = notification.notification;
  let channelId;
  let messageId;
  let obj = { type: "simple", text: null };
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t.Q0x94X);
  channelId = notification.channelId;
  messageId = notification.messageId;
  const items = [channelId, messageId];
  const callback = importAllResult.useCallback(() => {
    let obj = channelId(outer1_2[6]);
    obj = { jumpType: channelId(outer1_2[7]).JumpType.INSTANT };
    obj.transitionToMessage(channelId, messageId, obj);
  }, items);
  obj = { icon: null, children: null, header: null, onPress: null, notification: null };
  obj = { style: callback().iconContainer, children: null };
  const obj1 = { size: "md", color: null };
  obj1[1] = messageId(712).colors.ICON_SUBTLE;
  obj[1] = jsx(channelId(10127).RetryIcon, { size: "md", color: null });
  obj[0] = <View style={callback().iconContainer}>{null}</View>;
  const obj2 = { text: null };
  const intl2 = channelId(1236).intl;
  obj2[0] = intl2.string(channelId(1236).t.xxRPOT);
  obj[1] = jsx(channelId(10432).SystemMessageText, { text: null });
  obj[2] = obj;
  obj[3] = callback;
  obj[4] = notification;
  return jsx(channelId(10487).NotificationPressable, { style: callback().iconContainer, children: null });
});
const result = require("jsxProd").fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default memoResult;