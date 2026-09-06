// === Module 9758: TagListInputTagComponent ===

// Module 9758 (TagListInputTagComponent)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import PressableBase from "PressableBase" /* 5123 */;
import useAccessibilityPressDefault from "useAccessibilityPress" /* 9759 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles(() => {
  let obj = { tagWrapper: null, tagText: null, highlightedTagWrapper: null, tagIcon: null, start: null, end: null };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, marginHorizontal: 2, borderRadius: ThemesDefault.radii.xs, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4, overflow: "hidden", flexDirection: "row", alignItems: "center", flexShrink: 1 };
  obj[0] = obj;
  obj[1] = { flexShrink: 1 };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
  obj[2] = obj;
  obj[3] = { paddingRight: ThemesDefault.space.PX_4, marginLeft: 0 };
  obj[4] = { marginLeft: 0 };
  obj1 = { paddingRight: ThemesDefault.space.PX_4, marginLeft: 0 };
  obj[5] = { marginRight: ThemesDefault.space.PX_4 };
  return obj;
});
const result = require("set").fileFinishedImporting("design/components/TagListInput/native/TagListInputTag.native.tsx");

export const TagListInputTagComponent = function TagListInputTagComponent(end) {
  ({ tag, selected, onPress: require, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  const intl = getSystemLocale.intl;
  let obj = { text: tag.text };
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["0Vb9FQ"], obj);
  ({ onAccessibilityAction, accessibilityActions } = useAccessibilityPressDefault(() => callback("remove"), formatToPlainStringResult));
  const items = [tmp.tagWrapper, , , ];
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
      return callback("select");
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
    obj = { style: null, children: null };
    obj[0] = tmp.tagIcon;
    obj[1] = tag.icon;
    tmp10 = callback(View, obj);
  }
  const items1 = [tmp10, ];
  obj1 = { style: tmp.tagText, lineClamp: 1, variant: "text-sm/medium", color: null, children: null };
  let str = "text-default";
  if (selected) {
    str = "text-overlay-light";
  }
  obj1[3] = str;
  obj1[4] = tag.text;
  items1[1] = callback(Text.Text, obj1);
  obj[6] = items1;
  return closure_5(PressableBase.PressableOpacity, obj);
};