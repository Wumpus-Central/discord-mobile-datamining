import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
function Content() {
  let tmp10;
  let tmp9;
  let obj = React;
  const tmp2 = first2(React.useState(false), 2);
  const first = tmp2[0];
  let first1 = first;
  const dependencyMap = tmp2[1];
  first1 = undefined;
  const tmp4 = first2(React.useState(false), 2);
  first1 = tmp4[0];
  const effect = React.useEffect(() => {
    const obj = first1(8171);
    if (first1) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = React.useEffect(() => () => callback(table[5]).lockOrientationForiOS(), []);
  const items = [first1, tmp4[1]];
  const tmp = callback4();
  [tmp9, tmp10] = first2(items, 2);
  const tmp11 = first2(React.useState(false), 2);
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
        return callback(false);
      }
    };
  }, items1);
  let obj1 = first1(8441);
  const tooltip = obj1.useTooltip(ref, memo);
  obj = { children: null };
  obj = { style: tmp.container, children: callback2(first1(4604).Button, obj1) };
  obj1 = {
    ref,
    onPress() {
      dependencyMap(!first1);
    },
    variant: "primary",
    text: str,
    size: "md"
  };
  const items2 = [callback2(View, obj), callback2(first1(5559).TableSwitchRow, { label: "Unlock Orientation", value: tmp9, onValueChange: tmp10 }), callback2(first1(5559).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp11[1] }), callback2(TooltipNote, {})];
  obj[0] = items2;
  return callback3(closure_6, obj);
}
class TooltipNote {
  constructor() {
    obj = { variant: "text-sm/normal", style: { padding: 16, paddingTop: 16 }, children: null };
    items = ["Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing"];
    items[1] = jsx(require("Text").Text, { variant: "text-sm/bold", children: " <LayerScope/>" });
    items[2] = " on the surface you expect to see the tooltip.";
    obj[2] = items;
    return jsxs(require("Text").Text, obj);
  }
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx");

export default function UserSettingsDesignSystemTooltip() {
  let obj = { style: callback4().flex, bottom: true, children: null };
  obj = { children: null };
  obj[0] = callback2(Content, {});
  obj[2] = callback2(require(5506) /* Layer */.LayerScope, obj);
  return callback2(require(5181) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
export const useCanRotate = function useCanRotate() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const effect = React.useEffect(() => {
    const obj = first1(8171);
    if (first1) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = React.useEffect(() => () => callback(table[5]).lockOrientationForiOS(), []);
  const items = [first, tmp[1]];
  return items;
};
export { TooltipNote };