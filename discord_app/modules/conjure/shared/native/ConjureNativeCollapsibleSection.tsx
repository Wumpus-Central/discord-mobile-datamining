// === Module 12683: ConjureNativeCollapsibleSection ===

// Module 12683 (ConjureNativeCollapsibleSection)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import ChevronSmallRightIcon2 from "ChevronSmallRightIcon" /* 7372 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11377 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { root: { gap: nativeDefault.space.PX_8 }, header: null, headerTrailing: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj2.headerTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const PX_8 = nativeDefault.space.PX_8;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCollapsibleSection.tsx");

export default function ConjureNativeCollapsibleSection(showHeader) {
  let flag = showHeader.showHeader;
  ({ title, meta } = showHeader);
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = showHeader.superseded;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = showHeader.expanded;
  if (flag3 === undefined) {
    flag3 = true;
  }
  ({ onToggleExpanded, showLabel } = showHeader);
  ({ hideLabel, children } = showHeader);
  const tmp = closure_6();
  if (flag3) {
    let ChevronSmallRightIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
    let tmp4 = require;
  } else {
    ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
    tmp4 = require;
  }
  const obj = { style: tmp.root, children: null };
  let tmp6Result = null;
  if (flag) {
    const obj2 = { style: tmp.header, children: null };
    const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: title };
    const items = [React4(tmp4(5619).Text, obj3), ];
    const obj4 = { style: tmp.headerTrailing, children: null };
    const items1 = [meta, ];
    let tmp9Result = null;
    if (flag2) {
      tmp9Result = null;
      if (null != onToggleExpanded) {
        const obj5 = { scaleAmountInPx: 4, hitSlop: PX_8, accessibilityState: null, accessibilityLabel: null, onPress: null, children: null };
        const obj6 = { expanded: flag3 };
        obj5.accessibilityState = obj6;
        if (flag3) {
          showLabel = hideLabel;
        }
        obj5.accessibilityLabel = showLabel;
        obj5.onPress = onToggleExpanded;
        const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
        obj5.children = React4(ChevronSmallRightIcon, obj7);
        tmp9Result = React4(tmp4(8983).PressableScale, obj5);
      }
    }
    items1[1] = tmp9Result;
    obj4.children = items1;
    items[1] = hasOwnProperty(View, obj4);
    obj2.children = items;
    tmp6Result = hasOwnProperty(View, obj2);
  }
  const items2 = [tmp6Result, ];
  let tmp13 = null;
  if (flag3) {
    tmp13 = children;
  }
  items2[1] = tmp13;
  obj.children = items2;
  return hasOwnProperty(View, obj);
};
export function ConjureNativeCollapsibleMeta(arg0) {
  ({ children, accessibilityLabel, accessibilityLiveRegion } = arg0);
  return React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", accessibilityLabel, accessibilityLiveRegion, children });
}