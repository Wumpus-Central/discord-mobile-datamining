// discord_app/design/components/TagListInput/native/TagListInputTag.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import useAccessibilityPressDefault from "../../../../modules/a11y/native/useAccessibilityPress.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles(() => {
  const obj = {
    tagWrapper: {
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
      marginHorizontal: 2,
      borderRadius: nativeDefault.radii.xs,
      borderWidth: 1,
      borderColor: nativeDefault.colors.BORDER_SUBTLE,
      paddingHorizontal: nativeDefault.space.PX_8,
      paddingVertical: nativeDefault.space.PX_4,
      overflow: "hidden",
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 1,
    },
    tagText: { flexShrink: 1 },
    highlightedTagWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND },
    tagIcon: { paddingRight: nativeDefault.space.PX_4, marginLeft: 0 },
    start: { marginLeft: 0 },
    end: { marginRight: nativeDefault.space.PX_4 },
  };
  ({
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    marginHorizontal: 2,
    borderRadius: nativeDefault.radii.xs,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_4,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
  ({ paddingRight: nativeDefault.space.PX_4, marginLeft: 0 });
  ({ marginRight: nativeDefault.space.PX_4 });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityActions;
      let end;
      let onAccessibilityAction;
      let onPress;
      let selected;
      let start;
      let tag;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(26);
      ({ tag, selected, onPress } = arg0);
      ({ start, end } = arg0);
      const tmp4 = undefined !== start && start;
      const tmp5 = undefined !== end && end;
      const tmp6 = closure_6();
      if (cResult[0] !== tag.text) {
        const intl = intl2.intl;
        const obj2 = { text: tag.text };
        const formatToPlainStringResult = intl.formatToPlainString(intl2.t["0Vb9FQ"], obj2);
        cResult[0] = tag.text;
        cResult[1] = formatToPlainStringResult;
        tmp7 = formatToPlainStringResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== onPress) {
        class A {
          constructor() {
            return onPress("remove");
          }
        }
        cResult[2] = onPress;
        cResult[3] = A;
      } else {
        class A {
          constructor() {
            return onPress("remove");
          }
        }
      }
      ({ onAccessibilityAction, accessibilityActions } = useAccessibilityPressDefault(A, tmp7));
      useAccessibilityPressDefault(A, tmp7);
      if (selected) {
        class A {
          constructor() {
            return onPress("remove");
          }
        }
      }
      if (tmp4) {
        class A {
          constructor() {
            return onPress("remove");
          }
        }
      }
      if (tmp5) {
        class A {
          constructor() {
            return onPress("remove");
          }
        }
      }
      if (cResult[4] === tmp6.tagWrapper) {
        class A {
          constructor() {
            return onPress("remove");
          }
        }
      }
      const items = [tmp6.tagWrapper, undefined, undefined, undefined];
      cResult[4] = tmp6.tagWrapper;
      cResult[5] = undefined;
      cResult[6] = undefined;
      cResult[7] = undefined;
      cResult[8] = items;
    }
  : (end) => {
      let accessibilityActions;
      let closure_129_0;
      let items1;
      let onAccessibilityAction;
      let selected;
      let start;
      let str;
      let tag;
      const f99930 = () => closure_1_0("remove");
      ({ tag, selected, onPress: closure_129_0, start } = end);
      if (start === undefined) {
        start = false;
      }
      let flag = end.end;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_6();
      const intl = intl2.intl;
      const obj = { text: tag.text };
      const formatToPlainStringResult = intl.formatToPlainString(intl2.t["0Vb9FQ"], obj);
      ({ onAccessibilityAction, accessibilityActions } = useAccessibilityPressDefault(
        f99930,
        formatToPlainStringResult,
      ));
      const items = [tmp.tagWrapper, , ,];
      let prop;
      useAccessibilityPressDefault(f99930, formatToPlainStringResult);
      const PressableOpacity = Pressables.PressableOpacity;
      if (selected) {
        prop = tmp.highlightedTagWrapper;
      }
      items[1] = prop;
      let start1;
      if (start) {
        start1 = tmp.start;
      }
      items[2] = start1;
      end = undefined;
      if (flag) {
        end = tmp.end;
      }
      const obj2 = {
        style: items,
        onPress() {
          return closure_1_0("select");
        },
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainStringResult,
        accessibilityActions,
        onAccessibilityAction,
        children: items1,
      };
      items[3] = end;
      let tmp10 = null;
      if (null != tag.icon) {
        const obj3 = { style: tmp.tagIcon, children: tag.icon };
        tmp10 = React3(View, obj3);
      }
      items1 = [tmp10];
      const obj4 = { style: tmp.tagText, lineClamp: 1, variant: "text-sm/medium", color: str, children: tag.text };
      str = "text-default";
      const Text = Text_Text.Text;
      if (selected) {
        str = "text-overlay-light";
      }
      items1[1] = React3(Text, obj4);
      return hasOwnProperty(PressableOpacity, obj2);
    };
const result = size.fileFinishedImporting("design/components/TagListInput/native/TagListInputTag.native.tsx");

export const TagListInputTagComponent = tmp4;
