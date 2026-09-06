// discord_app/modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: {
    width: 56,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 8,
    flex: 1,
  },
  marker: null,
  empty: null,
  label: null,
  firstOption: null,
  lastOption: null,
};
createStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.marker = createStyles;
let size = {
  display: "flex",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  width: "100%",
  height: "100%",
};
createStyles.empty = size;
createStyles.label = { textAlign: "center" };
createStyles.firstOption = { alignItems: "flex-start", textAlign: "left" };
createStyles.lastOption = { alignItems: "flex-end", textAlign: "right" };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx");

export default function SafetyHubAccountStandingSubwayMarker(arg0) {
  ({ selectedIcon, style: require, isSelected } = arg0);
  ({ index, size, numOptions } = arg0);
  ({ status, onLayout } = arg0);
  const tmp = closure_6();
  dependencyMap = tmp;
  let obj = {};
  const merged = Object.assign(tmp.container);
  const merged1 = Object.assign(0 === index ? tmp.firstOption : {});
  const merged2 = Object.assign(index === numOptions - 1 ? tmp.lastOption : {});
  obj = { style: obj, onLayout, children: null };
  if (!isSelected) {
    obj = {};
    const merged3 = Object.assign(tmp.marker);
    obj.width = size;
    obj.height = size;
    let num = 0;
    if (tmp3) {
      num = -isSelected(576).space.PX_4;
    }
    obj.marginLeft = num;
    let num2 = 0;
    if (index === numOptions - 1) {
      num2 = -isSelected(576).space.PX_4;
    }
    const obj1 = { style: null, children: null };
    obj.marginRight = num2;
    obj1.style = obj;
    const obj2 = { style: tmp.empty };
    obj1.children = closure_4(tmp9, obj2);
    selectedIcon = tmp10(tmp9, obj1);
  }
  const items = [selectedIcon];
  const intl = util.intl;
  items[1] = intl.format(status, {
    hook(children, arg1) {
      if (isSelected) {
        let obj = { style: null, variant: "text-xxs/bold", children: null };
        obj = { color: color.color };
        obj.style = obj;
        obj.children = children;
      } else {
        obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: label.label, children };
      }
      return React4(Text_Text.Text, obj, arg1);
    },
  });
  obj.children = items;
  return closure_5(View, obj);
}
export const SUBWAY_MARKER_WIDTH = 56;
