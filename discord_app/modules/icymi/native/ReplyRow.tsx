// discord_app/modules/icymi/native/ReplyRow.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createICYMIStyles from "createICYMIStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createICYMIStyles.createICYMIStyles((marginLeft) => {
  const obj = {
    separator: size,
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      marginHorizontal: marginLeft.margin,
      marginBottom: marginLeft.margin,
      gap: nativeDefault.space.PX_12,
    },
    buttonContainer: { flexGrow: 1, flexBasis: 0, height: nativeDefault.space.PX_40 },
    feedbackContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: nativeDefault.space.PX_12,
      height: nativeDefault.space.PX_40,
    },
    icon: { width: 20, height: 20 },
    feedbackButtonIcon: { tintColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT },
    input: { flex: 1, borderRadius: nativeDefault.radii.round },
    contentInventoryPressable: {
      borderRadius: 20,
      width: "100%",
      minHeight: 40,
      backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND,
      justifyContent: "center",
    },
    contentInventoryContainer: {
      marginLeft: marginLeft.margin,
      marginRight: 10,
      paddingVertical: nativeDefault.space.PX_8,
      flexDirection: "row",
      alignItems: "center",
      gap: nativeDefault.space.PX_4,
    },
    contentInventoryText: { flexShrink: 1 },
    replyContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: marginLeft.inset,
      marginTop: marginLeft.margin,
    },
  };
  size = {
    height: 1,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    marginBottom: marginLeft.margin,
    width: "100%",
  };
  ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: marginLeft.margin,
    marginBottom: marginLeft.margin,
    gap: nativeDefault.space.PX_12,
  });
  ({ flexGrow: 1, flexBasis: 0, height: nativeDefault.space.PX_40 });
  ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: nativeDefault.space.PX_12,
    height: nativeDefault.space.PX_40,
  });
  ({ tintColor: nativeDefault.colors.BUTTON_OUTLINE_PRIMARY_TEXT });
  ({ flex: 1, borderRadius: nativeDefault.radii.round });
  ({
    borderRadius: 20,
    width: "100%",
    minHeight: 40,
    backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND,
    justifyContent: "center",
  });
  ({
    marginLeft: marginLeft.margin,
    marginRight: 10,
    paddingVertical: nativeDefault.space.PX_8,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_4,
  });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let onReply;
      let reactText;
      const obj = react2;
      const cResult = obj.c(17);
      ({ reactText, onReply } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === reactText) {
        let tmp5;
        let tmp7;
        if (cResult[1] === tmp4.contentInventoryText) {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== tmp4.icon) {
          const obj2 = { style: tmp4.icon, size: "custom" };
          const tmp9 = React3(ReactionIcon.ReactionIcon, obj2);
          cResult[3] = tmp4.icon;
          cResult[4] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.contentInventoryContainer) {
          if (cResult[6] === tmp5) {
            let tmp10;
            if (cResult[7] === tmp7) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === onReply) {
              if (cResult[10] === reactText) {
                if (cResult[11] === tmp4.contentInventoryPressable) {
                  let tmp14;
                  if (cResult[12] === tmp10) {
                    tmp14 = cResult[13];
                  }
                  if (cResult[14] === tmp4.replyContainer) {
                    let tmp17;
                    if (cResult[15] === tmp14) {
                      tmp17 = cResult[16];
                    }
                    return tmp17;
                  }
                  const obj3 = { style: tmp4.replyContainer, children: tmp14 };
                  const tmp20 = React3(View, obj3);
                  cResult[14] = tmp4.replyContainer;
                  cResult[15] = tmp14;
                  cResult[16] = tmp20;
                  tmp17 = tmp20;
                }
              }
            }
            const obj4 = {
              accessibilityRole: "button",
              onPress: onReply,
              style: tmp4.contentInventoryPressable,
              accessibilityLabel: reactText,
              pointerEvents: "box-only",
              children: tmp10,
            };
            const tmp16 = React3(Pressables.PressableOpacity, obj4);
            cResult[9] = onReply;
            cResult[10] = reactText;
            cResult[11] = tmp4.contentInventoryPressable;
            cResult[12] = tmp10;
            cResult[13] = tmp16;
            tmp14 = tmp16;
          }
        }
        const obj5 = { style: tmp4.contentInventoryContainer, children: items };
        items = [tmp5, tmp7];
        const tmp13 = hasOwnProperty(View, obj5);
        cResult[5] = tmp4.contentInventoryContainer;
        cResult[6] = tmp5;
        cResult[7] = tmp7;
        cResult[8] = tmp13;
        tmp10 = tmp13;
      }
      const obj6 = {
        variant: "text-md/medium",
        color: "input-placeholder-text-default",
        lineClamp: 1,
        style: tmp4.contentInventoryText,
        children: reactText,
      };
      const tmp6 = React3(Text_Text.Text, obj6);
      cResult[0] = reactText;
      cResult[1] = tmp4.contentInventoryText;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (reactText) => {
      let PressableOpacity;
      let items;
      let obj2;
      let obj3;
      reactText = reactText.reactText;
      const onReply = reactText.onReply;
      const tmp = closure_6();
      const obj = { style: tmp.replyContainer, children: React3(PressableOpacity, obj2) };
      obj2 = {
        accessibilityRole: "button",
        onPress: onReply,
        style: tmp.contentInventoryPressable,
        accessibilityLabel: reactText,
        pointerEvents: "box-only",
        children: hasOwnProperty(View, obj3),
      };
      obj3 = { style: tmp.contentInventoryContainer, children: items };
      PressableOpacity = Pressables.PressableOpacity;
      items = [,];
      const obj4 = {
        variant: "text-md/medium",
        color: "input-placeholder-text-default",
        lineClamp: 1,
        style: tmp.contentInventoryText,
        children: reactText,
      };
      items[0] = React3(Text_Text.Text, obj4);
      const obj5 = { style: tmp.icon, size: "custom" };
      items[1] = React3(ReactionIcon.ReactionIcon, obj5);
      return React3(View, obj);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/ReplyRow.tsx");

export const ContentInventoryReplyRow = tmp4;
