// discord_app/modules/in_app_notifications/native/MessageNotificationReactBar.tsx
import noop from "noop";
import get_ActivityIndicator from "set";
import set from "set";
import { EmojiPickerSource } from "IMAGE_SIZE";
import { EmojiIntention } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";

let c10;
let c4;
let c5;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
({ Keyboard: c4, View: c5 } = get_ActivityIndicator);
({ NOTIFICATION_CONTAINER_MARGIN: closure_6, NOTIFICATION_MAX_WIDTH: error } = set);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const PX_12 = require("Themes").space.PX_12;
createCacheKey = { container: { alignSelf: "center", flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "space-between", paddingHorizontal: PX_12, paddingVertical: 10, width: "100%" }, divider: null, roundButton: null };
createCacheKey = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE, margin: 0, padding: 0 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderRadius: require("Themes").radii.round };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = set.fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationReactBar.tsx");

export const MessageNotificationReactBar = function MessageNotificationReactBar(notification) {
  notification = notification.notification;
  const onReactionPress = notification.onReactionPress;
  let dependencyMap;
  let width;
  let closure_4;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  width = onReactionPress(1474)().width;
  const items = [width];
  const memo = width.useMemo(() => {
    const result = 2 * outer1_12;
    return Math.min(outer1_7 - result, width - result - 2 * outer1_6);
  }, items);
  let obj = notification(9775);
  const emojisForReactionRow = obj.useEmojisForReactionRow(notification.channel, memo, 48);
  const items1 = [onReactionPress, notification];
  const items2 = [notification, onReactionPress];
  const callback = width.useCallback(() => {
    closure_4.dismiss();
    let obj = notification(_undefined[10]);
    const result = obj.trackInAppNotificationAccessoryClicked(notification, notification(_undefined[11]).InAppNotificationAccessoryTypes.REACTION_PICKER_BUTTON);
    obj = { onPressEmoji: onReactionPress, channel: notification.channel, pickerIntention: outer1_9.REACTION, reactionType: notification(_undefined[13]).ReactionTypes.NORMAL, analyticsObject: notification(_undefined[14]).ReactionLocations.IN_APP_NOTIFICATION, startExpanded: false, source: outer1_8.NOTIFICATION };
    const result1 = notification(_undefined[12]).openEmojiPickerActionSheet(obj);
  }, items1);
  closure_4 = width.useCallback((arg0) => {
    const result = notification(_undefined[10]).trackInAppNotificationAccessoryClicked(notification, notification(_undefined[11]).InAppNotificationAccessoryTypes.REACTION_BUTTON);
    if (null != arg0) {
      onReactionPress(arg0);
    }
  }, items2);
  obj = { style: notification.animationStyle, children: null };
  obj = { style: tmp.divider };
  const items3 = [callback(closure_5, obj), ];
  const obj1 = { style: tmp.container, children: null };
  const items4 = [
    emojisForReactionRow.map((type) => {
      let closure_0 = type;
      let tmp4 = type;
      if (type == null) {
        tmp4 = null;
      }
      return outer1_10(notification(_undefined[16]).EmojiReactionRowButton, {
        emoji: tmp4,
        onPress() {
          return outer1_4(closure_0);
        },
        emojiSize: 20,
        emojiFontSize: 16,
        emojiContainerSize: 40,
        emojiLineHeight: 22,
        styles: _undefined.roundButton
      }, notification(_undefined[16]).getEmojiKey(type, arg1));
    }),
    callback(notification(9777).EmojiPickerRowButton, { emojiContainerSize: 40, onPress: callback, iconSize: "sm", styles: tmp.roundButton })
  ];
  obj1[1] = items4;
  items3[1] = callback2(closure_5, obj1);
  obj[1] = items3;
  return callback2(onReactionPress(4145).View, obj);
};