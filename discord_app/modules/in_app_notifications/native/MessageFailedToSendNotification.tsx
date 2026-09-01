// discord_app/modules/in_app_notifications/native/MessageFailedToSendNotification.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
let obj = { iconContainer: null };
obj = { width: 40, height: 40, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.md };
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
    let obj = channelId(closure_1_2[6]);
    obj = { jumpType: channelId(closure_1_2[7]).JumpType.INSTANT };
    obj.transitionToMessage(channelId, messageId, obj);
  }, items);
  obj = { icon: null, children: null, header: null, onPress: null, notification: null };
  obj = { style: callback().iconContainer, children: null };
  const tmp = callback();
  obj[1] = jsx(channelId(9408).RetryIcon, { size: "md", color: messageId(712).colors.ICON_SUBTLE });
  obj[0] = <View style={callback().iconContainer}>{null}</View>;
  const obj2 = { text: null };
  const intl2 = channelId(1236).intl;
  obj2[0] = intl2.string(channelId(1236).t.xxRPOT);
  obj[1] = jsx(channelId(10190).SystemMessageText, { text: null });
  obj[2] = obj;
  obj[3] = callback;
  obj[4] = notification;
  return jsx(channelId(10255).NotificationPressable, { style: callback().iconContainer, children: null });
});
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default memoResult;