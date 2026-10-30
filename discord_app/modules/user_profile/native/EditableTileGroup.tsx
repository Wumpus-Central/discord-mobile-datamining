// discord_app/modules/user_profile/native/EditableTileGroup.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { gap: nativeDefault.space.PX_8 }, labelRow: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditableTileGroup.tsx");

export function EditableTileGroup(children) {
  let flag = children.showNitroIcon;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.labelRow, children: null };
  const items = [
    React4(Text_Text.Text, {
      accessibilityRole: "header",
      variant: "text-sm/semibold",
      color: "text-strong",
      children: children.heading,
    }),
  ];
  if (flag) {
    const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_STRONG, accessibilityLabel: null };
    const intl = util.intl;
    obj3.accessibilityLabel = intl.string(util.t["5AFxuK"]);
    flag = React4(NitroWheelIcon.NitroWheelIcon, obj3);
  }
  items[1] = flag;
  obj2.children = items;
  const items1 = [hasOwnProperty(View, obj2), children.children];
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
