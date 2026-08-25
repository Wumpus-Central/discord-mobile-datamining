// === Module 15866: ContentInventoryReplyRow ===

// Module 15866 (ContentInventoryReplyRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4376 */;
import PressableBase from "PressableBase" /* 4949 */;
import ReactionIcon from "ReactionIcon" /* 7800 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 15809 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createICYMIStyles.createICYMIStyles((marginLeft) => {
  let obj = { separator: null, container: null, buttonContainer: null, feedbackContainer: null, icon: null, feedbackButtonIcon: null, input: null, contentInventoryPressable: null, contentInventoryContainer: null, contentInventoryText: null, replyContainer: null };
  obj = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginBottom: marginLeft.margin, width: "100%" };
  obj[0] = obj;
  obj = { flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginHorizontal: marginLeft.margin, marginBottom: marginLeft.margin, gap: ThemesDefault.space.PX_12 };
  obj[1] = obj;
  obj[2] = { flexGrow: 1, flexBasis: 0, height: ThemesDefault.space.PX_40 };
  obj1 = { flexGrow: 1, flexBasis: 0, height: ThemesDefault.space.PX_40 };
  obj[3] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: ThemesDefault.space.PX_12, height: ThemesDefault.space.PX_40 };
  obj[4] = { width: 20, height: 20 };
  const obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: ThemesDefault.space.PX_12, height: ThemesDefault.space.PX_40 };
  obj[5] = { tintColor: ThemesDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  const obj3 = { tintColor: ThemesDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  obj[6] = { flex: 1, borderRadius: ThemesDefault.radii.round };
  const obj4 = { flex: 1, borderRadius: ThemesDefault.radii.round };
  obj[7] = { borderRadius: 20, width: "100%", minHeight: 40, backgroundColor: ThemesDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, justifyContent: "center" };
  const obj5 = { borderRadius: 20, width: "100%", minHeight: 40, backgroundColor: ThemesDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, justifyContent: "center" };
  obj[8] = { marginLeft: marginLeft.margin, marginRight: 10, paddingVertical: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj[9] = { flexShrink: 1 };
  obj[10] = { flexDirection: "row", alignItems: "center", marginLeft: marginLeft.inset, marginTop: marginLeft.margin };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = function ContentInventoryReplyRow(onPress) {
  const reactText = onPress.reactText;
  const tmp = callback3();
  let obj = { style: tmp.replyContainer, children: null };
  obj = { accessibilityRole: "button", onPress: onPress.onReply, style: tmp.contentInventoryPressable, accessibilityLabel: reactText, pointerEvents: "box-only", children: null };
  obj = { style: tmp.contentInventoryContainer, children: null };
  const items = [callback(Text.Text, { variant: "text-md/medium", color: "input-placeholder-text-default", lineClamp: 1, style: tmp.contentInventoryText, children: reactText }), callback(ReactionIcon.ReactionIcon, { style: tmp.icon, size: "custom" })];
  obj[1] = items;
  obj[5] = callback2(View, obj);
  obj[1] = callback(PressableBase.PressableOpacity, obj);
  return callback(View, obj);
};