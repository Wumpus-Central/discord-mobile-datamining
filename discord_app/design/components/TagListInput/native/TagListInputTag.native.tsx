// === Module 9640: TagListInputTagComponent ===

// Module 9640 (TagListInputTagComponent)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import Text from "Text" /* 4441 */;
import PressableBase from "PressableBase" /* 5020 */;
import useAccessibilityPressDefault from "useAccessibilityPress" /* 9641 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const colors = ThemesDefault.colors;
  if (flag) {
    let BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_MOD_SUBTLE;
    let tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  let obj = { backgroundColor: BACKGROUND_SURFACE_HIGH, marginHorizontal: 2, borderRadius: null, borderWidth: null, borderColor: null, paddingHorizontal: null, paddingVertical: null, overflow: "hidden", flexDirection: "row", alignItems: "center", flexShrink: 1 };
  const radii = tmp4(712).radii;
  obj[2] = flag ? radii.xs : radii.round;
  let num;
  if (flag) {
    num = 1;
  }
  obj[3] = num;
  let BORDER_SUBTLE;
  if (flag) {
    BORDER_SUBTLE = tmp4(712).colors.BORDER_SUBTLE;
  }
  obj = { tagWrapper: null, tagText: null, highlightedTagWrapper: null, tagIcon: null, start: BORDER_SUBTLE, end: tmp4(712).space.PX_8 };
  obj[6] = tmp4(712).space.PX_4;
  obj[0] = obj;
  obj[1] = { flexShrink: 1 };
  obj = { backgroundColor: tmp4(712).colors.BACKGROUND_BRAND };
  obj[2] = obj;
  obj[3] = { paddingRight: tmp4(712).space.PX_4, marginLeft: 0 };
  obj[4] = { marginLeft: 0 };
  obj1 = { paddingRight: tmp4(712).space.PX_4, marginLeft: 0 };
  obj[5] = { marginRight: tmp4(712).space.PX_4 };
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
  const tmp2 = callback2(useIsMobileVisualRefreshExperimentEnabledDefault("TagListInputTag"));
  const intl = getSystemLocale.intl;
  let obj = { text: tag.text };
  const formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["0Vb9FQ"], obj);
  ({ onAccessibilityAction, accessibilityActions } = useAccessibilityPressDefault(() => callback("remove"), formatToPlainStringResult));
  const items = [tmp2.tagWrapper, , , ];
  let prop;
  if (selected) {
    prop = tmp2.highlightedTagWrapper;
  }
  items[1] = prop;
  start = undefined;
  if (start) {
    start = tmp2.start;
  }
  items[2] = start;
  end = undefined;
  if (flag) {
    end = tmp2.end;
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
    obj[0] = tmp2.tagIcon;
    obj[1] = tag.icon;
    tmp10 = callback(View, obj);
  }
  const items1 = [tmp10, ];
  obj1 = { style: tmp2.tagText, lineClamp: 1, variant: "text-sm/medium", color: null, children: null };
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