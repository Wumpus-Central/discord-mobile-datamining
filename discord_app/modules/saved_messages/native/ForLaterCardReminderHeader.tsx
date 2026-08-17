// discord_app/modules/saved_messages/native/ForLaterCardReminderHeader.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _savedMessageJumpToMessage from "../SavedMessageUtils.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, icon: null, actionsContainer: null };
obj = { flexDirection: "row", alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, borderTopLeftRadius: ThemesDefault.radii.lg, borderTopRightRadius: ThemesDefault.radii.lg, overflow: "hidden", gap: 8, marginHorizontal: -16, marginTop: -16, paddingHorizontal: 16, paddingVertical: 12 };
obj[0] = obj;
obj[1] = { width: 24, height: 24, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
obj[2] = { marginVertical: -4, marginLeft: "auto" };
let closure_6 = createCacheKey.createStyles(obj);
let obj1 = { width: 24, height: 24, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
const result = set.fileFinishedImporting("modules/saved_messages/native/ForLaterCardReminderHeader.tsx");

export const ForLaterCardReminderHeader = function ForLaterCardReminderHeader(savedMessage) {
  savedMessage = savedMessage.savedMessage;
  ({ throttledNow, actions } = savedMessage);
  const tmp = callback3();
  let obj = _savedMessageJumpToMessage;
  let dueAt;
  if (savedMessage != null) {
    dueAt = savedMessage.saveData.dueAt;
  }
  obj = { dueAt, now: throttledNow, type: tmp2(10880).DueInStringTypes.SHORT };
  const dueInString = obj.useDueInString(obj);
  const isOverdue = dueInString.isOverdue;
  if (null == savedMessage.saveData.dueAt) {
    return null;
  } else {
    let str = "mobile-text-heading-primary";
    if (isOverdue) {
      str = "text-feedback-critical";
    }
    const colors = ThemesDefault.colors;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.icon;
    const obj2 = { size: "xxs", color: null };
    obj2[1] = isOverdue ? colors.TEXT_FEEDBACK_CRITICAL : colors.INTERACTIVE_TEXT_DEFAULT;
    obj1[1] = callback(tmp2(4338).ClockIcon, obj2);
    const items = [callback(View, obj1), , ];
    const obj3 = { variant: "text-md/semibold", color: null, children: null };
    obj3[1] = str;
    obj3[2] = tmp6;
    items[1] = callback(tmp2(4734).Text, obj3);
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.actionsContainer;
    obj4[1] = actions;
    items[2] = callback(View, obj4);
    obj[1] = items;
    return callback2(View, obj);
  }
};