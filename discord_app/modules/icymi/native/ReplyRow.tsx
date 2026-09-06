// discord_app/modules/icymi/native/ReplyRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createICYMIStyles = fn(16452);
let closure_6 = createICYMIStyles.createICYMIStyles((marginLeft) => {
  let obj = {
    separator: null,
    container: null,
    buttonContainer: null,
    feedbackContainer: null,
    icon: null,
    feedbackButtonIcon: null,
    input: null,
    contentInventoryPressable: null,
    contentInventoryContainer: null,
    contentInventoryText: null,
    replyContainer: null,
  };
  const size = {
    height: 1,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    marginBottom: marginLeft.margin,
    width: "100%",
  };
  obj.separator = size;
  obj = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: marginLeft.margin,
    marginBottom: marginLeft.margin,
    gap: nativeDefault.space.PX_12,
  };
  obj.container = obj;
  obj = { flexGrow: 1, flexBasis: 0, height: nativeDefault.space.PX_40 };
  obj.buttonContainer = obj;
  obj.feedbackContainer = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: nativeDefault.space.PX_12,
    height: nativeDefault.space.PX_40,
  };
  obj.icon = { width: 20, height: 20 };
  const obj1 = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: nativeDefault.space.PX_12,
    height: nativeDefault.space.PX_40,
  };
  obj.feedbackButtonIcon = { tintColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  const obj2 = { tintColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT };
  obj.input = { flex: 1, borderRadius: nativeDefault.radii.round };
  const obj3 = { flex: 1, borderRadius: nativeDefault.radii.round };
  obj.contentInventoryPressable = {
    borderRadius: 20,
    width: "100%",
    minHeight: 40,
    backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND,
    justifyContent: "center",
  };
  const obj4 = {
    borderRadius: 20,
    width: "100%",
    minHeight: 40,
    backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND,
    justifyContent: "center",
  };
  obj.contentInventoryContainer = {
    marginLeft: marginLeft.margin,
    marginRight: 10,
    paddingVertical: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
  };
  obj.contentInventoryText = { flexShrink: 1 };
  obj.replyContainer = {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: marginLeft.inset,
    marginTop: marginLeft.margin,
  };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = function ContentInventoryReplyRow(onPress) {
  const reactText = onPress.reactText;
  const tmp = closure_6();
  let obj = { style: tmp.replyContainer, children: null };
  obj = {
    accessibilityRole: "button",
    onPress: onPress.onReply,
    style: tmp.contentInventoryPressable,
    accessibilityLabel: reactText,
    pointerEvents: "box-only",
    children: null,
  };
  obj = { style: tmp.contentInventoryContainer, children: null };
  const items = [
    React4(Text_Text.Text, {
      variant: "text-md/medium",
      color: "input-placeholder-text-default",
      lineClamp: 1,
      style: tmp.contentInventoryText,
      children: reactText,
    }),
    React4(ReactionIcon.ReactionIcon, { style: tmp.icon, size: "custom" }),
  ];
  obj.children = items;
  obj.children = hasOwnProperty(View, obj);
  obj.children = React4(Pressables.PressableOpacity, obj);
  return React4(View, obj);
};
