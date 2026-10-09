// === Module 16877: ReplyRow ===

// Module 16877 (ReplyRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import ReactionIcon from "ReactionIcon" /* 8941 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createICYMIStyles = fn(16820);
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
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = ReactCompilerGating.isReactCompilerEnabled() ? (function ContentInventoryReplyRow(arg0) {
  const cResult = c.c(17);
  ({ reactText, onReply } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === reactText) {
    if (cResult[1] === tmp4.contentInventoryText) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp4.icon) {
      const obj2 = { style: tmp4.icon, size: "custom" };
      const tmp9 = React4(ReactionIcon.ReactionIcon, obj2);
      cResult[3] = tmp4.icon;
      cResult[4] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.contentInventoryContainer) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp7) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] === onReply) {
          if (cResult[10] === reactText) {
            if (cResult[11] === tmp4.contentInventoryPressable) {
              if (cResult[12] === tmp10) {
                let tmp14 = cResult[13];
              }
              if (cResult[14] === tmp4.replyContainer) {
                if (cResult[15] === tmp14) {
                  let tmp17 = cResult[16];
                }
                return tmp17;
              }
              const obj3 = { style: tmp4.replyContainer, children: tmp14 };
              const tmp20 = React4(View, obj3);
              cResult[14] = tmp4.replyContainer;
              cResult[15] = tmp14;
              cResult[16] = tmp20;
              tmp17 = tmp20;
            }
          }
        }
        const obj4 = { accessibilityRole: "button", onPress: onReply, style: tmp4.contentInventoryPressable, accessibilityLabel: reactText, pointerEvents: "box-only", children: tmp10 };
        const tmp16 = React4(Pressables.PressableOpacity, obj4);
        cResult[9] = onReply;
        cResult[10] = reactText;
        cResult[11] = tmp4.contentInventoryPressable;
        cResult[12] = tmp10;
        cResult[13] = tmp16;
        tmp14 = tmp16;
      }
    }
    const obj5 = { style: tmp4.contentInventoryContainer, children: null };
    const items = [tmp5, tmp7];
    obj5.children = items;
    const tmp13 = hasOwnProperty(View, obj5);
    cResult[5] = tmp4.contentInventoryContainer;
    cResult[6] = tmp5;
    cResult[7] = tmp7;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  const tmp6 = React4(Text_Text.Text, { variant: "text-md/medium", color: "input-placeholder-text-default", lineClamp: 1, style: tmp4.contentInventoryText, children: reactText });
  cResult[0] = reactText;
  cResult[1] = tmp4.contentInventoryText;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj6 = { variant: "text-md/medium", color: "input-placeholder-text-default", lineClamp: 1, style: tmp4.contentInventoryText, children: reactText };
}) : (function ContentInventoryReplyRow(onPress) {
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
});