// discord_app/modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  container: {
    width: 56,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 8,
    flex: 1,
  },
  marker: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    padding: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  empty: null,
  label: null,
  firstOption: null,
  lastOption: null,
};
let size = {
  display: "flex",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  width: "100%",
  height: "100%",
};
obj2.empty = size;
obj2.label = { textAlign: "center" };
obj2.firstOption = { alignItems: "flex-start", textAlign: "left" };
obj2.lastOption = { alignItems: "flex-end", textAlign: "right" };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx");

export default function SafetyHubAccountStandingSubwayMarker(arg0) {
  ({ selectedIcon, style: require, isSelected } = arg0);
  ({ index, size, numOptions } = arg0);
  ({ status, onLayout } = arg0);
  const tmp = closure_6();
  dependencyMap = tmp;
  const merged = Object.assign(tmp.container);
  const merged1 = Object.assign(0 === index ? tmp.firstOption : {});
  const merged2 = Object.assign(index === numOptions - 1 ? tmp.lastOption : {});
  let obj2 = { style: {}, onLayout, children: null };
  if (!isSelected) {
    let obj3 = {};
    const merged3 = Object.assign(tmp.marker);
    obj3.width = size;
    obj3.height = size;
    let num = 0;
    if (tmp3) {
      num = -isSelected(576).space.PX_4;
    }
    obj3.marginLeft = num;
    let num2 = 0;
    if (index === numOptions - 1) {
      num2 = -isSelected(576).space.PX_4;
    }
    const obj4 = { style: null, children: null };
    obj3.marginRight = num2;
    obj4.style = obj3;
    const obj5 = { style: tmp.empty };
    obj4.children = closure_4(View, obj5);
    selectedIcon = closure_4(View, obj4);
  }
  const items = [selectedIcon];
  const intl = util.intl;
  items[1] = intl.format(status, {
    hook(children, arg1) {
      if (isSelected) {
        const obj2 = { style: null, variant: "text-xxs/bold", children: null };
        const obj3 = { color: color.color };
        obj2.style = obj3;
        obj2.children = children;
        let obj = obj2;
      } else {
        obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: label.label, children };
      }
      return React4(Text_Text.Text, obj, arg1);
    },
  });
  obj2.children = items;
  return closure_5(View, obj2);
}
export const SUBWAY_MARKER_WIDTH = 56;
