// === Module 8628: TagListInputTag ===

// Module 8628 (TagListInputTag)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import Pressables from "Pressables" /* 6184 */;
import useAccessibilityPressDefault from "useAccessibilityPress" /* 8629 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles(() => {
  const obj = { tagWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginHorizontal: 2, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, overflow: "hidden", flexDirection: "row", alignItems: "center", flexShrink: 1 }, tagText: { flexShrink: 1 }, highlightedTagWrapper: null, tagIcon: null, start: null, end: null };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginHorizontal: 2, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, overflow: "hidden", flexDirection: "row", alignItems: "center", flexShrink: 1 };
  obj.highlightedTagWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.tagIcon = { paddingRight: nativeDefault.space.PX_4, marginLeft: 0 };
  obj.start = { marginLeft: 0 };
  const obj4 = { paddingRight: nativeDefault.space.PX_4, marginLeft: 0 };
  obj.end = { marginRight: nativeDefault.space.PX_4 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TagListInput/native/TagListInputTag.native.tsx");

export const TagListInputTagComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function TagListInputTagComponent(arg0) {
  const cResult = c.c(26);
  ({ tag, selected, onPress } = arg0);
  ({ start, end } = arg0);
  const tmp6 = closure_6();
  if (cResult[0] !== tag.text) {
    const intl = util.intl;
    const obj2 = { text: tag.text };
    const formatToPlainStringResult = intl.formatToPlainString(util.t["0Vb9FQ"], obj2);
    cResult[0] = tag.text;
    cResult[1] = formatToPlainStringResult;
    let tmp7 = formatToPlainStringResult;
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
  const tmp4 = undefined !== start && start;
  const tmp5 = undefined !== end && end;
  ({ onAccessibilityAction, accessibilityActions } = useAccessibilityPressDefault(A, tmp7));
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
  const tmp10 = useAccessibilityPressDefault(A, tmp7);
}) : (function TagListInputTagComponent(end) {
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
  ({ onAccessibilityAction, accessibilityActions } = useAccessibilityPressDefault(() => require("remove"), formatToPlainStringResult));
  const items = [tmp.tagWrapper, , , ];
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
    children: null
  };
  items[3] = end;
  let tmp10 = null;
  if (null != tag.icon) {
    const obj3 = { style: tmp.tagIcon, children: tag.icon };
    tmp10 = React4(View, obj3);
  }
  const items1 = [tmp10, ];
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
});