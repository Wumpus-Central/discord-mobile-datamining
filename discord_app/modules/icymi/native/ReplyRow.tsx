// === Module 16848: ReplyRow ===

// Module 16848 (ReplyRow)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4752 */;
import Pressables from "Pressables" /* 5339 */;
import ReactionIcon from "ReactionIcon" /* 9037 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createICYMIStyles = fn(16791);
let closure_6 = createICYMIStyles.createICYMIStyles((marginLeft) => {
  const obj = { separator: null, container: null, buttonContainer: null, feedbackContainer: null, icon: null, feedbackButtonIcon: null, input: null, contentInventoryPressable: null, contentInventoryContainer: null, contentInventoryText: null, replyContainer: null };
  const size = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: marginLeft.margin, width: "100%" };
  obj.separator = size;
  obj.container = { flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginHorizontal: marginLeft.margin, marginBottom: marginLeft.margin, gap: nativeDefault.space.PX_12 };
  const obj2 = { flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", marginHorizontal: marginLeft.margin, marginBottom: marginLeft.margin, gap: nativeDefault.space.PX_12 };
  obj.buttonContainer = { flexGrow: 1, flexBasis: 0, height: nativeDefault.space.PX_40 };
  const obj3 = { flexGrow: 1, flexBasis: 0, height: nativeDefault.space.PX_40 };
  obj.feedbackContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, height: nativeDefault.space.PX_40 };
  obj.icon = { width: 20, height: 20 };
  const obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12, height: nativeDefault.space.PX_40 };
  obj.feedbackButtonIcon = { tintColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  const obj5 = { tintColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  obj.input = { flex: 1, borderRadius: nativeDefault.radii.round };
  const obj6 = { flex: 1, borderRadius: nativeDefault.radii.round };
  obj.contentInventoryPressable = { borderRadius: 20, width: "100%", minHeight: 40, backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, justifyContent: "center" };
  const obj7 = { borderRadius: 20, width: "100%", minHeight: 40, backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, justifyContent: "center" };
  obj.contentInventoryContainer = { marginLeft: marginLeft.margin, marginRight: 10, paddingVertical: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.contentInventoryText = { flexShrink: 1 };
  obj.replyContainer = { flexDirection: "row", alignItems: "center", marginLeft: marginLeft.inset, marginTop: marginLeft.margin };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = function ContentInventoryReplyRow(onPress) {
  const reactText = onPress.reactText;
  const tmp = closure_6();
  const obj = { style: tmp.replyContainer, children: null };
  const obj2 = { accessibilityRole: "button", onPress: onPress.onReply, style: tmp.contentInventoryPressable, accessibilityLabel: reactText, pointerEvents: "box-only", children: null };
  const obj3 = { style: tmp.contentInventoryContainer, children: null };
  const items = [React4(Text_Text.Text, { variant: "text-md/medium", color: "input-placeholder-text-default", lineClamp: 1, style: tmp.contentInventoryText, children: reactText }), React4(ReactionIcon.ReactionIcon, { style: tmp.icon, size: "custom" })];
  obj3.children = items;
  obj2.children = hasOwnProperty(View, obj3);
  obj.children = React4(Pressables.PressableOpacity, obj2);
  return React4(View, obj);
};