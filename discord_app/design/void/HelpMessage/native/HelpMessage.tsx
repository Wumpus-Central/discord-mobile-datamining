// discord_app/design/void/HelpMessage/native/HelpMessage.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CircleInformationIcon from "../../../components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import CircleCheckIcon from "../../../components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text from "../../../components/Text/native/Text.tsx";
import CircleErrorIcon from "../../../components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import CircleXIcon from "../../../components/Icon/native/redesign/generated/CircleXIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";
import int2hslRaw from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = {
  container: null,
  row: null,
  content: null,
  warningContainer: null,
  infoContainer: null,
  errorContainer: null,
  successContainer: null,
};
createCacheKey = {
  padding: ThemesDefault.space.PX_8,
  borderWidth: 1,
  borderStyle: "solid",
  gap: ThemesDefault.space.PX_8,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { flex: 1, marginLeft: ThemesDefault.space.PX_8 };
let obj2 = { backgroundColor: null, borderColor: null };
obj2[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(ThemesDefault.unsafe_rawColors.YELLOW_300), 0.1);
obj2[1] = ThemesDefault.unsafe_rawColors.YELLOW_300;
createCacheKey[3] = obj2;
let obj3 = { backgroundColor: null, borderColor: null };
obj3[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(ThemesDefault.unsafe_rawColors.BLUE_345), 0.1);
obj3[1] = ThemesDefault.unsafe_rawColors.BLUE_345;
createCacheKey[4] = obj3;
const obj4 = { backgroundColor: null, borderColor: null };
obj4[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(ThemesDefault.unsafe_rawColors.RED_400), 0.1);
obj4[1] = ThemesDefault.unsafe_rawColors.RED_400;
createCacheKey[5] = obj4;
int2hslRaw = { backgroundColor: null, borderColor: null };
int2hslRaw[0] = int2hslRaw.int2rgba(int2hslRaw.hex2int(ThemesDefault.unsafe_rawColors.GREEN_400), 0.1);
int2hslRaw[1] = ThemesDefault.unsafe_rawColors.GREEN_400;
createCacheKey[6] = int2hslRaw;
let closure_6 = createCacheKey.createStyles(createCacheKey);
int2hslRaw = { WARNING: 0, [0]: "WARNING", INFO: 1, [1]: "INFO", ERROR: 2, [2]: "ERROR", SUCCESS: 3, [3]: "SUCCESS" };
let obj1 = { flex: 1, marginLeft: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("design/void/HelpMessage/native/HelpMessage.tsx");

export default function HelpMessage(children) {
  ({ messageType, textVariant } = children);
  if (textVariant === undefined) {
    textVariant = "text-sm/medium";
  }
  let str = children.textColor;
  if (str === undefined) {
    str = "text-default";
  }
  let xs = children.borderRadius;
  if (xs === undefined) {
    xs = ThemesDefault.radii.xs;
  }
  const tmp3 = callback2();
  const items = [tmp3.container, ,];
  if (int2hslRaw.WARNING === messageType) {
    let successContainer = tmp3.warningContainer;
  } else if (tmp6.INFO === messageType) {
    successContainer = tmp3.infoContainer;
  } else if (tmp6.ERROR === messageType) {
    successContainer = tmp3.errorContainer;
  } else if (tmp6.SUCCESS === messageType) {
    successContainer = tmp3.successContainer;
  }
  let obj = { style: items, children: null };
  items[1] = successContainer;
  items[2] = { borderRadius: xs };
  obj = { style: tmp3.row, children: null };
  if (int2hslRaw.WARNING === messageType) {
    obj = { color: null };
    obj[0] = ThemesDefault.unsafe_rawColors.YELLOW_300;
    let tmp7 = callback(CircleErrorIcon.CircleErrorIcon, obj);
  } else if (tmp6.INFO === messageType) {
    obj1 = { color: null };
    obj1[0] = ThemesDefault.unsafe_rawColors.BLUE_345;
    tmp7 = callback(CircleInformationIcon.CircleInformationIcon, obj1);
  } else if (tmp6.ERROR === messageType) {
    const obj2 = { color: null };
    obj2[0] = ThemesDefault.unsafe_rawColors.RED_400;
    tmp7 = callback(CircleXIcon.CircleXIcon, obj2);
  } else if (tmp6.SUCCESS === messageType) {
    const obj3 = { color: null };
    obj3[0] = ThemesDefault.unsafe_rawColors.GREEN_400;
    tmp7 = callback(CircleCheckIcon.CircleCheckIcon, obj3);
  }
  const items1 = [
    tmp7,
    callback(Text.Text, { style: tmp3.content, color: str, variant: textVariant, children: children.children }),
  ];
  obj[1] = items1;
  const items2 = [closure_5(View, obj), children.button];
  obj[1] = items2;
  return closure_5(View, obj);
}
export const HelpMessageTypes = int2hslRaw;
