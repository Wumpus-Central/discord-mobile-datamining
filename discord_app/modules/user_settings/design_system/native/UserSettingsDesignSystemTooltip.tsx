// === Module 15785: UserSettingsDesignSystemTooltip ===

// Module 15785 (UserSettingsDesignSystemTooltip)
import Text_Text from "Text/Text" /* 4556 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import LayerScope from "LayerScope" /* 7156 */;
import DeviceOrientation from "DeviceOrientation" /* 8332 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Content() {
  let obj = noop;
  const tmp2 = first2(noop.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp4 = first2(noop.useState(false), 2);
  const first1 = tmp4[0];
  const effect = noop.useEffect(() => {
    const obj = DeviceOrientation;
    if (first1) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = noop.useEffect(() => () => first1(closure_1_1[5]).lockOrientationForiOS(), []);
  const items = [first1, tmp4[1]];
  const tmp = closure_8();
  [tmp9, tmp10] = first2(items, 2);
  const tmp11 = first2(noop.useState(false), 2);
  first2 = tmp11[0];
  let str = "Show tooltip";
  if (first) {
    str = "Hide tooltip";
  }
  const ref = obj.useRef(null);
  const items1 = [first2, first];
  const memo = obj.useMemo(() => {
    let str = "top";
    if (first2) {
      str = "bottom";
    }
    return {
      label: "NEW",
      position: str,
      visible: first1,
      onPress() {
        return closure_1_1(false);
      }
    };
  }, items1);
  let obj1 = first1(11128);
  const tooltip = obj1.useTooltip(ref, memo);
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj1 = {
    ref,
    onPress() {
      closure_1(!first1);
    },
    variant: "primary",
    text: str,
    size: "md"
  };
  obj.children = closure_5(first1(4975).Button, obj1);
  const items2 = [closure_5(View, obj), closure_5(first1(7201).TableSwitchRow, { label: "Unlock Orientation", value: tmp9, onValueChange: tmp10 }), closure_5(first1(7201).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp11[1] }), closure_5(TooltipNote, {})];
  obj.children = items2;
  return closure_7(closure_6, obj);
}
class TooltipNote {
  constructor() {
    obj = { variant: "text-sm/normal", style: { padding: 16, paddingTop: 16 }, children: null };
    items = ["Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing"];
    items[1] = jsx(closure_0(closure_1[9]).Text, { variant: "text-sm/bold", children: " <LayerScope/>" });
    items[2] = " on the surface you expect to see the tooltip.";
    obj.children = items;
    return jsxs(closure_0(closure_1[9]).Text, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx");

export default function UserSettingsDesignSystemTooltip() {
  let obj = { style: closure_8().flex, bottom: true, children: null };
  obj = { children: hasOwnProperty(Content, {}) };
  obj.children = hasOwnProperty(LayerScope.LayerScope, obj);
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj);
};
export const useCanRotate = function useCanRotate() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  const effect = noop.useEffect(() => {
    const obj = DeviceOrientation;
    if (first1) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = noop.useEffect(() => () => first1(closure_1_1[5]).lockOrientationForiOS(), []);
  const items = [first, tmp[1]];
  return items;
};
export { TooltipNote };