// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx
import LayerScope from "../../../../design/components/Layers/native/LayerScope.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import DeviceOrientation from "../../../device/native/DeviceOrientation.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function Content() {
  const tmp2 = first2(noop.useState(false), 2);
  const visible = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp4 = first2(noop.useState(false), 2);
  const first1 = tmp4[0];
  closure_129_0 = first1;
  const effect = noop.useEffect(() => {
    const obj = DeviceOrientation;
    if (first) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = noop.useEffect(() => () => visible(dependencyMap[5]).lockOrientationForiOS(), []);
  const items = [first1, tmp4[1]];
  const tmp = closure_8();
  [tmp9, tmp10] = first2(items, 2);
  const tmp11 = first2(noop.useState("top"), 2);
  first2 = tmp11[0];
  let str = "Show tooltip";
  if (visible) {
    str = "Hide tooltip";
  }
  const ref = noop.useRef(null);
  const items1 = [first2, visible];
  const memo = noop.useMemo(
    () => ({
      label: "NEW",
      position: first2,
      visible,
      onPress() {
        return dependencyMap(false);
      },
    }),
    items1,
  );
  const tmp8 = first2(items, 2);
  const tooltip = visible(9955).useTooltip(ref, memo);
  const obj3 = { children: null };
  const obj4 = {
    style: tmp.container,
    children: closure_5(visible(5634).Button, {
      ref,
      onPress() {
        dependencyMap(!first);
      },
      variant: "primary",
      text: str,
      size: "md",
    }),
  };
  const items2 = [
    closure_5(View, obj4),
    closure_5(visible(7369).TableSwitchRow, { label: "Unlock Orientation", value: tmp9, onValueChange: tmp10 }),
    ,
  ];
  const obj2 = visible(9955);
  const obj5 = {
    ref,
    onPress() {
      dependencyMap(!first);
    },
    variant: "primary",
    text: str,
    size: "md",
  };
  items2[2] = closure_5(visible(7058).TableRadioGroup, {
    title: "Position",
    value: first2,
    onChange: tmp11[1],
    hasIcons: false,
    children: closure_9.map((label) => closure_1_5(first(7061).TableRadioRow, { label, value: label }, label)),
  });
  items2[3] = closure_5(TooltipNote, {});
  obj3.children = items2;
  return closure_7(closure_6, obj3);
}
class TooltipNote {
  constructor() {
    obj = { variant: "text-sm/normal", style: { padding: 16, paddingTop: 16 }, children: null };
    items = [
      "Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing",
    ];
    items[1] = jsx(closure_0(closure_1[11]).Text, { variant: "text-sm/bold", children: " <LayerScope/>" });
    items[2] = " on the surface you expect to see the tooltip.";
    obj.children = items;
    return jsxs(closure_0(closure_1[11]).Text, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let closure_8 = createStyles.createStyles({
  container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" },
  flex: { flex: 1 },
});
let closure_9 = ["top", "bottom", "left", "right"];
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx",
);

export default function UserSettingsDesignSystemTooltip() {
  const obj = { style: closure_8().flex, bottom: true, children: null };
  const tmp = closure_8();
  obj.children = hasOwnProperty(LayerScope.LayerScope, { children: hasOwnProperty(Content, {}) });
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj);
}
export function useCanRotate() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  const effect = noop.useEffect(() => {
    const obj = DeviceOrientation;
    if (first) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = noop.useEffect(() => () => visible(dependencyMap[5]).lockOrientationForiOS(), []);
  const items = [first, tmp[1]];
  return items;
}
export { TooltipNote };
