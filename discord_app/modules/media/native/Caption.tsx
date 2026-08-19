// discord_app/modules/media/native/Caption.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ME from "../../../Constants.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../utils/ColorUtils.tsx";

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
const obj = { fontFamily: ME.Fonts.PRIMARY_BOLD, color: ThemesDefault.colors.WHITE, fontSize: 12 };
obj[0] = obj;
const obj1 = { backgroundColor: null, borderRadius: null, paddingHorizontal: 8, paddingVertical: 2, position: "absolute", right: 6, bottom: 6 };
obj1[0] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_700, 0.5);
obj1[1] = ThemesDefault.radii.xs;
obj[1] = obj1;
let closure_4 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/media/native/Caption.tsx");

export const Caption = function Caption(arg0) {
  ({ label, style, textStyle } = arg0);
  const tmp = callback();
  const items = [tmp.labelContainer, style];
  const items1 = [tmp.captionText, textStyle];
  return <View style={items}>{jsx(Button.LegacyText, { style: items1, children: label })}</View>;
};