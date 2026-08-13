// discord_app/modules/saved_messages/native/ForLaterCardReminderHeader.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { _savedMessageJumpToMessage } from "../SavedMessageUtils.tsx";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, icon: null, actionsContainer: null };
obj = { flexDirection: "row", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderTopLeftRadius: require("Themes").radii.lg, borderTopRightRadius: require("Themes").radii.lg, overflow: "hidden", gap: 8, marginHorizontal: -16, marginTop: -16, paddingHorizontal: 16, paddingVertical: 12 };
obj[0] = obj;
obj[1] = { width: 24, height: 24, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
obj[2] = { marginVertical: -4, marginLeft: "auto" };
let closure_6 = createCacheKey.createStyles(obj);
let obj1 = { width: 24, height: 24, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
const result = require("createCacheKey").fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = function ForLaterCardReminderHeader(savedMessage) {
  let actions;
  let throttledNow;
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  const tmp = callback3();
  let obj = _savedMessageJumpToMessage;
  let dueAt;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  obj = { dueAt, now: throttledNow, type: tmp2(11162).DueInStringTypes.SHORT };
  const dueInString = obj.useDueInString(obj);
  const isOverdue = dueInString.isOverdue;
  if (null == savedMessage.saveData.dueAt) {
    return null;
  } else {
    let str = "mobile-text-heading-primary";
    if (isOverdue) {
      str = "text-feedback-critical";
    }
    const colors = Themes.colors;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.icon;
    const obj2 = { size: "xxs", color: null };
    obj2[1] = isOverdue ? colors.TEXT_FEEDBACK_CRITICAL : colors.INTERACTIVE_TEXT_DEFAULT;
    obj1[1] = callback(tmp2(4306).ClockIcon, obj2);
    const items = [callback(View, obj1), , ];
    const obj3 = { variant: "text-md/semibold", color: null, children: null };
    obj3[1] = str;
    obj3[2] = tmp6;
    items[1] = callback(tmp2(4338).Text, obj3);
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.actionsContainer;
    obj4[1] = actions;
    items[2] = callback(View, obj4);
    obj[1] = items;
    return callback2(View, obj);
  }
};