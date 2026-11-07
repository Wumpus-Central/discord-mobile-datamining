// discord_app/modules/user_profile/native/UserProfileWidgetExpandableItems.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
const createStyles = fn(5140);
let obj2 = { viewMore: { marginTop: nativeDefault.space.PX_12 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetExpandableItems.tsx");

export function useExpandableItems(games, arg1) {
  [tmp2, require] = noop.useState(false);
  let substr = games;
  const bound = Math.max(games.length - arg1, 0);
  if (!tmp2) {
    substr = games.slice(0, arg1);
  }
  const tmp = _slicedToArray(noop.useState(false), 2);
  return {
    visibleItems: substr,
    hiddenCount: bound,
    expanded: tmp2,
    toggleExpanded: noop.useCallback(() => require((arg0) => !arg0), []),
  };
}
export function WidgetViewMoreButton(hiddenCount) {
  hiddenCount = hiddenCount.hiddenCount;
  ({ expanded, onPress } = hiddenCount);
  if (0 === hiddenCount) {
    return null;
  } else {
    const obj2 = { style: tmp.viewMore, hitSlop, onPress, accessibilityRole: "button", children: null };
    let tmp5Result = dependencyMap;
    const intl = util.intl;
    if (expanded) {
      let stringResult = intl.string(util.t["6MwJo/"]);
    } else {
      const obj = { numberOfItems: hiddenCount };
      stringResult = intl.formatToPlainString(util.t.zr0Y5R, obj);
    }
    const obj3 = { variant: "body-sm/medium", color: "text-muted", children: stringResult };
    tmp5Result = jsx(Text_Text.Text, { variant: "body-sm/medium", color: "text-muted", children: stringResult });
    obj2.children = tmp5Result;
    <Pressable style={tmp.viewMore} hitSlop={hitSlop} onPress={onPress} accessibilityRole="button">
      {null}
    </Pressable>;
  }
}
