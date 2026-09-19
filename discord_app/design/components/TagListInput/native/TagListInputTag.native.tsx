// discord_app/design/components/TagListInput/native/TagListInputTag.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import useAccessibilityPressDefault from "../../../../modules/a11y/native/useAccessibilityPress.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
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
    highlightedTagWrapper: null,
    tagIcon: null,
    start: null,
    end: null,
  };
  const obj2 = {
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
  };
  obj.highlightedTagWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.tagIcon = { paddingRight: nativeDefault.space.PX_4, marginLeft: 0 };
  obj.start = { marginLeft: 0 };
  const obj4 = { paddingRight: nativeDefault.space.PX_4, marginLeft: 0 };
  obj.end = { marginRight: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TagListInput/native/TagListInputTag.native.tsx");

export const TagListInputTagComponent = function TagListInputTagComponent(end) {
  ({ tag, selected, onPress: require, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t["0Vb9FQ"], { text: tag.text });
  ({ onAccessibilityAction, accessibilityActions } = useAccessibilityPressDefault(
    () => require("remove"),
    formatToPlainStringResult,
  ));
  const items = [tmp.tagWrapper, , ,];
  let prop;
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
      return require("select");
    },
    accessibilityRole: "button",
    accessibilityLabel: formatToPlainStringResult,
    accessibilityActions,
    onAccessibilityAction,
    children: null,
  };
  items[3] = end;
  let tmp10 = null;
  if (null != tag.icon) {
    const obj3 = { style: tmp.tagIcon, children: tag.icon };
    tmp10 = React4(View, obj3);
  }
  const items1 = [tmp10];
  const obj4 = { style: tmp.tagText, lineClamp: 1, variant: "text-sm/medium", color: null, children: null };
  let str = "text-default";
  if (selected) {
    str = "text-overlay-light";
  }
  obj4.color = str;
  obj4.children = tag.text;
  items1[1] = React4(Text_Text.Text, obj4);
  obj2.children = items1;
  return hasOwnProperty(Pressables.PressableOpacity, obj2);
};
