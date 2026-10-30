// discord_app/modules/user_profile/native/UserProfileThemePicker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import getHigherContrastColor from "../utils/getHigherContrastColor.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ColorButton(arg0) {
  ({ color, label, accessibilityLabel, onPress } = arg0);
  const tmp = closure_8();
  const int2hexResult = utils_ColorUtils.int2hex(color);
  const obj3 = { backgroundColor: int2hexResult, colors: null };
  const items = [WHITE, PRIMARY_530];
  obj3.colors = items;
  const obj4 = { style: tmp.colorContainer, children: null };
  const higherContrastColor = getHigherContrastColor.getHigherContrastColor(obj3);
  const obj5 = {
    accessibilityRole: "button",
    accessibilityLabel,
    accessibilityHint: null,
    style: null,
    onPress: null,
    children: null,
  };
  const intl = util.intl;
  obj5.accessibilityHint = intl.string(util.t.Qp04hK);
  const items1 = [tmp.colorButton, { backgroundColor: int2hexResult }];
  obj5.style = items1;
  obj5.onPress = onPress;
  obj5.children = React3(PencilIcon.PencilIcon, { size: "xs", color: higherContrastColor, style: tmp.editIcon });
  const items2 = [
    React3(Pressables.PressableOpacity, obj5),
    React3(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: label,
    }),
  ];
  obj4.children = items2;
  return React4(View, obj4);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_530 = nativeDefault.unsafe_rawColors.PRIMARY_530;
const createStyles = fn(5009);
let obj2 = {
  colorRow: {
    flexDirection: "row",
    gap: nativeDefault.space.PX_12,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  colorContainer: null,
  colorButton: null,
  editIcon: null,
};
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "center", alignItems: "flex-start" };
obj2.colorContainer = {
  position: "relative",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.colorButton = size;
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj2.editIcon = rect;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileThemePicker.tsx");

export default function UserProfileThemePicker(arg0) {
  ({ primaryColor, secondaryColor } = arg0);
  ({ onPressPrimary, onPressSecondary } = arg0);
  const tmp = closure_8();
  const hex2intResult = utils_ColorUtils.hex2int(PRIMARY_530);
  if (primaryColor == null) {
    primaryColor = hex2intResult;
  }
  if (secondaryColor == null) {
    secondaryColor = hex2intResult;
  }
  const obj2 = { style: tmp.colorRow, children: null };
  const obj3 = { color: primaryColor, label: null, accessibilityLabel: null, onPress: null };
  const intl = util.intl;
  obj3.label = intl.string(util.t.C3KTQk);
  const intl2 = util.intl;
  const obj4 = { colorHex: null };
  obj4.colorHex = utils_ColorUtils.int2hex(primaryColor);
  obj3.accessibilityLabel = intl2.formatToPlainString(util.t.v4X2kc, obj4);
  obj3.onPress = onPressPrimary;
  const items = [React3(ColorButton, obj3)];
  const obj5 = { color: secondaryColor, label: null, accessibilityLabel: null, onPress: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t["8elvy6"]);
  const intl4 = util.intl;
  const obj6 = { colorHex: null };
  const tmp2Result = utils_ColorUtils;
  obj6.colorHex = utils_ColorUtils.int2hex(secondaryColor);
  obj5.accessibilityLabel = intl4.formatToPlainString(util.t.I0tmru, obj6);
  obj5.onPress = onPressSecondary;
  items[1] = React3(ColorButton, obj5);
  obj2.children = items;
  return React4(View, obj2);
}
