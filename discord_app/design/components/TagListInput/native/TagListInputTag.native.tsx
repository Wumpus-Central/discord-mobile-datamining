// discord_app/design/components/TagListInput/native/TagListInputTag.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import useAccessibilityPressDefault from "../../../../modules/a11y/native/useAccessibilityPress.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles(() => {
  let obj = { tagWrapper: null, tagText: null, highlightedTagWrapper: null, tagIcon: null, start: null, end: null };
  obj = {
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
  obj.tagWrapper = obj;
  obj.tagText = { flexShrink: 1 };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.highlightedTagWrapper = obj;
  obj.tagIcon = { paddingRight: nativeDefault.space.PX_4, marginLeft: 0 };
  obj.start = { marginLeft: 0 };
  const obj1 = { paddingRight: nativeDefault.space.PX_4, marginLeft: 0 };
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
  let obj = { text: tag.text };
  const formatToPlainStringResult = intl.formatToPlainString(util.t["0Vb9FQ"], obj);
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
  start = undefined;
  if (start) {
    start = tmp.start;
  }
  items[2] = start;
  end = undefined;
  if (flag) {
    end = tmp.end;
  }
  obj = {
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
    obj = { style: tmp.tagIcon, children: tag.icon };
    tmp10 = React4(View, obj);
  }
  const items1 = [tmp10];
  const obj1 = { style: tmp.tagText, lineClamp: 1, variant: "text-sm/medium", color: null, children: null };
  let str = "text-default";
  if (selected) {
    str = "text-overlay-light";
  }
  obj1.color = str;
  obj1.children = tag.text;
  items1[1] = React4(Text_Text.Text, obj1);
  obj.children = items1;
  return hasOwnProperty(Pressables.PressableOpacity, obj);
};
